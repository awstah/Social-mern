import React from "react";
import {
  BellIcon,
  ChatIcon,
  CogIcon,
  DocumentTextIcon,
  DotsCircleHorizontalIcon,
  HomeIcon,
  UserIcon,
} from "@heroicons/react/outline";
import { Link } from "react-router-dom";

function Sidebar({ openDialouge }) {
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
            onClick={openDialouge}
          >
            Post
          </button>
        </div>
      </div>

      <div className="w-full h-24 bg-gray-50">
        <h2>Profile</h2>
      </div>
    </div>
  );
}

export default Sidebar;
