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
import CATEGORY from "./CATEGORY";
import Modal from "./Modal";

const WoAddon = ({ onClose, menu_item, setMenuitemdata, qty, UpdateBasket, AddedToBasket, isWoAddonOpen }) => {
  const dispatch = useDispatch();
  const { user, isAuthenticated, isLoading, loginWithRedirect } = useAuth0();
  const basket_count = useSelector((state) => state.data.basket_count);
  const [count, setCount] = useState(1);
  const [selectedItems, setSelectedItems] = useState([]);
  const [loggedin, setLoggedin] = useState(true);
  const [finalamount, setfinalamount] = useState(menu_item.amount);

  const setDefaultSelectedItems = () => {
    const defaultSelectedItems = [
      {
        key: 'Size',
        value: [
          { name: 'M', price: '2', selected: false },
          { name: 'L', price: '3.5', selected: false }
        ]
      },
      {
        key: 'Vegies',
        value: [
          { name: 'onion', price: '2', selected: false },
          { name: 'Lemon', price: '1', selected: true }
        ]
      }
    ];
    setSelectedItems(defaultSelectedItems);
  };

  // useEffect(() => {

  // }, []);
  console.log('menu_item====>complete', menu_item)



  const handleCategorySelect = (category, itemName) => {
    const updatedMenuItems = menu_item.data.map((cat) => {
      if (cat.key === category) {
        let finalamount1
        const updatedValue = cat.value.map((item) => {
          // Check if the category key is 'size'
          if (cat.key.toLowerCase() === 'size') {
            // For the 'size' category, allow only one item to be selected at a time
            // If the clicked item is already selected, keep it selected
            // If the clicked item is not selected, toggle its selection and deselect other items
            const isSelected = item.name === itemName;

            // const updatedItem = { ...item, selected: isSelected };
            // console.log(updatedItem,'item==>1111')
            // menu_item.amount = parseFloat(updatedItem.price).toFixed(2)
            // if (updatedItem.selected ==true){
            //   setfinalamount(menu_item.amount)
            // }

            return { ...item, selected: isSelected };
          } else {
            // For other categories, toggle the selection state of the clicked item
            const isSelected = item.name === itemName ? !item.selected : item.selected;

            // const updatedItem = { ...item, selected: isSelected };
            // console.log(updatedItem,'updatedItem===>1222',finalamount)
            // if (updatedItem.selected ==true){
            //   finalamount1 = parseFloat(finalamount)  +  parseFloat(updatedItem.price)
            // }
            // if (updatedItem.selected ==false){
            //   finalamount1 = parseFloat(finalamount)  - parseFloat(updatedItem.price)

            // }
            // console.log(finalamount1,'finalamount1')
            // setfinalamount(finalamount1)
            return { ...item, selected: isSelected };

          }
        });

        // If the category key is 'size', find the first item and set it as default
        if (cat.key.toLowerCase() === 'size') {
          const firstItem = updatedValue.find(item => item.selected);
          if (!firstItem && updatedValue.length > 0) {
            updatedValue[0].selected = true;
          }
        }

        // Update state with the new menu_item data
        return { ...cat, value: updatedValue };
      }
      return cat;
    });


    console.log('updatedMenuItems:', updatedMenuItems);
    let main_amount = menu_item.amount
    let extra_amount = 0
    updatedMenuItems != undefined && updatedMenuItems.map((item) => {
      if (item.key.toLowerCase() === 'size') {
        item.value.map((add_on1) => {
          if (add_on1.selected === true) {
            main_amount = add_on1.price
          }
        })
      }
      else {
        item.value && item.value.map((add_on) => {
          if (add_on.selected === true) {
            extra_amount = parseFloat(extra_amount) + parseFloat(add_on.price)
          }
        })
      }
    })
    const final_amount = parseFloat(main_amount) + parseFloat(extra_amount)
    setfinalamount(final_amount.toFixed(2))


    setMenuitemdata({ ...menu_item, data: updatedMenuItems });
  };


  console.log(selectedItems, 'selectedItems==>')
  console.log(menu_item, "menu_item====>");


  useEffect(() => {
    if (qty) {
      setCount(qty);
    }
    console.log(qty, "qty====>");
    console.log(menu_item?.item_image, "menu_item?.item_image");
  }, []);
  const StoreAddtoBasket = async (menu_data) => {
    const credentials = JSON.parse(localStorage.getItem("credentials"));
    let emailToFetch = (user && user.email) || (credentials && credentials.email_id);

    if (!emailToFetch) {
      toast.error("Please Login to Add to basket");
      setLoggedin(false)
    }
    else {
      const credentials = JSON.parse(localStorage.getItem("credentials"));
      const location_id = localStorage.getItem("location_id");
      const body = {
        customer_user_id: credentials?.user_id,
        menu_items_id: menu_data.id,
        quantity: count,
        restaurent_id: parseInt(location_id, 10),
        menu_items_add_on: menu_data.data,
        total_amount: menu_item.amount
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
          setLoggedin(true)
        })
        .catch((error) => { setLoggedin(false) })
        .finally(() => { });
    }
  };
  const closeModal = () => {
    setLoggedin(true)
  }

  return (
    <div className={`wo-addon ${isWoAddonOpen ? 'active' : ''}`} style={{ backgroundColor: `var(--card-bg)` }}>
      {
        !loggedin && (<Modal isOpen={!loggedin} onClose={closeModal}>
          <CATEGORY />
        </Modal>)
      }
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
            <div style={{ marginLeft: '20px' }} className="text-frame">
              <b className="chole-batura5">{menu_item?.name}</b>
            </div>
          </div>

          <div className="price-frame">
            <div className="quantity-frame">
              <div className="minus-add-frame">
                <div className="price">Price</div>
                <div style={{ fontFamily: `var(--primary-font-family-bold)` }} className="empty-space">${((finalamount) * count).toFixed(2)}</div>
              </div>
              <div className="close-instance ">
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
            !menu_item?.data || menu_item?.data.length == 0 ? (<div>
              <img
                className="oops-icon"
                loading="eager"
                alt=""
                src={oops}
              />
              <div className="there-are-no" style={{ marginTop: '5vh' }}>
                There are no addons for this item
              </div>
            </div>)
              :

              <div>
                {menu_item &&
                  (menu_item.menu_items_add_on?.length > 0 ? menu_item.menu_items_add_on : menu_item.data)?.map((category, index) => (
                    <div key={index}>

                      <div>
                        <div style={{ fontFamily: 'var(--primary-font-family-bold)', fontSize: 'var(--primary-font-size)' }} className="text-white text-start my-5">
                          {category.key}
                        </div>
                        <div style={{ justifyContent: 'flex-start', fontFamily: 'var(--primary-font-family)', fontSize: 'var(--primary-font-size)' }} className="flex flex-wrap">
                          {category.value && category.value.map((item, itemIndex) => (
                            <div
                              key={itemIndex}
                              className={`flex flex-col justify-center items-center text-white border py-2 ${item.selected ? 'border-[#718c61] bg-[#588b3d]' : 'border-[#ffffff]'} hover:bg-[#588b3d] hover:border-[#718c61] cursor-pointer`}
                              style={{ minWidth: '35%', margin: '3px', marginBottom: '10px', marginRight: '10px', cursor: 'pointer', borderRadius: '6px' }}
                              onClick={() => handleCategorySelect(category.key, item.name, category.value)}
                            >
                              <div className="flex" style={{ padding: '0px 10px' }}>
                                <span>{item.name}{item.selected}</span>
                                <span style={{ marginLeft: '20px' }}>$ {item.price}</span>
                              </div>
                            </div>
                          ))}
                        </div>
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
            <div style={{ fontSize: `var(--primary-font-size)`, fontFamily: `var(--primary-font-family-bold)` }} className="b10">{count}</div>
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

export default WoAddon;
