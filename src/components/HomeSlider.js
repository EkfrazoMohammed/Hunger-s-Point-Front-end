import React from "react";
import Slider from "react-slick";
import bannerImg1 from "../assets/header@3x.png"


export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div className="slider-item">
        <div className="banner-action--wrapper">
          <p className="lorem-ipsum-dolor3">
            Lorem ipsum dolor sit amet consectetur.
          </p>
          <p className="ante-eget-vel4">{`Ante eget vel dis Lorem ipsum dolor `}</p>
          <p className="ante-eget-vel5">Ante eget vel dis</p>
          <button className="order-action">Order Online Now!</button>
        </div>
        <img src={bannerImg1} />
      </div>
      <div className="slider-item">
        <div className="banner-action--wrapper">
          <p className="lorem-ipsum-dolor3">
            Lorem ipsum dolor sit amet consectetur.
          </p>
          <p className="ante-eget-vel4">{`Ante eget vel dis Lorem ipsum dolor `}</p>
          <p className="ante-eget-vel5">Ante eget vel dis</p>
          <button className="order-action">Order Online Now!</button>
        </div>
        <img src={bannerImg1} />      </div>
      <div className="slider-item">
        <div className="banner-action--wrapper">
          <p className="lorem-ipsum-dolor3">
            Lorem ipsum dolor sit amet consectetur.
          </p>
          <p className="ante-eget-vel4">{`Ante eget vel dis Lorem ipsum dolor `}</p>
          <p className="ante-eget-vel5">Ante eget vel dis</p>
          <button className="order-action">Order Online Now!</button>
        </div>
        <img src={bannerImg1} />      </div>
    </Slider>
  );
}
