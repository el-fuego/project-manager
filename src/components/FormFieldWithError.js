import React, { PureComponent, PropTypes } from 'react';
import autobind from 'autobind';
import { FormGroup, Label, FormFeedback } from 'reactstrap';

export default class FormField extends PureComponent {
  static propTypes = {
    label: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired,
    error: PropTypes.string,
    touched: PropTypes.bool
  };

  static defaultProps = {
    touched: false
  };

  state = {
    touched: false
  };

  @autobind
  markAsTouched() {
    this.setState({ touched: true });
  }

  get isTouched() {
    return this.state.touched || this.props.touched;
  }

  render() {
    const { label, error, children } = this.props;

    let inputState = '';
    if (this.isTouched && error) {
      inputState = 'danger';
    }

    return (
      <FormGroup color={inputState}>
        <Label>{label}</Label>
        {React.cloneElement(children, {state: inputState, onBlur: this.markAsTouched})}
        <FormFeedback>{this.isTouched && error}</FormFeedback>
      </FormGroup>
    );
  }
}
