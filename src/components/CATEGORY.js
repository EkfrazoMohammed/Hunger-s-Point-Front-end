import { useCallback, useState } from "react";
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

  const [email, setEmail] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };



  const CheckUserexistsData = async () => {
    console.log(user?.email, 'user?.email==>')
    if (user?.email) {
      if (isAuthenticated) {
        const data = {
          'email': user?.email,
          'user_name': user?.name
        }
        API.getInstance().menu.post('api/register', data)
          .then((res) => {
            console.log(res, 'res=====>1221312')
            console.log(res.data.result, 'res=====>code')
            if (res.data.result.code == 2){
              CheckUserOffer(['First User','ALL','Registered User'])
            }
            else{
              CheckUserOffer(['Registered User','ALL'])
            }
            localStorage.setItem('credentials', JSON.stringify(res.data.result) );
            GetBasketData()
          })
          .catch((error) => {
            console.log(error, 'error=====>1221312')
          })
          .finally(() => {
          });
      }
    }
  }
  
  const handleSubmit = () => {
    // Call your API with the email state
    console.log('Email:', email);
    if (user?.email) {
      if (isAuthenticated) {
        const data = {
          'email': user?.email,
          'user_name': user?.name
        }
        API.getInstance().menu.post('api/register', data)
          .then((res) => {
            console.log(res, 'res=====>1221312')
            console.log(res.data.result, 'res=====>code')
            if (res.data.result.code == 2){
              CheckUserOffer(['First User','ALL','Registered User'])
            }
            else{
              CheckUserOffer(['Registered User','ALL'])
            }
            localStorage.setItem('credentials', JSON.stringify(res.data.result) );
            GetBasketData()
          })
          .catch((error) => {
            console.log(error, 'error=====>1221312')
          })
          .finally(() => {
          });
      }
    }
  };
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
        style={{fontSize:'18px',paddingLeft:'20px'}}
          className="input-inner5"
          placeholder="Email Address"
          type="text"
          value={email}
          onChange={handleEmailChange}
        />
      </div>
      {/* <button onClick={handleSubmit}>Submit</button> */}
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
        handleSubmit={handleSubmit}
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
        <button onClick={() => loginWithRedirect()} className="buttons-states-dark64">
          <img className="google-icon1" alt="" src={google} />
          <div className="button75">Continue with Google</div>
        </button>
        <button onClick={() => loginWithRedirect()} className="buttons-states-dark64">
          <img className="facebook-icon1" alt="" src={facebook2} />
          <div className="button76">Continue with Facebook</div>
        </button>
      </div>
    </div>
  );
};

export default CATEGORY;
