import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { motion } from "framer-motion";
import { routeVariants } from '../../../variants/framerMotionVariants';

import { SubMenuPagesHeader } from "../../../components/SubMenuPagesHeader";
import pageBannerImg from "../../../assets/image-5@2x.png";
import sideImg1 from "../../../assets/images/event-img-1.png";
import sideImg2 from "../../../assets/images/event-img-2.png";
import sideImg3 from "../../../assets/images/event-img-3.png";
import DarkMode from "../../../components/DarkMode";
import DescriptionSection from "../../../components/page_section/DescriptionSection";
import ImagesSection from "../../../components/page_section/ImagesSection";



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
          Title="Events"
          rightImg={sideImg1}
          leftDescription={
            <>
              <p
                className="mt-4"
              >
                Dolore ullamco mollit elit non ea pariatur mollit magna
                cupidatat labore sunt consequat elit. Est ad cupidatat velit
                anim aliquip in anim mollit. Excepteur incididunt ex sint labore
                velit ut aliquip ad magna exercitation qui dolor laborum. Veniam
                ad consectetur aliquip cupidatat aute sunt cupidatat ea.
                Pariatur pariatur qui esse cupidatat commodo ullamco ex. Nulla
                officia veniam ex culpa officia ad ex dolor nostrud in. Ullamco
                labore nulla proident nisi. Cupidatat sit aute esse id.
              </p>

              <p
                className="mt-4"
              >
                Nulla quis qui duis amet sunt. Nisi mollit ad sint exercitation
                anim veniam enim laboris id ad adipisicing laboris aliqua.
                Veniam commodo reprehenderit mollit cupidatat minim officia
                voluptate dolor minim proident et magna dolore. Ea proident sit
                laborum amet amet veniam. Labore Lorem et quis fugiat sint
                fugiat. Enim ad proident nisi ipsum nostrud duis.
              </p>
            </>
          }
        />
        {/* types: side_section(rightImg, leftImg), banner(bannerImg) , banner_with_text(bannerText1, bannerText2)*/}
        <ImagesSection
          type="side_section"
          rightImg={sideImg2}
          leftImg={sideImg3}
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
            <div className="side--w">
              <div className="para-container">
                <div className="fp-para-section-title-sm w-2/3">
                  Fill us a simple form to get in souch
                </div>
                <div className="fp-para-section-title w-2/3">
                  Fill us a simple form to get in souch
                </div>
              </div>
            </div>
            <div className="side--w">
              <form onSubmit={formik.handleSubmit} className="fp-form-common">
                <h2 className="text-xl">Give your feedback below</h2>
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
                    type="text"
                    name="subject"
                    className="user-field-input-common"
                    placeholder="Subject"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                  />
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
                  <input
                    type="number"
                    name="no_of_guests"
                    className="user-field-input-common"
                    placeholder="No of Guests"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                  />
                  {formik.errors.no_of_guests &&
                    formik.touched.no_of_guests && (
                      <p className="fp-error-text text-red-300 mt-1 ml-1">
                        {formik.errors.no_of_guests}
                      </p>
                    )}
                </div>
                <div className="fp-input-w">
                  <select
                    name="event_ocation"
                    value={formik.values.email}
                    className="user-field-input-common user-field-select-common"
                    onChange={formik.handleChange}
                  >
                    <option value="" label="Event Location">
                      Event Location
                    </option>
                    <option value="red" label="red">
                      red
                    </option>
                    <option value="blue" label="blue">
                      blue
                    </option>
                    <option value="green" label="green">
                      green
                    </option>
                  </select>
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
