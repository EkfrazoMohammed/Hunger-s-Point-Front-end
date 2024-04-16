import { useMemo } from "react";
import "./ContactInformation1.css";
import down from '../assets/down.svg'
import profile from '../assets/profile.svg'

const ContactInformation1 = ({
  contactInformation,
  propAlignSelf,
  propWidth,
  propMinWidth,
}) => {
  const contactInformation1Style = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      width: propWidth,
    };
  }, [propAlignSelf, propWidth]);

  const contactInformation2Style = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div className="contactinformation1" style={contactInformation1Style}>
      <div className="tax-frame5">
        <img
          className="profile-icon1"
          loading="eager"
          alt=""
          src={profile}
        />
        <div className="contact-information1" style={contactInformation2Style}>
          {contactInformation}
        </div>
        <img className="down-icon8" alt="" src={down} />
      </div>
      <div className="divider16" />
      <div className="quantity4">
        <div className="ordering-for1">Ordering for</div>
        <div className="chole-batura-mango-mojito1">
          <button className="font-inter font-bold text-base leading-5 items-center bg-[#C21F24] rounded-md h-[39px] px-3 text-[#fff]">
            <div className="button55">Self</div>
          </button>
          <button className="font-inter font-bold text-base leading-5 items-center border border-[#fff] rounded-md h-[39px] px-3 text-[#fff]">
            <div className="button56">Others</div>
          </button>
        </div>
      </div>
      <div className="i-t-e-m-s-quantity-frame-wrapper">
        <div className="i-t-e-m-s-quantity-frame">
          <div className="contact-detail1">Contact detail</div>
          <div className="chole-batura-mango-mojito2">
            <div className="john-smith5">John Smith</div>
            <div className="div18">+1-613-555-0197</div>
          </div>
        </div>
      </div>
      <div className="divider17" />
      <div className="tax-frame-text-wrapper">
        <div className="tax-frame-text">
          <button className="font-inter font-bold text-base leading-5 items-center bg-[#C21F24] rounded-md h-[39px] px-3 text-[#fff]">
            <div className="button57">Cancel</div>
          </button>
          <button className="font-inter font-bold text-base leading-5 items-center border border-[#fff] rounded-md h-[39px] px-3 text-[#fff]">
            <div className="button58">Proceed</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactInformation1;
