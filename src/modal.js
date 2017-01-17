import React, {createElement} from 'react';
import {connect} from 'react-redux';

import {closeModal} from 'action';

const Modal = ({modals = {},
  isOpen = false,
  modalId = null,
  parameters = {},
  closeModal}) => {
  const Component =  isOpen && modals.hasOwnProperty(modalId)
    ? modals[modalId]
    : null;
  return Component
    ? <Component close={closeModal} parameters={parameters}/>
    : null;
};

const mapStateToProps = (state) => ({
  isOpen: state.modal.isOpen,
  modalId: state.modal.modalId,
  parameters: state.modal.parameters,
});

const mapDispatchToProps = {
  closeModal,
};

Modal.propTypes = {
  modals: React.PropTypes.object.isRequired,
  isOpen: React.PropTypes.bool,
  modalId: React.PropTypes.any,
  parameters: React.PropTypes.object,
  closeModal: React.PropTypes.func.isRequired,
};

export {Modal};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
