import { useState } from 'react';


function useNavData() {
  const [openMenu, setOpenMenu] = useState(false);

  const openMenuHandler = function () {
    if (!openMenu) {
      return setOpenMenu(!openMenu)
    }
    setOpenMenu(!openMenu)
  }

  const closeMenu = function () {
    setOpenMenu(false)
  }

  let navClass = 'nav-links';
  let burgerClass = 'hamburger';

  if (openMenu) {
    navClass += ' nav-active';
    burgerClass += ' toggle';
  } else {
    navClass = 'nav-links'
    burgerClass = 'hamburger';
  }

  return { openMenuHandler, navClass, burgerClass, openMenu, closeMenu }
}

export default useNavData