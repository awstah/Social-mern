import React, { useState } from "react";
import { Dialog } from "@headlessui/react";
import {
  CameraIcon,
  CheckIcon,
  PhotographIcon,
  XCircleIcon,
  XIcon,
} from "@heroicons/react/outline";
import AuthService from "../services/AuthServices";
import UserServices from "../services/UserServices";
import { useSelector } from "react-redux";
import UpdateProfile from "./../components/setting/UpdateProfile";

function ProfileEdit({ isOpen, setIsOpen }) {
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
    <>
      <Dialog
        as="div"
        className="fixed inset-0 z-10 overflow-y-auto"
        onClose={() => setIsOpen(false)}
        open={isOpen}
      >
        <div className="min-h-screen px-4 text-center">
          <Dialog.Overlay className="fixed inset-0 bg-gray-500/40" />

          {/* This element is to trick the browser into centering the modal contents. */}
          <span className="inline-block h-screen" aria-hidden="true">
            &#8203;
          </span>

          <div className="inline-block w-full max-w-xl  p-6 my-8 overflow-hidden text-left  transition-all transform bg-white shadow-xl rounded-2xl">
            <Dialog.Title
              as="h3"
              className="text-lg font-medium leading-6 text-gray-900"
            >
              <button onClick={() => setIsOpen(false)}>
                <XIcon className="h-6" />
              </button>
            </Dialog.Title>
            <UpdateProfile />
          </div>
        </div>
      </Dialog>
    </>
  );
}

export default ProfileEdit;
