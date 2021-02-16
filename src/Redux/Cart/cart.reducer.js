import CreatActionType from "./cart.type";
import { addItemToCart, removeCartFromCheckOut } from "./utils";

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};

const CardReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CreatActionType.TOGGLE_CREAT_HIIDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case CreatActionType.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
    case CreatActionType.Remove_ITEN_FROM_CART:
      return {
        ...state,
        cartItems: removeCartFromCheckOut(state.cartItems, action.payload),
      };
    case CreatActionType.CLEAR_ITEN_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem.id != action.payload.id
        ),
      };
    default:
      return state;
  }
};

export default CardReducer;
