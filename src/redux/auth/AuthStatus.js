import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { role: null, token: null, roomNumber: null },
  reducers: {
    setLoggedInUser: (state, action) => {
      const { token, role, email } = action.payload;
      state.role = role;
      state.token = token;
      state.email = email;
    },
    logOut: (state, action) => {
      state.role = null;
      state.token = null;
      state.email = null;
      state.roomNumber = null;
    },
    setWorkInUser: (state, action) => {
      const { roomNumber } = action.payload;
      state.roomNumber = roomNumber;
    },
  },
});

export const { setLoggedInUser, logOut, setWorkInUser } = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentRole = (state) => state.role;
export const selectCurrentToken = (state) => state.token;
export const selectCurrentEmail = (state) => state.email;
export const selectRoom = (state) => state.roomNumber;
