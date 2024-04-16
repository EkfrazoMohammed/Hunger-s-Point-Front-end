import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Header1 from "../components/Header1";
import Locationframe from "../components/Locationframe";
import "./CheckoutShippingMethod.css";
import Header from "../components/Header";

import shippingmethod from  "../assets/shipping-method.svg"
import down from  "../assets/down.svg"

import rectangle72 from  "../assets/rectangle-7@2x.png"
import rectangle71 from  "../assets/rectangle-7-1@2x.png"
import rectangle722 from  "../assets//rectangle-7-2@2x.png"
import rectangle8 from  "../assets/rectangle-8@2x.png"

import edoneilavvdzlhdowaunsplash from  "../assets/edoneilavvdzlhdowaunsplash-1@2x.png"
import edoneilavvdzlhdowaunsplash1 from  "../assets/edoneilavvdzlhdowaunsplash-1-1@2x.png"
import edoneilavvdzlhdowaunsplash12 from  "../assets//edoneilavvdzlhdowaunsplash-1-2@2x.png"
import edoneilavvdzlhdowaunsplash13 from  "../assets/edoneilavvdzlhdowaunsplash-1-3@2x.png"


import minus from  "../assets/minus.svg" 
import add from  "../assets//add.svg" 









const CheckoutShippingMethod = () => {
  const navigate = useNavigate();

  const onLogoImageClick = useCallback(() => {
    navigate("/homepage");
  }, [navigate]);

  const onButtonsStatesContainerClick = useCallback(() => {
    navigate("/location");
  }, [navigate]);

  const onSummaryFrameContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onButtonsStatesDarkContainer1Click = useCallback(() => {
    navigate("/checkoutcontact");
  }, [navigate]);

  return (
    <div className="checkoutshippingmethod">
      <div className="delivery1">
        <div className="shipping-method-group">
          <img
            className="shipping-method-icon1"
            alt=""
            src={shippingmethod}
          />
          <div className="delivery-partner1">Delivery Partner</div>
          <img className="down-icon1" alt="" src={down} />
        </div>
        <div className="divider2" />
        <div className="frame-parent16">
          <div className="rectangle-wrapper">
            <img className="rectangle-icon" alt="" src={rectangle72} />
          </div>
          <div className="rectangle-container">
            <img className="frame-child5" alt="" src={rectangle71} />
          </div>
          <div className="rectangle-frame">
            <img className="frame-child6" alt="" src={rectangle722} />
          </div>
          <div className="rectangle-wrapper1">
            <img className="frame-child7" alt="" src={rectangle8}/>
          </div>
        </div>
        <div className="buttons-states-dark-container">
          <div className="buttons-states-dark7">
            <div className="button15">Back</div>
          </div>
          <div
            className="buttons-states-dark8"
            onClick={onButtonsStatesDarkContainer1Click}
          >
            <div className="button16">Use this Delivery Partners</div>
          </div>
        </div>
      </div>
      {/* <Header1
        onLogoImageClick={onLogoImageClick}
        onButtonsStatesContainerClick={onButtonsStatesContainerClick}
        onItemQuantityFrameClick={onSummaryFrameContainerClick}
      /> */}
      {/* <Header /> */}
      <main className="checkoutheader">
        <div className="framelocationselector">
          <h1 className="checkout1">Checkout</h1>
          <div className="please-enter-your1">
            Please enter your details below to complete your purchase.
          </div>
        </div>
        <div className="buttonsstatesdark">
          <div className="divider3" />
        </div>
        <section className="locationframe-parent">
          <Locationframe />
          <div className="summaryframe">
            <div className="summary">
              <div className="itemquantitycomponent">
                <div className="cart-details">Cart Details</div>
              </div>
              <div className="cholebaturamangomojito">
                <div className="items">ITEMS</div>
                <div className="quantity">Quantity</div>
              </div>
              <div className="shipping-details-frame">
                <div className="subtotal-frame1">
                  <div className="items-quantity-frame">
                    <div className="edoneil-avvd-zlh-dow-aunsplash">
                      <button className="chole-batura-frame">
                        <img
                          className="ed-o-neil-avvdzlhdowa-unsplash-icon"
                          alt=""
                          src={edoneilavvdzlhdowaunsplash}
                        />
                      </button>
                      <div className="mango-mojito-frame-parent">
                        <div className="mango-mojito-frame">
                          <b className="chole-batura4">Chole Batura</b>
                        </div>
                        <b className="b6">$5.99</b>
                      </div>
                    </div>
                    <div className="component-14">
                      <div className="minus-wrapper">
                        <img className="minus-icon" alt="" src={minus} />
                      </div>
                      <div className="div4">1</div>
                      <div className="add-wrapper">
                        <img className="add-icon1" alt="" src={add}/>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="subtotal-frame2">
                  <div className="frame-parent17">
                    <button className="ed-o-neil-avvdzlhdowa-unsplash-wrapper">
                      <img
                        className="ed-o-neil-avvdzlhdowa-unsplash-icon1"
                        alt=""
                        src={edoneilavvdzlhdowaunsplash1}
                      />
                    </button>
                    <div className="frame-parent18">
                      <div className="oreo-shake-wrapper">
                        <b className="oreo-shake">Oreo Shake</b>
                      </div>
                      <b className="b7">$1.99</b>
                    </div>
                  </div>
                  <div className="component-15">
                    <div className="minus-container">
                      <img className="minus-icon1" alt="" src={minus} />
                    </div>
                    <div className="cart-details-text">1</div>
                    <div className="add-container">
                      <img className="add-icon2" alt="" src={add} />
                    </div>
                  </div>
                </div>
                <div className="subtotal-frame3">
                  <div className="frame-parent19">
                    <div className="frame-parent20">
                      <button className="ed-o-neil-avvdzlhdowa-unsplash-container">
                        <img
                          className="ed-o-neil-avvdzlhdowa-unsplash-icon2"
                          alt=""
                          src={edoneilavvdzlhdowaunsplash12}
                        />
                      </button>
                      <div className="frame-parent21">
                        <div className="mango-mojito-wrapper">
                          <b className="mango-mojito">Mango Mojito</b>
                        </div>
                        <b className="b8">$2.99</b>
                      </div>
                    </div>
                    <div className="component-16">
                      <div className="minus-frame">
                        <img className="minus-icon2" alt="" src={minus}/>
                      </div>
                      <div className="div5">5</div>
                      <div className="add-frame">
                        <img className="add-icon3" alt="" src={add} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="subtotal-frame4">
                  <div className="frame-parent22">
                    <div className="frame-parent23">
                      <div className="ed-o-neil-avvdzlhdowa-unsplash-frame">
                        <img
                          className="ed-o-neil-avvdzlhdowa-unsplash-icon3"
                          alt=""
                          src={edoneilavvdzlhdowaunsplash13}
                        />
                      </div>
                      <div className="frame-parent24">
                        <div className="mango-mojito-container">
                          <b className="mango-mojito1">Mango Mojito</b>
                        </div>
                        <b className="b9">$2.99</b>
                      </div>
                    </div>
                    <div className="component-17">
                      <div className="minus-wrapper1">
                        <img className="minus-icon3" alt="" src={minus} />
                      </div>
                      <div className="div6">5</div>
                      <div className="add-wrapper1">
                        <img className="add-icon4" alt="" src={add}/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="summary1">
              <div className="order-summary-parent">
                <div className="order-summary">Order summary</div>
                <div className="shipping-frame">
                  <div className="choose-your-method-text">
                    <div className="subtotal">Subtotal</div>
                    <div className="tax-display">$27.44</div>
                  </div>
                  <div className="shipping-frame1">
                    <div className="shipping-frame2">
                      <div className="shipping">Shipping</div>
                      <div className="choose-your-method">
                        Choose your method
                      </div>
                    </div>
                    <div className="total-frame">$0.00</div>
                  </div>
                  <div className="choose-your-method-text1">
                    <div className="tax">Tax</div>
                    <div className="div7">$2.00</div>
                  </div>
                  <div className="choose-your-method-text2">
                    <div className="total">Total</div>
                    <div className="div8">$24.93</div>
                  </div>
                </div>
                <button className="buttons-states-dark9">
                  <b className="button17">Proceed to Payment</b>
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default CheckoutShippingMethod;
