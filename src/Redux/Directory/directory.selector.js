import {createSelector} from "reselect"

const directorySelector = state => state.directory 

export const  directorySelectorData = createSelector(
    [directorySelector] ,
    directory => directory.sections
)