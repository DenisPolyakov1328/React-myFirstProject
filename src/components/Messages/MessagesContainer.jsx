import Messages from './Messages'
import {addMessageActionCreator, updateNewMassageTextActionCreator} from '../../Redux/message-reducer'
import { connect } from "react-redux";

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

const mapStateToProps = (state) => {
  return {
    messagePage: state.messagePage
  }
};

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

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps) (Messages);

export default MessagesContainer;
