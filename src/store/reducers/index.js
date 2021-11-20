import { combineReducers } from "redux";
// cart item reducer
import cartItemReducer from "./cartItemReducer";

const rootReducer = combineReducers({
    cartItemReducer
});

export default rootReducer;