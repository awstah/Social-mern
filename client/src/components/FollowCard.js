import { PlusIcon } from "@heroicons/react/outline";
import React from "react";

function FollowCard() {
  return (
    <div
      className="w-full
     h-56 bg-gray-50 p-3 flex flex-col items-center justify-center rounded-xl shadow-sm space-y-3"
    >
      <img
        src="https://images.unsplash.com/photo-1529068755536-a5ade0dcb4e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1162&q=80"
        alt="user"
        className="w-24 h-24 rounded-full"
      />
      <p className="font-extralight tracking-wider text-xl text-gray-400">
        @OWAIS
      </p>
      <button
        className="flex items-center space-x-3 text-white bg-black w-32 h-10 justify-center rounded-full
        shadow hover:shadow-xl active:scale-95 transform transition
        "
      >
        <PlusIcon className="h-6 w-6" />
        <span className="font-semibold tracking-wider">Follow</span>
      </button>
    </div>
  );
}

export default FollowCard;
