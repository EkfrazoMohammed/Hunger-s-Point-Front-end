import { useMemo } from "react";
import "./Property1FilledPrimary1.css";

const Property1FilledPrimary1 = ({
  button,
  property1FilledPrimaryPadding,
  property1FilledPrimaryBorder,
  buttonFontSize,
  buttonDisplay,
}) => {
  const property1FilledPrimary1Style = useMemo(() => {
    return {
      padding: property1FilledPrimaryPadding,
      border: property1FilledPrimaryBorder,
    };
  }, [property1FilledPrimaryPadding, property1FilledPrimaryBorder]);

  const button1Style = useMemo(() => {
    return {
      fontSize: buttonFontSize,
      display: buttonDisplay,
    };
  }, [buttonFontSize, buttonDisplay]);

  return (
    <div
      className="property-1filledprimary1"
      style={property1FilledPrimary1Style}
    >
      <b className="button2" style={button1Style}>
        {button}
      </b>
    </div>
  );
};

export default Property1FilledPrimary1;
