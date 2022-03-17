import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

let dialogsData = [
  { id: 1, name: "Edison" },
  { id: 2, name: "Maksim" },
  { id: 3, name: "Viktoria" },
  { id: 4, name: "Boris" },
  { id: 5, name: "Sergey" },
  { id: 6, name: "Nataliya" },
];

let messagesData = [
  { id: 1, message: "Hi!" },
  { id: 2, message: "How is your it-kamasutra?" },
  { id: 3, message: "Yo!" },
  { id: 4, message: "A History Lesson." },
  { id: 5, message: "The Wrong Lesson of Munich!" },
  { id: 6, message: "Will we learn our lesson?" },
];

ReactDOM.render(
    <App data={dialogsData} message={messagesData} />,
  document.getElementById('root')
);