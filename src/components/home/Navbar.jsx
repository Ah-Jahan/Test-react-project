import { useRef } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

export default function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <h3>Logo</h3>
      <nav ref={navRef}>
        <Link to="/home">Home</Link>

        <Link to="/aboutMeCard">About me</Link>

        <Link to="/contact">Contact</Link>

        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}
