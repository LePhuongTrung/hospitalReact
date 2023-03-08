import { createSlice } from "@reduxjs/toolkit";

const reduxSlice = createSlice({
  name: "redux",
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

export const { setLoggedInUser, logOut } = reduxSlice.actions;

export default reduxSlice.reducer;

export const selectCurrentRole = (state) => state.role;
export const selectCurrentToken = (state) => state.token;
