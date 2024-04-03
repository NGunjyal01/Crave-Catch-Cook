import { useState } from "react";
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../../utils/userSlice";

const EmailAndPasswordLogin = () => {

    const [newUser,setNewUser] = useState(false);
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [newPassword,setNewPassword] = useState('');
    const [confirmNewPassword,setConfirmNewPassword] = useState('');
    const [error,setError] = useState('');
    const [toggleEyeIcon,setToggleEyeIcon] = useState({P:false,NP:false,CNP:false});

    const handleEmailChange = (input)=>{
        setEmail(input);
    }

    const handlePasswordChange = (input)=>{
        setPassword(input);
    }

    const handletoggleNewUser = ()=>{
        setNewUser(!newUser);
        setEmail('');
        setPassword('');
        setNewPassword('');
        setConfirmNewPassword('');
    }

    const handleNewPasswordChange = (input)=>{
        setNewPassword(input);
    }

    const handleConfirmPasswordChange = (input)=>{
        setConfirmNewPassword(input);
    }

    const checkValidEmail = (input)=>{
        return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(input);
    }

    const handleBtnClick = ()=>{   
        if(newUser){
            if(!checkValidEmail(email)){
                return setError("Invalid Email");
            }
            else if(newPassword.length<6){
                return setError("Password minimum Length should be 6");
            }
            else if(newPassword!==confirmNewPassword){
                return setError("Confirm Password Not Match");
            }
            createUserWithEmailAndPassword(auth, email, newPassword)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setError(errorMessage);
                // ..
            });
        }
        else{
            signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user);
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
        }
    }

    return (
        <div>
            <h1 className="text-xl lg:text-3xl my-6 lg:my-4 font-bold flex justify-center">{newUser?"Sign Up":"Login"}</h1>
            <div className="flex flex-col items-center">
                <h1 className="-ml-[59%] lg:-ml-[24%] my-4 text-sm lg:text-base">Email Address</h1>
                <input type="text" placeholder="Enter Email" value={email} onChange={(e)=>{handleEmailChange(e.target.value)}}
                className="sm:py-3 p-2 sm:px-4 text-xs sm:text-base rounded-xl w-[90%] sm:w-[80%] lg:w-[40%] border-2 border-gray-500 focus:outline-none focus:border-[#41C9E2] focus:shadow-outline focus:shadow-[#41C9E2] shadow-gray-700 shadow-sm"/>
                {!newUser && (<>
                    <h1 className="-ml-[67%] lg:-ml-[29%] my-4 text-sm lg:text-base">Password</h1>
                    <input type={!toggleEyeIcon.P?"password":"text"} placeholder="Enter Password" value={password} onChange={(e)=>{handlePasswordChange(e.target.value)}}
                    className="sm:py-3 p-2 sm:px-4 text-xs sm:text-base rounded-xl w-[90%] sm:w-[80%] lg:w-[40%] border-2 border-gray-500 focus:outline-none focus:border-[#41C9E2] focus:shadow-outline focus:shadow-[#41C9E2] shadow-gray-700 shadow-sm"/>
                    <button onClick={()=>{setToggleEyeIcon({...toggleEyeIcon,P:!toggleEyeIcon.P})}} className="relative left-[39%] lg:left-[16%] -top-[1.6rem] lg:-top-9">{!toggleEyeIcon.P?<IoEye className="Logos"/>:<IoEyeOff className="Logos"/>}</button>
                </>)}
                {newUser && (<>
                    <h1 className="-ml-[59%] lg:-ml-[23%] my-2 text-sm lg:text-base">New Password</h1>
                    <input type={!toggleEyeIcon.NP?"password":"text"} placeholder="Enter New Password" value={newPassword} onChange={(e)=>{handleNewPasswordChange(e.target.value)}}
                    className="sm:py-3 p-2 sm:px-4 text-xs sm:text-base rounded-xl w-[90%] sm:w-[80%] lg:w-[40%] border-2 border-gray-500 focus:outline-none focus:border-[#41C9E2] focus:shadow-outline focus:shadow-[#41C9E2] shadow-gray-700 shadow-sm"/>
                    <button onClick={()=>{setToggleEyeIcon({...toggleEyeIcon,NP:!toggleEyeIcon.NP})}} className="relative left-[39%] lg:left-[16%] -top-[1.6rem] lg:-top-9">{!toggleEyeIcon.NP?<IoEye className="Logos"/>:<IoEyeOff className="Logos"/>}</button>
                </>)}
                {newUser && (<>
                    <h1 className="-ml-[43%] lg:-ml-[14%] -mt-2 lg:-mt-4 my-2 text-sm lg:text-base">Confirm New Password</h1>
                    <input type={!toggleEyeIcon.CNP?"password":"text"} placeholder="Enter New Password" value={confirmNewPassword} onChange={(e)=>{handleConfirmPasswordChange(e.target.value)}}
                    className="sm:py-3 p-2 sm:px-4 text-xs sm:text-base rounded-xl w-[90%] sm:w-[80%] lg:w-[40%] border-2 border-gray-500 focus:outline-none focus:border-[#41C9E2] focus:shadow-outline focus:shadow-[#41C9E2] shadow-gray-700 shadow-sm"/>
                    <button onClick={()=>{setToggleEyeIcon({...toggleEyeIcon,CNP:!toggleEyeIcon.CNP})}} className="relative left-[39%] lg:left-[16%] -top-[1.6rem] lg:-top-9">{!toggleEyeIcon.CNP?<IoEye className="Logos"/>:<IoEyeOff className="Logos"/>}</button>
                </>)}
                <p className="-my-2">{error}</p>
                <button className="bg-[#008DDA] text-[#F7EEDD] lg:text-xl py-2 rounded-lg w-[40%] mt-9" onClick={handleBtnClick}>{newUser?"Sign Up":"Login"}</button>
                <button className="mt-4 text-sm lg:text-base" onClick={handletoggleNewUser}>{!newUser?"New User? Sign Up":"Already a user? Login "}</button>
            </div>
        </div>
    )
}

export default EmailAndPasswordLogin;
