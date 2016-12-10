import React, { PureComponent, PropTypes } from 'react';
import autobind from 'autobind';

import TwoColumnsLayout from '../../components/TwoColumnsLayout';


export default class EntitiesList extends PureComponent {
  static propTypes = {
    children: PropTypes.element,
    listEntities: PropTypes.func.isRequired,
    createEntity: PropTypes.func.isRequired
  };

  static contextTypes = {
    router: React.PropTypes.object
  };

  componentDidMount() {
    this.props.listEntities();
  }

  @autobind
  createEntity(data) {
    this.props.createEntity(data);
  }

  render() {
    // spinner can be here at app with real server or load data delay

    return (
      <TwoColumnsLayout>

        {this.content}
        {this.props.children}

      </TwoColumnsLayout>
    );
  }
}
