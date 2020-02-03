import React, { useState } from 'react'
import ChaosStyles from './ChaosStyles'
import GenerateButton from '../GenerateButton/GenerateButton'

const Chaos = () => {
  // console.log('Chaos Rendered')

  const classes = ChaosStyles()

  const [state, setState] = useState({
    taco: null,
    name: null,
  })

  const { name, taco } = state

  const base = taco && taco.base_layer
  const condiment = taco && taco.condiment
  const mixin = taco && taco.mixin
  const shell = taco && taco.shell
  const seasoning = taco && taco.seasoning

  // markdown recipe => jsx
  const recipeConverter = (recipe) => {
    const recipeArrayRaw = recipe.split(/\r?\n/)
    const recipeArrayFiltered = recipeArrayRaw.filter((line) => line !== '' && line.indexOf('=') !== 0 && line.indexOf('-') !== 0 && line.indexOf('!') !== 0)
    const recipePrintable = recipeArrayFiltered.map((recipeItem, index) => {
      if (index === 0) {
        return <h2>{recipeItem}</h2>
      }
      return <p>{recipeItem}</p>
    })
    // console.log(recipePrintable)
    return recipePrintable
  }

  const randNum = (prop) => Math.floor(Math.random() * prop.length)

  const nameAdj = [
    'World Famous ',
    'Mindblowing ',
    'Super Mega Ultra ',
    "Mom's Homemade ",
    'Devilishly Delightful ',
    'Scrumdiddlyuptious ',
    'Unexpectedly Delicious ',
    'RIP Tastebuds ',
    'Life Changing ',
    'Apocolyptic ',
  ]

  const nameNoun = [
    'Killer Tacos ',
    'Nuclear Fusion Tacos ',
    'Giga Tacos ',
    'Tacos Ex Machina ',
    'Space Tacos ',
    'Savory Tacos ',
    'Succulent Tacos ',
    'Boom Shaka Tacos ',
    'Himalayan Mountian Tacos ',
    'Wild Side Tacos ',
    'Sorrow-Drowning Tacos ',
  ]

  const nameSuffix = [
    'From Hell',
    'To Cure All Ailments',
    'Of Legend',
    "From the 1800's",
    'To Align Your Chakras',
    'To Set Your World On Fire',
    'To Curse Your Enemies',
    'For Baby Boomers',
    'From the Future',
    'For Your Mother',
    'For Depressed Millenials',
  ]

  const curateTaco = async () => {
    const apiCallRaw = await fetch('http://taco-randomizer.herokuapp.com/random/')
    const apiRefined = await apiCallRaw.json()
    // updateTaco(apiRefined)
    const nextName = (
      nameAdj[randNum(nameAdj)]
      + nameNoun[randNum(nameNoun)]
      + nameSuffix[randNum(nameSuffix)]
    )
    setState({ name: nextName, taco: apiRefined })
    // key and var intended for val have the same name "name", no need to explicitly use :
  }

  if (!taco) {
    return (
      <div className={classes.buttonDiv}>
        <GenerateButton
          text="Unleash the Taco!"
          functionality={curateTaco}
        />
      </div>
    )
  }
  return (
    <div>
      <div className={classes.buttonDiv}>
        <GenerateButton
          text="Unleash the Taco!"
          functionality={curateTaco}
        />
      </div>
      <div className={classes.recipeDiv}>
        <h1>{name}</h1>
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
        {seasoning && (
          <div>
            {recipeConverter(seasoning.recipe)}
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

export default Chaos
