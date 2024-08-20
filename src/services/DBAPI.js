import toast from 'react-hot-toast';
import { databases, ID } from '../lib/appwrite';
import { setFavRecipes } from '../utils/favRecipesSlice';
import { Query } from 'appwrite';

export async function getFavRecipes(dispatch){
    try {
        // Retrieve documents from the collection
        const response = await databases.listDocuments(
            process.env.REACT_APP_APPWRITE_DATABASE_ID,
            process.env.REACT_APP_APPWRITE_FAVOURITE_COLLECTION_ID,
        );
        console.log('GET ALL FAV RECIPES RESPONSE....................', response);
        dispatch(setFavRecipes(response.documents));
        localStorage.setItem('favRecipes',JSON.stringify(response.documents));
    } catch (error) {
        console.error('Error retrieving documents:', error);
    }
}

export async function addFavRecipe(formData,dispatch){
    try {
        // Check if the favorite recipe already exists
        const existingFavorites = await databases.listDocuments(
            process.env.REACT_APP_APPWRITE_DATABASE_ID,
            process.env.REACT_APP_APPWRITE_FAVOURITE_COLLECTION_ID,
            [
                Query.equal('recipeId', formData.get('recipeId'))
            ]
        );

        if (existingFavorites.total > 0) {
            toast.error('This recipe is already in your favorites!');
            return; // Skip creation if the recipe is already favorited
        }

        const newDoc = {
            recipeId: formData.get('recipeId'),
            recipeInfo: formData.get('recipeInfo'),  
            createdAt: formData.get('createdAt')
        };

        // If not already favorited, create a new favorite recipe document
        const response = await databases.createDocument(
            process.env.REACT_APP_APPWRITE_DATABASE_ID,
            process.env.REACT_APP_APPWRITE_FAVOURITE_COLLECTION_ID,
            ID.unique(),
            newDoc
        );
        const favRecipes = localStorage.getItem('favRecipes') ? JSON.parse(localStorage.getItem('favRecipes')) : [];
        dispatch(setFavRecipes([...favRecipes,response]));
        localStorage.setItem('favRecipes',JSON.stringify([...favRecipes,response]));
        toast.success('Recipe added to your favorites!');
        console.log('Favorite recipe saved:', response);
        
    } catch (error) {
        console.error('Error saving favorite recipe:', error);
        toast.error('Error saving favorite recipe');
    }
}

export async function removeFavRecipe(recipeId,dispatch){
    try {
        // Step 1: Query for the document(s) with the specified recipeId
        const response = await databases.listDocuments(
            process.env.REACT_APP_APPWRITE_DATABASE_ID,
            process.env.REACT_APP_APPWRITE_FAVOURITE_COLLECTION_ID,
            [
                Query.equal('recipeId', recipeId)
            ]
        );

        // Check if any documents were found
        if (response.total > 0) {
            // Step 2: Delete each document found
            for (const document of response.documents) {
                await databases.deleteDocument(
                    process.env.REACT_APP_APPWRITE_DATABASE_ID,
                    process.env.REACT_APP_APPWRITE_FAVOURITE_COLLECTION_ID,
                    document.$id  // The ID of the document to delete
                );
                console.log(`Document with ID ${document.$id} deleted successfully.`);
            }
            const favRecipes = JSON.parse(localStorage.getItem('favRecipes'));
            const updatedFavRecipes = favRecipes.filter(recipe => recipe.recipeId!==recipeId);
            console.log('after delete',updatedFavRecipes);
            dispatch(setFavRecipes(updatedFavRecipes));
            localStorage.setItem('favRecipes',JSON.stringify(updatedFavRecipes));
            toast.success('Removed from your favorites!');
        } else {
            console.log('No document found with the specified recipeId.');
        }
    } catch (error) {
        console.error('Error deleting document(s):', error);
        toast.error('Error Remove Recipe')
    }
}

