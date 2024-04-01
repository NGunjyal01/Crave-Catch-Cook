import { NavLink } from "react-router-dom";


const SideMenu = ({setIsSideMenuOpen}) => {

    const handleCloseBtn = ()=>{
        setIsSideMenuOpen(false);
    }

    return (
    <div className="absolute z-50 top-0 w-full h-[200%] bg-[#F7EEDD] flex flex-col">
        <button onClick={handleCloseBtn}>onclose</button>
        <div className="flex flex-col items-center space-y-5 text-lg mt-[30%]">
            <NavLink to={"/"} onClick={handleCloseBtn}>Home</NavLink>
            <NavLink to={"/recipes"} onClick={handleCloseBtn}>Recipes</NavLink>
            <NavLink to={"/favourites"} onClick={handleCloseBtn}>Favourites</NavLink>
            <NavLink to={"/yourAccount"} onClick={handleCloseBtn}>Your Account</NavLink>
        </div>
    </div>
    )
}

export default SideMenu;