import React, { useState } from "react";
import cl from "./Post.module.css";

const Post = (props) => {
  const [likes, setCount] = useState(0);

  return (
    <div className={cl.item}>
      <img src="https://www.meme-arsenal.com/memes/4e4e3eca35797638c567d55e62dc392e.jpg" />
      {props.message}
      <div>
        <button onClick={() => setCount(likes + 1)}>like</button>
        <a> {likes} </a>
      </div>
    </div>
  );
};

export default Post;
