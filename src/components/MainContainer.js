import { useSelector } from "react-redux"
import RecipeCard from "./RecipeCard";


const MainContainer = () => {

    const randomRecipes = useSelector(store => store.recipes.randomRecipes);
    if(!randomRecipes)  return null;
    return (
        <div className="">
            <h1 className="text-4xl font-bold flex justify-center mt-16">Simple And Tasty Popular Recipes</h1>
            <div className="flex flex-wrap justify-center mt-10">
                {randomRecipes.map(recipe => <RecipeCard recipe={recipe}/>)}
            </div>
        </div>
    )
}

export default MainContainer
