import { NavLink } from "react-router-dom"

const Header = () => {
    return (
    <div className="flex justify-between bg-orange-600 px-20 py-7">
        <h1>Recipe Finder</h1>
        <div className="flex flex-row space-x-4">
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/yourRecipes"}>Your Recipes</NavLink>
            <NavLink to={"/yourAccount"}>Your Account</NavLink>
        </div>
    </div>
    )
}

export default Header
