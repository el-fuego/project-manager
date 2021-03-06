import { PropTypes, PureComponent } from 'react';
import autobind from 'autobind';

export default class EntityDetails extends PureComponent {
  static propTypes = {
    updateEntity: PropTypes.func.isRequired,
    removeEntity: PropTypes.func.isRequired,
    entity: PropTypes.object.isRequired
  };

  static contextTypes = {
    router: PropTypes.object
  };

  @autobind
  updateEntityFiled(fieldName, data) {
    const { entity, updateEntity } = this.props;
    updateEntity({
      ...entity,
      [fieldName]: data
    });
  }

  @autobind
  removeEntity() {
    this.props.removeEntity(this.props.entity.id);
    this.context.router.push(this.AFTER_REMOVE_PATH);
  }

  render() {
    if (!this.props.entity) {
      return null;
    }
    return this.content;
  }
}
