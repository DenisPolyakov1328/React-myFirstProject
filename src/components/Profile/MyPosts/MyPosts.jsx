import React from "react";
import cont from "./MyPosts.module.css";
import Post from "./Post/Posts";



const MyPosts = (props) => {
  // Упрощаем код чтобы не множить компоненты/теги
  const postsElements = props.postData.map((post) => (
    <Post message={post.message} likeCount={post.likecount} key={post.id} />
  ));

  // ссылка на тег textarea
  const newPostElement = React.createRef();

  // обработка значения введенного в textarea
  const addPostText = () => {
    let text = newPostElement.current.value;
    props.addPost(text);
  }

  return (
    <div className={cont.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea ref={newPostElement}></textarea>
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
