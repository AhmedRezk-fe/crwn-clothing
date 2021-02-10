import React from "react";
import "./checkOutItem.scss";
import { connect } from "react-redux";
import {
  clearItem,
  addItem,
  ramoveItem,
} from "../../../Redux/Cart/cart.action";

const CheckOutItem = ({ cartItem, clearItem, addItem, ramoveItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item-img" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => ramoveItem(cartItem)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItem(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => clearItem(cartItem)}>
        &#10005;
      </div>
    </div>
  );
};
const mapdispachToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItem(item)),
  ramoveItem: (item) => dispatch(ramoveItem(item)),
  addItem: (item) => dispatch(addItem(item)),
});
export default connect(null, mapdispachToProps)(CheckOutItem);
