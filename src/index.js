import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import state from './redux/state';

ReactDOM.render(
  <App data={state.dialogsData} message={state.messagesData} posts={state.posts} />,
  document.getElementById("root")
);
