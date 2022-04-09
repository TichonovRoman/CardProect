import {SomeReducer1} from './reducer№1';
import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunkMiddleware from "redux-thunk"
import {SomeReducer2} from "./reducer№2";

// объединяя reducer-ы с помощью combineReducers,
// мы задаём структуру нашего единственного объекта-состояния
const rootReducer = combineReducers({
    SomeReducer1: SomeReducer1,
    SomeReducer2: SomeReducer2,
})
// непосредственно создаём store
export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
// определить автоматически тип всего объекта состояния
export type AppRootStateType = ReturnType<typeof rootReducer>

// а это, чтобы можно было в консоли браузера обращаться к store в любой момент
// @ts-ignore
window.store = store;
