import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { MdClear } from "react-icons/md";
import RecipeCard from "./RecipeCard";
import Filter from "./Filter";
import { useDispatch, useSelector } from "react-redux";
import { removeRecipeByDishName } from "../utils/recipeSlice";
import Shimmer from "./common/Shimmer";
import { searchItemsByDishName } from "../services/apis";


const DishName = () => {
    
    const [searchInput,setSearchInput] = useState(''); 
    const [loading,setLoading] = useState(false);
    const [isFilterModalVisible,setIsFilterModalVisible] = useState(false);
    const [showSearchResults,setShowSearchResults] = useState(false);
    const [isResultEmpty,setIsResultEmpty] = useState(false);
    const recipes = useSelector(store => store.recipes.dishName);
    const dispatch = useDispatch();

    const handleSearchInput = (value)=>{
        setSearchInput(value);
    }

    const handleSearch = async()=>{
        if(searchInput==='')    return;
        setShowSearchResults(true);
        setLoading(true);
        try{
            const result = await searchItemsByDishName(searchInput,dispatch);
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
    };
    const handleClearAllBtn = ()=>{
        dispatch(removeRecipeByDishName());
        setSearchInput('');
        setShowSearchResults(false);
    };

    const handleToggleFilterBtn = ()=>{
        setIsFilterModalVisible(!isFilterModalVisible);
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
            {(showSearchResults && !loading) && <button onClick={handleToggleFilterBtn} 
            className="absolute right-[9%] mt-3 bg-[#41C9E2] sm:px-4 px-2 py-1 text-xs sm:text-base rounded-lg">
                filter
            </button>}
            {isFilterModalVisible && <Filter searchInput={searchInput} setIsFilterModalVisible={setIsFilterModalVisible} setLoading={setLoading} setIsResultEmpty={setIsResultEmpty}/>}
            {showSearchResults && (loading ? <div className="w-full">
                <Shimmer type={"SearchPage"}/>
            </div>
            : <div className="flex flex-wrap justify-center mt-10 sm:mt-14 lg:mt-6">
                {isResultEmpty ? <h1 className="uppercase text-2xl font-semibold tracking-widest mt-[50%]">No Dishes Found</h1>
                :recipes.map((recipe)=><RecipeCard recipe={recipe}/>)}
            </div>)}
        </div>
    )
}

export default DishName;