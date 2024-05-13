import React from "react";
import { motion } from "framer-motion";
import {
  routeVariants,
  childVariants,
} from "../../variants/framerMotionVariants";
import EventSlider from "../EventSlider";

const DescriptionSectionEvent = ({ Title,SecondTitle, leftDescription,secondleftDescription, image1,image2,image3}) => {
  return (
    <section className="info_event fp-wrapper-main">
      
      <div className="sec-info--w info_event">
        
      <div className={`side--w review-section-frame  ${!image1 ? "w-full" : " " }`} >
      <EventSlider/>
          {/* <motion.div
            variants={childVariants}
            initial="initial"
            animate="final"
            className="para-container"
            style={{fontSize:`var(--primary-font-size)`,fontFamily:`var(--primary-font-family)`}}
          >
            <p className="what-we-believe4 fp-para-section-title bottom-a-line" >{Title}</p>
            {leftDescription}
            <p className="what-we-believe4 fp-para-section-title bottom-a-line mt-10" style={{ maxWidth: "100%",fontSize:`var(--sub-header-font-size)` }}>{SecondTitle}</p>
            {secondleftDescription}
            
          </motion.div> */}
        </div>
        
        
        {image1 && (
          <div className="side--w" style={{display:'flex'}}>
             <motion.div
            variants={childVariants}
            initial="initial"
            animate="final"
            className="para-container"
            style={{fontSize:`var(--primary-font-size)`,fontFamily:`var(--primary-font-family)`}}
          >
            <p className="what-we-believe4  bottom-a-line" style={{fontSize:`var(--header-font-size-m)`}}>{Title}</p>
            {leftDescription}
            <p className="what-we-believe4 fp-para-section-title bottom-a-line mt-10" style={{ maxWidth: "100%", fontSize:`var(--header-font-size-m)` }}>{SecondTitle}</p>
            {secondleftDescription}
            
          </motion.div>
            {/* <EventSlider/> */}
            {/* <motion.img
              variants={childVariants}
              initial="initial"
              animate="final"
              style={{borderRadius:'10px',height:'50vh', marginRight:'10px'}}
              src={image1}
              alt="..."
            /> */}
            {/* <motion.img
              variants={childVariants}
              initial="initial"
              animate="final"
              style={{borderRadius:'10px',height:'15vh', marginRight:'10px'}}
              src={image2}
              alt="..."
            />
            <motion.img
              variants={childVariants}
              initial="initial"
              animate="final"
              style={{borderRadius:'10px',height:'15vh', marginRight:'10px'}}
              src={image3}
              alt="..."
            /> */}
          </div>
        )}

      
      </div>
    </section>
  );
};

export default DescriptionSectionEvent;
