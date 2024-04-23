import { useDispatch, useSelector } from "react-redux";
import { API } from "../api/api";
import "./WoAddon.css";
import React, { useEffect, useState } from "react";
import { setBasketcount } from "../redux/actions/dataActions";

import minus from "../assets/minus.svg";
import add from "../assets/add.svg";
import close from "../assets/close.svg";
import oops from "../assets/oops@2x.png";

import { toast } from "react-toastify";
import { useAuth0 } from "@auth0/auth0-react";

const WoAddonBasket = ({ onClose, menu_item,setMenuitemdata, qty, UpdateBasket, AddedToBasket }) => {
  const dispatch = useDispatch();
  const { user, isAuthenticated, isLoading, loginWithRedirect } = useAuth0();

  const basket_count = useSelector((state) => state.data.basket_count);
  const [count, setCount] = useState(1);
  

  const [selectedItems, setSelectedItems] = useState([]);


  console.log('menu_item?.menu_items_add_on====>complete',menu_item)
  const handleCategorySelect = (category, itemName) => {
    const updatedMenuItems = menu_item?.menu_add_on.map((cat) => {
        if (cat.key === category) {
            const updatedValue = cat.value.map((item) => {
                if (item.name === itemName) {
                    // Toggle the selected state
                    const updatedItem = { ...item, selected: !item.selected };
                    const price = parseFloat(updatedItem.price);
                    if (updatedItem.selected) {
                        menu_item.amount = (parseFloat(menu_item.amount) + parseFloat(price)).toFixed(2);
                    } else {
                        // Subtract the price if deselected
                        menu_item.amount = (parseFloat(menu_item.amount) - parseFloat(price)).toFixed(2);
                    }
                    return updatedItem;
                }
                return item;
            });
            return { ...cat, value: updatedValue };
        }
        return cat;
    });

    // Update state with the new menu_item data
    setMenuitemdata({ ...menu_item, menu_add_on: updatedMenuItems });
};


  // console.log(selectedItems,'selectedItems==>')
  // console.log(menu_item, "menu_item====>");
  useEffect(() => {
    if (qty) {
      setCount(qty);
    }
    console.log(qty, "qty====>");
    console.log(menu_item?.item_image, "menu_item?.item_image");
  }, []);
  const StoreAddtoBasket = async (menu_data) => {
    const credentials = JSON.parse(localStorage.getItem("credentials"));

    if (!credentials) {
      toast.error("Please Login to Add to basket");
    } else {
      const credentials = JSON.parse(localStorage.getItem("credentials"));
      const location_id = localStorage.getItem("location_id");
      const body = {
        customer_user_id: credentials?.user_id,
        menu_items_id: menu_data.id,
        quantity: count,
        restaurent_id: parseInt(location_id, 10),
        menu_items_add_on:menu_data.menu_add_on,
        total_amount:menu_item.amount
      };
      console.log(body, "body=====>StoreAddtoBasket");
      API.getInstance()
        .menu.post("api/cart-items", body)
        .then((res) => {
          console.log(res.data.result, "res===StoreAddtoBasket11");
          console.log(res.data.result.basket_count, "res===StoreAddtoBasket");
          dispatch(setBasketcount(res.data.result.basket_count));
          onClose();
          UpdateBasket();
          AddedToBasket();
        })
        .catch((error) => {})
        .finally(() => {});
    }
  };
 
  return (
    <div className="wo-addon">
      <section className="first-addon-frame">
        <div className="inner-frame-parent">
          <div className="inner-frame1">
            <img
              className="ed-o-neil-avvdzlhdowa-unsplash-icon4"
              loading="eager"
              alt=""
              src={
                menu_item?.item_image &&
                menu_item?.item_image.split("media/")[1]
                  ? menu_item?.item_image
                  : "https://placehold.co/600x400"
              }
              // src={menu_item?.item_image || 'https://placehold.co/400'}
            />
          </div>
          <div className="text-frame">
            <b className="chole-batura5">{menu_item?.name}</b>
          </div>
          <div className="price-frame">
            <div className="quantity-frame">
              <div className="minus-add-frame">
                <div className="price">Price</div>
                <b className="empty-space">${((menu_item?.amount)*count).toFixed(2)}</b>
              </div>
              <div className="close-instance">
                <div className="quantity1">Quantity</div>
                <div className="component-18">
                  <div
                    className="minus-add cursor-pointer"
                    onClick={() => setCount(count - 1)}
                  >
                    <img
                      className="minus-icon4"
                      loading="eager"
                      alt=""
                      src={minus}
                    />
                  </div>
                  <b className="text">{count}</b>
                  <div
                    className="minus-add1"
                    onClick={() => setCount(count + 1)}
                  >
                    <img
                      className="add-icon5"
                      loading="eager"
                      alt=""
                      src={add}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img
            className="close-icon"
            loading="eager"
            alt=""
            src={close}
            onClick={() => onClose()}
          />
        </div>
      </section>
      <section className="divider10">
        <div className="total-summarizer">
          <div className="divider11" />
        </div>
        <div className="background-frame p-5" style={{ justifyContent: menu_item?.menu_add_on?.length === 0 ? 'center' : 'initial' }}>
          {
            menu_item?.menu_add_on?.length === 0  ? (<div>
              <img
                className="oops-icon"
                loading="eager"
                alt=""
                src="/oops@2x.png"
              />
              <div className="there-are-no" style={{marginTop:'5vh'}}>
                There are no addons for this item
              </div>
            </div> )
            :

            <div>
            {
  menu_item?.menu_add_on && Array.isArray(menu_item?.menu_add_on) && menu_item?.menu_add_on.map((category, index) => (
    <div key={index}>
      <div className="font-bold text-l text-white text-start my-5">
        {category.key}
      </div>
      <div style={{ justifyContent: 'center' }} className="flex flex-wrap">
        {category?.value && category.value.map((item, itemIndex) => (
          <div
            key={itemIndex}
            className={`flex flex-col justify-center items-center font-normal text-base text-white border py-3 rounded-sm ${
              item.selected ? 'border-[#b38205]' : 'border-[#ffffff]'
            }`}
            style={{ minWidth: '45%', margin: '3px', cursor: 'pointer' }}
            onClick={() => handleCategorySelect(category.key, item.name)}
          >
            <div className="flex">
              <span>{item.name}{item.selected}</span>
              <span style={{ marginLeft: '20px' }}>$ {item.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  ))
}


          </div>
          }
          {/* Opps screen */}
          {/* <div>
            <img
              className="oops-icon"
              loading="eager"
              alt=""
              src="/oops@2x.png"
            />
            <div className="there-are-no">
              There are no addons for this item
            </div>
          </div> */}
          {/* Data visible code */}
          


            
        </div>
      </section>
      <footer className="total-frame1">
        <div className="button-instance">
          <div className="total-text">
            <div className="total-added">Total added</div>
            <b className="b10">{count}</b>
          </div>
          <button
            className="buttons-states-dark21"
            onClick={() => StoreAddtoBasket(menu_item)}
          >
            <div className="button29">Add to basket</div>
          </button>
        </div>
      </footer>
    </div>
  );
};

export default WoAddonBasket;
