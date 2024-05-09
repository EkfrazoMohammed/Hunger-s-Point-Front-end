import React from "react";
import Slider from "react-slick";

import banner1 from "../assets/images/event-img-3.png"
import banner2 from "../assets/images/event-img-2.png"
import banner3 from "../assets/event_pic_2.jpg"
import banner4 from "../assets/Home_banner_4.jpg"
import event1 from "../assets/event_pic_1.jpg";
import { useNavigate } from "react-router-dom";

export default function EventSlider() {

  const banner_placeholder = 'https://placehold.co/660x400'
  var settings = {
    className: "slider variable-width",
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    speed: 1000,
    autoplaySpeed: 3500,
    pauseOnHover: false,
    cssEase: "ease-in-out",
    // variableWidth: true,
    // adaptiveHeight: true
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
      imgSrc: event1,
    },
    {
      title: "Lorem ipsum dolor sit amet consectetur.",
      description: "Ante eget vel dis Lorem ipsum dolor",
      buttonText: "Order Online Now!",
      imgSrc: event1,
    },
    {
      title: "Lorem ipsum dolor sit amet consectetur.",
      description: "Ante eget vel dis Lorem ipsum dolor",
      buttonText: "Order Online Now!",
      imgSrc: event1,
    },
    {
      title: "Lorem ipsum dolor sit amet consectetur.",
      description: "Ante eget vel dis Lorem ipsum dolor",
      buttonText: "Order Online Now!",
      imgSrc: event1,
    }
  ];
  
  return (
    <div  style={{maxWidth:'100%'}}>
    <Slider {...settings}>
      {dummyData.map((item, index) => (
        <div key={index} onClick={() => Buttonclicked(item)}>
          
          <img style={{ borderRadius:'10px'}} src={item.imgSrc} alt={`Banner ${index + 1}`} />
        </div>
      ))}
    </Slider>
    </div>
  );
}
