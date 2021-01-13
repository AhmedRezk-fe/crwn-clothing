import CreatActionType from "./cart.type";

const INITIAL_STATE = {
    hidden : true,
    cartItems : []
}

const CardReducer = (state = INITIAL_STATE , action) => {
    switch(action.type){
        case CreatActionType.TOGGLE_CREAT_HIIDEN :
            return{
                ...state,
                hidden : !state.hidden
            }

        case CreatActionType.ADD_ITEM:
            return{
                ...state,
                cartItems : [...state.cartItems , action.payload]
            }

        default :
            return state;

    }
}

export default CardReducer;