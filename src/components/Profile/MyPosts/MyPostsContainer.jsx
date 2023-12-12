import React from "react";
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../Redux/profile-reducer'
import MyPosts from "./MyPosts";



const MyPostsContainer = (props) => {
  let state = props.store.getState();

  // обработка значения введенного в textarea
  const AddPostText = () => {
    props.store.dispatch( addPostActionCreator() );
  }

  // Функция обработчик события onChange на textarea
  const onPostChange = (text) => {
    props.store.dispatch(updateNewPostTextActionCreator(text));
  }

  return (
    <MyPosts postData={state.profilePage.postData} addPost={AddPostText} updateNewPostText={onPostChange}/>
  );
};

export default MyPostsContainer;
