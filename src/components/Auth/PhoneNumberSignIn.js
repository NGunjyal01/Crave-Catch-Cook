import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { useState } from 'react';
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import { auth } from '../../utils/firebase';

const PhoneNumberSignIn = () => {

    const [name,setName] = useState('');
    const [phone,setPhone] = useState('');
    const [OTP,setOTP] = useState('');
    const [user,setUser] = useState('');

    const sendOTP = () => {
      const recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {});
      const confirmation = signInWithPhoneNumber(auth, phone, recaptchaVerifier)
      .then((confirmationResult) => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        // ...
        setUser(confirmationResult);
      }).catch((error) => {
        // Error; SMS not sent
        // ...
        console.log(error.message);
      });
    };
    
    const verifyOTP = () =>{
      user.confirm(OTP).then((result) => {
        // User signed in successfully.
        const user = result.user;
        // ...
      }).catch((error) => {
        // User couldn't sign in (bad verification code?)
        // ...
        console.log(error.message);
      });
    };

    return (
      <div className='flex flex-col items-center mt-16'>
        <PhoneInput placeholder="Enter phone number" defaultCountry='IN' value={phone} onChange={setPhone} className='w-[40%] my-2 text-black' style={{ padding: '10px' }}/>
        <button className="my-5 p-2 bg-[#008DDA] w-[90%] sm:w-[80%] lg:w-[40%] rounded-lg text-[#F7EEDD]" onClick={sendOTP}>Send OTP</button>
        <div id='recaptcha-container' className='my-2'></div>
        <input type='text' placeholder='Enter OTP' value={OTP} onChange={(e)=>{setOTP(e.target.value)}}
        className="sm:py-3 p-2 sm:px-4 text-xs sm:text-base rounded-xl w-[90%] sm:w-[80%] lg:w-[40%] border-2 border-gray-500 focus:outline-none focus:border-[#41C9E2] focus:shadow-outline focus:shadow-[#41C9E2] shadow-gray-700 shadow-sm"/>
        <button className="my-5 p-2 bg-[#008DDA] w-[90%] sm:w-[80%] lg:w-[40%] rounded-lg text-[#F7EEDD]" onClick={verifyOTP}>Verify OTP</button>
      </div>
    );
};

export default PhoneNumberSignIn;
