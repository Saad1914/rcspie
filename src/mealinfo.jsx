import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Mealinfo = () => {
   const { mealid } = useParams();
   const [mealData, setMealData] = useState();

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
            mealData.map((meal) => (
               <div key={meal.idMeal} className="bg-white shadow-lg rounded-lg max-w-2xl w-full p-8 mx-4 mt-8">
                  <h2 className="text-4xl font-bold text-gray-800 mb-5 text-center">{meal.strMeal}</h2>
                  <img src={meal.strMealThumb} alt={meal.strMeal} className="rounded-lg mb-5 mx-auto" />
                  
                  <h3 className="text-xl font-semibold text-yellow-700 mb-3">Ingredients</h3>
                  <ul className="list-disc list-inside space-y-1 mb-5 text-gray-700">
                     {Array.from({ length: 20 }, (_, i) => {
                        const ingredient = meal[`strIngredient${i + 1}`];
                        const measure = meal[`strMeasure${i + 1}`];
                        return ingredient ? (
                           <li key={i} className="text-lg">{measure} {ingredient}</li>
                        ) : null;
                     })}
                  </ul>
                  
                  <h3 className="text-xl font-semibold text-yellow-700 mb-3">Instructions</h3>
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
