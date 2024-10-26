import React from 'react'
import { NavLink } from 'react-router-dom'


const Carts = ({detail}) => {

    console.log(detail)
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 max-w-[1200px] mx-auto my-0'>
    {detail ? (
      detail.map((index) => (
        <div key={index.idMeal} className='bg-white shadow-lg rounded-lg p-4 flex flex-col items-center'>
          <img className='h-[150px] w-full object-cover rounded-md mb-4' src={index.strMealThumb} alt="Meal" />
          <p className='text-center font-semibold mb-2 text-black'>{index.strMeal}</p>

          <NavLink to={`/${index.idMeal}`} ><button className='px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition'>Recipe</button></NavLink>

        </div>
      ))
    ) : (
      <div className='col-span-full text-center  text-black'>No items found.</div>
    )}
  </div>
  
  )
}

export default Carts

