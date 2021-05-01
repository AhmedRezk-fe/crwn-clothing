import React from "react";
import { Route } from "react-router-dom";
import ComponentOverview from "../../Components/Component_Overview/Component_Overview";
import CollectionPage from "../CollectionPage/collection.component";

const ShopPage = ({ match }) => {
  console.log(match)
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={ComponentOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />

    </div>
  );
}

export default ShopPage;
