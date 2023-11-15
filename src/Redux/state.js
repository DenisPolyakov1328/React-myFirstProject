import { renderEntireTree } from './../render';

const state = {
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
    newPostText: 'TaTaTaTa',
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
};

// Callback для взаимодействия с textarea на странице профиля и добавления новых постов. Т.е. добавляем новый пост в state и на страницу
export const addPost = () => {
  let post = {
    id: 3,
    message: state.profilePage.newPostText,
    likecount: '0'
  }

  state.profilePage.postData.push(post);
  state.profilePage.newPostText = '';
  renderEntireTree(state);
};

// Функция для добавления каждого символа введенного в textarea в state
export const updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  renderEntireTree(state);
};

export default state;
