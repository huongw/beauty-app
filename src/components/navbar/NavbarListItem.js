import { Link } from 'react-router-dom';

function NavbarListItem(props) {
  const { path, name, style, openMenu, closeMenu } = props;

  return (
    <>
      <li style={openMenu ? { animation: style } : null}>
        <Link to={path} onClick={closeMenu}>
          {name}
        </Link>
      </li>
    </>
  )
}

export default NavbarListItem