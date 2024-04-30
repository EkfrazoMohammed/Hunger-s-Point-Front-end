import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { motion } from "framer-motion";
import {
  routeVariants,
  childVariants,
} from "../../../variants/framerMotionVariants";

import instagramdark from "../../../assets/instagram-dark.svg";
import facebookdark from "../../../assets/facebook-dark.svg";
import { SubMenuPagesHeader } from "../../../components/SubMenuPagesHeader";
import pageBannerImg from "../../../assets/image-5@2x.png";
import contactUsImg2 from "../../../assets/images/contact-us-side-img-2.png";
import banner2 from "../../../assets/images/sectiob-banner-img-1.jpg";
import DarkMode from "../../../components/DarkMode";
import DescriptionSection from "../../../components/page_section/DescriptionSection";
import ImagesSection from "../../../components/page_section/ImagesSection";

export const ContactUs = () => {
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
        {/* types: side_section(rightImg, leftImg), banner(bannerImg) , banner_with_text(bannerText1, bannerText2)*/}

        <section className="fp-wrapper-main fp-main--contact-us bottom-form-container">
          <div className="para-container">
            <div className="fp-para-section-title fp-para-section-title-md bottom-a-line w-2/3 uppercase font-bold">
              CONTACT US
            </div>
          </div>
          <div className="sec-info--w gap-6 justify-between mt-10">
            <div className="side--w relative">
              <img
                src={contactUsImg2}
                alt="contact us"
                className="absolute contact-us-side-img top-0 left-0 w-full brightness-[30%] contrast-[0.65]"
              />
              <div className="contact-info-container relative z-[2] p-10">
                <h2 className="text-[30px]">Customer Care</h2>
                <hr className="my-4" />
                <p className="mb-2">
                  Please email your detailed inquiry and deadline for response
                  to the following:
                </p>
                <address>
                  <ul className="font-bold text-lg">
                    <li>info@hungerpoints.in</li>
                    <li>marketing@hungerpoints.in</li>
                  </ul>
                </address>
                <hr className="my-4" />
                <div className="follow-us">
                  <div className="header-title">
                    <span className="text-lg">Follow us on</span>
                  </div>
                  <div className="social-links flex gap-3 mt-3">
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <img
                        className="instagram-dark-icon"
                        loading="eager"
                        alt=""
                        src={instagramdark}
                      />
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <img
                        className="facebook-dark-icon"
                        loading="eager"
                        alt=""
                        src={facebookdark}
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="side--w">
              <form onSubmit={formik.handleSubmit} className="fp-form-common">
                <h2 className="text-xl font-bold">
                  To get in touch with our team you can submit a query here.
                </h2>
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
        </section>
      </motion.div>
      <DarkMode />
    </>
  );
};
