import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import Property1FilledPrimary from "./Property1FilledPrimary";
import "./CATEGORY.css";
import vector892 from '../assets/vector-892.svg'
import google from '../assets/google1.svg'
import facebook2 from '../assets/facebook2.svg'
import { useAuth0 } from "@auth0/auth0-react";
import { setBasketcount } from "../redux/actions/dataActions";
import { useDispatch } from "react-redux";
import { API } from "../api/api";

const CATEGORY = () => {
  const navigate = useNavigate();
  const { user, isAuthenticated, isLoading,loginWithRedirect } = useAuth0();
  const dispatch = useDispatch();

  const onButtonsStatesDarkClick = useCallback(() => {
    navigate("/homepage1");
  }, [navigate]);

  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true); // State to track email validation


  const handleEmailChange = (event) => {
    const emailValue = event.target.value;
    setEmail(emailValue);
    validateEmail(emailValue);
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regular expression for email validation
    const isValid = regex.test(email);
    setIsValidEmail(isValid);
  };


  const CheckUserOffer = async (target) => {
    const data = {
      'target':target
    }
    API.getInstance().menu.post(`/api/check-offers`,data)
      .then((res) => {
        console.log(res.data.result.data,'GetUserData======>')
        
      })
      .catch((error) => {
      })
      .finally(() => {
      });
      
  }
  const GetBasketData = async () => {
    // if (!user){
    //   CheckUserOffer(['UnRegistered User','ALL'])
    // }
    

    const credentials = JSON.parse(localStorage.getItem('credentials'));
    if (credentials){
      API.getInstance().menu.get(`/api/cart-items?customer_user_id=${credentials?.user_id}`)
      .then((res) => {
        console.log(res.data.result.data, 'GetBasketData===res.data.result.data===>')
        console.log(res.data.result.basket_count, 'GetBasketData===res.data.result.data===>')
        dispatch(setBasketcount(res.data.result.basket_count));
        // CheckUserexistsData()
      })
      .catch((error) => {
      })
      .finally(() => {
      });
    }
    
  }
  const handleSubmit = () => {
    // Call your API with the email state
    console.log('Email:', email);
    
    let data = {}
    
    if (isValidEmail) {
      if (isAuthenticated) {
        data = {
          'email': user?.email,
          'user_name': user?.name
        }
      }
      else{
        data = {
          'email': email,
          'user_name': email
        }
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
          window.location.reload()
        })
        .catch((error) => {
          console.log(error, 'error=====>1221312')
        })
        .finally(() => {
        });
  }    
    


  };
  return (
    <div className="category-26">
      <div className="signin-text-wrapper">
        <div className="signin-text1">
          <div className="sign-in-wrapper">
            <h1 className="sign-in1">Sign up</h1>
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
          style={{ fontSize: '18px', paddingLeft: '20px', borderColor: isValidEmail ? 'initial' : 'red' }}
          className="input-inner5"
          placeholder="Email Address"
          type="text"
          value={email}
          onChange={handleEmailChange}
        />
        
      </div>
      {!isValidEmail && (
        <p style={{ color: 'red', fontSize: '14px', marginTop: '5px' }}>Invalid email address</p>
      )}
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
