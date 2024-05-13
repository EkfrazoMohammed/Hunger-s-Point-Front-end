import Shipping from "./Shipping";
import ContactInformation1 from "./ContactInformation1";
import "./HeaderInstance.css";
import { useEffect, useState } from "react";
import shippingdetails from  "../assets/shipping-details.svg";
import down from  "../assets/down.svg";
import image from  "../assets/image-6@2x.png";
import Modal from "./Modal";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { BiEdit, BiShow } from 'react-icons/bi';
import { toast } from "react-toastify";
import { API } from "../api/api";
import { useNavigate } from "react-router-dom";

const HeaderInstance = ({onPromoClick}) => {
  const [isVisibleP, setIsVisibleP] = useState(false);
  const [promocode, setPromocode] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);
  const [offerdata, setOfferData] = useState(false);
  // CheckUserOffer(['Registered User','ALL'])
  useEffect(() => {
    const credentials = JSON.parse(localStorage.getItem('credentials'));
    if (credentials){
      CheckUserOffer(['Registered User','ALL'])
    }
  }, []);

  const CheckUserOffer = async (target) => {
    const data = {
      'target':target
    }
    API.getInstance().menu.post(`/api/check-offers`,data)
      .then((res) => {
        console.log(res.data.result.data,'GetUserData======>')
        setOfferData(res.data.result.data)
      })
      .catch((error) => {
      })
      .finally(() => {
      });
      
  }
  const checkofferfuction = () => {
    setIsOpen(true)
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  const handleCopyToClipboard = (inputValue) => {
    const tempInput = document.createElement('input');
    document.body.appendChild(tempInput);
    tempInput.value = inputValue;
    setPromocode(tempInput.value)
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
    setCopySuccess(true);
    setIsOpen(false);
    setTimeout(() => setCopySuccess(false), 2000); // Reset copy success message after 2 seconds
  };

  const handlePromocodeChange = (event) => {
    console.log(event.target.value,'event.target.value')
    setPromocode(event.target.value);
    
  };

  const handleApplyPromocode = () => {
    console.log('Applying promocode:', promocode);
    onPromoClick(promocode)
  };

  const dummyData = [
    {
      id: 1,
      // imageUrl: "https://img.freepik.com/free-vector/flat-design-food-landing-page_23-2149126180.jpg?w=1380&t=st=1713435738~exp=1713436338~hmac=dd39ed933a9dead689672e9f23e99d8a106e21bfcc16b7a6008ae9a98ba30a98",
      imageUrl: "https://placehold.co/920x600",
      title: "Create Account",
      subtitle: "Tell us who you are",
      inputType: "text",
      inputPlaceholder: "Your name",
      copyToClipboard: true // Add this flag to enable copy to clipboard feature
    },
    {
      id: 2,
      imageUrl: "https://placehold.co/920x600",
      title: "Security Info",
      subtitle: "Enter a strong password",
      inputType: "password",
      inputPlaceholder: "Your password",
      copyToClipboard: false // No copy to clipboard feature for this slide
    },
    // {
    //   id: 3,
    //   imageUrl: "https://graphicsfamily.com/wp-content/uploads/edd/2023/05/Website-Food-Banner-Design-1180x664.jpg",
    //   title: "Get Started",
    //   subtitle: "You're all set and ready",
    //   buttonText: "Let's Go"
    // }
  ];

  

  return (
    <>
      <Modal isOpen={isOpen}   onClose={closeModal} width="50%">

        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="category-10"
          centeredSlides={true}
        >

          {offerdata && offerdata.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="category-10" >
                <img src={item.banner_image} alt={`Slide ${item.id}`}  />
                {/* <div style={{fontSize:'16px'}}>{item.title}</div> */}
                {/* <h3>{item.subtitle}</h3> */}
                {item.promo_code ? (
                  <>
                    <div class="shareLink">
                      <div class="permalink">
                        <input class="textLink" type="text" name="shortlink" value={item.promo_code} id="copy-link" readOnly="" />
                        <span onClick={() => handleCopyToClipboard(item.promo_code)} class="copyLink" id="copy" tooltip="Copy to clipboard">
                          <BiEdit style={{ color: 'white', fontSize: '20px' }} />
                        </span>
                      </div>
                    </div>
                  </>
                ) : (
                  <button>{item.promo_code}</button>
                )}


              </div>

            </SwiperSlide>
          ))}
        </Swiper>

      </Modal>



      <div className="header-instance">
        {/* <Shipping propWidth="unset" propAlignSelf="stretch" /> */}
        {/* <ContactInformation1
        contactInformation="Contact Information"
        propAlignSelf="stretch"
        propWidth="unset"
        propMinWidth="114px"
      /> */}
        <div className="payment cursor-pointer"  onClick={() => setIsVisibleP(!isVisibleP)}>
          <div className="shipping-details-container cursor-pointer" onClick={() => setIsVisibleP(!isVisibleP)}>
            <img
              className="shipping-details-icon3"
              alt=""
              src={shippingdetails}
            />
            <div className="payment1" style={{fontFamily:`var(--primary-font-family-bold)`,fontSize:`var(--primary-font-size)`}}>Payment</div>
            <img
              className="down-icon13 cursor-pointer"
              alt=""
              src={down}
              onClick={() => setIsVisibleP(!isVisibleP)}
            />
          </div>
          <div
            className={`${isVisibleP ? "flex gap-[15px]" : "hidden"
              } " w-full flex-col p-5 gap-[15px]"`}
          >
            <div className="divider23" />
            <div className="do-you-have-a-promocode-parent">
              <div className="do-you-have" style={{fontFamily:`var(--primary-font-family)`,fontSize:`var(--primary-font-size-mini)`}}>Do you have a promocode?<span onClick={()=> checkofferfuction()} style={{marginLeft:'10px',color:'rgb(192,34,42)', fontWeight:'bold', cursor: "pointer",fontFamily:`var(--primary-font-family-bold)`}}>check your offer</span></div>
              
              <div className="payment-instance">
                <div className="promocode-apply-frame">
                  <input
                    className="promocode"
                    placeholder="Promocode"
                    type="text"
                    style={{fontFamily:`var(--primary-font-family)`,fontSize:`var(--primary-font-size-mini)`}}
                    value={promocode} // Bind the value to the state
                    onChange={handlePromocodeChange} // Handle change event
                  />
                </div>
                <button className="promocode-apply-frame1" onClick={handleApplyPromocode} >
                  <div className="apply" style={{fontFamily:`var(--primary-font-family-bold)`,fontSize:`var(--primary-font-size-mini)`}}>Apply</div>
                </button>
              </div>
            </div>
            {/* <div className="image-rectangle">
              <img
                className="image-6-icon"
                loading="eager"
                alt=""
                src={image}
              />
            </div> */}
            {/* <div className="edoneil-avvd-zlh-dow-aunsplash10">
              <div className="i-t-e-m-s-quantity-frame1">
                <button className="buttons-states-dark54">
                  <div className="button66">Back</div>
                </button>
                <button className="buttons-states-dark55">
                  <div className="button67">Pay Now</div>
                </button>
              </div>
            </div> */}
          </div>
        </div>
      </div>

    </>

  );
};

export default HeaderInstance;
