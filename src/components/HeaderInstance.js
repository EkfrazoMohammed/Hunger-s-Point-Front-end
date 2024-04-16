import Shipping from "./Shipping";
import ContactInformation1 from "./ContactInformation1";
import "./HeaderInstance.css";
import { useState } from "react";
import shippingdetails from  "../assets/shipping-details.svg";
import down from  "../assets/down.svg";
import image from  "../assets/image-6@2x.png";


const HeaderInstance = ({onPromoClick}) => {
  const [isVisibleP, setIsVisibleP] = useState(false);
  const [promocode, setPromocode] = useState('');

  const handlePromocodeChange = (event) => {
    console.log(event.target.value,'event.target.value')
    setPromocode(event.target.value);
    
  };

  const handleApplyPromocode = () => {
    console.log('Applying promocode:', promocode);
    onPromoClick(promocode)
  };

  return (
    <div className="header-instance">
      {/* <Shipping propWidth="unset" propAlignSelf="stretch" /> */}
      {/* <ContactInformation1
        contactInformation="Contact Information"
        propAlignSelf="stretch"
        propWidth="unset"
        propMinWidth="114px"
      /> */}
      <div className="payment">
        <div className="shipping-details-container">
          <img
            className="shipping-details-icon3"
            alt=""
            src={shippingdetails}
          />
          <div className="payment1">Payment</div>
          <img
            className="down-icon13 cursor-pointer"
            alt=""
            src={down}
            onClick={() => setIsVisibleP(!isVisibleP)}
          />
        </div>
        <div
          className={`${
            isVisibleP ? "flex gap-[15px]" : "hidden"
          } " w-full flex-col p-5 gap-[15px]"`}
        >
          <div className="divider23" />
          <div className="do-you-have-a-promocode-parent">
            <div className="do-you-have">Do you have a promocode?</div>
            <div className="payment-instance">
              <div className="promocode-apply-frame">
              <input
                  className="promocode"
                  placeholder="Promocode"
                  type="text"
                  value={promocode} // Bind the value to the state
                  onChange={handlePromocodeChange} // Handle change event
                />
              </div>
              <button className="promocode-apply-frame1" onClick={handleApplyPromocode}>
                <div className="apply">Apply</div>
              </button>
            </div>
          </div>
          <div className="image-rectangle">
            <img
              className="image-6-icon"
              loading="eager"
              alt=""
              src={image}
            />
          </div>
          <div className="edoneil-avvd-zlh-dow-aunsplash10">
            <div className="i-t-e-m-s-quantity-frame1">
              <button className="buttons-states-dark54">
                <div className="button66">Back</div>
              </button>
              <button className="buttons-states-dark55">
                <div className="button67">Pay Now</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderInstance;
