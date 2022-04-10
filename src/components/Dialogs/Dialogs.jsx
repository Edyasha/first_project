import React from "react";
import cl from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

  let dialogsElement = props.data.map((dialog) => (
    <DialogItem id={dialog.id} name={dialog.name} key={dialog.id} />
  ));

  let messagesElements = props.message.map((message) => (
    <Message id={message.id} message={message.message} key={message.id} />
  ));

  return (
    <div className={cl.dialogs}>
      <div className={cl.dialogs_item}>
        {dialogsElement}
      </div>
      <div className={cl.messages}>
        {messagesElements}
      </div>
    </div>
  );
};

export default Dialogs;
