import cont from "./MyPosts.module.css";
import Post from "./Post/Posts";

const MyPosts = () => {
  return (
    <div className={cont.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div className={cont.post}>
        <Post message="Я учу реакт" count="20" />
        <Post message="Закончил институт" count="30" />
      </div>
    </div>
  );
};

export default MyPosts;
