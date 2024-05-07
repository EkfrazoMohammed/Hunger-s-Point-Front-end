import "./FrameComponent3.css";
import menu  from '../assets/menu.svg'
import basket1  from '../assets/basket-1.svg'

const FrameComponent3 = () => {
  return (
    <div className="buttons-states-dark-parent6">
      <button className="buttons-states-dark67">
        <img className="menu-icon7" alt="" src={menu} />
        <div className="button81">VIEW MENU</div>
      </button>
      <button className="buttons-states-dark68">
        <img className="menu-icon7" alt="" src={basket1} />
        <div className="button81">ORDER ONLINE</div>
      </button>
    </div>
  );
};

export default FrameComponent3;
