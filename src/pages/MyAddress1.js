import { useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header1 from "../components/Header1";
import AddressesFrame from "../components/AddressesFrame";
import "./MyAddress1.css";
import Header from "../components/Header";

const MyAddress1 = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const method = location.state?.method;
  const selected_item_id = location.state?.selected_item_id;

  console.log(method,"method",selected_item_id,"selected_item_id")
  const onLogoImageClick = useCallback(() => {
    navigate("/homepage");
  }, [navigate]);

  const onButtonsStatesContainerClick = useCallback(() => {
    navigate("/location");
  }, [navigate]);

  const onFrameContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="my-address1">
      {/* <Header1
        onLogoImageClick={onLogoImageClick}
        onButtonsStatesContainerClick={onButtonsStatesContainerClick}
        onItemQuantityFrameClick={onFrameContainerClick}
      /> */}
      {/* <Header /> */}
      <AddressesFrame method = {method} selected_item_id={selected_item_id}/>
    </div>
  );
};

export default MyAddress1;
