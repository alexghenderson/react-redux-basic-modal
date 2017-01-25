import {MODAL_OPEN, MODAL_CLOSE} from 'action/types';

export const openModal = (modal, parameters = {}) => ({
  type: MODAL_OPEN,
  payload: {
    modal,
    parameters,
  },
});

export const closeModal = () => ({
  type: MODAL_CLOSE,
  payload: null,
});
