import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Header1 from "../components/Header1";
import MyOrders1 from "../components/MyOrders1";
import "./Orders1.css";
import Header from "../components/Header";
import { useLocation } from 'react-router-dom';


import epback from  "../assets/epback.svg"

const Orders1 = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const Orderdata = location.state;

  const onLogoImageClick = useCallback(() => {
    navigate("/homepage");
  }, [navigate]);

  const onButtonsStatesContainerClick = useCallback(() => {
    navigate("/location");
  }, [navigate]);

  const onOreoShakeInstanceClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onEpbackIconClick = useCallback(() => {
    navigate("/orders");
  }, [navigate]);
  console.log(Orderdata,'Orderdata=====>11x')
  return (
    <div className="orders1">
      {/* <Header1
        onLogoImageClick={onLogoImageClick}
        onButtonsStatesContainerClick={onButtonsStatesContainerClick}
        onItemQuantityFrameClick={onOreoShakeInstanceClick}
      /> */}
      {/* <Header /> */}
      <section className="empty-space-frame">
        <div className="header-divider">
          <img
            className="epback-icon"
            loading="eager"
            alt=""
            src={epback}
            onClick={onEpbackIconClick}
          />
          <div className="blank-text-box">{Orderdata.order_number}</div>
        </div>
        <div className="my-orders-frame">
          <div className="order-details">Order details</div>
          <div className="divider-line">
            <div className="divider8" />
          </div>
        </div>
        <MyOrders1 Orderdata={Orderdata}/>
      </section>
    </div>
  );
};

export default Orders1;
