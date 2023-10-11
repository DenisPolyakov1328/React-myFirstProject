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
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
};

export default MyPosts;
