import React from "react";
import cl from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  return (
    <div className={cl.postsBlock}>
      My posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div className={cl.posts}>
        <Post message="Hi, how are you?" />
        <Post message="It's my first post!" />
      </div>
    </div>
  );
};

export default MyPosts;
