import React from "react";
import cl from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
  return (
    <div>
      <div>
        <img src="https://cdn.pixabay.com/photo/2017/02/08/17/24/fantasy-2049567__480.jpg" />
      </div>
      <div className={cl.descriptionBlock}>
        ava + description
      </div>
    </div>
  );
};

export default ProfileInfo;
