import "./CollectionItem.scss";
import CustomButton from "../../Component_Auth/CustomButton/CustomButton.component";

import {connect} from "react-redux";
import {addItem} from "../../../Redux/Cart/cart.action"

const CollectioItem = ({ item , addItem }) => {
  const {imageUrl ,name ,price } = item;

  return(

  
  <div className="collection-item">
    <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
    <div className="collection-footer">
      <span className="name">{name}</span>
      <span className="price">{price}</span>
    </div>
    <CustomButton inverted onClick={()=> addItem(item)}>Add To Cart</CustomButton>
  </div>
)};

const mapDispatchToProps = dispatch => ({
  addItem : item => dispatch(addItem(item))
})

export default connect(null ,mapDispatchToProps )(CollectioItem);
