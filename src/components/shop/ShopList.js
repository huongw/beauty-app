import ShopListItem from './ShopListItem';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './shop.css';

function ShopList() {

  const [products, setProducts] = useState([])

  useEffect(() => {
    const allProducts = 'https://fakestoreapi.com/products/category/jewelery'
    axios.get(allProducts)
      .then((res) => {
        setProducts(res.data)
      })
      .catch((err) => {
        console.log(err.message)
      })
  }, [])

  const allProducts = products.map((product) => {
    return (
      <ShopListItem
        key={product.id}
        id={product.id}
        title={product.title}
        price={product.price}
        image={product.image}
        desc={product.description}
      />
    )
  })

  return (
    <div>
      <h1>Shop</h1>
      {allProducts}
    </div>
  );
}

export default ShopList;
