import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { API_KEY } from "../utils/constants";

const Ingredients = () => {
    const [searchInput,setSearchInput] = useState(null); 

    const handleSearchInput = (value)=>{
        setSearchInput(value);
    }
    // const getRecipesByIngredients = async()=>{
    //     const data = await fetch("https://api.spoonacular.com/recipes/findByIngredients?apiKey="+API_KEY+"&query="+searchInput+"&number=20");
    //     const json = await data.json();
    //     console.log(json);
    // }

    // const handleSearch = ()=>{
    //     getRecipesByIngredients();
    // }

    // return (
    //     <div className="flex justify-center mt-[5%]" onKeyDown={(e)=>{if(e.key==="Enter")handleSearch()}}>
    //         <input type="text" placeholder="Search Recipes By Ingredients" 
    //         className="p-4 rounded-full w-[80%] border-black border-2"
    //         onChange={(e)=>{handleSearchInput(e.target.value)}} value={searchInput}/>
    //         <FaSearch onClick={handleSearch}/>
    //     </div>
    // )
}

export default Ingredients
