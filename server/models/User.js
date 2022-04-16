const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
      min: 3,
      max: 20,
      unique: true,
    },

    email: {
      type: String,
      require: true,
      max: 50,
      unique: true,
    },
    password: {
      type: String,
      require: true,
      min: 6,
    },

    profilePicutre: {
      type: String,
      default: "",
    },
    first_name: {
      type: String,
      default: "",
    },
    last_name: {
      type: String,
      default: "",
    },

    followers: {
      type: Array,
      default: [],
    },

    followings: {
      type: Array,
      default: [],
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },

    location: {
      type: String,
    },
    bio: {
      type: String,
      max: 300,
    },
    token: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
