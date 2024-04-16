import { useMemo } from "react";
import "./CartDetailsContainer.css";
import edoneilavvdzlhdowaunsplash from '../assets/edoneilavvdzlhdowaunsplash-11@2x.png'
import minus from '../assets/minus.svg'
import add from '../assets/add.svg'

import edoneilavvdzlhdowaunsplash11 from '../assets/edoneilavvdzlhdowaunsplash-1-1@2x.png'
import edoneilavvdzlhdowaunsplash12 from '../assets/edoneilavvdzlhdowaunsplash-1-2@2x.png'
import edoneilavvdzlhdowaunsplash13 from '../assets/edoneilavvdzlhdowaunsplash-1-3@2x.png'


const CartDetailsContainer = ({
  propAlignSelf,
  propHeight,
  propWidth,
  propFlex,
}) => {
  const summary1Style = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      height: propHeight,
      width: propWidth,
      flex: propFlex,
    };
  }, [propAlignSelf, propHeight, propWidth, propFlex]);

  return (
    <div className="summary7" style={summary1Style}>
      <div className="cart-details-container">
        <div className="cart-details1">Cart Details</div>
      </div>
      <div className="items-group">
        <div className="items2">ITEMS</div>
        <div className="quantity3">Quantity</div>
      </div>
      <div className="frame-parent97">
        <div className="frame-wrapper30">
          <div className="frame-parent98">
            <div className="frame-parent99">
              <div className="ed-o-neil-avvdzlhdowa-unsplash-wrapper2">
                <img
                  className="ed-o-neil-avvdzlhdowa-unsplash-icon5"
                  alt=""
                  src={edoneilavvdzlhdowaunsplash}
                />
              </div>
              <div className="frame-parent100">
                <div className="chole-batura-frame">
                  <b className="chole-batura4">Chole Batura</b>
                </div>
                <b className="b11">$5.99</b>
              </div>
            </div>
            <div className="component-14">
              <div className="minus-wrapper4">
                <img className="minus-icon6" alt="" src={minus} />
              </div>
              <div className="div42">1</div>
              <div className="add-wrapper4">
                <img className="add-icon6" alt="" src={add} />
              </div>
            </div>
          </div>
        </div>
        <div className="frame-parent101">
          <div className="frame-parent102">
            <div className="ed-o-neil-avvdzlhdowa-unsplash-wrapper3">
              <img
                className="ed-o-neil-avvdzlhdowa-unsplash-icon6"
                alt=""
                src={edoneilavvdzlhdowaunsplash11}
              />
            </div>
            <div className="frame-parent103">
              <div className="oreo-shake-frame">
                <b className="oreo-shake3">Oreo Shake</b>
              </div>
              <b className="b12">$1.99</b>
            </div>
          </div>
          <div className="component-15">
            <div className="minus-wrapper5">
              <img className="minus-icon7" alt="" src={minus} />
            </div>
            <div className="div43">1</div>
            <div className="add-wrapper5">
              <img className="add-icon7" alt="" src={add}/>
            </div>
          </div>
        </div>
        <div className="frame-wrapper31">
          <div className="frame-parent104">
            <div className="frame-parent105">
              <div className="ed-o-neil-avvdzlhdowa-unsplash-wrapper4">
                <img
                  className="ed-o-neil-avvdzlhdowa-unsplash-icon7"
                  alt=""
                  src={edoneilavvdzlhdowaunsplash12}
                />
              </div>
              <div className="frame-parent106">
                <div className="mango-mojito-frame">
                  <b className="mango-mojito2">Mango Mojito</b>
                </div>
                <b className="b13">$2.99</b>
              </div>
            </div>
            <div className="component-16">
              <div className="minus-wrapper6">
                <img className="minus-icon8" alt="" src={minus} />
              </div>
              <div className="div44">5</div>
              <div className="add-wrapper6">
                <img className="add-icon8" alt="" src={add} />
              </div>
            </div>
          </div>
        </div>
        <div className="frame-wrapper32">
          <div className="frame-parent107">
            <div className="frame-parent108">
              <div className="ed-o-neil-avvdzlhdowa-unsplash-wrapper5">
                <img
                  className="ed-o-neil-avvdzlhdowa-unsplash-icon8"
                  alt=""
                  src={edoneilavvdzlhdowaunsplash13}
                />
              </div>
              <div className="frame-parent109">
                <div className="mango-mojito-wrapper1">
                  <b className="mango-mojito3">Mango Mojito</b>
                </div>
                <b className="b14">$2.99</b>
              </div>
            </div>
            <div className="component-17">
              <div className="minus-wrapper7">
                <img className="minus-icon9" alt="" src={minus} />
              </div>
              <div className="div45">5</div>
              <div className="add-wrapper7">
                <img className="add-icon9" alt="" src={add} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartDetailsContainer;
