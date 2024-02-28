import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import store from "./Redux/redux-store";
import reportWebVitals from "./reportWebVitals";
import {Provider} from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById("root")); // добавляем данные в index.html, чтобы отбразить страницу

// Далее рендерим страницу подгружая главную компоненту App. Затем создали оболочку/функцию чтобы перерисовать UI после  изменения state
// Импортировали компонент провайдер, и обернули в нее главную компоненту App. Сделано это для того чтобы дочерние компоненты через (под капотом) context API, могли сразу обращатся к стору.
let rerenderEntireTree = () => {
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  );
};

// Вызываем функцию перерисовать и передаем в нее стор (наши данные)
rerenderEntireTree(store.getState());
// подписываемся на изменения стора и передаем функцию перерисовать
store.subscribe(() => {
  let state = store.getState();
  rerenderEntireTree(state);
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
