import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import RecipeCard from "./RecipeCard";
import Shimmer from "./common/Shimmer";
import { MdClear } from "react-icons/md";
import { searchItemsByIngredients } from "../services/apis";
import { useDispatch, useSelector } from "react-redux";
import { removeRecipeByIngredients } from "../utils/recipeSlice";

const Ingredients = () => {
    const [searchInput,setSearchInput] = useState(''); 
    const [loading,setLoading] = useState(false);
    const [showSearchResults,setShowSearchResults] = useState(false);
    const [isResultEmpty,setIsResultEmpty] = useState(false);
    const dispatch = useDispatch();
    const recipes = useSelector(store => store.recipes.ingredients);

    const handleSearchInput = (value)=>{
        setSearchInput(value);
    }

    const handleSearch = async()=>{  
        if(searchInput==='')    return;
        setShowSearchResults(true);
        setLoading(true);
        try{
            const result = await searchItemsByIngredients(searchInput,dispatch);
            if(!result){
                setIsResultEmpty(true);
            }
        }
        catch(error){
            console.log("ERROR DURING SEARCH ITEMS BY DISH NAME...............",error);
        }
        finally{
            setLoading(false); 
        }
    }

    const handleClearAllBtn = ()=>{
        dispatch(removeRecipeByIngredients());
        setSearchInput('');
        setShowSearchResults(false);
    }

    return (
        <div className="flex flex-col items-center mt-[15%] sm:mt-[5%] min-h-screen" onKeyDown={(e)=>{if(e.key==="Enter")handleSearch()}}>
            <div className="w-[90%] sm:w-[80%] lg:w-[70%] flex justify-center relative">
                <input type="text" placeholder="Search Recipes By Dish Name" 
                className="w-full sm:py-3 p-2 sm:px-6 text-xs sm:text-base rounded-full h-14  border-2 border-gray-500 focus:outline-none focus:border-[#41C9E2] focus:shadow-outline focus:shadow-[#41C9E2] shadow-gray-700 shadow-md"
                onChange={(e)=>{handleSearchInput(e.target.value)}} value={searchInput}/>
                <div className="absolute right-4 mt-2.5 lg:mt-4 cursor-pointer">
                    {showSearchResults ? <MdClear className="Logos" onClick={handleClearAllBtn}/>
                    : <FaSearch className="Logos" onClick={handleSearch}/>}
                </div>
            </div>
            {showSearchResults && (loading ? <div className="w-[90%] mt-10">
                <Shimmer type={"SearchPage"}/>
            </div>
            : <div className="flex flex-wrap justify-center mt-10 sm:mt-14 lg:mt-6">
                {isResultEmpty ? <h1 className="uppercase text-2xl font-semibold tracking-widest mt-[50%]">No Dishes Found</h1>
                :<div className="grid grid-cols-3 w-[90%] mt-10 sm:mt-14 lg:mt-10">
                    {isResultEmpty ? <h1 className="col-span-full uppercase text-2xl mt-24 font-semibold tracking-widest text-center">No Dishes Found</h1>
                    : recipes.map((recipe)=><div className="col-span-full sm:col-span-1"><RecipeCard recipe={recipe}/></div>)}
                </div>}
            </div>)}
        </div>
    )
}

export default Ingredients;
