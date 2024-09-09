import { useState, useCallback, useEffect, useRef } from "react";
import WAddon from "../components/WAddon";
import PortalPopup from "../components/PortalPopup";
import Header from "../components/Header";
import DishType from "../components/DishType";
import MobileHamMenu from "../components/MobileHamMenu";
import Locationhospitalframe from "../components/Locationhospitalframe";
import "./ProductPage.css";
import Sidebar from "./Sidebar";
import WoAddon from "../components/WoAddon";
import { API } from "../api/api";
import { useLocation, useNavigate } from "react-router-dom";
import React from "react";
import locationIconOrenge from "../assets/locationIconOrenge.svg";
import productHeadImg from "../assets/productHeadImg.png";
import bannerTop1 from "../assets/artboard1.png";
import bannerTop2 from "../assets/ourstory_top_2.jpg";
import callIconOrenge from "../assets/callIconOrenge.svg";
import watchIconOrenge from "../assets/watchIconOrenge.svg";
import add from "../assets/add.svg";
import fierIcon from "../assets/fierIcon.svg";
import fierIcon1 from "../assets/fierIcon.svg";
import vegLefIcon from "../assets/vegLefIcon.svg";
import chickenIcon from "../assets/chickenIcon.svg";
import productDeshImg from "../assets/productDeshImg.png";
import productDeshImg1 from "../assets/productDeshImg.png";
import productDeshImg2 from "../assets/productDeshImg.png";
import productDeshImg3 from "../assets/productDeshImg.png";
import hertIcon from "../assets/hertIcon.svg";
import hertIcon2 from "../assets/hertIcon.svg";
import hertIcon3 from "../assets/hertIcon.svg";
import hertIcon4 from "../assets/hertIcon.svg";
import { setCredentials, setLocation } from "../redux/actions/dataActions";
import { toast } from "react-toastify";
import ReactTooltip from 'react-tooltip';
import RedHeartIcon from "../assets/redHeartIcon.svg";
import LikeIcon from "../assets/likeIcon.svg";
import DislikeIcon from "../assets/dislikeIcon.svg";
import SaveIcon from "../assets/saveIcon.svg";
import FilterIcon from "../assets/icons/filter-6551.svg";
import { useAuth0 } from "@auth0/auth0-react";
import Modal from "../components/Modal";
import ModalReview from "../components/ModalReview";
import CATEGORY from "../components/CATEGORY";
import { Calendar, DateRangePicker, DateRange } from "react-date-range";
import { format } from "date-fns";
import { Field, Formik } from "formik";
import * as Yup from "yup";
import { Button, Form } from "react-bootstrap";
import { SubMenuPagesHeader } from "../components/SubMenuPagesHeader";
import DarkMode from "../components/DarkMode";
import DarkMode1 from "../components/DarkMode1";
import { generateRandomInteger } from "../utils/Appconstants";
import { useDispatch } from "react-redux";
import ComingSoonPopUp from "../components/pop-up/coming_soon_popup";

