import { Link, NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import AnimatedHamburgerButton from "./common/AnimatedHamburgerButton";
import { logout } from "../services/authAPI";

const Header = () => {

  const user = useSelector(store => store.user.userInfo);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogOut = () => {
    logout(dispatch,navigate);
  };


    return (
      <>
        <div className="fixed top-0 w-full z-40 flex bg-[#ACE2E1] text-gray-800 py-5 sm:pt-10 sm:pb-5">
          <h1 className="ml-[30%] sm:ml-[5%] sm:text-lg lg:text-2xl font-bold font-serif whitespace-nowrap">Crave Catch Cook</h1>
          <div className="ml-[20%] hidden lg:flex lg:space-x-4 mr-7 sm:text-sm lg:text-lg whitespace-nowrap">
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/recipes"}>Recipes</NavLink>
            <NavLink to={"/favourites"}>Favourites</NavLink>
            <NavLink to={"/yourAccount"}>Your Account</NavLink>
          </div>
          {!user && <div className="hidden lg:flex gap-3 ml-[25%] sm:text-sm lg:text-lg">
            <Link to={"/login"} className="">Login</Link>
            <Link to={"/signup"} className="">SignUp</Link>
          </div>}
          {user && <button onClick={handleLogOut} className="hidden lg:block ml-[25%] sm:text-sm lg:text-lg">LogOut</button>}
        </div>
        <AnimatedHamburgerButton/>
      </>
    )
}

export default Header
