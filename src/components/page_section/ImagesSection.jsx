import React from "react";

const ImagesSection = (props) => {
  return (
    <section className="fp-wrapper-main ">
      <div className="sec-info--w gap-6 justify-between">
        {props.type === "banner" ? (
          <div className="w-full h-[380px]">
            {props.bannerImg && (
              <img
                src={props.bannerImg}
                className="w-full h-full object-cover"
                alt="..."
              />
            )}
          </div>
        ) : props.type === "side_section" ? (
          <>
            <div
              className="side--w"
              styles={{ width: props.type === "banner" ? "100%" : " " }}
            >
              <div className="para-container">
                {props.leftImg && <img src={props.leftImg} alt="..." />}
                <p className="text-[32px] font-light text-center m-3">
                  We serve everyone unique!
                </p>
              </div>
            </div>
            <div className="side--w">
              {props.rightImg && <img src={props.rightImg} alt="..." />}
            </div>
          </>
        ) : (
          <div className="w-full h-[380px] relative">
            {props.bannerImg && (
              <img
                src={props.bannerImg}
                className="w-full h-full z-[1] object-cover brightness-50"
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
