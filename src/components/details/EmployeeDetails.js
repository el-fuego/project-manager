import React, { Component, PropTypes } from 'react';
import { partial } from 'lodash';
import { Form, Button } from 'reactstrap';

import EmployeeModel from '../../models/Employee';
import EditableInput from '../EditableInput';
import FormFieldWithError from '../FormFieldWithError';
import EditableModel from '../decorators/EditableModel';
import EntityDetails from './_EntityDetails';


@EditableModel(EmployeeModel)
export default class EmployeeDetails extends EntityDetails {
  static propTypes = {
    ...EntityDetails.propTypes,
    entity: PropTypes.instanceOf(EmployeeModel).isRequired,
    onRemove: PropTypes.func.isRequired,
    resetField: PropTypes.func.isRequired,
    updateField: PropTypes.func.isRequired,
    getFirstErrorFor: PropTypes.func.isRequired
  };

  render() {
    const { model, entity, getFirstErrorFor, updateField, resetField, onRemove } = this.props;

    return (
      <Form>
        <FormFieldWithError label="Name" error={getFirstErrorFor('name')} touched>
          <EditableInput
            value={entity.name}
            canSave={entity.name !== model.name}
            onChange={partial(updateField, 'name')}
            onCancel={partial(resetField, 'name')}
            onSave={partial(this.saveField, 'name')} />
        </FormFieldWithError>

        <FormFieldWithError label="E-mail" error={getFirstErrorFor('email')} touched>
          <EditableInput
            value={entity.email}
            canSave={entity.email !== model.email}
            onChange={partial(updateField, 'email')}
            onCancel={partial(resetField, 'email')}
            onSave={partial(this.saveField, 'email')} />
        </FormFieldWithError>

        <Button color="link" onClick={onRemove}>
          Remove Employee
        </Button>
      </Form>
    );
  }
}
