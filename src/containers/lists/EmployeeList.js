import React, { PropTypes } from 'react';
import { map, pick, values } from 'lodash';
import { ListGroup } from 'reactstrap';
import autobind from 'autobind';
import { connect } from 'react-redux';

import AddNewEmployee from '../../components/lists/AddNewEmployee';
import ListItem from '../../components/lists/EmployeeListItem';

import EmployeeModel from '../../models/Employee';
import {
  listEmployees as listEntities,
  createEmployee as createEntity
} from '../../actions/employees';
import { PATHS } from '../../core/routes';

import EntitiesList from './_EntitiesList';


@connect(state => ({
  entities: values(pick(state.employeesById, state.employeeIds))
}), {
  listEntities,
  createEntity
})
export default class EmployeeList extends EntitiesList {
  static propTypes = {
    ...EntitiesList.propTypes,
    entities: PropTypes.arrayOf(PropTypes.instanceOf(EmployeeModel)).isRequired
  };

  @autobind
  renderListItem(entity) {
    const { createHref, isActive } = this.context.router;
    const href = createHref(`${PATHS.EMPLOYEES}/${entity.id}`);

    return (
      <ListItem entity={entity} isActive={isActive(href, true)} href={href} key={entity.id} />
    );
  }

  get content() {
    return (
      <ListGroup>
        {map(this.props.entities, this.renderListItem)}
        <AddNewEmployee onAdd={this.createEntity} />
      </ListGroup>
    );
  }
}