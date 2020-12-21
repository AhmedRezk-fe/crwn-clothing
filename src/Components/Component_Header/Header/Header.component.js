import "./Header.style.scss";
import {Link} from "react-router-dom";
import {ReactComponent as Logo} from "../../../assets/crown.svg.svg";

import {auth} from "../../../Firebase/Firebase.Utils";
import { connect } from "react-redux";


const Header = ({currentUser}) => (
    
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
        </div>
    </div>
    
)

const mapStateToProps = state => (
    {
        currentUser : state.user.currentUser
    }
)

export default  connect(mapStateToProps)(Header);