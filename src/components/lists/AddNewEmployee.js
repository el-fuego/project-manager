import React from 'react';
import { Form } from 'reactstrap';

import AddNewEntity from './_AddNewEntity';
import EmployeeModel from '../../models/Employee';
import EditableModel from '../decorators/EditableModel';


@EditableModel(EmployeeModel)
export default class AddNewEmployee extends AddNewEntity {
  modalTitle = 'New Employee';

  get form() {
    return (
      <Form>
        {this.renderField('Employee Name', 'name')}
        {this.renderField('E-mail address', 'email')}
      </Form>
    );
  }
}
