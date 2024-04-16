import { useState, useCallback,useEffect } from "react";
import WAddon from "../components/WAddon";
import PortalPopup from "../components/PortalPopup";
import Header from "../components/Header";
import DishType from "../components/DishType";
import Locationhospitalframe from "../components/Locationhospitalframe";
import "./ProductPage.css";
import Sidebar from "./Sidebar";
import WoAddon from "../components/WoAddon";
import { API } from "../api/api";
import { useLocation } from "react-router-dom";
import locationIconOrenge from  "../assets/locationIconOrenge.svg";


import productHeadImg from  "../assets/productHeadImg.png"
import callIconOrenge from  "../assets/callIconOrenge.svg"
import watchIconOrenge from  "../assets/watchIconOrenge.svg"
import add from  "../assets/add.svg"
import fierIcon from  "../assets/fierIcon.svg"
import fierIcon1 from  "../assets/fierIcon.svg"
import vegLefIcon from  "../assets/vegLefIcon.svg"
import chickenIcon from  "../assets/chickenIcon.svg"
import productDeshImg from  "../assets/productDeshImg.png"
import productDeshImg1 from  "../assets/productDeshImg.png"
import productDeshImg2 from  "../assets/productDeshImg.png"
import productDeshImg3 from  "../assets/productDeshImg.png"
import hertIcon1 from  "../assets/hertIcon.svg"
import hertIcon2 from  "../assets/hertIcon.svg"
import hertIcon3 from  "../assets/hertIcon.svg"
import hertIcon4 from  "../assets/hertIcon.svg"





