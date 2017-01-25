import React, {createElement} from 'react';
import {connect} from 'react-redux';

import {closeModal} from 'action';

const Modal = ({wrapper: Wrapper = null,
  modals = {},
  current = null,
  parameters = {},
  close}
) => {
  const Component =  current !== null && modals.hasOwnProperty(current)
    ? modals[current]
    : () => (<div/>);

  const WrappedComponent = (Wrapper === null)
  ? <Wrapper>
      <Component close={close} {...parameters}/>
    </Wrapper>
  : <Component close={close} {...parameters}/>;
  return WrappedComponent;
};

const mapStateToProps = (state, {reducer = 'modal'}) => ({
  isOpen: state[reducer].isOpen,
  current: state[reducer].current,
  parameters: state[reducer].parameters,
});

const mapDispatchToProps = {
  close: closeModal,
};

Modal.propTypes = {
  wrapper: React.PropTypes.func,
  modals: React.PropTypes.object.isRequired,
  current: React.PropTypes.any,
  parameters: React.PropTypes.object,
  close: React.PropTypes.func.isRequired,
  reducer: React.PropTypes.string,
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
