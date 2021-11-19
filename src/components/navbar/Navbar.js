import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './navbar.css';

function Navbar() {
  const [header, setHeader] = useState(false);

  useEffect(() => {
    const handleScroll = function () {
      if (window.scrollY > 0) {
        return setHeader(!header)
      }

      setHeader(header);
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }

  }, [])

  let headerScroll = 'scroll';

  if (header) {
    headerScroll += ' changeColor';
  } else {
    headerScroll = 'scroll';
  }

  return (
    <header className={headerScroll}>
      <nav>
        <h1 className="logo">LB</h1>
        <ul className="nav-links">
          <li>
            <Link to="/">
              Home
            </Link>
          </li>
          <li>
            <Link to="/menu">
              Menu
            </Link>
          </li>
          <li>
            <Link to="/gallery">
              Gallery
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
