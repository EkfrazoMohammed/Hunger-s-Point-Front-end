import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Header1 from "../components/Header1";
import ButtonStateLight from "../components/ButtonStateLight";
import ShippingMethodContactInfoF from "../components/ShippingMethodContactInfoF";
import "./CheckoutContact.css";
import Header from "../components/Header";

import shippingmethod from  "../assets/shipping-method.svg"
import down from  "../assets/down.svg"



const CheckoutContact = () => {
  const navigate = useNavigate();

  const onLogoImageClick = useCallback(() => {
    navigate("/homepage");
  }, [navigate]);

  const onButtonsStatesContainerClick = useCallback(() => {
    navigate("/location");
  }, [navigate]);

  const onComponentinstanceContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="checkoutcontact">
      <div className="delivery2">
        <div className="shipping-method-container">
          <img
            className="shipping-method-icon2"
            alt=""
            src={shippingmethod}
          />
          <div className="delivery-partner2">Delivery Partner</div>
          <img className="down-icon2" alt="" src={down} />
        </div>
        <div className="divider4" />
      </div>
      {/* <Header1
        onLogoImageClick={onLogoImageClick}
        onButtonsStatesContainerClick={onButtonsStatesContainerClick}
        onItemQuantityFrameClick={onComponentinstanceContainerClick}
      /> */}
      {/* <Header /> */}
      <main className="shipping-frame3">
        <div className="basket-node">
          <h1 className="checkout2">Checkout</h1>
          <div className="please-enter-your2">
            Please enter your details below to complete your purchase.
          </div>
        </div>
        <div className="button-node">
          <div className="divider5" />
        </div>
        <section className="button-node1">
          <ButtonStateLight />
          <ShippingMethodContactInfoF
            edONeilAvvdZlhDowAUnsplas="/edoneilavvdzlhdowaunsplash-1@2x.png"
            edONeilAvvdZlhDowAUnsplas1="/edoneilavvdzlhdowaunsplash-1-1@2x.png"
            edONeilAvvdZlhDowAUnsplas2="/edoneilavvdzlhdowaunsplash-1-2@2x.png"
            edONeilAvvdZlhDowAUnsplas3="/edoneilavvdzlhdowaunsplash-1-3@2x.png"
            prop="$24.93"
          />
        </section>
      </main>
    </div>
  );
};

export default CheckoutContact;
