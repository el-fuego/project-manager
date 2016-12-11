import React, { PureComponent, PropTypes } from 'react';
import { noop, omit } from 'lodash';
import autobind from 'autobind';
import { Input, InputGroup, InputGroupButton } from 'reactstrap';

export default class EditableInput extends PureComponent {
  static propTypes = {
    value: PropTypes.string.isRequired,
    canSave: PropTypes.bool,
    onSave: PropTypes.func,
    onCancel: PropTypes.func
  };

  static defaultProps = {
    onChange: noop,
    onCancel: noop,
    onSave: noop,
    canSave: true
  };

  state = {
    isEdit: false
  };

  @autobind
  onSave() {
    this.props.onSave();
    this.setState({ isEdit: false });
  }

  @autobind
  makeEditable() {
    this.setState({ isEdit: true });
  }

  @autobind
  cancelEdit() {
    this.props.onCancel();

    this.setState({ isEdit: false });
  }

  get input() {
    const { value } = this.props;
    const props = omit(this.props, ['value', 'onSave', 'onCancel', 'canSave']);
    return (
      <Input type="text" defaultValue={value} {...props} />
    );
  }

  render() {
    const { value, canSave } = this.props;

    if (!this.state.isEdit) {
      return (
        <Input static onClick={this.makeEditable}>{value}</Input>
      );
    }

    return (
      <InputGroup>
        {this.input}
        <InputGroupButton color="secondary" onClick={this.cancelEdit}>
          Cancel
        </InputGroupButton>
        <InputGroupButton color="primary" disabled={!canSave} onClick={this.onSave}>
          Save
        </InputGroupButton>
      </InputGroup>
    );
  }
}
