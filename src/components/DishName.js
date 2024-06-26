import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { API_KEY } from "../utils/constants";
import RecipeCard from "./RecipeCard";
import Shimmer from "./Shimmer";
import Filter from "./Filter";
import { useDispatch, useSelector } from "react-redux";
import { addRecipeByDishName } from "../utils/recipeSlice";


const DishName = () => {
    
    const [searchInput,setSearchInput] = useState(''); 
    const [loading,setLoading] = useState(null);
    const [isFilterModalVisible,setIsFilterModalVisible] = useState(false);
    const [recipes,setRecipes] = useState(null);
    const dispatch = useDispatch();

    const handleSearchInput = (value)=>{
        setSearchInput(value);
    }

    const handleSearch = async()=>{
        setLoading(true);
        const data = await fetch("https://api.spoonacular.com/recipes/complexSearch?apiKey="+API_KEY+"&query="+searchInput+"&number=20&addRecipeInformation=true&addRecipeNutrition=true");
        const json = await data.json();
        setRecipes(json.results);
        dispatch(addRecipeByDishName(json.results));
        setLoading(false);
    };
    const handleClearAllBtn = ()=>{
        setRecipes(null);
        setSearchInput('');
    };

    const handleToggleFilterBtn = ()=>{
        setIsFilterModalVisible(!isFilterModalVisible);
        setRecipes(null);
    }

    return (
        <>
            <div className="flex justify-center mt-[15%] sm:mt-[5%]" onKeyDown={(e)=>{if(e.key==="Enter")handleSearch()}}>
                <input type="text" placeholder="Search Recipes By Dish Name" 
                className="sm:py-3 p-2 sm:px-6 text-xs sm:text-base rounded-full w-[90%] sm:w-[80%] lg:w-[70%] border-2 border-gray-500 focus:outline-none focus:border-[#41C9E2] focus:shadow-outline focus:shadow-[#41C9E2] shadow-gray-700 shadow-md"
                onChange={(e)=>{handleSearchInput(e.target.value)}} value={searchInput}/>
                <FaSearch className="Logos absolute right-[10%] sm:right-[12%] lg:right-[16%] mt-2.5 lg:mt-4 cursor-pointer" onClick={handleSearch}/>
                <div className="absolute sm:right-8 right-4 top-[46%] sm:top-[28%] lg:top-[40%] sm:mt-2 flex space-x-7 sm:space-x-4">
                    {recipes && <button onClick={handleClearAllBtn} className="bg-[#41C9E2] sm:px-4 px-2 py-1 text-xs sm:text-base rounded-lg">clear all</button>}
                    {recipes && <button onClick={handleToggleFilterBtn} className="bg-[#41C9E2] sm:px-4 px-2 py-1 text-xs sm:text-base rounded-lg">filter</button>}
                </div>
            </div>
            {isFilterModalVisible && <Filter setIsFilterModalVisible={setIsFilterModalVisible} searchInput={searchInput} setLoading={setLoading} setRecipes={setRecipes}/>}
            {loading?<Shimmer/> : <div className="flex flex-wrap justify-center mt-10 sm:mt-14 lg:mt-6">
                {recipes && recipes.map((recipe)=><RecipeCard recipe={recipe}/>)}
            </div>}
        </>
    )
}

export default DishName;