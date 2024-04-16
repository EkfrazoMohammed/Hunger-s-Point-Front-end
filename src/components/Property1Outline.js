import { useMemo } from "react";
import "./Property1Outline.css";

const Property1Outline = ({
  button,
  property1OutlineBorder,
  property1OutlinePadding,
  property1OutlineBackgroundColor,
  property1OutlineHeight,
  property1OutlineAlignSelf,
  property1OutlineFlex,
  property1OutlineOpacity,
  buttonFontSize,
  buttonFontFamily,
  buttonFontWeight,
  buttonTextTransform,
  onButtonsStatesDarkContainer1Click,
}) => {
  const property1OutlineStyle = useMemo(() => {
    return {
      border: property1OutlineBorder,
      padding: property1OutlinePadding,
      backgroundColor: property1OutlineBackgroundColor,
      height: property1OutlineHeight,
      alignSelf: property1OutlineAlignSelf,
      flex: property1OutlineFlex,
      opacity: property1OutlineOpacity,
    };
  }, [
    property1OutlineBorder,
    property1OutlinePadding,
    property1OutlineBackgroundColor,
    property1OutlineHeight,
    property1OutlineAlignSelf,
    property1OutlineFlex,
    property1OutlineOpacity,
  ]);

  const button2Style = useMemo(() => {
    return {
      fontSize: buttonFontSize,
      fontFamily: buttonFontFamily,
      fontWeight: buttonFontWeight,
      textTransform: buttonTextTransform,
    };
  }, [buttonFontSize, buttonFontFamily, buttonFontWeight, buttonTextTransform]);

  return (
    <div
      className="property-1outline"
      style={property1OutlineStyle}
      onClick={onButtonsStatesDarkContainer1Click}
    >
      <div className="button6" style={button2Style}>
        {button}
      </div>
    </div>
  );
};

export default Property1Outline;
