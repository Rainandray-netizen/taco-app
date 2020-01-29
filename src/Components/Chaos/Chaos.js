import React,{useState,useEffect} from "react"

const Chaos = () => {
  
  const [taco,updateTaco] = useState()
  const [name,updateName] = useState()

  const base = taco && taco.base_layer
  const condiment = taco && taco.condiment
  const mixin = taco && taco.mixin
  const shell = taco && taco.shell

  //markdown recipe => jsx
  const recipe_converter = (recipe) =>{
    const recipeArrayRaw = recipe.split(/\r?\n/)
    const recipeArrayFiltered = recipeArrayRaw.filter((line)=>
      line !== "" && line.indexOf("=")!==0 && line.indexOf("-")!==0 
    )
    const recipePrintable = recipeArrayFiltered.map((recipeItem,index)=>{
      if(index===0){
        return <h1>{recipeItem}</h1>
      }else{
        return <p>{recipeItem}</p>
      }
    })
    console.log(recipePrintable)
    return recipePrintable
  }

  const randNum = (prop) => Math.floor(Math.random()*prop.length)

  const nameAdj = [
    "World Famous ",
    "Mindblowing ",
    "Super Mega Ultra ",
    "Mom's Homemade ",
    "Devilishly Delightful ",
    "Scrumdiddlyuptious ",
    "Unexpectedly Delicious ",
    "RIP Tastebuds ",
    "Life Changing ",
    "Apocolyptic "
  ]

  const nameNoun = [
    "Killer Tacos ",
    "Nuclear Fusion Tacos ",
    "Giga Tacos ",
    "Tacos Ex Machina ",
    "Space Tacos ",
    "Savory Tacos ",
    "Succulent Tacos ",
    "Boom Shaka Tacos ",
    "Himalayan Mountian Tacos ",
    "Wild Side Tacos ",
    "Sorrow-Drowning Tacos",
  ]

  const nameSuffix =[
    "From Hell",
    "To Cure All Ailments",
    "Of Legend",
    "From the 1800's",
    "To Align Your Chakras",
    "To Set Your World On Fire",
    "To Curse Your Enemies",
    "For Baby Boomers",
    "From the Future",
    "For Your Mother",
    "For Depressed Millenials",
  ]

  const curateTaco = async () =>{
    const apiCallRaw = await fetch("http://taco-randomizer.herokuapp.com/random/")
    const apiRefined = await apiCallRaw.json()
    updateTaco(apiRefined)
    updateName(
      nameAdj[randNum(nameAdj)]+
      nameNoun[randNum(nameNoun)]+
      nameSuffix[randNum(nameSuffix)]
    )
  }

  if(!taco){
    return(
      <div>
        <button type="button" onClick={curateTaco}>Generate Taco</button>
      </div>
    )
  }else{
    return(
      <div>
        <button type="button" onClick={curateTaco}>Generate Taco</button>
        <div>
          <h1>{name}</h1>
          {base &&
          <div>
            {base && recipe_converter(base.recipe)}
          </div>}
          {condiment && <div>
            {condiment && recipe_converter(condiment.recipe)}
          </div>}
          {mixin && <div>
            {mixin && recipe_converter(mixin.recipe)}
          </div>}
          {shell && <div>
            {shell && recipe_converter(shell.recipe)}
          </div>}
        </div>
      </div>
    )
  }
}

export default Chaos