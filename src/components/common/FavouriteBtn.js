import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { IoHeartOutline,IoHeartSharp } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { getFirestore,doc,updateDoc,arrayUnion,getDoc, arrayRemove } from "firebase/firestore";
import { addFavRecipes } from "../../utils/favRecipesSlice";

const FavouriteBtn = ({recipe_info}) => {

  const user = useSelector(store => store.user);
  const [isFav,setIsFav] = useState(false);
  const [favRecipes,setFavRecipes] = useState(null);
  const dispatch = useDispatch();

  const db = getFirestore();
  useEffect(()=>{
    if(!user) return;
    const docRef = doc(db, "Users", user.uid);
    getDoc(docRef).then((docSnap)=>{
      if (docSnap.exists()) {
        const recipes = docSnap.data().favRecipes;
        setFavRecipes(recipes);
        dispatch(addFavRecipes(recipes));
        if(recipes?.find(obj => obj.id===recipe_info.id)){
          setIsFav(true);
        }
      }
    })
  },[user,favRecipes]);

  const handleBtnClick = async(event)=>{
    event.stopPropagation();
    if(!user){
      return toast.error("Login Required")
    }
    if(!isFav){
      if(!favRecipes?.find(obj => obj.id===recipe_info.id)){
        const docRef = doc(db, "Users", user.uid);
        await updateDoc(docRef, {
          favRecipes: arrayUnion(recipe_info)
        });
        setFavRecipes(null);
        return toast.success('Added To Your Favourites');
      }
    }
    else{
      const docRef = doc(db, "Users", user.uid);
      await updateDoc(docRef, {
        favRecipes: arrayRemove(recipe_info)
      });
      setIsFav(false);
      return toast.success('Successfully Removed From Favourites');
    }
  }

  return (
    <button className="bg-white p-2 rounded-full" onClick={handleBtnClick}>{!isFav?<IoHeartOutline className="Logos"/>:<IoHeartSharp className="Logos"/>}</button>
  )
}

export default FavouriteBtn
