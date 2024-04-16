import { useCallback } from "react";
import Header21 from "./Header21";
import { useNavigate } from "react-router-dom";
import Property1FilledPrimary from "./Property1FilledPrimary";
import Property1OutlineIcon from "./Property1OutlineIcon";
import "./HeaderTop.css";
import location from  "../assets/location.svg";
import user1 from  "../assets/user1.svg";

import logo2x from  "../assets/logo@2x.png";


const HeaderTop = () => {
  const navigate = useNavigate();

  const onLogoImageClick = useCallback(() => {
    navigate("/homepage");
  }, [navigate]);

  const onButtonsStatesContainerClick = useCallback(() => {
    navigate("/location");
  }, [navigate]);

  const onOurDeliveryPartnersContaineClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <header className="menu-button">
      <Header21
        headerFlexWrap="unset"
        ellipseIconTop="-1px"
        basketButtonMinWidth="unset"
      />
      <div className="header4">
        <div className="view-all-stores-button">
          <img
            className="logo-icon3"
            loading="eager"
            alt=""
            src={logo2x}
            onClick={onLogoImageClick}
          />
        </div>
        <div className="hospital-st-fort-mc-murray-sta1">
          <div
            className="buttons-states5"
            onClick={onButtonsStatesContainerClick}
          >
            <div className="phcopyrightthin">
              <img
                className="location-icon11"
                loading="eager"
                alt=""
                src={location}
              />
              <div className="select-location3">SELECT Location</div>
            </div>
            <div className="category-container">
              <div className="location-frame2">
                <div className="set-your-location3">Set your location here</div>
              </div>
              <Property1FilledPrimary
                button="LOCATE STORE"
                property1FilledPrimaryBorder="none"
                property1FilledPrimaryAlignSelf="unset"
                property1FilledPrimaryBackgroundColor="#c21f24"
                property1FilledPrimaryHeight="unset"
                property1FilledPrimaryPadding="7px 12px 7px 8px"
                buttonDisplay="inline-block"
                buttonFontFamily="Inter"
                buttonTextTransform="unset"
                buttonFontWeight="unset"
                buttonFontSize="10px"
              />
            </div>
          </div>
          <Property1FilledPrimary
            button="Locations"
            property1FilledPrimaryBorder="unset"
            property1FilledPrimaryAlignSelf="unset"
            property1FilledPrimaryBackgroundColor="unset"
            property1FilledPrimaryHeight="49px"
            property1FilledPrimaryPadding="0px 12px"
            buttonDisplay="inline-block"
            buttonFontFamily="Poppins"
            buttonTextTransform="uppercase"
            buttonFontWeight="unset"
            buttonFontSize="16px"
          />
          <div className="buttons-states-dark59">
            <div className="button71">FRANCHISE</div>
          </div>
          <Property1FilledPrimary
            button="MENU"
            property1FilledPrimaryBorder="unset"
            property1FilledPrimaryAlignSelf="unset"
            property1FilledPrimaryBackgroundColor="unset"
            property1FilledPrimaryHeight="49px"
            property1FilledPrimaryPadding="0px 12px"
            buttonDisplay="inline-block"
            buttonFontFamily="Poppins"
            buttonTextTransform="uppercase"
            buttonFontWeight="unset"
            buttonFontSize="16px"
          />
          <Property1FilledPrimary
            button="ORDER NOW"
            property1FilledPrimaryBorder="unset"
            property1FilledPrimaryAlignSelf="unset"
            property1FilledPrimaryBackgroundColor="unset"
            property1FilledPrimaryHeight="49px"
            property1FilledPrimaryPadding="0px 12px 0px 8px"
            buttonDisplay="inline-block"
            buttonFontFamily="Poppins"
            buttonTextTransform="uppercase"
            buttonFontWeight="unset"
            buttonFontSize="16px"
          />
          <div className="location3">
            <Property1OutlineIcon
              iconClassNames="/basket.svg"
              buttonText="2"
              showButton
              property1OutlineIconBorderRadius="56px"
              property1OutlineIconHeight="49px"
              property1OutlineIconAlignSelf="unset"
              property1OutlineIconPosition="relative"
              property1OutlineIconBackgroundColor="unset"
              property1OutlineIconMargin="unset"
              property1OutlineIconTop="unset"
              property1OutlineIconLeft="unset"
              buttonWidth="unset"
              bDisplay="flex"
              bHeight="21px"
            />
            <div
              className="our-delivery-partners-containe"
              onClick={onOurDeliveryPartnersContaineClick}
            >
              <button className="buttons-states-dark60">
                <img className="user-icon3" alt="" src={user1} />
                <b className="button72">2</b>
              </button>
              <div className="john-smith8">John SMITH</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderTop;
