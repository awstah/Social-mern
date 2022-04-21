import { PlusIcon } from "@heroicons/react/outline";
import React from "react";
import UserServices from "./../services/UserServices";
import { useSelector } from "react-redux";

function FollowCard({ user }) {
  const userId = useSelector((state) => state.user.userId);
  const id = user?._id;

  const followUser = (e) => {
    e.preventDefault();
    UserServices.followUser(id, userId).then((res) => {
      console.log(res);
    });
  };
  return (
    <div
      className="w-full
     h-24 flex  items-center justify-between rounded-xl border-b border-gray-100"
    >
      <div className="flex space-x-3">
        <img
          src="https://images.unsplash.com/photo-1529068755536-a5ade0dcb4e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1162&q=80"
          alt="user"
          className="w-16 h-16 rounded-full"
        />
        <div>
          <p className="font-bold tracking-wider text-xl text-black">
            {user?.first_name + " " + user?.last_name}
          </p>
          <p className="font-extralight tracking-wider text-sm text-gray-400">
            @ {user?.username}
          </p>
        </div>
      </div>
      <button
        onClick={followUser}
        className="flex items-center space-x-3 text-white bg-black w-24 h-8 justify-center rounded-full
        shadow hover:shadow-xl active:scale-95 transform transition
        "
      >
        <PlusIcon className="h-4 w-4" />
        <span className="font-semibold tracking-wider">Follow</span>
      </button>
    </div>
  );
}

export default FollowCard;
