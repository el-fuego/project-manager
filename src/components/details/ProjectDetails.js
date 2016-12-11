import React, { PropTypes } from 'react';
import { partial } from 'lodash';
import { Form, Button } from 'reactstrap';

import ProjectModel from '../../models/Project';
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
    updateDateField: PropTypes.func.isRequired
  };

  renderDateField(label, fieldName) {
    const { model, entity, getFirstErrorFor, updateDateField, resetField } = this.props;
    const canSave = entity[fieldName] !== model[fieldName];

    return (
      <FormFieldWithError label={label} error={getFirstErrorFor(fieldName)} touched>
        <EditableDateInput
          value={entity[fieldName]}
          canSave={canSave}
          onChange={partial(updateDateField, fieldName)}
          onCancel={partial(resetField, fieldName)}
          onSave={partial(this.saveField, fieldName)} />
      </FormFieldWithError>
    );
  }

  render() {
    const { onRemove } = this.props;

    return (
      <Form>
        {this.renderField('Name', 'name')}
        {this.renderDateField('Start Date', 'startDate')}
        {this.renderDateField('End Date', 'endDate')}

        <Button color="link" onClick={onRemove}>
          Remove Project
        </Button>
      </Form>
    );
  }
}
