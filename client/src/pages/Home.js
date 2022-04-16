import React, { useState } from "react";
import CreatePost from "./../components/CreatePost";
import PostCard from "./../components/PostCard";

function Home() {
  const [posts, setposts] = useState([]);

  return (
    <div>
      <CreatePost />
      <div className="space-y-2 mt-4 pb-10 ">
        {posts?.map((post) => (
          <PostCard key={post._id} post={post} />
        ))}
      </div>
    </div>
  );
}

export default Home;
