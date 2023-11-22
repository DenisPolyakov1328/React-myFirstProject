import React from "react";
import cont from "./MyPosts.module.css";
import Post from "./Post/Posts";
import { addPostActionCreator, updateNewPostTextActionCreator } from './../../../Redux/state'



const MyPosts = (props) => {
  // Упрощаем код чтобы не множить компоненты/теги
  const postsElements = props.postData.map((post) => (
    <Post message={post.message} likeCount={post.likecount} key={post.id} />
  ));

  // ссылка на тег textarea
  const newPostElement = React.createRef();

  // обработка значения введенного в textarea
  const addPostText = () => {
    props.dispatch( addPostActionCreator() );
  }

  // Функция обработчик события onChange на textarea
  const onPostChange = () => {
    let text = newPostElement.current.value;
    props.dispatch( updateNewPostTextActionCreator(text) );
  }

  return (
    <div className={cont.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
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
