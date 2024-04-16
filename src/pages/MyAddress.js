import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Header1 from "../components/Header1";
import EpbackFrame1 from "../components/EpbackFrame1";
import "./MyAddress.css";
import Header from "../components/Header";

const MyAddress = () => {
  const navigate = useNavigate();

  const onLogoImageClick = useCallback(() => {
    navigate("/homepage");
  }, [navigate]);

  const onButtonsStatesContainerClick = useCallback(() => {
    navigate("/location");
  }, [navigate]);

  const onFullAddressContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="my-address">
      {/* <Header1
        onLogoImageClick={onLogoImageClick}
        onButtonsStatesContainerClick={onButtonsStatesContainerClick}
        onItemQuantityFrameClick={onFullAddressContainerClick}
      /> */}
      {/* <Header /> */}
      <EpbackFrame1 />
    </div>
  );
};

export default MyAddress;
