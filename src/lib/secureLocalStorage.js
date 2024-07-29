import secureLocalStorage from "react-secure-storage";

// add accessToken to local storage
export const storeAccessToken = (accessToken) => {
  secureLocalStorage.setItem(
    import.meta.env.VITE_SECURE_LOCAL_STORAGE_PREFIX,
    accessToken
  );
};

// get Access token
export const getAccessToken = () => {
  const accessToken = secureLocalStorage.getItem(
    import.meta.env.VITE_SECURE_LOCAL_STORAGE_PREFIX
  );
  return accessToken;
};

// remove access token
export const removeAccessToken = () => {
  secureLocalStorage.removeItem(
    import.meta.env.VITE_SECURE_LOCAL_STORAGE_PREFIX
  );
};