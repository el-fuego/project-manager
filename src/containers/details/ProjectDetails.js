import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

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
    entity: PropTypes.instanceOf(ProjectModel)
  };

  AFTER_REMOVE_PATH = PATHS.PROJECTS;

  get content() {
    return (
      <Details
        entity={this.props.entity}
        onRemove={this.removeEntity}
        onFieldSave={this.updateEntityFiled} />
    );
  }
}
