import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import Property1FilledPrimary from "./Property1FilledPrimary";
import "./CATEGORY.css";
import vector892 from '../assets/vector-892.svg'
import google from '../assets/google1.svg'
import facebook2 from '../assets/facebook2.svg'
import { useAuth0 } from "@auth0/auth0-react";
import { setBasketcount, setCredentials } from "../redux/actions/dataActions";
import { useDispatch } from "react-redux";
import { API } from "../api/api";

const CATEGORY = () => {
  const navigate = useNavigate();
  const { user, isAuthenticated, isLoading, loginWithRedirect } = useAuth0();
  const dispatch = useDispatch();
  const [text, setText] = useState('Sign In');
  const [textaccount, setTextaccount] = useState('Sign up');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    emailAddress: '',
    phoneNumber: '',
  });
  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    emailAddress: ''
  });
  const [isValidEmail, setIsValidEmail] = useState(true); // Initial email validity
  console.log(Object.values(errors).some((error) => !!error),'Error===>123')
  console.log(Object.keys(formData).filter(key => key !== 'phoneNumber').some(key => formData[key].trim() !== ''), 'FormData===>123');
  // Update form data on change
  const handleInputChange = (e) => {
    

    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    validateField(name, value);
  };

  const validateField = (name, value) => {
    let errorMessage = '';
    switch (name) {
      case 'firstName':
      case 'lastName':
        errorMessage = value ? '' : 'This field is required';
        break;
      case 'emailAddress':
        errorMessage = value ? (validateEmail(value) ? '' : 'Invalid email address') : 'This field is required';
        break;
      default:
        break;
    }
    setErrors({
      ...errors,
      [name]: errorMessage,
    });
  };

  const validateEmail = (email) => {
    // Regular expression for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };


  const TextChangeFuction = async () => {
    if (text == 'Sign In') {
      setText('Sign up')
      setTextaccount('Sign In')
    }
    else {
      setText('Sign In')
      setTextaccount('Sign up')
    }

  }

  const onButtonsStatesDarkClick = useCallback(() => {
    navigate("/homepage1");
  }, [navigate]);



  const CheckUserOffer = async (target) => {
    const data = {
      'target': target
    }
    API.getInstance().menu.post(`/api/check-offers`, data)
      .then((res) => {
        console.log(res.data.result.data, 'GetUserData======>')

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
    if (credentials) {
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
    // Validation check
    // if (!isValidForm()) {
    //   console.log('Form data is not valid');
    //   return;
    // }
  
    // Prepare data for API call
    const data = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.emailAddress,
      phoneNumber: formData.phoneNumber,
    };
  
    // Make API call
    API.getInstance()
      .menu.post('api/register', data)
      .then((res) => {
        console.log(res, 'API response');
        // Handle response accordingly
        if (res.data.result.code === 2) {
          CheckUserOffer(['First User', 'ALL', 'Registered User']);
        } else {
          CheckUserOffer(['Registered User', 'ALL']);
        }
        localStorage.setItem('credentials', JSON.stringify(res.data.result));
        dispatch(setCredentials(res.data.result));
        GetBasketData();
        window.location.reload();
      })
      .catch((error) => {
        console.error('Error:', error);
        // Handle error if needed
      });
  };
  
  return (
    <div className="category-26">
      <div className="signin-text-wrapper">
        <div className="signin-text1">
          <div className="sign-in-wrapper">
            {/* <h1 className="sign-in1">{text} to Engage</h1> */}
            <h1 className="sign-in1" style={{fontFamily:`var(--primary-font-family-bold)`,marginBottom:'10px'}}>Continue to Engage</h1>
          </div>
          <div className="a-few-more-questions-to-help-b-wrapper">
            <div className="a-few-more1" style={{marginBottom:'10px'}}>
              It only takes 5 seconds
            </div>
          </div>
          <div style={{ fontSize: `var(--primary-font-size)`, color: 'green' }}>
            The more items you engage with the closer you get to loyalty rewards, personalized recommendations and exclusive offers.
          </div>
        </div>

      </div>


      <form className="input10" onSubmit={handleSubmit}>
        <div style={{ display: 'flex' }}>
          <div style={{ flexGrow: 1 }} className="input-inner-group">
            <input
              style={{ fontSize: '12px', paddingLeft: '20px', borderColor: errors.firstName ? 'red' : 'initial',border:'.2px solid' }}
              className="input-inner-group"
              placeholder="First Name"
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
            />
             
          </div>
          
          <div style={{ flexGrow: 1, marginLeft: '5px' }} className="input-inner-group">
            <input
              style={{ fontSize: '12px', paddingLeft: '20px', borderColor: errors.lastName ? 'red' : 'initial',border:'.2px solid' }}
              className="input-inner-group"
              placeholder="Last Name"
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
            />
          </div>
          
        </div>

        <div style={{ display: 'flex', alignItems: 'flex-start', marginTop: '10px' }} className="input-inner5">
          <input
            style={{ fontSize: '12px', paddingLeft: '20px', borderColor: errors.emailAddress ? 'red' : 'initial' ,border:'.2px solid'}}
            className="input-inner5"
            placeholder="Email Address"
            type="text"
            name="emailAddress"
            value={formData.emailAddress}
            onChange={handleInputChange}
          />
        </div>
        {errors.emailAddress && (
          <p style={{ color: 'red', fontSize: '14px', marginTop: '5px', display: 'flex', alignItems: 'flex-start' }}>
            {errors.emailAddress}
          </p>
        )}
        <div style={{ display: 'flex', alignItems: 'flex-start' }} className="input-inner5">
          <input
            style={{ fontSize: '12px', paddingLeft: '20px', borderColor: errors.phoneNumber ? 'red' : 'initial',border:'.2px solid' }}
            className="input-inner5"
            placeholder="Phone Number"
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
          />
        </div>

        <button
          type="submit"
          style={{ marginTop: '20px', fontSize: '18px', fontFamily: 'Poppins',    backgroundColor: Object.values(errors).some((error) => !!error) || Object.keys(formData).filter(key => key !== 'phoneNumber').some(key => formData[key].trim() == '') ? 'rgba(180, 49, 45, 0.7)' : 'rgb(180,49,45)',
        }}
          className="fp-primary-btn"
          disabled={Object.values(errors).some((error) => !!error) || Object.keys(formData).filter(key => key !== 'phoneNumber').some(key => formData[key].trim() == '')}
          >
          Continue
        </button>
      </form>


      {/* <Property1FilledPrimary
        button={'Continue'}
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
      /> */}
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
      {/* <div className="dont-have-an-container1">
        <span>{`Dont have an account ? `}</span>
        <b onClick={()=> TextChangeFuction()} className="sign-up-here1">{textaccount} here</b>
      </div> */}
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
