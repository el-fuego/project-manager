import React, { PureComponent, PropTypes } from 'react';
import { Form, Button } from 'reactstrap';

import EmployeeModel from '../../models/Employee';
import EditableInput from '../EditableInput';
import FormFieldWithError from '../FormFieldWithError';


export default class EmployeeDetails extends PureComponent {
  static propTypes = {
    entity: PropTypes.instanceOf(EmployeeModel).isRequired,
    onRemove: PropTypes.func
  };

  render() {
    const { entity } = this.props;

    return (
      <Form>
        <FormFieldWithError label="Name">
          <EditableInput value={entity.name} />
        </FormFieldWithError>

        <FormFieldWithError label="E-mail">
          <EditableInput value={entity.email} />
        </FormFieldWithError>

        <Button color="link" onClick={this.props.onRemove}>
          Remove Employee
        </Button>
      </Form>
    );
  }
}
