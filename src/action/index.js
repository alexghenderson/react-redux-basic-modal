import {MODAL_OPEN, MODAL_CLOSE} from 'action/types';

export const openModal = ({modalId, parameters = {}}) => ({
  type: MODAL_OPEN,
  payload: {
    modalId,
    parameters,
  },
});

export const closeModal = () => ({
  type: MODAL_CLOSE,
  payload: null,
});
