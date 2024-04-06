import { useState } from "react";
import { NavLink,Outlet } from "react-router-dom";

const Recipes = () => {
  
  const searchBy = [{name:"Dish Name",to:"/recipes"},{name:"Ingredients",to:"/recipes/ingredients"},{name:"Nutrients",to:"/recipes/nutrients"}];

  const [activeIndex,setActiveIndex] = useState(0);

  const isActive = (index) => {
    // Set active index to null first to force re-render even if clicking on the same route
    setActiveIndex(null);
    // Then set it back to the clicked index
    setActiveIndex(index);
  };

  console.log(activeIndex);

  return (
    <>
        <div className="flex justify-center mt-[50%] sm:mt-[15%] lg:mt-[10%]">
            <h1 className="absolute sm:left-[10%] lg:left-[27%] top-[15%] sm:top-[11.5%] lg:top-[23%] font-bold text-2xl text-gray-700">Search By</h1>
            <div className="flex flex-row space-x-5 -mt-5 sm:mt-0 bg-[#ACE2E1] p-3 rounded-full shadow-[#41C9E2] shadow-lg sm:text-base text-xs">
              {searchBy.map((type,index) => <NavLink key={type.name} to={type.to} onClick={() => isActive(index)} className={`${activeIndex===index?"bg-[#41C9E2] p-2 rounded-full text-gray-200":"p-2"}`}>{type.name}</NavLink>)}
            </div>
        </div>
        <Outlet/>
    </>
  )
}

export default Recipes;
