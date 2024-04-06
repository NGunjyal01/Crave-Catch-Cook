import EmailAndPasswordLogin from "./EmailAndPasswordLogin";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaSquarePhone } from "react-icons/fa6";
import PhoneNumberSignIn from "./PhoneNumberSignIn";
import { signInWithPopup } from "firebase/auth";
import { auth, googleAuthProvider } from "../../utils/firebase";


const Authentication = () => {


    const [phoneNumberSignIn,setPhoneNumberSignIn] = useState(false);
    const handletogglePhoneNumberSignIn = ()=>{
        setPhoneNumberSignIn(!phoneNumberSignIn);
    };

    const handleGoogleSignIn = ()=>{
        signInWithPopup(auth, googleAuthProvider)
        .then((result) => {
        }).catch((error) => {
     });
    }

    return (
        <div className="bg-[#ACE2E1] w-[90%] lg:w-[45%] h-[80%] mt-[30%] lg:mt-[8%] absolute left-0 right-0 mx-auto rounded-3xl">
            {phoneNumberSignIn ? <PhoneNumberSignIn/>:<EmailAndPasswordLogin/>}
            <div className="flex flex-col items-center">
                <h1 className="py-4 text-sm lg:text-base"> or you can sign in with</h1>
                <div className="flex">
                    {phoneNumberSignIn?<button onClick={handletogglePhoneNumberSignIn} className="w-10">back</button>:<FaSquarePhone onClick={handletogglePhoneNumberSignIn} className="Logos mx-1 cursor-pointer"/>}
                    <FcGoogle onClick={handleGoogleSignIn} className="Logos mx-1 cursor-pointer"/>
                </div>
            </div>
        </div>
    )
}

export default Authentication
