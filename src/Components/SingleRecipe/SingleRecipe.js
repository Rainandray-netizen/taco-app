import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

const SingleRecipe = () => {
  const [recipe, updateRecipe] = useState()
  console.log('recipe return: ', recipe)
  const { layerTypeSlug, recipeSlug } = useParams()

  const getRecipe = async () => {
    const apiCallRaw = await fetch(`http://taco-randomizer.herokuapp.com/${layerTypeSlug}/${recipeSlug}`, { mode: 'cors' })
    console.log('raw: ', apiCallRaw)
    const apiRefined = await apiCallRaw.json()
    console.log('refined: ', apiRefined)
    updateRecipe(apiRefined)
  }

  if (!recipe) {
    getRecipe()
  }
  return (
    <div>
      <p>asdf</p>
    </div>
  )
}

export default SingleRecipe
