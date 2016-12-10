import React, { PureComponent, PropTypes } from 'react';
import { ListGroupItem } from 'reactstrap';

import EmployeeModel from '../../models/Employee';

export default class EmployeeListItem extends PureComponent {
  static propTypes = {
    href: PropTypes.string.isRequired,
    entity: PropTypes.instanceOf(EmployeeModel).isRequired,
    isActive: PropTypes.bool
  };

  static defaultProps = {
    isActive: false
  };

  render() {
    const { href, entity, isActive } = this.props;

    return (
      <ListGroupItem tag="a" action active={isActive} href={href}>
        {entity.name} [{entity.email}]
      </ListGroupItem>
    );
  }
}
