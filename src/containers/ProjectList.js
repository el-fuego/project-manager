import React, { PureComponent, PropTypes } from 'react';
import { map, pick, values } from 'lodash';
import autobind from 'autobind';
import { connect } from 'react-redux';

import TwoColumnsLayout from '../components/TwoColumnsLayout';
import List from '../components/projects/List';
import ListItem from '../components/projects/ListItem';

import ProjectModel from '../models/Project';
import { listProjects, createProject } from '../actions/projects';
import { PATHS } from '../core/routes';


@connect(state => ({
  projects: values(pick(state.projectsById, state.projectIds))
}), {
  listProjects,
  createProject
})
export default class ProjectList extends PureComponent {
  static propTypes = {
    children: PropTypes.element,
    projects: PropTypes.arrayOf(PropTypes.instanceOf(ProjectModel)).isRequired,
    listProjects: PropTypes.func.isRequired,
    createProject: PropTypes.func.isRequired
  };

  static contextTypes = {
    router: React.PropTypes.object
  };

  componentDidMount() {
    this.props.listProjects();
  }

  @autobind
  createProject(data) {
    this.props.createProject(data);
  }

  @autobind
  renderListItem(project) {
    const { createHref, isActive } = this.context.router;
    const href = createHref(`${PATHS.PROJECTS}/${project.id}`);

    return (
      <ListItem project={project} isActive={isActive(href, true)} href={href} key={project.id} />
    );
  }

  render() {
    // spinner can be here at app with real server or load data delay

    const { children, projects } = this.props;

    return (
      <TwoColumnsLayout>
        <List onAddNew={this.createProject}>
          {map(projects, this.renderListItem)}
        </List>

        {children}

      </TwoColumnsLayout>
    );
  }
}
