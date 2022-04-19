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
      state.first_name = action.payload.first_name;
      state.last_name = action.payload.last_name;
      state.profilePicutre = action.payload.profilePicutre;
      state.location = action.payload.location;
      state.bio = action.payload.bio;
      state.followers = action.payload.followers;
      state.followings = action.payload.followings;
    },
  },
});

export const { addUser } = userSlice.actions;
export default userSlice.reducer;
