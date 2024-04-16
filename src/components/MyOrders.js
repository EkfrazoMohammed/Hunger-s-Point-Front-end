import { useMemo } from "react";
import "./MyOrders.css";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import iconamoonlocationlight from  "../assets/iconamoonlocationlight.svg";

const MyOrders = ({
  orderNo123,
  dELIVERED,
  aLBERTA,
  showXOreoShake,
  showXMangoShake,
  propMinWidth,
  propWidth,
  propWidth1,
  Detailorder,
  menuitem,
  ordercompletedata
}) => {
  const navigate = useNavigate();
  const orderNo123Style = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const xOreoShakeStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const xMangoShakeStyle = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  const onUserProfileFrameClick = useCallback(() => {
    Detailorder(ordercompletedata)
  }, []);

  return (
    <div className="my-orders1" onClick={onUserProfileFrameClick}>
      <div className="order-detail-frame">
        <div className="order-no-label">
          <div className="order-details1">Order details</div>
          <div className="alberta-label">
            <div className="order-no-123" style={orderNo123Style}>
              {orderNo123}
            </div>
            <b className="delivered">{dELIVERED}</b>
          </div>
          <div className="oreo-shake-label">
            <img
              className="iconamoonlocation-light"
              loading="eager"
              alt=""
              src={iconamoonlocationlight}
            />
            <div className="alberta7">{aLBERTA}</div>
          </div>
          <div className="orders2">Orders</div>
          {menuitem.map((order, index) => (
            <div key={index} className="x-chola-puri">{order.quantity} x {order.menu_items.name}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyOrders;
