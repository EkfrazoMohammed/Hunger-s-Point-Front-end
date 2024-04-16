import { useMemo } from "react";
import "./Shipping.css";
import shippingdetails from  "../assets/shipping-details.svg";
import down from  "../assets/down.svg";



const Shipping = ({ propWidth, propAlignSelf }) => {
  const shippingStyle = useMemo(() => {
    return {
      width: propWidth,
      alignSelf: propAlignSelf,
    };
  }, [propWidth, propAlignSelf]);

  return (
    <button className="shipping3" style={shippingStyle}>
      <div className="shippingprofileframe">
        <img
          className="shipping-details-icon2"
          alt=""
          src={shippingdetails}
        />
        <div className="shipping-method2">Shipping Method</div>
        <img className="down-icon11" alt="" src={down} />
      </div>
      <div className="divider20" />
    </button>
  );
};

export default Shipping;
