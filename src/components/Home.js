import { useState } from "react"
import { FaSearch } from "react-icons/fa";

const Home = () => {

    const [searchInput,setSearchInput] = useState(null); 

    const handleSearchInput = (value)=>{
        setSearchInput(value);
    }

    return (
        <>
            <div className="flex justify-center mt-[5%]">
                <div className="flex flex-row space-x-4 bg-blue-100 p-4">
                    <h1>Dish Name</h1>
                    <h1>Ingredients</h1>
                    <h1>Nutrients</h1>
                </div>
            </div>
            <div className="flex justify-center mt-[5%]">
                <input type="text" placeholder="Search Any Recipes" 
                className="p-4 rounded-full w-[80%] border-black border-2"
                onChange={(e)=>{handleSearchInput(e.target.value)}} value={searchInput}/>
                <FaSearch/>
            </div>
        </>
    )
}

export default Home;
