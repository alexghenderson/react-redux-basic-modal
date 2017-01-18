/* global describe it */
import {expect} from 'chai';
import sampleReducer from 'reducer/sample';
import {sample as sampleAction} from 'action/sample';

describe('Sample Reducer', function() {
  let state;

  it('Should Have Empty State', function() {
    state = sampleReducer(state, {type: '@@INIT'});
    expect(state).to.deep.equal({data: []});
  });

  it('Should Handle Empty Sample Action', function() {
    state = sampleReducer(state, sampleAction());
    expect(state).to.deep.equal({data: []});
  });

  it('Should Handle Sample Action With Payload', function() {
    state = sampleReducer(state, sampleAction(4));
    expect(state).to.deep.equal({data: [4]});
    state = sampleReducer(state, sampleAction('Hello'));
    expect(state).to.deep.equal({data: [4, 'Hello']});
  });
});
