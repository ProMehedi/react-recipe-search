import React from 'react'

const Filter = () => {
  return (
    <>
      <div className='mt-3 flex flex-wrap items-end border p-3 rounded'>
        <div className='pr-5 mb-3 w-full md:w-2/6 lg:w-1/6'>
          <label
            htmlFor='perPage'
            className='block mb-2 font-bold text-gray-600'
          >
            Per Page:
          </label>
          <select
            name='perPage'
            id='perPage'
            className='border w-full px-3 py-1 rounded'
          >
            <option value='6'>6</option>
            <option value='9'>9</option>
            <option value='12'>12</option>
            <option value='24'>24</option>
          </select>
        </div>
        <div className='pr-5 mb-3 w-full md:w-2/6 lg:w-1/6'>
          <label htmlFor='diet' className='block mb-2 font-bold text-gray-600'>
            Diet:
          </label>
          <select
            name='diet'
            id='diet'
            className='border w-full px-3 py-1 rounded'
          >
            <option value=''>-- SELECT --</option>
            <option value='balanced'>Balanced</option>
            <option value='high-protein'>High Protein</option>
            <option value='high-fiber'>High Fiber</option>
            <option value='low-fat'>Low Fat</option>
            <option value='low-carb'>Low Carb</option>
            <option value='low-sodium'>Low Sodium</option>
          </select>
        </div>
        <div className='pr-5 mb-3 w-full md:w-2/6 lg:w-1/6'>
          <label
            htmlFor='health'
            className='block mb-2 font-bold text-gray-600'
          >
            Health:
          </label>
          <select
            name='health'
            id='health'
            className='border w-full px-3 py-1 rounded'
          >
            <option value=''>-- SELECT --</option>
            <option value='vegan'>Vegan</option>
            <option value='vegetarian'>Vegetarian</option>
            <option value='paleo'>Paleo</option>
            <option value='dairy-free'>Dairy Free</option>
            <option value='gluten-free'>Gluten Free</option>
            <option value='wheat-free'>Wheat Free</option>
            <option value='fat-free'>Fat Free</option>
            <option value='low-sugar'>Low Sugar</option>
            <option value='egg-free'>Egg Free</option>
            <option value='peanut-free'>Peanut Free</option>
            <option value='tree-nut-free'>Tree-nut Free</option>
            <option value='soy-free'>Soy Free</option>
            <option value='fish-free'>Fish Free</option>
            <option value='shellfish-free'>Shellfish Free</option>
          </select>
        </div>
        <div className='pr-5 mb-3 w-full md:w-2/6 lg:w-1/6'>
          <label
            htmlFor='cuisineType'
            className='block mb-2 font-bold text-gray-600'
          >
            Cuisine Type:
          </label>
          <select
            name='cuisineType'
            id='cuisineType'
            className='border w-full px-3 py-1 rounded'
          >
            <option value=''>-- SELECT --</option>
            <option value='american'>American</option>
            <option value='asian'>Asian</option>
            <option value='british'>British</option>
            <option value='caribbean'>Caribbean</option>
            <option value='central-europe'>Central Europe</option>
            <option value='chinese'>Chinese</option>
            <option value='eastern-europe'>Eastern Europe</option>
            <option value='french'>French</option>
            <option value='indian'>Indian</option>
            <option value='italian'>Italian</option>
            <option value='japanese'>Japanese</option>
            <option value='kosher'>Kosher</option>
            <option value='mediterranean'>Mediterranean</option>
            <option value='mexican'>Mexican</option>
            <option value='middle-eastern'>Middle Eastern</option>
            <option value='nordic'>Nordic</option>
            <option value='south-american'>South American</option>
            <option value='south-east-asian'>South East Asian</option>
          </select>
        </div>
        <div className='pr-5 mb-3 w-full md:w-2/6 lg:w-1/6'>
          <label
            htmlFor='mealType'
            className='block mb-2 font-bold text-gray-600'
          >
            Meal Type:
          </label>
          <select
            name='mealType'
            id='mealType'
            className='border w-full px-3 py-1 rounded'
          >
            <option value=''>-- SELECT --</option>
            <option value='breakfast'>Breakfast</option>
            <option value='lunch'>Lunch</option>
            <option value='dinner'>Dinner</option>
            <option value='snack'>Snack</option>
            <option value='teatime'>Teatime</option>
          </select>
        </div>
        <div className='pr-5 mb-3 w-full md:w-2/6 lg:w-1/6'>
          <label
            htmlFor='dishType'
            className='block mb-2 font-bold text-gray-600'
          >
            Dish Type:
          </label>
          <select
            name='dishType'
            id='dishType'
            className='border w-full px-3 py-1 rounded'
          >
            <option value=''>-- SELECT --</option>
            <option value='alcohol-cocktail'>Alcohol-cocktail</option>
            <option value='biscuits-and-cookies'>Biscuits and cookies</option>
            <option value='bread'>Bread</option>
            <option value='cereals'>Cereals</option>
            <option value='condiments-and-sauces'>Condiments and sauces</option>
            <option value='drinks'>Drinks</option>
            <option value='desserts'>Desserts</option>
            <option value='egg'>Egg</option>
            <option value='main-course'>Main course</option>
            <option value='omelet'>Omelet</option>
            <option value='pancake'>Pancake</option>
            <option value='preps'>Preps</option>
            <option value='preserve'>Preserve</option>
            <option value='salad'>Salad</option>
            <option value='sandwiches'>Sandwiches</option>
            <option value='soup'>Soup</option>
            <option value='starter'>Starter</option>
          </select>
        </div>
        <div className='pr-5 mb-3 w-full md:w-2/6 lg:w-1/6'>
          <label
            htmlFor='ingredients'
            className='block mb-2 font-bold text-gray-600'
          >
            Ingredients:
          </label>
          <input
            type='number'
            min='0'
            name='ingredients'
            id='ingredients'
            className='border w-full px-1 py-1 ml-2 rounded'
          />
        </div>
        <div className='pr-5 mb-3 w-full md:w-2/6 lg:w-1/6'>
          <h4 className='mb-2 font-bold text-gray-600'>Calories:</h4>
          <div className='flex'>
            <div className='mr-2 flex-1'>
              <label htmlFor='caloriesFrom' className='block text-sm'>
                From:
              </label>
              <input
                type='number'
                min='0'
                name='caloriesFrom'
                id='caloriesFrom'
                className='border w-full px-1 py-1 rounded'
              />
            </div>
            <div className='flex-1'>
              <label htmlFor='caloriesTo' className='block text-sm'>
                To:
              </label>
              <input
                type='number'
                min='0'
                name='caloriesTo'
                id='caloriesTo'
                className='border w-full px-1 py-1 rounded'
              />
            </div>
          </div>
        </div>
        <div className='pr-5 mb-3 w-full md:w-2/6 lg:w-1/6'>
          <h4 className='mb-2 font-bold text-gray-600'>Time:</h4>
          <div className='flex'>
            <div className='mr-2 flex-1'>
              <label htmlFor='timeFrom' className='block text-sm'>
                From:
              </label>
              <input
                type='number'
                min='0'
                name='timeFrom'
                id='timeFrom'
                className='border w-full px-1 py-1 rounded'
              />
            </div>
            <div className='flex-1'>
              <label htmlFor='timeTo' className='block text-sm'>
                To:
              </label>
              <input
                type='number'
                min='0'
                name='timeTo'
                id='timeTo'
                className='border w-full px-1 py-1 rounded'
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Filter
