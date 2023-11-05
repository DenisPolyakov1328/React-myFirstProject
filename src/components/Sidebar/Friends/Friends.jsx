import cont from "./Friends.module.css";

const Friends = (props) => {
  return (
    <div className={cont.friendsItem}>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2ePTccMNkzEFbEFVlL7xvSLTclqUXV9Hzgg&usqp=CAU"
        alt="ava"
      ></img>
      <div className={cont.name}>{props.name}</div>
    </div>
  );
};

export default Friends;
