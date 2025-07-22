import React from 'react';
import CartWidget from './CartWidget';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <h1 className="navbar-logo">MiTienda</h1>
        </div>
        
        <ul className="navbar-nav">
          <li className="nav-item">
            <a href="#inicio" className="nav-link">Inicio</a>
          </li>
          <li className="nav-item">
            <a href="#productos" className="nav-link">Productos</a>
          </li>
          <li className="nav-item">
            <a href="#categorias" className="nav-link">Categorías</a>
          </li>
          <li className="nav-item">
            <a href="#contacto" className="nav-link">Contacto</a>
          </li>
        </ul>
        
        <div className="navbar-cart">
          <CartWidget />
        </div>
      </div>
    </nav>
  );
};

export default NavBar; 