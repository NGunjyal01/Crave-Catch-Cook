import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const Favourites = () => {

    const user = useSelector(store => store.user);

    return !user?(<div className='flex justify-center mt-[20%] text-3xl font-bold'>
        <h1>To Save/See Your Favourites Recipes First <Link to={"/authentication"}>Login/Signup</Link></h1>
        </div> ) : ( <div>
        
        </div>
    )
}

export default Favourites
