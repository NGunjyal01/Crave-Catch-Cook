import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { API_KEY } from "../utils/constants";
import RecipeCard from "./RecipeCard";
import Shimmer from "./Shimmer";

const Ingredients = () => {
    const [searchInput,setSearchInput] = useState(''); 
    const [recipesId,setRecipesId] = useState(null);
    const [recipesInfo,setRecipesInfo] = useState(null);
    const [loading,setLoading] = useState(null);

    const handleSearchInput = (value)=>{
        setSearchInput(value);
    }
    const getRecipesByIngredients = async()=>{
        setLoading(true);
        const data = await fetch("https://api.spoonacular.com/recipes/findByIngredients?apiKey="+API_KEY+"&ingredients="+searchInput+"&number=20&ignorePantry=true");
        const json = await data.json();
        const getRecipesId =  json.map(recipe => recipe.id).join(",");
        setRecipesId(getRecipesId);
    }

    const getRecipesInfo = async()=>{
        const data = await fetch("https://api.spoonacular.com/recipes/informationBulk?apiKey=" + API_KEY + "&ids=" + recipesId  +"&includeNutrition=true");
        const json = await data.json();
        setRecipesInfo(json);
        setLoading(false);
    }

    const handleSearch = ()=>{  
        getRecipesByIngredients();
        getRecipesInfo();
    }

    const handleClearAllBtn = ()=>{
        setRecipesInfo(null);
        setSearchInput('');
    }

    return (
        <>
            <div className="flex justify-center mt-[15%] sm:mt-[5%]" onKeyDown={(e)=>{if(e.key==="Enter")handleSearch()}}>
            <input type="text" placeholder="Ingredients (with comma seperation)" 
                className="sm:py-3 p-2 sm:px-6 text-xs sm:text-base rounded-full w-[90%] sm:w-[80%] lg:w-[70%] border-2 border-gray-500 focus:outline-none focus:border-[#41C9E2] focus:shadow-outline focus:shadow-[#41C9E2] shadow-gray-700 shadow-md"
                onChange={(e)=>{handleSearchInput(e.target.value)}} value={searchInput}/>
                <FaSearch className="Logos absolute right-[10%] sm:right-[12%] lg:right-[16%] mt-2.5 lg:mt-4 cursor-pointer" onClick={handleSearch}/>
                {recipesInfo && <button onClick={handleClearAllBtn} className="absolute right-[7%] mt-14 lg:mt-2 bg-[#41C9E2] sm:px-4 px-2 py-1 text-xs sm:text-base rounded-lg">clear all</button>}
            </div>
            {loading ? <Shimmer/> : <div className="flex flex-wrap justify-center mt-10">
                {recipesInfo && recipesInfo.map(recipe => <RecipeCard recipe={recipe}/>)}
            </div>}
        </>
    )
}

export default Ingredients
