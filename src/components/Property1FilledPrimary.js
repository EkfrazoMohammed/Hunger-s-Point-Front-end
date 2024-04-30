import { useMemo } from "react";
import "./Property1FilledPrimary.css";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";


const Property1FilledPrimary = ({
  button,
  property1FilledPrimaryBorder,
  property1FilledPrimaryAlignSelf,
  property1FilledPrimaryBackgroundColor,
  property1FilledPrimaryHeight,
  property1FilledPrimaryPadding,
  buttonDisplay,
  buttonFontFamily,
  buttonTextTransform,
  buttonFontWeight,
  buttonFontSize,
  handleSubmit
}) => {
  const property1FilledPrimaryStyle = useMemo(() => {
    return {
      border: property1FilledPrimaryBorder,
      alignSelf: property1FilledPrimaryAlignSelf,
      backgroundColor: property1FilledPrimaryBackgroundColor,
      height: property1FilledPrimaryHeight,
      padding: property1FilledPrimaryPadding,
    };
  }, [
    property1FilledPrimaryBorder,
    property1FilledPrimaryAlignSelf,
    property1FilledPrimaryBackgroundColor,
    property1FilledPrimaryHeight,
    property1FilledPrimaryPadding,
  ]);

  const buttonStyle = useMemo(() => {
    return {
      display: buttonDisplay,
      fontFamily: buttonFontFamily,
      textTransform: buttonTextTransform,
      fontWeight: buttonFontWeight,
      fontSize: buttonFontSize,
    };
  }, [
    buttonDisplay,
    buttonFontFamily,
    buttonTextTransform,
    buttonFontWeight,
    buttonFontSize,
  ]);

  const navigate = useNavigate();

  const onUserpage = useCallback(() => {
    console.log("onUserpage===>")
    navigate("/homepage");
  }, [navigate]);


  return (
    <div
      className="property-1filledprimary"
      style={property1FilledPrimaryStyle}
      onClick={handleSubmit}
    >
      
      <b className="button button-design" style={buttonStyle}>
        {button}
      </b>

      
    </div>
  );
};

export default Property1FilledPrimary;
