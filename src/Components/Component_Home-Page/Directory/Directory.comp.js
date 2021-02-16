import "./Directory.style.scss";
import MenuItem from "../Menu_Item/MenuItem.comp";
import {connect} from "react-redux"
import {createStructuredSelector} from "reselect"
import {directorySelectorData} from "../../../Redux/Directory/directory.selector"

const Directory = ({sections}) => (
  <div className="directory-menu">
    {sections.map(({ id, ...otherdata }) => (
      <MenuItem key={id} {...otherdata} />
    ))}
  </div>
);

const stateMapToProps = createStructuredSelector({
  sections : directorySelectorData
})
export default connect(stateMapToProps) (Directory);
