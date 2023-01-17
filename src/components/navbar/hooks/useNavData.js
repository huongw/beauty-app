import { useState } from 'react';
import classNames from 'classnames';


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

  const navClass = classNames("nav-links", {
    "nav-active": openMenu
  })

  const burgerClass = classNames("hamburger", {
    "toggle": openMenu
  })

  return { openMenuHandler, navClass, burgerClass, openMenu, closeMenu }
}

export default useNavData