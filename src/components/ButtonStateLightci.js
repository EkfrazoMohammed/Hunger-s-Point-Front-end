import { useCallback } from "react";
import Shipping from "./Shipping";
import LocationInputFrame from "./LocationInputFrame";
import { useNavigate } from "react-router-dom";
import ContactInformation from "./ContactInformation";
import "./ButtonStateLight.css";
import "./DeliveryDetails.css";
import profile from '../assets/profile.svg'
import down from '../assets/down.svg'
import down2 from '../assets/down-2.svg'

const ButtonStateLightci = () => {
  const navigate = useNavigate();

  const onButtonsStatesDark1Click = useCallback(() => {
    navigate("/checkoutpayment");
  }, [navigate]);

  return (
    <div className="button-state-light">
      <Shipping propWidth="unset" propAlignSelf="stretch" />
      <div className="contactinformation2">
        <div className="edoneil-avvd-zlh-dow-aunsplash8">
          <img
            className="profile-icon2"
            loading="eager"
            alt=""
            src={profile}
          />
          <div className="contact-information2">Contact Information</div>
          <img className="down-icon12" alt="" src={down} />
        </div>
        <div className="divider21" />
        <div className="w-full flex flex-col gap-[15px]">
          <div className="summary6">
            <div className="contact-detail2">Contact detail</div>

            <div className="tax-frame1">
              <div className="input1">
                <div className="input-inner">
                  <input
                    className="frame-child19"
                    placeholder="First Name*"
                    type="text"
                  />
                </div>
              </div>
              <div className="input2">
                <div className="chole-batura-mango-mojito">
                  <input
                    className="delivery-takeaway"
                    placeholder="Last Name*"
                    type="text"
                  />
                </div>
              </div>
            </div>
            <div className="tax-frame2">
              <div className="input3">
                <div className="input-child">
                  <div className="email-address-wrapper">
                    <div className="email-address">
                      <span>Address</span>
                      <span className="span">*</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tax-frame3">
              <div className="dropdown">
                <div className="select-state-parent">
                  <div className="select-state">
                    <span>Select State</span>
                    <span className="span1">*</span>
                  </div>
                  <img className="down-icon6" alt="" src={down2} />
                </div>
              </div>
              <div className="dropdown1">
                <div className="select-state-group">
                  <div className="select-state1">
                    <span>Select City</span>
                    <span className="span2">*</span>
                  </div>
                  <img className="down-icon7" alt="" src={down2} />
                </div>
              </div>
            </div>
            <div className="tax-frame4">
              <div className="input-wrapper">
                <div className="input4">
                  <div className="input-inner1">
                    <div className="email-address-container">
                      <div className="email-address1">
                        <span>Contact Number</span>
                        <span className="span3">*</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="divider22" />
          <div className="contactinformation-inner">
            <div className="buttons-states-dark-parent5">
              <button className="buttons-states-dark51">
                <div className="button63">Cancel</div>
              </button>
              <button
                className="buttons-states-dark52"
                onClick={onButtonsStatesDark1Click}
              >
                <div className="button64">Proceed</div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <ContactInformation
        contactInformation="Payment"
        propMinWidth="50px"
        propPadding="unset"
        propPadding1="unset"
      />
    </div>
  );
};

export default ButtonStateLightci;
