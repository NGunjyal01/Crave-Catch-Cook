import { NavLink } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import SideMenu from "./SideMenu";

const Header = () => {

    const [isSideMenuOpen,setIsSideMenuOpen] = useState(false);

    const handleSideMenuClick = ()=>{
        setIsSideMenuOpen(true);
    };

    return (
        <>
            <div className="fixed z-20 w-full top-0 flex bg-[#ACE2E1] lg:py-7 p-4 text-gray-800">
                <h1 className="sm:ml-[5%] sm:text-lg lg:text-2xl font-bold font-serif">Crave Catch Cook</h1>
                <div className="ml-[20%] hidden lg:flex lg:space-x-4 mr-7 sm:text-sm lg:text-lg">
                    <NavLink to={"/"}>Home</NavLink>
                    <NavLink to={"/recipes"}>Recipes</NavLink>
                    <NavLink to={"/favourites"}>Favourites</NavLink>
                    <NavLink to={"/yourAccount"}>Your Account</NavLink>
                </div>
                <RxHamburgerMenu className="lg:hidden ml-[45%] sm:ml-[70%]" onClick={handleSideMenuClick} size={20}/>
                <div className="hidden lg:block ml-[25%]">
                    Login/Signup
                </div>
            </div>
            {isSideMenuOpen && <SideMenu setIsSideMenuOpen={setIsSideMenuOpen}/>}
        </>
    )
}

export default Header
