/* global describe it */
import {expect} from 'chai';
import {openModal, closeModal} from 'action';
import {MODAL_OPEN, MODAL_CLOSE} from 'action/types';

describe('Open Modal Action Spec', function() {
  it('Should accept no modal parameters', function() {
    const action = openModal({modalId: 'testId'});
    const expected = {
      type: MODAL_OPEN,
      payload: {
        modalId: 'testId',
        parameters: {},
      },
    };
    expect(action).to.deep.equal(expected);
  });
  it('Should accept modal parameters', function() {
    const action = openModal({modalId: 'testId', parameters: {test: true}});
    const expected = {
      type: MODAL_CLOSE,
      payload: {
        modalId: 'testId',
        parameters: {
          test: true,
        },
      },
    };
    expect(action).to.deep.equal(expected);
  });
});

describe('Close Modal Action Spec', function() {
  it('Should require no parameters', function() {
    const action = closeModal();
    const expected = {
      type: MODAL_CLOSE,
      payload: null,
    };
    expect(action).to.deep.equal(expected);
  });

  it('Should ignore parameters', function() {
    const action = closeModal({test: 'parameter'});
    const expected = {
      type: MODAL_CLOSE,
      payload: null,
    };
    expect(action).to.deep.equal(expected);
  });
});
