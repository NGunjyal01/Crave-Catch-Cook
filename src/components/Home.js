
import { NavLink, Outlet } from "react-router-dom";

const Home = () => {

    return (
        <>
            <div className="flex justify-center mt-[10%]">
                <h1 className="absolute left-[27%] font-bold text-2xl text-gray-700 p-4">Search By</h1>
                <div className="flex flex-row space-x-5 bg-orange-300 p-3 rounded-full shadow-orange-700 shadow-lg">
                    <NavLink to={"/"} className={({isActive})=>isActive?"bg-orange-600 p-2 rounded-full text-gray-200":"p-2"}>Dish Name</NavLink>
                    <NavLink to={"/ingredients"} className={({isActive})=>isActive?"bg-orange-600 p-2 rounded-full text-gray-200":"p-2"}>Ingredients</NavLink>
                    <NavLink to={"/nutrients"} className={({isActive})=>isActive?"bg-orange-600 p-2 rounded-full text-gray-200":"p-2"}>Nutrients</NavLink>
                </div>
            </div>
            <Outlet/>
        </>
    )
}

export default Home;
