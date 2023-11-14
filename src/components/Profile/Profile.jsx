/* eslint-disable jsx-a11y/alt-text */
import cont from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import { addPost } from "../../Redux/state";

const Profile = (props) => {
  return (
    <div className={cont.content}>
      <ProfileInfo />
      <MyPosts postData={props.profilePage.postData} addPost={addPost}/>
    </div>
  );
};

export default Profile;
