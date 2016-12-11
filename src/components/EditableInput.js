import React, { PureComponent, PropTypes } from 'react';
import { noop, omit } from 'lodash';
import autobind from 'autobind';
import { Input, InputGroup, InputGroupButton } from 'reactstrap';

export default class EditableInput extends PureComponent {
  static propTypes = {
    value: PropTypes.string.isRequired,
    hasError: PropTypes.bool,
    onSave: PropTypes.func
  };

  static defaultProps = {
    onSave: noop
  };

  state = {
    isEdit: false
  };

  @autobind
  onSave() {
    if (this.props.onSave() !== false) {
      this.disableEdit();
    }
  }

  @autobind
  makeEditable() {
    this.setState({ isEdit: true });
  }

  @autobind
  disableEdit() {
    this.setState({ isEdit: false });
  }

  get input() {
    const { value } = this.props;
    const props = omit(this.props, ['value', 'onSave']);
    return (
      <Input type="text" defaultValue={value} {...props} />
    );
  }

  render() {
    const { value } = this.props;

    if (!this.state.isEdit) {
      return (
        <Input static onClick={this.makeEditable}>{value}</Input>
      );
    }

    return (
      <InputGroup>
        {this.input}
        <InputGroupButton color="secondary" onClick={this.disableEdit}>
          Cancel
        </InputGroupButton>
        <InputGroupButton color="primary" disabled={this.props.hasError} onClick={this.onSave}>
          Save
        </InputGroupButton>
      </InputGroup>
    );
  }
}
