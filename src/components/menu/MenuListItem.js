function MenuListItem(props) {
  const { title, desc, price } = props;

  return (
    <tr>
      <td>
        {title}<br />
        <span class="description">{desc}</span>
      </td>
      <td class="price">${price}</td>
    </tr>
  );
}

export default MenuListItem;
