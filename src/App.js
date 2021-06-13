import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Layout from './components/Layout'
import Recipe from './components/Recipe'
import Search from './components/Search'

const App = () => {
  const [recipes, setRecipes] = useState({})
  const [search, setSearch] = useState({
    query: '',
    diet: 'balanced',
    mealType: 'breakfast',
  })
  const [loading, setLoading] = useState(false)

  const API_URL = `https://api.edamam.com/search?q=${search.query}&app_id=${process.env.REACT_APP_EDAMAM_APP_ID}&app_key=${process.env.REACT_APP_EDAMAM_APP_KEY}&from=0&to=8&mealType=${search.mealType}&diet=${search.diet}`

  useEffect(() => {
    const getRecipes = async (e) => {
      setLoading(true)

      const { data } = await axios.get(
        `https://api.edamam.com/search?q=chicken&app_id=${process.env.REACT_APP_EDAMAM_APP_ID}&app_key=${process.env.REACT_APP_EDAMAM_APP_KEY}&from=0&to=8`
      )

      setRecipes(data.hits)
      setLoading(false)
    }
    getRecipes()

    // eslint-disable-next-line
  }, [])

  const submitHandler = async (e) => {
    e.preventDefault()

    setLoading(true)

    const { data } = await axios.get(API_URL)
    setRecipes(data.hits)
    console.log(recipes)

    setLoading(false)
  }

  if (!recipes || recipes.length === 0) {
    return <h1>Loading...</h1>
  }

  return (
    <Layout>
      <Search
        submitHandler={submitHandler}
        search={search}
        setSearch={setSearch}
        loading={loading}
      />
      <div className='flex flex-wrap -mx-2 mt-5'>
        {recipes &&
          recipes.length > 0 &&
          recipes.map((recipe, index) => (
            <Recipe key={index} recipe={recipe.recipe} />
          ))}
      </div>
    </Layout>
  )
}

export default App
