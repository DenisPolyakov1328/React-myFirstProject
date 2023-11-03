import contMess from "./Message.module.css";

const Message = (props) => {
  return <div className={contMess.message}>{props.message}</div>;
};


export default Message;
