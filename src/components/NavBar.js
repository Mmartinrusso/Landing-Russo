import React from 'react';
import CartWidget from './CartWidget';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <div className="logo-container">
            <i className="fas fa-store logo-icon"></i>
            <h1 className="navbar-logo">TechStore</h1>
          </div>
        </div>
        
        <ul className="navbar-nav">
          <li className="nav-item">
            <a href="#inicio" className="nav-link">
              <i className="fas fa-home"></i>
              Inicio
            </a>
          </li>
          <li className="nav-item">
            <a href="#productos" className="nav-link">
              <i className="fas fa-mobile-alt"></i>
              Productos
            </a>
          </li>
          <li className="nav-item">
            <a href="#categorias" className="nav-link">
              <i className="fas fa-th-large"></i>
              Categorías
            </a>
          </li>
          <li className="nav-item">
            <a href="#ofertas" className="nav-link">
              <i className="fas fa-tags"></i>
              Ofertas
            </a>
          </li>
          <li className="nav-item">
            <a href="#contacto" className="nav-link">
              <i className="fas fa-envelope"></i>
              Contacto
            </a>
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