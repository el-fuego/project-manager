import React, { PureComponent, PropTypes } from 'react';
import { partial } from 'lodash';
import autobind from 'autobind';
import { ListGroup, ListGroupItem, Form, FormGroup, Label, Input } from 'reactstrap';

import NewEntityModal from '../NewEntityModal';
import ProjectModel from '../../models/Project';

export default class ProjectList extends PureComponent {
  static propTypes = {
    children: PropTypes.arrayOf(PropTypes.element).isRequired,
    onAddNew: PropTypes.func.isRequired
  };

  state = {
    isAddNewModalOpen: false,
    newModel: new ProjectModel()
  };

  @autobind
  openAddNewModal() {
    this.setState({
      isAddNewModalOpen: true
    });
  }

  @autobind
  closeAddNewModal() {
    this.setState({
      newModel: new ProjectModel(),
      isAddNewModalOpen: false
    });
  }

  @autobind
  updateNewModelField(fiendName, event) {
    this.state.newModel[fiendName] = event.target.value;
  }

  @autobind
  addNew() {
    this.props.onAddNew(this.state.newModel);
    this.closeAddNewModal();
  }

  render() {
    const { children } = this.props;
    const { isAddNewModalOpen } = this.state;

    return (
      <ListGroup>
        {children}

        <ListGroupItem tag="button" action onClick={this.openAddNewModal}>
          + Add new
        </ListGroupItem>

        <NewEntityModal
          title="New Project"
          isOpen={isAddNewModalOpen}
          onSave={this.addNew}
          onClose={this.closeAddNewModal}>

          <Form>
            <FormGroup>
              <Label>Name</Label>
              <Input type="text" onChange={partial(this.updateNewModelField, 'name')} />
            </FormGroup>
          </Form>

        </NewEntityModal>
      </ListGroup>
    );
  }
}
