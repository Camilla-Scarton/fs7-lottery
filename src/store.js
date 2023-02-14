import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./store/authSlice";
import userReducer from "./store/userSlice";
import drawReducer from "./store/drawSlice"

export default configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    draw: drawReducer
  },
});
