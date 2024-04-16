import { useMemo } from "react";
import "./Property1OutlineIcon.css";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const Property1OutlineIcon = ({
  iconClassNames,
  buttonText,
  showButton,
  property1OutlineIconBorderRadius,
  property1OutlineIconHeight,
  property1OutlineIconAlignSelf,
  property1OutlineIconPosition,
  property1OutlineIconBackgroundColor,
  property1OutlineIconMargin,
  property1OutlineIconTop,
  property1OutlineIconLeft,
  buttonWidth,
  bDisplay,
  bHeight,

}) => {
  const property1OutlineIconStyle = useMemo(() => {
    return {
      borderRadius: property1OutlineIconBorderRadius,
      height: property1OutlineIconHeight,
      alignSelf: property1OutlineIconAlignSelf,
      position: property1OutlineIconPosition,
      backgroundColor: property1OutlineIconBackgroundColor,
      margin: property1OutlineIconMargin,
      top: property1OutlineIconTop,
      left: property1OutlineIconLeft,
    };
  }, [
    property1OutlineIconBorderRadius,
    property1OutlineIconHeight,
    property1OutlineIconAlignSelf,
    property1OutlineIconPosition,
    property1OutlineIconBackgroundColor,
    property1OutlineIconMargin,
    property1OutlineIconTop,
    property1OutlineIconLeft,
  ]);

  const button2Style = useMemo(() => {
    return {
      width: buttonWidth,
    };
  }, [buttonWidth]);

  const bStyle = useMemo(() => {
    return {
      display: bDisplay,
      height: bHeight,
    };
  }, [bDisplay, bHeight]);

  const navigate = useNavigate();

  const onbuttonClick = useCallback(() => {
    navigate("/basket");
  }, [navigate]);

  return (
    <div className="property-1outlineicon" style={property1OutlineIconStyle} onClick={onbuttonClick}>
      <img className="menu-icon" alt="" src={iconClassNames} />
      {showButton && (
        <div className="button4" style={button2Style}>
          {buttonText}
        </div>
      )}
      <div className="wrapper">
        <b className="b" style={bStyle}>
          3
        </b>
      </div>
    </div>
  );
};

export default Property1OutlineIcon;
