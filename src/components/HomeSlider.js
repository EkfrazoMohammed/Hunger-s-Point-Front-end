import React from "react";
import Slider from "react-slick";
import banner1 from "../assets/Home_banner_1.jpg"
import banner2 from "../assets/hunger2_banner.jpg"
import banner3 from "../assets/homebanner22.jpg"
import banner4 from "../assets/Home_banner_4.jpg"
import banner5 from "../assets/homebanner33.jpg"
import homebanner from '../assets/hunger_new_banner_1.jpg';
import open_now_banner from "../assets/ashik_open_now1.png"
import homebanner2 from '../assets/hunger_new_banner_2.jpg';
import { useNavigate } from "react-router-dom";

export default function SimpleSlider() {
  const banner_placeholder = 'https://placehold.co/1280x380'
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
    // navigate("/productpage?id=1");
  }
  // Dummy data for Slider items
  const dummyData = [
    {
      title: "Lorem ipsum dolor sit amet consectetur.",
      description: "Ante eget vel dis Lorem ipsum dolor",
      buttonText: "Order Online Now!",
      imgSrc: open_now_banner,
    },
    {
      title: "Lorem ipsum dolor sit amet consectetur.",
      description: "Ante eget vel dis Lorem ipsum dolor",
      buttonText: "Order Online Now!",
      imgSrc: homebanner2,
    },
    // {
    //   title: "Lorem ipsum dolor sit amet consectetur.",
    //   description: "Ante eget vel dis Lorem ipsum dolor",
    //   buttonText: "Order Online Now!",
    //   imgSrc: banner3,
    // },
    // {
    //   title: "Lorem ipsum dolor sit amet consectetur.",
    //   description: "Ante eget vel dis Lorem ipsum dolor",
    //   buttonText: "Order Online Now!",
    //   imgSrc: banner4,
    // },
    // {
    //   title: "Lorem ipsum dolor sit amet consectetur.",
    //   description: "Ante eget vel dis Lorem ipsum dolor",
    //   buttonText: "Order Online Now!",
    //   imgSrc: banner5,
    // }
  ];
  
  return (
    <Slider {...settings}>
      {dummyData.map((item, index) => (
        <div key={index} onClick={() => Buttonclicked(item)}>
          
          <img src={item.imgSrc} alt={`Banner ${index + 1}`} style={{maxHeight:'456px',objectFit:"cover"}} />
        </div>
      ))}
    </Slider>
  );
}
