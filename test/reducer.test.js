/* global describe it */
import {expect} from 'chai';
import {openModal, closeModal} from 'action';
import reducer from 'reducer';

const initAction = {type: '@@INIT'};

describe('Modal Reducer Spec', function() {
  it('Should have initial state', function() {
    const state = reducer(undefined, initAction);
    const expected = {
      current: null,
      parameters: {},
      isOpen: false,
    };
    expect(state).to.deep.equal(expected);
  });
  it('Should handle OPEN_MODAL action', function() {
    const action = openModal({modal: 'test', parameters: {test: true}});
    const state = reducer(undefined, action);
    const expected = {
      current: 'test',
      parameters: {
        test: true,
      },
      isOpen: true,
    };
    expect(state).to.deep.equal(expected);
  });
  it('Should handle CLOSE_MODAL action', function() {
    const action = closeModal();
    const state = reducer(undefined, action);
    const expected = {
      current: null,
      parameters: {},
      isOpen: false,
    };
    expect(state).to.deep.equal(expected);
  });
  it('Should handle both OPEN and CLOSE actions sequentially', function() {
    let state = undefined;
    state = reducer(state, openModal({
      modal: 'test',
      parameters: {test: true},
    }));
    expect(state).to.deep.equal({
      current: 'test',
      parameters: {
        test: true,
      },
      isOpen: true,
    });
    state = reducer(state, closeModal());
    expect(state).to.deep.equal({
      current: null,
      parameters: {},
      isOpen: false,
    });
  });
});
