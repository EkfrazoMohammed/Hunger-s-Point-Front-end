import "./Header1.css";
import logo2 from  "../assets/logo@2x.png";
import location from  "../assets//location.svg";
import basket from  "../assets/basket.svg";
import user1 from  "../assets/user1.svg";


const Header1 = ({
  onLogoImageClick,
  onButtonsStatesContainerClick,
  onItemQuantityFrameClick,
}) => {
  return (
    <header className="header3">
      <div className="button-group">
        <img
          className="logo-icon2"
          loading="eager"
          alt=""
          src={logo2}
          onClick={onLogoImageClick}
        />
      </div>
      <div className="rectangle-shape">
        <div
          className="buttons-states3"
          onClick={onButtonsStatesContainerClick}
        >
          <div className="cart-details1">
            <img
              className="location-icon9"
              loading="eager"
              alt=""
              src={location}
            />
            <div className="select-location2">SELECT Location</div>
          </div>
          <div className="tax-summary">
            <div className="total-summary">
              <div className="set-your-location2">Set your location here</div>
            </div>
            <button className="buttons-states-dark30">
              <b className="button42">LOCATE STORE</b>
            </button>
          </div>
        </div>
        <div className="buttons-states-dark31">
          <div className="button43">Locations</div>
        </div>
        <div className="buttons-states-dark32">
          <div className="button44">FRANCHISE</div>
        </div>
        <div className="buttons-states-dark33">
          <div className="button45">MENU</div>
        </div>
        <div className="buttons-states-dark34">
          <div className="button46">ORDER NOW</div>
        </div>
        <div className="subtotal-text">
          <div className="buttons-states-dark35">
            <img
              className="basket-icon7"
              loading="eager"
              alt=""
              src={basket}
            />
            <div className="button47">2</div>
            <div className="wrapper10">
              <b className="b13">3</b>
            </div>
          </div>
          <div
            className="item-quantity-frame"
            onClick={onItemQuantityFrameClick}
          >
            <button className="buttons-states-dark36">
              <img className="user-icon2" alt="" src={user1} />
              <b className="button48">2</b>
            </button>
            <div className="john-smith3">John SMITH</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header1;
