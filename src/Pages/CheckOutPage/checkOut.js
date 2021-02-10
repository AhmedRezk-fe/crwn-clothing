import React from "react";
import {connect} from "react-redux"
import {createStructuredSelector} from "reselect"
import "./checkOut.scss";
import CheckOutItem from "../../Components/Componrnt_Cart/Checkout_item/checkOutItem"

import {selectCartTotal , selectItemCart} from "../../Redux/Cart/cart.selector"

const CheckOut = ({cartItems , total}) => {
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="checkout-block">
          <span>Product</span>
        </div>
        <div className="checkout-block">
          <span>Description</span>
        </div>
        <div className="checkout-block">
          <span>Quantity</span>
        </div>
        <div className="checkout-block">
          <span>Price</span>
        </div>
        <div className="checkout-block">
          <span>Remove</span>
        </div>
      </div>
      {
        cartItems.map(cartItem => (
          <CheckOutItem key={cartItem.id} cartItem={cartItem} />
        ))
        
      }
      <span className="total">TOTAL ${total}</span>
      
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
    total : selectCartTotal,
    cartItems : selectItemCart
})
export default connect(mapStateToProps) (CheckOut);
