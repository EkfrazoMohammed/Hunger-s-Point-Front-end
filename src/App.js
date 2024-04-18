import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Homepage from "./pages/Homepage";

import ProductPage from "./pages/ProductPage";
import CheckoutShippingAddress from "./pages/CheckoutShippingAddress";
import CheckoutShippingAddress1 from "./pages/CheckoutShippingAddress1";
import CheckoutShippingMethod from "./pages/CheckoutShippingMethod";
import CheckoutContact from "./pages/CheckoutContact";
import CheckoutPayment from "./pages/CheckoutPayment";
import Orders from "./pages/Orders";
import Orders1 from "./pages/Orders1";
import MyAddress from "./pages/MyAddress";
import MyAddress1 from "./pages/MyAddress1";
import Profile from "./pages/Profile";
import Basket from "./pages/Basket";
import Location1 from "./pages/Location1";
import Signin from "./pages/Signin";
import Homepage1 from "./pages/Homepage1";
import DeliveryPartner from "./components/DeliveryDetails";
import CheckoutContact1 from "./pages/CheckoutContact1";
import Header from "./components/Header";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Events } from "./pages/sub-menu-pages/events_page/Events";
import { Careers } from "./pages/sub-menu-pages/careers_page/Careers";
import {Helmet} from "react-helmet";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/signin":
        title = "";
        metaDescription = "";
        break;
      case "/product-page":
        title = "";
        metaDescription = "";
        break;
      case "/checkoutshippingaddress1":
        title = "";
        metaDescription = "";
        break;
      case "/checkoutshippingaddress":
        title = "";
        metaDescription = "";
        break;
      case "/checkoutshippingmethod":
        title = "";
        metaDescription = "";
        break;
      case "/checkoutcontact":
        title = "";
        metaDescription = "";
        break;
      case "/checkoutpayment":
        title = "";
        metaDescription = "";
        break;
      case "/orders":
        title = "";
        metaDescription = "";
        break;
      case "/orders1":
        title = "";
        metaDescription = "";
        break;
      case "/my-address1":
        title = "";
        metaDescription = "";
        break;
      case "/my-address":
        title = "";
        metaDescription = "";
        break;
      case "/homepage1":
        title = "";
        metaDescription = "";
        break;
      case "/basket":
        title = "";
        metaDescription = "";
        break;
      case "/location":
        title = "";
        metaDescription = "";
        break;
      case "/homepage":
        title = "";
        metaDescription = "";
        break;
      case "/deliveryPartner":
        title = "";
        metaDescription = "";
        break;
      case "/checkoutcontact1":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  console.log("path name  === ", pathname);

  return (
    <>
    <ToastContainer />
      {pathname !== "/signin" && <Header />}
      <Routes>
        
        <Route path="/" element={<Homepage1 />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/productpage" element={<ProductPage />} />
        <Route
          path="/checkoutshippingaddress1"
          element={<CheckoutShippingAddress />}
        />
        <Route
          path="/checkoutshippingaddress"
          element={<CheckoutShippingAddress1 />}
        />
        <Route
          path="/checkoutshippingmethod"
          element={<CheckoutShippingMethod />}
        />
        <Route path="/checkoutcontact" element={<CheckoutContact />} />
        <Route path="/checkoutpayment" element={<CheckoutPayment />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/orders1" element={<Orders1 />} />
        <Route path="/myaddress1" element={<MyAddress />} />
        <Route path="/myaddress" element={<MyAddress1 />} />
        <Route path="/homepage1" element={<Homepage />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/location" element={<Location1 />} />
        <Route path="/homepage" element={<Homepage1 />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/deliveryPartner" element={<DeliveryPartner />} />
        <Route path="/checkoutcontact1" element={<CheckoutContact1 />} />
        {/* submenu */}
        <Route path="/events" element={<Events />} />
        <Route path="/careers" element={<Careers />} />
      </Routes>
    </>
  );
}
export default App;
