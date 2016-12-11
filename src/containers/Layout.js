import React, { PureComponent, PropTypes } from 'react';

import { PATHS } from '../core/routes';
import Layout from '../components/Layout';


export default class LayoutContainer extends PureComponent {
  static propTypes = {
    children: PropTypes.element
  };

  static contextTypes = {
    router: React.PropTypes.object
  };

  get tabsData() {
    const { isActive, createHref } = this.context.router;
    return [
      {
        name: 'Projects',
        href: createHref(PATHS.PROJECTS),
        isActive: isActive(PATHS.PROJECTS)
      },
      {
        name: 'Employees',
        href: createHref(PATHS.EMPLOYEES),
        isActive: isActive(PATHS.EMPLOYEES)
      }
    ];
  }

  render() {
    return (
      <Layout tabsData={this.tabsData}>
        {this.props.children}
      </Layout>
    );
  }
}
