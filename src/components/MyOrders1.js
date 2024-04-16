import "./MyOrders1.css";
import iconamoonlocationlight from  "../assets/iconamoonlocationlight.svg";
const MyOrders1 = ({Orderdata}) => {
  console.log(Orderdata,'Orderdata======>')
  return (
    <div className="my-orders3">
      <div className="mango-shake-frame">
        <div className="subtotal-frame5">
          <div className="location2">Location</div>
          <div className="delivery-person-frame">
            <img
              className="iconamoonlocation-light1"
              loading="eager"
              alt=""
              src={iconamoonlocationlight}
            />
            <b className="alberta8">{Orderdata.location_address.published_name}</b>
          </div>
          <div className="orders3">Orders</div>
          {Orderdata.menu_items.map((order, index) => (
            <div key={index} className="tax-frame7">{order.quantity} x {order.menu_items.name}</div>
          ))}
        </div>
      </div>
      <div className="divider25" />
      <div className="delivery-details-frame">
        <div className="subtotal-frame6">
          <div className="tax-frame10">
            <div className="subtotal2">Subtotal</div>
            <div className="payment-frame">${Orderdata.order_summary.subtotal}</div>
          </div>
          <div className="delivery-frame2">
            <div className="shipping-label">
              <div className="shipping5">Shipping</div>
              <div className="delivery6">Delivery</div>
            </div>
            <div className="divider-line2">${Orderdata.order_summary.shipping}</div>
          </div>
          <div className="tax-frame11">
            <div className="tax2">Tax</div>
            <div className="div29">${Orderdata.order_summary.taxes}</div>
          </div>
          <div className="tax-frame12">
            <div className="total2">Total</div>
            <div className="div30">${Orderdata.order_summary.total}</div>
          </div>
          <div className="tax-frame13">
            <div className="amount">Amount</div>
            <b className="paid">Paid</b>
          </div>
          <div className="tax-frame14">
            <div className="payment-method">Payment Method</div>
            <div className="upi">UPI</div>
          </div>
          <div className="tax-frame15">
            <div className="delivery-person">Delivery person</div>
            <div className="sugan">Sugan</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyOrders1;
