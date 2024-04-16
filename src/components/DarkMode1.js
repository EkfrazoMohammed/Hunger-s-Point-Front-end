import Property1FilledPrimary from "./Property1FilledPrimary";
import "./DarkMode1.css";
import group10 from '../assets/group-10@2x.png'
import whatsapp1  from '../assets/whatsapp-image-20240129-at-1227-1@2x.png'
import whatsapp2  from '../assets/whatsapp-image-20240129-at-1227-2@2x.png'
import instadark  from '../assets/instagram-dark.svg'
import facebookdark  from '../assets/facebook-dark.svg'
import phcopyrightthin  from '../assets/phcopyrightthin.svg'



const DarkMode1 = () => {
  return (
    <section className="darkmode1">
      <img className="darkmode-item" alt="" src={group10} />
      <div className="social-media-icons">
        <div className="whats-app-images">
          <div className="instagram-dark-wrapper">
            <div className="instagram-dark">
              <img
                className="whatsapp-image-2024-01-29-at-12"
                loading="eager"
                alt=""
                src={whatsapp1}
              />
              <img
                className="whatsapp-image-2024-01-29-at-13"
                loading="eager"
                alt=""
                src={whatsapp2}
              />
            </div>
          </div>
          <div className="instagram-dark-parent">
            <img
              className="instagram-dark-icon1"
              loading="eager"
              alt=""
              src={instadark}
            />
            <img
              className="facebook-dark-icon1"
              loading="eager"
              alt=""
              src={facebookdark}
            />

<img
              className="mail-dark-icon1"
              loading="eager"
              alt=""
              src={facebookdark}
            />
            {/* <img
              className="mail-dark-icon1"
              loading="eager"
              alt=""
              src="/mail-dark.svg"
            /> */}
          </div>
        </div>
        <div className="dark-mode-toggle3">
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
      <div className="become-a-v-i-p">
        <img
          className="phcopyright-thin-icon1"
          loading="eager"
          alt=""
          src={phcopyrightthin}
        />
        <div className="hunger-points-all1">
          2024, Hunger Points, All rights reserved
        </div>
      </div>
    </section>
  );
};

export default DarkMode1;
