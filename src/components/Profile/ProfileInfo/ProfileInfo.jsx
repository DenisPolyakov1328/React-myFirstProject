import cont from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div className={cont.content}>
      <div>
        <img src="https://images.unsplash.com/photo-1417577097439-425fb7dec05e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt='background'></img>
      </div>
      <div className={cont.descriptionBlock}>ava + description</div>
    </div>
  );
};

export default ProfileInfo;
