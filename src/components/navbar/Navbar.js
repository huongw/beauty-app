import { Link } from 'react-router-dom';
import './navbar.css';

function Navbar() {
  return (
    <header>
      <nav>
        <h1 id="logo">LB</h1>
        <ul className="nav-links">
          <li>
            <Link to="/">
              Home
            </Link>
          </li>
          <li>
            <Link to="/shop">
              Shop
            </Link>
          </li>
          <li>
            <Link to="/gallery">
              Gallery
            </Link>
          </li>
          <li>
            <Link to="/about">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
