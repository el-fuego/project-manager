import React from 'react';
import { partial } from 'lodash';
import { Form, Input } from 'reactstrap';

import AddNewEntity from './_AddNewEntity';
import EmployeeModel from '../../models/Employee';
import FormFieldWithError from '../FormFieldWithError';

export default class AddNewEmployee extends AddNewEntity {
  static propTypes = AddNewEntity.propTypes;

  get emptyModel() {
    return new EmployeeModel();
  }

  modalTitle = 'New Employee';

  get form() {
    return (
      <Form>
        <FormFieldWithError label="Employee Name" error={this.getFirstErrorFor('name')}>
          <Input type="text" onChange={partial(this.updateModelField, 'name')} />
        </FormFieldWithError>
        <FormFieldWithError label="E-mail address" error={this.getFirstErrorFor('email')}>
          <Input type="text" onChange={partial(this.updateModelField, 'email')} />
        </FormFieldWithError>
      </Form>
    );
  }
}
