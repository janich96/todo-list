import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import App from './App';


let data = [
  { id: "todo-0", name: "Eat", completed: true },
  { id: "todo-1", name: "Sleep", completed: false },
  { id: "todo-2", name: "Repeat", completed: false }
];

if (localStorage.getItem("todo")) {
  data = JSON.parse(localStorage.getItem("todo"));
}


ReactDOM.render(
  <React.StrictMode>
    <App tasks={data} />
  </React.StrictMode>,
  document.getElementById('root')
);