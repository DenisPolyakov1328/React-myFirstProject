import cont from "./MyPosts.module.css";
import Post from "./Post/Posts";



const MyPosts = (props) => {
  // Упрощаем код чтобы не множить компоненты/теги
  const postsElements = props.postData.map((post) => (
    <Post message={post.message} likeCount={post.likecount} key={post.id} />
  ));

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
      <div className={cont.post}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
