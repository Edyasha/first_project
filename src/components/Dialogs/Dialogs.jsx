import React from "react";
import cl from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let dialogsData = [
    { id: 1, name: "Edison" },
    { id: 2, name: "Maksim" },
    { id: 3, name: "Viktoria" },
    { id: 4, name: "Boris" },
    { id: 5, name: "Sergey" },
    { id: 6, name: "Nataliya" },
  ];

  let dialogsElement = dialogsData.map((dialog) => (
    <DialogItem id={dialog.id} name={dialog.name} key={dialog.id} />
  ));

  let messagesData = [
    { id: 1, message: "Hi!" },
    { id: 2, message: "How is your it-kamasutra?" },
    { id: 3, message: "Yo!" },
    { id: 4, message: "A History Lesson." },
    { id: 5, message: "The Wrong Lesson of Munich!" },
    { id: 6, message: "Will we learn our lesson?" },
  ];

  let messagesElements = messagesData.map((message) => (
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
