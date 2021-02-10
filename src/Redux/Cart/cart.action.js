import CreatActionType from "./cart.type";

export const toggleCartHidden = () => ({
    type : CreatActionType.TOGGLE_CREAT_HIIDEN
})


export const addItem = item => ({
    type : CreatActionType.ADD_ITEM,
    payload : item
})

export const clearItem = item => ({
    type : CreatActionType.CLEAR_ITEN_FROM_CART,
    payload : item
})

export const ramoveItem = item => ({
    type : CreatActionType.Remove_ITEN_FROM_CART,
    payload : item
})

