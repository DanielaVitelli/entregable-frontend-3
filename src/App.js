import { useState } from "react";
import Cabecera from "./components/Cabecera";
import Listado from "./components/Listado";

function App() {
  const [cantidadProductos, setCantidadProdcutos] = useState(0);

  const sumarProductos = () => {
    setCantidadProdcutos(cantidadProductos + 1);
  }

  return (
    <div className="App">
      <Cabecera cantidadProductos={cantidadProductos}/>
      <Listado sumarProductos={sumarProductos}/>
    </div>
  );
}

export default App;
