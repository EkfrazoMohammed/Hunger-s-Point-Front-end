import React from "react";
import Slider from "react-slick";

import event1 from "../assets/event1.jpg"
import event2 from "../assets/event2.jpg"
import event3 from "../assets/event3.jpg"
import event4 from "../assets/event4.jpg"
import event66 from "../assets/event66.jpg"
// import event5 from "../assets/event5.jpg";
import event6 from "../assets/event6.jpg";
import event7 from "../assets/event_banner_22.jpg";
import event8 from "../assets/event_banner_23.jpg";
import event9 from "../assets/event_banner_24.jpg";
import event10 from "../assets/event_banner_25.jpg";

import { useNavigate } from "react-router-dom";

export default function EventSlider() {

  const banner_placeholder = 'https://placehold.co/1200x700'
  var settings = {
    className: "slider variable-width",
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
    // variableWidth: true,
    // adaptiveHeight: true
  };
  const navigate = useNavigate();
  const Buttonclicked = async (target) => {
    // navigate("/productpage?id=1");
  }
  // Dummy data for Slider items
  const dummyData = [
    {
      title: "Lorem ipsum dolor sit amet consectetur.",
      description: "Ante eget vel dis Lorem ipsum dolor",
      buttonText: "Order Online Now!",
      imgSrc: event7,
    },
    {
      title: "Lorem ipsum dolor sit amet consectetur.",
      description: "Ante eget vel dis Lorem ipsum dolor",
      buttonText: "Order Online Now!",
      imgSrc: event8,
    },
    {
      title: "Lorem ipsum dolor sit amet consectetur.",
      description: "Ante eget vel dis Lorem ipsum dolor",
      buttonText: "Order Online Now!",
      imgSrc: event9,
    },
    {
      title: "Lorem ipsum dolor sit amet consectetur.",
      description: "Ante eget vel dis Lorem ipsum dolor",
      buttonText: "Order Online Now!",
      imgSrc: event10,
    },
    {
      title: "Lorem ipsum dolor sit amet consectetur.",
      description: "Ante eget vel dis Lorem ipsum dolor",
      buttonText: "Order Online Now!",
      imgSrc: event66,
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
      imgSrc: event2,
    },
    {
      title: "Lorem ipsum dolor sit amet consectetur.",
      description: "Ante eget vel dis Lorem ipsum dolor",
      buttonText: "Order Online Now!",
      imgSrc: event3,
    },
    {
      title: "Lorem ipsum dolor sit amet consectetur.",
      description: "Ante eget vel dis Lorem ipsum dolor",
      buttonText: "Order Online Now!",
      imgSrc: event4,
    },
    {
      title: "Lorem ipsum dolor sit amet consectetur.",
      description: "Ante eget vel dis Lorem ipsum dolor",
      buttonText: "Order Online Now!",
      imgSrc: event6,
    }
  ];
  
  return (
    <div className="review-section-frame"  style={{maxWidth:'100%'}}>
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
