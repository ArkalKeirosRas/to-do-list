import React from 'react';
import '../hojas-de-estilo/Tarea.css'
import { AiOutlineCloseCircle } from 'react-icons/ai'

function Tarea( {id, texto, completada, completarTarea, eliminarTarea } ){
    return(
        <div className={completada ? 'completada' : 'tarea-contenedor '}>
            <div 
            className='tarea-texto'
            onClick={()=> completarTarea(id)}>
                { texto }
            </div>
            <div 
                onClick={()=>eliminarTarea(id)}
                className='tarea-contenedor-icon'>
                <AiOutlineCloseCircle className='tarea-icon' />
            </div>
        </div>
    )
}

export default Tarea;