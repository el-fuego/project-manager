import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import autobind from 'autobind';

import Details from '../../components/details/EmployeeDetails';
import EmployeeModel from '../../models/Employee';
import {
  updateEmployee as updateEntity,
  removeEmployee as removeEntity
} from '../../actions/employees';
import { PATHS } from '../../core/routes';

import EntityDetails from './_EntityDetails';


@connect((state, ownProps) => ({
  entity: state.employeesById[ownProps.params.id]
}), {
  updateEntity,
  removeEntity
})
export default class EmployeeDetails extends EntityDetails {
  static propTypes = {
    ...EntityDetails.propTypes,
    removeEntity: PropTypes.func.isRequired,
    entity: PropTypes.instanceOf(EmployeeModel)
  };

  @autobind
  removeEntity() {
    this.props.removeEntity(this.props.entity.id);
    this.context.router.push(PATHS.EMPLOYEES);
  }

  get content() {
    return (
      <Details entity={this.props.entity} onRemove={this.removeEntity} />
    );
  }
}
