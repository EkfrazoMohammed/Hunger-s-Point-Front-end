import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { motion } from "framer-motion";
import { routeVariants } from '../../../variants/framerMotionVariants';

import { SubMenuPagesHeader } from "../../../components/SubMenuPagesHeader";
import pageBannerImg from "../../../assets/event_top_1.jpg";
import sideImg1 from "../../../assets/images/event-img-1.png";
// import sideImg2 from "../../../assets/images/event-img-2.png";
import sleder4 from "../../../assets/images/event-img-3.png";

import sideImg2 from "../../../assets/images/event-img-2.png";
import sideImg3 from "../../../assets/event_pic_2.jpg";

import DarkMode from "../../../components/DarkMode";
import DescriptionSection from "../../../components/page_section/DescriptionSection";
import ImagesSection from "../../../components/page_section/ImagesSection";
import FeedbackForm from "../../../components/FeedbackForm/feedbackform";
import DarkMode1 from "../../../components/DarkMode1";
import event1 from "../../../assets/event_pic_1.jpg";
import DescriptionSectionEvent from "../../../components/page_section/DescriptionSectionevent";
import EventSlider from "../../../components/EventSlider";


export const Events = () => {
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
          Title="Events & Catering"
          SecondTitle="Mouthwatering Food for Memorable Gatherings"
          // rightImg={sideImg3}
          rightImg={event1}
          leftDescription={
            <>
              <p
                className="mt-4"
              >
                Looking to add a touch of Indian magic to your next gathering? Look no further than Hunger’s Point! We're passionate about bringing the vibrant flavours of Indian cuisine to any social event, big or small.

              </p>

              {/* <p
                className="mt-4"
              >
                Nulla quis qui duis amet sunt. Nisi mollit ad sint exercitation
                anim veniam enim laboris id ad adipisicing laboris aliqua.
                Veniam commodo reprehenderit mollit cupidatat minim officia
                voluptate dolor minim proident et magna dolore. Ea proident sit
                laborum amet amet veniam. Labore Lorem et quis fugiat sint
                fugiat. Enim ad proident nisi ipsum nostrud duis.
              </p> */}
            </>
          }
          secondleftDescription={
            <>
              <p
                className="mt-4"
              >
               Whether you're hosting a festive kitty party, a celebratory gathering, or a corporate event, our team will create a menu that perfectly complements your occasion. We offer a wide selection of delicious Indian appetizers, main courses, snacks & beverages, kindling every taste bud.

              </p>
              <p
                className="mt-4"
              >
               No matter the size of your event, we have the expertise to cater to your specific needs.  We can help you with a menu that fits your dietary preferences, leaving you free to focus on enjoying the company of your guests.


              </p>
            </>
          }
        />

        <DescriptionSectionEvent
          Title="LET US HANDLE THE DETAILS"
          // SecondTitle="Mouthwatering Food for Memorable Gatherings"
          // rightImg={event1}
          image1={sideImg2}
          image2={sleder4}
          image3={sideImg3}
          leftDescription={
            <>
              <p
                className="mt-4"
              >
              Planning an event can be stressful. With Hunger’s Point, you can take the worry out of food preparation. We handle everything from menu planning and preparation to delivery and setup. Our friendly and professional staff is dedicated to ensuring your event runs smoothly, allowing you to relax and participate in the celebration.

              </p>
            </>
          }
       
        />
{/* <EventSlider/> */}
      
        {/* types: side_section(rightImg, leftImg), banner(bannerImg) , banner_with_text(bannerText1, bannerText2)*/}
        {/* <ImagesSection
          type="side_section"
          rightImg={sideImg2}
          leftImg={sideImg3}
        /> */}
        <ImagesSection
          type="side_section"
          rightImg={sideImg3}
          leftImg={sleder4}
        />
        {/* <ImagesSection type="banner" bannerImg={sideImg2} /> */}
        {/* <ImagesSection
          type="banner_with_text"
          bannerImg={sectionBanner}
          bannerText={
            <h1 className="text-[30px] text-center">
              Wait is over! Own a Store at your convenient location now.
            </h1>
          }
        /> */}

        <section className="fp-wrapper-main bottom-form-container">
          <div className="sec-info--w gap-6 justify-between">
            <div >
              <div className="para-container">
              <p className="what-we-believe4 fp-para-section-title bottom-a-line" >Contact Us Today!</p>
              <p
                className="mt-4"
              >
              Ready to add a touch of Indian flavour to your next event? Contact The Hunger’s Point today! We'd be happy to discuss your catering needs and create a menu that will leave a lasting impression on your guests.
              </p>
              </div>
              {/* <img style={{ borderRadius: '10px' }} src={sleder4} alt="..." /> */}
            </div>
            <div className="">
              <FeedbackForm />
            </div>
          </div>
        </section>
      </motion.div>
      <DarkMode1 />
    </>
  );
};
