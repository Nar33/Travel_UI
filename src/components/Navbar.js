import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { Button } from "./Button";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closemobileMenu = () => setClick(false);
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  useEffect(() => {
    showButton();
  }, []);
  window.addEventListener("resize", showButton) 

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closemobileMenu}>
            Sky Travel
          </Link>

          <ul className={click ? "nav-bar active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closemobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/services" className="nav-links" onClick={closemobileMenu}>
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/products" className="nav-links" onClick={closemobileMenu}>
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/signup" className="nav-links-mobile" onClick={closemobileMenu}>
                Sign Up
              </Link>
            </li>
          </ul>
          {
            button && <Button buttonStyle="btn--outline">Sign Up</Button>
          }
        </div>
      </nav>
    </>
  );
}

export default Navbar;
