const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_USERS_TOTAL_COUNT = 'SET_USERS_TOTAL_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

// Начальный стейт. Пустой массив users, что бы потом в него вставить данные пришедшие с сервера. Далее свойства требуемые для оформления pagination (многостраничного вывода пользователей так как их будет много): pageSize - это количество выводимых пользователей на страницу; userTotalCount - это общее число пользователей. 
const initialState = {
  users: [],
  pageSize: 5, //кол-во выводимых пользователей на страницу
  totalUsersCount: 0, // общее кол-во пользователей
  currentPage: 1, // текущяя страница
  isFetching: false
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
    case SET_CURRENT_PAGE: {
      return { ...state, currentPage: action.currentPage}
    }
    case SET_USERS_TOTAL_COUNT: {
      return { ...state, totalUsersCount: action.count}
    }
    case TOGGLE_IS_FETCHING: {
      return { ...state, isFetching: action.isFetching}
    }
    default:
      return state;
  }
};

// Действие follow/unfollow. Для понимания какого пользователя хотят подписать/отписать, добавляем userId, который прийдет как параметр
export const followActionCreator = (userId) => ({ type: FOLLOW, userId });
export const unfollowActionCreator = (userId) => ({ type: UNFOLLOW, userId });
export const setUsersActionCreator = (users) => ({ type: SET_USERS, users });
export const setCurrentPageActionCreator = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export const setUsersTotalCountActionCreator = (totalUsersCount) => ({ type: SET_USERS_TOTAL_COUNT, count: totalUsersCount });
export const toggleIsFetchingActionCreator = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });


export default usersReducer;
