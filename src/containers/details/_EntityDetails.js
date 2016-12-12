import { PropTypes, PureComponent } from 'react';
import { find } from 'lodash';
import autobind from 'autobind';

import ProjectEmployeeModel from '../../models/ProjectEmployee';


export default class EntityDetails extends PureComponent {
  static propTypes = {
    updateEntity: PropTypes.func.isRequired,
    removeEntity: PropTypes.func.isRequired,
    updateProjectEmployee: PropTypes.func.isRequired,
    entity: PropTypes.object.isRequired,
    projectEmployees: PropTypes.arrayOf(PropTypes.instanceOf(ProjectEmployeeModel)).isRequired
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
  updateProjectEmployeeFiled(id, fieldName, data) {
    const { projectEmployees, updateProjectEmployee } = this.props;
    const currentProjectEmployee = find(projectEmployees, { id });

    if (!currentProjectEmployee) {
      return;
    }

    updateProjectEmployee({
      ...currentProjectEmployee,
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
