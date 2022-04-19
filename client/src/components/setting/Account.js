import React from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../../features/slices/UserSlice";
import { useNavigate } from "react-router-dom";

function Account() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    dispatch(
      addUser({
        userId: "",
        username: "",
        email: "",
      })
    );
    navigate("/authentication");
  };
  return (
    <div className="space-y-6">
      <div className=" flex justify-between items-center">
        <p className="text-gray-500 font-normal">Deactivate your account</p>
        <button className="w-72 h-10 bg-orange-600 rounded-md font-normal text-white tracking-wide shadow-sm hover:shadow-lg active:scale-95 transform transition-all">
          Deactivate
        </button>
      </div>

      <div className=" flex justify-between items-center">
        <p className="text-gray-500 font-normal">Delete your account</p>
        <button className="w-72 h-10 bg-rose-600 rounded-md font-normal text-white tracking-wide shadow-sm hover:shadow-lg active:scale-95 transform transition-all">
          Delete
        </button>
      </div>

      <div className=" flex justify-between items-center">
        <p className="text-gray-500 font-normal">Logout your account</p>
        <button
          onClick={logoutHandler}
          className="w-72 h-10 bg-rose-600 rounded-md font-normal text-white tracking-wide shadow-sm hover:shadow-lg active:scale-95 transform transition-all"
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Account;
