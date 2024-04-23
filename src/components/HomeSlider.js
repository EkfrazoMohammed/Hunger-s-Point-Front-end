import React from "react";
import Slider from "react-slick";
import bannerImg1 from "../assets/header@3x.png"
import banner1 from "../assets/banner1_quality.jpg"
import banner2 from "../assets/banner2_quality.jpg"
import banner3 from "../assets/banner3_quality.jpg"
import banner4 from "../assets/banner4_quality.jpg"
import { useNavigate } from "react-router-dom";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3500,
    pauseOnHover: false,
    cssEase: "ease-in-out",
  };
  const navigate = useNavigate();
  const Buttonclicked = async (target) => {
    navigate("/productpage?id=1");
  }
  // Dummy data for Slider items
  const dummyData = [
    {
      title: "Lorem ipsum dolor sit amet consectetur.",
      description: "Ante eget vel dis Lorem ipsum dolor",
      buttonText: "Order Online Now!",
      imgSrc: banner1,
    },
    {
      title: "Lorem ipsum dolor sit amet consectetur.",
      description: "Ante eget vel dis Lorem ipsum dolor",
      buttonText: "Order Online Now!",
      imgSrc: banner2,
    },
    {
      title: "Lorem ipsum dolor sit amet consectetur.",
      description: "Ante eget vel dis Lorem ipsum dolor",
      buttonText: "Order Online Now!",
      imgSrc: banner3,
    },
    {
      title: "Lorem ipsum dolor sit amet consectetur.",
      description: "Ante eget vel dis Lorem ipsum dolor",
      buttonText: "Order Online Now!",
      imgSrc: banner4,
    }
  ];
  
  return (
    <Slider {...settings}>
      {dummyData.map((item, index) => (
        <div key={index} className="slider-item">
          <div className="banner-action--wrapper">
            <p className="lorem-ipsum-dolor3">{item.title}</p>
            <p className="ante-eget-vel4">{item.description}</p>
            <button onClick={() => Buttonclicked(item)} className="order-action">{item.buttonText}</button>
          </div>
          <img src={item.imgSrc} alt={`Banner ${index + 1}`} />
        </div>
      ))}
    </Slider>
  );
}
