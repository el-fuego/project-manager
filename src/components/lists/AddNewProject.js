import React from 'react';
import autobind from 'autobind';
import { partial } from 'lodash';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import DateTime from 'react-datetime';
import styles from 'react-datetime/css/react-datetime.css';

import AddNewEntity from './_AddNewEntity';
import ProjectModel from '../../models/Project';

export default class AddNewProject extends AddNewEntity {
  static propTypes = AddNewEntity.propTypes;

  get emptyModel() {
    return new ProjectModel();
  }

  @autobind
  updateDateField(fieldName, momentValue) {
    this.state.model[fieldName] = typeof momentValue === 'string' ? momentValue : momentValue.format('DD.MM.YYYY');
  }

  modalTitle = 'New Project';

  get form() {
    return (
      <Form>
        <FormGroup>
          <Label>Project Name</Label>
          <Input type="text" onChange={partial(this.updateModelField, 'name')} />
        </FormGroup>
        <FormGroup>
          <Label>Start Date</Label>
          <DateTime
            dateFormat="DD.MM.YYYY"
            timeFormat={false}
            closeOnSelect
            onChange={partial(this.updateDateField, 'startDate')} />
        </FormGroup>
        <FormGroup>
          <Label>End Date</Label>
          <DateTime
            dateFormat="DD.MM.YYYY"
            timeFormat={false}
            closeOnSelect
            onChange={partial(this.updateDateField, 'endDate')} />
        </FormGroup>
      </Form>
    );
  }
}
