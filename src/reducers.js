import { DECREASE, INCREASE, CLEAR_CART, REMOVE } from "./actions";

function reducer(state, action){
    switch(action.type){
        case CLEAR_CART:
            return { ...state, cart:[] };
        case DECREASE:
            console.log("DECREASE: ", "you decreased amount.");
        case INCREASE:
            console.log("INCREASE: ", "you increased amount.");
        case REMOVE:
            // console.log("REMOVE: ", "you removed "+action.payload.id);
            return {
                ...state, 
                cart:state.cart.filter((cartItem)=>cartItem.id !== action.payload.id)
            };
        default:
            return state;
    }
    // if(action.type === CLEAR_CART){
    //     return { ...state, cart:[]};
    // }
    // return state;
}

export default reducer;