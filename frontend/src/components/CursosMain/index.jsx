import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';
import { FaPalette, FaMusic } from 'react-icons/fa';
import { GiCookingPot } from 'react-icons/gi';
import { MdPhonelinkSetup } from 'react-icons/md';
import HeaderPrueba from '../commons/header/header';
import Footer from '../Footer/Footer';
import pizarron from '../../assets/img/pizarron.jpg';
import img from '../../assets/img/postit.png';
import './styles.scss';

const IMAGE = 'https://github.com/dignelidxdx/PersonalPortfolio/blob/master/src/assets/static/Cover.png?raw=true';
const SIZE = 25;
const CursosMain = ({ cover = IMAGE, path, emoji = '?' }) => (
  <div className='Curso'>
    <div className='Curso-background'>
      <img src={pizarron} alt='img-fondo' />
    </div>
    <HeaderPrueba />
    <div className='Curso-title'>
      <h4>Cursos</h4>
      <hr />
    </div>
    <div className='container Curso-container'>
      <div className='row Curso-row'>
        <div className='col-sm-3 Curso-column'>
          <div className='Curso-column-container'>
            <div className='Curso-column-item'>
              <div>
                <AiFillStar />
                <AiFillStar />
                <AiOutlineStar />
                <AiOutlineStar />
                <AiOutlineStar />
              </div>
              <div>
                <FaPalette size={SIZE} />
              </div>
            </div>
            <img src='' alt='' />
          </div>
          <Link to='/curso/1'>
            <img src={img} alt='' />
          </Link>
        </div>
        <div className='col-sm-3 Curso-column'>
          <div className='Curso-column-container'>
            <div className='Curso-column-item'>
              <div>
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiOutlineStar />
              </div>
              <div>
                <MdPhonelinkSetup size={SIZE} />
              </div>
            </div>
            <img src='' alt='' />
          </div>
          <img src={img} alt='' />
        </div>
        <div className='col-sm-3 Curso-column'>
          <div className='Curso-column-container'>
            <div className='Curso-column-item'>
              <div>
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiOutlineStar />
              </div>
              <div>
                <FaMusic size={SIZE} />
              </div>
            </div>
            <img src={IMAGE} alt='' />
          </div>
          <img src={img} alt='' />
        </div>
        <div className='col-sm-3 Curso-column'>
          <div className='Curso-column-container'>
            <div className='Curso-column-item'>
              <div>
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </div>
              <div>
                <GiCookingPot size={SIZE} />
              </div>
            </div>
            <img src='' alt='' />
          </div>
          <img src={img} alt='' />
        </div>
        <div className='row Curso-row'>
          <div className='col-sm-3 Curso-column-2'>
            <div className='Curso-column-container-2'>
              <div className='Curso-column-item-2'>
                <div>
                  <AiFillStar />
                  <AiFillStar />
                  <AiOutlineStar />
                  <AiOutlineStar />
                  <AiOutlineStar />
                </div>
                <div>
                  <FaPalette size={SIZE} />
                </div>
              </div>
              <img src='' alt='' />
            </div>
            <img src={img} alt='' />
          </div>
          <div className='col-sm-3 Curso-column-2'>
            <div className='Curso-column-container-2'>
              <div className='Curso-column-item-2'>
                <div>
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiOutlineStar />
                </div>
                <div>
                  <FaPalette size={SIZE} />
                </div>
              </div>
              <img src='' alt='' />
            </div>
            <img src={img} alt='' />
          </div>
          <div className='col-sm-3 Curso-column-2'>
            <div className='Curso-column-container-2'>
              <div className='Curso-column-item-2'>
                <div>
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiOutlineStar />
                </div>
                <div>
                  <FaPalette size={SIZE} />
                </div>
              </div>
              <img src={IMAGE} alt='' />
            </div>
            <img src={img} alt='' />
          </div>
          <div className='col-sm-3 Curso-column-2'>
            <div className='Curso-column-container-2'>
              <div className='Curso-column-item-2'>
                <div>
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                </div>
                <div>
                  <FaPalette size={SIZE} />
                </div>
              </div>
              <img src='' alt='' />
            </div>
            <img src={img} alt='' />
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
);

export default CursosMain;
