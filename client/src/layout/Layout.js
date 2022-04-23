import { SearchIcon } from "@heroicons/react/outline";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import Searchbar from "../components/Searchbar";
import Sidebar from "../components/Sidebar";
import { addUser } from "../features/slices/UserSlice";
import PostModel from "../models/PostModel";
import UserServices from "../services/UserServices";
import FollowCard from "./../components/FollowCard";

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
    <div className=" w-full h-screen overflow-hidden max-w-6xl mx-auto">
      {openModel && <PostModel isOpen={openModel} setIsOpen={setopenModel} />}

      <main className="flex gap-3 md:container md:mx-auto">
        <div className="w-14 xl:w-48 ">
          <Sidebar setopenModel={setopenModel} />
        </div>
        <div className="flex-1 border-x border-gray-100 h-screen">
          <Outlet />
        </div>
        <div className="hidden lg:inline-flex lg:w-72">
          <Searchbar />
        </div>
      </main>
    </div>
  );
}

export default Layout;
