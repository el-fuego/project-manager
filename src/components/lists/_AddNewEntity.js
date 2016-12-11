import React, { PureComponent, PropTypes } from 'react';
import autobind from 'autobind';
import { ListGroupItem } from 'reactstrap';

import NewEntityModal from './_NewEntityModal';


export default class AddNewEntity extends PureComponent {
  static propTypes = {
    onAdd: PropTypes.func.isRequired,
    model: PropTypes.object.isRequired,
    hasErrors: PropTypes.bool.isRequired,
    resetModel: PropTypes.func.isRequired
  };

  state = {
    isModalOpen: false,
    formTouched: false
  };

  @autobind
  openModal() {
    this.setState({
      isModalOpen: true
    });
  }

  @autobind
  reset() {
    this.setState({
      isModalOpen: false,
      formTouched: false
    });

    this.props.resetModel();
  }

  @autobind
  addModel() {
    const { formTouched } = this.state;
    const { hasErrors, model } = this.props;

    if (hasErrors) {
      if (!formTouched) {
        this.setState({ formTouched: true });
      }
      return;
    }
    this.props.onAdd(model);
    this.reset();
  }

  get modal() {
    const { isModalOpen } = this.state;

    return (
      <NewEntityModal
        title={this.modalTitle}
        isOpen={isModalOpen}
        onSave={this.addModel}
        onClose={this.reset}
        canSave={!this.props.hasErrors}>
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
