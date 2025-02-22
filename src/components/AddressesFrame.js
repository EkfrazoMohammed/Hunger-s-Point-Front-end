import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MyAddressesText from "./MyAddressesText";
import "./AddressesFrame.css";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useAuth0 } from "@auth0/auth0-react";
import { API } from "../api/api";
import { useDispatch, useSelector } from "react-redux";
import { findObjectById } from "../utils/Appconstants";
import epback from  "../assets/epback.svg";
import { setCredentials } from "../redux/actions/dataActions";

const AddressesFrame = ({method,selected_item_id}) => {
  const { user } = useAuth0();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isValidForm, setIsValidForm] = useState(false); 
  const user_address_list = useSelector(state => state.data.user_address_data);

  console.log(selected_item_id,'selected_item_id===>--form')
  const [address_initialValues, setAddressinitialValues] = useState({
    id: '',
    // complete_address: '',
    // city: '',
    phone_number: '',
    f_name: '',
    l_name: '',
    email_id:'',
    // state: ''
  });
  useEffect(() => {
    GetUserAddress()
  }, []);
  const GetUserAddress = async () => {
    const credentials = JSON.parse(localStorage.getItem("credentials"));
    console.log(credentials,'credentials===>123')
    try {
      if ((user && user.email) || (credentials && credentials.user_id)) {
        console.log(user,'user=====>123')
        console.log(credentials,'credentials=====>123')
        // const emailToFetch = user?.email || credentials?.email_id;
        API.getInstance().menu.get(`/api/custom-user?user_id=${credentials.user_id}`)
        .then((res) => {
          // console.log(res.data.result.data[0].address_list,'GetUserAddress===>');
            // const main_data = res.data.result.data[0].address_list
            
            const searchedobject = findObjectById(res.data.result.data[0].address_list, selected_item_id);
            console.log(searchedobject,'searchedobject======>');
            
            const final_data = {
              id:searchedobject.id,
              // complete_address:searchedobject.complete_address,
              // city:searchedobject.city,
              phone_number:searchedobject.phone_number,
              f_name:searchedobject.f_name,
              l_name:searchedobject.l_name,
              email_id:searchedobject.email_id
              // state:searchedobject.state,
            }
            setAddressinitialValues(final_data)
            //   dispatch(setLocationInfoByid(res.data.result.data[0]));
        })
        .catch((error) => {
        })
      }
        
    }
    catch (error) {
    }
};


  const validationSchema = Yup.object().shape({
    f_name: Yup.string()
      .required('First Name is required'),
    l_name: Yup.string()
      .required('Last Name is required'),
    // complete_address: Yup.string()
    //   .required('Address is required'),
    // state: Yup.string()
    //   .required('State is required'),
    // city: Yup.string()
    //   .required('City is required'),
    phone_number: Yup.string()
      .required('Contact Number is required')
  });

  const onEpbackIconClick = useCallback(() => {
    navigate("/myaddress1");
  }, [navigate]);

  const onButtonsStatesContainerClick = useCallback(() => {
    navigate("/myaddress1");
  }, [navigate]);


  const handleSubmit = async (values, { setSubmitting }) => {

    console.log(values,'values----=======>')
    const credentials = JSON.parse(localStorage.getItem("credentials"));
    try {
      setSubmitting(false)
      console.log(method,'method=====')
        const body = {
          'id':values.id,
          'user_id':credentials?.user_id,
          "email_id":user?.email || credentials?.email_id,
          'spr_user_id':credentials.spr_user_id,
          // "complete_address":values.complete_address,
          // "city":values.city,
          "phone_number":values.phone_number,
          "f_name":values.f_name,
          "l_name":values.l_name,
          // "state":values.state,
          "method":method
        }
        console.log(values, 'values======>handleSubmit111')
        console.log(body, 'values======>handleSubmit')
        
        API.getInstance().menu.post(`/api/address-post`, body)
        .then((res) => {
            console.log(res, 'res===================handleSubmit')
            //   GetLocationByid(id=0)
            onButtonsStatesContainerClick()
            localStorage.setItem('credentials', JSON.stringify(res.data.result));
            dispatch(setCredentials(res.data.result));
            GetUserAddress()
            navigate("/myaddress1")
        })
        .catch((error) => {
        })

    }

    catch (error) {
    }
};

// Dummy data for options
const dummyStates = [
  { id: 1, name: 'Select State', value: '' },
  { id: 2, name: 'United States', value: 'United States' },
  { id: 3, name: 'Canada', value: 'Canada' },
  { id: 4, name: 'France', value: 'France' },
  { id: 5, name: 'Germany', value: 'Germany' }
];


