import React, { useEffect, useState } from "react";
import '../assets/styles/App.scss';
import Empleados from '../components/ListaEmpleados/ListaEmpleados'
import Header from '../components/Header/Header';

const Home = () => { 

  const [ empleados, setEmpleados ] = useState([]);

  useEffect(() => {
      fetch('http://localhost:8080/empleadas')
      .then(response => response.json())
      .then(data => setEmpleados(data));
  }, []);

  console.log(empleados);

    return (
      <section className='Home'>
        <Header/>
        <h4 className="Empleados-title">Empleados Buscador</h4>
        {empleados.map(item => 
         <Empleados key={item.id} {...item} />
        )}
        
      </section>

    );

};

export default Home;
