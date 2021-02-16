import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import UserReducer from "./User/user.reducer";
import CardReducer from "./Cart/cart.reducer";

import ReduceDirectory from "./Directory/directory.reducer"

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
  blacklist: ["user"],
};

const rootReducer = combineReducers({
  user: UserReducer,
  cart: CardReducer,
  directory:ReduceDirectory
});

export default persistReducer(persistConfig, rootReducer);
