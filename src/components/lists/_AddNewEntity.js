import React, { PureComponent, PropTypes } from 'react';
import { partial } from 'lodash';
import autobind from 'autobind';
import { ListGroupItem, Input } from 'reactstrap';
import DateTime from 'react-datetime';
import styles from 'react-datetime/css/react-datetime.css';

import FormFieldWithError from '../FormFieldWithError';
import NewEntityModal from './_NewEntityModal';
import { DATE_FORMAT } from '../../models/_helpers';


export default class AddNewEntity extends PureComponent {
  static propTypes = {
    onAdd: PropTypes.func.isRequired,
    model: PropTypes.object.isRequired,
    hasErrors: PropTypes.bool.isRequired,
    resetModel: PropTypes.func.isRequired,
    updateField: PropTypes.func.isRequired,
    updateDateField: PropTypes.func.isRequired,
    getFirstErrorFor: PropTypes.func.isRequired
  };

  state = {
    isModalOpen: false,
    formTouched: false
  };

  @autobind
  openModal() {
    this.setState({
      isModalOpen: true
    });
  }

  @autobind
  reset() {
    this.setState({
      isModalOpen: false,
      formTouched: false
    });

    this.props.resetModel();
  }

  @autobind
  addModel() {
    const { formTouched } = this.state;
    const { hasErrors, model } = this.props;

    if (hasErrors) {
      if (!formTouched) {
        this.setState({ formTouched: true });
      }
      return;
    }
    this.props.onAdd(model);
    this.reset();
  }

  get modal() {
    const { isModalOpen } = this.state;

    return (
      <NewEntityModal
        title={this.modalTitle}
        isOpen={isModalOpen}
        onSave={this.addModel}
        onClose={this.reset}
        canSave={!this.props.hasErrors}>
        {this.form}
      </NewEntityModal>
    );
  }

  get button() {
    return (
      <ListGroupItem tag="button" color="success" action onClick={this.openModal}>
        + Add new
      </ListGroupItem>
    );
  }

  renderField(label, fieldName) {
    const { formTouched } = this.state;
    const { getFirstErrorFor, updateField } = this.props;

    return (
      <FormFieldWithError label={label} error={getFirstErrorFor(fieldName)} touched={formTouched}>
        <Input type="text" onChange={partial(updateField, fieldName)} />
      </FormFieldWithError>
    );
  }

  renderDateField(label, fieldName) {
    const { formTouched } = this.state;
    const { getFirstErrorFor, updateDateField } = this.props;

    return (
      <FormFieldWithError label={label} error={getFirstErrorFor(fieldName)} touched={formTouched}>
        <DateTime
          dateFormat={DATE_FORMAT}
          timeFormat={false}
          closeOnSelect
          onChange={partial(updateDateField, fieldName)} />
      </FormFieldWithError>
    );
  }

  render() {
    return (
      <section>
        {this.button}
        {this.modal}
      </section>
    );
  }
}
