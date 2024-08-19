import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { IoHeartOutline,IoHeartSharp } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { addFavRecipe, removeFavRecipe } from "../../services/DBAPI";

const FavouriteBtn = ({recipe_info}) => {

  const user = useSelector(store => store.user.userInfo);
  const [isFav,setIsFav] = useState(false);
  const favRecipes = useSelector(store => store.favRecipes);
  const dispatch = useDispatch();

  useEffect(()=>{
    if(!user){
      setIsFav(false);
      return;
    }
    if(favRecipes && favRecipes.filter(recipe => parseInt(recipe.recipeId)===recipe_info.id).length===1){
      setIsFav(true);
    }
  },[user,favRecipes]);

  const handleBtnClick = async(event)=>{
    const formData = new FormData();
    formData.append('recipeId',recipe_info.id);
    formData.append('recipeInfo',JSON.stringify(recipe_info));
    formData.append('createdAt',new Date().toISOString());
    event.stopPropagation();
    if(!user){
      return toast.error("Login Required")
    }
    if(!isFav){
      addFavRecipe(formData,dispatch).then(()=>setIsFav(true));  
    }
    else{
      removeFavRecipe(JSON.stringify(recipe_info.id),dispatch).then(()=>{
        setIsFav(false);
      });
    }
  }

  return (
    <button className="bg-white p-2 rounded-full" onClick={handleBtnClick}>
      {!isFav?<IoHeartOutline className="Logos"/>:<IoHeartSharp className="Logos"/>}
    </button>
  )
}

export default FavouriteBtn
