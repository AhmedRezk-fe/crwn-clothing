import CustomButton from "../../Component_Auth/CustomButton/CustomButton.component";
import "./Cart-dropdown.scss"
import CartItem from "../Cart_item/cart-item"
import {connect} from "react-redux"
import {selectItemCart} from "../../../Redux/Cart/cart.selector"


const CartDropDown = ({cartItems}) => (
    <div className="cart-dropdown">
        <div className="cart-items" >
            {
                cartItems.map(item => (
                    <CartItem key={item.id}  item={item} />
                ))
            }
           
        </div>
        <CustomButton >GO TO CHECKOUT</CustomButton>
    </div>
)

const mapStateToProps = (state) => ({
    cartItems : selectItemCart(state)
})
export default connect(mapStateToProps) (CartDropDown);