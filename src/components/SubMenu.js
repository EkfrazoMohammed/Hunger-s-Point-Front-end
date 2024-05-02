import React, { useRef, useEffect } from 'react';
import { Link } from "react-router-dom";

const SubMenu = ({ isOpen, handleClose, toggleSubMenuRef }) => {
  const submenuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (!toggleSubMenuRef.current.contains(event.target) && !submenuRef.current.contains(event.target)) {
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
      <Link to="events" preventScrollReset={true} onClick={handleClose} >Event</Link>
      <Link to="careers" preventScrollReset={true} onClick={handleClose}  >Careers</Link>
      <Link to="franchise" preventScrollReset={true} onClick={handleClose} >Franchise</Link>
      <Link to="contact-us" preventScrollReset={true} onClick={handleClose} >Contact Us</Link>
      <Link to="ourstory" preventScrollReset={true} onClick={handleClose}  >Our Story</Link>
      <span className='submenu-divider'></span>
      <Link to="location" className=' h-link location-btn ' preventScrollReset={true} onClick={handleClose} >Location</Link>
      <Link to="/productpage?id=1" className=' h-link menu-btn' preventScrollReset={true} onClick={handleClose} >Menu</Link>
    </div >
  )
}

export default SubMenu;