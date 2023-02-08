import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./store/authSlice";
import userReducer from "./store/userSlice";

export default configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
  },
});
