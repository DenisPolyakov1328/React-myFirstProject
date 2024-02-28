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
// Создаем переменную stateCopy, для того чтобы сделать глубокую копию объекта state. Копия объекта делается для того чтобы не изменять дефолтный стейт. Имьютабельность - принцип чистых функций
const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE: {
      let message = {
        id: "6",
        message: state.newMessageText,
      };
      return { // Создаем копию объекта state для внесения изменений
        ...state, // Чрз спред оператор делаем поверхностную копию стейта
        newMessageText: "", // так же зануляем поле ввода
        messageData: [...state.messageData, message] // так же делаем копию свойств объекта стейт (в данном случае массив) и добавляем новое значение в массив (равноценно push())
      }
      // Верхний код равноценен нижнему
      // let stateCopy = {...state}; 
      // stateCopy.messageData = [...state.messageData];
      // stateCopy.messageData.push(post);
      // stateCopy.newMessageText = ""; // зануляем поле ввода
      // return stateCopy;
    }  
    case UPDATE_NEW_MESSAGE_TEXT: {
      return {
        ...state, // Чрз спред оператор делаем поверхностную копию стейта
        newMessageText: action.newText // В обновленный стейт отправляем действие
      }
      // Верхний код равноценен нижнему
      // let stateCopy = {...state};
      // stateCopy.newMessageText = action.newText;
      // return stateCopy;
    }
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
