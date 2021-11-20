import navData from '../../data/navData';
import NavbarListItem from './NavbarListItem';

function NavbarList(props) {

  const linkPaths = navData.map((link) => {
    return (
      <NavbarListItem
        key={link.id}
        name={link.name}
        style={link.style}
        path={link.path}
        openMenu={props.openMenu}
        closeMenu={props.closeMenu}
      />
    )
  })

  return (
    <ul className={props.navClass}>
      {linkPaths}
    </ul>
  )
}

export default NavbarList