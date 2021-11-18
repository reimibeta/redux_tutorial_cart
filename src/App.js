import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
// items
import cartItems from "./cart-items";
// redux stuff
// redux store data
import { createStore } from "redux";
import { DECREASE, INCREASE } from "./actions";
// initial store
const initialStore = {
  count: 0,
  name: 'Reimi'
}
// reducer
function reducer(state, action){
  console.log({
    state, action
  });
  if(action.type === "DECREASE"){
    return { ...state, count: state.count - 1 };
  }
  if(action.type === "INCREASE"){
    return { ...state, count: state.count + 1 };
  }
  return state;
}
const store = createStore(reducer, initialStore);
store.dispatch({type: DECREASE});
store.dispatch({type: INCREASE});
store.dispatch({type: INCREASE});
store.dispatch({type: INCREASE});
store.dispatch({type: INCREASE});

console.log('state', store.getState());

function App() {
  // cart setup

  return (
    <main>
      <Navbar card={store.getState()} />
      <CartContainer cart={cartItems} />
    </main>
  );
}

export default App;