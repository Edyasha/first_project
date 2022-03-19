import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Routes>
            <Route
              path="/dialogs"
              element={
                <Dialogs
                  data={props.state.dialogsPage.dialogsData}
                  message={props.state.dialogsPage.messagesData}
                />
              }
            />
            <Route
              path="/profile"
              element={
                <Profile
                  posts={props.state.profilePage.posts}
                  addPost={props.addPost}
                  newPostText={props.state.profilePage.newPostText}
                  updateNewPostText={props.updateNewPostText}
                />
              }
            />
            <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
