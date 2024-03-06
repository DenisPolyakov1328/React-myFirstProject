import cont from "./Users.module.css";

const Users = (props) => {
  if (props.users.length === 0) {
    props.setUsers([
      {
        id: "1",
        urlUserPhoto:
          "https://uznayvse.ru/images/content/2017/7/uzn_14992466839.jpg",
        followed: true,
        fullName: "Денис",
        status: "Я front-end разработчик",
        location: { country: "Russia", city: "Krasnodar" },
      },
      {
        id: "2",
        urlUserPhoto:
          "https://wikipet.ru/wp-content/uploads/2018-07/1531305052_mops-charachter.jpg",
        followed: false,
        fullName: "Буся",
        status: "Вообще-то я собака",
        location: { country: "Russia", city: "Krasnodar" },
      },
      {
        id: "3",
        urlUserPhoto:
          "https://cdn.ananasposter.ru/image/cache/catalog/poster/film/81/16166-1000x830.jpg",
        followed: true,
        fullName: "Даша",
        status: "Жена front-end разработчика",
        location: { country: "Russia", city: "Krasnodar" },
      },
    ]);
  }

  return (
    <div>
      {props.users.map((user) => (
        <div key={user.id}>
          <span>
            <div className={cont.cont}>
              <img src={user.urlUserPhoto} />
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
              <div>{user.fullName}</div>
              <div>{user.status}</div>
            </span>
            <span>
              <div>{user.location.country}</div>
              <div>{user.location.city}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
