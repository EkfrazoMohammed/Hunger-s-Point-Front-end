import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { X, Download } from 'lucide-react';
import { BiEdit, BiShow } from 'react-icons/bi';
import Confetti from 'react-confetti';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { API } from "../api/api";
import { setLocation } from '../redux/actions/dataActions';
import CategoryFrame from "../components/CategoryFrame";
import Header3 from "../components/Header31";
import FrameComponent6 from "../components/FrameComponent6";
import FrameComponent5 from "../components/FrameComponent5";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent11 from "../components/FrameComponent11";
import MapPinSection from "../components/MapPinSection";
import VIPContainer from "../components/VIPContainer";
import DarkMode1 from "../components/DarkMode1";
import Modal from "../components/Modal";
import SimpleSlider from "../components/HomeSlider";
import AdModalPopup from "../components/AdModalPopup";
import CATEGORY from "../components/CATEGORY";
import MetaDecorator from "../utils/MetaDecorator";
import ComingSoonPopUp from "../components/pop-up/coming_soon_popup";
import image4 from "../assets/location.jpg";
import mappin from "../assets/mappin.svg";
import mappin2 from "../assets/mappin-2.svg";
import mappin21 from "../assets/mappin-2.svg";
import mappin22 from "../assets/mappin-2.svg";
import location from "../assets/location4.png";
import metaThumbnail from "../data/images/meta/punjabi.jpeg";
import content from "../data/content.json";
import "./Homepage1.css";

const Homepage1 = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState('');
  const [offerdata, setOfferData] = useState([]);
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);
  const inputRef = useRef(null);
  const [confettiActive, setConfettiActive] = useState(true);

  useEffect(() => {
    setPopupVisible(true);
    const credentials = JSON.parse(localStorage.getItem('credentials'));
    if (credentials) {
      checkUserOffer(['Registered User', 'ALL']);
    }
  }, []);

  useEffect(() => {
    getRestaurentData();
  }, []);

  useEffect(() => {
    if (copySuccess) {
      toast.success('Copied to clipboard!');
      setIsOpen(false);
    }
  }, [copySuccess]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setConfettiActive(false);
    }, 5000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  const checkUserOffer = async (target) => {
    const data = { target };
    try {
      const res = await API.getInstance().menu.post(`/api/check-offers`, data);
      const offerData = res.data.result.data;
      setOfferData(offerData);
      setIsOpen(offerData && offerData.length > 0);
    } catch (error) {
      console.error(error);
    }
  };

  const getRestaurentData = async () => {
    try {
      const res = await API.getInstance().menu.get("/api/restaurent");
      dispatch(setLocation(res.data.result.data));
    } catch (error) {
      console.error(error);
    }
  };

  const handleCopyToClipboard = (inputValue) => {
    const tempInput = document.createElement('input');
    document.body.appendChild(tempInput);
    tempInput.value = inputValue;
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
  };

  const hidePopup = () => {
    setPopupVisible(false);
  };

  return (
    <>
      {/* <ComingSoonPopUp visible={isPopupVisible} onClose={hidePopup}>
        <div>
          <img
            src="https://hunger.thestorywallcafe.com/media/new_coming_soon.jpg"
            alt="deshimg"
            style={{ borderWidth: '.5px', borderRadius: '20px', borderColor: `var(--hp-yellow-600)` }}
            onClick={hidePopup}
          />
        </div>
      </ComingSoonPopUp> */}
      
      {/* <Modal isOpen={isPopupVisible} onClose={hidePopup} width="80%">
      <div>
          <img
            src="https://hunger.thestorywallcafe.com/media/new_coming_soon.jpg"
            alt="deshimg"
            style={{ borderWidth: '.5px', borderRadius: '20px', borderColor: `var(--hp-yellow-600)` }}
            onClick={hidePopup}
          />
        </div>

      </Modal> */}
      <MetaDecorator
        description={content.pageDescription}
        title={content.pageTitle}
        imageUrl={metaThumbnail}
        imageAlt={content.metaImageAlt}
      />
      <div className="homepage1">
        <section className="review-section-frame">
          <SimpleSlider />
        </section>
        <div className="location1 hf-row">
          <div style={{ border: '1px solid #E4B637', padding: '10px', borderRadius: '10px', margin: '30px 0', backgroundColor: `var(--card-bg)` }}>
            <p className="what-we-believe4 fp-para-section-title">OUR VISION</p>
            <div className="my-2 sm:my-5 description">
              We don't just cook food, we give experiences. Our vision is to become the fastest-growing segment of quick-service restaurants offering authentic Indian cuisine. We believe everyone deserves to experience the joy of Indian flavours and we're committed to making them accessible and delicious.
            </div>
          </div>
          <FrameComponent5 />
          <div className="flex sm:flex-row flex-col gap-6">
            <FrameComponent11 />
            <div className="container22">
              <img src={location} alt="location" className="home-location-side-img" />
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
