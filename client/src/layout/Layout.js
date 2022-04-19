import { SearchIcon } from "@heroicons/react/outline";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { addUser } from "../features/slices/UserSlice";
import PostModel from "../models/PostModel";
import UserServices from "../services/UserServices";

function Layout() {
  const [openModel, setopenModel] = useState(false);
  const token = localStorage.getItem("token");
  const userId = localStorage.getItem("userId");
  const dispatch = useDispatch();

  useEffect(() => {
    UserServices.profile(userId).then((res) => {
      console.log(res);
      dispatch(
        addUser({
          userId: res.data._id,
          username: res.data.username,
          email: res.data.email,
          first_name: res.data.first_name,
          last_name: res.data.last_name,
          profilePicutre: res.data.profilePicutre,
          followers: res.data.followers,
          followings: res.data.followings,
          location: res.data.location,
          bio: res.data.bio,
        })
      );
    });
  }, [token]);

  return (
    <div className="">
      {openModel && <PostModel isOpen={openModel} setIsOpen={setopenModel} />}
      <main className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3">
          <Sidebar setopenModel={setopenModel} />
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
