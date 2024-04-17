import React from 'react'
import './SubMenuPagesHeader.modules.css'; 
import bannerImg1 from "../assets/image-5@2x.png"

export const SubMenuPagesHeader = (props) => {
  return (
    <div className='banner-top'>
      <img src={props.bannerImg} className='banner-image' alt="..." />
    </div>
  )
}
