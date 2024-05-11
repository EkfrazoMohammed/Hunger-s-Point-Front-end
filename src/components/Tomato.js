import { useState, useMemo, useCallback } from "react";
import WoAddon from "./WoAddon";
import WoAddonEditBasket from "./WoAddon_edit_basket";

import PortalPopup from "./PortalPopup";
import "./Tomato.css";
import icon2 from  "../assets/icon@2x.png";
import delete1 from  "../assets/delete.svg";
import { API } from "../api/api";
import { setBasketcount } from "../redux/actions/dataActions";
import { useDispatch } from "react-redux";



const Tomato = ({
  setMenuitemdata,
  menuItem,
  EditebuttonClicked,
  edONeilAvvdZlhDowAUnsplas,
  item_nanme,
  prop,
  qty,
  inputField,
  propAlignSelf,
  propWidth,
  propMinWidth,
  propMinWidth1,
  propWidth1,
  propGap,
  UpdateBasket,
  menu_items,
  OnClickAddButton
}) => {
  const [isWoAddonOpen, setWoAddonOpen] = useState(false);
  const [selectedMenuIndex, setSelectedMenuIndex] = useState(0);
  const dispatch = useDispatch();
  const tomatoStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      width: propWidth,
    };
  }, [propAlignSelf, propWidth]);

  const edoneilAvvdZlhDowAunsplashStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const buttonTextStyle = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  const inputFieldStyle = useMemo(() => {
    return {
      width: propWidth1,
      gap: propGap,
    };
  }, [propWidth1, propGap]);

  const openWoAddon = useCallback(() => {
    EditebuttonClicked()
    setWoAddonOpen(true);
  }, []);

  const closeWoAddon = useCallback(() => {
    setWoAddonOpen(false);
  }, []);


  const DeletedBasket = async (menu_data) => {
    const credentials = JSON.parse(localStorage.getItem('credentials'));
    const body = {
      'customer_user_id':credentials?.user_id,
      'menu_items_id':menuItem?.menu_items?.id,
    }
    console.log(body,'body=====>')
    API.getInstance().menu.post('api/delete-cart-items',body)
      .then((res) => {
        console.log(res.data.result,'res===StoreAddtoBasket11')
        console.log(res.data.result.basket_count,'res===StoreAddtoBasket')
        dispatch(setBasketcount(res.data.result.basket_count));
        UpdateBasket()
      })
      .catch((error) => {
      })
      .finally(() => {
      });
  }

  // console.log(menu_items,'menu_items===>111')
  return (
        <>
      <div className="w-full" style={{border:`.5px solid var(--hp-yellow-600)`,borderRadius:'20px',backgroundColor:`var(--card-bg)`}}>
          <div className="tomato basket-item-card" style={{tomatoStyle,backgroundColor:`var(--card-bg)`}}>
            <div
              className="edoneil-avvd-zlh-dow-aunsplash11"
              style={edoneilAvvdZlhDowAunsplashStyle}
            >
              <img
                className="ed-o-neil-avvdzlhdowa-unsplash-icon18"
                loading="eager"
                alt=""
                style={{borderTopLeftRadius:'20px', borderBottomLeftRadius:'20px'}}
                src={(menuItem.menu_items.item_image && menuItem.menu_items.item_image.split('media/')[1]) ? menuItem.menu_items.item_image : 'https://placehold.co/600x400'}
              />
              <div className="button-text" style={buttonTextStyle}>
                <div className="location-instance">
                  <div className="chole-batura-parent3">
                    <div className="chole-batura12">{item_nanme}</div>
                    {/* <div className="div31" style={{fontFamily:`var(--primary-font-family)`,fontSize:`var(--primary-font-size)`}}>{prop}</div> */}
                  </div>
                  <div
                    className="input-field prod-select-qty"
                    onClick={() => openWoAddon(menuItem)}
                    style={inputFieldStyle}
                  >
                    <div className="qty" style={{fontFamily:`var(--primary-font-family)`,fontSize:`var(--primary-font-size)`}}>{qty}</div>
                    <img className="icon" alt="" src={icon2} />
                  </div>
                </div>
              </div>
            </div>
            <div className="ginger-frame">
              <div className="inputfieldframe">
                <div className="input-field1 prod-amount" >{inputField}</div>
                {/* <div className="input-field2"> */}
                  <img
                    className="delete-icon"
                    loading="eager"
                    alt="remove item"
                    onClick={()=>{DeletedBasket(menuItem)}}
                    src={delete1}
                  />
                {/* </div> */}
              </div>
            </div>
          </div>
        {/* {
          menu_items?.selected_suggested_menu_list?.length > 0 ?
            (<>

              <div className="w-full">
                <div className="font-normal text-base flex justify-between items-center p-4">
                  Complete your meal with{" "}
                  <span className="font-normal text-xs text-[#E5B638]">
                    recommendations
                  </span>

                </div>

                <div className="font-normal gap-[10px] text-base flex items-center" style={{ marginLeft: '15px' }}>
                  {menu_items?.selected_suggested_menu_list && menu_items?.selected_suggested_menu_list.map((menu, index) => (
                    <div
                      key={index}
                      className={`border-[1px] border-[#E5B638] px-[7px] rounded-md py-[4px] font-inter font-normal text-[10px] text-base text-[#fff] flex gap-[10px] cursor-pointer ${selectedMenuIndex === index ? 'bg-[#C21F24]' : 'hover:bg-[#C21F24] '}`}
                      onClick={() => setSelectedMenuIndex(index)}
                    >
                      {menu.menu_title}
                    </div>
                  ))}
                </div>

                <div className="w-full flex gap-[30px] p-4 overflow-x-auto">
                  {menu_items?.selected_suggested_menu_list[selectedMenuIndex]?.menu_item_info && Array.isArray(menu_items?.selected_suggested_menu_list[selectedMenuIndex]?.menu_item_info) && menu_items?.selected_suggested_menu_list[selectedMenuIndex]?.menu_item_info.map((product, index) => (
                    <div key={index} className="bg-[#363636] border border-[#8F8F8F] rounded-md flex gap-3 w-[35%] min-w-[288px] h-fit">
                      <img src={product.item_image} alt={product.item_image} className="h-[100px] w-[109px] rounded-md" />
                      <div className="flex gap-[10px] justify-center flex-col w-full h-fit">
                        <div className="flex justify-between items-center font-poppins font-bold text-xs text-[#E5B638] w-full pr-[10px]">
                          {product.name}
                          <span>
                            <img src="./hertIcon.svg" alt="hertIcon" />
                          </span>
                        </div>
                        <div className="font-poppins font-normal text-[11px] text-[#fff]">
                          {product.amount}
                        </div>
                        <button
                          className="border-[1px] border-[#E5B638] px-5 text-[#fff] text-[10px] rounded-md hover:bg-[#E5B638] py-2 w-fit"
                          onClick={() => OnClickAddButton(product)}
                        >
                          ADD
                        </button>
                      </div>
                    </div>
                  ))}
                </div>


              </div>


            </>)
            :
            null
        } */}
          
      </div>



      
      {isWoAddonOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeWoAddon}
        >
          <WoAddonEditBasket setMenuitemdata={setMenuitemdata} UpdateBasket={UpdateBasket} onClose={closeWoAddon} add_on={menuItem.menu_items_add_on} menu_item={menuItem.menu_items} menu_item_all_data={menuItem}qty={menuItem.quantity} />
        </PortalPopup>
      )}
    </>
  );
};

export default Tomato;
