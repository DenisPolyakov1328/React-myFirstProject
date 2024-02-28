import { connect } from "react-redux";
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../Redux/profile-reducer'
import MyPosts from "./MyPosts";

const mapStateToProps = (state) => {
  return {
    profilePage: state.profilePage
  }
  
}

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {
      dispatch( addPostActionCreator() );
    },
    updateNewPostText: (text) => {
      dispatch(updateNewPostTextActionCreator(text));
    }
  }
  
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps) (MyPosts);

export default MyPostsContainer;
