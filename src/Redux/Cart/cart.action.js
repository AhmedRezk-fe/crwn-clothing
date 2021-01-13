import CreatActionType from "./cart.type";

export const toggleCartHidden = () => ({
    type : CreatActionType.TOGGLE_CREAT_HIIDEN
})


export const addItem = item => ({
    type : CreatActionType.ADD_ITEM,
    payload : item
})