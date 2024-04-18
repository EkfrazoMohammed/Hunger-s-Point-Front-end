import React, { useState, useCallback, useEffect } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import "./Header.css";
import { useDispatch, useSelector } from "react-redux";
import logo from "../assets/logo@2x.png"
import basket from "../assets/basket.svg"
import group1 from "../assets/group-1.svg"
import ellipse2 from "../assets/ellipse-2@2x.png"
import group2 from "../assets/group-2.svg"
import instagram from "../assets/instagram.svg"
import facebook from "../assets/facebook.svg"
import close from "../assets/close.svg"
import user1 from "../assets/user.svg"
import location1 from "../assets/location.svg"
import { setBasketcount, setUserdata } from "../redux/actions/dataActions";
import { API } from "../api/api";
import { useAuth0 } from "@auth0/auth0-react";
import SubMenu from "./SubMenu";


const Header = () => {
  const { user, isAuthenticated, isLoading,loginWithRedirect } = useAuth0();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const basket_count = useSelector(state => state.data.basket_count);
  

  const [selectedRoute, setSelectedRoute] = useState(""); 
  const [target, settarget] = useState(""); 
  const location = useLocation();

  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
      setIsOpen(false);
  };


  useEffect(() => {
    // Check if the current location pathname contains "/location"
    if (location.pathname.includes("/location")){
      setSelectedRoute('/location')
    }
    if (location.pathname.includes("/productpage")){
      setSelectedRoute('/productpage')
    }
    
  }, [location]);


  const toggleSubMenu = () => {
    setIsOpen(!isOpen);
};


  console.log(user?.picture,'user?.picture===>')
  const onLogoImageClick = useCallback(() => {
    navigate("/homepage");
  }, [navigate]);

  const onButtonsStatesContainerClick = useCallback(() => {
    navigate("/location");
  }, [navigate]);

  const onbasketclick = useCallback(() => {
    navigate("/basket");
  }, [navigate]);

  const [isVisible, setIsVisible] = useState(false);

  const handleRout = (rout) => {
    navigate(`${rout}`);
    setSelectedRoute(rout)
  };

  useEffect(() => {
    SettargetUser()
    GetBasketData()
    CheckUserexistsData()
    GetUserData()
  }, [isAuthenticated]);

  useEffect(() => {
    CheckUserOffer(['UnRegistered User','ALL'])
  }, [!isAuthenticated]);

  const SettargetUser = async () => {
    
  }
  const CheckUserOffer = async (target) => {
    const data = {
      'target':target
    }
    API.getInstance().menu.post(`/api/check-offers`,data)
      .then((res) => {
        console.log(res.data.result.data,'GetUserData======>')
        
      })
      .catch((error) => {
      })
      .finally(() => {
      });
      
  }

  const GetUserData = async () => {
    if (user?.email){
      API.getInstance().menu.get(`/api/custom-user?email_id=${user?.email}`)
      .then((res) => {
        console.log(res.data.result.data,'GetUserData======>')
        dispatch(setUserdata(res.data.result.data[0]));
        CheckUserexistsData()
      })
      .catch((error) => {
      })
      .finally(() => {
      });
    }
      
  }
  const CheckUserexistsData = async () => {
    console.log(user?.email, 'user?.email==>')
    if (user?.email) {
      if (isAuthenticated) {
        const data = {
          'email': user?.email,
          'user_name': user?.name
        }
        API.getInstance().menu.post('api/register', data)
          .then((res) => {
            console.log(res, 'res=====>1221312')
            console.log(res.data.result, 'res=====>code')
            if (res.data.result.code == 2){
              CheckUserOffer(['First User','ALL','Registered User'])
            }
            else{
              CheckUserOffer(['Registered User','ALL'])
            }
            localStorage.setItem('credentials', JSON.stringify(res.data.result) );
            GetBasketData()
          })
          .catch((error) => {
            console.log(error, 'error=====>1221312')
          })
          .finally(() => {
          });
      }
    }
  }

  const GetBasketData = async () => {
    // if (!user){
    //   CheckUserOffer(['UnRegistered User','ALL'])
    // }
    

    const credentials = JSON.parse(localStorage.getItem('credentials'));
    if (credentials){
      API.getInstance().menu.get(`/api/cart-items?customer_user_id=${credentials?.user_id}`)
      .then((res) => {
        console.log(res.data.result.data, 'GetBasketData===res.data.result.data===>')
        console.log(res.data.result.basket_count, 'GetBasketData===res.data.result.data===>')
        dispatch(setBasketcount(res.data.result.basket_count));
        // CheckUserexistsData()
      })
      .catch((error) => {
      })
      .finally(() => {
      });
    }
    
  }

  return (
    <>
      <div className="header6">
        <img className="header-child" alt="" src={group1} />
        <div className="wrapper-ellipse-2">
          <img
            className="wrapper-ellipse-2-child"
            loading="eager"
            alt=""
            src={ellipse2}
          />
        </div>
        <div className="basket-button">
          <div className="lorem-ipsum-dolor2">
            Lorem ipsum dolor sit amet consectetur. At dictumst mattis eget
            convallis id adipiscing libero libero.
          </div>
        </div>
        <div className="call-to-action-button">
          <div className="alberta-container1">
            <img
              className="alberta-container-child"
              alt=""
              src={group2}
            />
            <img
              className="instagram-icon"
              loading="eager"
              alt=""
              src={instagram}
            />
            <img
              className="facebook-icon2"
              loading="eager"
              alt=""
              src={facebook}
            />
          </div>
        </div>
        <img className="close-icon2" loading="eager" alt="" src={close} />
      </div>
      <header>
        <nav className="navbar--wrap bg-white border-gray-200 px-4 lg:px-6 dark:bg-gray-800 bg-gradient-to-r from-[#252525] to-[#380000] w-full min-w-fit">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <img
              className="mr-3 h-20 w-20"
              loading="eager"
              alt=""
              src={logo}
              onClick={() => handleRout("/homepage")}
            />
            <div className="flex items-center lg:order-2">
              <div className="header-right-action--w font-inter">
                <div
                  className="buttons-states-dark7 h-[49px] rounded-[56px] border-[3px] border-[#e5b638] box-border flex flex-row items-center justify-end py-0 pl-[10px] pr-4 relative gap-x-[5px] hover:bg-[#b38205] hover:border-[#b38205]"
                  onClick={() => onbasketclick()}
                >
                  <img
                    className="basket-icon6"
                    loading="eager"
                    alt=""
                    src={basket}
                  />
                  <div className="relative leading-[130%] text-[#fff]">{basket_count}</div>
                </div>


                {user && (<div
                  className="h-[49px] gap-x-[5px] justify-end cursor-pointer font-poppins flex items-center"
                  onClick={() => handleRout("/profile")}
                >
                  <div className="relative uppercase whitespace-nowrap leading-[130%] text-[#fff]">
                  {user && (
                    <div>
                      {/* <img src={user.picture} alt={user.name} /> */}
                      <h2>{user.name}</h2>
                      {/* <p>{user.email}</p> */}
                    </div>
                  )}
                </div>
                  {/* <button className="cursor-pointer px-[13px] bg-[#e5b638] self-stretch rounded-[56px] flex flex-row items-center justify-end hover:bg-[#b38205]"> */}
                    <img
                      className="user-icon1"
                      loading="eager"
                      alt=""
                      src={user?.picture}
                      style={{height: '50px',width: '50px',borderRadius:'50%',border:'3px solid #e5b638'}}
                    />
                  {/* </button> */}


                </div>)}
                


                

                {!user && (<div onClick={() => loginWithRedirect()} className="bg-[#c21f24] h-7 rounded-md flex flex-row items-center justify-center px-3 py-5 box-border cursor-pointer hover:bg-[#e8454a] hover:border-[#e8454a] hover:box-border mt-1">
                  <div className="relative leading-[13px] uppercase text-[#fff] text-[12px] font-normal">
                   Login
                  </div>
                </div>)}
                <button onClick={toggleSubMenu} className="hamburger-sub">
                  <div className="burger-line"></div>
                  <div className="burger-line"></div>
                  <div className="burger-line"></div>
                </button>
                <button
                  data-collapse-toggle="mobile-menu-2"
                  type="button"
                  className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
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
              </div>
            </div>
            <div
              className={`${isVisible ? "" : "hidden"
                } "justify-between items-center w-full lg:flex lg:w-auto lg:order-1"`}
              id="mobile-menu-2"
            >
              <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                <li>
                  <div
                    className="buttons-states w-[400px] rounded-[5px] bg-[#363636] border border-[#424242] box-border flex flex-col items-start justify-center p-[10px] max-w-full cursor-pointer text-left text-[10px] "
                    onClick={() => handleRout("/location")}
                  >
                    <div className="self-stretch flex flex-row items-center justify-start gap-x-1 max-w-full">
                      <img
                        className="location-icon7"
                        loading="eager"
                        alt=""
                        src={location1}
                      />
                      <div className="flex-1 relative leading-[130%] uppercase inline-block max-w-full whitespace-nowrap text-[#fff] text-[10px]">
                        SELECT Location
                      </div>
                    </div>
                    <div className="text-[#fff] text-base gap-x-5 justify-start self-stretch flex">
                      <div className="divider-line flex-1 flex flex-row items-center justify-start">
                        <div className="flex-1 relative top-4 leading-[20px] whitespace-nowrap text-base font-normal uppercase font-poppins">
                          Set your location here
                        </div>
                      </div>

                      <div className="bg-[#c21f24] h-7 rounded-md flex flex-row items-center justify-center px-3 py-2 box-border cursor-pointer hover:bg-[#e8454a] hover:border-[#e8454a] hover:box-border">
                        <div className="relative leading-[13px] uppercase text-[#fff] text-[10px] font-normal">
                          LOCATE STORE
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                <li className="flex items-center">
                  <div
                    className={`h-12 rounded-md flex flex-row items-center justify-start px-3 py-0 box-border cursor-pointer hover:bg-[#424242] ${selectedRoute == '/location' ? 'bg-red-500' : ''} hover:border-[#424242] hover:box-border`}
                    onClick={() => handleRout("/location")}
                  >
                    <div className="relative  leading-[130%] uppercase text-[#fff]">
                      LOCATIONS
                    </div>
                  </div>
                </li>
                <li className="flex items-center">
                  <div
                    className={`h-12 rounded-md flex flex-row items-center justify-start px-3 py-0 box-border cursor-pointer hover:bg-[#424242] ${selectedRoute === "/productpage" ? 'bg-red-500' : ''} hover:border-[#424242] hover:box-border`}
                    onClick={() => handleRout("/productpage?id=1")}
                  >
                    <div className="relative leading-[130%] uppercase text-[#fff]">
                      MENU
                    </div>
                  </div>
                </li>
                <li className="flex items-center">
                  <div
                    className="h-12 rounded-md flex flex-row items-center justify-start px-3 py-0 box-border cursor-pointer hover:bg-[#424242] hover:border-[#424242] hover:box-border"
                    onClick={() => handleRout("/productpage?id=1")}
                  >
                    <div className="relative leading-[130%] uppercase text-[#fff]">
                      ORDER NOW
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <SubMenu isOpen={isOpen} handleClose={handleClose}  />
    </>
  );
};

export default Header;
