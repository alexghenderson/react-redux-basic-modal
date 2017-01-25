/* global describe it */
import {expect} from 'chai';
import {createElement} from 'react';
import {render} from 'enzyme';
import TestUtils from 'react-addons-test-utils';
import {Provider} from 'react-redux';

import {createTestStore} from './utils';
import {Modal, modalReducer, openModal} from 'index';

const reducers = {modal: modalReducer};

describe('Modal', function() {
  const modals = {
    test: () => (<span>Testing</span>),
    paramTest: ({content}) => (<span>{content}</span>),
  };

  it('should render without error', function() {
    const store = createTestStore(reducers);
    const modal = () => (
      TestUtils.renderIntoDocument(
        <Provider store={store}>
          <Modal modals={modals}/>
        </Provider>
      )
    );
    expect(modal).to.not.throw();
  });

  it('should render nothing when none are selected', function() {
    const store = createTestStore(reducers);
    const wrapper = render(
      <Provider store={store}>
        <Modal modals={modals}/>
      </Provider>
    );
    expect(wrapper.html()).to.equal('<div></div>');
  });

  it('should render selected modal', function() {
    const store = createTestStore(reducers);
    store.dispatch(openModal('test'));
    const wrapper = render(
      <Provider store={store}>
        <Modal modals={modals}/>
      </Provider>
    );
    expect(wrapper.html()).to.equal('<span>Testing</span>');
  });

  it('should render selected modal with parameters', function() {
    const store = createTestStore(reducers);
    store.dispatch(openModal('paramTest', {content: 'Test Content'}));
    const wrapper = render(
      <Provider store={store}>
        <Modal modals={modals}/>
      </Provider>
    );
    expect(wrapper.html()).to.equal('<span>Test Content</span>');
  });

  it('should render with wrapper', function() {
    const store = createTestStore(reducers);
    store.dispatch(openModal('test'));
    const wrapComponent = ({children}) => (<div>{children}</div>);
    const wrapper = render(
      <Provider store={store}>
        <Modal modals={modals} wrapper={wrapComponent}/>
      </Provider>
    );
    expect(wrapper.html()).to.equal('<div><span>Testing</span></div>');
  });
});
