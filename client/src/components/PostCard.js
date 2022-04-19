import { ChatAlt2Icon, ShareIcon, ThumbUpIcon } from "@heroicons/react/outline";
import React from "react";
import PostServices from "../services/PostServices";
import { useSelector } from "react-redux";

function PostCard({ post }) {
  console.log(post);
  const postId = post._id;
  const userId = useSelector((state) => state.user.userId);
  const LikeUnlikePostHandler = () => {
    PostServices.likePost(postId, userId).then((res) => {
      console.log(res);
    });
  };
  return (
    <div className="max-w-2xl mx-auto border-b border-gray-200 p-3 pb-4">
      <div className="flex space-x-4 items-center">
        <img
          src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"
          alt="user"
          className="h-16 w-16 rounded-full"
        />
        <div>
          <h3 className="font-bold text-lg hover:underline cursor-pointer">
            Andrew
          </h3>
          <p className="flex space-x-2 items-center text-xs text-gray-400">
            <span>Posted 3h</span>
          </p>
        </div>
      </div>

      <div className="mt-3 pb-5">
        <p className="font-normal text-lg">{post?.description}</p>
      </div>

      <div className="grid grid-cols-3 ">
        <button className="post_action_btn" onClick={LikeUnlikePostHandler}>
          <ThumbUpIcon className="h-4" />
          <span>Like</span>
        </button>
        <button className="post_action_btn">
          <ChatAlt2Icon className="h-4" />
          <span>Comments</span>
        </button>
        <button className="post_action_btn">
          <ShareIcon className="h-4" />
          <span>Share</span>
        </button>
      </div>
    </div>
  );
}

export default PostCard;
