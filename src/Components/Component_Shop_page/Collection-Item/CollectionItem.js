import "./CollectionItem.scss";
import CustomButton from "../../Component_Auth/CustomButton/CustomButton.component";

import { connect } from "react-redux";
import { addItem } from "../../../Redux/Cart/cart.action";
import {selectItemCart} from "../../../Redux/Cart/cart.selector"


const CollectioItem = ({ item, addItem, cartItems }) => {
  const { imageUrl, name, price } = item;

  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
        {cartItems
          .filter((item) => item.name === name)
          .map((item) => (item.quantity && item.quantity))}
      </div>
      <CustomButton inverted onClick={() => addItem(item)}>
        Add To Cart
      </CustomButton>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartItems: selectItemCart(state),
});
const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CollectioItem);
