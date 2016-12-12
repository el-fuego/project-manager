import React, { PropTypes } from 'react';
import { partial, map } from 'lodash';
import { Form, Input, Button } from 'reactstrap';

import AddNewEntity from '../lists/_AddNewEntity';
import ProjectEmployeeModel from '../../models/ProjectEmployee';
import EmployeeModel from '../../models/Employee';
import ProjectModel from '../../models/Project';
import FormFieldWithError from '../FormFieldWithError';
import EditableModel from '../decorators/EditableModel';


@EditableModel(ProjectEmployeeModel)
export default class AddNewEmployee extends AddNewEntity {

  static propTypes = {
    ...AddNewEntity.propTypes,
    employees: PropTypes.arrayOf(PropTypes.instanceOf(EmployeeModel)),
    projects: PropTypes.arrayOf(PropTypes.instanceOf(ProjectModel))
  };

  modalTitle = 'New Project Employee';

  renderSelectField(label, fieldName, options) {
    const { formTouched } = this.state;
    const { getFirstErrorFor, updateField } = this.props;

    return (
      <FormFieldWithError label={label} error={getFirstErrorFor(fieldName)} touched={formTouched}>
        <Input type="select" onChange={partial(updateField, fieldName)}>
          {options}
        </Input>
      </FormFieldWithError>
    );
  }

  renderOption({id, name}) {
    return (
      <option value={id} key={id}>
        {name}
      </option>
    );
  }

  get button() {
    return (
      <Button color="success" onClick={this.openModal}>
        + Add new Employee
      </Button>
    );
  }

  get form() {
    const { employees, projects, entity } = this.props;
    return (
      <Form>
        {!entity.projectId && this.renderSelectField('Project', 'projectId', map(projects, this.renderOption))}
        {!entity.employeeId && this.renderSelectField('Employee', 'employeeId', map(employees, this.renderOption))}
        {this.renderField('Employee Role', 'role')}
        {this.renderDateField('Employee Start Date', 'startDate')}
        {this.renderDateField('Employee End Date', 'endDate')}
      </Form>
    );
  }
}
