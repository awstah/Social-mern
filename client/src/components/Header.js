import React from "react";
import { ChevronDownIcon, SearchIcon } from "@heroicons/react/outline";

function Header() {
  return (
    <header className=" px-3  z-50 bg-white shadow-sm sticky top-0">
      <div className="grid grid-cols-3 h-16 bg-white  items-center max-w-7xl mx-auto">
        <div className="px-2 md:px-16">
          <h2 className="text-xl font-bold">Social</h2>
        </div>

        <div className="w-full h-10 sm:border border-gray-600 rounded-full flex items-center">
          <input
            type="text"
            className="ml-3 flex-grow outline-none text-gray-600 placeholder:text-gray-400"
            placeholder="Search..."
          />
          <SearchIcon className="hidden sm:inline h-8 bg-black text-white rounded-full p-2 mx-2 cursor-pointer" />
        </div>

        <div className="ml-auto flex items-center space-x-2 cursor-pointer">
          <img
            src="https://images.unsplash.com/photo-1529068755536-a5ade0dcb4e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1162&q=80"
            alt="user"
            className="h-10 w-10 rounded-full"
          />
          <ChevronDownIcon className="h-5 text-gray-600" />
        </div>
      </div>
    </header>
  );
}

export default Header;
