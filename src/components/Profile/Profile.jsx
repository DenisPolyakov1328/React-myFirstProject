/* eslint-disable jsx-a11y/alt-text */
import cont from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = () => {
  return (
    <div className={cont.content}>
      <ProfileInfo />
      <MyPosts />
    </div>
  );
};

export default Profile;
