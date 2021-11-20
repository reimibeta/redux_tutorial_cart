import { combineReducers } from "redux";
// cart item reducer
import cartItemReducers from "./cartItemReducers";

const rootReducer = combineReducers({
    cartItemReducers
});

export default rootReducer;