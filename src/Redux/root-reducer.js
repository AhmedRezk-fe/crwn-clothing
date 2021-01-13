import {combineReducers} from "redux";


import UserReducer from "./User/user.reducer";
import CardReducer from "./Cart/cart.reducer";


export default combineReducers({
    user : UserReducer,
    cart : CardReducer
})