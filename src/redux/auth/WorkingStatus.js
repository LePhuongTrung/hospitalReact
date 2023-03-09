import { createSlice } from "@reduxjs/toolkit";

const workSlice = createSlice({
  name: "work",
  initialState: { roomName: null },
  reducers: {
    setWorkInUser: (state, action) => {
      const { roomName } = action.payload;
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
