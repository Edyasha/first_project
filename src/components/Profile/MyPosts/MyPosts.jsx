import React from "react";
import cl from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let posts = [
    { id: 1, message: "Hi, how are you?", likesCount: 12 },
    { id: 2, message: "It's my first post!", likesCount: 8 },
    { id: 3, message: "Yo!" },
    { id: 4, message: "A History Lesson." },
    { id: 5, message: "The Wrong Lesson of Munich!" },
    { id: 6, message: "Will we learn our lesson?" },
  ];

  let postsElements = posts.map((post) => {
    return <Post id={post.id} key={post.id} message={post.message} />;
  });

  return (
    <div className={cl.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div className={cl.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