const dummyCities = [
  { id: 1, name: 'New York', value: 'New York' },
  { id: 2, name: 'Los Angeles', value: 'Los Angeles' },
  { id: 3, name: 'Paris', value: 'Paris' },
  { id: 4, name: 'Berlin', value: 'Berlin' }
];


  return (
    <>
    <Formik
      enableReinitialize
      initialValues={address_initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
      validateOnChange={true}
      validateOnBlur={false}
      validate={(values) => {
          // Manually validate the form on change
          validationSchema.validate(values)
              .then(() => setIsValidForm(true))
              .catch(() => setIsValidForm(false));
      }}
    >
        {({ values, errors, touched, handleChange, handleBlur, handleSubmit, setFieldValue, isSubmitting }) => (
        <Form onSubmit={handleSubmit} className="addresses-frame" style={{backgroundColor:`var(--website-bg)`}}>
          {/* <div className="frame-input1">
            <div className="frame-email-address-input">
              <div className="divider27" />
            </div>
          </div> */}
          
          <div className="input-email-address" >
          <div className="my-addresses-text">
          <img
              className="epback-icon2"
              loading="eager"
              alt=""
              src={epback}
              onClick={onEpbackIconClick}
            />
            <div className="contact-detail3" >Contact Details</div>
            </div>
            <div className="frame-button-dropdown" >
              <div className="input5" >
                <Field
                  type="text"
                  id="f_name"
                  name="f_name"
                  value={values.f_name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="w-full border border-[#929292] rounded-[5px] h-[50px] text-[#909090] bg-transparent p-[10px]  outline-none" 
                  placeholder="First Name"
                  required
                />
              </div>
              <div className="input5">
                <Field
                  type="text"
                  name="l_name"
                  value={values.l_name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="w-full border border-[#929292] rounded-[5px] h-[50px] text-[#909090] bg-transparent p-[10px] outline-none"
                  placeholder="Last Name"
                  required
                />
              </div>
            </div>
            <div className="frame-button-dropdown" >
              <div className="input5" >
                <Field
                  type="text"
                  id="f_name"
                  name="phone_number"
                  value={values.phone_number}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="w-full border border-[#929292] rounded-[5px] h-[50px] text-[#909090] bg-transparent p-[10px]  outline-none" 
                  placeholder="Phone Number"
        
                />
              </div>
              <div className="input5">
                <Field
                  type="text"
                  name="email_id"
                  value={values.email_id}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="w-full border border-[#929292] rounded-[5px] h-[50px] text-[#909090] bg-transparent p-[10px] outline-none"
                  placeholder="Email Id"
                  required
                />
              </div>
            </div>
            {/* <div className="frame-button-dropdown1">
              <div className="input5">
                <div className="input-inner2">
                  <Field
                    type="text"
                    name="complete_address"
                    value={values.complete_address}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="w-full border rounded-[5px] h-[50px] text-[#909090] bg-transparent p-[10px] utline-none"
                    placeholder="Address"
                    required
                  />
                </div>
              </div>
            </div> */}
            {/* <div className="flex w-full gap-[15px]" style={{fontFamily:`var(--primary-font-family)`,fontSize:`var(--primary-font-size-mini)`}}>
            <Field
              as="select"
              name="state"
              className="w-[50%] border border-[#929292] rounded-[5px] h-[50px] text-[#909090] bg-transparent p-[10px] outline-none"
              value={values.state}
            >
              {dummyStates.map(state => (
                <option key={state.id} value={state.value}>
                  {state.name}
                </option>
              ))}
            </Field>
                <Field
                as="select"
                name="city"
                className="w-[50%] border border-[#929292] rounded-[5px] h-[50px] text-[#909090] bg-transparent p-[10px] outline-none"
                value={values.city} // Set value attribute to initial value
              >
                {dummyCities.map(city => (
                  <option key={city.id} value={city.value}>
                    {city.name}
                  </option>
                ))}
              </Field>
            </div> */}
            {/* <div className="frame-button-dropdown1">
              <div className="input5">
                <Field
                  type="text"
                  name="phone_number"
                  value={values.phone_number}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="w-full border border-[#929292] rounded-[5px] h-[50px] text-[#909090] bg-transparent p-[10px] outline-none"
                  placeholder="Contact Number"
                  required
                />
              </div>
            </div> */}
          </div>

          
          <button  type="submit"   className=" leading-5 items-center bg-[#C21F24] rounded-md h-[40px] px-3 text-[#fff]" >
                  <div className="button62">{method == "ADD" ? "Add New Address" : "Edit Address"}</div>
                </button>

          {/* <div className="buttons-states4">
            <button type="submit" className="buttons-states-dark58 font-inter font-bold text-base leading-5 items-center bg-[#C21F24] rounded-md h-[49px] px-3 text-[#fff]" disabled={isSubmitting}>
              <b className="button70">{method == "ADD" ? "Add New Address" : "Edit Address"}</b>
            </button>
          </div> */}
        </Form>
      )}
    </Formik>
    </>
   
  );
};

export default AddressesFrame;
