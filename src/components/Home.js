
import { NavLink, Outlet } from "react-router-dom";

const Home = () => {

    return (
        <>
            <div className="flex justify-center mt-[5%]">
                <h1 className="absolute left-[27%] font-bold text-2xl p-4">Search By</h1>
                <div className="flex flex-row space-x-10 bg-orange-300 py-3 px-6 rounded-full">
                    <NavLink to={"/"} className={({isActive})=>isActive?"bg-orange-600 p-2 rounded-full":"p-2"}>Dish Name</NavLink>
                    <NavLink to={"/ingredients"} className={({isActive})=>isActive?"bg-orange-600 p-2 rounded-full":"p-2"}>Ingredients</NavLink>
                    <NavLink to={"/nutrients"} className={({isActive})=>isActive?"bg-orange-600 p-2 rounded-full":"p-2"}>Nutrients</NavLink>
                </div>
            </div>
            <Outlet/>
        </>
    )
}

export default Home;


// import { useState } from "react";
// import { FaSearch } from "react-icons/fa";

// const Home = () => {

//     const [searchBy,setSearchBy] = useState({Name:true,Ingredients:false,Nutrients:false});
//     const [searchInput,setSearchInput] = useState(null); 

//     const handleSearchInput = (value)=>{
//         setSearchInput(value);
//     }

//     const handleSearchByClick = (value)=>{
//         setSearchInput(null);
//         if(value==="name")
//             setSearchBy({Name:true,Ingredients:false,Nutrients:false});
//         else if(value==="ingredients")
//             setSearchBy({Name:false,Ingredients:true,Nutrients:false});
//         else
//             setSearchBy({Name:false,Ingredients:false,Nutrients:true});
//     }

//     return (
//         <>
//             <div className="flex justify-center mt-[5%]">
//                 <div className="flex flex-row space-x-10 bg-orange-300 p-3 rounded-full">
//                     <h1 onClick={()=>{handleSearchByClick("name")}} className={`${searchBy.Name?"bg-orange-600 p-2 rounded-full":"p-2"}`}>Dish Name</h1>
//                     <h1 onClick={()=>{handleSearchByClick("ingredients")}} className={`${searchBy.Ingredients?"bg-orange-600 p-2 rounded-full":"p-2"}`}>Ingredients</h1>
//                     <h1 onClick={()=>{handleSearchByClick("nutrients")}} className={`${searchBy.Nutrients?"bg-orange-600 p-2 rounded-full":"p-2"}`}>Nutrients</h1>
//                 </div>
//             </div>
//             {!searchBy.Nutrients ? <div className="flex justify-center mt-[5%]">
//                 <input type="text" placeholder="Search Any Recipes" 
//                 className="p-4 rounded-full w-[80%] border-black border-2"
//                 onChange={(e)=>{handleSearchInput(e.target.value)}} value={searchInput}/>
//                 <FaSearch/>
//             </div> : <div>
            
//             </div>}
//         </>
//     )
// }

// export default Home;
