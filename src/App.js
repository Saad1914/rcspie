import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import State from './state';
import btnmodule from "./button.module.css"
import Login from './login';
import Menu from './menu';
import Todos from './todos';
import Weather from './weather';
import Food from './Food';
import { Routes, Route } from 'react-router-dom';
import Mealinfo from './mealinfo';
function App() {


  return (
   
    <div className="App">
          {/* <State/>
          <Login/>
       <Menu/>  
       <Todos/> 
       <Weather/> */}
     <Routes>
      <Route path= '/' element={ <Food/>} />
      <Route path= '/:mealid' element={ <Mealinfo/>} />
       
      
     </Routes>
      


       
 
    </div>
  );
}

export default App;
