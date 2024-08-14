import toast from "react-hot-toast";
import { API_KEY } from "../utils/constants";
import { addRandomRecipes, addRecipeByDishName } from "../utils/recipeSlice";
import { setApiLimitExceed } from "../utils/userSlice";

export async function getRandomRecipes(dispatch){
    try{
        const data = await fetch("https://api.spoonacular.com/recipes/random?apiKey="+API_KEY+"&number=15");
        const json = await data.json();
        if(json.code===402){
            dispatch(setApiLimitExceed(true));
        }
        else{
            const recipesId = json.recipes.map(recipe => recipe.id).join(",");
            getRecipesInfo(recipesId,dispatch);
        }
    }
    catch(error){
        console.log("ERROR DURING GET RANDOM RECIPES......",error);
    }
};

const getRecipesInfo = async(recipesId,dispatch)=>{
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
        dispatch(addRecipeByDishName(json.results));
        if(json.totalResults===0){
            return false;
        }
        return true;
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
        dispatch(addRecipeByDishName(json.results));
        if(json.totalResults===0){
            return false;
        }
        return true;
    }
    catch(error){
        console.log("ERROR DURING SEARCH ITEMS BY DISH NAME............",error);
    }
}