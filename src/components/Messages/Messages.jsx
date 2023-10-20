import contMess from "./Messages.module.css";
import { NavLink } from "react-router-dom";

const DilogsItems = (props) => {
  let path = "/messages/" + props.id;
  return (
    <div className={`${contMess.dialog} ${contMess.active}`}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

const Message = (props) => {
  return <div className={contMess.message}>{props.message}</div>;
};

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
  {id: '1', message: 'Как дела?'},
  {id: '2', message: 'Привет'},
  {id: '3', message: 'Все хорошо, ты как?'},
  {id: '4', message: 'С др'},
  {id: '5', message: 'Увидимся'}
];

const Messages = () => {
  return (
    <div className={contMess.content}>
      <div className={contMess.dialogsItems}>
        <DilogsItems name={dialogData[0].name} id={dialogData[0].id} />
        <DilogsItems name={dialogData[1].name} id={dialogData[1].id} />
        <DilogsItems name={dialogData[2].name} id={dialogData[2].id} />
        <DilogsItems name={dialogData[3].name} id={dialogData[3].id} />
        <DilogsItems name={dialogData[4].name} id={dialogData[4].id} />
        <DilogsItems name={dialogData[5].name} id={dialogData[5].id} />
        <DilogsItems name={dialogData[6].name} id={dialogData[6].id} />
        <DilogsItems name={dialogData[7].name} id={dialogData[7].id} />
      </div>
      <div className={contMess.messages}>
        <Message message={messageData[0].message} />
        <Message message={messageData[1].message} />
        <Message message={messageData[2].message} />
        <Message message={messageData[3].message} />
        <Message message={messageData[4].message} />
      </div>
    </div>
  );
};

export default Messages;
