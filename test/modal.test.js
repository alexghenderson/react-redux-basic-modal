/* global describe it */
import {expect} from 'chai';
import {createElement} from 'react';
import {render} from 'enzyme';
import TestUtils from 'react-addons-test-utils';

import {Modal} from 'modal';

describe('Modal', function() {
  const close = () => {};
  const modals = {
    test: () => (<span>Testing</span>),
  };

  it('should render without error', function() {
    expect(() => (
      TestUtils.renderIntoDocument(
        <Modal modals={modals} close={close}/>
      )
    )).to.not.throw();
  });

  it('should render nothing when none are selected', function() {
    const wrapper = render(
      <Modal modals={modals} close={close}/>
    );
    expect(wrapper.html()).to.equal('<div></div>');
  });

  it('should render selected modal', function() {
    const wrapper = render(
      <Modal modals={modals} close={close} current={'test'} isOpen/>
    );
    expect(wrapper.html()).to.equal('<span>Testing</span>');
  });

  it('should render with wrapper', function() {
    const wrapComponent = ({children}) => (<div>{children}</div>);
    const wrapper = render(
      <Modal
        modals={modals}
        close={close}
        current={'test'}
        wrapper={wrapComponent}
        isOpen
      />
    );
    expect(wrapper.html()).to.equal('<div><span>Testing</span></div>');
  });
});
