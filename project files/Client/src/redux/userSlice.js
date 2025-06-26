import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  _id: "",
  role: "",
  profilePicture: ""
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signinRedux: (state, action) => {
      // console.log(action.payload.data);
      // state.user = action.payload.data;
      state._id = action.payload.data._id;
      state.role = action.payload.data.role;
      state.profilePicture = action.payload.data.profilePicture;
    },
    logoutRedux: (state, action) => {
      state._id = "";
      state.role = "";
      state.profilePicture = "";
    },
  },
});

export const { signinRedux,logoutRedux } = userSlice.actions;

export default userSlice.reducer;
