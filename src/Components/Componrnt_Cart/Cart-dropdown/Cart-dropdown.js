import CustomButton from "../../Component_Auth/CustomButton/CustomButton.component";
import "./Cart-dropdown.scss"
import CartItem from "../Cart_item/cart-item"
import {connect} from "react-redux"



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

const mapStateToProps = ({cart :{cartItems}}) => ({
    cartItems
})
export default connect(mapStateToProps) (CartDropDown);