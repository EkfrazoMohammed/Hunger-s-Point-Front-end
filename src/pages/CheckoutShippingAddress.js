import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Header1 from "../components/Header1";
import DeliveryDetails from "../components/DeliveryDetails";
import "./CheckoutShippingAddress.css";
import Header from "../components/Header";

import shippingmethod from  "../assets/shipping-method.svg"
import down from  "../assets/down.svg"

const CheckoutShippingAddress = () => {
  const navigate = useNavigate();

  const onLogoImageClick = useCallback(() => {
    navigate("/homepage");
  }, [navigate]);

  const onButtonsStatesContainerClick = useCallback(() => {
    navigate("/location");
  }, [navigate]);

  const onItemQuantityFrameClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="checkoutshippingaddress">
      <div className="delivery">
        <div className="shipping-method-parent">
          <img
            className="shipping-method-icon"
            alt=""
            src={shippingmethod}
          />
          <div className="delivery-partner">Delivery Partner</div>
          <img className="down-icon" alt="" src={down} />
        </div>
        <div className="divider" />
      </div>
      {/* <Header1
        onLogoImageClick={onLogoImageClick}
        onButtonsStatesContainerClick={onButtonsStatesContainerClick}
        onItemQuantityFrameClick={onItemQuantityFrameClick}
      /> */}
      {/* <Header /> */}
      <main className="subtotal-frame">
        <div className="tax-frame">
          <h1 className="checkout">Checkout</h1>
          <div className="please-enter-your">
            Please enter your details below to complete your purchase.
          </div>
        </div>
        <div className="delivery-frame">
          <div className="divider1" />
        </div>
        <DeliveryDetails />
      </main>
    </div>
  );
};

export default CheckoutShippingAddress;
