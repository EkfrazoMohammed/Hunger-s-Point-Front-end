import { useMemo } from "react";
import "./Header21.css";
import group1 from  "../assets/group-1.svg";
import ellipse from  "../assets/ellipse-2@2x.png";
import group2 from  "../assets/group-2.svg";
import instagram from  "../assets/instagram.svg";
import facebook from  "../assets/facebook.svg";
import close from  "../assets/close.svg";




const Header21 = ({ headerFlexWrap, ellipseIconTop, basketButtonMinWidth }) => {
  const header1Style = useMemo(() => {
    return {
      flexWrap: headerFlexWrap,
    };
  }, [headerFlexWrap]);

  const ellipseIconStyle = useMemo(() => {
    return {
      top: ellipseIconTop,
    };
  }, [ellipseIconTop]);

  const basketButtonStyle = useMemo(() => {
    return {
      minWidth: basketButtonMinWidth,
    };
  }, [basketButtonMinWidth]);

  return (
    <div className="header6" style={header1Style}>
      <img className="header-child" alt="" src={group1} />
      <div className="wrapper-ellipse-2">
        <img
          className="wrapper-ellipse-2-child"
          loading="eager"
          alt=""
          src={ellipse}
          style={ellipseIconStyle}
        />
      </div>
      <div className="basket-button" style={basketButtonStyle}>
        <div className="lorem-ipsum-dolor2">
          Lorem ipsum dolor sit amet consectetur. At dictumst mattis eget
          convallis id adipiscing libero libero.
        </div>
      </div>
      <div className="call-to-action-button">
        <div className="alberta-container1">
          <img className="alberta-container-child" alt="" src={group2} />
          <img
            className="instagram-icon"
            loading="eager"
            alt=""
            src={instagram}
          />
          <img
            className="facebook-icon2"
            loading="eager"
            alt=""
            src={facebook}
          />
        </div>
      </div>
      <img className="close-icon2" loading="eager" alt="" src={close} />
    </div>
  );
};

export default Header21;
