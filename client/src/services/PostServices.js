import axios from "axios";
import API from "../api/api";

const PostServices = {
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

  getPostTimeline(userId) {
    return new Promise((res, rej) => {
      axios
        .post(API.getTimeline(), {
          userId,
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

  likePost(postId, userId) {
    return new Promise((res, rej) => {
      axios
        .put(API.likePost(postId), {
          userId: userId,
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

export default PostServices;
