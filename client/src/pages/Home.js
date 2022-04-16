import React, { useEffect, useState } from "react";
import CreatePost from "./../components/CreatePost";
import PostCard from "./../components/PostCard";
import PostServices from "../services/PostServices";
import { useSelector } from "react-redux";

function Home() {
  const [posts, setposts] = useState([]);
  const userId = useSelector((state) => state.user.userId);

  const getTimelinePosts = () => {
    PostServices.getPostTimeline(userId).then((res) => {
      setposts(res.data);
    });
  };

  useEffect(() => {
    getTimelinePosts();
  }, []);

  return (
    <div>
      <CreatePost userId={userId} />
      <div className="space-y-2 mt-4 pb-10 ">
        {posts?.map((post) => (
          <PostCard key={post._id} post={post} />
        ))}
      </div>
    </div>
  );
}

export default Home;
