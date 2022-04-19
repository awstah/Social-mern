import { Tab } from "@headlessui/react";
import React, { useState } from "react";
import UpdateProfile from "../components/setting/UpdateProfile";
import ChangePassword from "./../components/setting/ChangePassword";
import Account from "./../components/setting/Account";

function Settings() {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  let [settings] = useState({
    "Edit profile": <UpdateProfile />,
    "Change Password": <UpdateProfile />,
    Account: <UpdateProfile />,
    Others: <UpdateProfile />,
  });
  return (
    <div>
      <div className="w-full h-14 flex items-center px-3 space-x-3">
        {/* <ArrowLeftIcon className="h-4" /> */}
        <h3 className="font-semibold ">Settings</h3>
      </div>
      <div className="px-3">
        <Tab.Group>
          <Tab.List className="flex p-1 space-x-1 ">
            <Tab
              className={({ selected }) =>
                classNames(
                  "w-full py-2.5 text-sm leading-5 font-medium text-black",
                  "focus:outline-none focus:border-b-2 border-black ",
                  selected
                    ? "bg-white border-b-2 border-black"
                    : "text-gray-500  hover:text-gray-400 "
                )
              }
            >
              Edit Profile
            </Tab>
            <Tab
              className={({ selected }) =>
                classNames(
                  "w-full py-2.5 text-sm leading-5 font-medium text-black",
                  "focus:outline-none focus:border-b-2 border-black ",
                  selected
                    ? "bg-white border-b-2 border-black"
                    : "text-gray-500  hover:text-gray-400 "
                )
              }
            >
              Change Password
            </Tab>
            <Tab
              className={({ selected }) =>
                classNames(
                  "w-full py-2.5 text-sm leading-5 font-medium text-black",
                  "focus:outline-none focus:border-b-2 border-black ",
                  selected
                    ? "bg-white border-b-2 border-black"
                    : "text-gray-500  hover:text-gray-400 "
                )
              }
            >
              Account
            </Tab>
          </Tab.List>
          <Tab.Panels className="mt-2">
            <Tab.Panel className={classNames("bg-white rounded-xl p-3")}>
              <UpdateProfile />
            </Tab.Panel>
            <Tab.Panel className={classNames("bg-white rounded-xl p-3")}>
              <ChangePassword />
            </Tab.Panel>
            <Tab.Panel className={classNames("bg-white rounded-xl p-3")}>
              <Account />
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
}

export default Settings;
