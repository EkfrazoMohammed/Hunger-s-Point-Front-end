import React from "react";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Header1 from "../components/Header1";
import ShippingMethodContactInfoF from "../components/ShippingMethodContactInfoF";
import "./CheckoutPayment.css";
import HeaderInstancedp from "../components/HeaderInstancedp";
import Header from "../components/Header";


import shipping  from '../assets/shipping-method.svg'
import down  from '../assets/down.svg'



const DeliveryPartner = () => {
  const navigate = useNavigate();

  const onLogoImageClick = useCallback(() => {
    navigate("/homepage");
  }, [navigate]);

  const onButtonsStatesContainerClick = useCallback(() => {
    navigate("/location");
  }, [navigate]);

  const onShopperNameLabelClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onButtonsStatesDarkClick = useCallback(() => {
    navigate("/homepage1");
  }, [navigate]);

  return (
    <div className="checkoutpayment">
      <div className="delivery3">
        <div className="shipping-method-parent1">
          <img
            className="shipping-method-icon3"
            alt=""
            src={shipping}
          />
          <div className="delivery-partner3">Delivery Partner</div>
          <img className="down-icon3" alt="" src={down} />
        </div>
        <div className="divider6" />
      </div>
      {/* <Header1
        onLogoImageClick={onLogoImageClick}
        onButtonsStatesContainerClick={onButtonsStatesContainerClick}
        onItemQuantityFrameClick={onShopperNameLabelClick}
      /> */}
      {/* <Header /> */}
      <main className="checkout-frame">
        <div className="shipping-frame4">
          <h1 className="checkout3">Checkout</h1>
          <div className="please-enter-your3">
            Please enter your details below to complete your purchase.
          </div>
        </div>
        <div className="buttons-states-dark-button">
          <div className="divider7" />
        </div>
        <section className="user-button-text">
          <HeaderInstancedp />
          <ShippingMethodContactInfoF
            edONeilAvvdZlhDowAUnsplas="/edoneilavvdzlhdowaunsplash-1@2x.png"
            edONeilAvvdZlhDowAUnsplas1="/edoneilavvdzlhdowaunsplash-1-11@2x.png"
            edONeilAvvdZlhDowAUnsplas2="/edoneilavvdzlhdowaunsplash-1-21@2x.png"
            edONeilAvvdZlhDowAUnsplas3="/edoneilavvdzlhdowaunsplash-1-31@2x.png"
            prop="$34.93"
            propOpacity="0.77"
            onButtonsStatesDark8Click={onButtonsStatesDarkClick}
          />
        </section>
      </main>
    </div>
  );
};

export default DeliveryPartner;
