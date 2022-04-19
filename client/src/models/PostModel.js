import { Dialog, Transition } from "@headlessui/react";
import {
  EmojiHappyIcon,
  LocationMarkerIcon,
  PhotographIcon,
  VideoCameraIcon,
  XIcon,
} from "@heroicons/react/outline";
import { Fragment, useState } from "react";
import { useSelector } from "react-redux";
import PostServices from "../services/PostServices";

export default function PostModel({ isOpen, setIsOpen }) {
  const [description, setdescription] = useState("");

  const userId = useSelector((state) => state.user.userId);

  console.log(userId);

  const data = {
    description,
    userId: userId,
  };

  const postSubmitHandle = async () => {
    await PostServices.createPost(data)
      .then((res) => {
        console.log(res.data);
        setdescription("");
        //add alert
      })
      .finally(() => {
        setIsOpen(false);
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
            <div className="mt-2">
              <div className=" mt-5 px-3 md:px-0 ">
                <div className="max-w-2xl mx-auto  pb-5">
                  <div className="flex space-x-5">
                    <img
                      src="https://images.unsplash.com/photo-1529068755536-a5ade0dcb4e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1162&q=80"
                      alt="user"
                      className="h-14 w-14 rounded-full"
                    />

                    <div className="w-full">
                      <div className="flex-grow rounded-xl items-center flex max-h-min ">
                        <textarea
                          value={description}
                          onChange={(e) => {
                            setdescription(e.target.value);
                          }}
                          placeholder="Write your post...."
                          className="ml-3 w-full mt-2 outline-none font-medium placeholder:text-gray-600 text-xl"
                        ></textarea>
                      </div>
                      <div className="mt-10 flex space-x-4 justify-between">
                        <div className="flex space-x-4 items-center flex-grow ">
                          <VideoCameraIcon className="upload_post_btn text-red-500" />
                          <PhotographIcon className="upload_post_btn  text-green-500" />
                          <EmojiHappyIcon className="upload_post_btn  text-yellow-500 " />
                          <LocationMarkerIcon className="upload_post_btn  text-gray-500" />
                        </div>
                        <button onClick={postSubmitHandle} className="post_btn">
                          POST
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <button onClick={() => setIsOpen(false)}>Deactivate</button>
        <button onClick={() => setIsOpen(false)}>Cancel</button>
      </Dialog>
    </>
  );
}
