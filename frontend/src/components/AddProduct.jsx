import React, { useEffect, useState } from 'react'

const AddProduct = ({}) => {

    return (
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
    )
}

export default AddProduct