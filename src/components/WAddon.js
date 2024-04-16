import ChildFrame from "./ChildFrame";
import "./WAddon.css";

import edoneilavvdzlhdowaunsplash from  "../assets//edoneilavvdzlhdowaunsplash-11@2x.png"
import minus from  "../assets/minus.svg"
import add from  "../assets/add.svg"
import close from  "../assets/close.svg";


const WAddon = ({ onClose }) => {
  return (
    <div className="w-addon">
      <section className="addon-frame">
        <div className="child-frame-parent">
          <div className="child-frame">
            <img
              className="ed-o-neil-avvdzlhdowa-unsplash-icon5"
              loading="eager"
              alt=""
              src={edoneilavvdzlhdowaunsplash}
            />
          </div>
          <div className="title-text">
            <h3 className="oreo-shake1">Oreo Shake</h3>
          </div>
          <div className="frame-with-divider">
            <div className="addons-frame">
              <div className="price-text">
                <div className="price1">Price</div>
                <b className="blank-space">$5.99</b>
              </div>
              <div className="minus-add-frame1">
                <div className="quantity2">Quantity</div>
                <div className="frame-with-subtraction">
                  <div className="container-with-minus-add">
                    <img
                      className="minus-icon5"
                      loading="eager"
                      alt=""
                      src={minus}
                    />
                  </div>
                  <b className="close-instance1">1</b>
                  <div className="container-with-minus-add1">
                    <img
                      className="add-icon6"
                      loading="eager"
                      alt=""
                      src={add}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img
            className="close-icon1"
            loading="eager"
            alt=""
            src={close}
          />
        </div>
      </section>
      <ChildFrame />
      <div className="w-addon-inner">
        <div className="addon-frame-parent">
          <div className="addon-frame1">
            <div className="items-added">Items Added</div>
            <b className="button-instance1">1</b>
          </div>
          <button className="component-19">
            <div className="button30">Add to Basket</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default WAddon;
