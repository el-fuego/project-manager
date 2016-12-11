import React, { PropTypes } from 'react';
import { partial } from 'lodash';
import { Form, Input } from 'reactstrap';

import AddNewEntity from './_AddNewEntity';
import EmployeeModel from '../../models/Employee';
import FormFieldWithError from '../FormFieldWithError';
import EditableModel from '../decorators/EditableModel';


@EditableModel(EmployeeModel)
export default class AddNewEmployee extends AddNewEntity {
  static propTypes = {
    ...AddNewEntity.propTypes,
    updateField: PropTypes.func.isRequired,
    getFirstErrorFor: PropTypes.func.isRequired
  };

  modalTitle = 'New Employee';

  get form() {
    const { formTouched } = this.state;
    const { getFirstErrorFor, updateField } = this.props;

    return (
      <Form>
        <FormFieldWithError label="Employee Name" error={getFirstErrorFor('name')} touched={formTouched}>
          <Input type="text" onChange={partial(updateField, 'name')} />
        </FormFieldWithError>
        <FormFieldWithError label="E-mail address" error={getFirstErrorFor('email')} touched={formTouched}>
          <Input type="text" onChange={partial(updateField, 'email')} />
        </FormFieldWithError>
      </Form>
    );
  }
}
