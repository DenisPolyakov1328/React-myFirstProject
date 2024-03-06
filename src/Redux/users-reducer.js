const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

const initialState = {
  users: []
};

// Описание дествий follow/unfollow, делаем поверхностную копию state, далее перебираем массив с помощью метода map делая копию массива users, пишем условие если user.id равен userId пришедшему из action(действия пользователя, по какому user нажал кнопку), то возвращаем копию user с флагом true/false, если нет возвращаем user без изменений.
// Описание set_users, это действие прийдет от сервера т.е. state будет приходить с сервера а не лежать в редьюссоре. Делаем поверхностную копию state, поверхностную копию юзеров из state и поверхностную копию юзеров из action, объеденяем все в один массив users
const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(user => {
          if(user.id === action.userId) {
            return {...user, followed: true}
          }
          return user
        })
      }
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(user => {
          if(user.id === action.userId) {
            return {...user, followed: false}
          }
          return user
        })
      }
    case SET_USERS: {
      return { ...state, users: [ ...action.users]} //users: [...state.users, ...action.users] удалил первоначальный стейт
    }
    default:
      return state;
  }
};

// Действие follow/unfollow. Для понимания какого пользователя хотят подписать/отписать, добавляем userId, который прийдет как параметр
export const followActionCreator = (userId) => ({ type: FOLLOW, userId });
export const unfollowActionCreator = (userId) => ({ type: UNFOLLOW, userId });
export const setUsersActionCreator = (users) => ({ type: SET_USERS, users });

export default usersReducer;
