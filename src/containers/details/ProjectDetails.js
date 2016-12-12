import React, { PropTypes } from 'react';
import { pick, values } from 'lodash';
import { connect } from 'react-redux';

import Details from '../../components/details/ProjectDetails';
import ProjectModel from '../../models/Project';
import EmployeeModel from '../../models/Employee';
import {
  updateProject as updateEntity,
  removeProject as removeEntity
} from '../../actions/projects';
import { listEmployees } from '../../actions/employees';
import { listProjectEmployees, createProjectEmployee, updateProjectEmployee } from '../../actions/projectEmployees';
import { PATHS } from '../../core/routes';

import EntityDetails from './_EntityDetails';


@connect((state, ownProps) => ({
  entity: state.projectsById[ownProps.params.id],
  projectEmployees: values(pick(state.projectEmployeesById, state.projectEmployeeIds)),
  employees: values(pick(state.employeesById, state.employeeIds))
}), {
  updateEntity,
  removeEntity,
  listProjectEmployees,
  createProjectEmployee,
  updateProjectEmployee,
  listEmployees
})
export default class ProjectDetails extends EntityDetails {
  static propTypes = {
    ...EntityDetails.propTypes,
    entity: PropTypes.instanceOf(ProjectModel),
    listEmployees: PropTypes.func.isRequired,
    createProjectEmployee: PropTypes.func.isRequired,
    employees: PropTypes.arrayOf(PropTypes.instanceOf(EmployeeModel)).isRequired
  };

  AFTER_REMOVE_PATH = PATHS.PROJECTS;

  componentDidMount() {
    this.props.listEmployees();
    this.props.listProjectEmployees();
  }

  get content() {
    const { entity, employees, projectEmployees,
      createProjectEmployee } = this.props; // eslint-disable-line no-shadow

    return (
      <Details
        key={entity.id}
        entity={entity}
        employees={employees}
        projectEmployees={projectEmployees}
        onProjectEmployeeFieldSave={this.updateProjectEmployeeFiled}
        onAddProjectEmployee={createProjectEmployee}
        onRemove={this.removeEntity}
        onFieldSave={this.updateEntityFiled} />
    );
  }
}
