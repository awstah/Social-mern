import { CogIcon } from "@heroicons/react/outline";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import ProfileEdit from "./../models/ProfileEdit";

function Profile() {
  const user = useSelector((state) => state.user);
  const [isOpen, setisOpen] = useState(false);
  return (
    <div>
      {isOpen && <ProfileEdit isOpen={isOpen} setIsOpen={setisOpen} />}
      <div className="w-full h-14 flex items-center px-3 space-x-3">
        {/* <ArrowLeftIcon className="h-4" /> */}
        <h3 className="font-semibold">Profile</h3>
      </div>
      <div className="px-4 flex justify-between">
        <div className="flex flex-col space-y-3">
          <img
            src="https://images.unsplash.com/photo-1529068755536-a5ade0dcb4e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1162&q=80"
            alt="user"
            className="h-20 w-20 rounded-full"
          />
          <div className="space-y-1">
            <h3 className="font-semibold text-2xl ">
              {user.first_name + " " + user.last_name}
            </h3>
            <p className="uppercase text-gray-400 text-xs">@ {user.username}</p>
          </div>
          <p className="text-lg text-gray-700 font-semibold">{user?.bio}</p>

          <div className="flex space-x-6">
            <p className="font-normal text-lg">
              <span className="font-medium">{user.followers.length}</span>{" "}
              Followers
            </p>
            <p className="font-normal text-lg">
              <span className="font-medium">{user.followings.length}</span>{" "}
              Followings
            </p>
          </div>
        </div>

        <button
          onClick={() => {
            setisOpen(true);
          }}
          className="border border-gray-200 w-32 h-10 flex justify-center items-center rounded-xl text-gray-400 space-x-2 hover:text-gray-500 inner"
        >
          <CogIcon className="h-6" />
          <span>Edit Profile</span>
        </button>
      </div>
    </div>
  );
}

export default Profile;
