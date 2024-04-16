import { useState, useCallback, useEffect } from "react";
import WAddon from "./WAddon";
import PortalPopup from "./PortalPopup";
import { useNavigate } from "react-router-dom";
import Tomato from "./Tomato";
import Summary from "./Summary";
import "./UserInstance.css";
import WoAddonBasket from "./WoAddon_basket";
import WoAddon from "./WoAddon";


import { API } from "../api/api";
import { setBasketcount } from "../redux/actions/dataActions";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

const UserInstance = () => {
  const [isWAddonOpen, setWAddonOpen] = useState(false);
  const [basketalldata, setBasketalldata] = useState([]);
  const [summarydata, setSummarydata] = useState([]);
  
  const [menuitemdata, setmenuitemdata] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const GetBasketData = async () => {
    const credentials = JSON.parse(localStorage.getItem('credentials'));
    API.getInstance().menu.get(`/api/cart-items?customer_user_id=${credentials?.user_id}`)
      .then((res) => {
        // console.log(res.data.result.data,'GetBasketData===res.data.result.data===>')
        // console.log(res.data.result.basket_count,'GetBasketData===res.data.result.data===>')
        setBasketalldata(res.data.result);
        setSummarydata(res.data.result.summary);
        dispatch(setBasketcount(res.data.result.basket_count));
      })
      .catch((error) => {
      })
      .finally(() => {
      });
  }

  useEffect(() => {
    GetBasketData()
  }, []);

  const EditebuttonClicked = async (menuitemdata) => {
    setmenuitemdata(menuitemdata)
  }

  const UpdateBasket = useCallback(() => {
    console.log("UpdateBasket==called")
    GetBasketData()
  }, []);

  const onButtonsStatesDarkClick = useCallback(() => {
    navigate("/checkoutshippingaddress");
  }, [navigate]);

  const openWAddon = useCallback(() => {
    setWAddonOpen(true);
  }, []);

  const closeWAddon = useCallback(() => {
    setWAddonOpen(false);
  }, []);

  const OreoShakeDetails = useCallback(() => {
    navigate("/WoAddon");
  }, [navigate]);




  const [isWoAddonOpen, setWoAddonOpen] = useState(false);
  const [menuitem, setMenuItem] = useState(false);
  const openWoAddon = useCallback(() => {
    EditebuttonClicked()
    setWoAddonOpen(true);
  }, []);

  const closeWoAddon = useCallback(() => {
    GetBasketData()
    setWoAddonOpen(false);
  }, []);

  const AddedToBasket = useCallback(() => {
    console.log("AddedToBasket===>")
    toast.success('Item Added to basket successfully!');
  }, []);



  const [selectedMenuIndex, setSelectedMenuIndex] = useState(0);
  
  const OnClickAddButton = useCallback((menu_item) => {
    console.log(menu_item, 'menu_item====>2222');
    setmenuitemdata(menu_item); // Set menu item directly to menuitemdata state
    setWoAddonOpen(true); // Open WoAddon modal
  }, []);

  const MenuitemUpdate = useCallback(() => {
    console.log("UpdateBasket==called");
    GetBasketData();
  }, []);

  const SetMenuItemData = useCallback((data) => {
    console.log(data,'data=====SetMenuItemData==USERINSTANCE')
    setmenuitemdata(data);
  }, []);

  return (
    <>
    <div className="user-instance12">
      <div className="user-instance">
        <div className="oreo-shake5">
        {basketalldata.data && basketalldata.data.map((menuItem, index) => (
            <Tomato
              key={index}
              // edONeilAvvdZlhDowAUnsplas={(menuItem.item_image && menuItem.item_image.split('media/')[1]) ? menuItem.item_image : 'https://placehold.co/600x400'}
              item_nanme={menuItem?.menu_items?.name}
              prop={`$${(menuItem?.total_amount)*menuItem?.quantity}`}
              qty={`${menuItem?.quantity} qty`}
              inputField={`$${(menuItem?.total_amount)*menuItem?.quantity}`}
              EditebuttonClicked={EditebuttonClicked}
              menuItem={menuItem}
              menu_items={menuItem?.menu_items}
              UpdateBasket={UpdateBasket}
              OnClickAddButton={OnClickAddButton}
              setMenuitemdata={SetMenuItemData}
              screen={"BASKET"}
            />
          ))}
          {/* <Tomato
            onClick={OreoShakeDetails}
            edONeilAvvdZlhDowAUnsplas="/edoneilavvdzlhdowaunsplash-1-1@2x.png"
            choleBatura={
              <>
                Oreo Shake
                <div className="choco-chips-hot">
                  Choco chips, Hot chocolate fudge
                </div>
              </>
            }
            prop="$1.99"
            qty="1 qty"
            inputField="$1.99"
          />
          <Tomato
            edONeilAvvdZlhDowAUnsplas="/edoneilavvdzlhdowaunsplash-1-2@2x.png"
            choleBatura="Mango Mojito"
            prop="$2.99 "
            qty="5 qty"
            inputField="$14.95"
          /> */}
        </div>

        
        {
          basketalldata?.data?.length > 0 &&(<Summary
            button="Proceed to Checkout"
            onButtonsStatesDarkClick={onButtonsStatesDarkClick}
            basket_summary={summarydata}
          />)
        }
        
      </div>
      {
          basketalldata?.reccomandations?.length > 0 ?
            (<>

              <div className="w-full" style={{marginTop:'20px'}}>
              <div className="font-bold text-2xl flex justify-between items-center p-4">
                  Recommendations
                </div>

                <div className="font-normal gap-[10px] text-base flex items-center" style={{ marginLeft: '15px' }}>
                  {basketalldata.reccomandations && basketalldata.reccomandations.map((menu, index) => (
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
                  {basketalldata.reccomandations[selectedMenuIndex]?.menu_item_info && Array.isArray(basketalldata.reccomandations[selectedMenuIndex]?.menu_item_info) && basketalldata.reccomandations[selectedMenuIndex]?.menu_item_info.map((product, index) => (
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
        }
</div>
      {isWoAddonOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeWoAddon}
        >
          <WoAddonBasket setMenuitemdata={setmenuitemdata} UpdateBasket={UpdateBasket} onClose={closeWoAddon} menu_item={menuitemdata} AddedToBasket={AddedToBasket}/>
        </PortalPopup>
      )}
      {/* {isWAddonOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeWAddon}
        >
          <WAddon onClose={closeWAddon} menu_item={menuitemdata}/>
        </PortalPopup>
      )} */}
    </>
  );
};

export default UserInstance;
