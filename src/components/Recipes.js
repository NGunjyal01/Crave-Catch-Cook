import { NavLink, Outlet } from "react-router-dom";

const Recipes = () => {
  return (
    <>
        <div className="flex justify-center mt-[10%]">
            <h1 className="absolute left-[27%] font-bold text-2xl text-gray-700 p-4">Search By</h1>
            <div className="flex flex-row space-x-5 bg-[#41C9E2] p-3 rounded-full shadow-[#008DDA] shadow-lg">
                <NavLink to={"/recipes/dishName"} className={({isActive})=>isActive?"bg-[#008DDA] p-2 rounded-full text-gray-200":"p-2"}>Dish Name</NavLink>
                <NavLink to={"/recipes/ingredients"} className={({isActive})=>isActive?"bg-[#008DDA] p-2 rounded-full text-gray-200":"p-2"}>Ingredients</NavLink>
                <NavLink to={"/recipes/nutrients"} className={({isActive})=>isActive?"bg-[#008DDA] p-2 rounded-full text-gray-200":"p-2"}>Nutrients</NavLink>
            </div>
        </div>
        <Outlet/>
    </>
  )
}

export default Recipes
