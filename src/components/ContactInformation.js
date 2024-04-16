import { useMemo } from "react";
import "./ContactInformation.css";
import profile from '../assets/profile.svg'
import down from '../assets/down.svg'

const ContactInformation = ({
  contactInformation,
  propMinWidth,
  propPadding,
  propPadding1,
}) => {
  const contactInformationStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const deliveryMethodIconStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const taxLabelStyle = useMemo(() => {
    return {
      padding: propPadding1,
    };
  }, [propPadding1]);

  return (
    <div className="contactinformation">
      <div className="item-quantity">
        <img
          className="profile-icon"
          loading="eager"
          alt=""
          src={profile}
        />
        <div className="contact-information" style={contactInformationStyle}>
          {contactInformation}
        </div>
        <img className="down-icon4" alt="" src={down} />
      </div>
      <div className="divider13" />
      <div className="cart-total">
        <div className="ordering-for">Ordering for</div>
        <div className="remove-from-cart-button">
          <button className="font-inter font-bold text-base leading-5 items-center bg-[#C21F24] rounded-md h-[39px] px-3 text-[#fff]">
            <div className="button49">Self</div>
          </button>
          <button className="font-inter font-bold text-base leading-5 items-center border border-[#fff] rounded-md h-[39px] px-3 text-[#fff]">
            <div className="button50">Others</div>
          </button>
        </div>
      </div>
      <div className="delivery-method-icon-wrapper">
        <div className="delivery-method-icon" style={deliveryMethodIconStyle}>
          <div className="contact-detail">Contact detail</div>
          <div className="tax-label" style={taxLabelStyle}>
            <div className="john-smith4">John Smith</div>
            <div className="cart-details-container">+1-613-555-0197</div>
          </div>
        </div>
      </div>
      <div className="divider14" />
      <div className="edoneil-avvd-zlh-dow-aunsplash-wrapper">
        <div className="edoneil-avvd-zlh-dow-aunsplash1">
          <div className="buttons-states-dark39">
            <div className="button51">Cancel</div>
          </div>
          <div className="buttons-states-dark40">
            <div className="button52">Proceed</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInformation;
