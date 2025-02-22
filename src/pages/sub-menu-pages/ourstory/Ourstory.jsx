import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { motion } from "framer-motion";
import {
  routeVariants,
  childVariants,
} from "../../../variants/framerMotionVariants";

import { SubMenuPagesHeader } from "../../../components/SubMenuPagesHeader";
import pageBannerImg from "../../../assets/image-5@2x.png";
import contactUsImg from "../../../assets/images/contact-us-side-img.png";
import banner2 from "../../../assets/images/sectiob-banner-img-1.jpg";
import DarkMode from "../../../components/DarkMode";
import DescriptionSection from "../../../components/page_section/DescriptionSection";
import ImagesSection from "../../../components/page_section/ImagesSection";
import DarkMode1 from "../../../components/DarkMode1";
import top_banner from "../../../assets/our_story_top.jpg"


export const Ourstory = () => {
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
        <SubMenuPagesHeader bannerImg={top_banner} />
        <DescriptionSection
          Title="OUR STORY"
          leftDescription={
            <>
              <p className="mt-4" style={{ fontSize: `var(--primary-font-size)`, fontFamily: `var(--primary-font-family)` }}>
                Welcome to The Hunger’s Point, your one-stop shop for a taste of India! We're a passionate group of people, bound by the love of authentic Indian cuisine and a desire to share it with everyone.
              </p>

              {/* <p className="mt-4" style={{fontSize:`var(--primary-font-size)`,fontFamily:`var(--primary-font-family)`}}>
                Nulla quis qui duis amet sunt. Nisi mollit ad sint exercitation
                anim veniam enim laboris id ad adipisicing laboris aliqua.
                Veniam commodo reprehenderit mollit cupidatat minim officia
                voluptate dolor minim proident et magna dolore. Ea proident sit
                laborum amet amet veniam. Labore Lorem et quis fugiat sint
                fugiat. Enim ad proident nisi ipsum nostrud duis.
              </p> */}
            </>
          }
        />

        <DescriptionSection
          Title="It Began with a Dream"
          leftDescription={
            <>
              <p className="mt-4" style={{ fontSize: `var(--primary-font-size)`, fontFamily: `var(--primary-font-family)` }}>
                Our founders have been captivated by Indian flavours for over a decade. Their culinary journeys made them bring the vibrant spices and rich traditions of Indian cuisine to the Canadian tables. With 10+ years of experience in the restaurant industry, they knew exactly how to craft a dining experience that would captivate taste buds and leave you wanting more every time.

              </p>


            </>
          }
        />

        <DescriptionSection
          Title="A Team Fueled by Passion
          "
          leftDescription={
            <>
              <p className="mt-4" style={{ fontSize: `var(--primary-font-size)`, fontFamily: `var(--primary-font-family)` }}>
                At Hunger’s Point, we're more than just a restaurant; we're a family. Our management team comes with a wealth of experience in the culinary world. Their passion for quality and customer satisfaction speaks for themselves. We're constantly working hard to perfect our offerings, making each visit to our restaurant a delightful exploration of Indian flavours.


              </p>


            </>
          }
        />

        <DescriptionSection
          Title="Our Vision: The Fastest-Growing Taste of India"
          leftDescription={
            <>
              <p className="mt-4" style={{ fontSize: `var(--primary-font-size)`, fontFamily: `var(--primary-font-family)` }}>
                We don't just cook food, we give experiences. Our vision is to become the fastest-growing segment of quick-service restaurants offering authentic Indian cuisine. We believe everyone deserves to experience the joy of Indian flavours and we're committed to making them accessible and delicious.


              </p>

              <p className="mt-4" style={{ fontSize: `var(--primary-font-size)`, fontFamily: `var(--primary-font-family)` }}>
                Join us on this flavorful adventure! We invite you to explore our menu, experience our vibrant atmosphere, and discover why The Hunger’s Point is your perfect destination for a taste of India.



              </p>


            </>
          }
        />
        {/* types: side_section(rightImg, leftImg), banner(bannerImg) , banner_with_text(bannerText1, bannerText2)*/}
        <ImagesSection
          type="banner_with_text"
          bannerImg={banner2}
          bannerText={
            <h1 className=" text-center " style={{ fontSize: `var(--sub-header-font-size)`, fontFamily: `var(--primary-font-family-bold)`, color: `var(--hp-yellow-600)` }} >
              Wait is over! Own a Store at your convenient location now.
            </h1>
          }
        />

        {/* <section className="fp-wrapper-main bottom-form-container">
          <div className="para-container">
            <div className="fp-para-section-title fp-para-section-title-md bottom-a-line w-2/3 uppercase font-bold">
              Become a partner with us
            </div>
            <div className="fp-para-section-title-sm w-2/3 mt-2">
              Officia ex aute aliqua excepteur eu mollit Lorem in aute veniam
              esse dolor. Duis ad nisi culpa fugiat aliquip esse. Voluptate ad
              sit consectetur eu magna voluptate duis dolore Lorem id amet in
              excepteur eu. Duis reprehenderit
            </div>
          </div>
          <div className="sec-info--w gap-6 justify-between mt-10 h-[520px]">
            <div className="side--w h-full">
              <img src={contactUsImg} alt="contact us" className="h-full w-full object-cover" />
            </div>
            <div className="side--w h-full">
              <form onSubmit={formik.handleSubmit} className="fp-form-common">
                <h2 className="text-xl font-bold">To get in touch with our team you can submit a query here.</h2>
                <div className="fp-input-group">
                  <div className="fp-input-w">
                    <input
                      type="text"
                      name="first_name"
                      placeholder="First name"
                      className="user-field-input-common"
                      value={formik.values.full_name}
                      onChange={formik.handleChange}
                    />
                    {formik.errors.first_name && formik.touched.first_name && (
                      <p className="fp-error-text text-red-300 mt-1 ml-1">
                        {formik.errors.first_name}
                      </p>
                    )}
                  </div>
                  <div className="fp-input-w">
                    <input
                      type="text"
                      name="last_name"
                      placeholder="Last name"
                      className="user-field-input-common"
                      value={formik.values.last_name}
                      onChange={formik.handleChange}
                    />
                    {formik.errors.last_name && formik.touched.last_name && (
                      <p className="fp-error-text text-red-300 mt-1 ml-1">
                        {formik.errors.last_name}
                      </p>
                    )}
                  </div>
                </div>
                <div className="fp-input-w">
                  <input
                    type="email"
                    name="email"
                    className="user-field-input-common"
                    placeholder="Email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                  />
                  {formik.errors.email && formik.touched.email && (
                    <p className="fp-error-text text-red-300 mt-1 ml-1">
                      {formik.errors.email}
                    </p>
                  )}
                </div>
                <div className="fp-input-w">
                  <input
                    type="number"
                    name="phone_no"
                    className="user-field-input-common"
                    placeholder="Phone Number"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                  />
                  {formik.errors.email && formik.touched.email && (
                    <p className="fp-error-text text-red-300 mt-1 ml-1">
                      {formik.errors.email}
                    </p>
                  )}
                </div>
               
                <div className="fp-input-w">
                  <textarea
                    type="text"
                    name="message"
                    className="user-field-textarea-common h-[130px]"
                    placeholder="Message"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                  />
                </div>
                <div>
                  <button type="submit" className="fp-primary-btn">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section> */}
      </motion.div>
      <DarkMode1 />
    </>
  );
};
