import { NavLink } from "react-router-dom"

const Header = () => {
    return (
    <div className="fixed z-20 w-full top-0 flex justify-between bg-orange-600 px-20 py-7 text-gray-200">
        <h1 className="text-2xl font-bold font-serif">Recipe Finder</h1>
        <div className="flex flex-row space-x-4 mr-7 text-lg ">
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/favourites"}>Favourites</NavLink>
            <NavLink to={"/yourRecipes"}>Your Recipes</NavLink>
            <NavLink to={"/yourAccount"}>Your Account</NavLink>
        </div>
    </div>
    )
}

export default Header
