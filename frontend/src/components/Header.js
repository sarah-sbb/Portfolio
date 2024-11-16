// frontend/src/components/Header.js
import React from 'react';
import './Header.scss';


const Header = () => {
  return (
    <header className="header">
      <h1>Mon Portfolio</h1>
      <nav>
        <ul>
          <li><a href="/">Accueil</a></li>
          <li><a href="/about">À propos</a></li>
          <li><a href="/projects">Projets</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;