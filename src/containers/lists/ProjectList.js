import React, { PropTypes } from 'react';
import { map, pick, values } from 'lodash';
import { ListGroup } from 'reactstrap';
import autobind from 'autobind';
import { connect } from 'react-redux';

import AddNewProject from '../../components/lists/AddNewProject';
import ListItem from '../../components/lists/ListItem';

import ProjectModel from '../../models/Project';
import {
  listProjects as listEntities,
  createProject as createEntity
} from '../../actions/projects';
import { PATHS } from '../../core/routes';

import EntityList from './_EntityList';


@connect(state => ({
  entities: values(pick(state.projectsById, state.projectIds))
}), {
  listEntities,
  createEntity
})
export default class ProjectList extends EntityList {
  static propTypes = {
    ...EntityList.propTypes,
    entities: PropTypes.arrayOf(PropTypes.instanceOf(ProjectModel)).isRequired
  };

  @autobind
  renderListItem(entity) {
    const { createHref, isActive } = this.context.router;
    const href = createHref(`${PATHS.PROJECTS}/${entity.id}`);

    return (
      <ListItem entity={entity} isActive={isActive(href, true)} href={href} key={entity.id} />
    );
  }

  get content() {
    return (
      <ListGroup>
        {map(this.props.entities, this.renderListItem)}
        <AddNewProject onAdd={this.createEntity} />
      </ListGroup>
    );
  }
}
