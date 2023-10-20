import cont from "./MyPosts.module.css";
import Post from "./Post/Posts";

// Массив данных с постами
const postData = [
  { id: "1", message: "Я учу реакт", likecount: "153" },
  { id: "2", message: "Закончил институт", likecount: "35" },
];

// Упрощаем код чтобы не множить компоненты/теги
const postsElements = postData.map((post) => (
  <Post message={post.message} likeCount={post.likecount} key={post.id} />
));

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
      <div className={cont.post}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
