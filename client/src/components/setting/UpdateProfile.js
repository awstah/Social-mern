import {
  CameraIcon,
  CheckIcon,
  PhotographIcon,
  XCircleIcon,
} from "@heroicons/react/outline";
import React, { useState } from "react";
import UserServices from "../../services/UserServices";
import AuthService from "../../services/AuthServices";
import { useSelector } from "react-redux";

function UpdateProfile() {
  const user = useSelector((state) => state.user);

  const [form, setform] = useState({
    username: "" || user.username,
    first_name: "" || user.first_name,
    last_name: "" || user.last_name,
    email: "" || user.email,
    profilePicutre: "" || user.profilePicutre,
    location: "" || user.location,
    bio: "" || user.bio,
  });
  const [isAvailble, setisAvailble] = useState(null);

  const onCheckUsername = (e) => {
    e.preventDefault();
    let value = e.target.value;
    setform({ ...form, [e.target.name]: value });
    AuthService.checkUsername(form).then((res) => {
      if (res.data === "username availble") {
        setisAvailble(true);
      }
      if (res.data === "username already taken") {
        setisAvailble(false);
      }
    });
  };

  const onHandleChange = (e) => {
    let value = e.target.value;
    setform({ ...form, [e.target.name]: value });
  };

  const updateUserHandler = (e) => {
    e.preventDefault();
    UserServices.updateProfile(form, user.userId).then((res) => {
      console.log(res);
    });
  };

  return (
    <div className="mt-2">
      <div className="space-y-4">
        <div className="flex items-center space-x-3">
          <img
            src="https://images.unsplash.com/photo-1529068755536-a5ade0dcb4e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1162&q=80"
            alt="user"
            className="w-28 h-28 rounded-full"
          />

          <button
            className="flex items-center space-x-3 text-white bg-black p-2  justify-center rounded-md
shadow hover:shadow-xl active:scale-95 transform transition
"
          >
            <CameraIcon className="h-5 w-5" />
            <span className="tracking-wider">Upload</span>
          </button>

          <button
            className="flex items-center space-x-3 text-gray-700 bg-gray-200 p-2 justify-center rounded-md
shadow hover:shadow-xl active:scale-95 transform transition
"
          >
            <PhotographIcon className="h-5 w-5" />
            <span className="tracking-wider">Gallery</span>
          </button>
        </div>
        <form onSubmit={updateUserHandler} className="space-y-3">
          <div className="flex items-center justify-between space-x-4">
            <div className="input_container">
              <input
                name="first_name"
                type="text"
                placeholder="First Name"
                value={form.first_name}
                onChange={onHandleChange}
                className="input"
              />
            </div>
            <div className="input_container">
              <input
                name="last_name"
                type="text"
                placeholder="Last Name"
                value={form.last_name}
                onChange={onHandleChange}
                className="input"
              />
            </div>
          </div>
          <div className="input_container">
            <input
              name="email"
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={onHandleChange}
              className="input"
              disabled
            />
          </div>

          <div className="flex items-center justify-between space-x-4">
            <div className="input_container">
              <input
                type="text"
                placeholder="Username"
                name="username"
                className="input"
                value={form.username}
                onChange={onCheckUsername}
              />

              {form.username && (
                <>
                  {isAvailble ? (
                    <CheckIcon className="h-7 text-green-500 px-3" />
                  ) : (
                    <XCircleIcon className="h-7 text-red-500 px-3" />
                  )}
                </>
              )}
            </div>
            <div className="input_container">
              <input
                name="location"
                type="text"
                placeholder="Location"
                value={form.location}
                onChange={onHandleChange}
                className="input"
              />
            </div>
          </div>
          <div className="border-2 border-black flex-grow rounded-md items-center flex max-h-min">
            <textarea
              className="ml-3 w-full mt-2 outline-none "
              placeholder="Tell about your self!"
              onChange={onHandleChange}
              name="bio"
              value={form.bio}
            >
              {form.bio}
            </textarea>
          </div>

          <div className="flex justify-end">
            <button className="success_btn">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UpdateProfile;
