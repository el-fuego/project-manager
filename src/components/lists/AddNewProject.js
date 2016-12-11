import React from 'react';
import autobind from 'autobind';
import { partial } from 'lodash';
import { Form, Input } from 'reactstrap';
import DateTime from 'react-datetime';
import styles from 'react-datetime/css/react-datetime.css';

import AddNewEntity from './_AddNewEntity';
import ProjectModel from '../../models/Project';
import { DATE_FORMAT } from '../../models/_helpers';
import FormFieldWithError from '../FormFieldWithError';

export default class AddNewProject extends AddNewEntity {
  static propTypes = AddNewEntity.propTypes;

  get emptyModel() {
    return new ProjectModel();
  }

  @autobind
  updateDateField(fieldName, momentValue) {
    this.state.model[fieldName] = typeof momentValue === 'string' ? momentValue : momentValue.format(DATE_FORMAT);
    this.validate();
  }

  modalTitle = 'New Project';

  get form() {
    const { formTouched } = this.state;

    return (
      <Form>
        <FormFieldWithError label="Project Name" error={this.getFirstErrorFor('name')} touched={formTouched}>
          <Input type="text" onChange={partial(this.updateModelField, 'name')} />
        </FormFieldWithError>
        <FormFieldWithError label="Start Date" error={this.getFirstErrorFor('startDate')} touched={formTouched}>
          <DateTime
            dateFormat={DATE_FORMAT}
            timeFormat={false}
            closeOnSelect
            onChange={partial(this.updateDateField, 'startDate')} />
        </FormFieldWithError>
        <FormFieldWithError label="End Date" error={this.getFirstErrorFor('endDate')} touched={formTouched}>
          <DateTime
            dateFormat={DATE_FORMAT}
            timeFormat={false}
            closeOnSelect
            onChange={partial(this.updateDateField, 'endDate')} />
        </FormFieldWithError>
      </Form>
    );
  }
}
