import { useMemo } from "react";
import "./MyAddressesText.css";
import epback from  "../assets/epback.svg";

const MyAddressesText = ({ propDisplay, onEpbackIconClick }) => {
  const myAddressesStyle = useMemo(() => {
    return {
      display: propDisplay,
    };
  }, [propDisplay]);

  return (
    <div className="my-addresses-text">
      <img
        className="epback-icon2"
        loading="eager"
        alt=""
        src={epback}
        onClick={onEpbackIconClick}
      />
      <h1 className="my-addresses" style={myAddressesStyle}>
        My Addresses
      </h1>
      <div className="address-details">Address details</div>
    </div>
  );
};

export default MyAddressesText;
