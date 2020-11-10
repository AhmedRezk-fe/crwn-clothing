import "./Header.style.scss";
import {Link} from "react-router-dom";
import {ReactComponent as Logo} from "../../../assets/crown.svg.svg";

const Header = (props) => (
    <div className="header">
        <Link className="logo-container" to="/">
            <Logo className="logo"></Logo>
        </Link>
        <div className="options">
            {
                props.currentUser ? 
                <Link className="option" to="/auth">SIGN OUT</Link> : 
                <Link className="option" to="/auth">SININ</Link>
            }
            
            <Link className="option" to="/shop">SHOP</Link>
            <Link className="option" to="/content">CONTACT</Link>
        </div>
    </div>
)


export default Header;