# react-redux-modal

Barebones, easy modal module for React/Redux.

This module doesn't do any styling, default dialog definition, or anything along those lines.
You feed it a mapping of ids to React components, and when an open action is dispatched, it will display only that component.

Can be customized by providing a wrapping component that will wrap any component provided in the map, making styling the modal more flexible.

## Usage

Include the reducer in your combineReducer call:

```js
import modal from 'react-redux-modal';
import {combineReducers} from 'react-redux';

export combineReducers({
  modal,
  ...
})
```

Add the modal component to your application or root component

```js
import React, {createElement} from 'react'
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import Modal from 'react-redux-modal';
import {store} from './store';

const modalMap = {
  testModal: ({message}) => (<div>{message}</div>)
}

render((
  <Provider store={store}>
    <Modal modals={modalMap}/>
  </Provider>
), document.getElementById('app'));
```

Dispatch an open action, and optionally pass parameters:

```js
import {openModal} from 'react-redux-modal';
store.dispatch(openModal({modalId: 'testModal', parameters: {message: 'Hi!'}}));
```

This module will react to the openModal action and render the specified modal.

An unconnected component is also provided if you want to customize either the reducer name, or provide the modal information yourself.

```js
import {UnconnectedModal} from 'react-redux-modal';
```