const ProductPage = () => {
  const [isWAddonOpen, setWAddonOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [restorentdata, setRestorentdata] = useState([]);
  const [restorentmenudata, setRestorentmenudata] = useState([]);
  const [restorentmenutagdata, setRestorentMenuTagData] = useState([]);

  useEffect(() => {
    GetRestaurentData()
  }, []);
  const id = new URLSearchParams(useLocation().search).get('id');
  const GetRestaurentData = async () => {
    
    console.log('GetRestaurentData=product==in ')
    API.getInstance().menu.get(`/api/restaurent?id=${id}`)
      .then((res) => {
        // console.log('GetRestaurentData==in',res.data.result)
        setRestorentdata(res.data.result.data)
        setRestorentmenudata(res.data.result.items_linked_menus)
        // console.log(res.data.result.data, 'res.data.result.data==>')
        // dispatch(setLocation(res.data.result.data));
      })
      .catch((error) => {
      })
      .finally(() => {
      });
  }

  const OnClickMenu = (menu_data) => {
    console.log(menu_data.id,'menu_id')
    // navigate(`/productpage?id=${id}`);
    GetMenuTagData(menu_data.id)
  };


  const GetMenuTagData = async (menu_id) => {
    
    console.log('GetRestaurentData=product==in ')
    API.getInstance().menu.get(`/api/menu-tags?id=${id}&menu_id=${menu_id}`)
      .then((res) => {
        // console.log('GetRestaurentData==in',res.data.result.data)
        setRestorentMenuTagData(res.data.result.data)
      })
      .catch((error) => {
      })
      .finally(() => {
      });
  }

  
  const openWAddon = useCallback(() => {
    setWAddonOpen(true);
  }, []);

  const closeWAddon = useCallback(() => {
    setWAddonOpen(false);
  }, []);

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
  }, []);



  
  return (
    <>
      <div className="bg-[#252525] h-fit min-h-[100vh] ">
        {/* <Header /> */}

        <div>
          <div className="w-full relative">
            <img src={productHeadImg} alt="productPage" />
            <div className="w-full flex justify-between ">
              <button
                data-collapse-toggle="mobile-menu-2 "
                type="button"
                className=" inline-flex items-center h-fit top-0 p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="mobile-menu-2"
                aria-expanded="false"
                onClick={() => setIsVisible(!isVisible)}
              >
                <span className="sr-only">Open main menu</span>

                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <svg
                  className="hidden w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
              <div className="h-full" onClick={() => setIsVisible(false)}>
                <Sidebar isOpen={isVisible} />
              </div>
              <div className="w-[30%] hidden sm:hidden md:hidden lg:flex">
                <div className="bg-[#363636] rounded-[20px] w-[25%] py-5 pl-6 pr-12 gap-5 flex flex-col absolute top-[10%] left-[2%]">
                  <div className="font-poppins font-semibold text-3xl text-[#E5B638] ml-3">
                    Alberta
                  </div>
                  <div className="flex items-center gap-[10px]">
                    <img src={locationIconOrenge} alt="locationIcon" />
                    <span className="font-poppins font-normal text-sm text-[#fff]">
                      1 Hospital St, Fort McMurrayState, Alberta, T9H 5C1
                    </span>
                  </div>
                  <div className="flex items-center gap-[10px]">
                    <img src={callIconOrenge} alt="locationIcon" />
                    <span className="font-poppins font-normal text-sm text-[#fff]">
                      (248) 676 7890
                    </span>
                  </div>
                  <div className="flex items-start gap-[10px]">
                    <img src={watchIconOrenge} alt="locationIcon" />
                    <div className="font-poppins font-normal text-sm text-[#fff]">
                      <div className="flex gap-[10px]">
                        Mon - Fri <span>10am - 9pm</span>
                      </div>
                      <div className="flex gap-[10px]">
                        Sat - Sun <span>10am - 11pm</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[85%] my-[50%] flex flex-col gap-[10px]">
                  <div className="font-poppins font-normal text-4xl leading-[46px] text-[#fff] px-10">
                    Menu
                  </div>
                  <div className="font-poppins font-semibold text-lg leading-[23px] text-[#fff] h-[50px] hover:bg-[#C21F24] px-10 flex items-center">
                      All
                    </div>
                  {restorentmenudata && restorentmenudata.map((menu, index) => (
                  <div
                    key={index}
                    className="font-poppins font-semibold text-lg leading-[23px] text-[#fff] h-[50px] hover:bg-[#C21F24] px-10 flex items-center"
                    onClick={() => OnClickMenu(menu)}
                  >
                    {menu.menu_title} {/* Assuming the API returns a 'name' field for each dish */}
                  </div>
                ))}
                  {/* <div className="flex flex-col">
                    <div className="font-poppins font-semibold text-lg leading-[23px] text-[#fff] h-[50px] hover:bg-[#C21F24] px-10 flex items-center">
                      All
                    </div>
                    <div className="font-poppins font-semibold text-lg leading-[23px] text-[#fff] h-[50px] hover:bg-[#C21F24] px-10 flex items-center">
                      North Indian Dishes
                    </div>
                    <div className="font-poppins font-semibold text-lg leading-[23px] text-[#fff] h-[50px] hover:bg-[#C21F24] px-10 flex items-center">
                      South Indian Dishes
                    </div>
                    <div className="font-poppins font-semibold text-lg leading-[23px] text-[#fff] h-[50px] hover:bg-[#C21F24] px-10 flex items-center">
                      Beverages
                    </div>
                    <div className="font-poppins font-semibold text-lg leading-[23px] text-[#fff] h-[50px] hover:bg-[#C21F24] px-10 flex items-center">
                      Deserts
                    </div>
                  </div> */}
                </div>
              </div>
              <div className="w-full flex flex-col items-center sm:w-full md:w-full lg:w-[70%] sm:flex sm:flex-col sm:items-center md:flex md:flex-col md:items-center lg:flex lg:flex-col lg:items-start">
                <div className="flex flex-wrap w-full gap-4 my-6 sm:px-10 md:px-10 lg:p-0 px-10">
                  <button className="border-[3px] border-[#E5B638] px-8 rounded-md hover:bg-[#C21F24] hover:border-[#C21F24] py-2 font-inter font-normal text-base text-[#fff] flex gap-[10px]">
                    All Dishes
                  </button>
                  <button className="border-[3px] border-[#E5B638] px-8 rounded-md hover:bg-[#C21F24] hover:border-[#C21F24] py-2 font-inter font-normal text-base text-[#fff] flex gap-[10px]">
                    <img src={add} alt="addicon" /> Newly added
                  </button>
                  <button className="border-[3px] border-[#E5B638] px-8 rounded-md hover:bg-[#C21F24] hover:border-[#C21F24] py-2 font-inter font-normal text-base text-[#fff] flex gap-[10px]">
                    <img src={fierIcon} alt="addicon" /> Trending
                  </button>
                  <button className="border-[3px] border-[#E5B638] px-8 rounded-md hover:bg-[#C21F24] hover:border-[#C21F24] py-2 font-inter font-normal text-base text-[#fff] flex gap-[10px]">
                    <img src={fierIcon1} alt="addicon" /> Popular
                  </button>
                  <button className="border-[3px] border-[#E5B638] px-8 rounded-md hover:bg-[#C21F24] hover:border-[#C21F24] py-2 font-inter font-normal text-base text-[#fff] flex gap-[10px]">
                    <img src={vegLefIcon} alt="addicon" /> Veg
                  </button>
                  <button className="border-[3px] border-[#E5B638] px-8 rounded-md hover:bg-[#C21F24] hover:border-[#C21F24] py-2 font-inter font-normal text-base text-[#fff] flex gap-[10px]">
                    <img src={chickenIcon} alt="addicon" /> Chicken
                  </button>
                </div>
                <div className="w-[90%] flex flex-col gap-6 border-t border-t-[#FFFFFF]">
                  <div>
                    <div className="font-poppins font-normal text-lg text-[#fff] bg-[#4C4C4C] flex items-center py-[10px] justify-center mt-6">
                      North Indian Dishes
                    </div>
                    <div className="w-full flex flex-col sm:flex-col md:flex-col lg:flex-row gap-y-[30px] gap-[30px] mt-6">
                      <div className="bg-[#363636] flex gap-3 w-[100%] lg:w-[50%]  rounded-[10px]">
                        <img src={productDeshImg} alt="deshimg" />
                        <div className="flex gap-[10px] justify-center flex-col w-full">
                          <div className="flex justify-between items-center font-poppins font-bold text-xl text-[#E5B638] w-full pr-[10px]">
                            Chole Batura
                            <span>
                              <img src={hertIcon1} alt="hertIcon" />
                            </span>
                          </div>
                          <div className="font-poppins font-normal text-lg text-[#fff]">
                            $3.00
                          </div>

                          <button className="border-[3px] border-[#E5B638] px-8 text-[#fff] rounded-md hover:bg-[#E5B638] py-2 w-[60%]" onClick={() => openWoAddon(true)}>
                            ADD
                          </button>
                        </div>
                      </div>
                      <div className="bg-[#363636] flex gap-3 w-[100%] lg:w-[50%] rounded-[10px]">
                        <img src={productDeshImg1} alt="deshimg" />
                        <div className="flex gap-[10px] justify-center flex-col w-full">
                          <div className="flex justify-between items-center font-poppins font-bold text-xl text-[#E5B638] w-full pr-[10px]">
                            Chole Batura
                            <span>
                              <img src={hertIcon2} alt="hertIcon" />
                            </span>
                          </div>
                          <div className="font-poppins font-normal text-lg text-[#fff]">
                            $3.00
                          </div>
                          <button className="border-[3px] border-[#E5B638] px-8 text-[#fff] rounded-md hover:bg-[#E5B638] py-2 w-[60%]" onClick={() => openWoAddon(true)}>
                            ADD
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="font-poppins font-normal text-lg text-[#fff] bg-[#4C4C4C] flex items-center py-[10px] justify-center mt-6">
                      North Indian Dishes
                    </div>
                    <div className="w-full flex flex-col sm:flex-col md:flex-col lg:flex-row gap-y-[30px] gap-[30px] mt-6">
                      <div className="bg-[#363636] flex gap-3 w-[100%] lg:w-[50%]  rounded-[10px]">
                        <img src={productDeshImg2} alt="deshimg" />
                        <div className="flex gap-[10px] justify-center flex-col w-full">
                          <div className="flex justify-between items-center font-poppins font-bold text-xl text-[#E5B638] w-full pr-[10px]">
                            Chole Batura
                            <span>
                              <img src={hertIcon3} alt="hertIcon" />
                            </span>
                          </div>
                          <div className="font-poppins font-normal text-lg text-[#fff]">
                            $3.00
                          </div>
                          <button className="border-[3px] border-[#E5B638] px-8 text-[#fff] rounded-md hover:bg-[#E5B638] py-2 w-[60%]" onClick={() => openWoAddon(true)}>
                            ADD
                          </button>
                        </div>
                      </div>
                      <div className="bg-[#363636] flex gap-3 w-[100%] lg:w-[50%] rounded-[10px]">
                        <img src={productDeshImg3} alt="deshimg" />
                        <div className="flex gap-[10px] justify-center flex-col w-full">
                          <div className="flex justify-between items-center font-poppins font-bold text-xl text-[#E5B638] w-full pr-[10px]">
                            Chole Batura
                            <span>
                              <img src={hertIcon4} alt="hertIcon" />
                            </span>
                          </div>
                          <div className="font-poppins font-normal text-lg text-[#fff]">
                            $3.00
                          </div>
                          <button className="border-[3px] border-[#E5B638] px-8 text-[#fff] rounded-md hover:bg-[#E5B638] py-2 w-[60%]" onClick={() => openWoAddon(true)}>
                            ADD
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isWoAddonOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeWoAddon}
        >
          <WoAddon onClose={closeWoAddon} />
        </PortalPopup>
      )}
    </>
  );
};

export default ProductPage;
