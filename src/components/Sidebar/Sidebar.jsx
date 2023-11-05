import cont from "./Sidebar.module.css";
import Friends from "./Friends/Friends";

const SideBar = (props) => {
  const friendsElement = props.sidebarData.friendsData.map((friend) => (
    <Friends name={friend.name} key={friend.id} id={friend.id} />
  ));
  return (
    <div className={cont.cont}>
      <div className={cont.title}>Friends</div>
      <div className={cont.friends}>{friendsElement}</div>
    </div>
  );
};

export default SideBar;
