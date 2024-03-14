import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.pageYOffset > 1080);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div
        className={`navbar ${isScrolled ? "scrolled" : ""} ${
          isMenuOpen ? "show" : ""
        } ${isHomePage ? "" : "not-home"}`}
      >
        <div className="logo">
          <span>AIA</span>
        </div>
        <div className="menu" onClick={toggleMenu}>
          <div className="line line1"></div>
          <div className="line linemid"></div>
          <div className="line line2"></div>
        </div>

        <div className={`mid-links ${isMenuOpen ? "show" : ""}`}>
          <ul>
            <li>
              <NavLink to="/" activeClassName="active-link">
                Home
              </NavLink>
            </li>

            <li>
              <NavLink to="/courses" activeClassName="active-link">
                Courses
              </NavLink>
            </li>
            <li>
              <NavLink to="/services" activeClassName="active-link">
                Services
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" activeClassName="active-link">
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" activeClassName="active-link">
                About
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="link">
          <a href="">aiainfo@yahoo.com</a>
        </div>
      </div>

      <div className={`reveal-navbar ${isMenuOpen ? "show" : ""}`}>
        <ul>
          <li>
            <NavLink
              to="/"
              activeClassName="active-link"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/courses"
              activeClassName="active-link"
              onClick={() => setIsMenuOpen(false)}
            >
              Courses
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/services"
              activeClassName="active-link"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              activeClassName="active-link"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              activeClassName="active-link"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
