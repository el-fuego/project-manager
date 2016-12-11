import React, { PureComponent, PropTypes } from 'react';
import autobind from 'autobind';
import { ListGroupItem } from 'reactstrap';

import NewEntityModal from './_NewEntityModal';

export default class AddNewEntity extends PureComponent {
  static propTypes = {
    onAdd: PropTypes.func.isRequired
  };

  state = {
    isModalOpen: false,
    model: this.emptyModel
  };

  @autobind
  openModal() {
    this.setState({
      isModalOpen: true
    });
  }

  @autobind
  closeModal() {
    this.setState({
      model: this.emptyModel,
      isModalOpen: false
    });
  }

  @autobind
  updateModelField(fiendName, event) {
    this.state.model[fiendName] = event.target.value;
  }

  @autobind
  addModel() {
    this.props.onAdd(this.state.model);
    this.closeModal();
  }

  get modal() {
    const { isModalOpen } = this.state;

    return (
      <NewEntityModal
        title={this.modalTitle}
        isOpen={isModalOpen}
        onSave={this.addModel}
        onClose={this.closeModal}>
        {this.form}
      </NewEntityModal>
    );
  }

  get button() {
    return (
      <ListGroupItem tag="button" color="success" action onClick={this.openModal}>
        + Add new
      </ListGroupItem>
    );
  }

  render() {
    return (
      <section>
        {this.button}
        {this.modal}
      </section>
    );
  }
}
