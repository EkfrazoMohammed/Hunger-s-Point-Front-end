import { useMemo } from "react";
import "./LocationInputFrame.css";
import materialsymbolslighteditoutline from  "../assets/materialsymbolslighteditoutline.svg";
const LocationInputFrame = ({ johnSmith, propBorder, handleEdit ,Phone, City}) => {
  const locationInputFrameStyle = useMemo(() => {
    return {
      border: propBorder,
    };
  }, [propBorder]);

  return (
    <div className="location-input-frame" style={{locationInputFrameStyle,fontFamily:`var(--primary-font-family)`,fontSize:`var(--primary-font-size-mini)`}}>
      <div className="user-frame1">
        <div className="john-smith-frame">
          <b className="john-smith6" style={{fontFamily:`var(--primary-font-family-bold)`}}>{johnSmith}</b>
          <div className="edit-icon-frame">{Phone}</div>
          <div className="canada">{City}</div>
        </div>
        <img
          className="material-symbols-lightedit-ou-icon"
          loading="eager"
          alt=""
          src={materialsymbolslighteditoutline}
          onClick={handleEdit}
        />
      </div>
    </div>
  );
};

export default LocationInputFrame;
