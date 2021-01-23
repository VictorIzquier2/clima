import React, {useState} from 'react';
import Error from './Error';
import PropTypes from 'prop-types';

const Formulario = ({busqueda, guardarBusqueda, guardarConsulta}) => {
  
  const [error, guardarError] = useState(false)

  // extraer ciudad y país
  const {ciudad, pais} = busqueda;

  // funcion que coloca los elementos en el state
  const hadleChange = e => {
    // actualizar el this.state.
    guardarBusqueda({
      ...busqueda,
      [e.target.name] : e.target.value
    })
  }

  //cuando el usuario da submit al formulario
  const handleSubmit = e => {
    e.preventDefault();

    // Validar
    if(ciudad.trim() === '' || pais.trim() === ''){
      guardarError(true);
      return;
    }
    guardarError(false);

    // pasar al componente principal
    guardarConsulta(true);
  }


  return ( 
    <form
      onSubmit={handleSubmit}
    >
      {error &&
        <Error mensaje='Todos los campos son obligatorios'/>
      }
      <div className='input-field col s12'>
        <input
          type='text'
          name='ciudad'
          id='ciudad'
          value={ciudad}
          onChange={hadleChange}
        />
        <label htmlFor='ciudad'><strong>Ciudad: </strong></label>
      </div>
       <div className='input-field col s12'>
        <select
          name='pais'
          id='pais'
          value={pais}
          onChange={hadleChange}
        >
          <option value=''>-- Seleccione un país --</option>
          <option value="US">Estados Unidos</option>
          <option value="MX">México</option>
          <option value="AR">Argentina</option>
          <option value="CO">Colombia</option>
          <option value="CR">Costa Rica</option>
          <option value="ES">España</option>
          <option value="PE">Perú</option>
        </select>
        <label htmlFor='pais'><strong>País: </strong></label>
      </div>
      <div className='input-field col s12'>
        <input
          type='submit'
          value='Consultar Clima'
          className='waves-effect waves-light btn-large btn-block yellow accent-4'
        />
      </div>
    </form>
   );
}
Formulario.propTypes = {
  busqueda: PropTypes.object.isRequired,
  guardarBusqueda: PropTypes.func.isRequired,
  guardarConsulta: PropTypes.func.isRequired
}
 
export default Formulario;