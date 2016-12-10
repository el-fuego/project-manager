import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import Details from '../../components/details/ProjectDetails';
import ProjectModel from '../../models/Project';
import { updateProject as updateEntity } from '../../actions/projects';

import EntityDetails from './_EntityDetails';


@connect((state, ownProps) => ({
  entity: state.projectsById[ownProps.params.id]
}), {
  updateEntity
})
export default class ProjectDetails extends EntityDetails {
  static propTypes = {
    ...EntityDetails.propTypes,
    entity: PropTypes.instanceOf(ProjectModel)
  };

  get content() {
    return (
      <Details entity={this.props.entity} />
    );
  }
}
