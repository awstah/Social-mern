import React from "react";
import {
  BellIcon,
  ChatIcon,
  ChevronUpIcon,
  CogIcon,
  DocumentTextIcon,
  DotsCircleHorizontalIcon,
  DotsVerticalIcon,
  HomeIcon,
  UserIcon,
} from "@heroicons/react/outline";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Sidebar({ setopenModel }) {
  const user = useSelector((state) => state.user);
  console.log("sidebar", user);
  return (
    <div className="hidden pt-2 h-screen md:flex flex-col items-center space-y-10 sticky top-0 pb-5">
      <div className="h-14 flex items-center space-x-3">
        <h2 className="text-xl font-bold text-center">Social</h2>
      </div>
      <div className="flex flex-col space-y-20 h-full">
        <div className="space-y-3">
          <Link
            to="/"
            className="flex items-center space-x-4 cursor-pointer px-4 py-2 group hover:bg-gray-100 rounded-xl"
          >
            <HomeIcon className="h-7 md:h-8 text-gray-500" />
            <h4 className="text-lg font-normal">Home</h4>
          </Link>

          <div className="flex items-center space-x-4 cursor-pointer px-4 py-2 group hover:bg-gray-100 rounded-xl">
            <DocumentTextIcon className="h-7 md:h-8 text-gray-500" />
            <h4 className="text-lg font-normal">Feeds</h4>
          </div>

          <div className="flex items-center space-x-4 cursor-pointer px-4 py-2 group hover:bg-gray-100 rounded-xl">
            <ChatIcon className="h-7 md:h-8 text-gray-500" />
            <h4 className="text-lg font-normal">Messages</h4>
          </div>

          <div className="flex items-center space-x-4 cursor-pointer px-4 py-2 group hover:bg-gray-100 rounded-xl">
            <BellIcon className="h-7 md:h-8 text-gray-500" />
            <h4 className="text-lg font-normal">Notification</h4>
          </div>

          <Link
            to="/profile"
            className="flex items-center space-x-4 cursor-pointer px-4 py-2 group hover:bg-gray-100 rounded-xl"
          >
            <UserIcon className="h-7 md:h-8 text-gray-500" />
            <h4 className="text-lg font-normal">Profile</h4>
          </Link>

          <div className="flex items-center space-x-4 cursor-pointer px-4 py-2 group hover:bg-gray-100 rounded-xl">
            <DotsCircleHorizontalIcon className="h-7 md:h-8 text-gray-500" />
            <h4 className="text-lg font-normal">More</h4>
          </div>

          <Link
            to="/settings"
            className="flex items-center space-x-4 cursor-pointer px-4 py-2 group hover:bg-gray-100 rounded-xl"
          >
            <CogIcon className="h-7 md:h-8 text-gray-500" />
            <h4 className="text-lg font-normal">Settings</h4>
          </Link>
        </div>

        <div className="w-full">
          <button
            className="w-full h-16 bg-blue-500 rounded-full text-white text-xl tracking-widest active:scale-95 
    transform duration-100 transition hover:bg-blue-600 hover:shadow-lg shadow-blue-600"
            onClick={() => {
              setopenModel(true);
            }}
          >
            Post
          </button>
        </div>
      </div>

      <div className="w-full h-24 flex items-center px-3 rounded-lg ">
        <div className="flex justify-between items-center w-full">
          <div className="flex items-center space-x-3">
            <img
              src="https://images.unsplash.com/photo-1529068755536-a5ade0dcb4e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1162&q=80"
              alt="user"
              className="h-16 w-16 rounded-full"
            />
            <span>
              <h3 className="capitalize text-xl font-medium">
                {user?.first_name + user?.last_name}
              </h3>
              <p className="capitalize text-sm">@{user?.username}</p>
            </span>
          </div>
          <DotsVerticalIcon className="h-5 text-gray-600 cursor-pointer" />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
