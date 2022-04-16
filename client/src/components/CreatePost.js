import {
  EmojiHappyIcon,
  LocationMarkerIcon,
  PhotographIcon,
  VideoCameraIcon,
} from "@heroicons/react/outline";
import React, { useState } from "react";
import PostSevices from "../services/PostServices";
import { useSelector } from "react-redux";

function CreatePost() {
  const [description, setdescription] = useState("");
  const user = useSelector((state) => state.user);

  console.log(user);

  const data = {
    description,
    userId: user.userId,
  };

  const postSubmitHandle = async () => {
    await PostSevices.createPost(data).then((res) => {
      console.log(res.data);
    });
  };

  return (
    <div className=" mt-5 px-3 md:px-0 ">
      <div className="max-w-xl mx-auto border-b border-gray-200 pb-5">
        <div className="flex space-x-5">
          <img
            src="https://images.unsplash.com/photo-1529068755536-a5ade0dcb4e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1162&q=80"
            alt="user"
            className="h-14 w-14 rounded-full"
          />

          <div className="w-full">
            <div className="border border-gray-100 flex-grow rounded-xl items-center flex max-h-min">
              <textarea
                value={description}
                onChange={(e) => {
                  setdescription(e.target.value);
                }}
                placeholder="Write your post...."
                className="ml-3 w-full mt-2 outline-none font-semibold"
              ></textarea>
            </div>
            <div className="mt-5 flex space-x-4 justify-between">
              <div className="flex space-x-4 items-center flex-grow ">
                <VideoCameraIcon className="upload_post_btn bg-red-100 text-red-500" />
                <PhotographIcon className="upload_post_btn bg-green-100 text-green-500" />
                <EmojiHappyIcon className="upload_post_btn bg-yellow-100 text-yellow-500 " />
                <LocationMarkerIcon className="upload_post_btn bg-gray-100 text-gray-500" />
              </div>

              <button onClick={postSubmitHandle} className="post_btn">
                POST
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreatePost;
