import "./header.css";
import logo from "../../../assets/LogoBitenc.svg";

const Header = () => {
  return (
    <nav className="navegacao">
      <div className="containerHeader">
        <div className="ImageContainer">
          <img src={logo} alt="" />
        </div>
        <ul>
          <li>
            <a
              href="https://www.linkedin.com/in/emanuelbitencourt/"
              target="_blank"
            >
              Linkedin
            </a>
          </li>
          <li>
            <a href="https://github.com/EmanuelBitenc" target="_blank">
              Github
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Header;
