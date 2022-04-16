import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

function Layout() {
  return (
    <div className="">
      <Header />
      <main className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5">
          <Sidebar />
          <div className="md:col-span-2 lg:col-span-3 w-full ">
            <Outlet />
          </div>
          <div></div>
        </div>
      </main>
    </div>
  );
}

export default Layout;
