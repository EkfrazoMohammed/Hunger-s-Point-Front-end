import { useMemo } from "react";
import "./ShippingMethodContactInfoF.css";
import minus from  "../assets/minus.svg";
import add from  "../assets/add.svg";



const ShippingMethodContactInfoF = ({
  edONeilAvvdZlhDowAUnsplas,
  edONeilAvvdZlhDowAUnsplas1,
  edONeilAvvdZlhDowAUnsplas2,
  edONeilAvvdZlhDowAUnsplas3,
  prop,
  propOpacity,
  onButtonsStatesDark8Click,
}) => {
  const buttonsStatesDarkStyle = useMemo(() => {
    return {
      opacity: propOpacity,
    };
  }, [propOpacity]);

  return (
    <div className="shipping-method-contact-info-f">
      <div className="summary7">
        <div className="cart-details-text-frame">
          <div className="cart-details5">Cart Details</div>
        </div>
        <div className="edoneil-avvd-zlh-dow-aunsplash9">
          <div className="items4">ITEMS</div>
          <div className="quantity6">Quantity</div>
        </div>
        <div className="oreo-shake-frame-parent">
          <div className="oreo-shake-frame1">
            <div className="blank-frame">
              <div className="shipping-details-frame1">
                <button className="profile-frame">
                  <img
                    className="ed-o-neil-avvdzlhdowa-unsplash-icon14"
                    alt=""
                    src={edONeilAvvdZlhDowAUnsplas}
                  />
                </button>
                <div className="country-field">
                  <div className="checkout-button-frame">
                    <b className="chole-batura11">Chole Batura</b>
                  </div>
                  <b className="product-item-frame">$5.99</b>
                </div>
              </div>
              <div className="component-120">
                <div className="minus-wrapper10">
                  <img className="minus-icon14" alt="" src={minus} />
                </div>
                <div className="oreo-shake-component1">1</div>
                <div className="add-wrapper10">
                  <img className="add-icon15" alt="" src={add} />
                </div>
              </div>
            </div>
          </div>
          <div className="oreo-shake-frame2">
            <div className="frame-parent54">
              <button className="ed-o-neil-avvdzlhdowa-unsplash-wrapper8">
                <img
                  className="ed-o-neil-avvdzlhdowa-unsplash-icon15"
                  alt=""
                  src={edONeilAvvdZlhDowAUnsplas1}
                />
              </button>
              <div className="frame-parent55">
                <div className="oreo-shake-wrapper1">
                  <b className="oreo-shake4">Oreo Shake</b>
                </div>
                <b className="summary-frame1">$1.99</b>
              </div>
            </div>
            <div className="component-121">
              <div className="minus-wrapper11">
                <img className="minus-icon15" alt="" src={minus} />
              </div>
              <div className="tax-frame6">1</div>
              <div className="add-wrapper11">
                <img className="add-icon16" alt="" src={add} />
              </div>
            </div>
          </div>
          <div className="oreo-shake-frame3">
            <div className="frame-parent56">
              <div className="frame-parent57">
                <button className="ed-o-neil-avvdzlhdowa-unsplash-wrapper9">
                  <img
                    className="ed-o-neil-avvdzlhdowa-unsplash-icon16"
                    alt=""
                    src={edONeilAvvdZlhDowAUnsplas2}
                  />
                </button>
                <div className="frame-parent58">
                  <div className="mango-mojito-wrapper5">
                    <b className="mango-mojito6">Mango Mojito</b>
                  </div>
                  <b className="b21">$2.99</b>
                </div>
              </div>
              <div className="component-122">
                <div className="minus-wrapper12">
                  <img className="minus-icon16" alt="" src={minus} />
                </div>
                <div className="div23">5</div>
                <div className="add-wrapper12">
                  <img className="add-icon17" alt="" src={add} />
                </div>
              </div>
            </div>
          </div>
          <div className="oreo-shake-frame4">
            <div className="frame-parent59">
              <div className="frame-parent60">
                <div className="ed-o-neil-avvdzlhdowa-unsplash-wrapper10">
                  <img
                    className="ed-o-neil-avvdzlhdowa-unsplash-icon17"
                    alt=""
                    src={edONeilAvvdZlhDowAUnsplas3}
                  />
                </div>
                <div className="frame-parent61">
                  <div className="mango-mojito-wrapper6">
                    <b className="mango-mojito7">Mango Mojito</b>
                  </div>
                  <b className="b22">$2.99</b>
                </div>
              </div>
              <div className="component-123">
                <div className="minus-wrapper13">
                  <img className="minus-icon17" alt="" src={minus} />
                </div>
                <div className="div24">5</div>
                <div className="add-wrapper13">
                  <img className="add-icon18" alt="" src={add} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="summary8">
        <div className="order-summary-text1">
          <h3 className="order-summary1">Order summary</h3>
          <div className="subtotal-text1">
            <div className="tax-text">
              <div className="subtotal1">Subtotal</div>
              <div className="selected-delivery">$27.44</div>
            </div>
            <div className="button-confirm">
              <div className="frame-shipping-details">
                <div className="shipping4">Shipping</div>
                <div className="selected-delivery1">Selected Delivery</div>
              </div>
              <div className="frame-total">$10.00</div>
            </div>
            <div className="tax-text1">
              <div className="tax1">Tax</div>
              <div className="div25">$2.00</div>
            </div>
            <div className="tax-text2">
              <div className="total1">Total</div>
              <div className="div26">{prop}</div>
            </div>
          </div>
          <button
            className="buttons-states-dark53"
            style={buttonsStatesDarkStyle}
            onClick={onButtonsStatesDark8Click}
          >
            <b className="button65">Proceed to Payment</b>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShippingMethodContactInfoF;
