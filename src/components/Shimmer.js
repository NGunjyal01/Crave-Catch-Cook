

const Shimmer = () => {
    return (
        <div className="flex flex-wrap justify-center mt-10 sm:mt-6 animate-pulse">
            {Array(12).fill("").map( (e,index) => <div key={index} className="bg-gray-200 m-4 w-full sm:w-[28%] h-[22rem] sm:h-[30rem] rounded-[2.5rem]"></div>)}
        </div>
    )
}

export default Shimmer
