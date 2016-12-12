import React, { PropTypes } from 'react';
import { Form } from 'reactstrap';

import ProjectEmployeeModel from '../../models/ProjectEmployee';
import EditableModel from '../decorators/EditableModel';
import EntityDetails from './_EntityDetails';


@EditableModel(ProjectEmployeeModel)
export default class ProjectEmployeeDetails extends EntityDetails {
  static propTypes = {
    ...EntityDetails.propTypes,
    onFieldSave: PropTypes.func,
    entity: PropTypes.instanceOf(ProjectEmployeeModel).isRequired
  };

  render() {
    return (
      <Form>
        {this.renderField('Role', 'role')}
        {this.renderDateField('Start Date', 'startDate')}
        {this.renderDateField('End Date', 'endDate')}
        <hr />
      </Form>
    );
  }
}
