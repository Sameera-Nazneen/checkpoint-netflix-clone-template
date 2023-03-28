import "./Navbar.css";
import logo from "./netflix-logo.png";
import logo2 from "./Netflix-avatar.png";

const Navbar = () => {
  

  return (
    <div className="nav">
      <img src={logo} alt="NetflixLogo" className="nav__logo" />
      <img src={logo2} alt="avatar" className="nav__avatar" />
    </div>
  );
};

export default Navbar;
