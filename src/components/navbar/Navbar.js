import './navbar.css';
import { useHeaderData, useNavData, Hamburger, NavbarList } from './index';

function Navbar() {

  const { headerClass } = useHeaderData();
  const { openMenuHandler, navClass, burgerClass, openMenu, closeMenu } = useNavData();

  return (
    <header className={headerClass}>
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
