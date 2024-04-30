import Property1FilledPrimary from "./Property1FilledPrimary";
import "./DarkMode1.css";
import group10 from '../assets/group-10@2x.png'
import whatsapp1 from '../assets/whatsapp-image-20240129-at-1227-1@2x.png'
import whatsapp2 from '../assets/whatsapp-image-20240129-at-1227-2@2x.png'
import instadark from '../assets/instagram-dark.svg'
import facebookdark from '../assets/facebook-dark.svg'
import phcopyrightthin from '../assets/phcopyrightthin.svg'



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
        <div style={{marginTop:'20px'}} className="dark-mode-toggle3">
          <div className="">
            <a href="/events" className="button button-design">
              <b>EVENT/CATERING</b>
            </a>
          </div>
          <div className="">
            <a href="/ourstory" className="button button-design">
              <b>OUR STORY</b>
            </a>
          </div>
          <div className="">
            <a href="/careers" className="button button-design">
              <b>CAREERS</b>
            </a>
          </div>
          <div className="">
            <a href="/franchise" className="button button-design">
              <b>FRANCHISE</b>
            </a>
          </div>
          <div className="">
            <a href="/contact-us" className="button button-design">
              <b>CONTACT US</b>
            </a>
          </div>
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
