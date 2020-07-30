import React from 'react';
import { Link } from 'react-router-dom';
import data from '../data';

function ProductScreen(props) {
    console.log(props.match.params.id);
    const product = data.products.find(x => x._id === props.match.params.id);
    return <div>
    <div className="back-to-result">
      <Link to="/">Retour au résultat</Link>
    </div>
        <div className="details">
          <div className="details-image">
            <img src={product.image} alt="product"></img>
          </div>
          <div className="details-info">
            <ul>
              <li>
                <h4>{product.name}</h4>
              </li>
                <li>
                    {product.rating} Etoiles ({product.numReviews} Avis)
                </li>
              <li>
                Prix: <b>{product.price}€</b>
              </li>
              <li>
                Description:
                <div>{product.description}</div>
              </li>
            </ul>
          </div>
          <div className="details-action">
            <ul>
              <li>Prix: {product.price} </li>
              <li>
                statut: {product.status}
              </li>
              <li>
                Qantité: <select>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                </select>
              </li>
              <li>
              <button className="button primary">
                      Ajouter au panier</button>
              </li>
            </ul>
          </div>
        </div>
    </div>
}
export default ProductScreen;