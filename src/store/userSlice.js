import { createSlice } from "@reduxjs/toolkit";

export const userSlice = () => {
  return createSlice({
    name: "user",
    initialState: { info: null },
    reducers: {
      setUserData: (state, action) => {
        console.log(action.payload);
        state.info = action.payload;
      },
    },
  });
};

// Action creators are generated for each case reducer function
export const { setUserData } = userSlice().actions;

export default userSlice().reducer;
