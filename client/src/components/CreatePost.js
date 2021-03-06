import {
  EmojiHappyIcon,
  LocationMarkerIcon,
  PhotographIcon,
  VideoCameraIcon,
} from "@heroicons/react/outline";
import React, { useState } from "react";
import PostSevices from "../services/PostServices";

function CreatePost({ userId }) {
  const [description, setdescription] = useState("");

  const data = {
    description,
    userId: userId,
  };

  const postSubmitHandle = async () => {
    await PostSevices.createPost(data).then((res) => {
      console.log(res.data);
      setdescription("");
      //add alert
    });
  };

  return (
    <div className=" mt-5 px-3 md:px-0 ">
      <div className="max-w-2xl mx-auto border-b border-gray-200 pb-5">
        <div className="flex space-x-5">
          <img
            src="https://images.unsplash.com/photo-1529068755536-a5ade0dcb4e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1162&q=80"
            alt="user"
            className="h-14 w-14 rounded-full"
          />

          <div className="w-full">
            <div className=" flex-grow items-center flex max-h-min">
              <input
                value={description}
                onChange={(e) => {
                  setdescription(e.target.value);
                }}
                placeholder="Write your post...."
                className="ml-3 w-full mt-2 outline-none font-normal text-2xl pb-5"
              />
            </div>
            <div className="mt-5 flex space-x-4 justify-between">
              <div className="flex space-x-1 items-center flex-grow ">
                <VideoCameraIcon className="upload_post_btn " />
                <PhotographIcon className="upload_post_btn " />
                <EmojiHappyIcon className="upload_post_btn  " />
                <LocationMarkerIcon className="upload_post_btn" />
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
