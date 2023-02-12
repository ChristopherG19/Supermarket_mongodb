import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Header from './components/header'
import Inventory_table_item from './components/Inventory_table_item'

const Inventory = ({}) => {

  const[productos, setProductos] = useState([])
  const[categoria, setCategoria] = useState('Beauty & Hygiene')

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
      value: '',
      key: 1
    },
    {
      label: "Beauty & Hygiene",
      value: 'Beauty & Hygiene',
      key: 2
    }, 
    {
      label: "Kitchen, Garden & Pets",
      value: 'Kitchen, Garden & Pets',
      key: 3
    },
    {
      label: "Cleaning & Household",
      value: 'Cleaning & Household',
      key: 4
    },
    {
      label: "Gourmet & World Food",
      value: 'Gourmet & World Food',
      key: 5
    },
    {
      label: "Snacks & Branded Foods",
      value: 'Snacks & Branded Foods',
      key: 6
    },
    {
      label: "Bakery, Cakes & Dairy",
      value: 'Bakery, Cakes & Dairy',
      key: 7
    },
    {
      label: "Beverages",
      value: 'Beverages',
      key: 8
    },
    {
      label: "Foodgrains, Oil & Masala",
      value: 'Foodgrains, Oil & Masala',
      key: 9
    },
    {
      label: "Fruits & Vegetables",
      value: 'Fruits & Vegetables',
      key: 10
    },
    {
      label: "Baby Care",
      value: 'Baby Care',
      key: 11
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
              <option 
                key={o.key} 
                value={o.value}
                >
                  {o.label}
                </option>
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
                <th>id</th>
                <th>Producto</th>
                <th>Proveedor</th>
                <th>Precio</th>
                <th>Existencias</th>
                <th width="110px">Borrar</th>
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