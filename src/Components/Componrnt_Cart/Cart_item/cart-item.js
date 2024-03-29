import React from "react"
import "./style.scss";



const CartItem = ({item : {imageUrl, name, price, quantity}}) => (
    <div className="cart-item">
        <img src={imageUrl} alt="item"/>
        <div className="item-details">
            <span className="nane">{name}</span>
            <span className="price">{quantity}  x  ${price}</span>
        </div>
    </div>
)

export default CartItem