import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { API_KEY } from "../utils/constants";
import RecipeCard from "./RecipeCard";
import Shimmer from "./Shimmer";
import Filter from "./Filter";

const DishName = () => {
    const [searchInput,setSearchInput] = useState(null); 
    const [recipes,setRecipes] = useState(null);
    const [loading,setLoading] = useState(null);
    const [isFilterModalVisible,setIsFilterModalVisible] = useState(false);

    const handleSearchInput = (value)=>{
        setSearchInput(value);
    }

    const handleSearch = async()=>{
        setLoading(true);
        const data = await fetch("https://api.spoonacular.com/recipes/complexSearch?apiKey="+API_KEY+"&query="+searchInput+"&number=20&addRecipeInformation=true&addRecipeNutrition=true");
        const json = await data.json();
        setRecipes(json.results);
        setLoading(false);
    };
    const handleClearAllBtn = ()=>{
        setRecipes(null);
    };

    const handleToggleFilterBtn = ()=>{
        setIsFilterModalVisible(!isFilterModalVisible);
    }

    return (
        <>
            <div className="flex justify-center mt-[5%]" onKeyDown={(e)=>{if(e.key==="Enter")handleSearch()}}>
                <input type="text" placeholder="Search Recipes By Dish Name" 
                className="py-3 px-6 rounded-full w-[80%] border-2 border-gray-500 focus:outline-none focus:border-orange-500 focus:shadow-outline focus:shadow-orange-700 shadow-gray-600 shadow-lg"
                onChange={(e)=>{handleSearchInput(e.target.value)}} value={searchInput}/>
                <FaSearch className="relative -ml-10 mt-4 cursor-pointer" onClick={handleSearch} size={19}/>
                {recipes && <button onClick={handleClearAllBtn} className="absolute right-16 mt-3 bg-cyan-50">clear all</button>}
                {<button onClick={handleToggleFilterBtn} className="absolute right-16 mt-3 bg-cyan-50">filter</button>}
            </div>
            {isFilterModalVisible && <Filter onClose={handleToggleFilterBtn}/>}
            {loading?<Shimmer/> : <div className="flex flex-wrap justify-center mt-6">
                {recipes && recipes.map((recipe)=><RecipeCard recipe={recipe}/>)}
            </div>}
        </>
    )
}

export default DishName

