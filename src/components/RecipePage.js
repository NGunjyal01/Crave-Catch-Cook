import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { API_KEY } from '../utils/constants';

const RecipePage = () => {

    const recipeId = useParams().id;
    const [recipeInfo,setRecipeInfo] = useState(null);

    const getRecipeInformation = async()=>{
        const data = await fetch("https://api.spoonacular.com/recipes/" + recipeId + "/information?apiKey="+ API_KEY + "&includeNutrition=true");
        const json = await data.json();
        setRecipeInfo(json);
    }
    const getAnalyzedInstructions = async()=>{
        const data = await fetch("https://api.spoonacular.com/recipes/" + recipeId + "/analyzedInstructions?apiKey="+ API_KEY + "&stepBreakdown=true");
        const json = await data.json();

    }

    useEffect(()=>{
        getRecipeInformation();
    },[recipeId]);
    if(!recipeInfo) return null;
    const {vegetarain,vegan,glutenFree,dairyFree,sourceName,extendedIngredients,title,servings,readyInMinutes,sourceUrl,image,nutrition,summary,analyzedInstructions} = recipeInfo;

    return (
        <div className='px-10 mt-10'>
            <h1 className='flex justify-center mb-5 text-3xl font-bold'>{title}</h1>
            <div className='flex space-x-7'>
            <img src={image} alt={title+" img"}/>
            <p dangerouslySetInnerHTML={{ __html: summary }}></p>
            </div>
        </div>
    )
}

export default RecipePage
