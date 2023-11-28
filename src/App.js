
import './App.css';
import { Nombre } from './components/Nombre';


function App() {

const producto={
  "nombre":'Vairo Extreme XR 9.9',
  "descripcion": 'Rod. 29-componentes shimano-aluminio',
  "precio":100000,
  "sku":'v29a',
  "cantidadDisponible": 7,
  "freeShipping":true //flase
}

  return (
    <div className="App">
     <Nombre producto={producto}/>
    </div>
  );
}

export default App;
