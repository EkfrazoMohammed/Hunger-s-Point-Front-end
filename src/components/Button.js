import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ContactInformation1 from "./ContactInformation1";
import ContactInformation from "./ContactInformation";
import Summary from "./Summary";
import "./Button.css";
import ButtonStateLight from "./ButtonStateLight";
import HeaderInstance from "./HeaderInstance";
import shippingdetails from "../assets/shipping-details.svg"
import down from "../assets/down.svg"
import down1 from "../assets/down-1.svg"
import location11 from "../assets/location-11.svg"
import call1 from "../assets/call1.svg"
import minus from "../assets/minus.svg"
import add from "../assets/add.svg"
import edoneilavvdzlhdowaunsplash from "../assets/edoneilavvdzlhdowaunsplash-1@2x.png"
import edoneilavvdzlhdowaunsplash1 from "../assets/edoneilavvdzlhdowaunsplash-1@2x.png"
import edoneilavvdzlhdowaunsplash12 from "../assets/edoneilavvdzlhdowaunsplash-1-2@2x.png"
import edoneilavvdzlhdowaunsplash13 from "../assets/edoneilavvdzlhdowaunsplash-1-3@2x.png"
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { API } from "../api/api";
import { useAuth0 } from "@auth0/auth0-react";
import { setBasketcount, setLocation } from "../redux/actions/dataActions";
import { useDispatch, useSelector } from "react-redux";
import { toast } from 'react-toastify';
import epback from '../assets/epback.svg'

