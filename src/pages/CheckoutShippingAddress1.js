import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Header1 from "../components/Header1";
import Button from "../components/Button";
import "./CheckoutShippingAddress1.css";
import Header from "../components/Header";

const CheckoutShippingAddress1 = () => {
  const navigate = useNavigate();

  const onLogoImageClick = useCallback(() => {
    navigate("/homepage");
  }, [navigate]);

  const onButtonsStatesContainerClick = useCallback(() => {
    navigate("/location");
  }, [navigate]);

  const onTextNodeContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="checkoutshippingaddress1">
      {/* <Header1
        onLogoImageClick={onLogoImageClick}
        onButtonsStatesContainerClick={onButtonsStatesContainerClick}
        onItemQuantityFrameClick={onTextNodeContainerClick}
      /> */}
      {/* <Header /> */}
      <Button />
    </div>
  );
};

export default CheckoutShippingAddress1;
