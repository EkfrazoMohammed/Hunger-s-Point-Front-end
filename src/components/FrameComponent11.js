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

  return (
    <div style={{ margin: '20px', backgroundColor: 'rgb(54,54,54)', padding: '20px', borderRadius: '10px' }} className={`category-2-wrapper`} onClick={()=>OncardClick(location.id)}>
      <div className={`category-frame`}>
        <div className="sample">
          {/* <FrameComponent4 alberta={`Location ${location}`} /> */}
          <div className="category-2-inner2">
            <div className="frame-parent64">
              <div className="alberta-wrapper2">
                <h1 className="alberta9">{`${location.published_name}`}</h1>
              </div>
              <div className="location-parent5">
                <img className="location-icon14" alt="" src={location11} />
                <div className="hospital-st-fort7">
                  {location.address_info}
                </div>
              </div>
              <div className="call-parent4">
                <img className="call-icon7" loading="eager" alt="" src={call1} />
                <div className="div36"> {location.location_phone}</div>
              </div>
            </div>
          </div>
        </div>

        <img className={`category-2-child`} alt="" src={vector891} />
        <div className={`our-delivery-partners-parent`}>
          <div className={`our-delivery-partners`} style={{ textAlign: 'left' }}>Our Delivery Partners</div>
          <div style={{ marginBottom: '20px' }} className={`frame-parent`}>
            {[...Array(5)].map((_, index) => (
              <button key={index} style={{ marginRight: '10px', width: '60px' }} className="map-pin-group-wrapper">
                <img className="map-pin-group1" alt="" src={rectangle8} />
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
    <div className="frame-parent65">
      {locationData.map((location) => (
        <FrameCard key={location} location={location}/>
      ))}
    </div>
  );
};

export default FrameComponent2;
