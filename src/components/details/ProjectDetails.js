import React, { PureComponent, PropTypes } from 'react';
import { Form, Button } from 'reactstrap';

import ProjectModel from '../../models/Project';
import EditableInput from '../EditableInput';
import EditableDateInput from '../EditableDateInput';
import FormFieldWithError from '../FormFieldWithError';


export default class ProjectDetails extends PureComponent {
  static propTypes = {
    entity: PropTypes.instanceOf(ProjectModel).isRequired,
    onRemove: PropTypes.func
  };

  render() {
    const { entity } = this.props;

    return (
      <Form>
        <FormFieldWithError label="Name">
          <EditableInput value={entity.name} />
        </FormFieldWithError>

        <FormFieldWithError label="Start Date">
          <EditableDateInput value={entity.startDate} />
        </FormFieldWithError>

        <FormFieldWithError label="End Date">
          <EditableDateInput value={entity.endDate} />
        </FormFieldWithError>


        <Button color="link" onClick={this.props.onRemove}>
          Remove Project
        </Button>
      </Form>
    );
  }
}
