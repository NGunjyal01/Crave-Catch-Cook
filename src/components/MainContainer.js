import { useSelector } from "react-redux"
import RecipeCard from "./RecipeCard";


const MainContainer = () => {

    const randomRecipes = useSelector(store => store.recipes.randomRecipes);
    
    return (
        <div className="flex flex-col items-center">
            <h1 className="text-lg sm:text-4xl font-bold mt-10 sm:mt-16">Simple And Tasty Popular Recipes</h1>
            <div className="grid grid-cols-3 sm:mt-10 mt-5">
                {randomRecipes.map(recipe => <div className="col-span-full sm:col-span-1" key={recipe.id}>
                    <RecipeCard recipe={recipe}/>
                </div>)}
            </div>
        </div>
    )
}

export default MainContainer
