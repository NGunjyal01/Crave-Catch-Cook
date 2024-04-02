import { useEffect, useState } from "react";
import { sort,mealType,intolerances,cuisines, API_KEY, sortDirection } from "../utils/constants";
import { FaChevronDown } from "react-icons/fa";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";

const Filter = ({ searchInput,setIsFilterModalVisible,setLoading,setRecipes }) => {

    const [showSortOptions,setShowSortOptions] = useState(false);
    const [sortOption,setSortOption] = useState("Select");
    const [selectedSort,setSelectedSort] = useState(sort);
    const [selectedMealType,setSelectedMealType] = useState(mealType);
    const [selectedIntolerances,setSelectedIntolerances] = useState(intolerances);
    const [selectedCuisines,setSelectedCuisines] = useState(cuisines);
    const [sortOrder,setSortOrder] = useState(sortDirection);

    const dishName = useSelector(store => store.recipes.dishName);

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
        setRecipes(dishName);
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
            setIsFilterModalVisible(false);
            setLoading(true);
            toast.success("Changes Applied");
            const data = await fetch("https://api.spoonacular.com/recipes/complexSearch?apiKey="+API_KEY+"&query="+searchInput+"&number=20&addRecipeInformation=true&addRecipeNutrition=true"+filterInput);
            const json = await data.json();
            setRecipes(json.results);
            setLoading(false);
        }
    }

    return (
    <div className="absolute top-0 z-50 flex justify-center w-full h-[100%] lg:h-full backdrop-blur-sm lg:pt-10">
        <div className="w-full lg:w-[60%] bg-[#ACE2E1] py-7 px-5 lg:p-5 rounded-lg overflow-y-scroll scrollbar-hide">
            <div className="my-2">
                <div className="grid grid-cols-12">
                    <h1 className="col-span-5 sm:col-span-3 lg:col-span-2 mr-4 lg:text-xl font-bold">Sort</h1>
                    <button className="col-span-7 sm:col-span-3 bg-[#F7EEDD] flex w-32 sm:w-60 rounded-lg" onClick={handleSelectClick}>
                        <h1 className="mx-auto my-auto text-xs sm:text-base">{sortOption}</h1> 
                        <FaChevronDown className="DropDownIcon mr-1 my-2"/>
                    </button>
                    {showSortOptions && <div className="bg-[#F7EEDD] rounded-lg w-60 max-h-60 ml-[9.2rem] mt-9 flex flex-col items-center absolute overflow-y-scroll scrollbar-hide">
                    {sort.map(option => <h1 key={option.name} className="my-1 cursor-pointer" onClick={()=>{handleSortOptionClick(option.name)}}>{option.name}</h1>)}    
                    </div>}
                </div>
                <div className="grid grid-cols-12 my-4">
                    <h1 className="col-span-5 sm:col-span-3 lg:col-span-2 lg:text-xl font-bold">Sorting Order</h1>
                    <button onClick={handleSortOrder} className="col-span-7 sm:col-span-3 lg:col-span-2 bg-[#F7EEDD] px-5 py-1 rounded-lg">{sortOrder.asc?"Low To High":"High To Low"}</button>
                </div>
            </div>
            <div className="mt-4">
                <h1 className="lg:text-xl font-bold">Meal Type</h1>
                <div className="grid grid-cols-12 mt-2">
                    {selectedMealType.map(type =><div key={type.name} className="col-span-6 sm:col-span-3 lg:col-span-2 flex space-x-2 mt-1">
                        <div className={`w-4 h-4 rounded-sm mt-[.3rem] ${type.want?'bg-[#008DDA]':'bg-[#F7EEDD]'}`} onClick={()=>{handleMealTypeClick(type.name)}}/>
                        <h1>{type.name}</h1></div>)}
                </div>
            </div>
            <div className="mt-4">
                <h1 className="text-xl font-bold">Intolerances</h1>
                <div className="grid grid-cols-12 mt-2">
                    {selectedIntolerances.map(type => <div key={type.name} className="col-span-6 sm:col-span-3 lg:col-span-2 flex space-x-2 mt-1">
                    <div className={`w-4 h-4 rounded-sm mt-[.3rem] ${type.have?'bg-[#008DDA]':'bg-[#F7EEDD]'}`} onClick={()=>{handleIntolerancesClick(type.name)}}/>
                    <h1>{type.name}</h1>
                    </div>)}
                </div>
            </div>
            <div className="mt-4">
                <h1 className="text-xl font-bold">Cuisines</h1>
                <div className="grid grid-cols-12 mt-2">
                    {selectedCuisines.map(type => <div className="col-span-6 sm:col-span-4 lg:col-span-3 flex space-x-2 mt-1">
                        <div className={`w-4 h-4 rounded-sm mt-[.3rem] ${type.want?'bg-[#008DDA]':'bg-[#F7EEDD]'}`} onClick={()=>{handleCuisinesClick(type.name)}}/>
                        <h1>{type.name}</h1>
                    </div>)}
                </div>
            </div>
            <button onClick={handleFilterModalClose} className="absolute top-6 lg:top-14 right-4 lg:right-[21%] text-xl bg-[#F7EEDD] px-2 rounded-full">X</button>
            <div className="flex lg:ml-[60%] mt-10 space-x-4">
                <button onClick={handleClearFilter} className="bg-[#F7EEDD] px-7 py-1 rounded-lg">Clear Filter</button>
                <button onClick={handleSearch} className="bg-[#F7EEDD] px-7 py-1 rounded-lg">Apply Changes</button>
            </div>
        </div>
    </div>
    )
};

export default Filter;
