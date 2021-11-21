import { combineReducers } from "redux";
// cart item reducer
import cartItemReducer from "./cartItem.reducer";
// auth reducer
import authReducer from "./auth.reducer";

const rootReducer = combineReducers({
    cartItemReducer,
    authReducer
});

export default rootReducer;