import Property1FilledPrimary1 from "./Property1FilledPrimary1";
import Property1FilledPrimary from "./Property1FilledPrimary";
import Property1OutlineIcon from "./Property1OutlineIcon";
import "./Header2.css";
import logo2 from  "../assets/logo@2x.png";
import basket from  "../assets/basket.svg";
import user from  "../assets/user.svg";

const Header2 = ({
  setYourLocationHere,
  onLogoImageClick,
  onButtonsStatesContainerClick,
}) => {
  return (
    <header className="header5">
      <div className="f-r-a-m-e-h-e-a-d-e-r">
        <img
          className="logo-icon4"
          loading="eager"
          alt=""
          src={logo2}
          onClick={onLogoImageClick}
        />
      </div>
      <nav className="buttons-frame2">
        <div
          className="buttons-states6"
          onClick={onButtonsStatesContainerClick}
        >
          <div className="s-e-l-e-c-t-location">
            <img
              className="location-icon12"
              loading="eager"
              alt=""
              src={location}
            />
            <div className="select-location4">SELECT Location</div>
          </div>
          <div className="set-location-frame">
            <div className="buttons-states-instance">
              <div className="set-your-location4">{setYourLocationHere}</div>
            </div>
            <Property1FilledPrimary1
              button="LOCATE STORE"
              property1FilledPrimaryPadding="7px 12px 7px 8px"
              property1FilledPrimaryBorder="none"
              buttonFontSize="10px"
              buttonDisplay="inline-block"
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
        <div className="buttons-states-dark62">
          <div className="button74">FRANCHISE</div>
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
        <div className="basket-instance">
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
          <div className="frame-u-s-e-r-b-u-t-t-o-n">
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
            <div className="john-smith9">John SMITH</div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header2;
