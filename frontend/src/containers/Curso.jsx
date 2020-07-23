/* eslint-disable jsx-a11y/heading-has-content */
import React from 'react';
import HeaderPrueba from '../components/commons/header/header';
import '../assets/styles/components/Curso.scss';
import img from '../assets/img/curso-programacion.jpg';

const IMAGE = 'https://github.com/dignelidxdx/PersonalPortfolio/blob/master/src/assets/static/Cover.png?raw=true';

const Curso = () => (
  <section className='Curso-Usuario'>
    <HeaderPrueba />
    <h4 className='Curso-title' />
    <div className='row Curso-container'>
      <div className='Curso-fondo'>
        <img src={IMAGE} alt='fondo' />
      </div>
      <div className='col-sm-5 Curso-container-name'>
        <p>
          Principal
          {' '}
          {'>'}
          {' '}
          Desarrollo Web
        </p>
        <h2>Bienvenidas al curso de Desarrollo web</h2>
        <p>Curso de desarrollo Web para desbloquear tu habilidad</p>
        <p>Calificaciones: 5 puntos - 1.300 estudiantes</p>
        <p>Fecha de la última actualización: 1/2020 - Español</p>
        <div className='row Curso-container-link'>
          <div className='col-sm-4'>
            <a href='/'>Lista de deseos</a>
          </div>
          <div className='col-sm-4'>
            <a href='/'>Lista de deseos</a>
          </div>
          <div className='col-sm-4'>
            <a href='/'>Lista de deseos</a>
          </div>
        </div>
      </div>
      <div className='col-sm-5 Curso-container-img'>
        <img src={img} alt='/' />
      </div>
    </div>
    <div className='container Curso-row-intern'>
      <div className='row Curso-learn'>
        <div className='col-sm-10 '>
          <div className='row '>
            <div className='col-sm-6'>
              <h2>Lo que aprenderás</h2>
              <ul>
                <li>&#10140;   Convertir y crear sus propios diseños en páginas web</li>
                <li>&#10140; Escribir código JavaScript y jQueryb</li>
                <li>&#10140;  Entender como funciona JavaScript y PHP</li>
              </ul>
            </div>
            <div className='col-sm-6'>
              <ul>
                <li>&#10140;   Convertir y crear sus propios diseños en páginas web</li>
                <li>&#10140; Escribir código JavaScript y jQueryb</li>
                <li>&#10140;  Entender como funciona JavaScript y PHP</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

);

export default Curso;
