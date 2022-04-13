import React from 'react';
import { Link } from 'react-router-dom';

const Contacto = () => {
  return (
    <div>
        <form>
            <h4>Escriba su consulta</h4>
            <input type='text' >Nombre</input>
        </form>
        <Link to={'/'} Volver al inicio/>
    </div>
  )
}

export default Contacto