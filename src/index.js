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

ReactDOM.render(
    <App data={dialogsData} />,
  document.getElementById('root')
);