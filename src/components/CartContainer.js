import React from "react";
import CartItem from "./CartItem";
import { connect } from "react-redux";
import { clearItem, getItemTotals } from "../store/actions/cartItemActions";
// const CartContainer = ({ cart = [], total, dispatch }) => {
const CartContainer = ({ cart = [], total, getTotals, clear }) => {
  // useEffect run everytime when component re-render
  React.useEffect(() => {
    // dispatch({
    //   type: GET_TOTALS
    // });
    getTotals();
  });
  if (cart.length === 0) {
    return (
      <section className="cart">
        {/* cart header */}
        <header>
          <h2>your bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  }
  return (
    <section className="cart">
      {/* cart header */}
      <header>
        <h2>your bag</h2>
      </header>
      {/* cart items */}
      <article>
        {cart.map(item => {
          return <CartItem key={item.id} {...item} />;
        })}
      </article>
      {/* cart footer */}
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total <span>${total}</span>
          </h4>
        </div>
        <button 
        // onClick={() => dispatch({type: CLEAR_CART})}
        onClick={() => clear()}
        className="btn clear-btn">clear cart</button>
      </footer>
    </section>
  );
};

const mapStateToProps = (state) => {
    console.log('STATE: ', state);
    const { cart, total } = state.cartItemReducer;
    return {cart: cart, total: total};
}

const mapDispatchToProps = (dispatch, ownProps) => {
    console.log("Own: ", ownProps);
    return {
      getTotals: () => dispatch(getItemTotals()),
      clear: () => dispatch(clearItem())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
