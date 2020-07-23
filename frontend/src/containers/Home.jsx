import React, { useEffect, useState } from "react";
import '../assets/styles/App.scss';
import Empleados from '../components/ListaEmpleados/ListaEmpleados'
import Header from '../components/Header/Header';
import useInitialState from '../hooks/useInitialState';

const API = 'http://localhost:8080/empleadas';
const Home = () => { 

 const initialState = useInitialState(API);

    return (
      <section className='Home'>
        <Header/>
        <h4 className="Empleados-title">Empleados Buscador</h4>
        {initialState.map(item => 
         <Empleados key={item.id} {...item} />
        )}
        
      </section>

    );

};

export default Home;
