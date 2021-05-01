import React from "react";
import "./Cart-item.scss";


const CartItemDrop = ({item : {imageUrl , price , name , quantity}}) => (
    
    <div className="cart-item" >

        <img src={imageUrl} alt="" />

        <div className="item-details" >

            <span className="name">{name}</span>
            <span className="price">
                {quantity} x $ {price}
            </span>

        </div>

    </div>
    
)

export default CartItemDrop;