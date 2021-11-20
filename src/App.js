import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
// items

// redux stuff
// redux store data
import { createStore } from "redux";
import reducer from "./reducers";
import { Provider } from "react-redux";

// reducer

const store = createStore(reducer);

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
