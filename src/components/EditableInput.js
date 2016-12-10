import React, { PureComponent, PropTypes } from 'react';
import { noop } from 'lodash';
import autobind from 'autobind';
import { Input, InputGroup, InputGroupButton } from 'reactstrap';

export default class EditableInput extends PureComponent {
  static propTypes = {
    value: PropTypes.string.isRequired,
    state: PropTypes.string,
    onChange: PropTypes.func,
    onSave: PropTypes.func
  };

  static defaultProps = {
    onChange: noop,
    onSave: noop
  };

  state = {
    isEdit: false
  };

  @autobind
  onChange(event) {
    this.props.onChange(event.target.value);
  }

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
    const { value, state } = this.props;
    return (
      <Input type="text" defaultValue={value} onChange={this.onChange} state={state} />
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
        <InputGroupButton color="primary" onClick={this.onSave}>
          Save
        </InputGroupButton>
      </InputGroup>
    );
  }
}
