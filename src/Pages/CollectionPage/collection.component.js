import React from "react";
import "./collection.style.scss";
import { connect } from 'react-redux';
import { selectCollection } from "../../Redux/Shop/shop.selector";
import CollectioItem from "../../Components/Component_Shop_page/Collection-Item/CollectionItem"

const CollectionPage = ({ collection }) => {
    const { title, items } = collection;
    return (
        <div className="collection-page ">
            <h2 className="title">{title}</h2>
            <div className="items">
                {
                    items.map((item) => (
                        <CollectioItem key={item.id} item={item} />
                    ))
                }
            </div>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})
export default connect(mapStateToProps)(CollectionPage);