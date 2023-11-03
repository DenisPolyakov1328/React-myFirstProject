import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


// Массив данных друзей
const dialogData = [
  { id: "1", name: "Дарья" },
  { id: "2", name: "Буся" },
  { id: "3", name: "Анастасия" },
  { id: "4", name: "Анна" },
  { id: "5", name: "Артем" },
  { id: "6", name: "Тосик" },
  { id: "7", name: "Никита" },
  { id: "8", name: "Саша" },
];

// Массив данных сообщений
const messageData = [
  { id: "1", message: "Как дела?" },
  { id: "2", message: "Привет" },
  { id: "3", message: "Все хорошо, ты как?" },
  { id: "4", message: "С др" },
  { id: "5", message: "Увидимся" },
];

// Массив данных с постами
const postData = [
  { id: "1", message: "Я учу реакт", likecount: "153" },
  { id: "2", message: "Закончил институт", likecount: "35" },
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App dialogData={dialogData} messageData={messageData} postData={postData}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
