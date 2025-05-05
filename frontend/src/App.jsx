import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home'
import './App.css'
import Recipie from './Recipie.jsx';
import Create from './Create';


function App() {
  
  return (
    <div>
<BrowserRouter>
  <Routes>
    <Route path='/' element={<Home />}/>
    <Route path='/recipies' element={<Recipie />}/>
    <Route path='/create-recipe' element={<Create/>}/>
  </Routes>
</BrowserRouter>
<div>
</div>
</div>
   
  )
}

export default App
