import React, { PureComponent, PropTypes } from 'react';
import { isEqual, isEmpty, first } from 'lodash';
import autobind from 'autobind';
import { ListGroupItem } from 'reactstrap';

import NewEntityModal from './_NewEntityModal';

export default class AddNewEntity extends PureComponent {
  static propTypes = {
    onAdd: PropTypes.func.isRequired
  };

  state = {
    isModalOpen: false,
    model: this.emptyModel,
    errors: this.emptyModel.validate(),
    formTouched: false
  };

  getFirstErrorFor(fieldName) {
    return first(this.state.errors[fieldName]);
  }

  @autobind
  openModal() {
    this.setState({
      isModalOpen: true
    });
  }

  @autobind
  reset() {
    const model = this.emptyModel;
    this.setState({
      model,
      isModalOpen: false,
      errors: model.validate(),
      formTouched: false
    });
  }

  @autobind
  updateModelField(fiendName, event) {
    this.state.model[fiendName] = event.target.value;
    this.validate();
  }

  @autobind
  addModel() {
    const { errors, model, formTouched } = this.state;
    if (!isEmpty(errors)) {
      if (!formTouched) {
        this.setState({ formTouched: true });
      }
      return;
    }
    this.props.onAdd(model);
    this.reset();
  }

  validate() {
    const errors = this.state.model.validate();
    if (!isEqual(errors, this.state.errors)) {
      this.setState({ errors });
    }
  }

  get modal() {
    const { isModalOpen } = this.state;

    return (
      <NewEntityModal
        title={this.modalTitle}
        isOpen={isModalOpen}
        onSave={this.addModel}
        onClose={this.reset}>
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
