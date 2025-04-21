import { LoggedOut } from "../redux/appSlice";
// import Store from "../store/index";
import {store} from '../store/store';
import axios from "axios";

const options = {
  baseURL: 'https://jsonplaceholder.typicode.com',
  headers: {
    "Content-Type": "application/json",
    // Authorization: store.getState().app.authToken, // Jest for testing not working
  },
};

const axiosInstance = axios.create(options);

axiosInstance.interceptors.request.use((config) => {
  console.log(config.url, " - request -", config.data);

  return config;
});

axiosInstance.interceptors.response.use(
  (response) => {
    if (response?.data?.messages && response?.config?.withoutToast !== true) {
      response.data.messages?.forEach((message: any) => {
        console.log(message.message, message.type);
        // showToast(message.message, message.type);
      });
    }
    return response;
  },
  (error) => {
    console.log(
      error.response.config.url,
      "- error response -",
      error.response?.data
    );

    if (error.response?.status === 401) {
      console.log
      // showToast("Unauthorized", ToastColorEnum.Error);

      store.dispatch(LoggedOut());
    } else if (error.response?.data) {
      error.response?.data.Messages?.forEach((message: any) => {
        console.log(message.message, message.type);
        // showToast(message.message, message.type);
      });
    } else {
      console.log("An error occurred", error);
      // showToast("An error occurred ", ToastColorEnum.Error);
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
