import React from "react";
import cl from "./Post.module.css";

const Post = () => {
  return (
    <div className={cl.item}>
      <img src="https://www.meme-arsenal.com/memes/4e4e3eca35797638c567d55e62dc392e.jpg"/>
      Post 1
      <div>
        <span>like</span>
      </div>
    </div>
  );
};

export default Post;
