import React from 'react';
import { mount } from 'enzyme';

import ListItem from '../../../src/components/lists/ListItem';

/*
 * There is just a test example
 */

const PATH = '/bla-bla';
const ENTITY = {name: 'test'};

describe('<ListItem/>', function () {

  beforeEach(function () {
    this.wrapper = mount(<ListItem entity={ENTITY} href={PATH} />);
  });

  it('should have props for href, entity and isActive', function () {
    expect(this.wrapper.props().href).to.be.defined;
    expect(this.wrapper.props().entity).to.be.defined;
    expect(this.wrapper.props().isActive).to.be.defined;
  });

  it('should have a link with name', function () {
    const links = this.wrapper.find('a');
    expect(links).to.have.length(1);
    expect(links.text()).to.equal(ENTITY.name);
  });

});
