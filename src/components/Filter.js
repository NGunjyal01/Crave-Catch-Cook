import { useState } from "react";
import { sort,mealType,intolerances,cuisines, API_KEY, sortDirection } from "../utils/constants";
import { FaChevronDown } from "react-icons/fa";
import toast from "react-hot-toast";

const Filter = ({ searchInput,setIsFilterModalVisible,setLoading,setRecipes }) => {

    const [showSortOptions,setShowSortOptions] = useState(false);
    const [sortOption,setSortOption] = useState("Select");
    const [selectedSort,setSelectedSort] = useState(sort);
    const [selectedMealType,setSelectedMealType] = useState(mealType);
    const [selectedIntolerances,setSelectedIntolerances] = useState(intolerances);
    const [selectedCuisines,setSelectedCuisines] = useState(cuisines);
    const [sortOrder,setSortOrder] = useState(sortDirection);

    const handleSelectClick = ()=>{
        setShowSortOptions(!showSortOptions);
    }

    const handleSortOptionClick = (name)=>{
        setShowSortOptions(false);
        setSortOption(name);
        const updatedSort = sort.map(option =>{
            if(option.name===name)
                return {...option,want:true};
            else return option;
        });
        setSelectedSort(updatedSort);
    }

    const handleMealTypeClick = (name)=>{
        const updatedMealType = selectedMealType.map(type =>{
            if(type.name===name){
                if(type.want)   return {...type,want:false};
                else return {...type,want:true};
            }
            else    return {...type,want:false};
        });
        setSelectedMealType(updatedMealType);
    }

    const handleIntolerancesClick = (name)=>{
        const updatedIntolerances = selectedIntolerances.map(type =>{
            if(type.name === name){
                if(type.have===true)
                    return {...type,have:false};
                else 
                    return {...type,have:true};
            }
            else return type;
        });
        setSelectedIntolerances(updatedIntolerances);
    };

    const handleCuisinesClick = (name)=>{
        const updatedCuisines = selectedCuisines.map(type =>{
            if(type.name === name){
                if(type.want)
                    return {...type,want:false};
                else
                return {...type,want:true};
            }
            else  return type;
        });
        setSelectedCuisines(updatedCuisines);
    };

    const handleFilterModalClose = ()=>{
        setIsFilterModalVisible(false);
    }

    const handleSortOrder = ()=>{
        if(sortOrder.asc){
            setSortOrder({...sortDirection,asc:false});
        }
        else{
            setSortOrder({...sortDirection,asc:true});
        }
    }

    const handleClearFilter = ()=>{
        setShowSortOptions(false);
        setSortOption("Select");
        setSelectedSort(sort);
        setSelectedMealType(mealType);
        setSelectedIntolerances(intolerances);
        setSelectedCuisines(cuisines);
        setSortOrder(sortDirection);
    }

    const handleSearch = async()=>{
        let filterInput="";
        selectedSort.map(type=>{
            if(type.want){
                filterInput+="&sort="+type.name+"%sortDirection=";
                if(sortOrder.asc){
                    filterInput+="asc";
                }
                else{
                    filterInput+="desc";
                }
            }
                
        })
        selectedMealType.map(type=>{
            if(type.want)
                filterInput+="&type="+type.name;
        })
        const intolerancesFilter = selectedIntolerances.filter(intolerance => intolerance.have===true);
        if(intolerancesFilter.length!==0)   filterInput+="&intolerances="+intolerancesFilter.map(intolerance => intolerance.name).join(",");
        const cuisinesFilter = selectedCuisines.filter(type => type.want);
        if(cuisinesFilter.length!==0)   filterInput+="&cuisine="+selectedCuisines.map(type => type.name).join(",");
        if(filterInput===""){
            return toast.error("No Changes Applied");
        }
        else{
            handleFilterModalClose();
            setLoading(true);
            toast.success("Changes Applied");
            const data = await fetch("https://api.spoonacular.com/recipes/complexSearch?apiKey="+API_KEY+"&query="+searchInput+"&number=20&addRecipeInformation=true&addRecipeNutrition=true"+filterInput);
            const json = await data.json();
            setRecipes(json.results);
            setLoading(false);
        }
    }

    return (
    <div className="absolute top-0 z-50 flex justify-center w-full h-full backdrop-blur-sm pt-10">
        <div className="w-[60%] bg-blue-50 p-5 rounded-lg">
            <div className="my-2">
                <div className="flex">
                    <h1 className="mr-4 text-xl font-bold">Sort</h1>
                    <button className="bg-white flex w-32 sm:w-60 rounded-lg" onClick={handleSelectClick}>
                        <h1 className="mx-auto my-auto text-xs sm:text-base">{sortOption}</h1> 
                        <FaChevronDown className="DropDownIcon mr-1 my-2"/>
                    </button>
                    {showSortOptions && <div className="bg-white rounded-lg w-60 max-h-60 ml-14 mt-9 flex flex-col items-center absolute overflow-y-scroll scrollbar-hide">
                    {sort.map(option => <h1 key={option.name} className="my-1 cursor-pointer" onClick={()=>{handleSortOptionClick(option.name)}}>{option.name}</h1>)}    
                    </div>}
                </div>
                <div className="flex my-4">
                    <h1 className="mr-4 text-xl font-bold">Sorting Order</h1>
                    <button onClick={handleSortOrder} className="bg-white px-5 py-1 rounded-lg">{sortOrder.asc?"Low To High":"High To Low"}</button>
                </div>
            </div>
            <div className="mt-4">
                <h1 className="text-xl font-bold">Meal Type</h1>
                <div className="grid grid-cols-12 mt-2">
                    {selectedMealType.map(type =><div key={type.name} className="col-span-2 flex space-x-2 mt-1">
                        <div className={`w-4 h-4 rounded-sm mt-[.3rem] ${type.want?'bg-blue-500':'bg-white'}`} onClick={()=>{handleMealTypeClick(type.name)}}/>
                        <h1>{type.name}</h1></div>)}
                </div>
            </div>
            <div className="mt-4">
                <h1 className="text-xl font-bold">Intolerances</h1>
                <div className="grid grid-cols-12 mt-2">
                    {selectedIntolerances.map(type => <div key={type.name} className="col-span-2 flex space-x-2 mt-1">
                    <div className={`w-4 h-4 rounded-sm mt-[.3rem] ${type.have?'bg-blue-500':'bg-white'}`} onClick={()=>{handleIntolerancesClick(type.name)}}/>
                    <h1>{type.name}</h1>
                    </div>)}
                </div>
            </div>
            <div className="mt-4">
                <h1 className="text-xl font-bold">Cuisines</h1>
                <div className="grid grid-cols-12 mt-2">
                    {selectedCuisines.map(type => <div className="col-span-3 flex space-x-2 mt-1">
                        <div className={`w-4 h-4 rounded-sm mt-[.3rem] ${type.want?'bg-blue-500':'bg-white'}`} onClick={()=>{handleCuisinesClick(type.name)}}/>
                        <h1>{type.name}</h1>
                    </div>)}
                </div>
            </div>
            <button onClick={handleFilterModalClose} className="absolute top-14 right-[21%] text-xl bg-white px-2 rounded-full">X</button>
            <button onClick={handleSearch}>Apply Changes</button>
            <button onClick={handleClearFilter}>Clear Filter</button>
        </div>
    </div>
    )
};

export default Filter;
