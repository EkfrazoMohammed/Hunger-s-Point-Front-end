import "./MyOrders1.css";
import iconamoonlocationlight from  "../assets/iconamoonlocationlight.svg";
const MyOrders1 = ({Orderdata}) => {
  console.log(Orderdata,'Orderdata======>')
  return (
    <div className="my-orders3" style={{backgroundColor:`var(--card-bg)`}}>
      <div className="mango-shake-frame">
        <div className="subtotal-frame5">
          <div className="location2" style={{fontSize:`var(--primary-font-size-mini)`,fontFamily:`var(--primary-font-family)`}}>Location</div>
          <div className="delivery-person-frame"  style={{fontSize:`var(--primary-font-size-mini)`,fontFamily:`var(--primary-font-family)`}}>
            <img
              className="iconamoonlocation-light1"
              loading="eager"
              alt=""
              src={iconamoonlocationlight}
            />
            <b className="alberta8" >{Orderdata.location_address.published_name}</b>
          </div>
          <div className="orders3"  style={{fontSize:`var(--primary-font-size-mini)`,fontFamily:`var(--primary-font-family)`}}>Orders</div>
          {Orderdata.menu_items.map((order, index) => (
            <div key={index} className="tax-frame7"  style={{fontSize:`var(--primary-font-size-mini)`,fontFamily:`var(--primary-font-family)`}}>{order.quantity} x {order.menu_items.name}</div>
          ))}
        </div>
      </div>
      <div className="divider25" />
      <div className="delivery-details-frame">
        <div className="subtotal-frame6">
          <div className="tax-frame10">
            <div className="subtotal2"  style={{fontSize:`var(--primary-font-size-mini)`,fontFamily:`var(--primary-font-family-bold)`}}>Subtotal</div>
            <div className="payment-frame"  style={{fontSize:`var(--primary-font-size-mini)`,fontFamily:`var(--primary-font-family-bold)`}}>${Orderdata.order_summary.subtotal}</div>
          </div>
          {/* <div className="delivery-frame2">
            <div className="shipping-label">
              <div className="shipping5"  style={{fontSize:`var(--primary-font-size-mini)`,fontFamily:`var(--primary-font-family)`}}>Shipping</div>
              <div className="delivery6"  style={{fontSize:`var(--primary-font-size-mini)`,fontFamily:`var(--primary-font-family)`}}>Delivery</div>
            </div>
            <div className="divider-line2"  style={{fontSize:`var(--primary-font-size-mini)`,fontFamily:`var(--primary-font-family)`}}>${Orderdata.order_summary.shipping}</div>
          </div> */}
          <div className="tax-frame11"  style={{fontSize:`var(--primary-font-size-mini)`,fontFamily:`var(--primary-font-family)`}}>
            <div className="tax2"  style={{fontSize:`var(--primary-font-size-mini)`,fontFamily:`var(--primary-font-family)`}}>Tax</div>
            <div className="div29">${Orderdata.order_summary.taxes}</div>
          </div>
          <div className="tax-frame12"  style={{fontSize:`var(--primary-font-size-mini)`,fontFamily:`var(--primary-font-family)`}}>
            <div className="total2"  style={{fontSize:`var(--primary-font-size-mini)`,fontFamily:`var(--primary-font-family)`}}>Grand Total</div>
            <div className="div30">${Orderdata.order_summary.total}</div>
          </div>
          <div className="tax-frame12">
            <div className="total2"  style={{fontSize:`var(--primary-font-size-mini)`,fontFamily:`var(--primary-font-family)`}}>Coupon Discount</div>
            <div className="div30"  style={{fontSize:`var(--primary-font-size-mini)`,fontFamily:`var(--primary-font-family)`}}>${Orderdata.order_summary.discount_amount}</div>
          </div>
          <div className="tax-frame12"  style={{fontSize:`var(--primary-font-size-mini)`,fontFamily:`var(--primary-font-family)`}}>
            <div style={{color:'#e5b638'}} className="total2" >To pay</div>
            <div style={{color:'#e5b638', fontSize:`var(--primary-font-size-mini)`,fontFamily:`var(--primary-font-family)`}} className="div30">${Orderdata.order_summary.final_total}</div>
          </div>
          <div className="tax-frame13"style={{fontSize:`var(--primary-font-size-mini)`,fontFamily:`var(--primary-font-family)`}} >
            <div className="amount" style={{fontSize:`var(--primary-font-size-mini)`,fontFamily:`var(--primary-font-family)`}}>Amount</div>
            <b style={{color:'green'}} className="paid">-</b>
          </div>
          <div className="tax-frame14">
            <div className="payment-method" style={{fontSize:`var(--primary-font-size-mini)`,fontFamily:`var(--primary-font-family)`}}>Payment Method</div>
            <div className="upi" style={{fontSize:`var(--primary-font-size-mini)`,fontFamily:`var(--primary-font-family)`}}>-</div>
          </div>
          <div className="tax-frame15" style={{fontSize:`var(--primary-font-size-mini)`,fontFamily:`var(--primary-font-family)`}}>
            <div className="delivery-person">Delivery person</div>
            <div className="sugan">-</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyOrders1;
