import React from "react"
import  {ReactComponent  as IconSvg} from "../../../assets/shopping-bag.svg"
import "./Cart.Icon.scss"
import {connect} from "react-redux"
import {toggleCartHidden} from "../../../Redux/Cart/cart.action"
import {selectItemCartCount} from "../../../Redux/Cart/cart.selector"

const CartIcon =({toggleCartHidden , cartItems}) => (
    <div className="cart-icon" onClick={toggleCartHidden}>
        <IconSvg className="cart-img" />
        <span className="item-count">{cartItems}</span>
    </div>
)

const mapDespachToProps =  dispatch => ({
    toggleCartHidden : () => dispatch(toggleCartHidden())
});

const mapStateToProps = (state) => ({
    cartItems: selectItemCartCount(state)
})

export default connect(mapStateToProps , mapDespachToProps)(CartIcon)