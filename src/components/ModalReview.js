import React from 'react';
import './ModalReview.css';

const ModalReview = ({ isOpen, onClose, width, children }) => {
  const modalStyle = {
    // width: width || '35%', // Set the width to the passed prop or default to 50%
  };
  
  return (
    <>
      {isOpen && (
        <div className="modal-review-overlay" onClick={onClose}>
          <div className="modal-review-content" style={modalStyle} onClick={(e) => e.stopPropagation()}>
          <span className="close" onClick={onClose}>
              &times;
            </span>
          {/* <div className="modal-review-body" style={{ backgroundImage: `url('https://cdn.vectorstock.com/i/1000x1000/88/12/banner-online-store-special-offer-50-percent-vector-23838812.webp')` }}> */}
            
            <div className="modal-review-body">
              {children}
            </div>
            </div>
          </div>
        // </div>
      )}
    </>
  );
};

export default ModalReview;