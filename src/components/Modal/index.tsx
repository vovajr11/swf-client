import React from 'react';
import ReactModal from 'react-modal';
import { ReactComponent as CloseIcon } from '../../assets/svg/close-icon.svg';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: '20px 50px',
  },
};

interface IModal {
  isShowing: boolean;
  hide?: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
}

const Modal = ({ isShowing, hide, children }: IModal) => {
  return (
    <div>
      <ReactModal
        isOpen={isShowing}
        onRequestClose={hide}
        ariaHideApp={false}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <button onClick={hide} style={{ position: 'relative', left: '95%' }}>
          <CloseIcon />
        </button>
        {children}
      </ReactModal>
    </div>
  );
};

export default Modal;
