import React from "react";
import cont from "./MyPosts.module.css";
import Post from "./Post/Posts";



const MyPosts = (props) => {
  // Упрощаем код чтобы не множить компоненты/теги
  const postsElements = props.profilePage.postData.map((post) => (
    <Post message={post.message} likeCount={post.likecount} key={post.id} />
  ));

  // обработка значения введенного в textarea
  const addPostText = () => {
    props.addPost();
  }

  // Функция обработчик события onChange на textarea
  const onPostChange = (e) => {
    let text = e.target.value;
    props.updateNewPostText(text);
  }

  return (
    <div className={cont.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea onChange={onPostChange} value={props.profilePage.newPostText}/>
        </div>
        <div>
          <button onClick={addPostText}>Add post</button>
        </div>
      </div>
      <div className={cont.post}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
