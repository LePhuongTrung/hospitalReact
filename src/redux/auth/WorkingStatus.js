import { createSlice } from "@reduxjs/toolkit";

const workSlice = createSlice({
  name: "work",
  initialState: { role: null, token: null },
  reducers: {
    setWorkInUser: (state, action) => {
      const { roomName } = action.payload;
      console.log("🚀 ~ file: WorkingStatus.js:9 ~ roomName:", roomName);
      state.roomName = roomName;
    },
    checkOut: (state, action) => {
      state.roomName = null;
    },
  },
});

export const { setWorkInUser, checkOut } = workSlice.actions;

export default workSlice.reducer;

export const selectRoom = (state) => state.roomName;
