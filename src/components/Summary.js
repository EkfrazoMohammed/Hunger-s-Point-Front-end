import { useMemo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Property1FilledPrimary from "./Property1FilledPrimary";
import "./Summary.css";

const Summary = ({
  button,
  propWidth,
  propMinWidth,
  propAlignSelf,
  propOpacity,
  basket_summary,
  screen,
  proceedtopayment
}) => {
  const summaryStyle = useMemo(() => {
    return {
      width: propWidth,
      minWidth: propMinWidth,
      alignSelf: propAlignSelf,
    };
  }, [propWidth, propMinWidth, propAlignSelf]);

  
  const property1FilledPrimaryStyle = useMemo(() => {
    return {
      opacity: propOpacity,
    };
  }, [propOpacity]);

  const navigate = useNavigate();
  console.log(basket_summary,'basket_summary===>')

  const onButtonsStatesDarkClick = useCallback(() => {
    console.log('onButtonsStatesDarkClick')
    navigate("/checkoutshippingaddress");
  }, [navigate]);

  const proceedtopay = () => {
    console.log("proceedtopay===>")
    proceedtopayment()
  }

  return (
    <div className="summary10" style={{summaryStyle,backgroundColor:`var(--card-bg)`}} onClick={onButtonsStatesDarkClick}>
      <div className="container-frame">
        <h3 className="order-summary2" style={{fontFamily:`var(--primary-font-family-bold)`,fontSize:`var(--sub-header-font-size)`,color:`var(--hp-yellow-600)`}}>Order summary</h3>
        <div className="frame-parent63">
          <div className="subtotal-parent">
            <div className="subtotal3" >Subtotal</div>
            <div className="div32" style={{fontFamily:`var(--primary-font-family-bold)`,fontSize:`var(--primary-font-size)`}}>${basket_summary?.subtotal}</div>
          </div>
          {/* <div className="text-frame-parent">
            <div className="text-frame1">
              <div className="shipping6">Shipping</div>
              <div className="choose-your-method1">Choose your method</div>
            </div>
            <div className="text-frame2">${basket_summary?.shipping}</div>
          </div> */}
          <div className="text-frame-parent">
            <div className="text-frame1">
              <div className="subtotal3" style={{fontFamily:`var(--primary-font-family)`,fontSize:`var(--primary-font-size)`}}>Platform fee</div>
            </div>
            <div className="div32" style={{fontFamily:`var(--primary-font-family)`,fontSize:`var(--primary-font-size)`}}>${basket_summary?.shipping}</div>
          </div> 
          <div className="tax-parent">
            <div className="tax3" style={{fontFamily:`var(--primary-font-family)`,fontSize:`var(--primary-font-size)`}}>Tax</div>
            <div className="div33" style={{fontFamily:`var(--primary-font-family)`,fontSize:`var(--primary-font-size)`}}>${basket_summary?.taxes}</div>
          </div>
          <div className="total-parent">
            <div className="total3" style={{fontFamily:`var(--primary-font-family)`,fontSize:`var(--primary-font-size)`,color:`var(--hp-yellow-600)`}}>Grand Total</div>
            <div className="div34">${basket_summary?.total}</div>
          </div>
          <div className="tax-parent">
            <div style={{color:'#c21f24', fontWeight:'bolder' ,fontFamily:`var(--primary-font-family)`,fontSize:`var(--primary-font-size)`}} className="tax3">Coupon Discount</div>
            <div style={{color:'#c21f24',fontWeight:'bolder',fontFamily:`var(--primary-font-family)`,fontSize:`var(--primary-font-size)`}} className="div33">-${basket_summary?.discount_amount}</div>
          </div>
          <div className="tax-parent">
            <div className="total3 b20" style={{fontFamily:`var(--primary-font-family)`,fontSize:`var(--primary-font-size)`}}>To pay</div>
            <div className="div34 b20" style={{fontFamily:`var(--primary-font-family)`,fontSize:`var(--primary-font-size)`}}>${basket_summary?.final_total}</div>
          </div>
        </div>
        {screen == "checkout" ? 
        <>
        <div
          className="property-1filledprimary"
          style={{border:'none',alignSelf:"stretch",backgroundColor:"#c21f24",height:"49px",padding:"0px 12px"
            }}
          onClick={proceedtopay}
        >
          <b className="button button-design" style={{display:"inline-block",fontFamily:`var(--primary-font-family)`,fontSize:`var(--primary-font-size)`,textTransform:"unset"}}>
            Proceed Pay
          </b>
        </div>
        </>
        :
        <Property1FilledPrimary
          className="buttonstyle"
          button={button}
          property1FilledPrimaryBorder="none"
          property1FilledPrimaryAlignSelf="stretch"
          property1FilledPrimaryBackgroundColor="#c21f24"
          property1FilledPrimaryHeight="49px"
          property1FilledPrimaryPadding="0px 12px"
          buttonDisplay="inline-block"
          buttonFontFamily="Inter"
          buttonTextTransform="unset"
          buttonFontWeight="unset"
          buttonFontSize="16px"
          onButtonsStatesDarkContainerClick={onButtonsStatesDarkClick}
        />
      
      
      }

        

      </div>
    </div>
  );
};

export default Summary;
