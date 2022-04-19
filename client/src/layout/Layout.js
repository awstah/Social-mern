import { SearchIcon } from "@heroicons/react/outline";
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import PostModel from "../models/PostModel";

function Layout() {
  const [openModel, setopenModel] = useState(true);

  const openDialouge = () => {
    setopenModel(!openModel);
  };

  return (
    <div className="">
      <PostModel isOpen={openModel} setIsOpen={setopenModel} />
      <main className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3">
          <Sidebar openDialouge={openDialouge} />
          <div className="md:col-span-2 lg:col-span-2 w-full border-x border-gray-100 ">
            <Outlet />
          </div>
          <div className="hidden md:inline-flex h-14 items-center px-3 space-x-3">
            <div className="w-full h-10 sm:border border-gray-600 rounded-full flex items-center">
              <input
                type="text"
                className="ml-3 flex-grow outline-none text-gray-600 placeholder:text-gray-400"
                placeholder="Search..."
              />
              <SearchIcon className="hidden sm:inline h-8 bg-black text-white rounded-full p-2 mx-2 cursor-pointer" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Layout;
