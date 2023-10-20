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
  return <div className={contMess.message}>{props.message}</div>
}

const Messages = () => {
  return (
    <div className={contMess.content}>
      <div className={contMess.dialogsItems}>
        <DilogsItems name='Дарья' id='1'/>
        <DilogsItems name='Буся' id='2'/>
        <DilogsItems name='Анастасия' id='3'/>
        <DilogsItems name='Анна' id='4'/>
        <DilogsItems name='Артем' id='5'/>
        <DilogsItems name='Тосик' id='6'/>
        <DilogsItems name='Никита' id='7'/>
        <DilogsItems name='Саша' id='8'/>
      </div>
      <div className={contMess.messages}>
        <Message message='Как дела?'/>
        <Message message='Привет'/>
        <Message message='Все хорошо, ты как?'/>
        <Message message='С др'/>
        <Message message='Увидимся'/>
      </div>
    </div>
  );
};

export default Messages;
