import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Property1FilledPrimary from "./Property1FilledPrimary";
import "./CATEGORY1.css";
import vector892 from '../assets/vector-892.svg'
import google1 from '../assets/google1.svg'
import facebook2 from '../assets/facebook2.svg'

const CATEGORY1 = () => {
  const navigate = useNavigate();

  const onButtonsStatesDarkClick = useCallback(() => {
    navigate("/homepage1");
  }, [navigate]);

  return (
    <div className="category-25">
      <div className="subcategory-frame">
        <div className="signin-text">
          <div className="questions-frame">
            <h1 className="sign-in">Sign in</h1>
          </div>
          <div className="help-text">
            <div className="a-few-more">
              A few more questions to help better communicate to you
            </div>
          </div>
        </div>
      </div>
      <div className="input">
        <div className="google-signup-button">
          <input
            className="facebook-signup-button"
            placeholder="Email Address"
            type="text"
          />
        </div>
      </div>
      <Property1FilledPrimary
        button="Sign in"
        property1FilledPrimaryBorder="none"
        property1FilledPrimaryAlignSelf="stretch"
        property1FilledPrimaryBackgroundColor="#c21f24"
        property1FilledPrimaryHeight="60px"
        property1FilledPrimaryPadding="0px 12px"
        buttonDisplay="inline-block"
        buttonFontFamily="Poppins"
        buttonTextTransform="unset"
        buttonFontWeight="unset"
        buttonFontSize="18px"
        onButtonsStatesDarkContainerClick={onButtonsStatesDarkClick}
      />
      <div className="vector-separator">
        <img
          className="sign-up-callto-action"
          loading="eager"
          alt=""
          src={vector892}
        />
        <div className="o-r-frame">
          <div className="or">OR</div>
        </div>
      </div>
      <div className="dont-have-an-container">
        <span>{`Dont have an account ? `}</span>
        <b className="sign-up-here">Sign up here</b>
      </div>
      <div className="buttons-states-dark-parent4">
        <button className="buttons-states-dark22">
          <img className="google-icon" alt="" src={google1} />
          <div className="button31">Continue with Google</div>
        </button>
        <button className="buttons-states-dark23">
          <img className="facebook-icon" alt="" src={facebook2} />
          <div className="button32">Continue with Facebook</div>
        </button>
      </div>
    </div>
  );
};

export default CATEGORY1;
