import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function HomeScreen(props) {

  const [products, setProduct] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const {data} = await axios.get("/api/products");
      setProduct(data);
    }
    fetchData();
    return () => {
      //
    };
  }, [])

    return <ul className="products">
    {
      products.map(product => 
        <li key={product._id}>
          <div class="product">
            <Link to={'/product/' + product._id}>
              <img className="product-image" src={product.image} alt="product" />
            </Link>
            <div class="product-name">
              <Link to={'/product/' + product._id}>{product.name}</Link>
            </div>
            <div class="product-brand">{product.brand}</div>
            <div class="product-price">{product.price}€</div>
            <div class="product-rating">{product.rating} Stars (10 Commentaires)</div>
          </div>
        </li>)
    }
      
  </ul>
}
export default HomeScreen;