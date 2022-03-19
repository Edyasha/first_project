import {rerenderEntireTree} from "../render";

let state = {
  dialogsPage: {
    dialogsData: [
      { id: 1, name: "Edison" },
      { id: 2, name: "Maksim" },
      { id: 3, name: "Viktoria" },
      { id: 4, name: "Boris" },
      { id: 5, name: "Sergey" },
      { id: 6, name: "Nataliya" },
    ],
    messagesData: [
      { id: 1, message: "Hi!" },
      { id: 2, message: "How is your it-kamasutra?" },
      { id: 3, message: "Yo!" },
      { id: 4, message: "A History Lesson." },
      { id: 5, message: "The Wrong Lesson of Munich!" },
      { id: 6, message: "Will we learn our lesson?" },
    ],
  },
  profilePage: {
    posts: [
      { id: 1, message: "Hi, how are you?", likesCount: 12 },
      { id: 2, message: "It's my first post!", likesCount: 8 },
      { id: 3, message: "Yo!" },
      { id: 4, message: "A History Lesson." },
      { id: 5, message: "The Wrong Lesson of Munich!" },
      { id: 6, message: "Will we learn our lesson?" },
    ],
    newPostText: "It-kamasutra.COM",
  },
};

export let addPost = () => {
  let newPost = {
    id: 7,
    message: state.profilePage.newPostText,
    likesCount: 0,
  };

  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = "";
  rerenderEntireTree(state);
}

export let updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
}

export default state;
