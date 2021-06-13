import React from 'react'

const Search = ({ search, setSearch, submitHandler }) => {
  return (
    <form onSubmit={submitHandler} className='flex flex-wrap items-end'>
      <div className='flex w-full mb-3 md:mb-0 md:border-red-100 md:w-5/12 items-center'>
        <label htmlFor='search' className='absolute p-3 text-gray-500'>
          <i className='fa fa-search'></i>
        </label>
        <input
          className='bg-transparent pl-9 pr-4 py-1 w-full rounded border border-gray-300 duration-500 focus:border-blue-400'
          type='search'
          name='search'
          id='search'
          placeholder='Search by name or keywords... (banana)'
          value={search.query}
          onChange={(e) => setSearch({ ...search, query: e.target.value })}
        />
      </div>
      <div className='flex flex-wrap items-end w-full md:w-5/12 pl-0 md:pl-6'>
        <div className='pr-5 mb-3 md:mb-0 w-1/2'>
          <label htmlFor='diet' className='block mb-2 font-bold text-gray-600'>
            Diet:
          </label>
          <select
            name='diet'
            id='diet'
            className='border w-full px-3 py-1 rounded'
            value={search.diet}
            onChange={(e) => setSearch({ ...search, diet: e.target.value })}
          >
            <option value='balanced'>Balanced</option>
            <option value='high-protein'>High Protein</option>
            <option value='high-fiber'>High Fiber</option>
            <option value='low-fat'>Low Fat</option>
            <option value='low-carb'>Low Carb</option>
            <option value='low-sodium'>Low Sodium</option>
          </select>
        </div>
        <div className='pr-5 mb-3 md:mb-0 w-1/2'>
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
            value={search.mealType}
            onChange={(e) => setSearch({ ...search, mealType: e.target.value })}
          >
            <option value='breakfast'>Breakfast</option>
            <option value='lunch'>Lunch</option>
            <option value='dinner'>Dinner</option>
            <option value='snack'>Snack</option>
            <option value='teatime'>Teatime</option>
          </select>
        </div>
      </div>

      <div className='w-full md:w-2/12 pl-0 md:pl-6'>
        <button
          typ='submit'
          className='w-full py-2 px-3 bg-blue-600 text-white rounded'
        >
          Search
        </button>
      </div>
    </form>
  )
}

export default Search
