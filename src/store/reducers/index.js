import { combineReducers } from "redux";
// cart item reducer
import cartItemReducer from "./cartItem.reducer";

const rootReducer = combineReducers({
    cartItemReducer
});

export default rootReducer;