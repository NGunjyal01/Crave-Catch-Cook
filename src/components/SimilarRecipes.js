import { API_KEY } from "../utils/constants"
import { useEffect, useState } from "react";
import RecipeCard from "./RecipeCard";

const SimilarRecipes = ({ recipeId }) => {

    const [similarRecipesId,setSimilarReciesId] = useState(null);
    const [similarRecipesInfo,setSimilarRecipesInfo] = useState(null);

    const getSimilarRecipesId = async()=>{
        const data = await fetch("https://api.spoonacular.com/recipes/" + recipeId +"/similar?apiKey="+API_KEY + "&number=10");
        const json = await data.json();
        const similarId = json.map(recipe => recipe.id).join(",");
        setSimilarReciesId(similarId);
        console.log(similarRecipesId)
    }
    const getSimilarRecipesInfo = async()=>{
        const data = await fetch("https://api.spoonacular.com/recipes/informationBulk?apiKey=" + API_KEY + "&ids=" + similarRecipesId  +"&includeNutrition=true");
        const json = await data.json();
        setSimilarRecipesInfo(json);
    }

    useEffect(()=>{
        getSimilarRecipesId();
        getSimilarRecipesInfo();
    },[recipeId]);
    

    return (
    <div>
        <h1 className='font-semibold text-2xl mt-10'>Similar Recipes</h1> 
        <div className="flex flex-wrap justify-center">
            {similarRecipesInfo && similarRecipesInfo.map(recipeInfo => <RecipeCard recipe={recipeInfo}/>)}
        </div>
    </div>
    )
}

export default SimilarRecipes
