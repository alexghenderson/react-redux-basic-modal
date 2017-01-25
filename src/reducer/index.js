import {MODAL_OPEN, MODAL_CLOSE} from 'action/types';

const initialState = {
  current: null,
  parameters: {},
};

const handlers = {
  [MODAL_OPEN]: (state, {payload: {modal = null, parameters = {}}}) => ({
    current: modal,
    parameters: parameters,
  }),
  [MODAL_CLOSE]: () => ({
    ...initialState,
  }),
};

const reducer = (state = initialState, {type, payload}) => (
  handlers.hasOwnProperty(type) ? handlers[type](state, {type, payload}) : state
);

export default reducer;
