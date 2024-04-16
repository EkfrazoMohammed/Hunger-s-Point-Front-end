import { useCallback } from "react";
import HeaderTop from "../components/HeaderTop";
import { useNavigate } from "react-router-dom";
import FrameComponent1 from "../components/FrameComponent1";
import MapPinSection from "../components/MapPinSection";
import VIPContainer from "../components/VIPContainer";
import DarkMode from "../components/DarkMode";
import "./Homepage.css";
import React from "react";
import Header from "../components/Header";
import bowl32x from  "../assets/3@2x.png";
import storelist from  "../assets/store-list@2x.png";
import right1 from  "../assets/right1.svg";
import location11 from  "../assets/location-11.svg";
import call1 from  "../assets/call1.svg";
import rectangle7 from  "../assets/rectangle-7@2x.png";
import rectangle71 from  "../assets/rectangle-7-1@2x.png";
import rectangle72 from  "../assets/rectangle-7-2@2x.png";
import rectangle8 from  "../assets/rectangle-8@2x.png";
import bowl42 from  "../assets/4@2x.png";
import bowl22 from  "../assets/2@2x.png";
import image42 from  "../assets/image-4@2x.png";
import mapping from  "../assets/mappin.svg";
import mapping2 from  "../assets/mappin-2.svg";
import vector891 from  "../assets/vector-891.svg";
import menu from  "../assets/menu.svg";
import basket1 from  "../assets/basket-1.svg";
import {X, Download} from 'lucide-react'

