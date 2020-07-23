/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './Footer.scss';
import logo from '../../assets/img/buho.jpg';

const Footer = () => (
  <footer className='Footer'>
    <div className='Footer-container'>
      <nav className='nav--Footer'>
        <div className='logo--Footer'>
          <img src={logo} />
        </div>
        <p>
          &copy; Pinturillo
          {' '}
        </p>
      </nav>
    </div>
    <div className='Footer-text'>
      <ul>
        <li><a href='/'>Terminos de uso</a></li>
        <li><a href='/'>Declaración de privacidad</a></li>
        <li><a href='/'>Centro de ayuda</a></li>
      </ul>
    </div>

  </footer>
);

export default Footer;
