import { AiFillDollarCircle } from "react-icons/ai";
import { BiSolidDish } from "react-icons/bi";
import { IoMdAlarm } from "react-icons/io";
import { FaThumbsUp } from "react-icons/fa";
import { IoPlayCircleOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const CarouselItem = ({recipe}) => {

    const {id,title,readyInMinutes,servings,image,summary,aggregateLikes,pricePerServing,cuisines,dishTypes} = recipe;

    const navigate = useNavigate();

    const handleViewRecipe = ()=>{
        navigate("/recipe/"+id);
    }

    return (
        <div className="flex bg-[#ACE2E1] w-[95%] h-[35rem] ml-[2.5%] rounded-[2rem] sm:rounded-[4rem] transition-transform duration-500 ease-in-out" >
            <div className="lg:mt-14 lg:ml-10 lg:px-0">
                <img src={image} alt={title+" img"} className="block lg:hidden rounded-t-[2rem] w-full h-[30%] sm:h-[40%] object-cover"/>
                <div className="mt-5 lg:mt-0 mx-2 sm:mx-5 lg:mx-0">
                    <h1 className="sm:text-lg lg:text-4xl font-bold sm:w-[90%]">{title}</h1>
                    <p dangerouslySetInnerHTML={{ __html: summary.slice(0,700) }} className="lg:w-[80%] mt-2 lg:mt-7 text-[0.5rem] sm:text-xs lg:text-sm text-gray-800"/>
                </div>
                <div className="absolute left-0 right-0 mx-auto sm:mx-0 flex flex-wrap top-[65%] lg:top-[70%] sm:max-lg:top-[50%] sm:left-[7%] lg:left-[5%] max-w-[13rem] sm:max-w-[20rem]">
                    <div className='flex justify-between bg-[#41C9E2] w-[5.5rem] sm:w-36 h-8 sm:h-11 sm:px-5 px-2 py-2 rounded-lg lg:rounded-full shadow-sm shadow-[#008DDA] mt-4 mr-4'>
                        <BiSolidDish className="Logos"/>
                        <h1 className='text-[0.6rem] sm:text-sm mt-0.5'>{servings + " servings"}</h1>
                    </div>
                    <div className='flex justify-between bg-[#41C9E2] w-[5.5rem] sm:w-36 h-8 sm:h-11 sm:px-5 px-2 py-2 rounded-lg lg:rounded-full shadow-sm shadow-[#008DDA] mt-4 mr-4'>
                        <IoMdAlarm className="Logos"/>
                        <h1 className='text-[0.6rem] sm:text-sm mt-0.5'>{readyInMinutes+" min"}</h1>
                    </div>
                    <div className='flex justify-between bg-[#41C9E2] w-[5.5rem] sm:w-36 h-8 sm:h-11 sm:px-5 px-2 py-2 rounded-lg lg:rounded-full shadow-sm shadow-[#008DDA] mt-4 mr-4'>
                        <AiFillDollarCircle className="Logos"/>
                        <h1 className='text-[0.6rem] sm:text-sm mt-0.5'>{"$ "+pricePerServing}</h1>
                    </div>
                    <div  className='flex justify-between bg-[#41C9E2] w-[5.5rem] sm:w-36 h-8 sm:h-11 sm:px-5 px-2 py-2 rounded-lg lg:rounded-full shadow-sm shadow-[#008DDA] mt-4 mr-4'>
                        <FaThumbsUp className="Logos"/>
                        <h1 className='text-[0.6rem] sm:text-sm mt-0.5'>{aggregateLikes + " likes"}</h1>
                    </div>
                </div>
                <button className="absolute top-[78%] sm:top-[54%] lg:top-[75%] left-[22%] sm:left-[55%] lg:left-[30%] bg-[#008DDA] text-white rounded-2xl w-40 h-14 flex pl-5 py-4 text-lg lg:hover:scale-105" onClick={handleViewRecipe}>
                    View Recipe 
                    <span className="text-black"><IoPlayCircleOutline size={20} className="mt-1 ml-2"/></span>
                </button>
            </div>  
            <img src={image} alt={title+" img"} className="hidden lg:block rounded-r-[4rem] w-[45%]"/>
        </div>
    )
}

export default CarouselItem
