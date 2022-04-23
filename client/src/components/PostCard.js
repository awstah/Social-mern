import {
  ChatAlt2Icon,
  HeartIcon,
  ShareIcon,
  ThumbUpIcon,
} from "@heroicons/react/outline";
import React, { useEffect, useState } from "react";
import PostServices from "../services/PostServices";
import { useSelector } from "react-redux";
import UserServices from "./../services/UserServices";
import moment from "moment";

function PostCard({ post }) {
  const [userInfo, setuserInfo] = useState();
  const [isLike, setisLike] = useState(false);
  const [likes, setlikes] = useState([]);
  const postId = post._id;
  const userId = post.userId;

  const LikeUnlikePostHandler = () => {
    PostServices.likePost(postId, userId).then((res) => {
      if (res.data === "post has been liked") {
        setisLike(true);
      } else {
        setisLike(false);
      }
    });
  };

  const checkPostIsLike = () => {
    PostServices.checkPostLike(postId, userId).then((res) => {
      console.log(res);
      if (res.data.result[0] === true) {
        setisLike(true);
      } else {
        setisLike(false);
      }

      setlikes(res.data.result[1]);
    });
  };

  const getProfileData = () => {
    UserServices.profile(userId).then((res) => {
      setuserInfo(res.data);
    });
  };

  useEffect(() => {
    getProfileData();
    checkPostIsLike();
  }, [isLike]);

  return (
    <div className="w-full pt-3">
      <div className="flex space-x-4 items-center">
        <img
          src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"
          alt="user"
          className="h-16 w-16 rounded-full"
        />
        <div>
          <h3 className="font-bold text-lg hover:underline cursor-pointer">
            {userInfo?.first_name || userInfo?.username}
          </h3>
          <p className="flex space-x-2 items-center text-xs text-gray-400">
            <span>{moment(post.createdAt).fromNow()}</span>
          </p>
        </div>
      </div>

      <div className="mt-3 pb-5">
        <p className="text-lg">{post?.description}</p>
      </div>

      <div className="grid grid-cols-3 ">
        <button className="post_action_btn" onClick={LikeUnlikePostHandler}>
          <HeartIcon className={`h-5 ${isLike && "text-rose-500"}`} />
          <span className={`${isLike && "text-rose-500"}`}>{likes.length}</span>
        </button>

        <button className="post_action_btn">
          <ChatAlt2Icon className="h-5" />
          <span>12</span>
        </button>
        <button className="post_action_btn">
          <ShareIcon className="h-5" />
        </button>
      </div>
    </div>
  );
}

export default PostCard;
