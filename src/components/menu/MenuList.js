import MenuListItem from "./MenuListItem";

function MenuList(props) {
  const { data, name } = props;

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
    <table>
      <caption>
        {name}
      </caption>
      <thead>
        <tr>
          <th>Style</th>
          <th class="price">Price</th>
        </tr>
      </thead>
      <tbody>
        {menuList}
      </tbody>
    </table>
  );
}

export default MenuList;
