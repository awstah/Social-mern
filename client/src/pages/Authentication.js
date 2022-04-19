import React, { useState } from "react";
import {
  CheckIcon,
  LockClosedIcon,
  MailIcon,
  UserIcon,
  XCircleIcon,
} from "@heroicons/react/outline";
import AuthService from "./../services/AuthServices";
import { useDispatch } from "react-redux";
import { addUser } from "../features/slices/UserSlice";
import { useNavigate } from "react-router-dom";

function Authentication() {
  const [isLogin, setisLogin] = useState(true);
  const [isAvailble, setisAvailble] = useState(null);
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const onHandleChange = (e) => {
    let value = e.target.value;
    setForm({ ...form, [e.target.name]: value });
  };

  const onCheckUsername = (e) => {
    e.preventDefault();
    let value = e.target.value;
    setForm({ ...form, [e.target.name]: value });
    AuthService.checkUsername(form).then((res) => {
      if (res.data === "username availble") {
        setisAvailble(true);
      }
      if (res.data === "username already taken") {
        setisAvailble(false);
      }
    });
  };

  const onSubmitLogin = (e) => {
    e.preventDefault();
    AuthService.login(form)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("userId", res.data._id);
      })
      .finally(() => {
        navigate("/");
      })
      .catch((error) => {
        alert(error);
      });
  };

  const onSubmitRegister = (e) => {
    e.preventDefault();
    AuthService.register(form)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("userId", res.data._id);
      })
      .finally(() => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="w-full h-screen mt-16 overflow-hidden">
      <div className="w-full sm:max-w-md mx-auto md:border rounded-md py-2 px-5 ">
        <h2 className="text-4xl text-center font-medium my-6">
          {isLogin ? "Welcome back! 👋" : "Register 😎"}
        </h2>
        <form
          onSubmit={isLogin ? onSubmitLogin : onSubmitRegister}
          className="space-y-3 pb-4"
        >
          {!isLogin && (
            <div className="input_container">
              <UserIcon className="input_icon" />
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
          )}
          <div className="input_container">
            <MailIcon className="input_icon" />
            <input
              type="email"
              placeholder="Email"
              name="email"
              className="input"
              value={form.email}
              onChange={onHandleChange}
            />
          </div>
          <div className="input_container">
            <LockClosedIcon className="input_icon" />
            <input
              type="password"
              placeholder="Password"
              name="password"
              className="input"
              value={form.password}
              onChange={onHandleChange}
            />
          </div>

          <button className="block_btn">
            {isLogin ? "Login" : "Register"}
          </button>
        </form>

        <p className="text-xs text-gray-600">
          {isLogin ? "Dont have an account? " : "You have an account? "}
          <span
            className="text-black font-semibold cursor-pointer"
            onClick={() => {
              setisLogin(!isLogin);
            }}
          >
            {isLogin ? "Register" : "Login"}
          </span>
        </p>
      </div>
    </div>
  );
}

export default Authentication;
