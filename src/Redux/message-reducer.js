const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

// Начальные данные стейта, по-умолчанию
const initialState = {
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
    ]
};

//Функция reducer в которую передаем параметры стейт и экшен. Создаются как отдельные файлы/модули, чтобы не рос код, так как функций dispatch будет много. По своей сути данная функция следит за изменением UI (полем ввода в textarea) и добавляет новые данные в стейт 
const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      let message = {
        id: "6",
        message: state.newMessageText,
      };
      state.messageData.push(message);
      state.newMessageText = "";
      return state;
    case UPDATE_NEW_MESSAGE_TEXT:
      state.newMessageText = action.newText;
      return state;
    default:
      return state;
  }
};

// actionCreator-ы созданны для того что бы диспатчить экшен на бизнес уровне в файле стейт, следовательно передаем вызов этих функций в компоненту. В теле функции возвращаются свойства ation. Все идет из бизнеса, в UI ничего не делаем
export const addMessageActionCreator = () => ({ type: ADD_MESSAGE });
export const updateNewMassageTextActionCreator = (text) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  newText: text,
});

export default messageReducer;
