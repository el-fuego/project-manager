import React, { PropTypes, PureComponent } from 'react';
import autobind from 'autobind';

export default class EntityDetails extends PureComponent {
  static propTypes = {
    updateEntity: PropTypes.func.isRequired,
    entity: PropTypes.object.isRequired
  };

  @autobind
  updateProject(data) {
    const { entity: { id }, updateEntity } = this.props;
    updateEntity({
      ...data,
      id
    });
  }

  render() {
    if (!this.props.entity) {
      return null;
    }
    return this.content;
  }
}
