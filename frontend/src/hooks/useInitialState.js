import React, { useEffect, useState } from "react";

const useInitialState = () => { 

  const [ empleados, setEmpleados ] = useState([]);

  useEffect(() => {
      fetch('http://localhost:8080/empleadas')
      .then(response => response.json())
      .then(data => setEmpleados(data));
  }, []);

    return empleados;

};

export default useInitialState;
