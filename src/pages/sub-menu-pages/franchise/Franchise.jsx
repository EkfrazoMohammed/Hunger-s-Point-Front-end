import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { motion } from "framer-motion";
import {
  routeVariants,
} from "../../../variants/framerMotionVariants";

import { SubMenuPagesHeader } from "../../../components/SubMenuPagesHeader";
import pageBannerImg from "../../../assets/francise_top1.png";
import contactUsImg from "../../../assets/images/contact-us-side-img.png";
import banner2 from "../../../assets/images/sectiob-banner-img-1.jpg";
import DarkMode from "../../../components/DarkMode";
import DescriptionSection from "../../../components/page_section/DescriptionSection";
import ImagesSection from "../../../components/page_section/ImagesSection";
import FeedbackForm from "../../../components/FeedbackForm/feedbackform";
import DarkMode1 from "../../../components/DarkMode1";
import EventSlider from "../../../components/EventSlider";
import "../franchise/Franchise.css"


export const Franchise = () => {
  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      email: "",
      phone_no: "",
      no_of_guests: "",
    },
    validationSchema: Yup.object({
      first_name: Yup.string()
        .min(2, "Mininum 2 characters")
        .max(15, "Maximum 15 characters")
        .required("Required!"),
      last_name: Yup.string()
        .min(2, "Mininum 2 characters")
        .max(15, "Maximum 15 characters")
        .required("Required!"),
      email: Yup.string().email("Invalid email format").required("Required!"),
      phone_no: Yup.string()
        .email("Invalid email format")
        .required("Required!"),
      no_of_guests: Yup.string().required("Please enter number of guest!"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <>
      <motion.div
        variants={routeVariants}
        initial="initial"
        animate="final"
        className="fp-container-main container--events"
      >
        <SubMenuPagesHeader bannerImg={pageBannerImg} />
        <DescriptionSection
          Title="Franchise"
          leftDescription={
            <>
              <p className="mt-4" style={{fontSize:`var(--primary-font-size)`,fontFamily:`var(--primary-font-family)`}} >
              Are you a passionate entrepreneur with a love for Indian cuisine? The Hunger's Point welcomes ambitious individuals to join as franchise partners!
              </p>
            </>
          }
        />
        {/* types: side_section(rightImg, leftImg), banner(bannerImg) , banner_with_text(bannerText1, bannerText2)*/}
        <ImagesSection
          type="banner_with_text"
          bannerImg={banner2}
          bannerText={
            <h1 className="text-center" style={{fontSize:`var(--sub-header-font-size)`,fontFamily:`var(--primary-font-family-bold)`,color:`var(--hp-yellow-600)`}} >
              Wait is over! Own a Store at your convenient location now.
            </h1>
          }
        />

        <section className="fp-wrapper-main bottom-form-container">
          <div className="para-container">
            <div className="what-we-believe4 fp-para-section-title bottom-a-line">
              Become a partner with us
            </div>
            <div className="fp-para-section-title-sm  mt-4" style={{fontSize:`var(--primary-font-size)`,fontFamily:`var(--primary-font-family)`}}  >
            Build your own business with the power of a recognized brand. Share the joy of authentic Indian cuisine with your local area. Owning a Hunger's Point franchise is more than just running a restaurant – it's about sharing a culinary experience and fostering a connection. If you're ready to take on a flavorful journey, we invite you to learn more about our exciting franchise opportunities!  Contact us today to explore the delicious possibilities!
            </div>
          </div>
          <div className="sec-info--w gap-6 justify-between mt-10 " style={{fontSize:`var(--primary-font-size)`,fontFamily:`var(--primary-font-family)`}} >
            <div className="side--w h-full">
              <EventSlider/>
              {/* <img src={contactUsImg} alt="contact us" className="h-full w-full object-cover" /> */}
            </div>
            <div className="form-franchise sub-pages-forms">
             <FeedbackForm heading={'Get In Touch With Us'} selection={2}/>
            </div>
          </div>
        </section>
      </motion.div>
      <DarkMode1 />
    </>
  );
};
