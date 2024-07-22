import React, { useState, useCallback, useEffect, useRef } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import "./Header.css";
import { useDispatch, useSelector } from "react-redux";
import logo from "../assets/hunger_logo_fotter.png"
import basket from "../assets/basket.svg"
import { setBasketcount, setCredentials, setUserdata } from "../redux/actions/dataActions";
import { API } from "../api/api";
import { useAuth0 } from "@auth0/auth0-react";
import SubMenu from "./SubMenu";
import { BiChevronDown } from "react-icons/bi";
import { clamp } from "date-fns";
import { toast } from "react-toastify";


const Header = () => {
  const { user, isAuthenticated, isLoading, loginWithRedirect } = useAuth0();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const toggleSubMenuRef = useRef(null);
  const basket_count = useSelector(state => state.data.basket_count);
  const credentials_redux = useSelector((state) => state.data.credentials);

  const [selectedRoute, setSelectedRoute] = useState("");
  const [target, settarget] = useState("");
  const location = useLocation();

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    handleRout1(location.pathname)

  }, [location.pathname])

  const handleClose = () => {
    setIsOpen(false);
    console.log("current path====>:", location.pathname)

    // console.log(credentials_redux,'credentials_redux===>33333')
  };


  const toggleSubMenu = () => {
    setIsOpen(!isOpen);
  };


  useEffect(() => {
    // Check if the current location pathname contains "/location"
    if (location.pathname.includes("/location")) {
      setSelectedRoute('/location')
    }
    if (location.pathname.includes("/productpage")) {
      setSelectedRoute('/productpage')
    }

  }, [location]);


  console.log(user?.picture, 'user?.picture===>')
  console.log(user, 'user?.picture===>11111')

  const onLogoImageClick = useCallback(() => {
    navigate("/homepage");
  }, [navigate]);

  const onButtonsStatesContainerClick = useCallback(() => {
    navigate("/location");
  }, [navigate]);

  const onbasketclick = useCallback(() => {
    // handleRout("/basket")
    // navigate("/basket");
    toast.success("The Hunger's Point coming soon at Punjab center!");
  }, [navigate]);

  const [isVisible, setIsVisible] = useState(false);

  const handleRout1 = (rout) => {
    console.log(rout, 'rout====>')
    // navigate(`${rout}`);
    setSelectedRoute(rout)
  };
  const handleRout = (rout) => {
    console.log(rout, 'rout====>')
    navigate(`${rout}`);
    setSelectedRoute(rout)
  };
  const credentials = JSON.parse(localStorage.getItem('credentials'));
  const prefixToCheck = 'email';
  let emailToFetch = !credentials?.email_id.startsWith(prefixToCheck) && ((user && user.email) || (credentials && credentials.email_id) || (credentials && credentials.spr_user_id));

  useEffect(() => {
    SettargetUser()
    GetBasketData()
    CheckUserexistsData()
    GetUserData()
  }, [emailToFetch]);

  // console.log(credentials_redux,'credentials_redux===>1213')
  // useEffect(() => {
  //   SettargetUser()
  //   GetBasketData()
  //   CheckUserexistsData()
  //   const credentials = JSON.parse(localStorage.getItem('credentials'));
  //   setEmailToFetch(
  //     (user && user.email) ||
  //       (credentials && credentials.email_id) ||
  //       (credentials && credentials.spr_user_id)
  //   );
  //   console.log(credentials_redux,'credentials_redux===>1213')
  //   // GetUserData()
  // }, []);

  useEffect(() => {
    CheckUserOffer(['UnRegistered User', 'ALL'])
  }, [!emailToFetch]);

  const SettargetUser = async () => {

  }
  const CheckUserOffer = async (target) => {
    const data = {
      'target': target
    }
    API.getInstance().menu.post(`/api/check-offers`, data)
      .then((res) => {
        console.log(res.data.result.data, 'GetUserData======>')

      })
      .catch((error) => {
      })
      .finally(() => {
      });

  }

  const GetUserData = async () => {
    const credentials = JSON.parse(localStorage.getItem("credentials"));
    let emailToFetch = ""
    if ((user && user.email) || (credentials && credentials?.user_id)) {
      // emailToFetch = user?.email || credentials?.email_id;

      console.log(credentials, 'credentials===>11111111')
      if (credentials) {
        API.getInstance().menu.get(`/api/custom-user?user_id=${credentials?.user_id}`)
          .then((res) => {
            console.log(res.data.result.data, 'GetUserData======>')
            dispatch(setUserdata(res.data.result.data[0]));
            // CheckUserexistsData()
          })
          .catch((error) => {
          })
          .finally(() => {
          });
      }

    }

  }
  useEffect(() => {
    CheckUserexistsData()

  }, [isAuthenticated])
  const CheckUserexistsData = async () => {
    // const credentials = JSON.parse(localStorage.getItem("credentials"));

    // localStorage.removeItem("credentials");
    console.log(isAuthenticated, 'isAuthenticated===>123')
    const credentials = JSON.parse(localStorage.getItem("credentials"));
    console.log(user?.email, 'user?.email==>')

    let emailToFetch = ""
    console.log(emailToFetch, 'emailToFetch===>qq')
    if ((user && user.email) || (credentials && credentials?.email_id)) {
      if (isAuthenticated) {
        emailToFetch = user?.email
      }
      else {

        emailToFetch = user?.email || credentials?.email_id;
      }
      console.log(emailToFetch, 'emailToFetch===>')
      if (emailToFetch) {
        const data = {
          'email': emailToFetch,
          'user_name': emailToFetch,
          // 'spr_user_id':credentials?.spr_user_id
        }
        console.log(data, 'data====>123')
        API.getInstance().menu.post('api/register', data)
          .then((res) => {
            console.log(res, 'res=====>1221312')
            console.log(res.data.result, 'res=====>code')
            if (res.data.result.code == 2) {
              CheckUserOffer(['First User', 'ALL', 'Registered User'])
            }
            else {
              CheckUserOffer(['Registered User', 'ALL'])
            }
            console.log(res.data.result, 'res.data.result')
            localStorage.setItem('credentials', JSON.stringify(res.data.result));
            dispatch(setCredentials(res.data.result));
            GetBasketData()
            GetUserData()
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
    // console.log(credentials,'credentials===>123')
    if (credentials) {
      console.log(credentials, 'credentials====>1231121212')
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
  const fontSize = `${Math.min(Math.max(1, 2.5 / window.innerWidth * 100), 1.5)}rem`;

  return (
    <>
      {/* <div className="header6">
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
      </div> */}
      <header>
        <nav style={{ backgroundColor: `var(--website-bg)`, borderBottom: '.5px solid #E4B637' }} className="navbar--wrap bg-white border-gray-200 px-4 lg:px-6 dark:bg-gray-800 bg-gradient-to-r  w-full min-w-fit">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl" style={{ maxWidth: '1320px' }}>
            <img
              className="h-[37px] sm:h-[67px]"
              loading="eager"
              alt=""
              src={logo}
              onClick={() => handleRout("/")}
            />
            <div className="flex items-center lg:order-2">
              <div className="header-right-action--w font-inter">
                <div
                  className={`buttons-states-dark7 rounded-[56px]  border-[#e5b638] box-border flex flex-row items-center justify-end py-0 pl-[10px] pr-4 relative gap-x-[5px] hover:bg-[#b38205] hover:border-[#b38205] basket-view cursor-pointer ${selectedRoute === "/basket" ? 'bg-[#b38205]' : ''}`}
                  onClick={() => onbasketclick()}
                >
                  <img
                    className="basket-icon6"
                    loading="eager"
                    alt=""
                    src={basket}
                  />
                  <div className="relative leading-[130%] text-[#fff] cursor-pointer" style={{ fontSize: `var( --primary-font-size-mini)` }}>{basket_count}</div>
                </div>


                {emailToFetch && (<div
                  className="h-[49px] gap-x-[5px] justify-end cursor-pointer font-poppins flex items-center"
                  onClick={() => handleRout("/profile")}
                >
                  <div className="relative uppercase whitespace-nowrap leading-[130%] text-[#fff]">
                    {emailToFetch && (
                      <div>
                        {/* <img src={user.picture} alt={user.name} /> */}
                        <h2 className="responsive-font-size">{emailToFetch}</h2>
                        {/* <p>{user.email}</p> */}
                      </div>
                    )}
                  </div>
                  {/* <button className="cursor-pointer px-[13px] bg-[#e5b638] self-stretch rounded-[56px] flex flex-row items-center justify-end hover:bg-[#b38205]"> */}
                  <img
                    className="user-icon1 responsive-image"
                    loading="eager"
                    alt=""
                    src={user?.picture || "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png"}
                    style={{ borderRadius: '50%', border: '1px solid #e5b638' }}
                  />
                  {/* </button> */}


                </div>)}



                {/* loginWithRedirect() */}

                {!emailToFetch && (<div onClick={() => {toast.success("The Hunger's Point coming soon at Punjab center!");}} className="bg-[#c21f24] h-7 rounded-md flex flex-row items-center justify-center px-3 lg:py-5 box-border cursor-pointer hover:bg-[#e8454a] hover:border-[#e8454a] hover:box-border mt-1">
                  <div className="relative leading-[13px] uppercase text-[#fff] text-[12px] font-normal">
                    Login
                  </div>
                </div>)}
                <button onClick={toggleSubMenu} className={`hamburger-sub ${isOpen ? "sub-open" : ""}`} ref={toggleSubMenuRef}>
                  <div className="burger-line bl-close"></div>
                  <div className="burger-line"></div>
                  <div className="bl-open-w">
                    <div className="burger-line bl-open-left"></div>
                    <div className="burger-line bl-open-mid"></div>
                    <div className="burger-line bl-open-right"></div>
                  </div>
                </button>
                {/* <button
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
                </button> */}
              </div>
            </div>
            <div
              className={`${isVisible ? "" : "hidden"
                } "justify-between items-center w-full lg:flex lg:w-auto lg:order-1"`}
            // id="mobile-menu-2"
            >
              <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">

                <li className="flex items-center">
                  <div class={`menu-item cursor-pointer ${selectedRoute === "/" ? 'selected-route' : ''}`} onClick={() => handleRout("/")}>
                    <div class="menu-text relative">Home</div>
                  </div>

                </li>
                <li className="flex items-center">
                  <div class={`menu-item cursor-pointer ${selectedRoute === "/productpage" ? 'selected-route' : ''}`} onClick={() => handleRout("/productpage?id=1")}>
                    <div class="menu-text relative">Menu</div>
                  </div>
                </li>
                <li className="flex items-center">
                  <div class={`menu-item cursor-pointer ${selectedRoute === "/events" ? 'selected-route' : ''}`} onClick={() => handleRout("/events")}>
                    <div class="menu-text relative">Event & Catering</div>
                  </div>
                </li>
                <li className="flex items-center">
                  <div class={`menu-item cursor-pointer ${selectedRoute === "/franchise" ? 'selected-route' : ''}`} onClick={() => handleRout("/franchise")}>
                    <div class="menu-text relative">Franchise</div>
                  </div>


                </li>


                {/* <li className="flex items-center">
                  <div
                    className={`h-12 rounded-md flex flex-row items-center justify-start px-3 py-0 box-border cursor-pointer hover:bg-[#424242] ${selectedRoute == '/ourstory' ? 'bg-#E4B637' : ''} hover:border-[#424242] hover:box-border`}
                    
                  >
                    <div className="relative  leading-[130%] uppercase text-[#fff]">
                      OUR STORY
                    </div>
                  </div>
                </li> */}
                {/* <li className="flex items-center">
                  <div
                    className={`h-12 rounded-md flex flex-row items-center justify-start px-3 py-0 box-border cursor-pointer hover:bg-[#424242] ${selectedRoute == '/events' ? 'bg-#E4B637' : ''} hover:border-[#424242] hover:box-border`}
                    onClick={() => handleRout("/events")}
                  >
                    <div className="relative  leading-[130%] uppercase text-[#fff]">
                      EVENT
                    </div>
                  </div>
                </li> */}

                <ul className="links">
                  <div className={`about-us h-12 rounded-md flex flex-row items-center justify-start cursor-pointer ${selectedRoute === '/ourstory' || selectedRoute === '/careers' || selectedRoute === '/contact-us' ? 'selected-route' : ''}`}>
                    <div className="dropdown5">
                      <a>
                        <p className="about-us-text">About us</p>
                        <span style={{ alignItems: 'center' }}> <BiChevronDown fontSize={"20px"} className="about-us-text" />
                        </span></a>
                      <div className="menu2">
                        <a className={`menu_droup_item ${selectedRoute === '/ourstory' ? 'menu_active' : ''}`} onClick={() => handleRout("/ourstory")}>Our Story</a>
                        <a className={`menu_droup_item ${selectedRoute === '/careers' ? 'menu_active' : ''}`} onClick={() => handleRout("/careers")}>Careers</a>
                        <a className={`menu_droup_item ${selectedRoute === '/contact-us' ? 'menu_active' : ''}`} onClick={() => handleRout("/contact-us")}> ContactUs</a>
                      </div>
                    </div>
                  </div>
                </ul>

                {/* <li className="flex items-center">
                  <div
                    className={`h-12 rounded-md flex flex-row items-center justify-start px-3 py-0 box-border cursor-pointer hover:bg-[#424242] ${selectedRoute == '/location' ? 'bg-#E4B637' : ''} hover:border-[#424242] hover:box-border`}
                    onClick={() => handleRout("/location")}
                  >
                    <div className="relative  leading-[130%] uppercase text-[#fff]">
                      FRANCHISE
                    </div>
                  </div>
                </li> */}

                {/* <li className="flex items-center">
                  <div
                    className="h-12 rounded-md flex flex-row items-center justify-start px-3 py-0 box-border cursor-pointer hover:bg-[#424242] hover:border-[#424242] hover:box-border"
                    onClick={() => handleRout("/productpage?id=1")}
                  >
                    <div className="relative leading-[130%] uppercase text-[#fff]">
                      ORDER NOW
                    </div>
                  </div>
                </li> */}
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <SubMenu isOpen={isOpen} handleClose={handleClose} toggleSubMenuRef={toggleSubMenuRef} />
    </>
  );
};

export default Header;
