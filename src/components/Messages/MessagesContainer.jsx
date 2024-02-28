import Messages from './Messages'
import {addMessageActionCreator, updateNewMassageTextActionCreator} from '../../Redux/message-reducer'
import { connect } from "react-redux";


// Это код контейнерной компоненты созданный вручную для примера, ниже представлена контейнерная компонента созданная с помощью библиотеки react-redux. Все контейнерные компоненты осуществлены по подобной схеме

// const MessagesContainer = (props) => {

//   let state = props.store.getState().messagePage;

//   // обработка значения введенного в textarea
//   const sendMessage = () => {
//     props.store.dispatch(addMessageActionCreator());
//   };

//   const onMessageChange = (text) => {
//     props.store.dispatch(updateNewMassageTextActionCreator(text));
//   }

//   return (
//     <Messages addMessage={sendMessage} updateNewMessageText={onMessageChange} messagePage={state}/>
//   );
// };

// извелекаем данные state с помощью mapStateToProps
const mapStateToProps = (state) => {
  return {
    messagePage: state.messagePage
  }
};

// Передаются коллбеки. позволяет вам указать, какие действия сможет отправить ваш компонент
const mapDispatchToProps = (dispatch) => {
  return {
    addMessage: () => {
      dispatch(addMessageActionCreator())
    },
    updateNewMessageText: (text) => {
      dispatch(updateNewMassageTextActionCreator(text))
    }
  }
};

// Функция (библиотека) connect, создает "обертку"/контейнерную компоненту над компонентой Message. Функция вызывается два раза, в первый вызов передаем фргументы функцию-обработчик state и dispatch, во второй вызов презентационную компоненту которую оборачиваем.  
const MessagesContainer = connect(mapStateToProps, mapDispatchToProps) (Messages);

export default MessagesContainer;
