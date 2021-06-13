import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Filter from './components/Filter'
import Layout from './components/Layout'
import Search from './components/Search'

const App = () => {
  const [recipes, setRecipes] = useState({})
  const [query, setQuery] = useState('chicken')
  const [filter, setFilter] = useState({
    perPage: 6,
    diet: 'balanced',
    health: 'alcohol-free',
    cousineType: 'indian',
    mealType: 'breakfast',
    dishType: 'dessert',
    ingredients: 5,
    caloriesFrom: 0,
    caloriesTo: 500,
    time: 0,
  })

  const API_URL = `https://api.edamam.com/search?q=${query}&app_id=${process.env.REACT_APP_EDAMAM_APP_ID}&app_key=${process.env.REACT_APP_EDAMAM_APP_KEY}&from=0&to=${filter.perPage}&calories=${filter.caloriesFrom}-${filter.caloriesTo}&health=${filter.health}&dishType=${filter.dishType}&mealType=${filter.mealType}&cousineType=${filter.cousineType}&diet=${filter.diet}&ingr=${filter.ingredients}&time=${filter.time}`

  useEffect(() => {
    const getRecipes = async () => {
      const { data } = await axios.get(API_URL)
      setRecipes(data)
    }
    getRecipes()
  }, [API_URL])

  console.log(recipes)
  console.log(API_URL)

  return (
    <Layout>
      <Search query={query} setQuery={setQuery} />
      <Filter filter={filter} setFilter={setFilter} />
      <div></div>
    </Layout>
  )
}

export default App
