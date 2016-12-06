import React, { PureComponent, PropTypes } from 'react';
import classnames from 'classnames';
import { Container, Input, Nav, NavItem, NavLink, Row, Col, TabContent, TabPane } from 'reactstrap';

import { PATHS } from '../core/routes';


export default class Layout extends PureComponent {
  static propTypes = {
    children: PropTypes.element
  };

  static contextTypes = {
    router: React.PropTypes.object
  };

  createTab(path, name) {
    const { isActive, createHref } = this.context.router;
    return (
      <NavItem>
        <NavLink className={classnames({ active: isActive(path)})} href={createHref(path)}>
          {name}
        </NavLink>
      </NavItem>
    );
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col>
            <Input type="search" name="search" placeholder="search.." />
          </Col>
        </Row>
        <Row>
          <Col>
            <Nav tabs>
              {this.createTab(PATHS.PROJECTS, 'Projects')}
              {this.createTab(PATHS.EMPLOYEES, 'Employees')}
            </Nav>
            <TabContent>
              <TabPane>
                {this.props.children}
              </TabPane>
            </TabContent>
          </Col>
        </Row>
      </Container>
    );
  }
}
