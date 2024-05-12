export const setData = (data) => {
    return { type: 'SET_DATA', payload: data };
  };

export const updateData  = (data) => {
    return { type: 'UPDATE_DATA', payload: data  };
  };

export const setMenu = (data) => {
    return { type: 'SET_MENU', payload: data };
  };

export const setFooditems = (data) => {
  return { type: 'SET_FOOD_ITEMS', payload: data };
};

export const setItemTag = (data) => {
  return { type: 'SET_ITEM_TAG', payload: data };
};

export const setOrders = (data) => {
  return { type: 'SET_ORDERS', payload: data };
};

export const setOrderssettting = (data) => {
  return { type: 'SET_ORDERS_s', payload: data };
};

export const setLocation = (data) => {
  return { type: 'SET_LOCATION', payload: data };
};

export const setDefaulttax = (data) => {
  return { type: 'SET_DEFAULT_TAX', payload: data };
};

export const setAdminUserdata = (data) => {
  return { type: 'SET_ADMIN_USER_DATA', payload: data };
};

export const setLoginInfo = (data) => {
  return { type: 'SET_LOG_IN_INFO', payload: data };
};

export const setLocationInfoByid = (data) => {
  return { type: 'SET_LOCATION_INFO_BY_ID', payload: data };
};

export const setBasketcount = (data) => {
  return { type: 'SET_BASKET_COUNT', payload: data };
};

export const setUserdata = (data) => {
  return { type: 'SET_USER_DATA', payload: data };
};

export const setUserAddressdata = (data) => {
  return { type: 'SET_USER_ADDRESS_DATA', payload: data };
};

export const setReset = (data) => {
  return { type: 'RESET_STATE', payload: data };
};

export const setCredentials = (data) => {
  return { type: 'SET_CREDENTIALS', payload: data };
};