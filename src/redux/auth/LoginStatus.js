import { createSlice } from "@reduxjs/toolkit";

const LoginStatus = createSlice({
  name: "login",
  initialState: {},
  reducers: {
    setLoggedInUser: (state, action) => (state = action.payload),
  },
});

export const { setLoggedInUser } = LoginStatus.actions;

export default LoginStatus.reducer;
