const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";
const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";
const SEND_MESSAGE = "SEND_MESSAGE";

let store = {
  _state: {
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
      newMessageBody: "",
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
  },
  _callSubscriber() {
    console.log("Edison.");
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action) {
    if (action.type === ADD_POST) {
      let newPost = {
        id: 7,
        message: this._state.profilePage.newPostText,
        likesCount: 0,
      };

      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = "";
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
      this._state.dialogsPage.newMessageBody = action.body;
      this._callSubscriber(this._state);
    } else if (action.type === SEND_MESSAGE) {
      let body = this._state.dialogsPage.newMessageBody;
      this._state.dialogsPage.newMessageBody = '';
      this._state.dialogsPage.messagesData.push({id: 7, message: body});
      this._callSubscriber(this._state);
    }
  },
};

export const addPostActionCreator = () => ({type: ADD_POST})

export const updateNewPostTextActionCreator = (text) => 
    ({type: UPDATE_NEW_POST_TEXT, newText: text})

export default store;
