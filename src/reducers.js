import { DECREASE, INCREASE, CLEAR_CART, REMOVE, GET_TOTALS, TOGGLE_AMOUNT } from "./actions";

function reducer(state, action){
    // switch(action.type){
    //     case CLEAR_CART:
    //         return { ...state, cart:[] };
    //     case DECREASE:
    //         // console.log("DECREASE: ", "you decreased amount.");
    //         let tempCartDecrease = [];
    //         if(action.payload.amount === 1){
    //             console.log('INCREASE: ', 'it is one')
    //         } else {
    //             tempCartDecrease = state.cart.map((cartItem) => {
    //                 // console.log(cartItem);
    //                 if(cartItem.id === action.payload.id){
    //                     cartItem = {
    //                         ...cartItem, 
    //                         amount: cartItem.amount - 1
    //                     }
    //                 }
    //                 return cartItem;
    //             });
    //         }
    //         return {
    //             ...state,
    //             cart: tempCartDecrease
    //         };
    //     case INCREASE:
    //         // console.log("INCREASE: ", "you increased amount.");
    //         let tempCartIncrease = state.cart.map((cartItem) => {
    //             // console.log(cartItem);
    //             if(cartItem.id === action.payload.id){
    //                 cartItem = {
    //                     ...cartItem, 
    //                     amount: cartItem.amount + 1
    //                 }
    //             }
    //             return cartItem;
    //         });
    //         return {
    //             ...state, // copy old state value
    //             cart:tempCartIncrease
    //         }
    //     case REMOVE:
    //         // console.log("REMOVE: ", "you removed "+action.payload.id);
    //         return {
    //             ...state, 
    //             cart:state.cart.filter((cartItem)=>cartItem.id !== action.payload.id)
    //         };
    //     default:
    //         return state;
    // }
    
    if(action.type === CLEAR_CART){
        return { ...state, cart:[] };
    }
            
    if(action.type === DECREASE){
        // console.log("DECREASE: ", "you decreased amount.");
        let tempCart = state.cart.map((cartItem) => {
            // console.log(cartItem);
            if(cartItem.id === action.payload.id){
                cartItem = {
                    ...cartItem, 
                    amount: cartItem.amount - 1
                }
            }
            return cartItem;
        });
        return {
            ...state,
            cart: tempCart
        };
    }
    if(action.type === INCREASE){
        // console.log("INCREASE: ", "you increased amount.");
        let tempCart = state.cart.map((cartItem) => {
            // console.log(cartItem);
            if(cartItem.id === action.payload.id){
                cartItem = {
                    ...cartItem, 
                    amount: cartItem.amount + 1
                }
            }
            return cartItem;
        });
        return {
            ...state, // copy old state value
            cart:tempCart
        }
    }
    if(action.type === REMOVE){
        // console.log("REMOVE: ", "you removed "+action.payload.id);
        return {
            ...state, 
            cart:state.cart.filter((cartItem)=>cartItem.id !== action.payload.id)
        };
    }
    if(action.type === GET_TOTALS){
        // console.log("TOTALS: ");
        let { total, amount } = state.cart.reduce((cartTotal, cartItem) => {
            const { price, amount } = cartItem;
            const itemTotal = price * amount;

            cartTotal.total += itemTotal;
            cartTotal.amount += amount;

            return cartTotal;
        },{
            total:0, 
            amount: 0
        });
        total = parseFloat(total.toFixed(2));
        return {
            ...state,
            total,
            amount
        };
    }
    if(action.type === TOGGLE_AMOUNT){
        return {...state, cart: state.cart.map(cartItem => {
            if(cartItem.id === action.payload.id){
                if(action.payload.toggle === 'inc'){
                    return cartItem = {...cartItem, amount:cartItem.amount + 1};
                }
                if(action.payload.toggle === 'dec'){
                    return cartItem = {...cartItem, amount:cartItem.amount - 1};
                }
            }
            return cartItem;
        })};
    }
    return state;
    
}

export default reducer;