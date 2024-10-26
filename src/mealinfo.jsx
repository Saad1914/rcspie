import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Mealinfo = () => {
   let { mealid } = useParams();
   let [mealData, setMealData] = useState();

   useEffect(() => {
      const fetchData = async () => {
         const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`);
         const data = await response.json();
         setMealData(data.meals);
      };
      fetchData();
   }, [mealid]);

   return (
      <div className="flex items-center justify-center min-h-screen bg-green-600">
         {mealData ? (
            mealData.map((meal, index) => (
               <div key={index} className="bg-white shadow-lg rounded-lg max-w-2xl w-full p-8 mx-4 mt-8">
                  <h2 className="text-4xl font-bold text-gray-800 mb-5 text-center">{meal.strMeal}</h2>
                  <img src={meal.strMealThumb} alt={meal.strMeal} className="rounded-lg mb-5 mx-auto" />
                  <p className="text-xl font-semibold text-yellow-700 mb-3">Instructions</p>
                  <p className="text-gray-700 leading-relaxed">{meal.strInstructions}</p>
                
                  
               </div>
            ))
         ) : (
            <p className="text-2xl text-gray-500">Loading...</p>
         )}
      </div>
   );
};

export default Mealinfo;
