import cont from "./Users.module.css";
import userPhoto from "../../assets/image/user.png";

const Users = (props) => {
  const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    if (pages.length < 10) {
      pages.push(i);
  }
  }
  
  return (
    <div>
      <div>
        {pages.map((page) => (
          <span
            className={
              props.currentPage === page ? cont.selectedPage : cont.number
            }
            onClick={() => {
              props.onPageChanged(page);
            }}
            key={page}
          >
            {page}
          </span>
        ))}
      </div>
      {props.users.map((user) => (
        <div key={user.id}>
          <span>
            <div className={cont.cont}>
              <img
                alt=""
                src={user.photos.small != null ? user.photos.small : userPhoto}
              />
            </div>
            <div>
              {user.followed ? (
                <button
                  onClick={() => {
                    props.unfollow(user.id);
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    props.follow(user.id);
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div>{user.name}</div>
              <div>{user.status}</div>
            </span>
            <span>
              <div>{"user.location.country"}</div>
              <div>{"user.location.city"}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
