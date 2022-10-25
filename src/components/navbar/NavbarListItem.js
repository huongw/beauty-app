import { NavLink } from 'react-router-dom';

function NavbarListItem(props) {
  const { path, name, style, openMenu, closeMenu } = props;

  return (
    <>
      <li style={openMenu ? { animation: style } : null}>
        <NavLink to={path} onClick={closeMenu} exact>
          {name}
        </NavLink>
      </li>
    </>
  )
}

export default NavbarListItem