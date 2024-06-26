import { signOut } from "firebase/auth";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { auth } from "../utils/firebase";


const SideMenu = ({setIsSideMenuOpen}) => {

    const user = useSelector(store => store.user.userInfo);

    useEffect(() => {
        // Disable scrolling on the background when the modal is open
        document.body.style.overflow = 'hidden';  
        window.scrollTo(0,0);      
        return () => {
            // Enable scrolling on the background when the modal is closed
            document.body.style.overflow = '';
        };
    }, []);

    const handleCloseBtn = ()=>{
        setIsSideMenuOpen(false);
        document.body.style.overflow = '';
    }
    const handleSignOut = () => {
        signOut(auth)
        .then(() => {
            // Sign-out successful.
            setIsSideMenuOpen(false);
        })
        .catch((error) => {
            // An error happened.
        });
    };

    return (
    <div className="absolute z-50 top-0 w-full h-[200%] bg-[#F7EEDD] flex flex-col">
        <button onClick={handleCloseBtn} className="absolute text-xl font-semibold right-[10%] top-[1%]">X</button>
        <div className="flex flex-col items-center space-y-5 text-lg mt-[30%]">
            <NavLink to={"/"} onClick={handleCloseBtn}>Home</NavLink>
            <NavLink to={"/recipes"} onClick={handleCloseBtn}>Recipes</NavLink>
            <NavLink to={"/favourites"} onClick={handleCloseBtn}>Favourites</NavLink>
            <NavLink to={"/yourAccount"} onClick={handleCloseBtn}>Your Account</NavLink>
            {!user && <NavLink to={"/authentication"} onClick={handleCloseBtn}>Login/SignUp</NavLink>}
            {user && <button onClick={handleSignOut}>SignOut</button>}
        </div>
    </div>
    )
}

export default SideMenu;
