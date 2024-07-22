import React from 'react';
import Modal from 'react-modal';
import './coming_soon_popup.css'; // Import the CSS file
import { FaTimes } from 'react-icons/fa'; // Import FontAwesome for the close icon

const ComingSoonPopUp = ({ visible, onClose, children }) => {
  return (
    <Modal
      isOpen={visible}
      onRequestClose={onClose}
      contentLabel="Coming Soon Popup"
      className="popup"
      overlayClassName="popup-container"
      ariaHideApp={false} // Disable app hiding for simplicity in this example
    >
      <div className="popup-content">
        <button className="close-button" onClick={onClose}>
          <FaTimes />
        </button>
        {children}
      </div>
    </Modal>
  );
};

export default ComingSoonPopUp;
