import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import ContactInformation from "./ContactInformation";
import Summary from "./Summary";
import "./DeliveryDetails.css";
import shipping  from '../assets/shipping-details.svg'
import down  from '../assets/down.svg'
import edoneilavvdzlhdowaunsplash  from '../assets/edoneilavvdzlhdowaunsplash-1@2x.png'

import add  from '../assets/add.svg'
import minus  from '../assets/minus.svg'
import edoneilavvdzlhdowaunsplash12  from '../assets/edoneilavvdzlhdowaunsplash-1-1@2x.png'
import edoneilavvdzlhdowaunsplash13  from '../assets/edoneilavvdzlhdowaunsplash-1-3@2x.png'



const DeliveryDetails = () => {
  const navigate = useNavigate();

  const onDeliveryDeliveryFrameClick = useCallback(() => {
    navigate("/checkoutshippingaddress");
  }, [navigate]);

  const onOreoShakeComponentClick = useCallback(() => {
    navigate("/checkoutcontact");
  }, [navigate]);

  return (
    <section className="delivery-details">
      <div className="delivery-option-item">
        <div className="shipping1">
          <div className="shipping-details-parent">
            <img
              className="shipping-details-icon"
              loading="eager"
              alt=""
              src={shipping}
            />
            <div className="shipping-method">Shipping Method</div>
            <img className="down-icon5" alt="" src={down} />
          </div>
          <div className="divider15" />
          <div className="delivery-takeaway-frame-wrapper">
            <div className="delivery-takeaway-frame">
              <div className="delivery-choose-method">
                <div className="delivery-delivery-frame">
                  <div className="delivery4">Delivery</div>
                </div>
                <input
                  className="delivery-delivery-frame1"
                  placeholder="Takeaway"
                  type="text"
                  onClick={onDeliveryDeliveryFrameClick}
                />
              </div>
              <div className="edoneil-avvd-zlh-dow-aunsplash2" />
            </div>
          </div>
          <div className="w-full gap-4 flex flex-col">
            <div className="tax-frame1">
              <div className="input1 w-full">
                <input
                  type="text"
                  id="firstName"
                  className="w-full border border-[#929292] rounded-[5px] h-[50px] text-[#909090] bg-transparent p-[10px] font-poppins font-normal text-sm outline-none"
                  placeholder="First Name"
                  required
                />
              </div>
              <div className="input2">
                <input
                  type="text"
                  className="w-full border border-[#929292] rounded-[5px] h-[50px] text-[#909090] bg-transparent p-[10px] font-poppins font-normal text-sm outline-none"
                  placeholder="Last Name"
                  required
                />
              </div>
            </div>
            <div className="tax-frame2">
              <div className="input3">
                <input
                  type="text"
                  className="w-full border border-[#929292] rounded-[5px] h-[50px] text-[#909090] bg-transparent p-[10px] font-poppins font-normal text-sm outline-none"
                  placeholder="Address"
                  required
                />
              </div>
            </div>
            <div className="tax-frame3">
              <select className="w-[50%] border border-[#929292] rounded-[5px] h-[50px] text-[#909090] bg-transparent p-[10px] font-poppins font-normal text-sm outline-none">
                <option selected>Select State</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>
              <select className="w-[50%] border border-[#929292] rounded-[5px] h-[50px] text-[#909090] bg-transparent p-[10px] font-poppins font-normal text-sm outline-none">
                <option selected>Select City</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>
            </div>
            <div className="tax-frame4">
              <div className="input-wrapper">
                <div className="input4">
                  <input
                    type="text"
                    className="w-full border border-[#929292] rounded-[5px] h-[50px] text-[#909090] bg-transparent p-[10px] font-poppins font-normal text-sm outline-none"
                    placeholder="Contact Number"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="component-frame">
              <div
                className="oreo-shake-component"
                onClick={onOreoShakeComponentClick}
              >
                <button className="font-inter font-bold text-base leading-5 items-center border border-[#fff] rounded-md h-[49px] px-3 text-[#fff]">
                  <div className="button53">Back</div>
                </button>
                <button className="font-inter font-bold text-base leading-5 items-center bg-[#C21F24] rounded-md h-[49px] px-3 text-[#fff]">
                  <div className="button54">Use this Address</div>
                </button>
              </div>
            </div>
          </div>
        </div>
        <ContactInformation contactInformation="Contact Information" />
        <ContactInformation
          contactInformation="Payment"
          propMinWidth="50px"
          propPadding="0px 0px 0px"
          propPadding1="0px 0px 0px"
        />
      </div>
      <div className="shipping-details-input">
        <div className="summary4">
          <div className="cart-details2">
            <div className="cart-details3">Cart Details</div>
          </div>
          <div className="f-r-a-m-e">
            <div className="items2">ITEMS</div>
            <div className="quantity3">Quantity</div>
          </div>
          <div className="f-r-a-m-e1">
            <div className="edoneil-avvd-zlh-dow-aunsplash3">
              <div className="frame-parent31">
                <div className="component-parent">
                  <button className="component">
                    <img
                      className="ed-o-neil-avvdzlhdowa-unsplash-icon6"
                      alt=""
                      src={edoneilavvdzlhdowaunsplash}
                    />
                  </button>
                  <div className="frame-parent32">
                    <div className="chole-batura-wrapper">
                      <b className="chole-batura9">Chole Batura</b>
                    </div>
                    <b className="b14">$5.99</b>
                  </div>
                </div>
                <div className="component-112">
                  <div className="minus-wrapper2">
                    <img className="minus-icon6" alt="" src={minus} />
                  </div>
                  <div className="component1">1</div>
                  <div className="add-wrapper2">
                    <img className="add-icon7" alt="" src={add}/>
                  </div>
                </div>
              </div>
            </div>
            <div className="edoneil-avvd-zlh-dow-aunsplash4">
              <div className="frame-parent33">
                <button className="ed-o-neil-avvdzlhdowa-unsplash-wrapper1">
                  <img
                    className="ed-o-neil-avvdzlhdowa-unsplash-icon7"
                    alt=""
                    src={edoneilavvdzlhdowaunsplash12}
                  />
                </button>
                <div className="frame-parent34">
                  <div className="oreo-shake-container">
                    <b className="oreo-shake2">Oreo Shake</b>
                  </div>
                  <b className="f-r-a">$1.99</b>
                </div>
              </div>
              <div className="component-113">
                <div className="minus-wrapper3">
                  <img className="minus-icon7" alt="" src={minus} />
                </div>
                <div className="buttons-group">1</div>
                <div className="add-wrapper3">
                  <img className="add-icon8" alt="" src={add} />
                </div>
              </div>
            </div>
            <div className="edoneil-avvd-zlh-dow-aunsplash5">
              <div className="frame-parent35">
                <div className="frame-parent36">
                  <div className="ed-o-neil-avvdzlhdowa-unsplash-wrapper2">
                    <img
                      className="ed-o-neil-avvdzlhdowa-unsplash-icon8"
                      alt=""
                      src={edoneilavvdzlhdowaunsplash12}
                    />
                  </div>
                  <div className="frame-parent37">
                    <div className="mango-mojito-wrapper1">
                      <b className="mango-mojito2">Mango Mojito</b>
                    </div>
                    <b className="b15">$2.99</b>
                  </div>
                </div>
                <div className="component-114">
                  <div className="minus-wrapper4">
                    <img className="minus-icon8" alt="" src={minus} />
                  </div>
                  <div className="div16">5</div>
                  <div className="add-wrapper4">
                    <img className="add-icon9" alt="" src={add} />
                  </div>
                </div>
              </div>
            </div>
            <div className="edoneil-avvd-zlh-dow-aunsplash6">
              <div className="frame-parent38">
                <div className="frame-parent39">
                  <div className="ed-o-neil-avvdzlhdowa-unsplash-wrapper3">
                    <img
                      className="ed-o-neil-avvdzlhdowa-unsplash-icon9"
                      alt=""
                      src={edoneilavvdzlhdowaunsplash13}
                    />
                  </div>
                  <div className="frame-parent40">
                    <div className="mango-mojito-wrapper2">
                      <b className="mango-mojito3">Mango Mojito</b>
                    </div>
                    <b className="b16">$2.99</b>
                  </div>
                </div>
                <div className="component-115">
                  <div className="minus-wrapper5">
                    <img className="minus-icon9" alt="" src={minus} />
                  </div>
                  <div className="div17">5</div>
                  <div className="add-wrapper5">
                    <img className="add-icon10" alt="" src={add} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Summary
          button="Proceed to Payment"
          propWidth="unset"
          propMinWidth="unset"
          propAlignSelf="stretch"
          propOpacity="0.5"
        />
      </div>
    </section>
  );
};

export default DeliveryDetails;
