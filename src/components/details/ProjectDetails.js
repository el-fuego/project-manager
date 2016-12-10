import React, { PureComponent, PropTypes } from 'react';
import { Form, FormGroup, Label, Col, Input } from 'reactstrap';

import ProjectModel from '../../models/Project';

export default class ProjectDetails extends PureComponent {
  static propTypes = {
    entity: PropTypes.instanceOf(ProjectModel).isRequired
  };

  render() {
    const { entity } = this.props;

    return (
      <Form>
        <FormGroup row>
          <Label sm={6}>Name</Label>
          <Col sm={10}>
            {entity.name}
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label sm={6}>Start Date</Label>
          <Col sm={10}>
            {entity.startDate}
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label sm={6}>End Date</Label>
          <Col sm={10}>
            {entity.endDate}
          </Col>
        </FormGroup>
      </Form>
    );
  }
}
