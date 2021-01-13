import React from "react"
import  {ReactComponent  as IconSvg} from "../../../assets/shopping-bag.svg"
import "./Cart.Icon.scss"
import {connect} from "react-redux"
import {toggleCartHidden} from "../../../Redux/Cart/cart.action"

const CartIcon =({toggleCartHidden}) => (
    <div className="cart-icon" onClick={toggleCartHidden}>
        <IconSvg className="cart-img" />
        <span className="item-count">0</span>
    </div>
)

const mapDespachToProps =  dispatch => ({
    toggleCartHidden : () => dispatch(toggleCartHidden())
});

export default connect(null , mapDespachToProps)(CartIcon)