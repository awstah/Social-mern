import axios from "axios";
import API from "../api/api";

const UserServices = {
  updateProfile(data, userId) {
    return new Promise((res, rej) => {
      axios
        .put(API.updateProfile(userId), {
          userId: userId,
          username: data.username,
          first_name: data.first_name,
          last_name: data.last_name,
          email: data.email,
          profilePicutre: data.profilePicutre,
          location: data.location,
          bio: data.bio,
        })
        .then(
          (response) => {
            return res(response);
          },
          (error) => {
            return rej(error);
          }
        );
    });
  },

  profile(userId) {
    return new Promise((res, rej) => {
      axios.get(API.profile(userId)).then(
        (response) => {
          return res(response);
        },
        (error) => {
          return rej(error);
        }
      );
    });
  },
};

export default UserServices;
