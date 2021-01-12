import {UserActionTypes} from "./user.type" 

export const SetCurrentUser = user => ({
    type : UserActionTypes.SET_CURRENT_USER,
    payload : user
})