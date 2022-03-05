import React from "react";
import './Profile.css';

const Profile = () => {
  return (
    <div className="content">
      <div>
        <img src="https://cdn.pixabay.com/photo/2017/02/08/17/24/fantasy-2049567__480.jpg" />
      </div>
      <div>ava + description</div>
      <div>
        My posts
        <div>New post</div>
        <div>
          <div>Post 1</div>
          <div>Post 2</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
