import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent4 from "./FrameComponent4";
import FrameComponent3 from "./FrameComponent3";
import "./FrameComponent11.css";
import { useDispatch, useSelector } from "react-redux";
import { API } from "../api/api";
import { setLocation } from '../redux/actions/dataActions';
import location11  from '../assets/location-11.svg'
import call1  from '../assets/call1.svg'
import vector891  from '../assets/vector-891.svg'
import rectangle8  from '../assets//rectangle-8@2x.png'
import bike  from '../assets/bike.png'

const FrameCard = ({ location, onClick }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    GetRestaurentData()
  }, []);
  const GetRestaurentData = async () => {
    // console.log('GetRestaurentData==in ')
    API.getInstance().menu.get("/api/restaurent")
      .then((res) => {
        // console.log(res.data.result.data, 'res.data.result.data==>')
        dispatch(setLocation(res.data.result.data));
      })
      .catch((error) => {
      })
      .finally(() => {
      });
  }

  const OncardClick = (id) => {
    console.log(id,'location====')
    navigate(`/productpage?id=${id}`);
  };
  const dummyData = [
    { id: 1, imageUrl:bike  },
    { id: 2, imageUrl: 'https://i.pinimg.com/originals/58/df/e6/58dfe63ba312325759e6570ac55b77aa.jpg' },
    { id: 3, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzAMLdI3d85d82BX9BwjYkEBScFCBZXvTcB3mXUvretQ&s' },
    { id: 4, imageUrl: rectangle8 }
  ];
  return (
    <div  className="home-location category-2-wrapper" onClick={()=>OncardClick(location.id)}>
      <div className={`category-frame`}>
        <div className="sample">
          {/* <FrameComponent4 alberta={`Location ${location}`} /> */}
          <div className="category-2-inner2">
            <div className="frame-parent64">
              <div className="alberta-wrapper2">
                <div className="alberta9">{`${location.published_name}`}</div>
              </div>
              <div className="location-parent5">
                <img className="location-icon14" alt="" src={location11} />
                <div className="hospital-st-fort7">
                  {location.address_info}
                </div>
              </div>
              <div className="call-parent4">
                <img className="location-icon14" loading="eager" alt="" src={call1} />
                <div className="hospital-st-fort7"> {location.location_phone}</div>
              </div>
            </div>
          </div>
        </div>

        <img className={`category-2-child`} alt="" src={vector891} />
        <div className={`our-delivery-partners-parent`}>
          <div className={`our-delivery-partners`} style={{ textAlign: 'left',display:'flex' }}>Our Delivery Partners</div>
          <div style={{ marginBottom: '20px' }} className={`frame-parent`}>
          {dummyData.map((item,index) => (
              <button key={index} style={{ marginRight: '10px', width: '50px'}} className="map-pin-group-wrapper">
                <img className="map-pin-group1" alt="" src={item.imageUrl} />
              </button>
            ))}
          </div>

        </div>
        <FrameComponent3 />
      </div>
    </div>

  );
};

const FrameComponent2 = () => {
  const navigate = useNavigate();
  const locationData = useSelector(state => state.data.location);
  // const onFrameContainerClick = useCallback(() => {
  //   navigate(`/productpage?id=${location.id}`);
  // }, [navigate]);

  return (
    // <div className="frame-parent65">
    <>
      {locationData.map((location) => (
        <FrameCard key={location} location={location}/>
      ))}
      </>
    // </div>
  );
};

export default FrameComponent2;
