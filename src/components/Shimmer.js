

const Shimmer = () => {
    return (
        <div className="flex flex-wrap justify-center mt-6">
            {Array(12).fill("").map( (e,index) => <div key={index} className="bg-gray-200 p-4 m-4 w-[28%] h-80 rounded-lg"></div>)}
        </div>
    )
}

export default Shimmer
