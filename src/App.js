import axios from 'axios'
import React, { useEffect } from 'react'
import Layout from './components/Layout'
import Search from './components/Search'

const App = () => {
  useEffect(() => {
    const getRecipes = async () => {
      const { data } = await axios.get(
        `https://api.edamam.com/search?q=chicken&app_id=${process.env.REACT_APP_EDAMAM_APP_ID}&app_key=${process.env.REACT_APP_EDAMAM_APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`
      )
      console.log(data)
    }
    getRecipes()
  }, [])

  return (
    <Layout>
      <Search />
      <div>Recipes Here</div>
    </Layout>
  )
}

export default App
