import CATEGORY from "../components/CATEGORY";
import "./Signin.css";

import vector from  "../assets/vector-92.svg"
import walpaper from  "../assets/wallpaper@2x.png"
import finallogo from  "../assets/the-hungers-point-final-logo03@2x.png"

const Signin = () => {
  return (
    <div className="signin1">
      <img
        className="vector-frame-icon"
        loading="eager"
        alt=""
        src={vector}
      />
      <div className="main-frame">
        <img className="wallpaper-icon" alt="" src={walpaper} />
        <img
          className="the-hungers-point-final-logo-"
          loading="eager"
          alt=""
          src={finallogo}
        />
      </div>
      <div className="inner-frame">
        <CATEGORY />
      </div>
    </div>
  );
};

export default Signin;
