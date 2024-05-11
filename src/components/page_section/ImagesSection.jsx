import React from "react";

const ImagesSection = (props) => {
  return (
    <section className="fp-wrapper-main " >
      <div className="sec-info--w gap-6 justify-between">
        {props.type === "banner" ? (
          <div className="w-full h-[380px]">
            {props.bannerImg && (
              <img
              style={{borderRadius:'10px'}}
                src={props.bannerImg}
                className="w-full h-full object-cover"
                alt="..."
              />
            )}
          </div>
        ) : props.type === "side_section" ? (
          <>
            {/* <div
              className="side--w"
              styles={{ width: props.type === "banner" ? "100%" : " " }}
            >
              <div className="para-container">
                {props.leftImg && <img  style={{borderRadius:'10px'}} src={props.leftImg} alt="..." />}
                <p className="text-center mt-14" style={{fontSize:`var(--sub-header-font-size)`,fontFamily:`var(--primary-font-family-bold)`,color:`var(--hp-yellow-600)`}}>
                  We serve everyone unique!
                </p>
              </div>
            </div> */}
            <div className="side--w">
              {props.leftImg && <img src={props.leftImg} style={{borderRadius:'10px'}} alt="..." />}
            </div>
            <div className="side--w">
              {props.rightImg && <img src={props.rightImg} style={{borderRadius:'10px'}} alt="..." />}
            </div>
          </>
        ) : (
          <div className="w-full h-[380px] relative">
            {props.bannerImg && (
              <img
              style={{borderRadius:'10px'}}
                src={props.bannerImg}
                className="w-full h-full z-[1] object-cover brightness-[0.3]"
                alt="..."
              />
            )}
            <div className="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4">
                  {props.bannerText}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ImagesSection;
