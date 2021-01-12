import React from "react"
import  {ReactComponent  as IconSvg} from "../../../assets/shopping-bag.svg"
import "./Cart.Icon.scss"

const CartIcon =() => (
    <div className="cart-icon">
        <IconSvg className="cart-img" />
        <span className="item-count">0</span>
    </div>
)

export default CartIcon