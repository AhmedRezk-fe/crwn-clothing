import "./Preview-collection.style.scss";
import CollectioItem from "../Collection-Item/CollectionItem";

const PreviewCollections = ({ title, items }) => (
  <div className="collection-preview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {items
        .filter((item, idx) => idx < 4)
        .map(({ id, ...item }) => (
          <CollectioItem key={id} {...item} />
        ))}
    </div>
  </div>
);
export default PreviewCollections;
