import React, { Component, PropTypes } from 'react';
import { partial } from 'lodash';
import { Form, Button } from 'reactstrap';

import ProjectModel from '../../models/Project';
import EditableInput from '../EditableInput';
import EditableDateInput from '../EditableDateInput';
import FormFieldWithError from '../FormFieldWithError';
import EditableModel from '../decorators/EditableModel';
import EntityDetails from './_EntityDetails';


@EditableModel(ProjectModel)
export default class ProjectDetails extends EntityDetails {
  static propTypes = {
    ...EntityDetails.propTypes,
    entity: PropTypes.instanceOf(ProjectModel).isRequired,
    onRemove: PropTypes.func.isRequired,
    resetField: PropTypes.func.isRequired,
    updateField: PropTypes.func.isRequired,
    updateDateField: PropTypes.func.isRequired,
    getFirstErrorFor: PropTypes.func.isRequired
  };

  render() {
    const { model, entity, getFirstErrorFor, updateField,
      updateDateField, resetField, onRemove } = this.props;

    return (
      <Form>
        <FormFieldWithError label="Name" error={getFirstErrorFor('name')} touched>
          <EditableInput
            value={entity.name}
            canSave={entity.email !== model.email}
            onChange={partial(updateField, 'name')}
            onCancel={partial(resetField, 'name')}
            onSave={partial(this.saveField, 'name')} />
        </FormFieldWithError>

        <FormFieldWithError label="Start Date" error={getFirstErrorFor('startDate')} touched>
          <EditableDateInput
            value={entity.startDate}
            canSave={entity.startDate !== model.startDate}
            onChange={partial(updateDateField, 'startDate')}
            onCancel={partial(resetField, 'startDate')}
            onSave={partial(this.saveField, 'startDate')} />
        </FormFieldWithError>

        <FormFieldWithError label="End Date" error={getFirstErrorFor('endDate')} touched>
          <EditableDateInput
            value={entity.endDate}
            canSave={entity.endDate !== model.endDate}
            onChange={partial(updateDateField, 'endDate')}
            onCancel={partial(resetField, 'startDate')}
            onSave={partial(this.saveField, 'endDate')} />
        </FormFieldWithError>


        <Button color="link" onClick={onRemove}>
          Remove Project
        </Button>
      </Form>
    );
  }
}
