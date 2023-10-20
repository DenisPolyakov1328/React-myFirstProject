import cont from "./MyPosts.module.css";
import Post from "./Post/Posts";

// Массив данных с постами
const postData = [
  {id: '1', message: 'Я учу реакт', likecount: '153'},
  {id: '2', message: 'Закончил институт', likecount: '35'}
];

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
        <Post message={postData[0].message} likeCount={postData[0].likecount} />
        <Post message={postData[1].message} likeCount={postData[1].likecount} />
      </div>
    </div>
  );
};

export default MyPosts;
