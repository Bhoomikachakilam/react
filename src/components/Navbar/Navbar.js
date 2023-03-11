import "./Navbar.css";
import logo from "../../images/netflix-logo.png";
import avatar from "../../images/Netflix-avatar.png";
function Navbar() {
  return (
      <div className="nav">
           <img className="nav__logo"src={logo} alt="Netflix Logo" />
           <img className="nav__avatar"src={avatar} alt="Netflix Logo"
          />
      </div>  
  );
}

export default Navbar;