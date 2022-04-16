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

function Sidebar() {
  return (
    <div className="hidden px-10 border-r border-gray-100 h-screen -mt-16 pt-20 pb-5 md:flex flex-col justify-between sticky top-0">
      <div className="space-y-5">
        <Link
          to="/"
          className="flex items-center space-x-4 cursor-pointer px-4 py-2 group hover:bg-gray-100 rounded-xl"
        >
          <HomeIcon className="h-7 md:h-8" />
          <h4 className="text-lg font-bold">Home</h4>
        </Link>

        <div className="flex items-center space-x-4 cursor-pointer px-4 py-2 group hover:bg-gray-100 rounded-xl">
          <DocumentTextIcon className="h-7 md:h-8 " />
          <h4 className="text-lg font-medium">Feeds</h4>
        </div>

        <div className="flex items-center space-x-4 cursor-pointer px-4 py-2 group hover:bg-gray-100 rounded-xl">
          <ChatIcon className="h-7 md:h-8 " />
          <h4 className="text-lg font-medium">Messages</h4>
        </div>

        <div className="flex items-center space-x-4 cursor-pointer px-4 py-2 group hover:bg-gray-100 rounded-xl">
          <BellIcon className="h-7 md:h-8 " />
          <h4 className="text-lg font-medium">Notification</h4>
        </div>

        <Link
          to="/profile"
          className="flex items-center space-x-4 cursor-pointer px-4 py-2 group hover:bg-gray-100 rounded-xl"
        >
          <UserIcon className="h-7 md:h-8 " />
          <h4 className="text-lg font-medium">Profile</h4>
        </Link>

        <div className="flex items-center space-x-4 cursor-pointer px-4 py-2 group hover:bg-gray-100 rounded-xl">
          <DotsCircleHorizontalIcon className="h-7 md:h-8 " />
          <h4 className="text-lg font-medium">More</h4>
        </div>
      </div>
      <div className="flex items-center space-x-4 cursor-pointer px-4 py-2 group hover:bg-gray-100 rounded-xl">
        <CogIcon className="h-7 md:h-8 " />
        <h4 className="text-lg font-medium">Settings</h4>
      </div>
    </div>
  );
}

export default Sidebar;
