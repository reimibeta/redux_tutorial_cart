import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
// items

// // redux stuff
// // redux store data
// import { createStore } from "redux";
// import { Provider } from "react-redux";

// // reducer
// // import reducer from "./reducers";
// // const store = createStore(reducer);
// import rootReducer from "./store/reducers/index";
// const store = createStore(rootReducer);

function App() {
  // cart setup

  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  );
}

export default App;
