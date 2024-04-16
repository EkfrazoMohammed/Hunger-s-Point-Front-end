import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent4 from "./FrameComponent4";
import FrameComponent3 from "./FrameComponent3";
import "./FrameComponent2.css";
import vector891  from '../assets/vector-891.svg'
import rectangle7  from '../assets/rectangle-7-1@2x.png'


const FrameCard = ({ location, onClick }) => {
  return (
    <div className={`category-2-wrapper${location}`} onClick={onClick}>
      <div className={`category-${location + 25}`}>
        <FrameComponent4 alberta={location === 1 ? "Alberta" : `Location ${location}`} />
        <img className="category-2-child4" alt="" src={vector891} />
        <div className={`our-delivery-partners-parent`}>
          <div className={`our-delivery-partners`}>Our Delivery Partners</div>
          <div className={`frame-parent69`}>
            {[16, 17, 18,20].map((index) => (
              <button key={index} className={`rectangle-wrapper${index}`}>
                <img
                  className={`frame-child${index + (location - 1) * 4}`}
                  alt=""
                  src={rectangle7}
                />
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

  const onFrameContainerClick = useCallback(() => {
    navigate("/productpage");
  }, [navigate]);

  return (
    <div className="frame-parent65">
      {[1, 2,3,4].map((location) => (
        <FrameCard key={location} location={location} onClick={onFrameContainerClick} />
      ))}
    </div>
  );
};

export default FrameComponent2;
