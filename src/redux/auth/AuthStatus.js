import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { role: null, token: null, roomName: null },
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
    setWorkInUser: (state, action) => {
      const { roomName } = action.payload;
      state.roomName = roomName;
    },
  },
});

export const { setLoggedInUser, logOut, setWorkInUser } = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentRole = (state) => state.role;
export const selectCurrentToken = (state) => state.token;
