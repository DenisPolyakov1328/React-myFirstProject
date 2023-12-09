import {legacy_createStore as createStore,  combineReducers } from "redux";
import profileReducer from "./profile-reducer";
import messageReducer from "./message-reducer";
import sidebarReducer from "./sidebar-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    messagePage: messageReducer,
    sidebarData: sidebarReducer
});

let store = createStore(reducers);

export default store;