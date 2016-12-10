import React, { PureComponent, PropTypes } from 'react';
import { Form } from 'reactstrap';

import ProjectModel from '../../models/Project';
import EditableInput from '../EditableInput';
import EditableDateInput from '../EditableDateInput';
import ValidableFormField from '../ValidableFormField';


export default class ProjectDetails extends PureComponent {
  static propTypes = {
    entity: PropTypes.instanceOf(ProjectModel).isRequired
  };

  render() {
    const { entity } = this.props;

    return (
      <Form>
        <ValidableFormField label="Name">
          <EditableInput value={entity.name} />
        </ValidableFormField>

        <ValidableFormField label="Start Date">
          <EditableDateInput value={entity.startDate} />
        </ValidableFormField>

        <ValidableFormField label="End Date">
          <EditableDateInput value={entity.endDate} />
        </ValidableFormField>
      </Form>
    );
  }
}
