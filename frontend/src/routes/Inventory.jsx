import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Header from './components/header'
import Inventory_table_item from './components/Inventory_table_item'

const Inventory = ({}) => {

  const[productos, setProductos] = useState([])

  useEffect(() => {
    const fetchProductos = async () => {
      const response = await fetch('http://localhost:4000/productos')
      const json = await response.json()

      if (response.ok){
        setProductos(json)
      }
    }

    fetchProductos()
  }, [])

  return (
    <div>
      <Header title="Inventory"></Header>
      <body class="flex items-center justify-center">
        <div class="container">
          <table class="w-full flex flex-row flex-no-wrap sm:bg-white rounded-lg overflow-hidden sm:shadow-lg my-5">
            <thead class="text-white">
              <tr class="bg-teal-400 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
              <th class="p-3 text-left">id</th>
              <th class="p-3 text-left">Producto</th>
              <th class="p-3 text-left">Precio</th>
              <th class="p-3 text-left">Existencias</th>
              <th class="p-3 text-left" width="110px">Actions</th>
              </tr>
            </thead>
            <tbody class="flex-1 sm:flex-none">
              {/** Elementos de la tabla */}
              {productos && productos.map((productoC) => (
                <Inventory_table_item 
                  id = {productoC.id}
                  cantidad = {productoC.cantidadDisponible}
                  producto = {productoC.nombre}
                  precio = {productoC.precio}
                />
              ))}
            </tbody>
          </table>
        </div>
      </body>
    </div>
  )
}

export default Inventory