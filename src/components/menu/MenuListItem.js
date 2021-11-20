function MenuListItem(props) {
  const { title, desc, price } = props;

  return (
    <tr>
      <td>
        {title}<br />
        <span className="description">{desc}</span>
      </td>
      <td className="price">${price}</td>
    </tr>
  );
}

export default MenuListItem;
