const initialState = {
    data: [],
    menu:[],
    food_items:[],
    item_tag:[],
    orders:[],
    orders_s:[],
    location:[],
    default_tax:[],
    admin_profile_data:[],
    login_data:{},
    locationbyid:[],
    basket_count:0,
    user_data:[],
    user_address_data:[],
  };
  
  const dataReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_DATA':
        return { ...state, data: action.payload };
      case 'UPDATE_DATA':
        return { ...state, data: action.payload };
      case 'SET_MENU':
        return { ...state, menu: action.payload };
      case 'SET_FOOD_ITEMS':
        return { ...state, food_items: action.payload };
      case 'SET_ITEM_TAG':
        return { ...state, item_tag: action.payload };
      case 'SET_ORDERS':
        return { ...state, orders: action.payload };
      case 'SET_ORDERS_s':
        return { ...state, orders_s: action.payload };
      case 'SET_LOCATION':
        return { ...state, location: action.payload };
      case 'SET_DEFAULT_TAX':
        return { ...state, default_tax: action.payload };
      case 'SET_ADMIN_USER_DATA':
        return { ...state, admin_profile_data: action.payload };
      case 'SET_LOG_IN_INFO':
        return { ...state, login_data: action.payload };
      case 'SET_LOCATION_INFO_BY_ID':
        return { ...state, locationbyid: action.payload };
      case 'SET_BASKET_COUNT':
        return { ...state, basket_count: action.payload };
      case 'SET_USER_DATA':
        return { ...state, user_data: action.payload };
      case 'SET_USER_ADDRESS_DATA':
        return { ...state, user_address_data: action.payload };
      case 'RESET_STATE':
        return initialState;
      default:
        return state;
    }
  };
  
  export default dataReducer;

  