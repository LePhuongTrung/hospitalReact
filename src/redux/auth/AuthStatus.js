import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { role: null, token: null },
  reducers: {
    setLoggedInUser: (state, action) => {
      const { token, role } = action.payload;
      state.role = role;
      state.token = token;
    },
    logOut: (state, action) => {
      state.role = null;
      state.token = null;
    },
  },
});

export const { setLoggedInUser, logOut } = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentRole = (state) => state.auth.role;
export const selectCurrentToken = (state) => state.auth.token;
