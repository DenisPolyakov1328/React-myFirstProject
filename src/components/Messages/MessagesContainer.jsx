import React from "react";
import Messages from './Messages'
import {addMessageActionCreator, updateNewMassageTextActionCreator} from '../../Redux/message-reducer'

const MessagesContainer = (props) => {

  let state = props.store.getState().messagePage;

  // обработка значения введенного в textarea
  const sendMessage = () => {
    props.store.dispatch(addMessageActionCreator());
  };

  const onMessageChange = (text) => {
    props.store.dispatch(updateNewMassageTextActionCreator(text));
  }

  return (
    <Messages addMessage={sendMessage} updateNewMessageText={onMessageChange} messagePage={state}/>
  );
};

export default MessagesContainer;
