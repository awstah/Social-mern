import React, { useEffect, useState } from "react";
import PostCard from "./../components/PostCard";
import PostServices from "../services/PostServices";
import CreatePost from "./../components/CreatePost";

function Home() {
  const [posts, setposts] = useState([]);
  const userId = localStorage.getItem("userId");
  console.log(posts);

  const getTimelinePosts = () => {};

  useEffect(() => {
    PostServices.getPostTimeline(userId).then((res) => {
      setposts(res.data);
    });
  }, [userId]);

  return (
    <div className="">
      <div className="h-14 flex items-center px-3 backdrop-blur-md">
        <h3 className="font-semibold">Home</h3>
      </div>
      <div className="px-5">
        <CreatePost userId={userId} />
        {posts?.map((post) => (
          <div className="mt-4">
            <PostCard key={post._id} post={post} />
            <div className="border-b border-gray-100 py-3" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
