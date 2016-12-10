import React, { PureComponent, PropTypes } from 'react';
import { ListGroupItem } from 'reactstrap';

import ProjectModel from '../../models/Project';

export default class ProjectListItem extends PureComponent {
  static propTypes = {
    href: PropTypes.string.isRequired,
    project: PropTypes.instanceOf(ProjectModel).isRequired,
    isActive: PropTypes.bool
  };

  static defaultProps = {
    isActive: false
  };

  render() {
    const { href, project, isActive } = this.props;

    return (
      <ListGroupItem tag="a" action active={isActive} href={href}>
        {project.name}
      </ListGroupItem>
    );
  }
}
