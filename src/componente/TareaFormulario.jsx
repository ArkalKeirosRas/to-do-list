import React, { useState } from 'react';
import '../hojas-de-estilo/TareaFormulario.css'
import { v4 as uuidv4 } from 'uuid' 
import { AiOutlineSend } from "react-icons/ai";

function TareaFormulario(props) {

  const [input,setInput] = useState('');

  const manejarCambio = e => {
    setInput(e.target.value)
  };

  const manejarEnvio = e =>{
    e.preventDefault();
    
    const tareaNueva = {
      id: uuidv4(),
      texto: input,
      completada: false
    }
    props.onSubmit(tareaNueva)
  }

    return(
        <form 
          className='tarea-formulario'
          onSubmit={manejarEnvio}>
          <input 
            className='tarea-input'
            type="text"
            placeholder='Escribe una tarea'
            name='texto'
            onChange={ manejarCambio }
            />
            <button className='tarea-boton'>
              <AiOutlineSend />
            </button>
        </form>
    )
}

export default TareaFormulario;