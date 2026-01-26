import "./Footer.css";
import { Link } from "react-scroll";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer id="footer" className="footer">
      <p>© {year} Edusity. All rights reserved.</p>

      <nav aria-label="Footer navigation">
        <ul>
          <li>
            <Link to="footer" smooth duration={300}>
              Terms of service
            </Link>
          </li>
          <li>
            <Link to="footer" smooth duration={300}>
              Privacy policy
            </Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
