import React from 'react';
import { partial } from 'lodash';
import { Form, FormGroup, Label, Input } from 'reactstrap';

import AddNewEntity from './_AddNewEntity';
import EmployeeModel from '../../models/Employee';

export default class AddNewEmployee extends AddNewEntity {
  static propTypes = AddNewEntity.propTypes;

  get emptyModel() {
    return new EmployeeModel();
  }

  modalTitle = 'New Employee';

  get form() {
    return (
      <Form>
        <FormGroup>
          <Label>Employee Name</Label>
          <Input type="text" onChange={partial(this.updateModelField, 'name')} />
        </FormGroup>
      </Form>
    );
  }
}
