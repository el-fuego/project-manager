import React, { PureComponent, PropTypes } from 'react';
import { Container, Row, Col } from 'reactstrap';

export default class TwoColumnsLayout extends PureComponent {
  static propTypes = {
    children: PropTypes.arrayOf(PropTypes.element).isRequired
  };

  render() {
    return (
      <Container>
        <Row>
          <Col sm="6">
            {this.props.children[0]}
          </Col>

          <Col sm="6">
            {this.props.children[1]}
          </Col>
        </Row>
      </Container>
    );
  }
}
