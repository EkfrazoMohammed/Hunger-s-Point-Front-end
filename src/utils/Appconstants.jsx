// const AppConfig = APP_ENVIRONMENT == 'LIVE' ? ConfigProduction : ConfigStaging
export const base_url = "http://127.0.0.1:8000/";
// export const base_url = "https://hunger.thestorywallcafe.com/";
export const openstreetmap = "https://nominatim.openstreetmap.org";

const convertToBase64 = (imageFile) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64Image = reader.result;
      resolve(base64Image);
    };
    reader.onerror = (error) => {
      reject(error);
    };
    reader.readAsDataURL(imageFile);
  });
};

  export { convertToBase64 };


    // Function to find object by ID
  export const findObjectById = (dataList, searchId) => {
    return dataList.find(item => item.id === searchId);
  };

  export const APP_NAME = "Hunger's Point";
export const APP_LANGUAGE = "en";
export const HOME = "Home";