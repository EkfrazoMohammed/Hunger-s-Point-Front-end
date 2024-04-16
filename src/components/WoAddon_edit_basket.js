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

const WoAddonEditBasket = ({ menu_item_all_data,add_on, onClose, menu_item,setMenuitemdata, qty, UpdateBasket, AddedToBasket }) => {
  const dispatch = useDispatch();
  const { user, isAuthenticated, isLoading, loginWithRedirect } = useAuth0();

  const basket_count = useSelector((state) => state.data.basket_count);
  const [count, setCount] = useState(1);
  
  const [newaddon, setUpdateAddon] = useState(add_on);
  const [selectedItems, setSelectedItems] = useState([]);



  const handleCategorySelect = (categoryKey, itemName) => {
    const updatedAddOn = newaddon && newaddon.map((cat) => {
        if (cat.key === categoryKey) {
            const updatedValue = cat.value.map((item) => {
              if (item.name === itemName) {
                    // Toggle selected state
                    const updatedItem = { ...item, selected: !item.selected };
                    // Update total amount based on selected state
                    const price = parseFloat(item.price);
                    if (updatedItem.selected) {
                      menu_item_all_data.total_amount = (parseFloat(menu_item_all_data.total_amount) + parseFloat(price)).toFixed(2);
                  } else {
                      menu_item_all_data.total_amount = (parseFloat(menu_item_all_data.total_amount) - parseFloat(price)).toFixed(2);
                  }
                    return updatedItem;
                }
                return item;
            });
            return { ...cat, value: updatedValue };
        }
        return cat;
    });

    console.log('updatedAddOn:', updatedAddOn);
    setUpdateAddon(updatedAddOn);
};

  // console.log(add_on,'new === add_on==>')
  console.log(menu_item, "menu_item====>");
  console.log(menu_item_all_data,'menu_item_all_data====>')
  useEffect(() => {
    GetBasketData()
    if (qty) {
      setCount(qty);
    }
    console.log(qty, "qty====>");
    console.log(menu_item?.item_image, "menu_item?.item_image");
  }, []);

  const GetBasketData = async () => {
    const credentials = JSON.parse(localStorage.getItem('credentials'));
    const location_id = localStorage.getItem("location_id");
    parseInt(location_id, 10)
    API.getInstance().menu.get(`/api/cart-items?customer_user_id=${credentials?.user_id}&menu_items_id=${menu_item?.id}&restaurent_id=${parseInt(location_id, 10)}`)
      .then((res) => {
        console.log(res.data.result.data[0],'GetBasketData===res.data.result.data===>')
        setUpdateAddon(res.data.result.data[0].menu_items_add_on)
        // console.log(res.data.result.basket_count,'GetBasketData===res.data.result.data===>')
        // setBasketalldata(res.data.result);
        // setSummarydata(res.data.result.summary);
        // dispatch(setBasketcount(res.data.result.basket_count));
      })
      .catch((error) => {
      })
      .finally(() => {
      });
  }



  const StoreAddtoBasket = async (menu_data) => {
    if (!isAuthenticated) {
      toast.error("Please Login to Add to basket");
    } else {
      const credentials = JSON.parse(localStorage.getItem("credentials"));
      const location_id = localStorage.getItem("location_id");

      const body = {
        customer_user_id: credentials?.user_id,
        menu_items_id: menu_data.id,
        quantity: count,
        restaurent_id: parseInt(location_id, 10),
        menu_items_add_on:newaddon?.length > 0 ? newaddon : menu_data.data,
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
                <b className="empty-space">${(menu_item_all_data?.total_amount)*count}</b>
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
        <div className="background-frame p-5" style={{ justifyContent: menu_item?.data?.length === 0 ? 'center' : 'initial' }}>
          {
            menu_item?.data?.length === 0  ? (<div>
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
            {(newaddon?.length > 0 ? newaddon : menu_item.data) &&
              (newaddon?.length > 0 ? newaddon : menu_item.data).map((category, index) => (
                <div key={index}>
                  <div className="font-bold text-l text-white text-start my-5">
                    {category.key}
                  </div>
                  <div style={{ justifyContent: 'center' }} className="flex flex-wrap">
                    {category?.value && category?.value.map((item, itemIndex) => (
                      <div
                        key={itemIndex}
                        className={`flex flex-col justify-center items-center font-normal text-base text-white border py-3 rounded-sm ${
                          item.selected ? 'border-[#b38205]' : 'border-[#ffffff]'
                        }`}
                        style={{ minWidth: '45%', margin: '3px', cursor: 'pointer' }}
                        onClick={() => handleCategorySelect(category.key, item.name)}
                      >
                        <div className="flex">
                          <span>{item.name}</span>
                          <span style={{ marginLeft: '20px' }}>$ {item.price}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
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

export default WoAddonEditBasket;
