import React from 'react'

const Recipe = ({ recipe }) => {
  return (
    <div className='w-full sm:w-1/2 md:w-1/3 lg:w-3/12 p-2'>
      <div className='bg-white rounded shadow-lg border-1 border-gray-300 overflow-hidden'>
        <div>
          <img className='w-full' src={recipe.image} alt={recipe.label} />
        </div>
        <div className='p-3 text-sm'>
          <h2 className='text-gray-600 font-bold text-center text-base pb-3 border-b'>
            {recipe.label}
          </h2>
          <div className='flex items-center justify-between py-1 border-b'>
            <h4 className='font-bold text-gray-600'>Calories:</h4>
            <span className='text-gray-400'>{recipe.calories.toFixed(2)}</span>
          </div>
          <div className='flex items-center justify-between py-1 border-b'>
            <h4 className='font-bold text-gray-600'>Diet Labels:</h4>
            <span className='text-gray-400'>{recipe.dietLabels}</span>
          </div>
          <div className='flex items-center justify-between py-1 border-b'>
            <h4 className='font-bold text-gray-600'>Dish Type:</h4>
            <span className='text-gray-400'>{recipe.dishType}</span>
          </div>
          <div className='flex items-center justify-between py-1 border-b'>
            <h4 className='font-bold text-gray-600'>Meal Type:</h4>
            <span className='text-gray-400'>{recipe.mealType}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Recipe
