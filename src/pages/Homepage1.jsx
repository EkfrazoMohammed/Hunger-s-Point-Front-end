import CategoryFrame from "../components/CategoryFrame";
import Header3 from "../components/Header31";
import FrameComponent6 from "../components/FrameComponent6";
import FrameComponent5 from "../components/FrameComponent5";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent11 from "../components/FrameComponent11";
import MapPinSection from "../components/MapPinSection";
import VIPContainer from "../components/VIPContainer";
import DarkMode1 from "../components/DarkMode1";
import "./Homepage1.css";
import { useEffect, useRef, useState } from "react";
import { API } from "../api/api";
import { useDispatch, useSelector } from "react-redux";
import { setLocation } from '../redux/actions/dataActions';

import image4 from  "../assets/image-4@2x.png"
import mappin from  "../assets/mappin.svg" 
import mappin2 from  "../assets/mappin-2.svg"
import mappin21 from  "../assets/mappin-2.svg" 
import mappin22 from  "../assets/mappin-2.svg"

import {X, Download} from 'lucide-react'

// / Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';
import Modal from "../components/Modal";
import SimpleSlider from "../components/HomeSlider";
import AdModalPopup from "../components/AdModalPopup";
import CATEGORY from "../components/CATEGORY";
// import { Modal, Button } from 'react-bootstrap';


const Homepage1 = () => {
  const dispatch = useDispatch();
  // const locationData = useSelector(state => state.data.location);
  const [inputValue, setInputValue] = useState('');
  
  useEffect(() => {
    GetRestaurentData()
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  const [copySuccess, setCopySuccess] = useState(false);
  const inputRef = useRef(null);

  const handleCopyToClipboard = () => {
    const tempInput = document.createElement('input');
    document.body.appendChild(tempInput);
    tempInput.value = inputValue;
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000); // Reset copy success message after 2 seconds
  };


  const GetRestaurentData = async () => {
    // console.log('GetRestaurentData==in ')
    API.getInstance().menu.get("/api/restaurent")
      .then((res) => {
        // console.log(res.data.result.data,'GetRestaurentData=res.data.result.data==>')
        dispatch(setLocation(res.data.result.data));
      })
      .catch((error) => {
      })
      .finally(() => {
      });
  }

  const dummyData = [
    {
      id: 1,
      imageUrl: "https://cdn.vectorstock.com/i/1000x1000/88/12/banner-online-store-special-offer-50-percent-vector-23838812.webp",
      title: "Create Account",
      subtitle: "Tell us who you are",
      inputType: "text",
      inputPlaceholder: "Your name",
      copyToClipboard: true // Add this flag to enable copy to clipboard feature
    },
    {
      id: 2,
      imageUrl: "https://cdn.vectorstock.com/i/1000x1000/88/12/banner-online-store-special-offer-50-percent-vector-23838812.webp",
      title: "Security Info",
      subtitle: "Enter a strong password",
      inputType: "password",
      inputPlaceholder: "Your password",
      copyToClipboard: false // No copy to clipboard feature for this slide
    },
    {
      id: 3,
      imageUrl: "https://cdn.vectorstock.com/i/1000x1000/88/12/banner-online-store-special-offer-50-percent-vector-23838812.webp",
      title: "Get Started",
      subtitle: "You're all set and ready",
      buttonText: "Let's Go"
    }
  ];
  
  return (
    <div className="homepage1">
      
      {/* <CategoryFrame /> */}
      {/* <AdModalPopup/> */}
      <section className="review-section-frame">
        <SimpleSlider />
        {/* <Header3 /> */}
        <FrameComponent6 />
      </section>


      <div>
      <button onClick={openModal}>Open Modal</button>
    </div>
    

    <Modal isOpen={isOpen} onClose={closeModal}>
    <Swiper
      pagination={{
        dynamicBullets: true,
      }}
      modules={[Pagination]}
      className="mySwiper"
      centeredSlides={true}
    >
      {dummyData.map((item) => (
        <SwiperSlide key={item.id}>
          <div className="slide-content">
            <img src={item.imageUrl} alt={`Slide ${item.id}`} />
            <h2>{item.title}</h2>
            <h3>{item.subtitle}</h3>
            {item.inputType ? (
              <>
                <input
                  type={item.inputType}
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                />
                <button onClick={() => handleCopyToClipboard(item.inputDefaultValue)}>
                  Copy
                </button>
                {copySuccess && <span style={{ color: 'green' }}>Copied to clipboard!</span>}
              </>
            ) : (
              <button>{item.buttonText}</button>
            )}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>

      </Modal>


      {/* <>
      <Button variant="primary" onClick={handleShow}>
        Open Modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Swiper Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Swiper
            pagination={{
              dynamicBullets: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
            centeredSlides={true}
          >
            <SwiperSlide>
              <div className="slide-content">
                <img src="https://cdn.vectorstock.com/i/1000x1000/88/12/banner-online-store-special-offer-50-percent-vector-23838812.webp" alt="Slide 1" />
                <h2>Create Account</h2>
                <h3>Tell us who you are</h3>
                <input type="text" placeholder="Your name" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide-content">
                <img src="https://cdn.vectorstock.com/i/1000x1000/88/12/banner-online-store-special-offer-50-percent-vector-23838812.webp" alt="Slide 2" />
                <h2>Security Info</h2>
                <h3>Enter a strong password</h3>
                <input type="password" placeholder="Your password" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide-content">
                <img src="https://cdn.vectorstock.com/i/1000x1000/88/12/banner-online-store-special-offer-50-percent-vector-23838812.webp" alt="Slide 3" />
                <h2>Get Started</h2>
                <h3>You're all set and ready</h3>
                <button>Let's Go</button>
              </div>
            </SwiperSlide>
          </Swiper>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </> */}

      {/* <div className='fixed inset-0 bg-black bg-opacity-30 backdroup-blur-sm flex justify-center items-center z-50'>
      <div className='mt-10 flex flex-col gap-5 text-white'>
        <button onClick={'onClose'} className='place-self-end'> <X size={30}/></button>
        <div className="bg-indigo-600 rounded-xl px-20 py-10 flex flex-col gap-5 items-center mx-4">
          <h1 className="text-2xl font-extrabold">DOWNLOAD FREE EBOOK </h1>
          <p className="text-3xl font-bold max-w-md text-center">Want to learn asdasdas asdsd</p>
          <form action="">
            <input
              type="email"
              placeholder='Email Address'
              required
              className="w-full px-4 py-3 text-black"
            />
          </form>
        </div>
      </div>
    </div> */}

      <div className="location1">
        <FrameComponent5 />
        <div className="location-pin-map">
          <img className="image-4-icon1" alt="" src={image4} />
          <img className="mappin-icon4" alt="" src={mappin} key="mappin1" />
          <img className="mappin-icon5" alt="" src={mappin2} />
          <img className="mappin-icon6" alt="" src={mappin21} key="mappin2" />
          <img className="mappin-icon7" alt="" src={mappin22} />
        </div>
        {/* <FrameComponent2 /> */}
        <FrameComponent11 />
      </div>
      <MapPinSection />
      <VIPContainer />
      <DarkMode1 />
    </div>
  );
};

export default Homepage1;
