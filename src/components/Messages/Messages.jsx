import contMess from "./Messages.module.css";
import DialogItem from "./Dialog/DialogItem";
import Message from "./Message/Message";

// Массив данных друзей
const dialogData = [
  { id: "1", name: "Дарья" },
  { id: "2", name: "Буся" },
  { id: "3", name: "Анастасия" },
  { id: "4", name: "Анна" },
  { id: "5", name: "Артем" },
  { id: "6", name: "Тосик" },
  { id: "7", name: "Никита" },
  { id: "8", name: "Саша" },
];

// Массив данных сообщений
const messageData = [
  { id: "1", message: "Как дела?" },
  { id: "2", message: "Привет" },
  { id: "3", message: "Все хорошо, ты как?" },
  { id: "4", message: "С др" },
  { id: "5", message: "Увидимся" },
];

// Упрощаем код чтобы не множить компоненты/теги
const dilogsElements = dialogData.map((dialog) => (
  <DialogItem name={dialog.name} key={dialog.id} id={dialog.id}/>
));

// Упрощаем код чтобы не множить компоненты/теги
const messagesElements = messageData.map((message) => (
  <Message message={message.message} key={message.id} id={message.id}/>
));

const Messages = () => {
  return (
    <div className={contMess.content}>
      <div className={contMess.dialogsItems}>{dilogsElements}</div>
      <div className={contMess.messages}>{messagesElements}</div>
    </div>
  );
};

export default Messages;
