import './navbar.css';
import { useNavData, Hamburger, NavbarList } from './index';

function Navbar() {

  const { openMenuHandler, navClass, burgerClass, openMenu, closeMenu } = useNavData();

  return (
    <header className="scroll">
      <nav>
        <h1 className="logo">LB</h1>
        <NavbarList
          navClass={navClass}
          openMenu={openMenu}
          closeMenu={closeMenu}
        />
        <Hamburger
          openMenuHandler={openMenuHandler}
          burgerClass={burgerClass}
        />
      </nav>
    </header>
  );
}

export default Navbar;
