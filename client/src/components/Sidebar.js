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
  PencilAltIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Logo from "../assets/twitter-clone.png";

function Sidebar({ setopenModel }) {
  const user = useSelector((state) => state.user);
  console.log("sidebar", user);
  return (
    <div className="h-full">
      <div className="xl:px-3">
        <img
          src={Logo}
          alt="twitter-clone"
          className="w-auto h-14 p-2  cursor-pointer hover:bg-gray-100 rounded-full"
        />
      </div>
      <div className="flex flex-col items-center space-y-10 h-full mt-4">
        <div className="space-y-5 p-2 h-full">
          <MenuItem link="/" Icon={HomeIcon} label="Home" />
          <MenuItem link="/messages" Icon={ChatIcon} label="Messages" />
          <MenuItem
            link="/notifications"
            Icon={BellIcon}
            label="Notification"
          />

          <MenuItem link="/profile" Icon={SearchIcon} label="Search" />
          <MenuItem link="/profile" Icon={UserIcon} label="Profile" />
          <MenuItem link="/more" Icon={DotsCircleHorizontalIcon} label="More" />
          <MenuItem link="/settings" Icon={CogIcon} label="Settings" />

          <div className="pt-10">
            <button
              className="flex items-center bg-blue-500 text-white w-12 h-12 xl:w-full justify-center space-x-4 cursor-pointer group hover:bg-blue-600 rounded-full"
              onClick={() => {
                setopenModel(true);
              }}
            >
              <PencilAltIcon className="h-6 w-6" />
              <span className="text-lg hidden xl:inline font-normal">Post</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;

export const MenuItem = ({ label, Icon, link }) => {
  return (
    <Link
      to={link}
      className="flex items-center justify-center xl:justify-start space-x-4 cursor-pointer p-2 group hover:bg-gray-100 rounded-full"
    >
      <Icon className="h-7 stroke-slate-900" />
      <h4 className="text-lg hidden xl:inline font-normal">{label}</h4>
    </Link>
  );
};
