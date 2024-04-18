import React from "react";
import { motion } from "framer-motion";
import {
  routeVariants,
  childVariants,
} from "../../variants/framerMotionVariants";

const DescriptionSection = ({ Title, leftDescription, rightImg}) => {
  return (
    <section className="info_event fp-wrapper-main">
      <p className="fp-para-section-title bottom-a-line">{Title}</p>
      <div className="sec-info--w info_event">
      <div className={`side--w ${!rightImg ? "w-full" : " " }`} >
          <motion.div
            variants={childVariants}
            initial="initial"
            animate="final"
            className="para-container  text-[20px]"
          >
            {leftDescription}
          </motion.div>
        </div>
        {rightImg && (
          <div className="side--w">
            <motion.img
              variants={childVariants}
              initial="initial"
              animate="final"
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
