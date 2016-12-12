import React, { PropTypes } from 'react';
import { map, partial } from 'lodash';
import { Button } from 'reactstrap';

import ProjectModel from '../../models/Project';
import EmployeeModel from '../../models/Employee';
import ProjectEmployeeModel from '../../models/ProjectEmployee';
import EditableModel from '../decorators/EditableModel';
import AddNewProjectEmployee from './AddNewProjectEmployee';
import EntityDetails from './_EntityDetails';
import ProjectEmployeeDetails from './ProjectEmployeeDetails';


@EditableModel(ProjectModel)
export default class ProjectDetails extends EntityDetails {
  static propTypes = {
    ...EntityDetails.propTypes,
    entity: PropTypes.instanceOf(ProjectModel).isRequired,
    onRemove: PropTypes.func.isRequired,
    onAddProjectEmployee: PropTypes.func.isRequired,
    onProjectEmployeeFieldSave: PropTypes.func.isRequired,
    projectEmployees: PropTypes.arrayOf(PropTypes.instanceOf(ProjectEmployeeModel)).isRequired,
    employees: PropTypes.arrayOf(PropTypes.instanceOf(EmployeeModel)).isRequired
  };

  get projectEmployees() {
    const { entity, employees, projectEmployees,
      onAddProjectEmployee, onProjectEmployeeFieldSave } = this.props;

    return (
      <section>
        <p><b>Employees on this project:</b></p>

        {map(projectEmployees, projectEmployee =>
          <ProjectEmployeeDetails
            entity={projectEmployee}
            onFieldSave={partial(onProjectEmployeeFieldSave, projectEmployee.id)}
            key={projectEmployee.id} />
        )}

        <AddNewProjectEmployee
          employees={employees}
          entity={{projectId: entity.id}}
          onAdd={onAddProjectEmployee} />
      </section>
    );
  }

  render() {
    const { onRemove } = this.props;

    return (
      <section>
        <p><b>Project details:</b></p>

        {this.renderField('Name', 'name')}
        {this.renderDateField('Start Date', 'startDate')}
        {this.renderDateField('End Date', 'endDate')}

        <Button color="link" onClick={onRemove}>
          Remove Project
        </Button>

        <p />

        {this.projectEmployees}

      </section>
    );
  }
}
