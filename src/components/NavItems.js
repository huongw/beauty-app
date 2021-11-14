export const HOME_PAGE = "Home"
export const SHOP_PAGE = "Shop"
export const ABOUT_PAGE = "About"
export const CONTACT_PAGE = "Contact"

export default function NavItems(props) {

  return (
    <ul>
      <li onClick={() => { props.setPage(HOME_PAGE) }}>Home</li>
      <li onClick={() => { props.setPage(SHOP_PAGE) }}>Shop</li>
      <li onClick={() => { props.setPage(ABOUT_PAGE) }}>About</li>
      <li onClick={() => { props.setPage(CONTACT_PAGE) }}>Contact</li>
    </ul>
  )
}