

const Shimmer = () => {
    return (
        <div className="flex flex-wrap justify-center mt-10 sm:mt-6 animate-pulse">
            {Array(12).fill("").map( (e,index) => <div key={index} className="bg-gray-200 m-4 w-full sm:w-[45%] lg:w-[28%] h-[19rem] sm:h-[21rem] lg:h-[28rem] rounded-3xl sm:rounded-[2rem] lg:rounded-[2.5rem]"></div>)}
        </div>
    )
}

export default Shimmer
