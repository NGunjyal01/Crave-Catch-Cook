
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { API_KEY } from "../utils/constants";
import RecipeCard from "./RecipeCard";

const DishName = () => {
    const [searchInput,setSearchInput] = useState(null); 
    const [recipes,setRecipes] = useState(null);

    const handleSearchInput = (value)=>{
        setSearchInput(value);
    }

    const handleSearch = async()=>{
        try{
            const data = await fetch("https://api.spoonacular.com/recipes/complexSearch?apiKey="+API_KEY+"&query="+searchInput+"&number=20&addRecipeInformation=true&addRecipeNutrition=true");
            const json = await data.json();
            setRecipes(json.results);
        }catch(err){
            console.error(err)
        }
    }
    const handleClearAll = ()=>{
        setRecipes(null);
    }

    return (
        <>
            <div className="flex justify-center mt-[5%]" onKeyDown={(e)=>{if(e.key==="Enter")handleSearch()}}>
                <input type="text" placeholder="Search Recipes By Dish Name" 
                className="p-4 rounded-full w-[80%] border-black border-2"
                onChange={(e)=>{handleSearchInput(e.target.value)}} value={searchInput}/>
                <FaSearch onClick={handleSearch}/>
                {recipes && <button onClick={handleClearAll}>clear all</button>}
            </div>
            <div className="flex flex-wrap justify-center mt-6">
                {recipes && recipes.map((recipe)=><RecipeCard recipe={recipe}/>)}
            </div>
        </>
    )
}

export default DishName

