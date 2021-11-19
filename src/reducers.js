import { DECREASE, INCREASE, CLEAR_CART, REMOVE } from "./actions";

function reducer(state, action){
    switch(action.type){
        case CLEAR_CART:
            return { ...state, cart:[] };
        case DECREASE:
            console.log("DECREASE: ", "you decreased amount.");
        case INCREASE:
            // console.log("INCREASE: ", "you increased amount.");
            let tempCart = state.cart.map((cartItem) => {
                // console.log(cartItem);
                if(cartItem.id === action.payload.id){
                    // cartItem = 
                }
                return cartItem;
            });
            return {
                ...state, // copy old state value
                cart:tempCart
            }
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