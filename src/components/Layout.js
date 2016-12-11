import React, { PureComponent, PropTypes } from 'react';
import { map } from 'lodash';
import { Container, Input, Nav, NavItem, NavLink, Row, Col, TabContent, TabPane } from 'reactstrap';

export default class Layout extends PureComponent {
  static propTypes = {
    tabsData: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      isActive: PropTypes.bool.isRequired,
      href: PropTypes.string.isRequired
    })).isRequired,
    children: PropTypes.element
  };

  renderTab({name, isActive, href}) {
    return (
      <NavItem key={href}>
        <NavLink active={isActive} href={href}>
          {name}
        </NavLink>
      </NavItem>
    );
  }

  render() {
    const { children, tabsData } = this.props;
    return (
      <Container fluid>
        <Row>
          <Col>
            <Input type="search" placeholder="search.." />
          </Col>
        </Row>
        <Row>
          <Col>
            <Nav tabs>
              {map(tabsData, this.renderTab)}
            </Nav>
            <TabContent>
              <TabPane>
                {children}
              </TabPane>
            </TabContent>
          </Col>
        </Row>
      </Container>
    );
  }
}
