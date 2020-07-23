import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import './Header.scss';
import logo from '../../assets/img/logo.png';

const Header = (props) => {

  return (
    <div className='Header shadow mb-5 rounded'>
      <div className='Header-container'>
        <div className='Header-logo'>
          <button type='button' className='Header_toggle-button'>
            <div className='Header_toggle-button_line' />
            <div className='Header_toggle-button_line' />
            <div className='Header_toggle-button_line' />
          </button>
          <Link to='/'>
            <img height='60' src={logo} alt='' />
          </Link>
        </div>
        <div className='Header-buscador'>
          <input className='input' placeholder='Buscar empleado' type='text' />
          <span><AiOutlineSearch /></span>
        </div>
        <nav className='Header-menu'>
          <ul>
            <li><Link to='/cursos'>Perfil</Link></li>
            <li><a href='/'>Inicia Sesión</a></li>
            <li><a href='/'>Registrate</a></li>
          </ul>
        </nav>
      </div>
    </div>

  );
};

export default Header;
