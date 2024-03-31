import { NavLink } from "react-router-dom"

const Header = () => {
    return (
    <div className="fixed z-20 w-full top-0 flex justify-between bg-[#ACE2E1] sm:px-20 sm:py-7 p-4 text-gray-800">
        <h1 className="sm:text-2xl font-bold font-serif">Crave Catch Cook</h1>
        <div className="hidden sm:block flex space-x-4 mr-7 text-lg">
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/recipes"}>Recipes</NavLink>
            <NavLink to={"/favourites"}>Favourites</NavLink>
            <NavLink to={"/yourAccount"}>Your Account</NavLink>
        </div>
    </div>
    )
}

export default Header
