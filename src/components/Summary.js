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
    <div className="summary10" style={summaryStyle} onClick={onButtonsStatesDarkClick}>
      <div className="container-frame">
        <h3 className="order-summary2">Order summary</h3>
        <div className="frame-parent63">
          <div className="subtotal-parent">
            <div className="subtotal3">Subtotal</div>
            <div className="div32">${basket_summary?.subtotal}</div>
          </div>
          <div className="text-frame-parent">
            <div className="text-frame1">
              <div className="shipping6">Shipping</div>
              <div className="choose-your-method1">Choose your method</div>
            </div>
            <div className="text-frame2">${basket_summary?.shipping}</div>
          </div>
          <div className="tax-parent">
            <div className="tax3">Tax</div>
            <div className="div33">${basket_summary?.taxes}</div>
          </div>
          <div className="total-parent">
            <div className="total3">Total</div>
            <div className="div34">${basket_summary?.total}</div>
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
          <b className="button button-design" style={{display:"inline-block",fontFamily:"Inter",textTransform:"unset",fontWeight:"unset",fontSize:"16px"}}>
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
