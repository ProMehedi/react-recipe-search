import React from 'react'

const Search = () => {
  return (
    <>
      <h4 className='text-lg mb-3 font-bold text-gray-600'>Search Recipes:</h4>
      <div className='flex items-center '>
        <label htmlFor='search' className='absolute p-3 text-gray-500'>
          <i className='fa fa-search'></i>
        </label>
        <input
          className='bg-transparent pl-9 pr-4 py-2 w-full bg-gray-200 rounded border border-gray-300 duration-500 focus:border-blue-400'
          type='search'
          name='search'
          id='search'
          placeholder='Search cookies by name or keyworks... (banana)'
        />
      </div>
    </>
  )
}

export default Search
