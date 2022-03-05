import React from "react";
import cl from "./Profile.module.css";

const Profile = () => {
  return (
    <div className={cl.content}>
      <div>
        <img src="https://cdn.pixabay.com/photo/2017/02/08/17/24/fantasy-2049567__480.jpg" />
      </div>
      <div>ava + description</div>
      <div>
        My posts
        <div>New post</div>
        <div className={cl.posts}>
          <div className={cl.item}>Post 1</div>
          <div className={cl.item}>Post 2</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
