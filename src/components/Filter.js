import {mealType} from "../utils/constants";

const Filter = ({onClose}) => {

    return (
    <div className="absolute top-0 z-50 flex justify-center w-full h-full backdrop-blur-sm">
        <div className="w-[70%] h-96 bg-blue-50 p-5">
            <div>
                <h1>Meal Type</h1>
                <div className="flex flex-wrap space-x-4">
                    {mealType.map(type =><div key={type.name} className="flex space-x-2">
                        <div className="w-4 h-4 bg-white"></div>
                        <h1>{type.name}</h1></div>)}
                </div>
            </div>
            <button onClick={onClose}>onclose</button>
        </div>
    </div>
    )
}

export default Filter
