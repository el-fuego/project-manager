import React from 'react';
import { Form } from 'reactstrap';

import AddNewEntity from './_AddNewEntity';
import ProjectModel from '../../models/Project';
import EditableModel from '../decorators/EditableModel';


@EditableModel(ProjectModel)
export default class AddNewProject extends AddNewEntity {

  modalTitle = 'New Project';

  get form() {
    return (
      <Form>
        {this.renderField('Project Name', 'name')}
        {this.renderDateField('Start Date', 'startDate')}
        {this.renderDateField('End Date', 'endDate')}
      </Form>
    );
  }
}
