import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { MdClear } from "react-icons/md";
import RecipeCard from "./RecipeCard";
import Filter from "./Filter";
import { useDispatch, useSelector } from "react-redux";
import Shimmer from "./common/Shimmer";
import { searchItemsByDishName } from "../services/apis";
import { setDishName } from "../utils/searchSlice";


const DishName = () => {

    const dishName = useSelector(store => store.search.dishName);
    const {searchInput,result,showResults,isResultEmpty} = dishName;
    
    const [loading,setLoading] = useState(false);
    const [isFilterModalVisible,setIsFilterModalVisible] = useState(false);
    const dispatch = useDispatch();

    const handleSearchInput = (value)=>{
        dispatch(setDishName({searchInput:value}));
    }

    const handleSearch = async()=>{
        if(searchInput==='')    return;
        dispatch(setDishName({showResults:true}));
        setLoading(true);
        try{
            const result = await searchItemsByDishName(searchInput,dispatch);
            if(!result){
                dispatch(setDishName({isResultEmpty:true}));
            }
            else{
                dispatch(setDishName({isResultEmpty:false}));
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
        dispatch(setDishName({searchInput:'',result:[],showResults:false,isResultEmpty:false}));
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
                    {showResults ? <MdClear className="Logos" onClick={handleClearAllBtn}/>
                    : <FaSearch className="Logos" onClick={handleSearch}/>}
                </div>
            </div>
            {(showResults && !loading && !isResultEmpty) && <button onClick={handleToggleFilterBtn} 
            className="absolute right-[9%] mt-3 bg-[#41C9E2] sm:px-4 px-2 py-1 text-xs sm:text-base rounded-lg">
                filter
            </button>}
            {isFilterModalVisible && <Filter searchInput={searchInput} setIsFilterModalVisible={setIsFilterModalVisible} setLoading={setLoading}/>}
            {loading ? <div className="w-[90%] mt-5">
                <Shimmer type={"SearchPage"}/>
            </div>
            : <div className="grid grid-cols-3 w-[90%] mt-10 sm:mt-14 lg:mt-10">
                {isResultEmpty ? <h1 className="col-span-full uppercase text-2xl mt-24 font-semibold tracking-widest text-center">No Dishes Found</h1>
                :result?.map((recipe)=><div className="col-span-full sm:col-span-1"><RecipeCard recipe={recipe}/></div>)}
            </div>}
        </div>
    )
}

export default DishName;