import EmailAndPasswordLogin from "./EmailAndPasswordLogin";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaSquarePhone } from "react-icons/fa6";


const Authentication = () => {


    const [phoneNumberSignIn,setPhoneNumberSignIn] = useState(false);
    const handletogglePhoneNumberSignIn = ()=>{
        setPhoneNumberSignIn(!phoneNumberSignIn);
    };


    return (
        <div className="bg-[#ACE2E1] w-[90%] lg:w-[45%] h-[80%] mt-[30%] lg:mt-[8%] absolute left-0 right-0 mx-auto rounded-3xl">
            <EmailAndPasswordLogin/>
            <div className="flex flex-col items-center">
                <h1 className="py-4 text-sm lg:text-base"> or you can sign in with</h1>
                <div className="flex">
                    {phoneNumberSignIn?<button className="w-10">back</button>:<FaSquarePhone className="Logos mx-1 cursor-pointer"/>}
                    <FcGoogle className="Logos mx-1 cursor-pointer"/>
                </div>
            </div>
        </div>
    )
}

export default Authentication
