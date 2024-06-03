import {combineReducers, createStore} from "redux";
import {initialTodos, todosReducer} from "../features/todos/todosSlice";


const store = createStore(combineReducers({
    todos: todosReducer
}), {
    todos: initialTodos
});

export default store;