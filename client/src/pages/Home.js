import React, { useEffect, useState } from "react";
import PostCard from "./../components/PostCard";
import PostServices from "../services/PostServices";

function Home() {
  const [posts, setposts] = useState([]);
  const userId = localStorage.getItem("userId");

  const getTimelinePosts = () => {
    PostServices.getPostTimeline(userId).then((res) => {
      setposts(res.data);
    });
  };

  useEffect(() => {
    getTimelinePosts();
  }, [userId]);

  return (
    <div className="">
      <div className="w-full h-14 flex items-center px-3 space-x-3">
        {/* <ArrowLeftIcon className="h-4" /> */}
        <h3 className="font-semibold">Home</h3>
      </div>
      {/* <CreatePost userId={userId} /> */}
      <div className="space-y-2 mt-4 pb-10 ">
        {posts?.map((post) => (
          <PostCard key={post._id} post={post} />
        ))}
      </div>
    </div>
  );
}

export default Home;
