import React from "react";
import cl from "./Dialogs.module.css";

const Dialogs = (props) => {
  return (
    <div className={cl.dialogs}>
      <div className={cl.dialogs_item}>
        <div className={`${cl.dialog} ${cl.active}`}>Edison</div>
        <div className={cl.dialog}>Maksim</div>
        <div className={cl.dialog}>Svetlana</div>
        <div className={cl.dialog}>Viktor</div>
        <div className={cl.dialog}>Michael</div>
        <div className={cl.dialog}>Valeriy</div>
      </div>
      <div className={cl.messages}>
        <div className={cl.message}>Hi!</div>
        <div className={cl.message}>How is your life&</div>
        <div className={cl.message}>You!</div>
      </div>
    </div>
  );
};

export default Dialogs;
