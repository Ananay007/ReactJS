import React, {useState} from 'react'
import RecipeDetails from './recipedetails'

function Recipe({recipe}) {
    const [showIng, setShowIng]= useState(false)
    const {label, image, url , ingredients } = recipe.recipe;
    return (
        
        <div className="recipe">
            <h2>{label}</h2>
            <img src={image} alt="img" />
            <a href={url} target="_blank" rel="noopener noreferrer">Read about it </a> 
            {/* rel for solving security issue */}

            <button onClick={()=> setShowIng(!showIng)}>Ingredients</button>
            {showIng && <RecipeDetails ingredients={ingredients} />}
        </div>
    )
}

export default Recipe;
