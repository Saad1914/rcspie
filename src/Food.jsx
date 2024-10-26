import React, { useState } from 'react'
import Carts from './carts'
import Mealinfo from './mealinfo'

export default function Food() {
    const [item, setItem] = useState()
    const [show, setShow] = useState()
    
    const store = (event) => {
        setItem(event.target.value)
        console.log(event.target.value)
    }
    
    const myfun = async () => {
        let get = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${item}`)
        let save = await get.json()
        console.log(save.meals)
        setShow(save.meals)
    }
    
    return (
        <div className="min-h-screen bg-purple-600 text-white flex flex-col items-center">
            <h1 className="text-4xl font-bold mt-8 mb-4">FOOD RECIPE APP</h1>
            <div className="flex mt-10 gap-2">
                <input 
                    className="flex-grow px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-4 focus:ring-blue-400 transition duration-300 text-black" 
                    type="text" 
                    placeholder="Enter recipe name" 
                    onChange={store}
                />
                <button 
                    className="px-4 py-2 bg-blue-500 text-white rounded-r-lg hover:bg-green-600 transition duration-300"  
                    onClick={myfun}
                >
                    Search
                </button>
            </div>
            <Carts detail={show} />
        </div>
    )
}
