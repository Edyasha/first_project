import React from "react";
import cl from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postsElements = props.posts.map((post) => {
    return <Post id={post.id} key={post.id} message={post.message} />;
  });

  let newPostElement = React.createRef();

  let addPost = () => {;
    props.addPost();
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  };

  return (
    <div className={cl.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea
            onChange={onPostChange}
            ref={newPostElement}
            value={props.newPostText}
          />
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
      <div className={cl.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
