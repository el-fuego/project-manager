import React, { PureComponent, PropTypes } from 'react';
import { FormGroup, Label, FormFeedback } from 'reactstrap';

export default class FormField extends PureComponent {
  static propTypes = {
    label: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired,
    error: PropTypes.string
  };

  render() {
    const { label, error, children } = this.props;

    let inputState = '';
    if (error) {
      inputState = 'danger';
    }

    return (
      <FormGroup color={inputState}>
        <Label>{label}</Label>
        {React.cloneElement(children, {state: inputState})}
        <FormFeedback>{error}</FormFeedback>
      </FormGroup>
    );
  }
}
