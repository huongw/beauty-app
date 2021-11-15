import { useState, useEffect } from 'react';
import axios from 'axios';

function ShopPreviewItem({ match }) {

  const [product, setProduct] = useState({})

  useEffect(() => {
    const product = `https://fakestoreapi.com/products/${match.params.id}`
    axios.get(product)
      .then((res) => {
        setProduct(res.data)
      })
      .catch((err) => {
        console.log(err.message)
      })
  }, [])

  return (
    <div>
      <h1>{product.title}</h1>
      <img src={product.image} alt="" />
      <span>{product.price}</span>
      <p>{product.description}</p>
    </div>
  );
}

export default ShopPreviewItem;
