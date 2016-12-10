import React, { PureComponent, PropTypes } from 'react';
import { FormGroup, Label, Input, FormFeedback } from 'reactstrap';
import autobind from 'autobind';

export default class FormField extends PureComponent {
  static propTypes = {
    label: PropTypes.string.isRequired,
    defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onChange: PropTypes.func,
    error: PropTypes.string
  };

  @autobind
  onChange(event) {
    this.props.onChange(event.target.value);
  }

  render() {
    const { label, defaultValue, error } = this.props;

    let inputState = '';
    if (error) {
      inputState = 'danger';
    }

    return (
      <FormGroup color={inputState}>
        <Label>{label}</Label>
        <Input type="text" defaultValue={defaultValue} state={inputState} onChange={this.onChange} />
        <FormFeedback>{error}</FormFeedback>
      </FormGroup>
    );
  }
}
