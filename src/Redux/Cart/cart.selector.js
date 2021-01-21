import {createSelector} from "reselect"

const selectCart = state => state.cart;

export const selectItemCart =  createSelector(
    [selectCart], cart => cart.cartItems
)

export const selectItemCartCount = createSelector(
[selectItemCart], cartItems => cartItems.reduce((accumalatedQuantity ,cartItems) => accumalatedQuantity + cartItems.quantity , 0  )
)

