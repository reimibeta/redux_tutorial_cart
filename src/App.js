import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
// items
import cartItems from "./cart-items";
// redux stuff
// redux store data
import { createStore } from "redux";
import reducer from "./reducers";
import { Provider } from "react-redux";
// initial store
const initialStore = {
  cart: cartItems,
  total: 150,
  amount: 5
}
// reducer

const store = createStore(reducer, initialStore);

function App() {
  // cart setup

  return (
    <Provider store={store}>
      <Navbar />
      <CartContainer />
    </Provider>
  );
}

export default App;
