import React from 'react'
import './App.css'
import { NavLink, Route, Routes } from "react-router-dom";


const Home = () => {
  return (
    <div> 
        <h1 className='flex justify-center items-center font-serif mt-5'> RECIPE MAKER</h1>
        <div className = 'flex flex-row-reverse gap-6 mr-10 '>
            <NavLink to="/"> Home </NavLink>
            <NavLink to="/recipies"> Recipies </NavLink>
            <NavLink to="/create-recipe"> Create </NavLink>

        </div>
        <h1 className='flex justify-center items-center font-serif mt-70'>Have fun creating and interracting with your's and others recipe's :)</h1> 
        
    </div>
  )
}

export default Home