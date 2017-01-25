import {combineReducers, createStore} from 'redux';

export const createTestStore = (reducers) => (
  createStore(combineReducers(reducers))
);
