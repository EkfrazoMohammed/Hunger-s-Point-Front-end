import "./FrameComponent1.css";
import rectangle7  from '../assets/rectangle-7@2x.png'
import rectangle71  from '../assets/rectangle-7-1@2x.png'
import rectangle72  from '../assets/rectangle-7-2@2x.png'
import rectangle8  from '../assets/rectangle-8@2x.png'
const FrameComponent1 = () => {
  return (
    <div className="our-delivery-partners-parent1">
      <div className="our-delivery-partners3">Our Delivery Partners</div>
      <div className="frame-parent62">
        <div className="rectangle-wrapper12">
          <img
            className="frame-child20"
            loading="eager"
            alt=""
            src={rectangle7}
          />
        </div>
        <button className="rectangle-wrapper13">
          <img className="frame-child21" alt="" src={rectangle71} />
        </button>
        <button className="rectangle-wrapper14">
          <img className="frame-child22" alt="" src={rectangle72} />
        </button>
        <button className="rectangle-wrapper15">
          <img className="frame-child23" alt="" src={rectangle8}/>
        </button>
      </div>
    </div>
  );
};

export default FrameComponent1;
