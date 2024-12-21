import React from 'react';
import { Link } from 'react-router-dom';

function Menu() {
  console.log('Menu is rendering');
  return (
    <nav className="App-menu">
      <ul className="flex space-x-4">
        <li><Link to="/" className="text-white">Inicio</Link></li>
        <li><Link to="/seccion1" className="text-white">Formulario</Link></li>
        <li><Link to="/seccion2" className="text-white">Halo 3 odst</Link></li>
        <li><Link to="/seccion3" className="text-white">Halo reach</Link></li>
      </ul>
    </nav>
  );
}

export default Menu;
