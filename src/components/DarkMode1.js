import Property1FilledPrimary from "./Property1FilledPrimary";
import "./DarkMode1.css";
import group10 from '../assets/group-10@2x.png'
import footer_logo from '../assets/hunger_logo_fotter.png'
import whatsapp2 from '../assets/whatsapp-image-20240129-at-1227-2@2x.png'
import instadark from '../assets/instagram-dark.svg'
import facebookdark from '../assets/facebook-dark.svg'
import phcopyrightthin from '../assets/phcopyrightthin.svg'



const DarkMode1 = () => {
  return (
    <section className="darkmode1" style={{borderTop:'.2px solid #FFFF'}}>
      {/* <img className="darkmode-item" alt="" src={group10} /> */}
      <div className="social-media-icons" >
        <div className="whats-app-images">
          <div className="instagram-dark-wrapper">
            <div className="instagram-dark" >
              <img
            style={{height:'60px'}}
              // className="mr-3 h-20 w-30"
              loading="eager"
              alt=""
              src={footer_logo}
              onClick={() => handleRout("/")}
            />
              {/* <img
                className="whatsapp-image-2024-01-29-at-13"
                loading="eager"
                alt=""
                src={whatsapp2}
              /> */}
            </div>
          </div>
          <div className="instagram-dark-parent" >
            <img
            style={{width:'30px'}}
              className="instagram-dark-icon1"
              loading="eager"
              alt=""
              src={instadark}
            />
            <img
            style={{width:'30px'}}
              className="facebook-dark-icon1"
              loading="eager"
              alt=""
              src={facebookdark}
            />

            {/* <img
              className="mail-dark-icon1"
              loading="eager"
              alt=""
              src={facebookdark}
            /> */}
            {/* <img
              className="mail-dark-icon1"
              loading="eager"
              alt=""
              src="/mail-dark.svg"
            /> */}
          </div>
        </div>

        <div className="whats-app-images">
          <div className="instagram-dark-wrapper">
            <div className="instagram-dark" style={{fontFamily:`var(--primary-font-family)`,fontSize:`var(--primary-font-size-mini)`}}>
              <div className="fotter-text" style={{marginLeft:'6px'}}>
                <a href="/events">
                  <div>Event & Catering |</div>
                </a>
              </div>
              <div className="fotter-text">
                <a href="/ourstory">
                  <div>Our Story |</div>
                </a>
              </div>
              <div className="fotter-text">
                <a href="/careers">
                  <div>Careers |</div>
                </a>
              </div>
              <div className="fotter-text">
                <a href="/franchise">
                  <div>Franchise |</div>
                </a>
              </div>
              <div className="fotter-text">
                <a href="/contact-us">
                  <div>Contact Us</div>
                </a>
              </div>
            </div>
          </div>
          <div className="instagram-dark-parent">
            <div className="become-a-v-i-p"  style={{fontFamily:`var(--primary-font-family)`,fontSize:`var(--primary-font-size-mini)`}}>
              <img
              style={{height:'10px'}}
                loading="eager"
                alt=""
                src={phcopyrightthin}
              />
              <div >
                2024, Hunger Points, All rights reserved
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default DarkMode1;
