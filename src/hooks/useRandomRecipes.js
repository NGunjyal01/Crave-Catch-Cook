import { useDispatch, useSelector } from "react-redux"
import { API_KEY } from "../utils/constants";
import { useEffect } from "react";
import { addRandomRecipes } from "../utils/recipeSlice";


const useRandomRecipes = () => {

    const dispatch = useDispatch();
    const randomRecipes = useSelector(store => store.recipes.randomRecipes);

    const getRandomRecipes = async()=>{
        const data = await fetch("https://api.spoonacular.com/recipes/random?apiKey="+API_KEY+"&number=15");
        const json = await data.json();
        dispatch(addRandomRecipes(json.recipes));
    };

    useEffect(()=>{
        !randomRecipes && getRandomRecipes();
    },[]);
}

export default useRandomRecipes;
