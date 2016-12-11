import React, { PropTypes } from 'react';
import { Form, Button } from 'reactstrap';

import EmployeeModel from '../../models/Employee';
import EditableModel from '../decorators/EditableModel';
import EntityDetails from './_EntityDetails';


@EditableModel(EmployeeModel)
export default class EmployeeDetails extends EntityDetails {
  static propTypes = {
    ...EntityDetails.propTypes,
    entity: PropTypes.instanceOf(EmployeeModel).isRequired,
    onRemove: PropTypes.func.isRequired
  };

  render() {
    const { onRemove } = this.props;

    return (
      <Form>
        {this.renderField('Name', 'name')}
        {this.renderField('E-mail', 'email')}

        <Button color="link" onClick={onRemove}>
          Remove Employee
        </Button>
      </Form>
    );
  }
}
