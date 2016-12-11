import React, { Component, PropTypes } from 'react';
import { partial } from 'lodash';
import { Form, Button } from 'reactstrap';

import EmployeeModel from '../../models/Employee';
import EditableInput from '../EditableInput';
import FormFieldWithError from '../FormFieldWithError';
import EditableModel from '../decorators/EditableModel';


@EditableModel(EmployeeModel)
export default class EmployeeDetails extends Component {
  static propTypes = {
    entity: PropTypes.instanceOf(EmployeeModel).isRequired,
    onRemove: PropTypes.func,
    updateField: PropTypes.func.isRequired,
    getFirstErrorFor: PropTypes.func.isRequired
  };

  render() {
    const { entity, getFirstErrorFor, updateField } = this.props;

    return (
      <Form>
        <FormFieldWithError label="Name" error={getFirstErrorFor('name')} touched>
          <EditableInput value={entity.name} onChange={partial(updateField, 'name')} />
        </FormFieldWithError>

        <FormFieldWithError label="E-mail" error={getFirstErrorFor('email')} touched>
          <EditableInput value={entity.email} onChange={partial(updateField, 'email')} />
        </FormFieldWithError>

        <Button color="link" onClick={this.props.onRemove}>
          Remove Employee
        </Button>
      </Form>
    );
  }
}
