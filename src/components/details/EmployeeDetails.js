import React, { PureComponent, PropTypes } from 'react';
import { Form, Button } from 'reactstrap';

import EmployeeModel from '../../models/Employee';
import EditableInput from '../EditableInput';
import ValidableFormField from '../ValidableFormField';


export default class EmployeeDetails extends PureComponent {
  static propTypes = {
    entity: PropTypes.instanceOf(EmployeeModel).isRequired,
    onRemove: PropTypes.func
  };

  render() {
    const { entity } = this.props;

    return (
      <Form>
        <ValidableFormField label="Name">
          <EditableInput value={entity.name} />
        </ValidableFormField>

        <ValidableFormField label="E-mail">
          <EditableInput value={entity.email} />
        </ValidableFormField>

        <Button color="link" onClick={this.props.onRemove}>
          Remove Employee
        </Button>
      </Form>
    );
  }
}
