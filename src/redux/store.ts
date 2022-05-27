import {applyMiddleware, combineReducers} from "redux";
import thunkMiddleware from 'redux-thunk'
import {legacy_createStore as createStore} from 'redux'
import {authReducer} from "./auth-reducer";
import {LoginReducer} from "./login-reducer";
import {packsReducer} from "./packs-reducer";
import {packsCardReducer} from "./packsCard-reducer";


const rootReducer = combineReducers({
    auth: authReducer,
    login: LoginReducer,
    packs: packsReducer,
    cards: packsCardReducer,
})


export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

export type AppRootReducerType = ReturnType<typeof rootReducer>


//@ts-ignore
window.store = store;
