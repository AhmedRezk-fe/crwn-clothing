import {createSelector} from "reselect"

const gitUsers = (state) => state.user;

export const selectCurrentUser = createSelector(
    [gitUsers],
    (user) => user.currentUser
)