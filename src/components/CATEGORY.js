import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Property1FilledPrimary from "./Property1FilledPrimary";
import "./CATEGORY.css";
import vector892 from '../assets/vector-892.svg'
import google from '../assets/google1.svg'
import facebook2 from '../assets/facebook2.svg'
import { useAuth0 } from "@auth0/auth0-react";

const CATEGORY = () => {
  const { loginWithRedirect } = useAuth0();
  const navigate = useNavigate();

  const onButtonsStatesDarkClick = useCallback(() => {
    navigate("/homepage1");
  }, [navigate]);

  return (
    <div className="category-26">
      <div className="signin-text-wrapper">
        <div className="signin-text1">
          <div className="sign-in-wrapper">
            <h1 className="sign-in1">Sign in</h1>
          </div>
          <div className="a-few-more-questions-to-help-b-wrapper">
            <div className="a-few-more1">
              A few more questions to help better communicate to you
            </div>
          </div>
        </div>
      </div>
      <div className="input10">
        <div className="input-inner5">
          <input
            className="frame-child24"
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
      <div className="o-rvector-parent">
        <img
          className="o-rvector-icon"
          loading="eager"
          alt=""
          src={vector892}
        />
        <div className="framewith-o-r">
          <div className="or1">OR</div>
        </div>
      </div>
      <div className="dont-have-an-container1">
        <span>{`Dont have an account ? `}</span>
        <b className="sign-up-here1">Sign up here</b>
      </div>
      <div className="signupcalltoaction">
        <button onClick={() => loginWithRedirect()} className="buttons-states-dark63">
          <img className="google-icon1" alt="" src={google} />
          <div className="button75">Continue with Google</div>
        </button>
        <button className="buttons-states-dark64">
          <img className="facebook-icon1" alt="" src={facebook2} />
          <div className="button76">Continue with Facebook</div>
        </button>
      </div>
    </div>
  );
};

export default CATEGORY;
