import axios from "axios";
import API from "../api/api";

const AuthService = {
  createPost(data) {
    return new Promise((res, rej) => {
      axios
        .post(API.createPost(), {
          userId: data.userId,
          description: data.description,
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

  getPostTimeline(data) {
    return new Promise((res, rej) => {
      axios
        .post(API.getTimeline(), {
          userId: data.userId,
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
};

export default AuthService;
