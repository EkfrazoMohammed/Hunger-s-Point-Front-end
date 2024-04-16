import { useState, useCallback } from "react";
import WoAddon from "./WoAddon";
import PortalPopup from "./PortalPopup";
import "./DishType.css";
import wishlist  from '../assets/wishlist.svg'

const DishType = ({
  cartItem04,
  choleBatura,
  prop,
  cartItem03,
  choleBatura1,
  none,
}) => {
  const [isWoAddonOpen, setWoAddonOpen] = useState(false);

  const openWoAddon = useCallback(() => {
    setWoAddonOpen(true);
  }, []);

  const closeWoAddon = useCallback(() => {
    setWoAddonOpen(false);
  }, []);

  return (
    <>
      <div className="dish-type4">
        <div className="menu-list4" onClick={openWoAddon}>
          <div className="dish-type5">
            <img
              className="cartitem-04-icon"
              loading="eager"
              alt=""
              src={cartItem04}
            />
            <div className="dish-type6">
              <div className="wishlist">
                <div className="chole-batura6">
                  <b className="chole-batura7">{choleBatura}</b>
                  <div className="component-list">
                    <img
                      className="wishlist-icon4"
                      loading="eager"
                      alt=""
                      src={wishlist}
                    />
                  </div>
                </div>
                <div className="component-list1">
                  <div className="location-buttons">
                    <div className="wrapper9">
                      <div className="div14">{prop}</div>
                    </div>
                    <div className="menu-list-components" />
                  </div>
                </div>
              </div>
              <div className="component-1-wrapper2">
                <button className="component-110">
                  <div className="button99">ADD</div>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="menu-list5">
          <div className="cartitem-03-parent">
            <img
              className="cartitem-03-icon"
              loading="eager"
              alt=""
              src={cartItem03}
            />
            <div className="wishlist-components-parent">
              <div className="wishlist-components">
                <div className="chole-batura-parent2">
                  <b className="chole-batura8">{choleBatura1}</b>
                  <div className="wishlist-wrapper2">
                    <img
                      className="wishlist-icon5"
                      loading="eager"
                      alt=""
                      src={wishlist}
                    />
                  </div>
                </div>
                <div className="menu-list-frames">
                  <div className="frame-parent30">
                    <div className="none-wrapper">
                      <div className="none">{none}</div>
                    </div>
                    <div className="component-button-frames" />
                  </div>
                </div>
              </div>
              <div className="component-1-wrapper3">
                <button className="component-111">
                  <div className="button41">ADD</div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isWoAddonOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeWoAddon}
        >
          <WoAddon onClose={closeWoAddon} />
        </PortalPopup>
      )}
    </>
  );
};

export default DishType;
