import React, {createElement} from 'react';
import {connect} from 'react-redux';

import {closeModal} from 'action';

const Modal = ({wrapper: Wrapper = null,
  modals = {},
  isOpen = false,
  current = null,
  parameters = {},
  close}
) => {
  const Component =  isOpen && modals.hasOwnProperty(current)
    ? modals[current]
    : () => (<div/>);
  const WrappedComponent = Wrapper && Component
  ? <Wrapper>
    <Component close={close} {...parameters}/>
  </Wrapper>
  : <Component close={close} {...parameters}/>;
  return WrappedComponent;
};

const mapStateToProps = (state) => ({
  isOpen: state.modal.isOpen,
  current: state.modal.current,
  parameters: state.modal.parameters,
});

const mapDispatchToProps = {
  close: closeModal,
};

Modal.propTypes = {
  wrapper: React.PropTypes.func,
  modals: React.PropTypes.object.isRequired,
  isOpen: React.PropTypes.bool,
  current: React.PropTypes.any,
  parameters: React.PropTypes.object,
  close: React.PropTypes.func.isRequired,
};

export {Modal};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
