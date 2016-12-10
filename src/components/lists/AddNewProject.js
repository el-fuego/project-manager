import React from 'react';
import { partial } from 'lodash';
import { Form, FormGroup, Label, Input } from 'reactstrap';

import AddNewEntity from './_AddNewEntity';
import ProjectModel from '../../models/Project';

export default class AddNewProject extends AddNewEntity {
  static propTypes = AddNewEntity.propTypes;

  get emptyModel() {
    return new ProjectModel();
  }

  modalTitle = 'New Project';

  get form() {
    return (
      <Form>
        <FormGroup>
          <Label>Project Name</Label>
          <Input type="text" onChange={partial(this.updateModelField, 'name')} />
        </FormGroup>
      </Form>
    );
  }
}
