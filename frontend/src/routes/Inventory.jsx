import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Inventory_table_item from '../components/Inventory_table_item'
import '../components/css/Inventory.css'

const Inventory = ({}) => {

  const[productos, setProductos] = useState([])
  const[categoria, setCategoria] = useState('Beauty & Hygiene')
  const[skip, setSkip] = useState(0)

  useEffect(() => {
    const fetchProductos = async () => {
      const response = await fetch(`http://localhost:4000/productos/${categoria}/${skip}`)
      const json = await response.json()

      if (response.ok){
        setProductos(json)
      }
    }

    fetchProductos()
  }, [])

  const fetchProductos = async () => {
    const response = await fetch(`http://localhost:4000/productos/${categoria}/${skip}`)
    const json = await response.json()

    if (response.ok){
      setProductos(json)
    }
  }


  function handleChange(event) {
    const {value} = event.target
    setCategoria(value)
    fetchProductos()
  }

  const handleClickAddSkip = () => {
    let newValue = skip + 1
    setSkip(newValue)
    fetchProductos()
  }

  const handleClickReduceSkip = () => {
    let newValue = skip - 1
    setSkip(newValue)
    fetchProductos()
  }

  const options = [
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
    <div className='all'>
      {/** Headers */}
      <Header title="Inventory"></Header>
      <header className='secondary-header'>
        
        <select onChange={handleChange}>
          {options.map((o) => (
            <option 
              key={o.key} 
              value={o.value}
              >
                {o.label}
              </option>
          ))}
        </select>
      </header>
      {/** Table */}
      <div className='container'>
        <table>
          <thead>
            <tr>
              {/** Titles */}
              <th>id</th>
              <th>Producto</th>
              <th>Proveedor</th>
              <th>Precio</th>
              <th>Existencias</th>
              <th width="110px">Borrar</th>
            </tr>
          </thead>
          <tbody>
            {/** Elementos de la tabla */}
            {productos && productos.map((productoC) => (
              <Inventory_table_item 
                item={productoC}
              />
            ))}
          </tbody>
        </table>
      </div>
      <footer>
        <div>
          <button type='submit' onClick={handleClickReduceSkip}>
            retroceder
          </button>
          <button type='submit' onClick={handleClickAddSkip}>
            avanzar
          </button>
        </div>
        <hr></hr>
        <div>
          <div>
            <input type="number" placeholder='codigo'/>
            <input type="text" placeholder='nombre producto'/>
            <input type="text" placeholder='proveedor'/>
            <input type="number" placeholder='cant. Disponible'/>
            <input type="number" placeholder='precio'/>
            <input type="text" placeholder='descripción'/>
          </div>
          <button type = "submit">Añadir Producto</button>
        </div>
      </footer>
    </div>
  )
}

export default Inventory