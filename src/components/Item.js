import { useState } from "react";

export default function Item(props) {
  const [stockActual, setStockActual] = useState(props.data.stock);

  const actualizarStock = () => {
    if(stockActual > 0) {
      props.sumarProductos()
      return setStockActual(stockActual - 1)
    }
    return 0;
  }

  return (
    <div className='producto'>
      <h3>{props.data.producto.nombre}</h3>
      <p>{props.data.producto.descripcion}</p>
      {stockActual == 0 && (<h5>En stock: <span>agotado</span></h5>)}
      {stockActual > 0 && (<h5>En stock: {stockActual}</h5>)}
      <button onClick={actualizarStock}>Comprar</button>
    </div>
  )
}
