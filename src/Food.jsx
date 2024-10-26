import React, { useState } from 'react'
import Carts from './carts'
import Mealinfo from './mealinfo'

export default function Food() {
    let [item,setItem]=useState()
    let [show,setShow]=useState()
    let store =(event)=>{
        setItem(event.target.value)
        console.log(event.target.value)
    }
    let myfun =async()=>{
        let get = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${item}`)
        let save =await get.json()
        console.log(save.meals)
        setShow(save.meals)
        
    }
  return (
    <div className='bg-purple-600' >
        <h1 className='font-sans text-4xl font-bold p-8'>FOOD RECIPIE APP</h1>
        <div className='mt-[50px]'>
      <input className=' className="flex-grow px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-4 focus:ring-blue-400 transition duration-300" ' type="text" placeholder='enter recipie name' onChange={store}/>
      <button   className="px-4 py-2 bg-blue-500 text-white rounded-r-lg hover:bg-green-600 transition duration-300"  onClick={myfun}>search</button>
      </div>
     <Carts detail={show}/>
     
    </div>
  )
}
