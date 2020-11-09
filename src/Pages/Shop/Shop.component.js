import React from "react";
import ShopData from "./Shop_Data";
import PreviewCollections from "../../Components/Component_Shop_page/Preview-collection/Preview-collection.compo";

class ShopPage extends React.Component {
  state = { collections: ShopData };
  render() {
    const { collections } = this.state;

    return (
      <div className="shop-page">
        {collections.map(({ id, ...otherCollectionsProps }) => (
          <PreviewCollections key={id} {...otherCollectionsProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