const ProductPage = () => {
  const dispatch = useDispatch();
  const [isWAddonOpen, setWAddonOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [restorentdata, setRestorentdata] = useState([]);
  const [restorentmenudata, setRestorentmenudata] = useState([]);
  const [restorentmenutagdata, setRestorentMenuTagData] = useState([]);
  const [restorentmenutagitemdata, setRestorentMenuTagItemdata] = useState([]);
  const [activemenu, setactivemenu] = useState(0);
  const [activetag, setActivetag] = useState(0);
  const [selectedMenuIndex, setSelectedMenuIndex] = useState(0);
  const [selectedTagIndex, setSelectedTagIndex] = useState("all");
  const [basketalldata, setBasketalldata] = useState([]);
  const [menuitemdata, setMenuitemdata] = useState({});
  const [locationdata, setLocationdata] = useState([]);
  const [isLikeMenu, setIsLikeMenu] = useState(false);
  const [selectedItemIndex, setSelectedItemIndex] = useState(null);
  const { user, isAuthenticated, isLoading, loginWithRedirect } = useAuth0();
  const [loggedin, setLoggedin] = useState(true);
  const [savemodal, setSavemodal] = useState(false);

  // adding reviewModal
  const [reviewItem, setReviewItem] = useState([]);
  const [reviewItemModal, setReviewItemModal] = useState(false);
  const [isloggedin, setIsLoggedin] = useState(false);
  const [savedate, setSavedate] = useState({
    saveit_date: {
      // Initialize saveit_date
      startDate: null,
      endDate: null,
      key: "selection1",
    },
  });
  const [metadata, setMetadata] = useState(null);
  const [reaction, setReaction] = useState(null);
  const [initialData, setInitialData] = useState({
    saveit_date: {
      // Initialize saveit_date
      startDate: null,
      endDate: null,
      key: "selection1",
    },
  });
  const [isValidForm, setIsValidForm] = useState(false); // State variable to store isValid value
  const [tooltipText, setTooltipText] = useState('');
  useEffect(() => {
    GetLocationData();
    GetRestaurentData();
    GetMenuTagItemData("ALL", "all");
    GetMenuTagData("ALL", "all");
    setSelectedMenuIndex("all");
    setactivemenu("ALL");
    setActivetag("all");
    RegisterAsUnknowUser()
  }, []);
  const id = new URLSearchParams(useLocation().search).get("id");
  const RegisterAsUnknowUser = () => {
    const credentials = JSON.parse(localStorage.getItem("credentials"));
    let emailToFetch = (user && user.email) || (credentials && credentials.email_id);
    console.log(credentials, 'emailToFetch==>>11133')
    console.log(emailToFetch, 'emailToFetch==>>111')
    console.log(user, 'emailToFetch==>>111333')
    if (!credentials) {
      const randomNumber = generateRandomInteger(1, 100000000);

      var data = {
        firstName: 'firstName' + randomNumber,
        lastName: 'lastName' + randomNumber,
        email: 'email' + randomNumber + '@gmail.com',
        phoneNumber: 'phoneNumber' + randomNumber,
      };
    }
    else if(emailToFetch){
      var data = {
        'email': emailToFetch,
        'user_name': emailToFetch,
        // 'spr_user_id':credentials?.spr_user_id
      }
    }
      // Make API call
      API.getInstance()
        .menu.post('api/register', data)
        .then((res) => {
          localStorage.setItem('credentials', JSON.stringify(res.data.result));
          dispatch(setCredentials(res.data.result));
          // Handle response accordingly
          if (res.data.result.code === 2) {
            CheckUserOffer(['First User', 'ALL', 'Registered User']);
          } else {
            CheckUserOffer(['Registered User', 'ALL']);
          }
          GetBasketData();
          // window.location.reload();
        })
        .catch((error) => {
          console.error('Error:', error);
          // Handle error if needed
        });
  };

  const GetLocationData = async () => {
    const location_id = localStorage.getItem("location_id");
    API.getInstance()
      .menu.get(`/api/restaurent?id=${id}`)
      .then((res) => {
        // console.log(res.data.result.data[0], "res.data.result.data[0]");
        const locationAddress = res.data.result.data[0];
        setLocationdata(locationAddress);
      })
      .catch((error) => { })
      .finally(() => { });
  };

  const GetRestaurentData = async () => {
    localStorage.setItem("location_id", id);
    // console.log('GetRestaurentData=product==in ')
    API.getInstance()
      .menu.get(`/api/restaurent?id=${id}`)
      .then((res) => {
        // console.log('GetRestaurentData==in', res.data.result)
        setRestorentdata(res.data.result.data);
        setRestorentmenudata(res.data.result.items_linked_menus);
        // // console.log(res.data.result.data, 'res.data.result.data==>')
        dispatch(setLocation(res.data.result.data));
      })
      .catch((error) => { })
      .finally(() => { });
  };

  const OnClickMenu = (menu_id, index, tag_index, tag_id) => {
    setactivemenu(menu_id);
    setSelectedMenuIndex(index);
    localStorage.setItem('selectedMenuIndex',index)
    setSelectedTagIndex(tag_index);
    setActivetag(tag_id);
    // navigate(`/productpage?id=${id}`);
    if (menu_id == "ALL") {
      GetMenuTagData("ALL", tag_id);
    } else {
      GetMenuTagData(menu_id, tag_id);
    }
  };

  const GetBasketData = async () => {
    const credentials = JSON.parse(localStorage.getItem("credentials"));
    API.getInstance()
      .menu.get(`/api/cart-items?customer_user_id=${credentials?.user_id}`)
      .then((res) => {
        setBasketalldata(res.data.result.data);
        dispatch(setBasketcount(res.data.result.basket_count));
      })
      .catch((error) => { })
      .finally(() => { });
  };

  const UpdateBasket = useCallback(() => {
    console.log("UpdateBasket==called");
    GetBasketData();
  }, []);

  const GetMenuTagData = async (menu_id, tag_id) => {
    GetMenuTagItemData(menu_id, tag_id);
    let updated_url;
    if (menu_id == "ALL") {
      updated_url = `/api/menu-tags?id=${id}&menu_id=ALL`;
    } else {
      updated_url = `/api/menu-tags?id=${id}&menu_id=${menu_id}&tag_id=${tag_id}`;
    }
    API.getInstance()
      .menu.get(updated_url)
      .then((res) => {
        setRestorentMenuTagData(res.data.result.data);
      })
      .catch((error) => { })
      .finally(() => { });
  };

  const GetMenuTagItemData = async (menu_id, tag_id) => {
    let updated_url = "";
    if (tag_id != "all") {
      updated_url = `/api/web-menu-tags-item?id=${id}&menu_id=${menu_id}&tag_id=${tag_id}`;
    } else {
      updated_url = `/api/web-menu-tags-item?id=${id}&menu_id=${menu_id}`;
    }
    API.getInstance()
      .menu.get(updated_url)
      .then((res) => {
        if (res.data.result.data.length === 0 && tag_id !== "all") {
          console.log(
            res.data.result.data.length,
            "res.data.result.data.length"
          );
          setActivetag("all");
          GetMenuTagItemData(menu_id, "all");
        }
        setRestorentMenuTagItemdata(res.data.result.data);
      })
      .catch((error) => { })
      .finally(() => { });
  };

  const onFrameInputClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='framecallContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const [isWoAddonOpen, setWoAddonOpen] = useState(false);

  const openWoAddon = useCallback(() => {
    setWoAddonOpen(true);
  }, []);

  const closeWoAddon = useCallback(() => {
    setWoAddonOpen(false);
    OnClickMenu("ALL", "all", "all", "all")
  }, []);

  const AddedToBasket = useCallback(() => {
    console.log("AddedToBasket===>");
    OnClickMenu("ALL", "all", selectedTagIndex, activetag);
    toast.success("Item Added to basket successfully!");
  }, []);

  const SaveModalFunction = async (menu_data, reaction, flag) => {
    const credentials = JSON.parse(localStorage.getItem("credentials"));
    const prefixToCheck = 'email';
    if (credentials.email_id.startsWith(prefixToCheck)) {
      console.log('credentials.email starts with "email".');
      setIsLoggedin(false)
    }
    else {
      setIsLoggedin(true);
    }
    if (!credentials) {
      console.log("in iff")
    } else {
      if (flag) {
        setSavemodal(true);
      }
      setMetadata(menu_data);
      setReaction(reaction);
    }
  };
  const handleSubmit = async (values, { setSubmitting }) => {
    setSubmitting(true);
    UpdateReactionInDB(metadata, "SAVEIT", values);
  };

  const validationSchema = Yup.object().shape({});
  const handleDateChange = (item) => {
    const formattedDate = format(item, "dd/MM/yyyy");
    console.log("Formatted Date:", formattedDate);
    setSavedate(item);
  };

  const UpdateReactionInDB = async (menu_data, reaction, values) => {
    const credentials = JSON.parse(localStorage.getItem("credentials"));
    const prefixToCheck = 'email';
    console.log(reaction, 'reaction==>111111')
    if (credentials.email_id.startsWith(prefixToCheck)) {
      console.log('credentials.email starts with "email".');
      if (reaction == "SAVEIT") {
        setIsLoggedin(false)
      }
      else {
        toast.error("Please Login to React");
        setLoggedin(false);
        return false;
      }
    }
    if (reaction == "SAVEIT") {
      setSavemodal(false);
      setMetadata(menu_data);
      setReaction(reaction);
    }
    let body = {};
    if (reaction == "SAVEIT") {
      body = {
        cuser_id: credentials?.user_id,
        menu_items_id: menu_data.id,
        reaction: "saveit",
        saveit_date: values?.saveit_date,
      };
      if (values && 'email_id' in values) {
        body['email_id'] = values?.email_id
      }
    } else {
      body = {
        cuser_id: credentials?.user_id,
        menu_items_id: menu_data.id,
        reaction: reaction,
      };
    }
    try {
      const res = await API.getInstance().menu.post(
        "api/user-items-reaction",
        body
      );
      setLoggedin(true);
      setSavemodal(false);
      return true; // Return true if update is successful
    } catch (error) {
      console.error(error);
      toast.error("Failed to update reaction");
      setLoggedin(false);
      return false; // Return false if there's an error
    }
  };

  const OnClickAddButton = async (menu_item) => {
    setMenuitemdata(menu_item);
    openWoAddon(true);
  };

  const OnClickReactionpopup = async (item_data, reactionType) => {
    setRestorentMenuTagItemdata((prevState) => {
      const newData = prevState.map((menu) => {
        const newItemList = menu.menu_item_info_list.map((item) => {
          if (item.id === item_data.id) {
            let updatedItem = { ...item };
            let reactionUpdated = false;
            switch (reactionType) {
              case "LOVEIT":
                UpdateReactionInDB(item_data, "loveit");
                updatedItem = {
                  ...updatedItem,
                  loveit: !updatedItem.loveit,
                  loveit_count: updatedItem.loveit
                    ? updatedItem.loveit_count - 1
                    : updatedItem.loveit_count + 1,
                };
                reactionUpdated = true;
                break;
              case "LIKEIT":
                UpdateReactionInDB(item_data, "likeit");
                updatedItem = {
                  ...updatedItem,
                  likeit: !updatedItem.likeit,
                  likeit_count: updatedItem.likeit
                    ? updatedItem.likeit_count - 1
                    : updatedItem.likeit_count + 1,
                };
                reactionUpdated = true;

                break;
              case "DISLIKE":
                UpdateReactionInDB(item_data, "dislikeit");
                updatedItem = {
                  ...updatedItem,
                  dislikeit: !updatedItem.dislikeit,
                  dislikeit_count: updatedItem.dislikeit
                    ? updatedItem.dislikeit_count - 1
                    : updatedItem.dislikeit_count + 1,
                };
                reactionUpdated = true;
                // UpdateReactionInDB(item_data, 'dislikeit')
                //   .then(reactionResult => {
                //     if (reactionResult) {
                //       updatedItem = {
                //         ...updatedItem,
                //         dislikeit: !updatedItem.dislikeit,
                //         dislikeit_count: updatedItem.dislikeit ? updatedItem.dislikeit_count - 1 : updatedItem.dislikeit_count + 1
                //       };
                //       reactionUpdated = true;
                //     }
                //   })
                //   .catch(error => {
                //     // Handle error
                //     console.error('Failed to update reaction:', error);
                //   });

                break;
              case "SAVEIT":
                // UpdateReactionInDB(item_data,'saveit')
                if (!updatedItem.saveit) {
                  console.log(updatedItem.saveit, "updatedItem.saveit==true");
                  SaveModalFunction(item_data, "saveit", true);
                } else {
                  console.log(updatedItem.saveit, "updatedItem.saveit==false");
                  SaveModalFunction(item_data, "saveit", false);
                  UpdateReactionInDB(item_data, "SAVEIT");
                }
                updatedItem = {
                  ...updatedItem,
                  saveit: !updatedItem.saveit,
                  saveit_count: updatedItem.saveit
                    ? updatedItem.saveit_count - 1
                    : updatedItem.saveit_count + 1,
                };

                reactionUpdated = true;
                break;

              default:
                break;
            }
            if (reactionUpdated) {
              updatedItem.total_reaction_count =
                updatedItem.loveit_count +
                updatedItem.likeit_count +
                updatedItem.dislikeit_count +
                updatedItem.saveit_count;
            }
            return updatedItem;
            updatedItem.total_reaction_count =
              updatedItem.loveit_count +
              updatedItem.likeit_count +
              updatedItem.dislikeit_count +
              updatedItem.saveit_count;
            return updatedItem;
          } else {
            return item;
          }
        });
        return {
          ...menu,
          menu_item_info_list: newItemList,
        };
      });
      return [...newData]; // Return a new array to trigger state update
    });
  };

  const OnClickLikepopup = async (id) => {
    if (selectedItemIndex == id) {
      setSelectedItemIndex(0);
    } else {
      setSelectedItemIndex(id);
    }
  };

  const OnClickLikepopupClose = async (id) => {
      setSelectedItemIndex(null);
   };

   const reviewItemModalFunction = async (menu_data, flag) => {
    console.log(menu_data)
    const credentials = JSON.parse(localStorage.getItem("credentials"));
    const prefixToCheck = 'email';
    if (credentials.email_id.startsWith(prefixToCheck)) {
      console.log('credentials.email starts with "email".');
      setIsLoggedin(false)
    }
    else {
      
      setIsLoggedin(true);
    }
    if (!credentials) {
      setReviewItem([])
      console.log("in iff")
    } else {
      setReviewItem(menu_data)
      if (flag) {
        setReviewItemModal(true);
      }
      setMetadata(menu_data);
      setReaction(reaction);
    }
  };

  const closeModal = () => {
    setLoggedin(true);
  };

  const closeSaveModal = () => {
    setSavemodal(false);
  };

  const closeReviewModal = () => {
    setReviewItemModal(false);
  };


  const menuContainerRef = useRef(null); // Ref for the menu container
  const [menuContainerHeight, setMenuContainerHeight] = useState(0); // State for storing container height

  useEffect(() => {
    // Calculate height of the menu container after component has rendered or when restorentmenudata changes
    if (menuContainerRef.current) {
      const height = menuContainerRef.current.getBoundingClientRect().height;
      setMenuContainerHeight(height);
      console.log("restorentmenudata===1", height)
    }

  }, [restorentmenudata]); // Recalculate height when restorentmenudata changes

  const [isPopupVisible, setPopupVisible] = useState(true);
  const showPopup = () => {
    setPopupVisible(true);
    
  };
  const navigate = useNavigate();
  const hidePopup = () => {
    setPopupVisible(false);
    navigate('/');
  };


  return (
    <>
      <div className=" h-fit min-h-[100vh] ">
      
{/* 
      <ComingSoonPopUp visible={isPopupVisible} onClose={hidePopup}  >
        <div  >
           
          <img
          src={
             "https://hunger.thestorywallcafe.com/media/comming_soon.jpg"
          }
          alt="deshimg"
          style={{borderWidth:'.5px', borderRadius:'20px', borderColor:`var(--hp-yellow-600)`}}
        />
           
        </div>
      </ComingSoonPopUp> */}


        <div>
          <div className="w-full relative" style={{ backgroundColor: `var(--website-bg)` }}>
            <img src={bannerTop1} className="menu-top-banner" alt="productPage" />
            <div className="w-full flex justify-between ">

              <div className="w-full flex flex-col items-center sm:w-full md:w-full lg:w-full sm:flex sm:flex-col sm:items-center md:flex md:flex-col md:items-center lg:flex lg:flex-col">
                <div ref={menuContainerRef} className="sticky-top-wrapper" style={{ backgroundColor: `var(--website-bg)` }}>
                  <div className="flex flex-wrap w-full gap-4 my-6 sm:px-10 md:px-20 px-10" >


                    <div
                      style={{ fontSize: `var(--primary-font-size-mini)`, transition: 'background-color 0.4s ease', paddingTop: '0.5rem', paddingBottom: '0.5rem' }}
                      className={`border-[1px] border-[#E5B638] px-4 rounded-md  font-inter font-normal text-[#fff] flex gap-[10px] cursor-pointer responsive-font-size ${selectedMenuIndex === "all"
                        ? "bg-[#C21F24]"
                        : "hover:bg-[#C21F24] cursor-pointer"
                        }`}
                      onClick={() =>
                        OnClickMenu("ALL", "all", selectedTagIndex, activetag)
                      }
                    >
                      All Menu
                    </div>
                    {restorentmenudata &&
                      restorentmenudata.map((menu, index) => (
                        <div
                          style={{ fontSize: `var(--primary-font-size-mini)`, transition: 'background-color 0.4s ease', paddingTop: '0.5rem', paddingBottom: '0.5rem' }}
                          key={index}
                          className={` border-[1px] border-[#E5B638] px-4 rounded-md text-[#fff] flex responsive-font-size cursor-pointer ${selectedMenuIndex === index
                            ? "bg-[#C21F24]"
                            : "hover:bg-[#C21F24] cursor-pointer"
                            }`}
                          onClick={() =>
                            OnClickMenu(
                              menu.id,
                              index,
                              selectedTagIndex,
                              activetag
                            )
                          }
                        >
                          {menu.menu_title}
                        </div>
                      ))}
                  </div>
                </div>
                <MobileHamMenu menuListData={restorentmenudata} OnClickMenu={OnClickMenu} selectedTagIndex={selectedTagIndex}
                activetag={activetag}
                selectedMenuIndex={selectedMenuIndex}
                 />
                <div className=" w-[90%] flex flex-col gap-6 ">
                  <div>
                    <div className="menu-items-list w-full flex flex-col gap-y-[35px] mb-12">
                      {restorentmenutagitemdata &&
                        restorentmenutagitemdata.map((menu, index) => (
                          <React.Fragment key={index}>
                            <div className="sticky-top-wrappe-title" style={{ top: `calc(${menuContainerHeight}px + 57px)` }}>
                              <div style={{ fontSize: `var(--sub-header-font-size)`, fontFamily: `var(--secondary-font-family)`, color: `var(--hp-yellow-600)`, backgroundColor: ` var(--website-bg)` }} className="text-[#fff] flex  py-[10px] ">
                                {menu.menu_title}
                              </div>
                            </div>
                            <div className="pi-container w-full flex flex-col gap-y-[30px] mt-3 mb-3 "  >
                              {menu.menu_item_info_list &&
                                menu.menu_item_info_list.map(
                                  (item, itemIndex) =>
                                    itemIndex % 2 === 0 && (
                                      <div
                                        key={itemIndex}
                                        className="pi-row "
                                      >
                                        {/* First Item */}
                                        <div className="zoom-effect pi-each border-[#0d0e11] border-[.1px] hover:border-[#E5B638] cursor-pointer" style={{ backgroundColor: `var(--card-bg)`, transition: "transform 0.2s ease" }}>
                                          <img
                                            src={
                                              item.item_image &&
                                                item.item_image.split("media/")[1]
                                                ? item.item_image
                                                : "https://placehold.co/600x400"
                                            }
                                            alt="deshimg"
                                            style={{
                                              maxWidth: "30%",
                                              maxHeight: "100%",
                                              objectFit: "cover",
                                              width: "100%",
                                              height: "100%",
                                              borderTopLeftRadius: "10px",
                                              borderBottomLeftRadius: "10px",
                                              transition: "transform 0.2s ease", // Add transition for smooth scaling
                                            }}
                                            className="zoom-effect" // Add a class for targeting the image
                                          />
                                          <div
                                            className="flex flex-col justify-center"
                                            style={{
                                              width: "100%",
                                              marginTop: "20px",
                                              marginBottom: "20px",
                                            }}
                                          >
                                            <div style={{ fontFamily: `var(--primary-font-family-bold)`, fontSize: `var(--primary-font-size)` }} className="flex justify-between items-center text-[#E5B638] w-full pr-[10px] relative ">
                                              {item.name}
                                              <div
                                                className={`${selectedItemIndex === item.id ? "flex" : "hidden"
                                                  } absolute z-10 bg-[#252525] right-5 top-[-65px] rounded-md`}
                                              >
                                                
                                                <ul
                                                  style={{ marginTop: "10px" }}
                                                  className="flex justify-center items-center h-full gap-2"
                                                  aria-labelledby="dropdownDividerButton"
                                                >
                                                 
                                                  <span className="p-1 flex justify-center items-start gap-5 h-full">
                                                    
                                                  {/* ReadHeart */}
                                                  <li onClick={() => OnClickReactionpopup(item, 'LOVEIT')} className="tooltip">
                                                    <div className="flex flex-col justify-center items-center">
                                                      <img
                                                        className="flex items-center justify-center w-5 h-5"
                                                        src={RedHeartIcon}
                                                        alt="hertIcon"
                                                      />
                                                      <span className="text-xs font-normal text-white pt-1">
                                                        {item.loveit_count}
                                                        <span style={{ marginBottom: '20px', left: "20px" }} className="tooltiptextredheart">
                                                          Had It, Loved It!
                                                        </span>
                                                      </span>
                                                    </div>
                                                  </li>
                                                  <li onClick={() => OnClickReactionpopup(item, 'LIKEIT')} className="tooltip">
                                                    <div className="flex flex-col justify-center items-center">
                                                      <img
                                                        className="flex items-center justify-center w-6 h-6"
                                                        src={LikeIcon}
                                                        alt="hertIcon"
                                                      />
                                                      <span className="text-xs font-normal text-white pt-0">
                                                        {item.likeit_count}
                                                        <span style={{ marginBottom: '20px', alignContent: 'center' }} className="tooltiptextlike">Had It,Liked It!</span>
                                                      </span>

                                                    </div>
                                                  </li>
                                                  <li
                                                    className="flex items-center justify-center w-5 h-5"
                                                   onClick={() => OnClickReactionpopup(item, 'SAVEIT')} className="tooltip">
                                                    <div className="flex flex-col justify-center items-center">
                                                      <img
                                                        src={SaveIcon}
                                                        alt="hertIcon"
                                                      />
                                                      <span className="text-xs font-normal text-white pt-2">
                                                        {item.saveit_count}
                                                        <span style={{ marginBottom: '20px', left: '-80px', alignContent: 'center' }} className="tooltiptextsave">Remind Me!</span>
                                                      </span>
                                                    </div>
                                                  </li>
                                             
                                                  </span>
                                                  <span className="p-2 flex justify-start items-start h-full" onClick={OnClickLikepopupClose}>
                                                  x
                                                  </span>
                                                </ul>
                                              </div>
                                              <div className="flex gap-4 ">
                                               <span onClick={()=>reviewItemModalFunction(item,true)}>
                                                
                                                review me
                                                </span> 
                                              <span
                                                onClick={() =>
                                                  OnClickLikepopup(item.id)
                                                }
                                                >
                                                <img
                                                  src={hertIcon}
                                                  alt="hertIcon"
                                                  />
                                              </span>
                                                  </div>
                                          
                                            </div>
                                            <div style={{ fontSize: `var(--primary-font-size-sm-mini)`, color: `var(--description)` }} className="flex justify-between items-center text-[#fff] pr-[18px] mt-4">
                                              {item.description}
                                            </div>
                                            <div className="flex justify-between items-center text-[#fff] pr-[18px] mt-4">
                                              $ {item.amount}
                                              <span>
                                                {item.total_reaction_count}
                                              </span>
                                            </div>
                                            <button
                                              className="menu-action-cart-btn"
                                              onClick={() =>
                                                OnClickAddButton(item)
                                              }
                                            >
                                              ADD
                                            </button>
                                          </div>
                                        </div>

                                        {/* Second Item */}
                                        {menu.menu_item_info_list[
                                          itemIndex + 1
                                        ] && (
                                            <div className="zoom-effect pi-each border-[#0d0e11] border-[.1px] hover:border-[#E5B638] cursor-pointer" style={{ backgroundColor: `var(--card-bg)`, transition: "transform 0.2s ease" }}>
                                              <img
                                                src={
                                                  menu.menu_item_info_list[
                                                    itemIndex + 1
                                                  ].item_image &&
                                                    menu.menu_item_info_list[
                                                      itemIndex + 1
                                                    ].item_image.split("media/")[1]
                                                    ? menu.menu_item_info_list[
                                                      itemIndex + 1
                                                    ].item_image
                                                    : "https://placehold.co/600x400"
                                                }
                                                // src={'https://cdn.mygingergarlickitchen.com/images_webp/800px/800px-recipe-amritsari-chole-anupama-paliwal-my-ginger-garlic-kitchen-5.webp'}
                                                alt="deshimg"
                                                style={{
                                                  maxWidth: "30%",
                                                  maxHeight: "100%",
                                                  objectFit: "cover",
                                                  width: "100%",
                                                  height: "100%",
                                                  borderTopLeftRadius: "10px",
                                                  borderBottomLeftRadius: "10px",
                                                }}
                                              />
                                              <div
                                                className="flex flex-col justify-center"
                                                style={{
                                                  width: "100%",
                                                  marginTop: "20px",
                                                  marginBottom: "20px",
                                                }}
                                              >
                                                <div style={{ fontFamily: `var(--primary-font-family-bold)`, fontSize: `var(--primary-font-size)` }} className="flex justify-between items-center text-[#E5B638] w-full pr-[10px] relative responsive-font-size">
                                                  {
                                                    menu.menu_item_info_list[
                                                      itemIndex + 1
                                                    ].name
                                                  }
                                                  <div
                                                    className={`${selectedItemIndex === menu.menu_item_info_list[
                                                      itemIndex + 1
                                                    ].id ? "flex" : "hidden"
                                                      } absolute Z-10 bg-[#252525] right-5 top-[-65px] rounded-md`}
                                                  >

                                                    <ul
                                                  style={{ marginTop: "10px" }}
                                                  className="flex justify-center items-center h-full gap-2"
                                                  aria-labelledby="dropdownDividerButton"
                                                >
                                                 
                                                  <span className="p-1 flex justify-center items-start gap-5 h-full">
                                                    
                                                  {/* ReadHeart */}
                                                  <li onClick={() => OnClickReactionpopup(item, 'LOVEIT')} className="tooltip">
                                                    <div className="flex flex-col justify-center items-center">
                                                      <img
                                                        className="flex items-center justify-center w-5 h-5"
                                                        src={RedHeartIcon}
                                                        alt="hertIcon"
                                                      />
                                                      <span className="text-xs font-normal text-white pt-1">
                                                        {item.loveit_count}
                                                        <span style={{ marginBottom: '20px', left: "20px" }} className="tooltiptextredheart">
                                                          Had It, Loved It!
                                                        </span>
                                                      </span>
                                                    </div>
                                                  </li>
                                                  <li onClick={() => OnClickReactionpopup(item, 'LIKEIT')} className="tooltip">
                                                    <div className="flex flex-col justify-center items-center">
                                                      <img
                                                        className="flex items-center justify-center w-6 h-6"
                                                        src={LikeIcon}
                                                        alt="hertIcon"
                                                      />
                                                      <span className="text-xs font-normal text-white pt-0">
                                                        {item.likeit_count}
                                                        <span style={{ marginBottom: '20px', alignContent: 'center' }} className="tooltiptextlike">Had It,Liked It!</span>
                                                      </span>

                                                    </div>
                                                  </li>
                                                  <li
                                                    className="flex items-center justify-center w-5 h-5"
                                                   onClick={() => OnClickReactionpopup(item, 'SAVEIT')} className="tooltip">
                                                    <div className="flex flex-col justify-center items-center">
                                                      <img
                                                        src={SaveIcon}
                                                        alt="hertIcon"
                                                      />
                                                      <span className="text-xs font-normal text-white pt-2">
                                                        {item.saveit_count}
                                                        <span style={{ marginBottom: '20px', left: '-80px', alignContent: 'center' }} className="tooltiptextsave">Remind Me!</span>
                                                      </span>
                                                    </div>
                                                  </li>
                                             
                                                  </span>
                                                  <span className="p-2 flex justify-start items-start h-full" onClick={OnClickLikepopupClose}>
                                                  x
                                                  </span>
                                                </ul>
                                                  </div>
                                                  {/* <span
                                                    onClick={() =>
                                                      OnClickLikepopup(menu.menu_item_info_list[
                                                        itemIndex + 1
                                                      ].id)
                                                    }
                                                  >
                                                    <img
                                                      src={hertIcon}
                                                      alt="hertIcon"
                                                    />
                                                  </span> */}
                                                    <div className="flex gap-4 ">
                                                    <span onClick={()=>reviewItemModalFunction(menu.menu_item_info_list[
                                                      itemIndex + 1
                                                    ],true)}>
                                                
                                                review me 2
                                                </span> 
                                              <span
                                               onClick={() =>
                                                OnClickLikepopup(menu.menu_item_info_list[
                                                  itemIndex + 1
                                                ].id)
                                              }
                                                >
                                                <img
                                                  src={hertIcon}
                                                  alt="hertIcon"
                                                  />
                                              </span>
                                                  </div>
                                                </div>
                                                <div style={{ fontSize: `var(--primary-font-size-sm-mini)`, color: `var(--description)` }} className="flex justify-between items-center text-[#fff] pr-[18px] mt-4">
                                                  {menu.menu_item_info_list[
                                                    itemIndex + 1
                                                  ].description}
                                                </div>
                                                <div className="flex justify-between items-center font-poppins font-normal text-[#fff] pr-[18px] responsive-font-size mt-4">
                                                  ${" "}
                                                  {
                                                    menu.menu_item_info_list[
                                                      itemIndex + 1
                                                    ].amount
                                                  }
                                                  <span>
                                                    {
                                                      menu.menu_item_info_list[
                                                        itemIndex + 1
                                                      ].total_reaction_count
                                                    }
                                                  </span>
                                                </div>
                                                <button
                                                  className="menu-action-cart-btn"
                                                  onClick={() =>
                                                    OnClickAddButton(
                                                      menu.menu_item_info_list[
                                                      itemIndex + 1
                                                      ]
                                                    )
                                                  }
                                                >
                                                  ADD
                                                </button>
                                              </div>
                                            </div>
                                          )}
                                      </div>
                                    )
                                )}
                            </div>
                          </React.Fragment>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {savemodal && (
          <Modal isOpen={savemodal} onClose={closeSaveModal} width={"30%"}>
            <div
              style={{
                margin: "10px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div
                className="category-10"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <div className="signin-text-wrapper">
                  <div className="signin-text1">
                    <div className="sign-in-wrapper">
                      <h1 className="sign-in1">Save Item</h1>
                    </div>
                    <div className="a-few-more-questions-to-help-b-wrapper">
                      <div className="a-few-more1">
                        Get email notification on the saved date
                      </div>
                    </div>
                  </div>
                </div>
                <Formik
                  enableReinitialize
                  initialValues={initialData}
                  validationSchema={validationSchema}
                  onSubmit={handleSubmit}
                  validateOnChange={true} // Validate on change to update isValidForm state
                  validateOnBlur={false} // Disable onBlur validation to prevent unexpected form state changes
                  validate={(values) => {
                    // Manually validate the form on change
                    validationSchema
                      .validate(values)
                      .then(() => setIsValidForm(true))
                      .catch(() => setIsValidForm(false));
                  }}
                >
                  {({
                    isValid,
                    values,
                    handleChange,
                    handleSubmit,
                    setFieldValue,
                    errors,
                    touched,
                    isSubmitting,
                  }) => (
                    <Form onSubmit={handleSubmit}>
                      {!isloggedin ? <Form.Group className="mb-3">
                        <Field
                          type="text"
                          name="email_id"
                          value={values.email_id}
                          onChange={handleChange}
                          // onBlur={handleBlur}
                          style={{ fontFamily: `var(--primary-font-family)`, fontSize: `var(--primary-font-size-mini)` }}
                          className="w-full border border-[#929292] rounded-[5px] h-[50px] text-[#909090] bg-transparent p-[10px] font-poppins font-normal text-sm outline-none"
                          placeholder="Email Id"
                        // {...(!isloggedin && { required: true })}
                        />
                      </Form.Group> : ""}
                      <Form.Group className="mb-3">
                        <DateRange
                          // style={{fontSize:'8px'}}
                          // dateDisplayFormat='dd/MM/yyyy'
                          className="date_picker_style"
                          onChange={(range) => {
                            // Update Formik field values for saveit_date
                            setFieldValue("saveit_date", range.selection1);
                          }}
                          ranges={[values.saveit_date]}
                        />
                        {errors.saveit_date && touched.saveit_date && (
                          <div className="error-message">
                            {errors.saveit_date}
                          </div>
                        )}
                      </Form.Group>
                      <div
                        style={{
                          marginTop: "20px",
                          display: "flex",
                          justifyContent: "center",
                          width: "100%",
                        }}
                      >
                        <button
                          type="submit"
                          className="buttons-states-dark20"
                          style={{ backgroundColor: !isValidForm ? "grey" : "red" }}
                          disabled={!isValidForm}
                        >
                          <b
                            style={{ lineHeight: "30%", fontSize: "14px" }}
                            className="button28"
                          >
                            SAVE
                          </b>
                        </button>
                      </div>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </Modal>
        )}

        {!loggedin && (
          <Modal isOpen={!loggedin} onClose={closeModal}>
            <CATEGORY />
          </Modal>
        )}

{/* adding reviewing menu item */}
{reviewItemModal && (
          <ModalReview isOpen={reviewItemModal} onClose={closeReviewModal} width={"30%"}>
            <div
              style={{
                margin: "30px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div
                className="category-10 w-full"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <div className="signin-text-wrapper">
                  <div className="signin-text1">
                    <div className="sign-in-wrapper">
                      <h1 className="sign-in1">Review Item</h1>
                    </div>
                   
                  </div>
                </div>
                <div className="flex gap-4 items-start justify-around">

             
                <div className="text-sm w-full flex items-start justify-start">

                {JSON.stringify(reviewItem.item_image,null,2)}
                <img
                                                src={reviewItem?.item_image
                                                    ? reviewItem?.item_image
                                                    : "https://placehold.co/600x400"
                                                }
                                                // src={'https://cdn.mygingergarlickitchen.com/images_webp/800px/800px-recipe-amritsari-chole-anupama-paliwal-my-ginger-garlic-kitchen-5.webp'}
                                                alt="deshimg"
                                                style={{
                                                  maxWidth: "30%",
                                                  maxHeight: "100%",
                                                  objectFit: "cover",
                                                  width: "100%",
                                                  height: "100%",
                                                  borderTopLeftRadius: "10px",
                                                  borderBottomLeftRadius: "10px",
                                                }}
                                              />
                </div>
                <div className="text-sm w-full flex items-start justify-start">

{JSON.stringify(reviewItem,null,2)}
</div>
</div>
              </div>
            </div>
          </ModalReview>
        )}
      </div>
      {isWoAddonOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeWoAddon}
        >
          <WoAddon
            UpdateBasket={UpdateBasket}
            onClose={closeWoAddon}
            menu_item={menuitemdata}
            setMenuitemdata={setMenuitemdata}
            AddedToBasket={AddedToBasket}
            isWoAddonOpen={isWoAddonOpen}
          />
        </PortalPopup>
      )}
      <DarkMode1 />
    </>
  );
};

export default ProductPage;
