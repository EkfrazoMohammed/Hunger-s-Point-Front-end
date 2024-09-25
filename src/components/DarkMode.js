import Property1FilledPrimary from "./Property1FilledPrimary";
import "./DarkMode.css";
import group1 from '../assets/group-10@2x.png'

import whatsapp from '../assets/whatsapp-image-20240129-at-1227-1@2x.png'

import whatsapp2 from '../assets/whatsapp-image-20240129-at-1227-2@2x.png'

import instagramdark from '../assets/instagram-dark.svg'
import facebookdark from '../assets/facebook-dark.svg'
import phcopyrightthin from '../assets/phcopyrightthin.svg'




const DarkMode = () => {
  return (
    <section className="darkmode">
      <img className="darkmode-child" alt="" src={group1} />
      <div className="button-group-frame">
        <div className="dark-mode-image-frames">
          <div className="copyright-thin-frame">
            <div className="recieve-updates-frame">
              <img
                className="whatsapp-image-2024-01-29-at-1"
                loading="eager"
                alt=""
                src={whatsapp}
              />
              <img
                className="whatsapp-image-2024-01-29-at-11"
                loading="eager"
                alt=""
                src={whatsapp2}
              />
            </div>
          </div>
          <div className="dark-mode-parent">
            <img
              className="instagram-dark-icon"
              loading="eager"
              alt=""
              src={instagramdark}
            />
            <img
              className="facebook-dark-icon"
              loading="eager"
              alt=""
              src={facebookdark}
            />

<img
              className="mail-dark-icon"
              loading="eager"
              alt=""
              src={facebookdark}
            />
            {/* <img
              className="mail-dark-icon"
              loading="eager"
              alt=""
              src="/mail-dark.svg"
            /> */}
          </div>
        </div>
        <div className="buttons-frame1">
          <Property1FilledPrimary
            button="Locations"
            property1FilledPrimaryBorder="unset"
            property1FilledPrimaryAlignSelf="unset"
            property1FilledPrimaryBackgroundColor="unset"
            property1FilledPrimaryHeight="49px"
            property1FilledPrimaryPadding="0px 10px"
            buttonDisplay="inline-block"
            buttonFontFamily="Poppins"
            buttonTextTransform="unset"
            buttonFontWeight="unset"
            buttonFontSize="18px"
          />
          <Property1FilledPrimary
            button={`Pickup & Delivery`}
            property1FilledPrimaryBorder="unset"
            property1FilledPrimaryAlignSelf="unset"
            property1FilledPrimaryBackgroundColor="unset"
            property1FilledPrimaryHeight="49px"
            property1FilledPrimaryPadding="0px 10px 0px 4px"
            buttonDisplay="inline-block"
            buttonFontFamily="Poppins"
            buttonTextTransform="unset"
            buttonFontWeight="unset"
            buttonFontSize="18px"
          />
          <Property1FilledPrimary
            button="Menu"
            property1FilledPrimaryBorder="unset"
            property1FilledPrimaryAlignSelf="unset"
            property1FilledPrimaryBackgroundColor="unset"
            property1FilledPrimaryHeight="49px"
            property1FilledPrimaryPadding="0px 10px"
            buttonDisplay="inline-block"
            buttonFontFamily="Poppins"
            buttonTextTransform="unset"
            buttonFontWeight="unset"
            buttonFontSize="18px"
          />
          <Property1FilledPrimary
            button="Privacy"
            property1FilledPrimaryBorder="unset"
            property1FilledPrimaryAlignSelf="unset"
            property1FilledPrimaryBackgroundColor="unset"
            property1FilledPrimaryHeight="49px"
            property1FilledPrimaryPadding="0px 10px"
            buttonDisplay="inline-block"
            buttonFontFamily="Poppins"
            buttonTextTransform="unset"
            buttonFontWeight="unset"
            buttonFontSize="18px"
          />
          <Property1FilledPrimary
            button="Policies"
            property1FilledPrimaryBorder="unset"
            property1FilledPrimaryAlignSelf="unset"
            property1FilledPrimaryBackgroundColor="unset"
            property1FilledPrimaryHeight="49px"
            property1FilledPrimaryPadding="0px 10px"
            buttonDisplay="inline-block"
            buttonFontFamily="Poppins"
            buttonTextTransform="unset"
            buttonFontWeight="unset"
            buttonFontSize="18px"
          />
          <Property1FilledPrimary
            button="Terms and conditions"
            property1FilledPrimaryBorder="unset"
            property1FilledPrimaryAlignSelf="unset"
            property1FilledPrimaryBackgroundColor="unset"
            property1FilledPrimaryHeight="49px"
            property1FilledPrimaryPadding="0px 10px"
            buttonDisplay="inline-block"
            buttonFontFamily="Poppins"
            buttonTextTransform="unset"
            buttonFontWeight="unset"
            buttonFontSize="18px"
          />
        </div>
      </div>
      <div className="frame-group1">
        <img
          className="phcopyright-thin-icon"
          loading="eager"
          alt=""
          src={phcopyrightthin}
        />
        <div className="hunger-points-all">
          2024, The Hunger's Point, All rights reserved
        </div>
      </div>
    </section>
  );
};

export default DarkMode;
