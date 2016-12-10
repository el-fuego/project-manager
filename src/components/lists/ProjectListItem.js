import React, { PureComponent, PropTypes } from 'react';
import { ListGroupItem } from 'reactstrap';

import ProjectModel from '../../models/Project';

export default class ProjectListItem extends PureComponent {
  static propTypes = {
    href: PropTypes.string.isRequired,
    entity: PropTypes.instanceOf(ProjectModel).isRequired,
    isActive: PropTypes.bool
  };

  static defaultProps = {
    isActive: false
  };

  render() {
    const { href, entity, isActive } = this.props;

    return (
      <ListGroupItem tag="a" action active={isActive} href={href}>
        {entity.name}
        <hr />
        {entity.startDate} - {entity.endDate}
      </ListGroupItem>
    );
  }
}
