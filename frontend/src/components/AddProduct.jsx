import React, { useEffect, useState } from 'react'

const AddProduct = ({}) => {

    // info del nuevo producto
    const [codigo, setCodigo] = useState(null)
    const [nombre, setNombre] = useState(null)
    const [categoria, setCategoria] = useState(null)
    const [proveedor, setProveedor] = useState(null)
    const [cant, setCant] = useState(null)
    const [precio, setPrecio] = useState(null)
    const [descripción, setDesc] = useState(null)


    useEffect(() => {}, [])

    // posibles categorias
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

    const handleSubmit = async (e) => {
        e.preventDefault()
    }

    return (
        <div>
          <div>
            <input 
                type="number" 
                placeholder='codigo'
                onChange = {event => setCodigo(event.target.value)}

            />
            <input 
                type="text" 
                placeholder='nombre producto'
                onChange = {event => setNombre(event.target.value)}
            />
            <select onChange={event => setCategoria(event.target.value)}>
                {options.map((o) => (
                <option 
                key={o.key} 
                value={o.value}
                >
                    {o.label}
                </option>
            ))}
            </select>
            <input 
                type="text" 
                placeholder='proveedor'
                onChange = {event => setProveedor(event.target.value)}
            />
            <input 
                type="number" 
                placeholder='cant. Disponible'
                onChange = {event => setCant(event.target.value)}
            />
            <input 
                type="number" 
                placeholder='precio'
                min='0'
                onChange = {event => setCant(event.target.value)}
            />
            <input 
                type="text" 
                placeholder='descripción'
                onChange = {event => setDesc(event.target.value)}
            />
          </div> 
          <button type = "submit" onClick={handleSubmit}>Añadir Producto</button>
        </div>
    )
}

export default AddProduct