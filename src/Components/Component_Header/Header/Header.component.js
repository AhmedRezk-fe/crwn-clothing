import "./Header.style.scss";
import {Link} from "react-router-dom";
import {ReactComponent as Logo} from "../../../assets/crown.svg.svg";
import CartIcon from "../../Componrnt_Cart/Cart.Icon/Cart.Icon"
import CartDropDown from "../../Componrnt_Cart/Cart-dropdown/Cart-dropdown"

import {auth} from "../../../Firebase/Firebase.Utils";
import { connect } from "react-redux";


const Header = ({currentUser , hidden}) => (
    
    <div className="header">
        <Link className="logo-container" to="/">
            <Logo className="logo"></Logo>
        </Link>
        <div className="options">
            {
                currentUser ? 
                <div className="option" onClick={() => auth.signOut()}>
                    SIGN OUT
                </div>
                 : 
                <Link className="option" to="/auth">SIGN IN</Link>
            }
            <Link className="option" to="/shop">SHOP</Link>
            <Link className="option" to="/content">CONTACT</Link>
            <CartIcon />
        </div>
        {
            hidden ? null : <CartDropDown />
        }
            
    </div>
    
)

const mapStateToProps = ({user : {currentUser} , cart : { hidden}}) => (
    {
        currentUser,
        hidden
    }
)

export default  connect(mapStateToProps)(Header);