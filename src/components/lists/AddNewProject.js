import React, { PropTypes } from 'react';
import autobind from 'autobind';
import { partial } from 'lodash';
import { Form, Input } from 'reactstrap';
import DateTime from 'react-datetime';
import styles from 'react-datetime/css/react-datetime.css';

import AddNewEntity from './_AddNewEntity';
import ProjectModel from '../../models/Project';
import { DATE_FORMAT } from '../../models/_helpers';
import FormFieldWithError from '../FormFieldWithError';
import EditableModel from '../decorators/EditableModel';


@EditableModel(ProjectModel)
export default class AddNewProject extends AddNewEntity {
  static propTypes = {
    ...AddNewEntity.propTypes,
    updateField: PropTypes.func.isRequired,
    updateDateField: PropTypes.func.isRequired,
    getFirstErrorFor: PropTypes.func.isRequired
  };

  modalTitle = 'New Project';

  get form() {
    const { formTouched } = this.state;
    const { getFirstErrorFor, updateField, updateDateField } = this.props;

    return (
      <Form>
        <FormFieldWithError label="Project Name" error={getFirstErrorFor('name')} touched={formTouched}>
          <Input type="text" onChange={partial(updateField, 'name')} />
        </FormFieldWithError>
        <FormFieldWithError label="Start Date" error={getFirstErrorFor('startDate')} touched={formTouched}>
          <DateTime
            dateFormat={DATE_FORMAT}
            timeFormat={false}
            closeOnSelect
            onChange={partial(updateDateField, 'startDate')} />
        </FormFieldWithError>
        <FormFieldWithError label="End Date" error={getFirstErrorFor('endDate')} touched={formTouched}>
          <DateTime
            dateFormat={DATE_FORMAT}
            timeFormat={false}
            closeOnSelect
            onChange={partial(updateDateField, 'endDate')} />
        </FormFieldWithError>
      </Form>
    );
  }
}
