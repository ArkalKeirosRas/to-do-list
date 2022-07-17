import './App.css';
import freeCodeCampLogo from './imagenes/freecodecamp-logo.png'
import ListaDeTareas from './componente/ListaDeTareas';
function App() {
  return (
    <div className="aplicacion-tareas">
      <div className='freecodecamp-logo-contenedor'>
        <img className='freecodecamp-logo' src={freeCodeCampLogo} alt='freecodecamp logo'  />
      </div>
      <div className='tareas-lista-principal'>
        <h1>Mis Tareas</h1>
          <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
