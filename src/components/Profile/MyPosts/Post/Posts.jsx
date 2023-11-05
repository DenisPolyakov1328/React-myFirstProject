import cont from "./Posts.module.css";

const Post = (props) => {
  return (
    <div>
      <div className={cont.content}>
        <img src="https://i.pinimg.com/736x/cc/cc/4d/cccc4d3c17d97e05226c10c30d8d7689.jpg" alt='ava'></img>
        {props.message}
        <div>
          <span>{props.likeCount} like</span>
        </div>
      </div>
    </div>
  );
};

export default Post;