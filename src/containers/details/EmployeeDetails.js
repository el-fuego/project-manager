import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

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
    entity: PropTypes.instanceOf(EmployeeModel)
  };

  AFTER_REMOVE_PATH = PATHS.EMPLOYEES;

  get content() {
    const { entity } = this.props;
    return (
      <Details
        key={entity.id}
        entity={entity}
        onRemove={this.removeEntity}
        onFieldSave={this.updateEntityFiled} />
    );
  }
}
