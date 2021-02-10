import CustomButton from "../../Component_Auth/CustomButton/CustomButton.component";
import "./Cart-dropdown.scss";
import CartItem from "../Cart_item/cart-item";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { selectItemCart } from "../../../Redux/Cart/cart.selector";
import { toggleCartHidden } from "../../../Redux/Cart/cart.action";

const CartDropDown = ({ cartItems, history, dispatch }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.length > 0 ? (
        cartItems.map((item) => <CartItem key={item.id} item={item} />)
      ) : (
        <spam className="impty-message">Your cart is impty</spam>
      )}
    </div>
    <CustomButton
      onClick={() => {
        history.push("/checkout");
        dispatch(toggleCartHidden());
      }}
    >
      GO TO CHECKOUT
    </CustomButton>
  </div>
);

const mapStateToProps = (state) => ({
  cartItems: selectItemCart(state),
});
export default withRouter(connect(mapStateToProps)(CartDropDown));
