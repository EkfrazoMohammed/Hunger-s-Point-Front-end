import React from "react";
import Slider from "react-slick";

import event1 from "../assets/franchise2.png"
import event2 from "../assets/franchise3.png"
import event3 from "../assets/franchise4.png"
// import event4 from "../assets/event4.png"
// import event5 from "../assets/event5.png";
// import event6 from "../assets/event6.png";
import { useNavigate } from "react-router-dom";

export default function FranchiseSlider() {

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
      imgSrc: event2,
    },
    {
      title: "Lorem ipsum dolor sit amet consectetur.",
      description: "Ante eget vel dis Lorem ipsum dolor",
      buttonText: "Order Online Now!",
      imgSrc: event3,
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
