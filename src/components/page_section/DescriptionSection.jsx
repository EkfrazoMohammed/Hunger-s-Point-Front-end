import React from 'react'

const DescriptionSection = (props) => {
  return (
    <section className="info_event fp-wrapper-main">
        <p className="fp-para-section-title bottom-a-line">{props.Title}</p>
        <div className="sec-info--w info_event">
          <div className="side--w">
            <div className="para-container  text-[20px]">
             {props.leftDescription}
            </div>
          </div>
          <div className="side--w">
            <img src={props.rightImg} alt="..." />
          </div>
        </div>
      </section>
  )
}

export default DescriptionSection