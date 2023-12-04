import messageReducer from './message-reducer.js';
import profileReducer from './profile-reducer.js';
import sidebarReducer from './sidebar-reducer.js';

let store = {
  _state: {
    massagePage: {
      dialogData: [
        { id: "1", name: "Дарья" },
        { id: "2", name: "Буся" },
        { id: "3", name: "Анастасия" },
        { id: "4", name: "Анна" },
        { id: "5", name: "Артем" },
        { id: "6", name: "Тосик" },
        { id: "7", name: "Никита" },
        { id: "8", name: "Саша" },
      ],
      newMessageText: "",
      messageData: [
        { id: "1", message: "Как дела?" },
        { id: "2", message: "Привет" },
        { id: "3", message: "Все хорошо, ты как?" },
        { id: "4", message: "С др" },
        { id: "5", message: "Увидимся" },
      ],
    },
    profilePage: {
      newPostText: "",
      postData: [
        { id: "1", message: "Я учу реакт", likecount: "153" },
        { id: "2", message: "Закончил институт", likecount: "35" },
      ],
    },
    sideBar: {
      friendsData: [
        { id: "1", name: "Дарья" },
        { id: "2", name: "Буся" },
        { id: "3", name: "Анастасия" },
      ],
    },
  },
  // Переменная заглушка, для функции ререндер
  _cullSibscriber() {
    console.log("state changed");
  },

  getState() {
    return this._state;
  },
  // Паттерн наблюдатель. перезагрузили страницу, функция коллбек чтобы избавится от файла рендер
  subscribe(observer) {
    this._cullSibscriber = observer;
  },

  dispatch(action) { // Объединили функции в dispatch, для удобного их дальнейшего использования

    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.massagePage = messageReducer(this._state.massagePage, action);
    this._state.sideBar = sidebarReducer(this._state.sideBar, action);

    this._cullSibscriber(this._state);
  }
};

export default store;
