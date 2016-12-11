import { Component, PropTypes } from 'react';
import { pick } from 'lodash';
import autobind from 'autobind';


export default class EntityDetails extends Component {
  static propTypes = {
    model: PropTypes.object.isRequired,
    onFieldSave: PropTypes.func.isRequired
  };

  @autobind
  saveField(fieldName) {
    const { onFieldSave, model } = this.props;
    onFieldSave(fieldName, model[fieldName]);
  }
}
