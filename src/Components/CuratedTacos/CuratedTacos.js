import React, { useState } from 'react'
import GenerateButton from '../GenerateButton/GenerateButton'
import useStyles from './CuratedTacosStyles'

const CuratedTacos = () => {
  const classes = useStyles()

  const [taco, updateTaco] = useState()

  console.log(taco)

  const base = taco && taco.base_layer
  const condiment = taco && taco.condiment
  const mixin = taco && taco.mixin
  const shell = taco && taco.shell

  // markdown recipe => jsx
  const recipeConverter = (recipe) => {
    const recipeArrayRaw = recipe.split(/\r?\n/)
    const recipeArrayFiltered = recipeArrayRaw.filter((line) => line !== '' && line.indexOf('=') !== 0 && line.indexOf('-') !== 0)
    const recipePrintable = recipeArrayFiltered.map((recipeItem, index) => {
      if (index === 0) {
        return <h2>{recipeItem}</h2>
      }
      return <p>{recipeItem}</p>
    })
    return recipePrintable
  }

  // useEffect(()=>{
  //   taco && console.log("Taco Object:",taco)
  // },[taco])

  const curateTaco = async () => {
    const apiCallRaw = await fetch('http://taco-randomizer.herokuapp.com/random/?full-taco=true')
    const apiRefined = await apiCallRaw.json()
    // no repeat taco logic
    if (taco) {
      if (taco.name !== apiRefined.name) {
        updateTaco(apiRefined)
      } else {
        // console.log('No repeats')
        curateTaco()
      }
    } else {
      updateTaco(apiRefined)
    }
  }

  if (!taco) {
    return (
      <div className={classes.buttonDiv}>
        <GenerateButton text="Curate Me a Taco" functionality={curateTaco} />
      </div>
    )
  }
  return (
    <div>
      <div className={classes.buttonDiv}>
        <GenerateButton text="Curate Me a Taco" functionality={curateTaco} />
      </div>
      <div className={classes.recipeDiv}>
        <h1>{taco.name}</h1>
        {base
          && (
          <div>
            {recipeConverter(base.recipe)}
          </div>
          )}
        {condiment && (
          <div>
            {recipeConverter(condiment.recipe)}
          </div>
        )}
        {mixin && (
          <div>
            {recipeConverter(mixin.recipe)}
          </div>
        )}
        {shell && (
          <div>
            {recipeConverter(shell.recipe)}
          </div>
        )}
      </div>
    </div>
  )
}

export default CuratedTacos
