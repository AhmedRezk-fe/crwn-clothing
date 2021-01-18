import React from "react"
import  {ReactComponent  as IconSvg} from "../../../assets/shopping-bag.svg"
import "./Cart.Icon.scss"
import {connect} from "react-redux"
import {toggleCartHidden} from "../../../Redux/Cart/cart.action"

const CartIcon =({toggleCartHidden , cartItems}) => (
    <div className="cart-icon" onClick={toggleCartHidden}>
        <IconSvg className="cart-img" />
        <span className="item-count">{cartItems}</span>
    </div>
)

const mapDespachToProps =  dispatch => ({
    toggleCartHidden : () => dispatch(toggleCartHidden())
});

const mapStateToProps = ({cart : {cartItems}}) => ({
    cartItems: cartItems.reduce((accumalatedQuantity , cartItems) => accumalatedQuantity + cartItems.quantity , 0 ) 
})

export default connect(mapStateToProps , mapDespachToProps)(CartIcon)