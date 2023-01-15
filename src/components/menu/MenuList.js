import MenuListItem from "./MenuListItem";
import classNames from "classnames";

function MenuList(props) {
  const { data, name, id, active } = props;

  const tableClass = classNames("table-content", {
    "active": id === active
  })

  const menuList = data.map((option) => {
    return (
      <MenuListItem
        key={option.id}
        title={option.title}
        desc={option.desc}
        price={option.price}
      />
    )
  })

  return (
    <table id={id} className={tableClass}>
      <caption>
        {name}
      </caption>
      <thead>
        <tr>
          <th>Style</th>
          <th className="price">Price</th>
        </tr>
      </thead>
      <tbody>
        {menuList}
      </tbody>
    </table>
  );
}

export default MenuList;
