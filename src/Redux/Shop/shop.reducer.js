import ShopData from "./Shop_Data";
const INITIAL_STATE = {
    collections : ShopData
} 

const ShopReducer = (state = INITIAL_STATE , action) => {
    switch(action.type) {
        default :
            return state;
    }
}
export default ShopReducer;