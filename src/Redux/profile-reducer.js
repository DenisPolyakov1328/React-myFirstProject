const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

const initialState = {
    newPostText: "",
    postData: [
      { id: "1", message: "Я учу реакт", likecount: "153" },
      { id: "2", message: "Закончил институт", likecount: "35" },
    ],
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    // Callback для взаимодействия с textarea на странице профиля и добавления новых постов. Т.е. добавляем новый пост в state и на страницу
    case ADD_POST:
      let post = {
        id: 3,
        message: state.newPostText,
        likecount: "0",
      };
      state.postData.push(post);
      state.newPostText = ""; // зануляем поле ввода
      return state;
    case UPDATE_NEW_POST_TEXT: // Функция для добавления каждого символа введенного в textarea в state
      state.newPostText = action.newText;
      return state;
    default:
      return state;
  }
};

// actionCreator-ы созданны для того что бы диспатчить экшен на бизнес уровне в файле стейт, следовательно передаем вызов этих функций в компоненту. В теле функции возвращаются свойства ation. Все идет из бизнеса, в UI ничего не делаем
export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});

export default profileReducer;
