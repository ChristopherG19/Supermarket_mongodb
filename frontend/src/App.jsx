import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"

// Other files imports
import './App.css'
import Login from './routes/Login'
import Menu from './routes/Menu'
import Sales from './routes/Sales'
import Inventory from './routes/Inventory'
import Stats from './routes/Stats'
import Modifications from './routes/Modifications'


const App = () => (

  <div className="App">
    <Routes>
      <Route exact path="/" element = {<Login/>}/>
      <Route exact path="/menu" element = {<Menu/>}/>
      <Route exact path="/ventas" element = {<Sales/>}/>
      <Route exact path="/inventario" element = {<Inventory/>}/>
      <Route exact path="/estadisticas" element = {<Stats/>}/>
      <Route exact path="/modificaciones" element = {<Modifications/>}/>
    </Routes>
  </div>
  
)

export default App
