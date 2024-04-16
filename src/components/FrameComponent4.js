import "./FrameComponent4.css";
import location11  from '../assets/location-11.svg'
import call1  from '../assets/call1.svg'

const FrameComponent4 = ({ alberta }) => {
  return (
    <div className="category-2-inner2">
      <div className="frame-parent64">
        <div className="alberta-wrapper2">
          <h1 className="alberta9">{alberta}</h1>
        </div>
        <div className="location-parent5">
          <img className="location-icon14" alt="" src={location11} />
          <div className="hospital-st-fort7">
            1 Hospital St, Fort McMurrayState, Alberta, T9H 5C1
          </div>
        </div>
        <div className="call-parent4">
          <img className="call-icon7" loading="eager" alt="" src={call1}/>
          <div className="div36">(248) 676 7890</div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent4;
