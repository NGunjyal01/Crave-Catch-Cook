

const Shimmer = ({type}) => {
    return (
        <>
            {type==="Home" && <div>
                <div className="flex bg-gray-200 w-[93%] h-[35rem] ml-[2.5%] mt-[28%] sm:mt-[13%] lg:mt-[10%] rounded-[2rem] sm:rounded-[4rem] animate-pulse"/>
                <div className="flex flex-wrap justify-center mt-20">
                    {Array(15).fill("").map( (e,index) => 
                    <div key={index} className="bg-gray-200 m-4 w-full sm:w-[45%] lg:w-[28%] h-[19rem] sm:h-[21rem] lg:h-[28rem] rounded-3xl sm:rounded-[2rem] lg:rounded-[2.5rem]"/>)}
                </div>
            </div>}
            {type==='SearchPage' && <div className="grid grid-cols-3 mt-10 sm:mt-6 animate-pulse">
                {Array(12).fill("").map( (e,index) => <div key={index} className="col-span-full sm:col-span-1 bg-gray-200 m-4 w-[90%] h-[19rem] sm:h-[21rem] lg:h-[28rem] rounded-3xl sm:rounded-[2rem] lg:rounded-[2.5rem]"></div>)}
            </div>}
            {type === "RecipePage" && (<div className="animate-pulse grid place-items-center lg:mt-[10%] mt-[30%]">
                <div className="w-[80%]">
                    {/* Title Shimmer */}
                    <div className="bg-gray-200 h-10 lg:h-16 w-full mb-5 rounded"></div>
                    {/* Image and Info Shimmer */}
                    <div className="grid grid-cols-12 mt-10 gap-5">
                        <div className="col-span-5">
                            <div className="bg-gray-200 h-80 rounded-lg"/>
                        </div>
                        <div className="col-span-7 grid grid-cols-12 ml-40 mt-5 gap-5">
                            {Array(6).fill("").map((_, index) => (<div key={index} className="bg-gray-200 h-14 w-full rounded-lg col-span-6"/>))}
                        </div>
                    </div>
                    {/* Summary Shimmer */}
                    <div className="bg-gray-200 h-40 mt-10 rounded-lg"/>

                    {/* Ingredients Shimmer */}
                    <div className="mt-10 grid grid-cols-12 gap-5">
                        {Array(10).fill("").map((_, index) => (<div key={index} className="bg-gray-200 h-56 w-full rounded-lg col-span-6 lg:col-span-2"/>))}
                    </div>

                    {/* Steps Shimmer */}
                    <div className="mt-16">
                        {Array(10).fill("").map((_, index) => (<div key={index} className="bg-gray-200 h-10 w-full rounded-lg mt-4"/>))}
                    </div>

                    {/* Nutritional Info Shimmer */}
                    <div className="mt-16">
                        {Array(10).fill("").map((_, index) => (<div key={index} className="bg-gray-200 h-8 w-[60%] rounded-lg mt-4"/>))}
                    </div>
                </div>
            </div> )}
        </>
    )
}

export default Shimmer
