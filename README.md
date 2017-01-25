[![Build Status](https://travis-ci.org/alexghenderson/react-redux-basic-modal.svg?branch=develop)](https://travis-ci.org/alexghenderson/react-redux-basic-modal)

# react-redux-basic-modal

Barebones, easy modal module for React/Redux.

This module doesn't do any styling, default dialog definition, or anything along those lines.
You feed it a mapping of ids to React components, and when an open action is dispatched, it will display only that component.

Can be customized by providing a wrapping component that will wrap any component provided in the map, making styling the modal more flexible.

## Usage

```js
import React from 'react';
import {render} from 'react-dom';
import {createStore, combineReducers} from 'redux';
import {combineReducers} from 'react-redux';
import {modalReducer, openModal} from 'react-redux-basic-modal';

/*
 *  Include the modal reducer in the reducers
 */
const reducers = combineReducers({
  modal: modalReducer,
  ...
});

const store = createStore(reducers);

/*
 *  Create the modal map, mapping ids to modal components
 */

const modals = {
  testModal: () => (<div className='modal'> This is a modal! </div>),
};

/*
 *  Include the root modal component somewhere under the redux Provider
 */

render((
  <Provider store={store}>
    <Modal modals={modals}/>
  </Provider>
), document.getElementById('app'));

/*
 *  Dispatch openModal action to display the selected modal
 */

store.dispatch(openModal('testModal'));

 /*
  * Close the active modal by dispatching closeModal
  */

store.dispatch(closeModal());
```

You can optionally provide an object to the openModal call as the second argument
which will be passed as properties to the active modal. Additionally, you can pass
a wrapper element to the root Modal component which will wrap all rendered modals.

Modal components that are rendered will also be passed a closeModal function mapped
to the store, allowing all modals to close themselves without additional connecting.
