import React from "react";
import contMess from "./Messages.module.css";
import DialogItem from "./Dialog/DialogItem";
import Message from "./Message/Message";

const Messages = (props) => {
  // Упрощаем код чтобы не множить компоненты/теги
  const dilogsElements = props.messagePage.dialogData.map((dialog) => (
    <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} />
  ));

  // Упрощаем код чтобы не множить компоненты/теги
  const messagesElements = props.messagePage.messageData.map((message) => (
    <Message message={message.message} key={message.id} id={message.id} />
  ));

  // ссылка на тег textarea
  const newSendMessage = React.createRef();

  // обработка значения введенного в textarea
  const sendMessage = () => {
    let text = newSendMessage.current.value;
    alert(text);
  };

  return (
    <div className={contMess.content}>
      <div className={contMess.dialogsItems}>{dilogsElements}</div>
      <div className={contMess.messages}>{messagesElements}</div>
      <div>
        <textarea ref={newSendMessage}></textarea>
      </div>
      <div>
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Messages;
