import React from "react";
import "../../assets/styles/App.scss";

const ListaEmpleados = ({nombre, edad, sueldo}) => {

  
  return (
    <section className="Empleados">
      
      <div className="row">
        <div className="col-sm-4">
            <h3>Nombre:</h3>
          <p>{nombre} </p>
        </div>
        <div className="col-sm-4">
            <h3>Edad:</h3>
          <p>{edad} </p>
        </div>
        <div className="col-sm-4">
            <h3>Sueldo:</h3>
          <p>{sueldo} </p>
        </div>
      </div>
    </section>
  );
};
export default ListaEmpleados;
