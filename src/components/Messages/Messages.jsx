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

  return (
    <div className={contMess.content}>
      <div className={contMess.dialogsItems}>{dilogsElements}</div>
      <div className={contMess.messages}>{messagesElements}</div>
    </div>
  );
};

export default Messages;