const Homepage = () => {
  const navigate = useNavigate();

  const onFrameWithEllipsesClick = useCallback(() => {
    navigate("/productpage");
  }, [navigate]);

  const onOrderOnlineClick = useCallback(() => {
    navigate("/signin1");
    
  }, [navigate]);

  return (
    <div className="homepage">
     
      {/* <HeaderTop /> */}
      {/* <Header /> */}
      <section className="dark-mode-toggle">
        <div className="header1">
          <div className="ellipses-row">
            <div className="lorem-ipsum-dolor-container">
              <p className="lorem-ipsum-dolor">
                Lorem ipsum dolor sit amet consectetur.
              </p>
              <p className="ante-eget-vel">{`Ante eget vel dis Lorem ipsum dolor `}</p>
              <p className="ante-eget-vel1">Ante eget vel dis</p>
            </div>
            <div className="ellipses-row1">
              <button className="buttons-states-dark10">
                <div className="button18">Order Online Now!</div>
              </button>
            </div>
          </div>
          <div className="animation">
            <div className="map-container-parent">
              <img className="map-container-icon" alt="" src={bowl42} />
              <div className="wrapper-store-list">
                <img
                  className="store-list-icon"
                  alt=""
                  src={storelist}
                />
              </div>
              <img className="map-container-icon1" alt="" src={bowl22} />
              <img
                className="map-container-icon2"
                loading="eager"
                alt=""
                src={bowl32x}
              />
            </div>
            <div className="delivery-info" />
          </div>
        </div>
        <div className="partner-logo-group">
          <div className="buttons-frame" />
          <div className="our-delivery">
            <div className="heading">
              <div className="alberta-box">
                <h1 className="what-we-believe">WHAT WE BELIEVE</h1>
              </div>
              <div className="call-button" />
            </div>
            <h3 className="we-believe-in">
              We believe in produce. Tasty produce. Produce like:
            </h3>
          </div>
          <div className="lorem-ipsum-dolor-container1">
            <p className="lorem-ipsum-dolor1">
              Lorem ipsum dolor sit amet consectetur.
            </p>
            <p className="ante-eget-vel2">{`Ante eget vel dis Lorem ipsum dolor `}</p>
            <p className="ante-eget-vel3">Ante eget vel dis</p>
          </div>
        </div>
      </section>
      <div className="view-all-stores">
        <div className="delivery-partners-logo">
          <div className="heading1">
            <div className="what-we-believe-wrapper">
              <h1 className="what-we-believe1">OUR LOCATIONS</h1>
            </div>
            <div className="heading-child" />
          </div>
          <div className="delivery-partners-logo-inner">
            <div className="view-all-stores-parent">
              <div className="view-all-stores1">View All Stores</div>
              <img
                className="right-icon"
                loading="eager"
                alt=""
                src={right1}
              />
            </div>
          </div>
        </div>
        <div className="map-icon">
          <img className="image-4-icon" alt="" src={image42} />
          <img className="mappin-icon" alt="" src={mapping}/>
          <img className="mappin-icon1" alt="" src={mapping2} />
          <img className="mappin-icon2" alt="" src={mapping} />
          <img className="mappin-icon3" alt="" src={mapping2} />
        </div>
        <div className="dark-mode-toggle1">
          <div
            className="frame-with-ellipses"
            onClick={onFrameWithEllipsesClick}
          >
            <div className="category-2">
              <div className="recieve-updates">
                <div className="instagram-facebook-mail-group">
                  <div className="buttons-states-dark-button-fra">
                    <h1 className="alberta1">Alberta</h1>
                  </div>
                  <div className="location-group">
                    <img
                      className="location-icon1"
                      alt=""
                      src={location11}
                    />
                    <div className="hospital-st-fort">
                      1 Hospital St, Fort McMurrayState, Alberta, T9H 5C1
                    </div>
                  </div>
                  <div className="call-parent">
                    <img
                      className="call-icon"
                      loading="eager"
                      alt=""
                      src={call1}
                    />
                    <div className="div9">(248) 676 7890</div>
                  </div>
                </div>
              </div>
              <img className="category-2-child" alt="" src={vector891} />
              <FrameComponent1 />
              <div className="buttons-states-dark-parent1">
                <button className="buttons-states-dark11">
                  <img className="menu-icon2" alt="" src={menu} />
                  <div className="button19">VIEW MENU</div>
                </button>
                <button
                  className="buttons-states-dark12"
                  onClick={onOrderOnlineClick}
                >
                  <img className="basket-icon1" alt="" src={basket1} />
                  <b className="button20">ORDER ONLINE</b>
                </button>
              </div>
            </div>
          </div>
          <div className="heading-frame">
            <div className="category-21">
              <div className="alberta-frame">
                <div className="location-frame">
                  <div className="alberta-element">
                    <h1 className="alberta2">Location 2</h1>
                  </div>
                  <div className="hospital-st-fort-mc-murray-sta">
                    <img
                      className="location-icon2"
                      alt=""
                      src={location11}
                    />
                    <div className="hospital-st-fort1">
                      1 Hospital St, Fort McMurrayState, Alberta, T9H 5C1
                    </div>
                  </div>
                  <div className="dark-mode-frame">
                    <img className="call-icon1" alt="" src={call1} />
                    <div className="div10">(248) 676 7890</div>
                  </div>
                </div>
              </div>
              <img className="category-2-item" alt="" src={vector891}/>
              <div className="our-delivery-partners-parent">
                <div className="our-delivery-partners">
                  Our Delivery Partners
                </div>
                <div className="frame-parent25">
                  <div className="rectangle-wrapper2">
                    <img
                      className="frame-child8"
                      alt=""
                      src={rectangle7}
                    />
                  </div>
                  <div className="rectangle-wrapper3">
                    <img
                      className="frame-child9"
                      alt=""
                      src={rectangle71}
                    />
                  </div>
                  <div className="rectangle-wrapper4">
                    <img
                      className="frame-child10"
                      alt=""
                      src={rectangle72}
                    />
                  </div>
                  <div className="rectangle-wrapper5">
                    <img
                      className="frame-child11"
                      alt=""
                      src={rectangle8}
                    />
                  </div>
                </div>
              </div>
              <div className="review-section">
                <button className="buttons-states-dark13">
                  <img className="menu-icon3" alt="" src={menu} />
                  <div className="button21">VIEW MENU</div>
                </button>
                <button className="buttons-states-dark14">
                  <img className="basket-icon2" alt="" src={basket1} />
                  <b className="button22">ORDER ONLINE</b>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="dark-mode-toggle2">
          <div className="category-2-wrapper">
            <div className="category-22">
              <div className="category-2-inner">
                <div className="frame-parent26">
                  <div className="alberta-wrapper">
                    <h1 className="alberta3">Location 3</h1>
                  </div>
                  <div className="location-container">
                    <img
                      className="location-icon3"
                      alt=""
                      src={location11}
                    />
                    <div className="hospital-st-fort2">
                      1 Hospital St, Fort McMurrayState, Alberta, T9H 5C1
                    </div>
                  </div>
                  <div className="call-group">
                    <img className="call-icon2" alt="" src={call1} />
                    <div className="div11">(248) 676 7890</div>
                  </div>
                </div>
              </div>
              <img className="vector-icon" alt="" src={vector891} />
              <div className="our-delivery-partners-group">
                <div className="our-delivery-partners1">
                  Our Delivery Partners
                </div>
                <div className="frame-parent27">
                  <div className="rectangle-wrapper6">
                    <img
                      className="frame-child12"
                      alt=""
                      src={rectangle7}
                    />
                  </div>
                  <button className="frame-button">
                    <img
                      className="frame-child13"
                      alt=""
                      src={rectangle71}
                    />
                  </button>
                  <button className="rectangle-wrapper7">
                    <img
                      className="frame-child14"
                      alt=""
                      src={rectangle72}
                    />
                  </button>
                  <div className="rectangle-wrapper8">
                    <img
                      className="frame-child15"
                      alt=""
                      src={rectangle8}
                    />
                  </div>
                </div>
              </div>
              <div className="buttons-states-dark-parent2">
                <button className="buttons-states-dark15">
                  <img className="menu-icon4" alt="" src={menu} />
                  <div className="button23">VIEW MENU</div>
                </button>
                <button className="buttons-states-dark16">
                  <img className="basket-icon3" alt="" src={basket1} />
                  <b className="button24">ORDER ONLINE</b>
                </button>
              </div>
            </div>
          </div>
          <div className="category-2-container">
            <div className="category-23">
              <div className="category-2-inner1">
                <div className="frame-parent28">
                  <div className="alberta-container">
                    <h1 className="alberta4">Location 4</h1>
                  </div>
                  <div className="location-parent1">
                    <img
                      className="location-icon4"
                      alt=""
                      src={location11}
                    />
                    <div className="hospital-st-fort3">
                      1 Hospital St, Fort McMurrayState, Alberta, T9H 5C1
                    </div>
                  </div>
                  <div className="call-container">
                    <img className="call-icon3" alt="" src={call1} />
                    <div className="div12">(248) 676 7890</div>
                  </div>
                </div>
              </div>
              <img className="category-2-child1" alt="" src={vector891} />
              <div className="our-delivery-partners-container">
                <div className="our-delivery-partners2">
                  Our Delivery Partners
                </div>
                <div className="frame-parent29">
                  <div className="rectangle-wrapper9">
                    <img
                      className="frame-child16"
                      alt=""
                      src={rectangle7}
                    />
                  </div>
                  <div className="rectangle-wrapper10">
                    <img
                      className="frame-child17"
                      alt=""
                      src={rectangle71}
                    />
                  </div>
                  <div className="rectangle-wrapper11">
                    <img
                      className="frame-child18"
                      alt=""
                      src={rectangle72}
                    />
                  </div>
                  <button className="feedback-form">
                    <img
                      className="location-icon5"
                      alt=""
                      src={rectangle8}
                    />
                  </button>
                </div>
              </div>
              <div className="buttons-states-dark-parent3">
                <button className="buttons-states-dark17">
                  <img className="menu-icon5" alt="" src={menu} />
                  <div className="button25">VIEW MENU</div>
                </button>
                <button className="buttons-states-dark18">
                  <img className="basket-icon4" alt="" src={basket1} />
                  <b className="button26">ORDER ONLINE</b>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='fixed inset-0 bg-black bg-opacity-30 backdroup-blur-sm flex justify-center items-center'>
        <div className='mt-10 flex flex-col gap-5 text-white'>
          <button onClick={'onClose'} className='place-self-send'> <X size={30}/></button>
          <div className="bg-indigo-600 rounded-xl px-20 py-10 flex flex-col gap-5 items-center mx-4">
            <h1 className="text-2xl fonr-extrabold">DOWNLOAD FREE EBOOK </h1>

          </div>

        </div>

      </div>
      {/* <MapPinSection /> */}
      {/* <VIPContainer /> */}
      <DarkMode />
    </div>
  );
};

export default Homepage;
