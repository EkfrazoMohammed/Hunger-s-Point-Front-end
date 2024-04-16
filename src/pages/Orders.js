import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Header1 from "../components/Header1";
import EpbackFrame from "../components/EpbackFrame";
import "./Orders.css";
import Header from "../components/Header";

const Orders = () => {
  const navigate = useNavigate();

  const onLogoImageClick = useCallback(() => {
    navigate("/homepage");
  }, [navigate]);

  const onButtonsStatesContainerClick = useCallback(() => {
    navigate("/location");
  }, [navigate]);

  const onUserProfileFrameClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="orders">
      {/* <Header1
        onLogoImageClick={onLogoImageClick}
        onButtonsStatesContainerClick={onButtonsStatesContainerClick}
        onItemQuantityFrameClick={onUserProfileFrameClick}
      /> */}
      {/* <Header /> */}
      <EpbackFrame />
    </div>
  );
};

export default Orders;
