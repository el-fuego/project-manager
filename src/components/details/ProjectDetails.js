import React, { Component, PropTypes } from 'react';
import { partial } from 'lodash';
import { Form, Button } from 'reactstrap';

import ProjectModel from '../../models/Project';
import EditableInput from '../EditableInput';
import EditableDateInput from '../EditableDateInput';
import FormFieldWithError from '../FormFieldWithError';
import EditableModel from '../decorators/EditableModel';


@EditableModel(ProjectModel)
export default class ProjectDetails extends Component {
  static propTypes = {
    entity: PropTypes.instanceOf(ProjectModel).isRequired,
    onRemove: PropTypes.func,
    updateField: PropTypes.func.isRequired,
    updateDateField: PropTypes.func.isRequired,
    getFirstErrorFor: PropTypes.func.isRequired
  };

  render() {
    const { entity, getFirstErrorFor, updateField, updateDateField, onRemove } = this.props;

    return (
      <Form>
        <FormFieldWithError label="Name" error={getFirstErrorFor('name')} touched>
          <EditableInput value={entity.name} onChange={partial(updateField, 'name')} />
        </FormFieldWithError>

        <FormFieldWithError label="Start Date" error={getFirstErrorFor('startDate')} touched>
          <EditableDateInput value={entity.startDate} onChange={partial(updateDateField, 'startDate')} />
        </FormFieldWithError>

        <FormFieldWithError label="End Date" error={getFirstErrorFor('endDate')} touched>
          <EditableDateInput value={entity.endDate} onChange={partial(updateDateField, 'endDate')} />
        </FormFieldWithError>


        <Button color="link" onClick={onRemove}>
          Remove Project
        </Button>
      </Form>
    );
  }
}
