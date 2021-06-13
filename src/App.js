import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Filter from './components/Filter'
import Layout from './components/Layout'
import Search from './components/Search'

const App = () => {
  const [recipes, setRecipes] = useState({})
  const [query, setQuery] = useState('chicken')

  const API_URL = `https://api.edamam.com/search?q=${query}&app_id=${process.env.REACT_APP_EDAMAM_APP_ID}&app_key=${process.env.REACT_APP_EDAMAM_APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`

  useEffect(() => {
    const getRecipes = async () => {
      const { data } = await axios.get(API_URL)
      setRecipes(data)
    }
    getRecipes()
  }, [API_URL])

  console.log(recipes)

  return (
    <Layout>
      <Search query={query} setQuery={setQuery} />
      <Filter />
      <div></div>
    </Layout>
  )
}

export default App
