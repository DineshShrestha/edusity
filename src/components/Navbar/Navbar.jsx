import { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import menu_icon from "../../assets/menu-icon.png";
import { Link } from "react-scroll";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setSticky(window.scrollY > 50);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleMenu = () => {
    setMobileMenu((prev) => !prev);
  };

  const closeMenu = () => {
    setMobileMenu(false);
  };

  return (
    <nav className={`container ${sticky ? "dark-nav" : ""}`}>
      <img src={logo} alt="Edusity logo" className="logo" />

      <ul className={mobileMenu ? "" : "hide-mobile-menu"}>
        <li>
          <Link to="hero" smooth offset={0} duration={500} onClick={closeMenu}>
            Home
          </Link>
        </li>

        <li>
          <Link
            to="programs"
            smooth
            offset={-260}
            duration={500}
            onClick={closeMenu}
          >
            Program
          </Link>
        </li>

        <li>
          <Link
            to="about"
            smooth
            offset={-150}
            duration={500}
            onClick={closeMenu}
          >
            About us
          </Link>
        </li>

        <li>
          <Link
            to="campus"
            smooth
            offset={-260}
            duration={500}
            onClick={closeMenu}
          >
            Campus
          </Link>
        </li>

        <li>
          <Link
            to="testimonials"
            smooth
            offset={-260}
            duration={500}
            onClick={closeMenu}
          >
            Testimonial
          </Link>
        </li>

        <li>
          <Link
            to="contact"
            smooth
            offset={-260}
            duration={500}
            className="btn"
            onClick={closeMenu}
          >
            Contact Us
          </Link>
        </li>
      </ul>

      <button
        className="menu-button"
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
        aria-expanded={mobileMenu}
      >
        <img src={menu_icon} alt="Menu icon" className="menu-icon" />
      </button>
    </nav>
  );
};

export default Navbar;
