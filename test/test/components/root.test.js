/* global describe it */
import '../test-utils';
import {expect} from 'chai';

import {createElement} from 'react';
import {mount} from 'enzyme';

import Root from 'component/root';
import createStore from 'store';

describe('Root Component', function() {
  it('Should Render Without Error', function() {
    const store = createStore();
    const wrapper = mount(<Root store={store}/>);
    expect(wrapper).to.not.be.null;
  });
});
