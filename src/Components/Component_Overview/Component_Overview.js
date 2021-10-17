import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import PreviewCollections from "../Component_Shop_page/Preview-collection/Preview-collection.compo";
import { selectCollections } from "../../Redux/Shop/shop.selector";
import "./style_Overview.scss";

const ComponentOverview = ({ collections }) => {
  console.log("collections ?",{collections :{...collections} });
  return (
    <div className="collection-overview">
      {collections.map(({ id, ...otherCollectionsProps }) => (
          <PreviewCollections key={id} {...otherCollectionsProps} />
        ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollections,
});

export default connect(mapStateToProps)(ComponentOverview);
