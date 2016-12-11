import React, { PureComponent, PropTypes } from 'react';
import { ListGroupItem } from 'reactstrap';

export default class ListItem extends PureComponent {
  static propTypes = {
    href: PropTypes.string.isRequired,
    entity: React.PropTypes.shape({
      name: React.PropTypes.string
    }).isRequired,
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
      </ListGroupItem>
    );
  }
}
