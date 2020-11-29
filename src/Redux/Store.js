import {createStore ,applyMiddleware} from "redux";

import logger from "redux-logger";

import RootReduce from "./root-reducer";

const MiddleWeares = [logger];

const Store = createStore(RootReduce ,applyMiddleware(...MiddleWeares));

export default Store;