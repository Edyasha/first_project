import React from "react";
import cl from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
  return (
    <div>
      <div>
        <img src="https://cdn.pixabay.com/photo/2017/02/08/17/24/fantasy-2049567__480.jpg" />
      </div>
      <div>ava + description</div>
      <MyPosts />
    </div>
  );
};

export default Profile;
