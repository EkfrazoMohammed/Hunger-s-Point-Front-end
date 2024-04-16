import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MyOrders from "./MyOrders";
import "./EpbackFrame.css";
import epback  from '../assets/epback.svg'
import { API } from "../api/api";

const EpbackFrame = () => {
  const navigate = useNavigate();
  const [Orderdata, setOrderdata] = useState([]);
  const onEpbackIconClick = useCallback(() => {
    navigate("/profile");
  }, [navigate]);

  useEffect(() => {
    GetOrdersData()
  }, []);

  const GetOrdersData = async () => {
    const credentials = JSON.parse(localStorage.getItem('credentials'));
    API.getInstance().menu.get(`/api/user-place-orders?customer_user_id=${credentials?.user_id}`)
      .then((res) => {
        console.log(res.data.result.data,'ordersssss')
        // Descending order
        const descendingOrderList = res.data.result.data.sort((a, b) => {
          return b.id - a.id; // Replace 'key' with the key you want to sort by
        });

        setOrderdata(descendingOrderList)
      })
      .catch((error) => {
      })
      .finally(() => {
      });
  }

  const Detailorder = async (order_data) => {
    navigate('/orders1', { state: order_data });
  }
  

  // Function to chunk the array into rows with two columns each
  const chunkArray = (arr, size) =>
    Array.from({ length: Math.ceil(arr.length / size) }, (_, index) =>
      arr.slice(index * size, (index + 1) * size)
    );

  const rows = chunkArray(Orderdata, 2);

  return (
    <section className="epback-frame">
      <div className="my-orders-section">
        <img
          className="epback-icon1"
          loading="eager"
          alt=""
          src={epback}
          onClick={onEpbackIconClick}
        />
        <h1 className="my-orders2">My Orders</h1>
        <h3 className="order-details2">Order details</h3>
      </div>
      <div className="divider-line1">
        <div className="divider24" />
      </div>
      

      {rows.map((row, rowIndex) => (
        <div className="delivered-icon" key={rowIndex}>
          {row.map((order, colIndex) => (
            <MyOrders
              key={colIndex}
              ordercompletedata={order}
              orderNo123={order.order_number}
              dELIVERED={order.order_status}
              menuitem={order.menu_items}
              aLBERTA={order.location_address.published_name}
              showXOreoShake={order.showXOreoShake}
              showXMangoShake={order.showXMangoShake}
              propMinWidth={order.propMinWidth}
              propWidth={order.propWidth}
              propWidth1={order.propWidth1}
              Detailorder={Detailorder}
            />
          ))}
        </div>
      ))}




      
    </section>
  );
};

export default EpbackFrame;
