import "./Preview-collection.style.scss";
import CollectioItem from "../Collection-Item/CollectionItem";

const PreviewCollections = ({ title, items }) => (
  <div className="collection-preview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {items
        .filter((item, idx) => idx <4)
        .map((item) => (
          <CollectioItem key={item.id} item={item} />
        ))}
    </div>
  </div>
);
export default PreviewCollections;
