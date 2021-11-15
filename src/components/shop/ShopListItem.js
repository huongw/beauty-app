import { Link } from 'react-router-dom';

function ShopListItem(props) {
  const { id, image, desc, price, title } = props;

  return (
    <div>
      <h2>{title}</h2>
      <Link to={`/shop/${id}`} target="_blank"><img src={image} alt="" /></Link>
      <span>{price}</span>
      <p>{desc}</p>
    </div>
  );
}

export default ShopListItem;
