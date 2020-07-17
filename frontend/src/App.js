import React from 'react';
import logo from './logo.svg';
import './App.css';

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
              <a href="index.html">Legumes</a>
            </li>
    
          </ul>
      </aside>
      <main className="main">
          <div className="content">
              <ul className="products">
                <li>
                  <div className="product">
                    <img className="product-image" src="/images/d1.jpg" alt="product" />
                    <div className="product-name">
                      <a href="product.html">Banane plantain</a>
                    </div>
                    <div className="product-brand">plantain</div>
                    <div className="product-price">1,50€</div>
                    <div className="product-rating">4.5 Etoiles (10 Commentaires)</div>
                  </div>
                </li>
                <li>
                  <div className="product">
                    <img className="product-image" src="/images/d1.jpg" alt="product" />
                    <div className="product-name">
                      <a href="product.html">Banane plantain</a>
                    </div>
                    <div className="product-brand">plantain</div>
                    <div className="product-price">1,50€</div>
                    <div className="product-rating">4.5 Etoiles (10 Commentaires)</div>
                  </div>
                </li>
                <li>
                  <div className="product">
                    <img className="product-image" src="/images/d1.jpg" alt="product" />
                    <div className="product-name">
                      <a href="product.html">Banane plantain</a>
                    </div>
                    <div className="product-brand">plantain</div>
                    <div className="product-price">1,50€</div>
                    <div className="product-rating">4.5 Etoiles (10 Commentaires)</div>
                  </div>
                </li>
                <li>
                  <div className="product">
                    <img className="product-image" src="/images/d1.jpg" alt="product" />
                    <div className="product-name">
                      <a href="product.html">Banane plantain</a>
                    </div>
                    <div className="product-brand">plantain</div>
                    <div className="product-price">1,50€</div>
                    <div className="product-rating">4.5 Etoiles (10 Commentaires)</div>
                  </div>
                </li>
                <li>
                  <div className="product">
                    <img className="product-image" src="/images/d1.jpg" alt="product" />
                    <div className="product-name">
                      <a href="product.html">Banane plantain</a>
                    </div>
                    <div className="product-brand">plantain</div>
                    <div className="product-price">1,50€</div>
                    <div className="product-rating">4.5 Etoiles (10 Commentaires)</div>
                  </div>
                </li>
                <li>
                  <div className="product">
                    <img className="product-image" src="/images/d1.jpg" alt="product" />
                    <div className="product-name">
                      <a href="product.html">Banane plantain</a>
                    </div>
                    <div className="product-brand">plantain</div>
                    <div className="product-price">1,50€</div>
                    <div className="product-rating">4.5 Etoiles (10 Commentaires)</div>
                  </div>
                </li>   
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
