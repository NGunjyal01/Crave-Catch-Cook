import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


const YourAccount = () => {

    const user = useSelector(store => store.user.userInfo);

    return !user?(<div className='flex justify-center mx-5 mt-[50%] lg:mt-[20%] lg:text-3xl'>
        <h1>To See Your Account Info <Link to={"/authentication"} className="font-bold">Login/Signup</Link></h1>
        </div> ) : ( <div>
        
        </div>
    )
}

export default YourAccount
