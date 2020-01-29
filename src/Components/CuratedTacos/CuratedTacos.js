import React,{useState,useEffect} from "react"

const CuratedTacos = () => {

  const [taco,updateTaco] = useState()

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
        return <h3>{recipeItem}</h3>
      }else{
        return <p>{recipeItem}</p>
      }
    })
    return recipePrintable
  }

  // useEffect(()=>{
  //   taco && console.log("Taco Object:",taco)
  // },[taco])

  const curateTaco = async () =>{
    const apiCallRaw = await fetch("http://taco-randomizer.herokuapp.com/random/?full-taco=true")
    const apiRefined = await apiCallRaw.json()
    //no repeat taco logic
    if(taco){
      if(taco.name!==apiRefined.name){
        updateTaco(apiRefined)
      }else{
        console.log("No repeats")
        curateTaco()
      }
    }else{
      updateTaco(apiRefined)
    }
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
          <h1>{taco.name}</h1>
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

export default CuratedTacos