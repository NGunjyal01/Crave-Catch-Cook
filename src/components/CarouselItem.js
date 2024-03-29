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
        <div className="flex bg-[#ACE2E1] w-[95%] h-[70%] absolute left-0 right-0 mx-auto rounded-[4rem] transition-transform duration-500 ease-in-out" >
            <div className="mt-14 ml-10">
                <h1 className="text-2xl font-bold w-[80%]">{title}</h1>
                <p dangerouslySetInnerHTML={{ __html: summary }} className="w-[80%] mt-5 text-sm text-gray-800"/>
                <div className="absolute top-[60%] mt-10 flex flex-wrap max-w-[20rem]">
                    <div className='flex justify-between bg-[#41C9E2] w-36 px-5 py-2 rounded-full shadow-sm mt-4 mr-4'>
                        <BiSolidDish size={25}/>
                        <h1 className='text-sm mt-0.5'>{servings + " servings"}</h1>
                    </div>
                    <div className='flex justify-between bg-[#41C9E2] w-36 px-5 py-2 rounded-full shadow-sm mt-4 mr-4'>
                        <IoMdAlarm size={25}/>
                        <h1 className='text-sm mt-0.5'>{readyInMinutes+" min"}</h1>
                    </div>
                    <div className='flex justify-between bg-[#41C9E2] w-36 px-5 py-2 rounded-full shadow-sm mt-4 mr-4'>
                        <AiFillDollarCircle size={25}/>
                        <h1 className='text-sm mt-0.5'>{"$ "+pricePerServing}</h1>
                    </div>
                    <div  className='flex justify-between bg-[#41C9E2] w-36 px-5 py-2 rounded-full shadow-sm mt-4 mr-4'>
                        <FaThumbsUp size={23}/>
                        <h1 className='text-sm mt-0.5'>{aggregateLikes + " likes"}</h1>
                    </div>
                </div>
                <button className="bg-[#008DDA] text-white rounded-2xl w-40 h-14 flex pl-5 py-4 text-lg absolute top-[75%] left-[30%] hover:scale-105" onClick={handleViewRecipe}>
                    View Recipe 
                    <span className="text-black"><IoPlayCircleOutline size={20} className="mt-1 ml-2"/></span>
                </button>
            </div>  
            <img src={image} alt={title+" img"} className="rounded-r-[4rem] w-[45%]"/>
        </div>
    )
}

export default CarouselItem
