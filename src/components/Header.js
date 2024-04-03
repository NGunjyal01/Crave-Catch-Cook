import { Link, NavLink, useNavigate } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { useEffect, useState } from "react";
import SideMenu from "./SideMenu";
import { addUser,removeUser } from "../utils/userSlice";
import { useDispatch, useSelector } from "react-redux";
import {auth}  from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

const Header = () => {

    const [isSideMenuOpen,setIsSideMenuOpen] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector(store => store.user);

    const handleSideMenuClick = ()=>{
        setIsSideMenuOpen(true);
    };
    
    const handleSignOut = () => {
        signOut(auth)
        .then(() => {
            // Sign-out successful.
        })
        .catch((error) => {
            // An error happened.
        });
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
          if(user) {
            const { uid, email, displayName, phoneNumber, photoURL } = user;
            dispatch(
              addUser({
                uid: uid,
                email: email,
                displayName: displayName,
                phoneNumber: phoneNumber,
                photoURL: photoURL,
              })
            );
            // const db = getFirestore();
            // const docRef = doc(db, "Users",uid);
            // getDoc(docRef).then((docSnap)=>{
            //   if(!docSnap.exists()){
            //     // docSnap.data() will be undefined in this case
            //     setDoc(docRef,{
            //       movies:[],
            //       tvShows:[],
            //     });
            //     // console.log("new doc created")
            //   }
            // })
            navigate("/");
          } else {
            // User is signed out
            dispatch(removeUser());
            navigate("/");
          }
        });
    
        return () => unsubscribe();
      }, []);



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
                {!user && <Link to={"/authentication"} className="hidden lg:block ml-[25%] sm:text-sm lg:text-lg">Login/SignUp</Link>}
                {user && <button onClick={handleSignOut} className="hidden lg:block ml-[25%] sm:text-sm lg:text-lg">Signout</button>}
            </div>
            {isSideMenuOpen && <SideMenu setIsSideMenuOpen={setIsSideMenuOpen}/>}
        </>
    )
}

export default Header
