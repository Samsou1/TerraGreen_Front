import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";

const Footer = () => {
  return (
    <footer>
      <Link to="/" id="logo-footer">
        <img src={logo} alt="logo"></img>
      </Link>
      <Link className="link" to="/">
        <h1 className="company">TerraGreen</h1>
      </Link>
    </footer>
  );
};

export default Footer;
