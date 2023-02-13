import React, { useEffect, useState } from 'react'

const AddProduct = ({}) => {

    // info del nuevo producto
    const [codigo, setCodigo] = useState(null)
    const [name, setNombre] = useState(null)
    const [cat, setCategoria] = useState(null)
    const [prov, setProveedor] = useState(null)
    const [cant, setCant] = useState(null)
    const [price, setPrecio] = useState(null)
    const [desc, setDesc] = useState(null)

    // Se almacenan los posibles errores en los response
    const[error, setError] = useState(null)

    // Producto a agreagar
    const [prod, setProd] = useState({})


    // posibles categorias
    const options = [
        {
            label: "-- Categoría --",
            value: null,
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
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        if(codigo && name && cat && prov && cant && price && desc) {
            // proceder a agregar
            setError(null)

            const id = parseInt(codigo)
            const nombre = name
            const categoria = cat
            const proveedor = prov 
            const cantidadDisponible = parseInt(cant)
            const precio = parseInt(price)
            const description = desc

            const p = {
                id, nombre, categoria, proveedor, cantidadDisponible, precio, description
            }

            console.log('prod', p)

            const response = await fetch('http://localhost:4000/productos',{
                method: 'POST',
                body: JSON.stringify(p),
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            const json = await response.json()

            if (!response.ok){
                setError(json.error)
            }
            
            if (response.ok){
                setError(null)
                console.log('funciona')
            }

        } else {
            setError('No pueden haber campos vacíos')
            alert('No pueden haber campos vacíos')
            console.log(codigo)
            console.log(name)
            console.log(cat)
            console.log(prov)
            console.log(cant)
            console.log(precio)
            console.log(desc)
        }
    }

    return (
        <div>
          <div>
            <input 
                id='codigo'
                type="number" 
                placeholder='codigo'
                onChange = {event => setCodigo(event.target.value)}

            />
            <input 
                id='nombre'
                type="text" 
                placeholder='nombre producto'
                onChange = {event => setNombre(event.target.value)}
            />
            <select id='categorias' onChange={event => setCategoria(event.target.value)}>
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
                id='proveedor'
                type="text" 
                placeholder='proveedor'
                onChange = {event => setProveedor(event.target.value)}
            />
            <input
                id='cant' 
                type="number" 
                placeholder='cant. Disponible'
                min='0'
                onChange = {event => setCant(event.target.value)}
            />
            <input 
                id='precio'
                type="number" 
                placeholder='precio'
                min='0'
                onChange = {event => setPrecio(event.target.value)}
            />
            <input 
                id='desc'
                type="text" 
                placeholder='descripción'
                onChange = {event => setDesc(event.target.value)}
            />
          </div> 
          <button type = "submit" onClick={handleSubmit}>Añadir Producto</button>
          {/* <button type = "submit">Añadir Producto</button> */}
        </div>
    )
}

export default AddProduct