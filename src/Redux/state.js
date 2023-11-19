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
      messageData: [
        { id: "1", message: "Как дела?" },
        { id: "2", message: "Привет" },
        { id: "3", message: "Все хорошо, ты как?" },
        { id: "4", message: "С др" },
        { id: "5", message: "Увидимся" },
      ],
    },
    profilePage: {
      newPostText: "TaTaTaTa",
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
    if (action.type === "ADD-POST") {
      // Callback для взаимодействия с textarea на странице профиля и добавления новых постов. Т.е. добавляем новый пост в state и на страницу
      let post = {
        id: 3,
        message: this._state.profilePage.newPostText,
        likecount: "0",
      };

      this._state.profilePage.postData.push(post);
      this._state.profilePage.newPostText = "";
      this._cullSibscriber(this._state);
    } else if (action.type === "UPDATE-NEW-POST-TEXT") { // Функция для добавления каждого символа введенного в textarea в state
      this._state.profilePage.newPostText = action.newText;
      this._cullSibscriber(this._state);
    }
  },
};

export default store;
