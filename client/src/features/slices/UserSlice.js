import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userId: "",
  username: "",
  first_name: "",
  last_name: "",
  email: "",
  profilePicutre: "",
  followers: [],
  followings: [],
  location: "",
  bio: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.username = action.payload.username;
      state.email = action.payload.email;
      state.userId = action.payload.userId;
    },
  },
});

export const { addUser } = userSlice.actions;
export default userSlice.reducer;
