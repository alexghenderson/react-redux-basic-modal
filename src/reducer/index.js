import {MODAL_OPEN, MODAL_CLOSE} from 'action/types';

const initialState = {
  modalId: null,
  parameters: {},
  isOpen: false,
};

const handlers = {
  [MODAL_OPEN]: ({action: {payload: {modalId, parameters = {}}}}) => ({
    modalId: modalId ? modalId : null,
    parameters: parameters,
    isOpen: true,
  }),
  [MODAL_CLOSE]: () => ({
    ...initialState,
  }),
};

const reducer = (state = initialState, {type, payload}) => (
  handlers.hasOwnProperty(type) ? handlers[type](state, {type, payload}) : state
);

export default reducer;
