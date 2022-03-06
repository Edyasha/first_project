import React from "react";
import { NavLink } from "react-router-dom";
import cl from "./Navbar.module.css";

const Navbar = (props) => {
  return (
    <nav className={cl.nav}>
      <div className={cl.item}>
        <NavLink
          to="/profile"
          className={(navData) => (navData.isActive ? cl.active : cl.item)}
        >
          Profile
        </NavLink>
      </div>
      <div className={cl.item}>
        <NavLink
          to="/dialogs"
          className={(navData) => (navData.isActive ? cl.active : cl.item)}
        >
          Messages
        </NavLink>
      </div>
      <div className={cl.item}>
        <NavLink
          to="/news"
          className={(navData) => (navData.isActive ? cl.active : cl.item)}
        >
          News
        </NavLink>
      </div>
      <div className={cl.item}>
        <NavLink
          to="/music"
          className={(navData) => (navData.isActive ? cl.active : cl.item)}
        >
          Music
        </NavLink>
      </div>
      <div className={cl.item}>
        <NavLink
          to="/settings"
          className={(navData) => (navData.isActive ? cl.active : cl.item)}
        >
          Settings
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
