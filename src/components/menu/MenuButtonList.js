import MenuButtonListItem from "./MenuButtonListItem";

const buttonData = [
  {
    name: "Nails",
    target: "nails"
  },
  {
    name: "Facials",
    target: "facials"
  },
  {
    name: "Lashes",
    target: "lashes"
  }
]

export default function MenuButtonList(props) {
  const {handleDisplayMenu, active} = props;

  const buttons = buttonData.map(button => {
    return (
      <MenuButtonListItem 
        key={button.target}
        name={button.name}
        target={button.target}
        active={active}
        handleDisplayMenu={handleDisplayMenu}
      />
    )
  })

  return (
    <ul className="button-container">
        {buttons}
    </ul>
  )
}