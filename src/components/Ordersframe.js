import FrameComponent from "./FrameComponent";
import "./Ordersframe.css";
import rectangle12 from  "../assets/rectangle-12@2x.png";
import orders from  "../assets/orders.svg";
import contact from  "../assets//contact.svg";
import logout from  "../assets/logout.svg";
import { useSelector } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";


const Ordersframe = () => {
  const userdata = useSelector(state => state.data.user_data);
  const { user, isAuthenticated, isLoading } = useAuth0();
  

  return (
    <section className="ordersframe">
      <div className="contactframe">
        <h1 className="profile1">Profile</h1>
        <div className="your-profile-details">Your profile details</div>
      </div>
      <div className="dividerline">
        <div className="divider12" />
      </div>
      <div className="ordersummary">
        <div className="rightframe">
          <div className="summary2">
            <img
              className="john-smithtext-icon"
              loading="eager"
              alt=""
              src={user?.picture}
            />
            <div className="summarydetails">
              <h3 className="john-smith1">{userdata?.user_name}</h3>
              {userdata?.phone_number && (<div className="emptyspace">{userdata?.phone_number}</div>)}
            </div>
          </div>
          <div className="summary3">
            <FrameComponent
              orders={orders}
              myOrders="My Orders"
              route={"/orders"}
            />
            <FrameComponent
              orders={contact}
              myOrders="My Addresses"
              propBorderRadius="5px"
              route={"/myaddress1"}
            />
            <FrameComponent
              orders={logout}
              myOrders="Logout"
              propBorderRadius="unset"
              route={"/signin"}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ordersframe;
