import toast from 'react-hot-toast';
import { account, ID } from '../lib/appwrite';
import { addUser, removeUser } from '../utils/userSlice';

export async function signUp({email,password,name},dispatch,navigate){
    const toastId = toast.loading('Loading...');
    console.log(email,password,name)
    try{
        const response = await account.create(ID.unique(), email, password, name);
        console.log("SIGNUP API RESPONSE..........................",response);
        toast.success('Account Created');
        login(email,password,dispatch,navigate);
    }
    catch(error){
        console.log("ERROR DURING SIGNUP API....................",error);
        if (error.message.includes('already exists')) {
            toast.error('A user with this email already exists.');
        } else {
            toast.error('An error occurred during sign-up. Please try again.');
        }
    }
    toast.dismiss(toastId);
}

export async function login(email,password,dispatch,navigate){
    const toastId = toast.loading("Loading...");
    try{
        const response = await account.createEmailPasswordSession(email, password);
        const user = await account.get();
        console.log("LOGIN API RESPONSE.....................",response);
        dispatch(addUser(user));
        toast.success('Successfully Logged In');
        navigate('/');
    }
    catch(error){
        console.log("ERROR DURING LOGIN API RESPONSE......................",error);
        if (error.message.includes('Invalid credentials')) {
            toast.error('Invalid email or password. Please try again.');
        } else if (error.message.includes('User not found')) {
            toast.error('No account found with this email.');
        } else {
            toast.error('Error During Login');
        }
    }
    toast.dismiss(toastId);
}

export async function logout(dispatch,navigate) {
    const toastId = toast.loading('Loading...');
    try{
        const response = await account.deleteSession('current');
        console.log("LOGOUT API RESPONSE.................",response);
        dispatch(removeUser());
        navigate('/');
    }
    catch(error){
        console.log("ERROR DURING LOGOUT API...............",error);
    }
    toast.dismiss(toastId);
}