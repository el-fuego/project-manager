import React, { PureComponent, PropTypes } from 'react';
import { isEqual, first, isEmpty, partial } from 'lodash';
import autobind from 'autobind';

import { DATE_FORMAT } from '../../models/_helpers';


function getFirstErrorFor(errors, fieldName) {
  return first(errors[fieldName]);
}

export default function EditableModelDecorator(Model) {

  return function decorate(DecoratedComponent) {

    // entity can`t be edited elsewhere, so adding performance with PureComponent
    return class EditableModel extends PureComponent {

      static propTypes = {
        entity: PropTypes.object
      };

      static defaultProps = {
        entity: {}
      };

      state = {
        model: new Model(this.props.entity)
      };

      componentWillUpdate(nextProps) {
        if (!isEqual(this.props.entity, nextProps.entity)) {
          this.copyModel(nextProps.entity);
        }
      }

      copyModel(entity) {
        if (!entity) {
          return;
        }

        this.setState({
          model: new Model(entity)
        });
      }

      @autobind
      resetModel() {
        this.copyModel(this.props.entity);
      }

      @autobind
      updateDateField(fieldName, momentValue) {
        const value = typeof momentValue === 'string' ? momentValue : momentValue.format(DATE_FORMAT);

        this.copyModel({
          ...this.state.model,
          [fieldName]: value
        });
      }

      @autobind
      updateField(fieldName, event) {
        this.copyModel({
          ...this.state.model,
          [fieldName]: event.target.value
        });
      }

      @autobind
      resetField(fieldName) {
        this.copyModel({
          ...this.state.model,
          [fieldName]: this.props.entity[fieldName]
        });
      }

      render() {
        const { model } = this.state;
        const errors = model.validate();

        const props = {
          ...this.props,
          model,
          errors,
          hasErrors: !isEmpty(errors),
          resetModel: this.resetModel,
          resetField: this.resetField,
          updateField: this.updateField,
          updateDateField: this.updateDateField,
          getFirstErrorFor: partial(getFirstErrorFor, errors)
        };
        return (
          <DecoratedComponent {...props} />
        );
      }
    };
  };
}
