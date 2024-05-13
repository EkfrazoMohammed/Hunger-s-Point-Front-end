import React from "react";
import { motion } from "framer-motion";
import {
  routeVariants,
  childVariants,
} from "../../variants/framerMotionVariants";

const DescriptionSection = ({ Title,SecondTitle, leftDescription,secondleftDescription, rightImg}) => {
  return (
    <section className="info_event fp-wrapper-main">
      
      <div className="sec-info--w info_event">
        
      <div className={`side--w ${!rightImg ? "w-full" : " " }`} >
          <motion.div
            variants={childVariants}
            initial="initial"
            animate="final"
            className="para-container"
            style={{fontSize:`var(--primary-font-size)`,fontFamily:`var(--primary-font-family)`}}
          >
          {Title && <p className="what-we-believe4 fp-para-section-title bottom-a-line" >{Title}</p>}
            {leftDescription}
            <p className="what-we-believe4 bottom-a-line" style={{ maxWidth: "100%",marginTop:'20px', fontSize:`var(--header-font-size-m)` }}>{SecondTitle}</p>
            {secondleftDescription}
          </motion.div>
        </div>
        
        
        {rightImg && (
          <div className="side--w" >
            <motion.img
              variants={childVariants}
              initial="initial"
              animate="final"
              style={{borderRadius:'10px'}}
              src={rightImg}
              alt="..."
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default DescriptionSection;
