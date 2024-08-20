import toast from "react-hot-toast";
import { API_KEY } from "../utils/constants";
import { addRandomRecipes, setRecipeInfo, setSimilarRecipes } from "../utils/recipeSlice";
import { setApiLimitExceed } from "../utils/userSlice";
import { setDishName, setIngredients } from "../utils/searchSlice";

export async function getRandomRecipes(dispatch){
    try{
        const data = await fetch("https://api.spoonacular.com/recipes/random?apiKey="+API_KEY+"&number=15");
        const json = await data.json();
        if(json.code===402){
            dispatch(setApiLimitExceed(true));
        }
        else{
            const recipesId = json.recipes.map(recipe => recipe.id).join(",");
            getAllRecipesInfo(recipesId,dispatch);
        }
    }
    catch(error){
        console.log("ERROR DURING GET RANDOM RECIPES......",error);
    }
};

const getAllRecipesInfo = async(recipesId,dispatch)=>{
    try{
        const data = await fetch("https://api.spoonacular.com/recipes/informationBulk?apiKey=" + API_KEY + "&ids=" + recipesId  +"&includeNutrition=true");
        const json = await data.json();
        console.log(json);
        dispatch(addRandomRecipes(json));
        localStorage.setItem('recipes',JSON.stringify({randomRecipes: json}));
    }
    catch(error){
        console.log("ERROR DURING GET RECIPE INFO.................",error);
    }
};

export async function searchItemsByDishName(searchInput,dispatch){
    try{
        const data = await fetch("https://api.spoonacular.com/recipes/complexSearch?apiKey="+API_KEY+"&query="+searchInput+"&number=20&addRecipeInformation=true&addRecipeNutrition=true");
        const json = await data.json();
        if(json.code===402){
            dispatch(setApiLimitExceed(true));
        }
        console.log("SEARCH RESULT................",json);
        if(json.totalResults===0){
            return false;
        }
        else{
            dispatch(setDishName({result:json.results}));
            return true;
        }
    }
    catch(error){
        console.log("ERROR DURING SEARCH ITEMS BY DISH NAME............",error);
    }
}

export async function filterSearch(searchInput,filterInput,dispatch){
    try{
        toast.success("Changes Applied");
        const data = await fetch("https://api.spoonacular.com/recipes/complexSearch?apiKey="+API_KEY+"&query="+searchInput+"&number=20&addRecipeInformation=true&addRecipeNutrition=true"+filterInput);
        const json = await data.json();
        if(json.code===402){
            dispatch(setApiLimitExceed(true));
        }
        console.log("SEARCH RESULT................",json);
        dispatch(setDishName({result:json.results}));
        if(json.totalResults===0){
            return false;
        }
        return true;
    }
    catch(error){
        console.log("ERROR DURING SEARCH ITEMS BY DISH NAME............",error);
    }
}

export async function searchItemsByIngredients(searchInput,dispatch){
    try{
        const data1 = await fetch("https://api.spoonacular.com/recipes/findByIngredients?apiKey="+API_KEY+"&ingredients="+searchInput+"&number=20&ignorePantry=true");
        const json1 = await data1.json();
        if(json1.code===402){
            dispatch(setApiLimitExceed(true));
        }
        else if(json1.length===0)  return false;
        const recipesId =  json1.map(recipe => recipe.id).join(",");
        const data2 = await fetch("https://api.spoonacular.com/recipes/informationBulk?apiKey=" + API_KEY + "&ids=" + recipesId  +"&includeNutrition=true");
        const json2 = await data2.json();
        if(json2.code===402){
            dispatch(setApiLimitExceed(true));
        }
        console.log("SEARCH ITEMS BY INGREDIENTS API RESPONSE.................",json2);
        dispatch(setIngredients({result:json2}));
        return true;
    }
    catch(error){
        console.log("ERROR DURING SEARCH ITEMS BY INGREDIENTS..................",error);
    }
}

export async function getRecipeInfo(recipeId,dispatch){
    try{
        const data = await fetch("https://api.spoonacular.com/recipes/" + recipeId + "/information?apiKey="+ API_KEY + "&includeNutrition=true");
        const json = await data.json();
        if(json.code===402){
            dispatch(setApiLimitExceed(true));
        }
        console.log("RECIPE INFO API RESPONSE..................",json);
        dispatch(setRecipeInfo(json));
        const recipes = JSON.parse(localStorage.getItem('recipes'));
        localStorage.setItem('recipes',JSON.stringify({...recipes,recipeInfo:json}));
    }
    catch(error){
        console.log("ERROR DURING RECIPE INFO API................",error);
    }
}

export async function getSimilarRecipes(recipeId,dispatch){
    try{
        const data1 = await fetch("https://api.spoonacular.com/recipes/" + recipeId +"/similar?apiKey="+ API_KEY + "&number=10");
        const json1 = await data1.json();
        if(json1.code===402){
            dispatch(setApiLimitExceed(true));
        }
        else if(json1.length===0)  return false;
        const similarRecipesId  = json1.map(recipe => recipe.id).join(",");
        const data2 = await fetch("https://api.spoonacular.com/recipes/informationBulk?apiKey=" + API_KEY + "&ids=" + similarRecipesId  +"&includeNutrition=true");
        const json2 = await data2.json();
        if(json2.code===402){
            dispatch(setApiLimitExceed(true));
        }
        dispatch(setSimilarRecipes(json2));
        const recipes = JSON.parse(localStorage.getItem('recipes'));
        localStorage.setItem('recipes',JSON.stringify({...recipes,SimilarRecipes:json2}));
        console.log("SIMILAR RECIPES API RESPONSE.............................",json2);
        return true;
    }
    catch(error){
        console.log("ERROR DURING SIMILAR RECIPES API........................",error);
    }
}