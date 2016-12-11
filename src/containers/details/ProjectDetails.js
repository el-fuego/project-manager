import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import autobind from 'autobind';

import Details from '../../components/details/ProjectDetails';
import ProjectModel from '../../models/Project';
import {
  updateProject as updateEntity,
  removeProject as removeEntity
} from '../../actions/projects';
import { PATHS } from '../../core/routes';

import EntityDetails from './_EntityDetails';


@connect((state, ownProps) => ({
  entity: state.projectsById[ownProps.params.id]
}), {
  updateEntity,
  removeEntity
})
export default class ProjectDetails extends EntityDetails {
  static propTypes = {
    ...EntityDetails.propTypes,
    removeEntity: PropTypes.func.isRequired,
    entity: PropTypes.instanceOf(ProjectModel)
  };

  @autobind
  removeEntity() {
    this.props.removeEntity(this.props.entity.id);
    this.context.router.push(PATHS.PROJECTS);
  }

  get content() {
    return (
      <Details entity={this.props.entity} onRemove={this.removeEntity} />
    );
  }
}
