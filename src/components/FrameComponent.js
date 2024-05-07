import { useMemo } from "react";
import "./FrameComponent.css";
import { useNavigate } from "react-router-dom";
import right from '../assets/right.svg'
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch } from "react-redux";
import { setReset } from "../redux/actions/dataActions";


const FrameComponent = ({ orders, myOrders, propBorderRadius, route }) => {
  const { user, isAuthenticated, isLoading, logout } = useAuth0();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const ordersIconStyle = useMemo(() => {
    return {
      borderRadius: propBorderRadius,
    };
  }, [propBorderRadius]);

  const handleRout = (rout) => {
    if (rout == '/signin') {
      logout({ logoutParams: { returnTo: window.location.origin } })
      dispatch(setReset());
      localStorage.clear();
    } else {
      navigate(`${rout}`);
    }
  };

  return (
    <div className="orders-parent cursor-pointer" onClick={() => handleRout(route)}>
      <img
        className="orders-icon"
        
        loading="eager"
        alt=""
        src={orders}
        style={ordersIconStyle}
      />
      <div className="my-orders" style={{

        fontSize: `var(--primary-font-size)`,
        

      }} >{myOrders}</div>
      <img className="right-icon1" loading="eager" alt="" src={right} />
    </div>
  );
};

export default FrameComponent;
