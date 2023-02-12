import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Header from './components/header'
import Header_inventory from './components/Header_inventory'
import Inventory_table_item from './components/Inventory_table_item'

const Inventory = ({}) => {

  const[productos, setProductos] = useState([])
  const[categoria, setCategoria] = useState('')

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

  const options = [
    {
      label: "Todos",
      value: ''
    },
    {
      label: "Beauty & Hygiene",
      value: 'Beauty & Hygiene'
    }, 
    {
      label: "Kitchen, Garden & Pets",
      value: 'Kitchen, Garden & Pets'
    },
    {
      label: "Cleaning & Household",
      value: 'Cleaning & Household'
    },
    {
      label: "Gourmet & World Food",
      value: 'Gourmet & World Food'
    },
    {
      label: "Snacks & Branded Foods",
      value: 'Snacks & Branded Foods'
    },
    {
      label: "Bakery, Cakes & Dairy",
      value: 'Bakery, Cakes & Dairy'
    },
    {
      label: "Beverages",
      value: 'Beverages'
    },
    {
      label: "Foodgrains, Oil & Masala",
      value: 'Foodgrains, Oil & Masala'
    },
    {
      label: "Fruits & Vegetables",
      value: 'Fruits & Vegetables'
    },
    {
      label: "Baby Care",
      value: 'Baby Care'
    },
  ]

  return (
    <div>
      {/** Headers */}
      <Header title="Inventory"></Header>
      <header>
        <form>
          <select>
            {options.map((o) => (
              <option value={o.value}>{o.label}</option>
            ))}
          </select>
          {/* <button type='submit' value='submit' onClick={setCategoria(select.value)}>
            Aplicar categoría
          </button> */}
        </form>
      </header>
      {/** Table */}
      <body class="flex items-center justify-center">
        <div class="container">
          <table class="w-full flex flex-row flex-no-wrap sm:bg-white rounded-lg overflow-hidden sm:shadow-lg my-5">
            <thead class="text-white">
              <tr class="bg-teal-400 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
                {/** Titles */}
                <th class="p-3 text-left">id</th>
                <th class="p-3 text-left">Producto</th>
                <th class="p-3 text-left">Proveedor</th>
                <th class="p-3 text-left">Precio</th>
                <th class="p-3 text-left">Existencias</th>
                <th class="p-3 text-left" width="110px">Borrar</th>
              </tr>
            </thead>
            <tbody class="flex-1 sm:flex-none">
              {/** Elementos de la tabla */}
              {productos && productos.map((productoC) => (
                <Inventory_table_item 
                  item={productoC}
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