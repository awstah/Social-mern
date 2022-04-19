import React from "react";
import { useSelector } from "react-redux";

function Profile() {
  const user = useSelector((state) => state.user);
  return (
    <div>
      <div className="w-full h-14 flex items-center px-3 space-x-3">
        {/* <ArrowLeftIcon className="h-4" /> */}
        <h3 className="font-semibold">Profile</h3>
      </div>
      <div className="px-4 pb-10">
        <div className="flex flex-col items-center space-x-10">
          <div className="w-full h-44 bg-rose-400 rounded-md"></div>
          <img
            src="https://images.unsplash.com/photo-1529068755536-a5ade0dcb4e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1162&q=80"
            alt="user"
            className="h-28 w-28 rounded-full -mt-12"
          />
          <div>
            <h3 className="font-semibold text-4xl text-center ">
              {user.first_name + " " + user.last_name}
            </h3>
            <p className="text-center uppercase text-gray-400">
              @ {user.username}
            </p>
          </div>

          <div className="flex space-x-6">
            <p className="font-normal text-xl">
              <span className="font-medium">{user.followers.length}</span>{" "}
              Followers
            </p>
            <p className="font-normal text-xl">
              <span className="font-medium">{user.followings.length}</span>{" "}
              Followings
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
