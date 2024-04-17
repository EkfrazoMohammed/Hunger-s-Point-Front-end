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
import { useEffect } from "react";
import { API } from "../api/api";
import { useDispatch, useSelector } from "react-redux";
import { setLocation } from '../redux/actions/dataActions';

import image4 from  "../assets/image-4@2x.png"
import mappin from  "../assets/mappin.svg" 
import mappin2 from  "../assets/mappin-2.svg"
import mappin21 from  "../assets/mappin-2.svg" 
import mappin22 from  "../assets/mappin-2.svg"

import {X, Download} from 'lucide-react'
import SimpleSlider from "../components/HomeSlider";


const Homepage1 = () => {
  const dispatch = useDispatch();
  // const locationData = useSelector(state => state.data.location);

  useEffect(() => {
    GetRestaurentData()
  }, []);

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

  
  return (
    <div className="homepage1">
      {/* <CategoryFrame /> */}
      <section className="review-section-frame">
        <SimpleSlider />
        {/* <Header3 /> */}
        <FrameComponent6 />
      </section>


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
