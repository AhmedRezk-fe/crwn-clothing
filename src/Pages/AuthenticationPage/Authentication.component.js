import "./Authentication.style.scss";
import SignIn from "../../Components/Component_Auth/Sin-In/SignIn-component";
import SignUP from "../../Components/Component_Auth/Sign-Up/SignUP.Component";

const Authentication = () => (
    <div className="authentication">
        <SignIn />
        <SignUP />
    </div>
) 

export default  Authentication;