import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Inventory_table_item from '../components/Inventory_table_item'
import '../components/css/Inventory.css'
import AddProduct from '../components/AddProduct'

const Inventory = ({}) => {

  const[productos, setProductos] = useState([])
  const[categoria, setCategoria] = useState('Beauty & Hygiene')
  const[skip, setSkip] = useState(0)
  const[limit, setLimit] = useState(20)
  const[sort, setSort] = useState(1)

  useEffect(() => {
    const fetchProductos = async () => {
      const response = await fetch(`http://localhost:4000/productos/categoria/${categoria}/${skip}`)
      const json = await response.json()

      if (response.ok){
        setProductos(json)
      }
    }

    fetchProductos()
  }, [])

  const fetchProductos = async () => {
    const response = await fetch(`http://localhost:4000/productos/categoria/${categoria}/${skip}/${limit}`)
    const json = await response.json()

    if (response.ok){
      setProductos(json)
    }
  }

  function handleCheckbox(event) {
    const s = sort
    setSort(-1 * s)
    fetchProductos()
  }

  function handleLimit(event) {
    setLimit(event.target.value)
    fetchProductos()
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
    if (newValue < 0){
      setSkip(0)
    } else {
      setSkip(newValue)
    }
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
      <button className='home' onClick={() => window.location.assign("http://localhost:5173/menu")}>Home</button>
      <Header title="Inventory"></Header>
      <header className='secondary-header'>
        <select className='category-selector' onChange={handleChange}>
          {options.map((o) => (
            <option 
              key={o.key} 
              value={o.value}
              >
                {o.label}
              </option>
          ))}
        </select>
        <label>
          Limite: 
          <input 
            id='input_limite'
            type='number'
            defaultValue={20}
            min='1'
            max='25'
            onChange={handleLimit}
          />
        </label>
        <button id='refresh-btn' onClick={fetchProductos}>
          Refrescar
        </button>
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
            Retroceder
          </button>
          <button type='submit' onClick={handleClickAddSkip}>
            Avanzar
          </button>
        </div>
        <hr></hr>
        <AddProduct></AddProduct>
      </footer>
    </div>
  )
}

export default Inventory