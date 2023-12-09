import {legacy_createStore as createStore,  combineReducers } from "redux"; // импортируем из редакса методы
import profileReducer from "./profile-reducer"; // импорт функций редьюссеров
import messageReducer from "./message-reducer"; // импорт функций редьюссеров
import sidebarReducer from "./sidebar-reducer"; // импорт функций редьюссеров

// объеденяем редьюсеры с помощью метода combineReducers
let reducers = combineReducers({
    profilePage: profileReducer,
    messagePage: messageReducer,
    sidebarData: sidebarReducer
});

let store = createStore(reducers); // просим redux создать новый store, передаем в него редьюсеры

export default store;