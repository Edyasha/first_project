import React from "react";
import { NavLink } from "react-router-dom";
import cl from "./Dialogs.module.css";

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;

  return (
    <div className={cl.dialog}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

const Message = (props) => {
  return (
    <div className={cl.message}>{props.message}</div>
  );
};

const Dialogs = (props) => {
  return (
    <div className={cl.dialogs}>
      <div className={cl.dialogs_item}>
        <DialogItem name="Edison" id="1" />
        <DialogItem name="Maksim" id="2" />
        <DialogItem name="Viktoria" id="3" />
        <DialogItem name="Mihail" id="4" />
        <DialogItem name="Evridika" id="5" />
        <DialogItem name="Nataliya" id="6" />
      </div>
      <div className={cl.messages}>
        <Message message="Hi!" />
        <Message message="How is your it-kamasutra?" />
        <Message message="Yo!" />
      </div>
    </div>
  );
};

export default Dialogs;
