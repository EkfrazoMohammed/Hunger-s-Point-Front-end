import React, { useRef, useEffect } from 'react';
import { Link } from "react-router-dom";

const SubMenu = ({ isOpen, handleClose }) => {
  const submenuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (submenuRef.current && !submenuRef.current.contains(event.target)) {
        handleClose();
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className={`submenu ${isOpen ? 'open' : ''}`} ref={submenuRef} >
      <Link to="events" onClick={handleClose} >Event</Link>
      <Link to="careers" onClick={handleClose} >Careers</Link>
      <Link to="franchise" onClick={handleClose} >Franchise</Link>
      <Link to="contact-us" onClick={handleClose} >Contact Us</Link>
      <Link to="/" onClick={handleClose} >Our Story</Link>
    </div>
  )
}

export default SubMenu;