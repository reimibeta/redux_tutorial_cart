export const DECREASE = "DECREASE";
export const INCREASE = "INCREASE";
export const TOGGLE_AMOUNT = "TOGGLE_AMOUNT";
export const REMOVE = "REMOVE";
export const CLEAR_CART = "CLEAR_CART";
export const GET_TOTALS = "GET_TOTALS";

// decrease
export const decreaseItem = (id, amount) => {
    return { type: DECREASE, payload: { id, amount } };
}
// increase
export const increaseItem = (id) => {
    return { type: INCREASE, payload: { id } };
}
// toggle item
export const toggleItem = (id, toggle) => {
    return { type: TOGGLE_AMOUNT, payload: { id, toggle } };
}
// remove item
export const removeItem = (id) => {
    return {
        type: REMOVE, payload: { id }
    };
}
// clear item
export const clearItem = () => {
    return {
        type: CLEAR_CART
    };
}

export const getItemTotals = () => {
    return { type: GET_TOTALS };
}