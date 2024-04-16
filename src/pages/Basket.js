import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header2 from "../components/Header2";
import UserInstance from "../components/UserInstance";
import Tomato from "../components/Tomato";
import "./Basket.css";
import Header from "../components/Header";
import { useDispatch, useSelector } from "react-redux";
import { setBasketcount } from "../redux/actions/dataActions";
import { API } from "../api/api";
import epback from "../assets/epback.svg";
const Basket = () => {
  const navigate = useNavigate();
  const basket_count = useSelector((state) => state.data.basket_count);
  const dispatch = useDispatch();
  const GetBasketData = async () => {
    const credentials = JSON.parse(localStorage.getItem("credentials"));
    API.getInstance()
      .menu.get(`/api/cart-items?customer_user_id=${credentials?.user_id}`)
      .then((res) => {
        // console.log(
        //   res.data.result.data,
        //   "GetBasketData===res.data.result.data===>"
        // );
        // console.log(
        //   res.data.result.basket_count,
        //   "GetBasketData===res.data.result.data===>"
        // );
        dispatch(setBasketcount(res.data.result.basket_count));
      })
      .catch((error) => {})
      .finally(() => {});
  };

  useEffect(() => {
    GetBasketData();
  }, []);
  const onLogoImageClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onButtonsStatesContainerClick = useCallback(() => {
    navigate("/location");
  }, [navigate]);

  const onEpbackIconClick = useCallback(() => {
    navigate("/productpage?id=1");
  }, [navigate]);

  return (
    <div className="basket">
      <div className="summary-frame">
        <div
          className="item-list-frame"
          style={{ justifyContent: "center", alignItems: "center" }}
        >
          <img
            className="epback-icon2"
            loading="eager"
            style={{ height: "30px", marginBottom: "10px" }}
            alt=""
            src={epback}
            onClick={onEpbackIconClick}
          />
          <h1 className="basket1" style={{ textAlign: "center" }}>
            {" "}
            Basket
          </h1>
          <div className="items1" style={{ textAlign: "center" }}>
            {basket_count} items
          </div>
        </div>
      </div>
      <div className="cart-item-rectangle">
        <div className="divider9" />
      </div>
      <section className="user-instance-parent">
        <UserInstance />
      </section>
    </div>
  );
};

export default Basket;
