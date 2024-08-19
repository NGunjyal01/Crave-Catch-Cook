import { useState } from 'react';
import toast from 'react-hot-toast';
import { signUp } from '../../services/authAPI';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";

const SignUp = () => {

    const [signUpData,setSignUpData] = useState({name:'',email:'',password:'',confirmPassword:''});
    const [toggleEyeBtn,setToggleEyeBtn] = useState({pass:false,conPass:false});
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const checkValidEmail = (input)=>{
        return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(input);
    }

    const handleSignUp = async (event) => {
        event.preventDefault();
        if (!signUpData.email || !signUpData.password || !signUpData.name || !signUpData.confirmPassword) {
            return toast.error('All fields are required');
        }
        else if(!checkValidEmail(signUpData.email)){
            return toast.error('Invalid Email');
        }
        else if(signUpData.password.length<8){
            return toast.error('The password must be at least 8 characters long.');
        }
        else if(signUpData.password !== signUpData.confirmPassword){
            return toast.error('Password Do Not Match');
        }
        else{
            signUp(signUpData,dispatch,navigate);
        }

    }
    const handleOnChange = (e)=>{
        setSignUpData({...signUpData,[e.name]:e.value})
    }

    return (
        <div className='mt-[10%] text-black min-h-screen w-full flex flex-col items-center'>
            <h1 className='text-xl font-bold tracking-wider bg-[#ACE2E1] w-[45%] text-center pt-10 rounded-t-lg'>Create Your Account In Crave Catch Cook</h1>
            <form className='w-[45%] py-10 grid grid-cols-1 place-items-center gap-7 bg-[#ACE2E1] rounded-b-lg'>
                <div className='col-span-full flex flex-col gap-2'>
                    <label htmlFor='name'>Name</label>
                    <input type="text" placeholder="Enter Full Name" name='name' id='name' className='w-80 py-2 px-2 bg-gray-100 rounded-lg' 
                    value={signUpData.name} onChange={e => handleOnChange(e.target)} />
                </div>
                <div className='col-span-full flex flex-col gap-2'>
                    <label htmlFor='email'>Email Address</label>
                    <input type="email" name='email' id='email' placeholder="Enter Email" className='w-80 py-2 px-2 bg-gray-100 rounded-lg' 
                    value={signUpData.email} onChange={e => handleOnChange(e.target)} />
                </div>
                <div className='col-span-full flex flex-col gap-2 relative'>
                    <label htmlFor='password'>Passowrd</label>
                    <input type={toggleEyeBtn.pass ? "text": "password"} placeholder="Password" name='password' id='password' className='w-80 py-2 px-2 bg-gray-100 rounded-lg'  
                    value={signUpData.password} onChange={e => handleOnChange(e.target)} />
                    <button type='button' className='absolute right-4 bottom-3'
                    onClick={()=>{setToggleEyeBtn({...toggleEyeBtn,pass:!toggleEyeBtn.pass})}}>
                        {!toggleEyeBtn.pass ? <IoEye/> : <IoEyeOff/>}
                    </button>
                </div>
                <div className='col-span-full flex flex-col gap-2 relative'>
                    <label htmlFor='confirmPassword'>Confirm Passowrd</label>
                    <input type={toggleEyeBtn.conPass ? "text": "password"} placeholder="Confirm Password" name='confirmPassword' id='confirmPassword' className='w-80 py-2 px-2 bg-gray-100 rounded-lg'  
                    value={signUpData.confirmPassword} onChange={e => handleOnChange(e.target)} />
                    <button type='button' className='absolute right-4 bottom-3'
                    onClick={()=>{setToggleEyeBtn({...toggleEyeBtn,conPass:!toggleEyeBtn.conPass})}}>
                        {!toggleEyeBtn.conPass ? <IoEye/> : <IoEyeOff/>}
                    </button>
                </div>
                <button type="submit" onClick={handleSignUp} className='bg-[#008DDA] w-80 py-2 rounded-lg text-white mt-5'>
                    Sign Up
                </button>
            </form>
        </div>
    );
}

export default SignUp