const Button = () => {
  const { user } = useAuth0();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const locationData = useSelector(state => state.data.location);

  const [confirmnextstep, setConfirmnextstep] = useState(false);


  const onCartCheckoutContainerClick = useCallback(() => {
    console.log("onCartCheckoutContainerClick")
    // navigate("/checkoutshippingmethod");
    setConfirmnextstep(false)
    setTimeout(() => {
      setConfirmnextstep(true); // Then set to true after a short delay
    }, 10);

  }, []);
  const [summarydata, setSummarydata] = useState([]);
  const [basketdata, setBasketdata] = useState([]);

  const [addresslist, setAddresslist] = useState([]);
  const [selectedState, setSelectedState] = useState('');
  const [selectMethod, setSelectMethod] = useState(2);
  const [isVisibleSM, setIsVisibleSM] = useState(true);
  const [isValidForm, setIsValidForm] = useState(false);
  const [address_initialValues, setAddressinitialValues] = useState({
    id: '',
    complete_address: '',
    city: '',
    phone_number: '',
    f_name: '',
    l_name: '',
    state: ''
  });
  const [apicalled, setapicalled] = useState(false);
  const [order, setOrder] = useState({
    user_id: '',
    user_address: {},
    menu_items: {},
    order_summary: {},
    promo_code: '',
    shipping_method: "Takeaway",
    location_address: {}
  });


  // location

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

  useEffect(() => {
    GetBasketData(false)
    GetLocationData()
    SelectBranch()
  }, []);

  const GetBasketData = async (flag, code) => {
    const credentials = JSON.parse(localStorage.getItem('credentials'));
    let updated_url = ""
    if (flag) {
      updated_url = `/api/cart-items?customer_user_id=${credentials?.user_id}&promo_code=${code}`
    }
    else {
      updated_url = `/api/cart-items?customer_user_id=${credentials?.user_id}`
    }
    API.getInstance().menu.get(updated_url)
      .then((res) => {
        const credentials = JSON.parse(localStorage.getItem('credentials'));
        // console.log(res.data.result.data,'GetBasketData===res.data.result.data===>')
        // console.log(res.data.result.basket_count,'GetBasketData===res.data.result.data===>')
        setSummarydata(res.data.result.summary);
        setBasketdata(res.data.result.data);
        dispatch(setBasketcount(res.data.result.basket_count));
        setOrder(prevOrder => ({
          ...prevOrder,
          menu_items: res.data.result.data,
          order_summary: res.data.result.summary,
          user_id: credentials?.user_id,
        }));

      })
      .catch((error) => {
      })
      .finally(() => {
      });
  }

  const GetLocationData = async () => {
    const location_id = localStorage.getItem('location_id')
    API.getInstance().menu.get(`/api/restaurent?id=${location_id}`)
      .then((res) => {
        // console.log(res.data.result.data[0],'res.data.result.data[0]')
        const locationAddress = res.data.result.data[0];
        setOrder(prevOrder => ({
          ...prevOrder,
          location_address: locationAddress
        }));
        // UserPlaceOrder()
      })
      .catch((error) => {
      })
      .finally(() => {
      });
  }
  const SelectBranch = (event) => {
    // setSelectedState(event.target.value);
    // const id = event.target.selectedOptions[0].getAttribute('data-id');
    // console.log('Selected ID:', id);

    API.getInstance().menu.get(`/api/restaurent?id=1`)
      .then((res) => {
        // console.log(res.data.result.data[0],'res======>handleSelectChange')
        setAddresslist(res.data.result.data[0])

        setOrder(prevOrder => ({
          ...prevOrder,
          location_address: res.data.result.data[0]
        }));
        // dispatch(setLocation(res.data.result.data));
      })
      .catch((error) => {
      })
      .finally(() => {
      });

  };

  const method = "ADD"

  const handleSubmit = async (values, { setSubmitting }) => {

    setConfirmnextstep(null)
    console.log(values, '=======>')
    try {
      setSubmitting(false)

      const body = {
        'id': values.id,
        'spr_user_id':credentials.spr_user_id,
        "email_id": user?.email,
        "complete_address": values.complete_address,
        "city": values.city,
        "phone_number": values.phone_number,
        "f_name": values.f_name,
        "l_name": values.l_name,
        "state": values.state,
        "method": method
      }

      API.getInstance().menu.post(`/api/address-post`, body)
        .then((res) => {
          console.log(res, 'res===================handleSubmit')
          setConfirmnextstep(true)
          toast.success('Address updated successfully!');
        })
        .catch((error) => {
          toast.error('System temporarily unavailable process your request, Please try after sometime!');
        })

    }

    catch (error) {
    }
  };

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

  useEffect(() => {
    GetRestaurentData()

  }, []);

  const GetRestaurentData = async () => {
    // console.log('GetRestaurentData==in ')
    API.getInstance().menu.get("/api/restaurent")
      .then((res) => {
        // console.log(res.data.result.data,'GetRestaurentData=res.data.result.data==>')
        dispatch(setLocation(res.data.result.data));

      })
      .catch((error) => {
        setSelectedState(null)
      })
      .finally(() => {
      });
  }

  const UserPlaceOrder = async () => {
    console.log(order, 'order===>UserPlaceOrder')
    API.getInstance().menu.post('api/user-place-orders', order)
      .then((res) => {
        console.log(res, 'res===>')
        GetBasketData(false)
        toast.success('Order placed successfully!');
        navigate('/orders')
      })
      .catch((error) => {
        toast.error('Something went wrong please try after sometime!');
      })
      .finally(() => {
      });

  }


  const proceedtopayment = async () => {
    const location_id = localStorage.getItem('location_id')
    console.log(order, 'order=======>')
    if (order.shipping_method === "Delivery") {
      GetLocationData()
      if (!order.user_id) {
        toast.error('Please log in to proceed with the order.');
        return;
      }
      if (Object.keys(order.user_address).length === 0) {
        toast.error('Please provide your address for delivery.');
        return;
      }
      // if (!order.location_address) {
      //   toast.error('Please provide location address for delivery.');
      //   return;
      // }
      if (!Array.isArray(order.menu_items) || Object.keys(order.order_summary).length === 0) {
        toast.error('Please select items to order.');
        return;
      }
      UserPlaceOrder()
    } else if (order.shipping_method === "Takeaway") {
      if (!order.user_id) {
        toast.error('Please log in to proceed with the order.');
        return;
      }
      if (Object.keys(order.user_address).length === 0) {
        toast.error('Please provide the contact information for takeaway.');
        return;
      }
      if (Object.keys(order.location_address).length === 0) {
        toast.error('Please select location information for takeaway.');
        return;
      }
      if (!Array.isArray(order.menu_items) || Object.keys(order.order_summary).length === 0) {
        toast.error('Please select items to order.');
        return;
      }
      UserPlaceOrder()
    } else {
      toast.error('Invalid shipping method selected.');
      return;
    }


    // If all conditions are met, proceed with the payment

    console.log(order, '11111order=======>')


  };

  const onShippingMethodClick = useCallback((index, shipping) => {
    console.log(index, 'index1111====>', shipping, 'shipping=====>')
    setOrder(prevOrder => ({
      ...prevOrder,
      shipping_method: 'Takeaway'
    }));
    setSelectMethod(index)

  }, []);

  const onPromoClick = useCallback((promo_code) => {
    console.log(promo_code, 'promo_code===>')
    GetBasketData(true, promo_code)
    // setOrder(prevOrder => ({
    //   ...prevOrder,
    //   promo_code: promo_code
    // }));

  }, []);

  useEffect(() => {
    console.log(order, 'order======>');

  }, [order]);


  const onContactClick = useCallback((index, data) => {
    console.log(index, data, 'data====>')
    setOrder(prevOrder => ({
      ...prevOrder,
      user_address: data
    }));
    console.log(order, 'order======>')
  }, []);

  const onEpbackIconClick = useCallback(() => {
    navigate("/basket");
  }, [navigate]);

  return (
    <section className="button59" style={{ backgroundColor:`var(--website-bg)`}}>
      <div className="item-list-frame" style={{ backgroundColor:`var(--website-bg)`, fontFamily: "var(--primary-font-family)", fontSize: "var(--sub-header-font-size)" ,marginTop:'20px', justifyContent: 'center', alignItems: 'center' }}>
        <img
          className="epback-icon2"
          loading="eager"
          
          alt=""
          src={epback}
          onClick={onEpbackIconClick}
        />
        <h1 className="basket1" style={{ textAlign: 'center' }} > Checkout</h1>
        {/* <div className="items1" style={{textAlign:'center'}}>{basket_count} items</div> */}
      </div>
      <div className="please-enter-your4" style={{ marginTop:'20px',fontFamily: "var(--primary-font-family)", fontSize: "var(--primary-font-size)" }}>
        Please enter your details below to complete your purchase.
      </div>
      {/* <div className="checkout-parent" >
      <img
        className="epback-icon2"
        loading="eager"
        style={{height:'30px',marginBottom:'10px'}}
        alt=""
        src={epback}
        onClick={onEpbackIconClick}
      />
        <div>
        <h1 className="checkout4">Checkout</h1>
        <div className="please-enter-your4">
          Please enter your details below to complete your purchase.
        </div>
        </div>
      </div> */}
      {/* <div className="i-t-e-n-s-quantity">
        <div className="divider18" />
      </div> */}
      <div className="choose-method-button">
        <div className="buttons-states-dark47">
          <div className="shipping2">
            <div onClick={() => setIsVisibleSM(!isVisibleSM)} className="shipping-details-group">
              <img
                className="shipping-details-icon1"
                loading="eager"
                alt=""
                src={shippingdetails}
              />
              <div style={{fontFamily:`var(--primary-font-family-bold)`,fontSize:`var(--primary-font-size)`}}
              className="shipping-method1">Shipping Method</div>
              <img
                className="down-icon9 cursor-pointer"
                loading="eager"
                alt=""
                src={down}

              />
            </div>
            <div
              className={`${isVisibleSM ? "flex gap-[15px]" : "hidden"
                } " w-full flex-col p-5 gap-[15px]"`}
            >
              <div className="divider19" />

              <div className="location-call-frame">
                <div className={selectMethod === 2 ? "" : "delivery-frame1"}>
                  <div className="hospital-state-parent">
                    {/* <div className="delivery-delivery-frame">
                      <div
                        className="delivery5 cursor-pointer"
                        onClick={() => onShippingMethodClick(1,'Delivery') }
                      >
                        Delivery
                      </div>
                    </div> */}
                    <div className="hospital-state">
                      <div
                        style={{fontFamily:`var(--primary-font-family)`,fontSize:`var(--primary-font-size)`}}
                        className="delivery5 cursor-pointer"
                        onClick={() => onShippingMethodClick(2, 'Takeaway')}
                      >
                        Takeaway
                      </div>
                    </div>
                  </div>
                  <div className="location-call" />
                </div>
              </div>
              <div className="w-full">
                {selectMethod === 1 ? (
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
                      <Form >

                        <div className="input-email-address">
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
                                <option key={city.id} value={city.value} > 
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
                        <div className="component-frame">
                          <div
                            className="oreo-shake-component"
                          >
                            <button style={{ border: '1px solid #fff' }} className="font-inter font-bold text-base leading-5 items-center border border-[#fff] rounded-md h-[49px] px-3 text-[#fff]">
                              <div className="button53">Back</div>
                            </button>
                            <button type="submit" className="font-inter font-bold text-base leading-5 items-center bg-[#C21F24] rounded-md h-[49px] px-3 text-[#fff]">
                              <div className="button54">Use this Address</div>
                            </button>
                          </div>
                        </div>
                      </Form>
                    )}
                  </Formik>
                ) : (
                  <div className="w-full gap-4 flex flex-col">
                    {/* <div className="dropdown-wrapper">
                      <div className="dropdown2">
                        <div className="select-state-container">
                          <div className="select-state2">Alberta</div>
                          <img
                            className="down-icon10"
                            alt=""
                            src={down1}
                          />
                        </div>
                      </div>
                    </div> */}
                    <select
                      name="state"
                      className="w-[100%] border border-[#929292] rounded-[5px] h-[50px]  bg-transparent p-[10px] font-poppins font-normal text-sm outline-none"
                      style={{fontFamily:`var(--primary-font-family)`,fontSize:`var(--primary-font-size-mini)`}}
                      value={locationData[0]?.published_name}
                      // onChange={handleSelectChange}
                      disabled
                    >
                      <option value=''>Select a Location</option>
                      {locationData.map(state => (
                        <option  key={state.id} value={state.published_name} data-id={state.id}>
                          {state.published_name}
                        </option>
                      ))}
                    </select>


                    <div className="choose-store">
                      <div className="frame-parent41">
                        <div className="alberta-wrapper1">
                          <div  style={{fontFamily:`var(--primary-font-family-bold)`,fontSize:`var(--primary-font-size)`,color:`var(--hp-yellow-600)`}} className="alberta6">{addresslist.city}</div>
                        </div>
                        <div className="location-parent4">
                          <img
                            className="location-icon10"
                            alt=""
                            src={location11}
                          />
                          <div style={{fontFamily:`var(--primary-font-family)`,fontSize:`var(--primary-font-size-mini)`}} className="hospital-st-fort6">
                            {addresslist.address_info}
                          </div>
                        </div>
                        <div className="call-parent3">
                          <img
                            className="call-icon6"
                            loading="eager"
                            alt=""
                            src={call1}
                          />
                          <div style={{fontFamily:`var(--primary-font-family)`,fontSize:`var(--primary-font-size-mini)`}} className="div19">{addresslist.phone}</div>
                        </div>
                      </div>
                    </div>



                    <div className="cart-checkout-wrapper">
                      <div
                        className="cart-checkout"

                      >
                        {/* <button style={{ border: '0.5px solid #fff',fontFamily:`var(--primary-font-family)`,fontSize:`var(--primary-font-size-mini)` }} className=" leading-5 items-center border border-[#fff] rounded-md h-[40px] px-3 text-[#fff]">
                          <div className="button61">Back</div>
                        </button> */}
                        <button className=" leading-5 items-center bg-[#C21F24] rounded-md h-[40px] px-3 text-[#fff]" onClick={() => onCartCheckoutContainerClick()} >
                          <div className="button62">Confirm Pickup</div>
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          {/* <ContactInformation1 contactInformation="Contact Information" /> */}
          <div className="w-full flex flex-col gap-[20px]">
            <ButtonStateLight confirmnextstep={confirmnextstep} onContactClick={onContactClick} />
            <HeaderInstance onPromoClick={onPromoClick} />
          </div>
          {/* <ContactInformation
            contactInformation="Payment"
            propMinWidth="50px"
            propPadding="unset"
            propPadding1="unset"
          /> */}
        </div>
        <div className="checkout-details-frame">
          <div className="summary5">
            <div className="order-summary-text" style={{fontFamily:`var(--primary-font-family-bold)`,fontSize:`var(--sub-header-font-size)`}} >
              <div className="cart-details4" >Cart Details</div>
            </div>
            <div className="items-quantity-frame1" style={{fontFamily:`var(--primary-font-family)`,fontSize:`var(--primary-font-size-mini)`}} >
              <div className="items3" style={{fontFamily:`var(--primary-font-family)`,fontSize:`var(--primary-font-size-mini)`}} >ITEMS</div>
              <div className="quantity5" style={{fontFamily:`var(--primary-font-family)`,fontSize:`var(--primary-font-size-mini)`}} >Quantity</div>
            </div>
            <div className="edoneil-avvd-zlh-dow-aunsplash7">
              {basketdata && basketdata.map((item, index) => (
                <div className="edoneil-avvd-zlh-dow-aunsplash-inner1">
                  <div className="frame-parent51">
                    <div className="frame-parent52">
                      <button className="ed-o-neil-avvdzlhdowa-unsplash-wrapper7">
                        <img
                          className="ed-o-neil-avvdzlhdowa-unsplash-icon13"
                          alt=""
                          src={(item.menu_items.item_image && item.menu_items.item_image.split('media/')[1]) ? item.menu_items.item_image : 'https://placehold.co/600x400'}
                        />
                      </button>
                      <div className="frame-parent53">
                        <div className="mango-mojito-wrapper4">
                          <div className="mango-mojito5" style={{fontFamily:`var(--primary-font-family)`,fontSize:`var(--primary-font-size)`}} >{item.menu_items.name}</div>
                        </div>
                        <div className="b20" style={{fontFamily:`var(--primary-font-family)`,fontSize:`var(--primary-font-size)`}}>${(item.total_amount) * item.quantity}</div>
                      </div>
                    </div>
                    <div className="component-119">
                      <div className="minus-wrapper9">
                        <img className="minus-icon13" alt="" src={minus} />
                      </div>
                      <div className="div22" style={{fontFamily:`var(--primary-font-family)`,fontSize:`var(--primary-font-size)`}}>{item.quantity}</div>
                      <div className="add-wrapper9">
                        <img className="add-icon14" alt="" src={add} />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <Summary
            button="Proceed to Payment"
            propWidth="unset"
            propMinWidth="unset"
            propAlignSelf="stretch"
            propOpacity="0.5"
            basket_summary={summarydata}
            proceedtopayment={proceedtopayment}
            screen={"checkout"}
          />
        </div>
      </div>
    </section>
  );
};

export default Button;
