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

import image4 from  "../assets/location.jpg"
import mappin from  "../assets/mappin.svg" 
import mappin2 from  "../assets/mappin-2.svg"
import mappin21 from  "../assets/mappin-2.svg" 
import mappin22 from  "../assets/mappin-2.svg"
// import location from  "../assets/Location_home.jpg"
import location from  "../assets/location4.png"
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
import MetaDecorator from "../utils/MetaDecorator";
const content = require("../data/content.json");
import metaThumbnail from "../data/images/meta/punjabi.jpeg";
import { BiEdit, BiShow } from 'react-icons/bi';
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Homepage1 = () => {
  const dispatch = useDispatch();
  // const locationData = useSelector(state => state.data.location);
  const [inputValue, setInputValue] = useState('');
  const [offerdata, setOfferData] = useState(false);
  const navigate = useNavigate();
  const navigationtomenu = () => {
    console.log("navigate")
    navigate("/productpage?id=1");
  }
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
        const offer_data = res.data.result.data 
        if (offer_data !== undefined && offer_data.length > 0) {
        setIsOpen(true)
        }
        else{
          setIsOpen(false)
        }
      })
      .catch((error) => {
      })
      .finally(() => {
      });
      
  }

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
  useEffect(() => {
    if(copySuccess){
      toast.success('Copied to clipboard!');
      setIsOpen(false)
    }
    
  }, [copySuccess]);


  const handleCopyToClipboard = (inputValue) => {
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
  console.log(offerdata,'offerdata==>12')
  console.log(offerdata.length,'offerdata==>1211')
  return (
    <>

    <MetaDecorator
        description={content.pageDescription}
        title={content.pageTitle}
        imageUrl={metaThumbnail}
        imageAlt={content.metaImageAlt}
      /> 
    
    <div className="homepage1">


      {/* <CategoryFrame /> */}
      {/* <AdModalPopup/> */}
      <section className="review-section-frame">
      {/* <div className="slider-view"> */}
        <SimpleSlider />
        {/* </div> */}
        {/* <Header3 /> */}
        {/* <FrameComponent6 /> */}
      </section>

    

      {/* <div>
      <button onClick={openModal}>Open Modal</button>
    </div> */}
    

    <Modal isOpen={false} onClose={closeModal} width="50%">
      
    <Swiper
      pagination={{
        dynamicBullets: true,
      }}
      modules={[Pagination]}
      className="category-10"
      centeredSlides={true}
    >
      
      {offerdata !== undefined && offerdata.length > 0 && offerdata.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="category-10">
                <img src={item.banner_image} alt={`Slide ${item.id}`} onClick={() => navigationtomenu()} />
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

      <div className="location1 hf-row" >
        <div style={{border:'1px solid #E4B637', padding:'10px',borderRadius:'10px',margin:'30px 0px',backgroundColor:`var(--card-bg)`}}>
        <p className="what-we-believe4 fp-para-section-title" >{'OUR VISION'}</p>
        <div className="my-2 sm:my-5">
        We don't just cook food, we give experiences. Our vision is to become the fastest-growing segment of quick-service restaurants offering authentic Indian cuisine. We believe everyone deserves to experience the joy of Indian flavours and we're committed to making them accessible and delicious.
        </div>
     
          
       
        </div>
        <FrameComponent5 />
          <div className="flex sm:flex-row flex-col gap-6 ">
            <FrameComponent11 />
            <div className="container22">
              <img src={location} alt="location" className="home-location-side-img"  />
            </div>
          </div>
        
      </div>
      <div className="hf-row">
      <MapPinSection />
      </div>
      <VIPContainer />
      <DarkMode1 />

      
    </div>
    </>
    
  );
};

export default Homepage1;
