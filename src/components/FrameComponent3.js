import "./FrameComponent3.css";
import menu  from '../assets/menu.svg'
import basket1  from '../assets/basket-1.svg'
import { Link } from "react-router-dom";
const FrameComponent3 = () => {
  return (
    <div className="buttons-states-dark-parent6">
        <Link to="https://order.toasttab.com/online/thehungerspoint">
      <button className="buttons-states-dark67">
        <img className="menu-icon7" alt="" src={menu} />
                    {/* <div class="menu-text relative">Menu</div> */}
        <div className="button81">VIEW MENU</div>
      </button>
                    </Link>
        <Link to="https://order.toasttab.com/online/thehungerspoint">
      <button className="buttons-states-dark68">
        <img className="menu-icon7" alt="" src={basket1} />
                    {/* <div class="menu-text relative">Menu</div> */}
        <div className="button81">ORDER ONLINE</div>
      </button>
                    </Link>
    </div>
  );
};

export default FrameComponent3;
