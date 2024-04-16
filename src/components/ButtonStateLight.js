import { useCallback, useEffect, useState } from "react";
import Shipping from "./Shipping";
import LocationInputFrame from "./LocationInputFrame";
import { useNavigate } from "react-router-dom";
import ContactInformation from "./ContactInformation";
import "./ButtonStateLight.css";
import { toast } from 'react-toastify';
import profile from '../assets/profile.svg'
import down from '../assets/down.svg'
import down2 from '../assets/down-2.svg'
import { API } from "../api/api";
import { useAuth0 } from "@auth0/auth0-react";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { findObjectById } from "../utils/Appconstants";
import { useSelector } from "react-redux";

const ButtonStateLight = ({confirmnextstep,onContactClick}) => {
  const { user } = useAuth0();
  const navigate = useNavigate();
  const [isVisibleCI, setIsVisibleCI] = useState(false);
  const [isVisibleNew, setIsVisibleNew] = useState(false);
  const [selected_item_id, setSelected_item_id] = useState(0);
  const [isValidForm, setIsValidForm] = useState(false); 
  const user_data = useSelector(state => state.data.user_data);

  const [selectedLocation, setSelectedLocation] = useState(null);
  const [method, setMethod] = useState("");
  const [address_initialValues, setAddressinitialValues] = useState({
    id: '',
    complete_address: '',
    city: '',
    phone_number: '',
    f_name: '',
    l_name: '',
    state: ''
  });

  const handleSelectLocation = (index,data) => {
    onContactClick(index,data)
    setSelectedLocation(index);
    setSelected_item_id(data.id)
    setMethod("EDIT")
    GetUserAddress(data.id)
  };

  const [user_address_list, setUserAddressList] = useState([]);

  const onButtonsStatesDark1Click = useCallback(() => {
    navigate("/checkoutpayment");
  }, [navigate]);

  console.log(confirmnextstep,'confirmnextstep==>')
  useEffect(() => {
    if (confirmnextstep == true){
      console.log(confirmnextstep,'confirmnextstep==>')
      setIsVisibleCI(true)
      GetUserAddress(selected_item_id)
    }
  }, [confirmnextstep]);


  useEffect(() => {
    GetUserAddress(selected_item_id)
  }, []);

  const GetUserAddress = async (selected_item_id) => {
    // console.log('GetUserAddress====>Checkout')
    try {
      // console.log(user_data?.email_id,'user_data?.email_id=====>')
      if (user_data?.email_id){
        API.getInstance().menu.get(`/api/custom-user?email_id=${user_data?.email_id}`)
        .then((res) => {
          // console.log(res.data.result.data[0].address_list,'GetUserAddress===>',selected_item_id,'selected_item_id');
          setUserAddressList(res.data.result.data[0].address_list)
            // const main_data = res.data.result.data[0].address_list
            
            const searchedobject = findObjectById(res.data.result.data[0].address_list, selected_item_id);
            // console.log(searchedobject,'searchedobject======>');
            
            const final_data = {
              id:searchedobject.id,
              complete_address:searchedobject.complete_address,
              city:searchedobject.city,
              phone_number:searchedobject.phone_number,
              f_name:searchedobject.f_name,
              l_name:searchedobject.l_name,
              state:searchedobject.state,
            }
            // console.log(final_data,'final_data==>')
            setAddressinitialValues(final_data)
          
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
  complete_address: Yup.string()
    .required('Address is required'),
  state: Yup.string()
    .required('State is required'),
  city: Yup.string()
    .required('City is required'),
  phone_number: Yup.string()
    .required('Contact Number is required')
});

const handleSubmit = async (values, { setSubmitting }) => {
  try {
    setSubmitting(false)
    setIsVisibleNew(false)
      const body = {
        'id':values.id,
        "email_id":user?.email,
        "complete_address":values.complete_address,
        "city":values.city,
        "phone_number":values.phone_number,
        "f_name":values.f_name,
        "l_name":values.l_name,
        "state":values.state,
        "method":method
      }
      API.getInstance().menu.post(`/api/address-post`, body)
      .then((res) => {
          GetUserAddress(selected_item_id)
      })
      .catch((error) => {
      })
  }
  catch (error) {
  }
};


const AddNewAddress = async () => {
  setMethod("ADD")
  setIsVisibleNew(true)
  const final_data = {
    id:"",
    complete_address:"",
    city:"",
    phone_number:"",
    f_name:"",
    l_name:"",
    state:"",
  }
  // console.log(final_data,'final_data==>')
  setAddressinitialValues(final_data)
}

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


const contact_info = async () => {
  GetUserAddress(selected_item_id)
  setIsVisibleCI(!isVisibleCI)
  
}


const OnProceedClick = async () => {
  console.log("OnProceedClick===>")
  setIsVisibleNew(false)
}


  return (
    <div className="button-state-light">
      {/* <Shipping propWidth="unset" propAlignSelf="stretch" /> */}
      <div className="contactinformation2">
        <div className="edoneil-avvd-zlh-dow-aunsplash8" onClick={() => contact_info()}>
          <img
            className="profile-icon2"
            loading="eager"
            alt=""
            src={profile}
          />
          <div className="contact-information2">Contact Information</div>

          <img
            className="down-icon12 cursor-pointer"
            alt=""
            src={down}
            
          />
        </div>
        <div
          className={`${
            isVisibleCI ? "flex gap-[15px]" : "hidden"
          } " w-full flex-col p-5 gap-[15px]"`}
        >
       
          <div>
            {isVisibleNew ? (
              <div className="w-full flex flex-col ">
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
                      <Form className="">
                        <div className="frame-input1">
                          <div className="frame-email-address-input">
                            <div className="divider27" />
                          </div>
                        </div>
                        <div className="input-email-address">
                          <div className="contact-detail3">Contact detail</div>
                          <div className="frame-button-dropdown">
                            <div className="input5">
                              <Field
                                type="text"
                                id="f_name"
                                name="f_name"
                                value={values.f_name}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className="w-full border border-[#929292] rounded-[5px] h-[50px] text-[#909090] bg-transparent p-[10px] font-poppins font-normal text-sm outline-none"
                                placeholder="First Name"
                                required
                              />
                            </div>
                            <div className="input6">
                              <Field
                                type="text"
                                name="l_name"
                                value={values.l_name}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className="w-full border border-[#929292] rounded-[5px] h-[50px] text-[#909090] bg-transparent p-[10px] font-poppins font-normal text-sm outline-none"
                                placeholder="Last Name"
                                required
                              />
                            </div>
                          </div>
                          <div className="frame-button-dropdown1">
                            <div className="input7">
                              <div className="input-inner2">
                                <Field
                                  type="text"
                                  name="complete_address"
                                  value={values.complete_address}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  className="w-full border border-[#929292] rounded-[5px] h-[50px] text-[#909090] bg-transparent p-[10px] font-poppins font-normal text-sm outline-none"
                                  placeholder="Address"
                                  required
                                />
                              </div>
                            </div>
                          </div>
                          <div className="flex w-full gap-[15px]">
                          <Field
                            as="select"
                            name="state"
                            className="w-[50%] border border-[#929292] rounded-[5px] h-[50px] text-[#909090] bg-transparent p-[10px] font-poppins font-normal text-sm outline-none"
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
                              className="w-[50%] border border-[#929292] rounded-[5px] h-[50px] text-[#909090] bg-transparent p-[10px] font-poppins font-normal text-sm outline-none"
                              value={values.city} // Set value attribute to initial value
                            >
                              {dummyCities.map(city => (
                                <option key={city.id} value={city.value}>
                                  {city.name}
                                </option>
                              ))}
                            </Field>
                          </div>
                          <div className="frame-button-dropdown4">
                            <div className="input9">
                              <Field
                                type="text"
                                name="phone_number"
                                value={values.phone_number}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className="w-full border border-[#929292] rounded-[5px] h-[50px] text-[#909090] bg-transparent p-[10px] font-poppins font-normal text-sm outline-none"
                                placeholder="Contact Number"
                                required
                              />
                            </div>
                          </div>
                        </div>

                        <div className="buttons-states4" style={{marginTop:'20px'}}>
                        <button
                          className="buttons-states-dark51"
                          onClick={() => setIsVisibleNew(false)}
                        >
                          <div className="button63">Cancel</div>
                        </button>
                          <button type="submit" className="buttons-states-dark58 font-inter font-bold text-base leading-5 items-center bg-[#C21F24] rounded-md h-[36px] px-3 text-[#fff] mb-4" disabled={isSubmitting}>
                            <b className="button70">{method == "ADD" ? "Add New Address" : "Proceed"}</b>
                          </button>
                        </div>
                      </Form>
                    )}
                  </Formik>

                
                <div className="divider22" />
                {/* <div className="contactinformation-inner">
                  <div className="buttons-states-dark-parent5">
                    <button
                      className="buttons-states-dark51"
                      onClick={() => setIsVisibleNew(false)}
                    >
                      <div className="button63">Cancel</div>
                    </button>
                    <button
                      type="submit"
                      className="buttons-states-dark52"
                      onClick={() => setIsVisibleNew(false)}
                    >
                      <div className="button64">Proceed</div>
                    </button>
                  </div>
                </div> */}
              </div>
            ) : (
              <div className="w-full flex flex-col gap-[15px]">
                <div className="summary6">
                  <div className="contact-detail2">Contact detail</div>
                  {user_address_list && user_address_list.map((data, index) => (
                    <div onClick={()=>{handleSelectLocation(index,data);}}>
                    <LocationInputFrame
                      key={index} // Using index as key, ensure each component has a unique key
                      johnSmith={data.f_name}
                      Phone={data.phone_number}
                      City={data.city}
                      propBorder={selectedLocation === index ? "" : "1px solid #707070"}
                      handleEdit={() => {
                        setIsVisibleNew(true);
                        
                      }}
                    />
                    </div>
                  ))}
                </div>
                <div className="divider22" />
                <div className="contactinformation-inner">
                  <div className="buttons-states-dark-parent5">
                    <button
                      className="buttons-states-dark51"
                      onClick={() => AddNewAddress()}
                    >
                      <div className="button63">Add New Address</div>
                    </button>
                    <button
                   
                      className="buttons-states-dark52"
                      onClick={() => OnProceedClick() }
                    >
                      <div className="button64">Proceed</div>
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* <ContactInformation
        contactInformation="Payment"
        propMinWidth="50px"
        propPadding="unset"
        propPadding1="unset"
      /> */}
    </div>
  );
};

export default ButtonStateLight;
