import React from 'react'
import Item from './Item'
import jsonData from './data.json'

export default function Listado(props) {

  return (
    <div className='container'>
      {jsonData.map((item) => <Item sumarProductos={props.sumarProductos} data={item} />)}
    </div>
  )
}
