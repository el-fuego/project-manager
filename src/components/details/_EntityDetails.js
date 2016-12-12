import React, { Component, PropTypes } from 'react';
import { partial, noop } from 'lodash';
import autobind from 'autobind';

import EditableInput from '../EditableInput/EditableInput';
import FormFieldWithError from '../FormFieldWithError';
import EditableDateInput from '../EditableDateInput';


export default class EntityDetails extends Component {
  static propTypes = {
    model: PropTypes.object.isRequired,
    onFieldSave: PropTypes.func,
    entity: PropTypes.object.isRequired,
    resetField: PropTypes.func.isRequired,
    updateField: PropTypes.func.isRequired,
    updateDateField: PropTypes.func.isRequired,
    getFirstErrorFor: PropTypes.func.isRequired
  };

  static defaultProps = {
    onFieldSave: noop
  };

  @autobind
  saveField(fieldName) {
    const { onFieldSave, model } = this.props;
    onFieldSave(fieldName, model[fieldName]);
  }

  renderField(label, fieldName) {
    const { model, entity, getFirstErrorFor, updateField, resetField } = this.props;
    const canSave = entity[fieldName] !== model[fieldName];

    return (
      <FormFieldWithError label={label} error={getFirstErrorFor(fieldName)} touched>
        <EditableInput
          value={entity[fieldName]}
          canSave={canSave}
          onChange={partial(updateField, fieldName)}
          onCancel={partial(resetField, fieldName)}
          onSave={partial(this.saveField, fieldName)} />
      </FormFieldWithError>
    );
  }

  renderDateField(label, fieldName) {
    const { model, entity, getFirstErrorFor, updateDateField, resetField } = this.props;
    const canSave = entity[fieldName] !== model[fieldName];

    return (
      <FormFieldWithError label={label} error={getFirstErrorFor(fieldName)} touched>
        <EditableDateInput
          value={entity[fieldName]}
          canSave={canSave}
          onChange={partial(updateDateField, fieldName)}
          onCancel={partial(resetField, fieldName)}
          onSave={partial(this.saveField, fieldName)} />
      </FormFieldWithError>
    );
  }
}
