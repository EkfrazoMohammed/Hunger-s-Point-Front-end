import Shipping from "./Shipping";
import ContactInformation1 from "./ContactInformation1";
import "./HeaderInstance.css";
import DeliveryPartnerIcon from  "../assets/DeliveryPartnerIcon.svg";
import down from  "../assets/down.svg";
import DeliveryPartners from  "../assets/DeliveryPartners.png";



const HeaderInstancedp = () => {
  return (
    <div className="header-instance">
      <Shipping propWidth="unset" propAlignSelf="stretch" />
      <ContactInformation1
        contactInformation="Contact Information"
        propAlignSelf="stretch"
        propWidth="unset"
        propMinWidth="114px"
      />
      <div className="payment">
        <div className="shipping-details-container">
          <img
            className="shipping-details-icon3"
            alt=""
            src={DeliveryPartnerIcon}
          />
          <div className="payment1">Delivery Partner</div>
          <img className="down-icon13" alt="" src={down} />
        </div>
        <div className="divider23" />
        <div className="image-rectangle">
          <img
            className="image-6-icon"
            loading="eager"
            alt=""
            src={DeliveryPartners}
          />
        </div>
        <div className="edoneil-avvd-zlh-dow-aunsplash10">
          <div className="i-t-e-m-s-quantity-frame1">
            <button className="buttons-states-dark54">
              <div className="button66">Cancel</div>
            </button>
            <button className="buttons-states-dark55">
              <div className="button67">Use this Delivery Partners</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderInstancedp;
