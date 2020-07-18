import React from 'react';
import './App.css';
import data from './data';

function App() {

  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
  }
  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open")
  }
  return (
    <div className="grid-container">
      <header className="header">
        <div className="brand">
          <button onClick={openMenu}>
              &#9776;
            </button>
          <a href="index.html">MTS-Exotique</a>
        </div>
        <div className="header-links">
          <a href="cart.html">Chariot</a>
          <a href="signin.html">Se Connecter</a>
        </div>
      </header>
      <aside className="sidebar">
          <h3>Catégorie d'achat</h3>
          <button className="sidebar-close-button" onClick={closeMenu}>x</button>
          <ul>
            <li>
              <a href="index.html">Fruits</a>
            </li>
    
            <li>
              <a href="index.html">Légumes</a>
            </li>
    
          </ul>
      </aside>
      <main className="main">
        <div className="content">
          <ul className="products">
            {
              data.products.map(product => 
                <li>
                  <div class="product">
                    <img class="product-image" src={product.image} alt="product" />
                    <div class="product-name">
                      <a href="product.html">{product.name}</a>
                    </div>
                    <div class="product-brand">{product.brand}</div>
                    <div class="product-price">{product.price}€</div>
                    <div class="product-rating">{product.rating} Stars (10 Commentaires)</div>
                  </div>
                </li>)
            }
              
          </ul>
        </div>
      </main>
      <footer className="footer">
          Tous droits reservés.
      </footer>
    </div>
  );
}

export default App;
