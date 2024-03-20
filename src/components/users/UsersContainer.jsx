import { connect } from "react-redux";
import Users from "./Users";
import {followActionCreator, unfollowActionCreator, setUsersActionCreator, setCurrentPageActionCreator, setUsersTotalCountActionCreator } from './../../Redux/users-reducer'

// Вызывается при каждом изменении состояние хранилища(store).Получает всё состояние хранилища(store) и возвращает объект с необходимыми этому компоненту данными (пропсами).
const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followActionCreator(userId))
    },
    unfollow: (userId) => {
      dispatch(unfollowActionCreator(userId))
    },
    setUsers: (users) => {
      dispatch(setUsersActionCreator(users))
    },
    setCurrentPage: (pageNumber) => {
      dispatch(setCurrentPageActionCreator(pageNumber))
    },
    setTotalUsersCount: (totalCount) => {
      dispatch(setUsersTotalCountActionCreator(totalCount))
    }
  }
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps) (Users);

export default UsersContainer;
