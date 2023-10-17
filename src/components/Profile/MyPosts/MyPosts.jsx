import cont from "./MyPosts.module.css";
import Post from "./Post/Posts";

const MyPosts = () => {
  return (
    <div className={cont.content}>
      My posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <Post message='Я учу реакт' count='20'/>
      <Post message='Закончил институт' count='30'/>
    </div>
  );
};

export default MyPosts;
