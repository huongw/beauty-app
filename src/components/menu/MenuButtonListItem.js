import classNames from "classnames";

export default function MenuButtonListItem(props) {
  const {target, name, handleDisplayMenu, active} = props;

  const buttonClass = classNames("button", {
    "active": active === target
  })

  return (
    <li className={buttonClass} data-target={target} onClick={handleDisplayMenu}>{name}</li>
  )
}