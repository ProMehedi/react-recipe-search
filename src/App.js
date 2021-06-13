import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Layout from './components/Layout'
import Search from './components/Search'

const App = () => {
  const [recipes, setRecipes] = useState({})
  const [search, setSearch] = useState({
    query: 'chicken',
    diet: 'balanced',
    mealType: 'breakfast',
  })

  const API_URL = `https://api.edamam.com/search?q=${search.query}&app_id=${process.env.REACT_APP_EDAMAM_APP_ID}&app_key=${process.env.REACT_APP_EDAMAM_APP_KEY}&from=0&to=9&mealType=${search.mealType}&diet=${search.diet}`

  const submitHandler = async (e) => {
    e.preventDefault()

    const { data } = await axios.get(API_URL)
    setRecipes(data)
    console.log(API_URL)
  }

  return (
    <Layout>
      <Search
        submitHandler={submitHandler}
        search={search}
        setSearch={setSearch}
      />
    </Layout>
  )
}

export default App
