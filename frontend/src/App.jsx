import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"

// Other files imports
import './App.css'
import Login from './routes/Login'
import Menu from './routes/Menu'
import Sales from './routes/Sales'
import Inventory from './routes/Inventory'
import Stats from './routes/Stats'



const App = () => (

  <div className="App">
    <Routes>
      <Route exact path="/" element = {<Login/>}/>
      <Route exact path="/menu" element = {<Menu/>}/>
      <Route exact path="/ventas" element = {<Sales/>}/>
      <Route exact path="/inventario" element = {<Inventory/>}/>
      <Route exact path="/estadisticas" element = {<Stats/>}/>
    </Routes>
  </div>
  
)

export default App
