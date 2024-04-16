import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Property1FilledPrimary from "./Property1FilledPrimary";
import Property1OutlineIcon from "./Property1OutlineIcon";
import "./Header11.css";
import logo2 from  "../assets/logo@2x.png";
import location from  "../assets/location.svg";
import basket from  "../assets/basket.svg";
import user from  "../assets/user.svg";

const Header11 = () => {
  const navigate = useNavigate();

  const onLogoImageClick = useCallback(() => {
    navigate("/homepage");
  }, [navigate]);

  const onButtonsStatesContainerClick = useCallback(() => {
    navigate("/location");
  }, [navigate]);

  const onSigninButtonClick = useCallback(() => {
    navigate("/Signin");
  }, [navigate]);

  const onOrderNowClick = useCallback(() => {
    navigate("/productpage");
  }, [navigate]);

  const onBasketButtonClick = useCallback(() => {
    navigate("/basket");
  }, [navigate]);

  return (
    <header className="header7">
      <div className="customer-service-section">
        <img
          className="logo-icon5"
          loading="eager"
          alt=""
          src={logo2}
          onClick={onLogoImageClick}
        />
      </div>
      <div className="customer-service-man-answer">
        <div
          className="buttons-states7"
          onClick={onButtonsStatesContainerClick}
        >
          <div className="recieve-updates-frame1">
            <img
              className="location-icon13"
              loading="eager"
              alt=""
              src={location}
            />
            <div className="select-location5">SELECT Location</div>
          </div>
          <div className="header-frame">
            <div className="frame-with-image">
              <div className="set-your-location5">Set your location here</div>
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
        <div className="buttons-states-dark65">
          <div className="button77">FRANCHISE</div>
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
        <div onClick={onOrderNowClick}>
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
        </div>
        <div className="alberta-frame1" onClick={onBasketButtonClick}>
          <Property1OutlineIcon
            iconClassNames={basket}
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
          <div className="basket-button1" onClick={onSigninButtonClick}>
            <Property1OutlineIcon
              iconClassNames={user}
              buttonText="2"
              showButton={false}
              property1OutlineIconBorderRadius="56px"
              property1OutlineIconHeight="unset"
              property1OutlineIconAlignSelf="stretch"
              property1OutlineIconPosition="relative"
              property1OutlineIconBackgroundColor="unset"
              property1OutlineIconMargin="unset"
              property1OutlineIconTop="unset"
              property1OutlineIconLeft="unset"
              buttonWidth="10px"
              bDisplay="flex"
              bHeight="21px"
            />
            <div className="john-smith10">John SMITH</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header11;
