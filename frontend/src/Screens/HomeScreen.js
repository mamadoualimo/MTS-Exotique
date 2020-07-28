import React from 'react';
import { Link } from 'react-router-dom';
import data from '../data';

function HomeScreen(props) {
    return <ul className="products">
    {
      data.products.map(product => 
        <li>
          <div class="product">
            <Link to={'/product/' + product._id}>
              <img class="product-image" src={product.image} alt="product" />
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