
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { API_KEY } from "../utils/constants";

const DishName = () => {
    const [searchInput,setSearchInput] = useState(null); 

    const handleSearchInput = (value)=>{
        setSearchInput(value);
    }
    const getRecipesByName = async()=>{
        const data = await fetch("https://api.spoonacular.com/recipes/complexSearch?apiKey="+API_KEY+"&query="+searchInput+"&number=20");
        const json = await data.json();
        console.log(json);
    }

    const handleSearch = ()=>{
        getRecipesByName();
    }

    return (
        <div className="flex justify-center mt-[5%]" onKeyDown={(e)=>{if(e.key==="Enter")handleSearch()}}>
            <input type="text" placeholder="Search Recipes By Dish Name" 
            className="p-4 rounded-full w-[80%] border-black border-2"
            onChange={(e)=>{handleSearchInput(e.target.value)}} value={searchInput}/>
            <FaSearch onClick={handleSearch}/>
        </div>
    )
}

export default DishName

// {
//     "results": [
//         {
//             "vegetarian": false,
//             "vegan": false,
//             "glutenFree": true,
//             "dairyFree": false,
//             "veryHealthy": false,
//             "cheap": false,
//             "veryPopular": false,
//             "sustainable": false,
//             "lowFodmap": false,
//             "weightWatcherSmartPoints": 2,
//             "gaps": "no",
//             "preparationMinutes": -1,
//             "cookingMinutes": -1,
//             "aggregateLikes": 6,
//             "healthScore": 6,
//             "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
//             "license": "CC BY 3.0",
//             "sourceName": "Foodista",
//             "pricePerServing": 115.13,
//             "id": 637876,
//             "title": "Chicken 65",
//             "readyInMinutes": 45,
//             "servings": 6,
//             "sourceUrl": "http://www.foodista.com/recipe/G4XPLKBW/chicken-65-chicken-marinaded-in-traditional-indian-spices-and-deep-fried",
//             "image": "https://spoonacular.com/recipeImages/637876-312x231.jpg",
//             "imageType": "jpg",
//             "summary": "Chicken 65 could be just the <b>gluten free</b> recipe you've been looking for. This hor d'oeuvre has <b>121 calories</b>, <b>19g of protein</b>, and <b>3g of fat</b> per serving. For <b>$1.15 per serving</b>, this recipe <b>covers 11%</b> of your daily requirements of vitamins and minerals. This recipe serves 6. Head to the store and pick up salt, chili powder, yogurt, and a few other things to make it today. 6 people have made this recipe and would make it again. It is brought to you by Foodista. From preparation to the plate, this recipe takes approximately <b>45 minutes</b>. Overall, this recipe earns a <b>not so spectacular spoonacular score of 39%</b>. Similar recipes are <a href=\"https://spoonacular.com/recipes/i-aint-chicken-chicken-crispy-roasted-chicken-breasts-with-orange-and-cardamom-1243251\">I Ain't Chicken Chicken: Crispy Roasted Chicken Breasts with Orange and Cardamom</a>, <a href=\"https://spoonacular.com/recipes/i-aint-chicken-chicken-crispy-roasted-chicken-breasts-with-orange-and-cardamom-1230059\">I Ain't Chicken Chicken: Crispy Roasted Chicken Breasts with Orange and Cardamom</a>, and <a href=\"https://spoonacular.com/recipes/i-aint-chicken-chicken-crispy-roasted-chicken-breasts-with-orange-and-cardamom-1224321\">I Ain't Chicken Chicken: Crispy Roasted Chicken Breasts with Orange and Cardamom</a>.",
//             "cuisines": [],
//             "dishTypes": [
//                 "antipasti",
//                 "starter",
//                 "snack",
//                 "appetizer",
//                 "antipasto",
//                 "hor d'oeuvre"
//             ],
//             "diets": [
//                 "gluten free"
//             ],
//             "occasions": [],
//             "analyzedInstructions": [
//                 {
//                     "name": "",
//                     "steps": [
//                         {
//                             "number": 1,
//                             "step": "Take a large bowl mix in the ginger and garlic paste, yogurt, red chilly powder, turmeric powder, and salt.",
//                             "ingredients": [
//                                 {
//                                     "id": 2043,
//                                     "name": "turmeric",
//                                     "localizedName": "turmeric",
//                                     "image": "turmeric.jpg"
//                                 },
//                                 {
//                                     "id": 2009,
//                                     "name": "chili powder",
//                                     "localizedName": "chili powder",
//                                     "image": "chili-powder.jpg"
//                                 },
//                                 {
//                                     "id": 10111215,
//                                     "name": "garlic paste",
//                                     "localizedName": "garlic paste",
//                                     "image": "garlic-paste.png"
//                                 },
//                                 {
//                                     "id": 11216,
//                                     "name": "ginger",
//                                     "localizedName": "ginger",
//                                     "image": "ginger.png"
//                                 },
//                                 {
//                                     "id": 1116,
//                                     "name": "yogurt",
//                                     "localizedName": "yogurt",
//                                     "image": "plain-yogurt.jpg"
//                                 },
//                                 {
//                                     "id": 2047,
//                                     "name": "salt",
//                                     "localizedName": "salt",
//                                     "image": "salt.jpg"
//                                 }
//                             ],
//                             "equipment": [
//                                 {
//                                     "id": 404783,
//                                     "name": "bowl",
//                                     "localizedName": "bowl",
//                                     "image": "bowl.jpg"
//                                 }
//                             ]
//                         },
//                         {
//                             "number": 2,
//                             "step": "Mix well to from smooth and thick paste, add the chicken pieces to the masala paste and  marinaded for 4 hours.",
//                             "ingredients": [
//                                 {
//                                     "id": 1005006,
//                                     "name": "chicken pieces",
//                                     "localizedName": "chicken pieces",
//                                     "image": "chicken-parts.jpg"
//                                 }
//                             ],
//                             "equipment": [],
//                             "length": {
//                                 "number": 240,
//                                 "unit": "minutes"
//                             }
//                         },
//                         {
//                             "number": 3,
//                             "step": "Heat enough oil in a pan to deep fry the marinaded chicken pieces. Deep fry the chicken pieces in batches till crisp and golden color.Note: The taste of the Chicken 65 depends mainly on the amount of time it gets marinated in the masala, it is best to marinate the chicken pieces the day before.",
//                             "ingredients": [
//                                 {
//                                     "id": 1005006,
//                                     "name": "chicken pieces",
//                                     "localizedName": "chicken pieces",
//                                     "image": "chicken-parts.jpg"
//                                 },
//                                 {
//                                     "id": 0,
//                                     "name": "chicken",
//                                     "localizedName": "chicken",
//                                     "image": "whole-chicken.jpg"
//                                 },
//                                 {
//                                     "id": 4582,
//                                     "name": "cooking oil",
//                                     "localizedName": "cooking oil",
//                                     "image": "vegetable-oil.jpg"
//                                 }
//                             ],
//                             "equipment": [
//                                 {
//                                     "id": 404645,
//                                     "name": "frying pan",
//                                     "localizedName": "frying pan",
//                                     "image": "pan.png"
//                                 }
//                             ]
//                         }
//                     ]
//                 }
//             ],
//             "spoonacularScore": 48.6579704284668,
//             "spoonacularSourceUrl": "https://spoonacular.com/chicken-65-637876",
//             "nutrition": {
//                 "nutrients": [
//                     {
//                         "name": "Protein",
//                         "amount": 18.9187,
//                         "unit": "g"
//                     }
//                 ]
//             }
//         },
//         {
//             "vegetarian": false,
//             "vegan": false,
//             "glutenFree": true,
//             "dairyFree": true,
//             "veryHealthy": false,
//             "cheap": false,
//             "veryPopular": false,
//             "sustainable": false,
//             "lowFodmap": false,
//             "weightWatcherSmartPoints": 15,
//             "gaps": "no",
//             "preparationMinutes": -1,
//             "cookingMinutes": -1,
//             "aggregateLikes": 56,
//             "healthScore": 39,
//             "creditsText": "afrolems.com",
//             "sourceName": "afrolems.com",
//             "pricePerServing": 167.49,
//             "id": 716342,
//             "title": "Chicken Suya",
//             "readyInMinutes": 45,
//             "servings": 1,
//             "sourceUrl": "http://www.afrolems.com/2014/05/27/chicken-suya/",
//             "image": "https://spoonacular.com/recipeImages/716342-312x231.jpg",
//             "imageType": "jpg",
//             "summary": "The recipe Chicken Suya can be made <b>in roughly 45 minutes</b>. This recipe serves 1 and costs $1.67 per serving. One serving contains <b>564 calories</b>, <b>44g of protein</b>, and <b>35g of fat</b>. This recipe from Afrolems requires suya spice, chicken, chilli powder, and seasoning cubes. It works well as a main course. 56 people have made this recipe and would make it again. It is a good option if you're following a <b>gluten free, dairy free, whole 30, and ketogenic</b> diet. Overall, this recipe earns a <b>solid spoonacular score of 79%</b>. If you like this recipe, you might also like recipes such as <a href=\"https://spoonacular.com/recipes/suya-nigerian-chicken-skewers-113497\">Suya (Nigerian Chicken Skewers)</a>, <a href=\"https://spoonacular.com/recipes/suya-swordfish-6571\">Suya Swordfish</a>, and <a href=\"https://spoonacular.com/recipes/i-aint-chicken-chicken-crispy-roasted-chicken-breasts-with-orange-and-cardamom-1224321\">I Ain't Chicken Chicken: Crispy Roasted Chicken Breasts with Orange and Cardamom</a>.",
//             "cuisines": [],
//             "dishTypes": [
//                 "lunch",
//                 "main course",
//                 "main dish",
//                 "dinner"
//             ],
//             "diets": [
//                 "gluten free",
//                 "dairy free",
//                 "whole 30",
//                 "ketogenic"
//             ],
//             "occasions": [],
//             "analyzedInstructions": [
//                 {
//                     "name": "",
//                     "steps": [
//                         {
//                             "number": 1,
//                             "step": "Heat the oven to 500 F.Wash and season the chicken with the Suya spice, chilli powder, seasoning cubes, salt and drizzle the oil over it.",
//                             "ingredients": [
//                                 {
//                                     "id": 0,
//                                     "name": "seasoning cube",
//                                     "localizedName": "seasoning cube",
//                                     "image": "stock-cube.jpg"
//                                 },
//                                 {
//                                     "id": 2009,
//                                     "name": "chili powder",
//                                     "localizedName": "chili powder",
//                                     "image": "chili-powder.jpg"
//                                 },
//                                 {
//                                     "id": 0,
//                                     "name": "chicken",
//                                     "localizedName": "chicken",
//                                     "image": "whole-chicken.jpg"
//                                 },
//                                 {
//                                     "id": 2047,
//                                     "name": "salt",
//                                     "localizedName": "salt",
//                                     "image": "salt.jpg"
//                                 },
//                                 {
//                                     "id": 4582,
//                                     "name": "cooking oil",
//                                     "localizedName": "cooking oil",
//                                     "image": "vegetable-oil.jpg"
//                                 }
//                             ],
//                             "equipment": [
//                                 {
//                                     "id": 404784,
//                                     "name": "oven",
//                                     "localizedName": "oven",
//                                     "image": "oven.jpg",
//                                     "temperature": {
//                                         "number": 500.0,
//                                         "unit": "Fahrenheit"
//                                     }
//                                 }
//                             ]
//                         },
//                         {
//                             "number": 2,
//                             "step": "Place the chicken in the oven and grill for 40 minutes. Check the chicken occasionally and flip on both sides so it can cook properly.",
//                             "ingredients": [
//                                 {
//                                     "id": 0,
//                                     "name": "chicken",
//                                     "localizedName": "chicken",
//                                     "image": "whole-chicken.jpg"
//                                 }
//                             ],
//                             "equipment": [
//                                 {
//                                     "id": 404706,
//                                     "name": "grill",
//                                     "localizedName": "grill",
//                                     "image": "grill.jpg"
//                                 },
//                                 {
//                                     "id": 404784,
//                                     "name": "oven",
//                                     "localizedName": "oven",
//                                     "image": "oven.jpg"
//                                 }
//                             ],
//                             "length": {
//                                 "number": 40,
//                                 "unit": "minutes"
//                             }
//                         },
//                         {
//                             "number": 3,
//                             "step": "Serve hot garnished with the onions and tomato and a bit of suya spice sprinkled over the chicken.",
//                             "ingredients": [
//                                 {
//                                     "id": 0,
//                                     "name": "chicken",
//                                     "localizedName": "chicken",
//                                     "image": "whole-chicken.jpg"
//                                 },
//                                 {
//                                     "id": 11282,
//                                     "name": "onion",
//                                     "localizedName": "onion",
//                                     "image": "brown-onion.png"
//                                 },
//                                 {
//                                     "id": 11529,
//                                     "name": "tomato",
//                                     "localizedName": "tomato",
//                                     "image": "tomato.png"
//                                 }
//                             ],
//                             "equipment": []
//                         }
//                     ]
//                 }
//             ],
//             "spoonacularScore": 93.86582946777344,
//             "spoonacularSourceUrl": "https://spoonacular.com/chicken-suya-716342",
//             "nutrition": {
//                 "nutrients": [
//                     {
//                         "name": "Protein",
//                         "amount": 43.5456,
//                         "unit": "g"
//                     }
//                 ]
//             }
//         },
//         {
//             "vegetarian": false,
//             "vegan": false,
//             "glutenFree": false,
//             "dairyFree": true,
//             "veryHealthy": false,
//             "cheap": false,
//             "veryPopular": false,
//             "sustainable": false,
//             "lowFodmap": false,
//             "weightWatcherSmartPoints": 31,
//             "gaps": "no",
//             "preparationMinutes": -1,
//             "cookingMinutes": -1,
//             "aggregateLikes": 1,
//             "healthScore": 13,
//             "creditsText": "foodista.com",
//             "sourceName": "foodista.com",
//             "pricePerServing": 241.64,
//             "id": 638308,
//             "title": "Chicken Satay",
//             "readyInMinutes": 45,
//             "servings": 4,
//             "sourceUrl": "http://www.foodista.com/recipe/3SCSTC5Y/chicken-satay-by-bing",
//             "image": "https://spoonacular.com/recipeImages/638308-312x231.jpg",
//             "imageType": "jpg",
//             "summary": "Chicken Satay could be just the <b>dairy free</b> recipe you've been looking for. One serving contains <b>834 calories</b>, <b>31g of protein</b>, and <b>73g of fat</b>. This recipe serves 4 and costs $2.42 per serving. This recipe from Foodista has 1 fans. If you have turmeric powder, ground coriander, ready made satay sauce, and a few other ingredients on hand, you can make it. It works well as a rather inexpensive main course. From preparation to the plate, this recipe takes roughly <b>45 minutes</b>. With a spoonacular <b>score of 53%</b>, this dish is good. Similar recipes are <a href=\"https://spoonacular.com/recipes/chicken-satay-534568\">Chicken Satay</a>, <a href=\"https://spoonacular.com/recipes/chicken-satay-620047\">Chicken satay</a>, and <a href=\"https://spoonacular.com/recipes/chicken-satay-113570\">Chicken Satay</a>.",
//             "cuisines": [],
//             "dishTypes": [
//                 "lunch",
//                 "main course",
//                 "main dish",
//                 "dinner"
//             ],
//             "diets": [
//                 "dairy free"
//             ],
//             "occasions": [],
//             "analyzedInstructions": [
//                 {
//                     "name": "",
//                     "steps": [
//                         {
//                             "number": 1,
//                             "step": "Soak 20 bamboo skewers for at least 2 hours in a glass of water. This is to prevent the sticks from burning and breaking when placed under the grill or over the coals.",
//                             "ingredients": [
//                                 {
//                                     "id": 14412,
//                                     "name": "water",
//                                     "localizedName": "water",
//                                     "image": "water.png"
//                                 }
//                             ],
//                             "equipment": [
//                                 {
//                                     "id": 3065,
//                                     "name": "skewers",
//                                     "localizedName": "skewers",
//                                     "image": "wooden-skewers.jpg"
//                                 },
//                                 {
//                                     "id": 404706,
//                                     "name": "grill",
//                                     "localizedName": "grill",
//                                     "image": "grill.jpg"
//                                 }
//                             ],
//                             "length": {
//                                 "number": 120,
//                                 "unit": "minutes"
//                             }
//                         },
//                         {
//                             "number": 2,
//                             "step": "Add the ground coriander, ground cumin, turmeric powder, chilli powder, salt, saugar, coconut cream and vegetable oil in a large bowl.",
//                             "ingredients": [
//                                 {
//                                     "id": 1002013,
//                                     "name": "ground coriander",
//                                     "localizedName": "ground coriander",
//                                     "image": "ground-coriander.jpg"
//                                 },
//                                 {
//                                     "id": 2043,
//                                     "name": "turmeric",
//                                     "localizedName": "turmeric",
//                                     "image": "turmeric.jpg"
//                                 },
//                                 {
//                                     "id": 2009,
//                                     "name": "chili powder",
//                                     "localizedName": "chili powder",
//                                     "image": "chili-powder.jpg"
//                                 },
//                                 {
//                                     "id": 12115,
//                                     "name": "coconut cream",
//                                     "localizedName": "coconut cream",
//                                     "image": "coconut-cream.jpg"
//                                 },
//                                 {
//                                     "id": 4669,
//                                     "name": "vegetable oil",
//                                     "localizedName": "vegetable oil",
//                                     "image": "vegetable-oil.jpg"
//                                 },
//                                 {
//                                     "id": 1012014,
//                                     "name": "ground cumin",
//                                     "localizedName": "ground cumin",
//                                     "image": "ground-cumin.jpg"
//                                 },
//                                 {
//                                     "id": 2047,
//                                     "name": "salt",
//                                     "localizedName": "salt",
//                                     "image": "salt.jpg"
//                                 }
//                             ],
//                             "equipment": [
//                                 {
//                                     "id": 404783,
//                                     "name": "bowl",
//                                     "localizedName": "bowl",
//                                     "image": "bowl.jpg"
//                                 }
//                             ]
//                         },
//                         {
//                             "number": 3,
//                             "step": "Mix well.",
//                             "ingredients": [],
//                             "equipment": []
//                         },
//                         {
//                             "number": 4,
//                             "step": "Cut the chicken into long thin strips.Marinate the chicken in the sauce. Ensure the chicken are well coated.Tightly seal the bowl with cling wrap and place in the fridge. Leave to marinade for at least 4 hours. The longer, the better.In the meantime, prepare the sauce.Look for a reputable brand of satay sauce. I always use Lee Kum Kee.",
//                             "ingredients": [
//                                 {
//                                     "id": 0,
//                                     "name": "marinade",
//                                     "localizedName": "marinade",
//                                     "image": "seasoning.png"
//                                 },
//                                 {
//                                     "id": 0,
//                                     "name": "chicken",
//                                     "localizedName": "chicken",
//                                     "image": "whole-chicken.jpg"
//                                 },
//                                 {
//                                     "id": 0,
//                                     "name": "sauce",
//                                     "localizedName": "sauce",
//                                     "image": ""
//                                 },
//                                 {
//                                     "id": 10018364,
//                                     "name": "wrap",
//                                     "localizedName": "wrap",
//                                     "image": "flour-tortilla.jpg"
//                                 }
//                             ],
//                             "equipment": [
//                                 {
//                                     "id": 404783,
//                                     "name": "bowl",
//                                     "localizedName": "bowl",
//                                     "image": "bowl.jpg"
//                                 }
//                             ],
//                             "length": {
//                                 "number": 240,
//                                 "unit": "minutes"
//                             }
//                         },
//                         {
//                             "number": 5,
//                             "step": "Add about 6 tablespoons of the satay sauce into a bowl.The rest of these steps are to be done, subject to taste. I like to taste as I add the other condiments.",
//                             "ingredients": [
//                                 {
//                                     "id": 0,
//                                     "name": "sauce",
//                                     "localizedName": "sauce",
//                                     "image": ""
//                                 }
//                             ],
//                             "equipment": [
//                                 {
//                                     "id": 404783,
//                                     "name": "bowl",
//                                     "localizedName": "bowl",
//                                     "image": "bowl.jpg"
//                                 }
//                             ]
//                         },
//                         {
//                             "number": 6,
//                             "step": "Add the crunchy peanut butter, coconut cream and water. If the sauce is too thick, thin it down with a little more water.",
//                             "ingredients": [
//                                 {
//                                     "id": 16097,
//                                     "name": "crunchy peanut butter",
//                                     "localizedName": "crunchy peanut butter",
//                                     "image": "peanut-butter.png"
//                                 },
//                                 {
//                                     "id": 12115,
//                                     "name": "coconut cream",
//                                     "localizedName": "coconut cream",
//                                     "image": "coconut-cream.jpg"
//                                 },
//                                 {
//                                     "id": 0,
//                                     "name": "sauce",
//                                     "localizedName": "sauce",
//                                     "image": ""
//                                 },
//                                 {
//                                     "id": 14412,
//                                     "name": "water",
//                                     "localizedName": "water",
//                                     "image": "water.png"
//                                 }
//                             ],
//                             "equipment": []
//                         },
//                         {
//                             "number": 7,
//                             "step": "Add the dark soy sauce, sugar and ground peanuts",
//                             "ingredients": [
//                                 {
//                                     "id": 0,
//                                     "name": "dark soy sauce",
//                                     "localizedName": "dark soy sauce",
//                                     "image": "soy-sauce.jpg"
//                                 },
//                                 {
//                                     "id": 16091,
//                                     "name": "peanuts",
//                                     "localizedName": "peanuts",
//                                     "image": "peanuts.png"
//                                 },
//                                 {
//                                     "id": 19335,
//                                     "name": "sugar",
//                                     "localizedName": "sugar",
//                                     "image": "sugar-in-bowl.png"
//                                 }
//                             ],
//                             "equipment": []
//                         },
//                         {
//                             "number": 8,
//                             "step": "Seal the bowl with cling wrap and set aside until ready to serve. Before serving, warm the satay sauce in the microwave oven, covered slightly, for approximately 1.5 to 2mins.When you are ready to grill the chicken, start forming satays by piercing the chicken through the bamboo skewers. I find it alot easier to pierce the meat into the sticks when they are long strips and I pierce through in an undulating manner.  Set aside until ready to use.Preheat your oven to 200 deg Celsius at GRILL.",
//                             "ingredients": [
//                                 {
//                                     "id": 0,
//                                     "name": "chicken",
//                                     "localizedName": "chicken",
//                                     "image": "whole-chicken.jpg"
//                                 },
//                                 {
//                                     "id": 0,
//                                     "name": "sauce",
//                                     "localizedName": "sauce",
//                                     "image": ""
//                                 },
//                                 {
//                                     "id": 1065062,
//                                     "name": "meat",
//                                     "localizedName": "meat",
//                                     "image": "whole-chicken.jpg"
//                                 },
//                                 {
//                                     "id": 10018364,
//                                     "name": "wrap",
//                                     "localizedName": "wrap",
//                                     "image": "flour-tortilla.jpg"
//                                 }
//                             ],
//                             "equipment": [
//                                 {
//                                     "id": 404762,
//                                     "name": "microwave",
//                                     "localizedName": "microwave",
//                                     "image": "microwave.jpg"
//                                 },
//                                 {
//                                     "id": 3065,
//                                     "name": "skewers",
//                                     "localizedName": "skewers",
//                                     "image": "wooden-skewers.jpg"
//                                 },
//                                 {
//                                     "id": 404706,
//                                     "name": "grill",
//                                     "localizedName": "grill",
//                                     "image": "grill.jpg"
//                                 },
//                                 {
//                                     "id": 404783,
//                                     "name": "bowl",
//                                     "localizedName": "bowl",
//                                     "image": "bowl.jpg"
//                                 },
//                                 {
//                                     "id": 404784,
//                                     "name": "oven",
//                                     "localizedName": "oven",
//                                     "image": "oven.jpg"
//                                 }
//                             ],
//                             "length": {
//                                 "number": 2,
//                                 "unit": "minutes"
//                             }
//                         },
//                         {
//                             "number": 9,
//                             "step": "Place your oven shelf higher and closer to the top too.",
//                             "ingredients": [],
//                             "equipment": [
//                                 {
//                                     "id": 404784,
//                                     "name": "oven",
//                                     "localizedName": "oven",
//                                     "image": "oven.jpg"
//                                 }
//                             ]
//                         },
//                         {
//                             "number": 10,
//                             "step": "Lay the satay sticks on a cooling mesh sitting over a flat baking sheet to collect drippings.",
//                             "ingredients": [],
//                             "equipment": [
//                                 {
//                                     "id": 404727,
//                                     "name": "baking sheet",
//                                     "localizedName": "baking sheet",
//                                     "image": "baking-sheet.jpg"
//                                 }
//                             ]
//                         },
//                         {
//                             "number": 11,
//                             "step": "Place the tray of satay under the grill. And grill for 10 to 20 mins. It really depends on how thick your chicken sticks are.",
//                             "ingredients": [
//                                 {
//                                     "id": 0,
//                                     "name": "chicken",
//                                     "localizedName": "chicken",
//                                     "image": "whole-chicken.jpg"
//                                 }
//                             ],
//                             "equipment": [
//                                 {
//                                     "id": 404706,
//                                     "name": "grill",
//                                     "localizedName": "grill",
//                                     "image": "grill.jpg"
//                                 }
//                             ],
//                             "length": {
//                                 "number": 10,
//                                 "unit": "minutes"
//                             }
//                         },
//                         {
//                             "number": 12,
//                             "step": "Remove the tray from the oven when one side of the satay is a golden brown (not dark brown!). Turn over the satay to the other side. And continue to grill till it has a nice dark golden brown. I like it a little burnt.",
//                             "ingredients": [],
//                             "equipment": [
//                                 {
//                                     "id": 404706,
//                                     "name": "grill",
//                                     "localizedName": "grill",
//                                     "image": "grill.jpg"
//                                 },
//                                 {
//                                     "id": 404784,
//                                     "name": "oven",
//                                     "localizedName": "oven",
//                                     "image": "oven.jpg"
//                                 }
//                             ]
//                         },
//                         {
//                             "number": 13,
//                             "step": "Serve warm with satay sauce and sliced cucumber.",
//                             "ingredients": [
//                                 {
//                                     "id": 11206,
//                                     "name": "cucumber",
//                                     "localizedName": "cucumber",
//                                     "image": "cucumber.jpg"
//                                 },
//                                 {
//                                     "id": 0,
//                                     "name": "sauce",
//                                     "localizedName": "sauce",
//                                     "image": ""
//                                 }
//                             ],
//                             "equipment": []
//                         }
//                     ]
//                 }
//             ],
//             "spoonacularScore": 56.816898345947266,
//             "spoonacularSourceUrl": "https://spoonacular.com/chicken-satay-638308",
//             "nutrition": {
//                 "nutrients": [
//                     {
//                         "name": "Protein",
//                         "amount": 30.8055,
//                         "unit": "g"
//                     }
//                 ]
//             }
//         },
//         {
//             "vegetarian": false,
//             "vegan": false,
//             "glutenFree": false,
//             "dairyFree": false,
//             "veryHealthy": false,
//             "cheap": false,
//             "veryPopular": false,
//             "sustainable": false,
//             "lowFodmap": false,
//             "weightWatcherSmartPoints": 6,
//             "gaps": "no",
//             "preparationMinutes": -1,
//             "cookingMinutes": -1,
//             "aggregateLikes": 1,
//             "healthScore": 37,
//             "creditsText": "foodista.com",
//             "sourceName": "foodista.com",
//             "pricePerServing": 230.34,
//             "id": 638086,
//             "title": "Chicken Fingers",
//             "readyInMinutes": 30,
//             "servings": 2,
//             "sourceUrl": "http://www.foodista.com/recipe/6GVTWWJ6/chicken-fingers",
//             "image": "https://spoonacular.com/recipeImages/638086-312x231.jpg",
//             "imageType": "jpg",
//             "summary": "Chicken Fingers might be just the main course you are searching for. One serving contains <b>347 calories</b>, <b>52g of protein</b>, and <b>6g of fat</b>. This recipe serves 2. For <b>$2.3 per serving</b>, this recipe <b>covers 30%</b> of your daily requirements of vitamins and minerals. From preparation to the plate, this recipe takes approximately <b>30 minutes</b>. Only a few people made this recipe, and 1 would say it hit the spot. A mixture of cayenne pepper, water, cornflakes, and a handful of other ingredients are all it takes to make this recipe so scrumptious. It is brought to you by Foodista. With a spoonacular <b>score of 77%</b>, this dish is solid. If you like this recipe, take a look at these similar recipes: <a href=\"https://spoonacular.com/recipes/chicken-fingers-1214231\">Chicken Fingers</a>, <a href=\"https://spoonacular.com/recipes/chicken-fingers-12426\">Chicken Fingers</a>, and <a href=\"https://spoonacular.com/recipes/chicken-fingers-404237\">Chicken Fingers</a>.",
//             "cuisines": [],
//             "dishTypes": [
//                 "lunch",
//                 "main course",
//                 "main dish",
//                 "dinner"
//             ],
//             "diets": [],
//             "occasions": [],
//             "analyzedInstructions": [
//                 {
//                     "name": "",
//                     "steps": [
//                         {
//                             "number": 1,
//                             "step": "Preheat oven to 400 degrees",
//                             "ingredients": [],
//                             "equipment": [
//                                 {
//                                     "id": 404784,
//                                     "name": "oven",
//                                     "localizedName": "oven",
//                                     "image": "oven.jpg"
//                                 }
//                             ]
//                         },
//                         {
//                             "number": 2,
//                             "step": "Line a baking sheet with parchment paper or line the bottom with foil and place a cookie rack on top and spray with cooking spray, set aside",
//                             "ingredients": [
//                                 {
//                                     "id": 4679,
//                                     "name": "cooking spray",
//                                     "localizedName": "cooking spray",
//                                     "image": "cooking-spray.png"
//                                 },
//                                 {
//                                     "id": 10118192,
//                                     "name": "cookies",
//                                     "localizedName": "cookies",
//                                     "image": "shortbread-cookies.jpg"
//                                 }
//                             ],
//                             "equipment": [
//                                 {
//                                     "id": 404770,
//                                     "name": "baking paper",
//                                     "localizedName": "baking paper",
//                                     "image": "baking-paper.jpg"
//                                 },
//                                 {
//                                     "id": 404727,
//                                     "name": "baking sheet",
//                                     "localizedName": "baking sheet",
//                                     "image": "baking-sheet.jpg"
//                                 },
//                                 {
//                                     "id": 404765,
//                                     "name": "aluminum foil",
//                                     "localizedName": "aluminum foil",
//                                     "image": "aluminum-foil.png"
//                                 }
//                             ]
//                         },
//                         {
//                             "number": 3,
//                             "step": "In a shallow bowl add egg whites and water",
//                             "ingredients": [
//                                 {
//                                     "id": 1124,
//                                     "name": "egg whites",
//                                     "localizedName": "egg whites",
//                                     "image": "egg-white.jpg"
//                                 },
//                                 {
//                                     "id": 14412,
//                                     "name": "water",
//                                     "localizedName": "water",
//                                     "image": "water.png"
//                                 }
//                             ],
//                             "equipment": [
//                                 {
//                                     "id": 404783,
//                                     "name": "bowl",
//                                     "localizedName": "bowl",
//                                     "image": "bowl.jpg"
//                                 }
//                             ]
//                         },
//                         {
//                             "number": 4,
//                             "step": "In another shallow bowl add cornflakes, cheese, and seasonings, stir until combined",
//                             "ingredients": [
//                                 {
//                                     "id": 8020,
//                                     "name": "corn flakes",
//                                     "localizedName": "corn flakes",
//                                     "image": "cornflakes.jpg"
//                                 },
//                                 {
//                                     "id": 1042027,
//                                     "name": "seasoning",
//                                     "localizedName": "seasoning",
//                                     "image": "seasoning.png"
//                                 },
//                                 {
//                                     "id": 1041009,
//                                     "name": "cheese",
//                                     "localizedName": "cheese",
//                                     "image": "cheddar-cheese.png"
//                                 }
//                             ],
//                             "equipment": [
//                                 {
//                                     "id": 404783,
//                                     "name": "bowl",
//                                     "localizedName": "bowl",
//                                     "image": "bowl.jpg"
//                                 }
//                             ]
//                         },
//                         {
//                             "number": 5,
//                             "step": "Cut chicken breasts horizontally and then cut into strips.Dredge the chicken in egg whites, then dip into cornflake mixture.",
//                             "ingredients": [
//                                 {
//                                     "id": 5062,
//                                     "name": "chicken breast",
//                                     "localizedName": "chicken breast",
//                                     "image": "chicken-breasts.png"
//                                 },
//                                 {
//                                     "id": 1124,
//                                     "name": "egg whites",
//                                     "localizedName": "egg whites",
//                                     "image": "egg-white.jpg"
//                                 },
//                                 {
//                                     "id": 0,
//                                     "name": "chicken",
//                                     "localizedName": "chicken",
//                                     "image": "whole-chicken.jpg"
//                                 },
//                                 {
//                                     "id": 0,
//                                     "name": "dip",
//                                     "localizedName": "dip",
//                                     "image": ""
//                                 }
//                             ],
//                             "equipment": []
//                         },
//                         {
//                             "number": 6,
//                             "step": "Place on baking sheet. Do the same for all the chicken.",
//                             "ingredients": [
//                                 {
//                                     "id": 0,
//                                     "name": "chicken",
//                                     "localizedName": "chicken",
//                                     "image": "whole-chicken.jpg"
//                                 }
//                             ],
//                             "equipment": [
//                                 {
//                                     "id": 404727,
//                                     "name": "baking sheet",
//                                     "localizedName": "baking sheet",
//                                     "image": "baking-sheet.jpg"
//                                 }
//                             ]
//                         },
//                         {
//                             "number": 7,
//                             "step": "Bake for 18 minutes or until chicken is done.",
//                             "ingredients": [
//                                 {
//                                     "id": 0,
//                                     "name": "chicken",
//                                     "localizedName": "chicken",
//                                     "image": "whole-chicken.jpg"
//                                 }
//                             ],
//                             "equipment": [
//                                 {
//                                     "id": 404784,
//                                     "name": "oven",
//                                     "localizedName": "oven",
//                                     "image": "oven.jpg"
//                                 }
//                             ],
//                             "length": {
//                                 "number": 18,
//                                 "unit": "minutes"
//                             }
//                         }
//                     ]
//                 }
//             ],
//             "spoonacularScore": 79.38980102539062,
//             "spoonacularSourceUrl": "https://spoonacular.com/chicken-fingers-638086",
//             "nutrition": {
//                 "nutrients": [
//                     {
//                         "name": "Protein",
//                         "amount": 51.7802,
//                         "unit": "g"
//                     }
//                 ]
//             }
//         },
//         {
//             "vegetarian": false,
//             "vegan": false,
//             "glutenFree": false,
//             "dairyFree": true,
//             "veryHealthy": false,
//             "cheap": false,
//             "veryPopular": false,
//             "sustainable": false,
//             "lowFodmap": false,
//             "weightWatcherSmartPoints": 9,
//             "gaps": "no",
//             "preparationMinutes": -1,
//             "cookingMinutes": -1,
//             "aggregateLikes": 2,
//             "healthScore": 47,
//             "creditsText": "foodista.com",
//             "sourceName": "foodista.com",
//             "pricePerServing": 177.0,
//             "id": 638174,
//             "title": "Chicken Lo Mein",
//             "readyInMinutes": 45,
//             "servings": 2,
//             "sourceUrl": "http://www.foodista.com/recipe/R6TCPBBF/chicken-lo-mein",
//             "image": "https://spoonacular.com/recipeImages/638174-312x231.jpg",
//             "imageType": "jpg",
//             "summary": "Chicken Lo Mein is a <b>dairy free</b> recipe with 2 servings. One portion of this dish contains approximately <b>29g of protein</b>, <b>8g of fat</b>, and a total of <b>401 calories</b>. For <b>$1.77 per serving</b>, this recipe <b>covers 30%</b> of your daily requirements of vitamins and minerals. From preparation to the plate, this recipe takes around <b>45 minutes</b>. 2 people have made this recipe and would make it again. It is brought to you by Foodista. If you have chicken breast, ginger, chicken broth, and a few other ingredients on hand, you can make it. Not a lot of people really liked this main course. Overall, this recipe earns a <b>spectacular spoonacular score of 84%</b>. <a href=\"https://spoonacular.com/recipes/pancit-canton-aka-lo-mein-or-chow-mein-522418\">Pancit canton (a.k.a. lo mein or chow mein)</a>, <a href=\"https://spoonacular.com/recipes/pancit-canton-aka-lo-mein-or-chow-mein-1357539\">Pancit canton (a.k.a. lo mein or chow mein)</a>, and <a href=\"https://spoonacular.com/recipes/chicken-lo-mein-94082\">Chicken Lo Mein</a> are very similar to this recipe.",
//             "cuisines": [],
//             "dishTypes": [
//                 "lunch",
//                 "main course",
//                 "main dish",
//                 "dinner"
//             ],
//             "diets": [
//                 "dairy free"
//             ],
//             "occasions": [],
//             "analyzedInstructions": [
//                 {
//                     "name": "",
//                     "steps": [
//                         {
//                             "number": 1,
//                             "step": "In a large nonstick skillet, heat oil; add ginger and garlic and cook over medium heat for 1 minute.",
//                             "ingredients": [
//                                 {
//                                     "id": 11215,
//                                     "name": "garlic",
//                                     "localizedName": "garlic",
//                                     "image": "garlic.png"
//                                 },
//                                 {
//                                     "id": 11216,
//                                     "name": "ginger",
//                                     "localizedName": "ginger",
//                                     "image": "ginger.png"
//                                 },
//                                 {
//                                     "id": 4582,
//                                     "name": "cooking oil",
//                                     "localizedName": "cooking oil",
//                                     "image": "vegetable-oil.jpg"
//                                 }
//                             ],
//                             "equipment": [
//                                 {
//                                     "id": 404645,
//                                     "name": "frying pan",
//                                     "localizedName": "frying pan",
//                                     "image": "pan.png"
//                                 }
//                             ],
//                             "length": {
//                                 "number": 1,
//                                 "unit": "minutes"
//                             }
//                         },
//                         {
//                             "number": 2,
//                             "step": "Add chicken and carrot; cook over medium-high heat, stirring occasionally, until chicken is lightly browned, about 2 minutes.",
//                             "ingredients": [
//                                 {
//                                     "id": 0,
//                                     "name": "chicken",
//                                     "localizedName": "chicken",
//                                     "image": "whole-chicken.jpg"
//                                 },
//                                 {
//                                     "id": 11124,
//                                     "name": "carrot",
//                                     "localizedName": "carrot",
//                                     "image": "sliced-carrot.png"
//                                 }
//                             ],
//                             "equipment": [],
//                             "length": {
//                                 "number": 2,
//                                 "unit": "minutes"
//                             }
//                         },
//                         {
//                             "number": 3,
//                             "step": "Add remaining ingredients except noodles; cook, stirring constantly, until carrot is tender-crisp, about 3 minutes.  Stir in noodles and cook until heated through, about 1 minute.",
//                             "ingredients": [
//                                 {
//                                     "id": 20420,
//                                     "name": "pasta",
//                                     "localizedName": "pasta",
//                                     "image": "fusilli.jpg"
//                                 },
//                                 {
//                                     "id": 11124,
//                                     "name": "carrot",
//                                     "localizedName": "carrot",
//                                     "image": "sliced-carrot.png"
//                                 }
//                             ],
//                             "equipment": [],
//                             "length": {
//                                 "number": 4,
//                                 "unit": "minutes"
//                             }
//                         }
//                     ]
//                 }
//             ],
//             "spoonacularScore": 85.65060424804688,
//             "spoonacularSourceUrl": "https://spoonacular.com/chicken-lo-mein-638174",
//             "nutrition": {
//                 "nutrients": [
//                     {
//                         "name": "Protein",
//                         "amount": 28.7865,
//                         "unit": "g"
//                     }
//                 ]
//             }
//         },
//         {
//             "vegetarian": false,
//             "vegan": false,
//             "glutenFree": true,
//             "dairyFree": true,
//             "veryHealthy": false,
//             "cheap": false,
//             "veryPopular": false,
//             "sustainable": false,
//             "lowFodmap": false,
//             "weightWatcherSmartPoints": 19,
//             "gaps": "no",
//             "preparationMinutes": -1,
//             "cookingMinutes": -1,
//             "aggregateLikes": 1,
//             "healthScore": 13,
//             "creditsText": "luismi74",
//             "license": "spoonacular's terms",
//             "sourceName": "spoonacular",
//             "pricePerServing": 275.54,
//             "id": 667707,
//             "title": "chicken marbella",
//             "author": "luismi74",
//             "readyInMinutes": 75,
//             "servings": 5,
//             "sourceUrl": "https://spoonacular.com/-1436561619005",
//             "image": "https://spoonacular.com/recipeImages/667707-312x231.jpg",
//             "imageType": "jpg",
//             "summary": "If you want to add more <b>gluten free and dairy free</b> recipes to your recipe box, chicken marbella might be a recipe you should try. One serving contains <b>687 calories</b>, <b>41g of protein</b>, and <b>45g of fat</b>. This recipe serves 5 and costs $2.76 per serving. It works well as a main course. This recipe from spoonacular user <a href=\"/profile/luismi74\">luismi74</a> requires red wine vinegar, brown sugar, from 1/2 head of garlic, and prunes. From preparation to the plate, this recipe takes roughly <b>1 hour and 15 minutes</b>. If you like this recipe, take a look at these similar recipes: <a href=\"https://spoonacular.com/recipes/chicken-marbella-111508\">Chicken Marbella</a>, <a href=\"https://spoonacular.com/recipes/chicken-marbella-542252\">Chicken Marbella</a>, and <a href=\"https://spoonacular.com/recipes/chicken-marbella-697109\">Chicken Marbella</a>.",
//             "cuisines": [],
//             "dishTypes": [
//                 "lunch",
//                 "main course",
//                 "main dish",
//                 "dinner"
//             ],
//             "diets": [
//                 "gluten free",
//                 "dairy free"
//             ],
//             "occasions": [],
//             "analyzedInstructions": [
//                 {
//                     "name": "",
//                     "steps": [
//                         {
//                             "number": 1,
//                             "step": "1 In a large bowl combine garlic, oregano, salt and pepper to taste, vinegar, olive oil, prunes, olives, capers with caper juice, and bay leaves.",
//                             "ingredients": [
//                                 {
//                                     "id": 1102047,
//                                     "name": "salt and pepper",
//                                     "localizedName": "salt and pepper",
//                                     "image": "salt-and-pepper.jpg"
//                                 },
//                                 {
//                                     "id": 2004,
//                                     "name": "bay leaves",
//                                     "localizedName": "bay leaves",
//                                     "image": "bay-leaves.jpg"
//                                 },
//                                 {
//                                     "id": 4053,
//                                     "name": "olive oil",
//                                     "localizedName": "olive oil",
//                                     "image": "olive-oil.jpg"
//                                 },
//                                 {
//                                     "id": 2027,
//                                     "name": "oregano",
//                                     "localizedName": "oregano",
//                                     "image": "oregano.jpg"
//                                 },
//                                 {
//                                     "id": 2053,
//                                     "name": "vinegar",
//                                     "localizedName": "vinegar",
//                                     "image": "vinegar-(white).jpg"
//                                 },
//                                 {
//                                     "id": 2054,
//                                     "name": "capers",
//                                     "localizedName": "capers",
//                                     "image": "capers.jpg"
//                                 },
//                                 {
//                                     "id": 11215,
//                                     "name": "garlic",
//                                     "localizedName": "garlic",
//                                     "image": "garlic.png"
//                                 },
//                                 {
//                                     "id": 9195,
//                                     "name": "olives",
//                                     "localizedName": "olives",
//                                     "image": "olives-mixed.jpg"
//                                 },
//                                 {
//                                     "id": 9291,
//                                     "name": "prunes",
//                                     "localizedName": "prunes",
//                                     "image": "prunes.jpg"
//                                 },
//                                 {
//                                     "id": 1019016,
//                                     "name": "juice",
//                                     "localizedName": "juice",
//                                     "image": "apple-juice.jpg"
//                                 }
//                             ],
//                             "equipment": [
//                                 {
//                                     "id": 404783,
//                                     "name": "bowl",
//                                     "localizedName": "bowl",
//                                     "image": "bowl.jpg"
//                                 }
//                             ]
//                         },
//                         {
//                             "number": 2,
//                             "step": "Add the chicken pieces and coat completely with the marinade. Cover and let marinate, refrigerated, several hours or overnight.2 Preheat oven to 350°F. Arrange chicken in a single layer in one or two large, shallow baking pans and spoon marinade over it evenly.",
//                             "ingredients": [
//                                 {
//                                     "id": 1005006,
//                                     "name": "chicken pieces",
//                                     "localizedName": "chicken pieces",
//                                     "image": "chicken-parts.jpg"
//                                 },
//                                 {
//                                     "id": 0,
//                                     "name": "marinade",
//                                     "localizedName": "marinade",
//                                     "image": "seasoning.png"
//                                 },
//                                 {
//                                     "id": 0,
//                                     "name": "chicken",
//                                     "localizedName": "chicken",
//                                     "image": "whole-chicken.jpg"
//                                 }
//                             ],
//                             "equipment": [
//                                 {
//                                     "id": 404646,
//                                     "name": "baking pan",
//                                     "localizedName": "baking pan",
//                                     "image": "roasting-pan.jpg"
//                                 },
//                                 {
//                                     "id": 404784,
//                                     "name": "oven",
//                                     "localizedName": "oven",
//                                     "image": "oven.jpg",
//                                     "temperature": {
//                                         "number": 350.0,
//                                         "unit": "Fahrenheit"
//                                     }
//                                 }
//                             ]
//                         },
//                         {
//                             "number": 3,
//                             "step": "Sprinkle brown sugar over the chicken pieces and pour white wine around them.3",
//                             "ingredients": [
//                                 {
//                                     "id": 1005006,
//                                     "name": "chicken pieces",
//                                     "localizedName": "chicken pieces",
//                                     "image": "chicken-parts.jpg"
//                                 },
//                                 {
//                                     "id": 19334,
//                                     "name": "brown sugar",
//                                     "localizedName": "brown sugar",
//                                     "image": "dark-brown-sugar.png"
//                                 },
//                                 {
//                                     "id": 14106,
//                                     "name": "white wine",
//                                     "localizedName": "white wine",
//                                     "image": "white-wine.jpg"
//                                 }
//                             ],
//                             "equipment": []
//                         },
//                         {
//                             "number": 4,
//                             "step": "Bake for 50 minutes to 1 hour, basting frequently with the pan juices. Chicken is done when a sharp knife inserted into the thigh pieces, at their thickest point, run with clear yellow juices (not pink).4 With a slotted spoon, move the chicken, prunes, olives, and capers to a serving platter.",
//                             "ingredients": [
//                                 {
//                                     "id": 0,
//                                     "name": "chicken",
//                                     "localizedName": "chicken",
//                                     "image": "whole-chicken.jpg"
//                                 },
//                                 {
//                                     "id": 2054,
//                                     "name": "capers",
//                                     "localizedName": "capers",
//                                     "image": "capers.jpg"
//                                 },
//                                 {
//                                     "id": 9195,
//                                     "name": "olives",
//                                     "localizedName": "olives",
//                                     "image": "olives-mixed.jpg"
//                                 },
//                                 {
//                                     "id": 9291,
//                                     "name": "prunes",
//                                     "localizedName": "prunes",
//                                     "image": "prunes.jpg"
//                                 }
//                             ],
//                             "equipment": [
//                                 {
//                                     "id": 404636,
//                                     "name": "slotted spoon",
//                                     "localizedName": "slotted spoon",
//                                     "image": "slotted-spoon.jpg"
//                                 },
//                                 {
//                                     "id": 404784,
//                                     "name": "oven",
//                                     "localizedName": "oven",
//                                     "image": "oven.jpg"
//                                 },
//                                 {
//                                     "id": 404745,
//                                     "name": "knife",
//                                     "localizedName": "knife",
//                                     "image": "chefs-knife.jpg"
//                                 },
//                                 {
//                                     "id": 404645,
//                                     "name": "frying pan",
//                                     "localizedName": "frying pan",
//                                     "image": "pan.png"
//                                 }
//                             ],
//                             "length": {
//                                 "number": 110,
//                                 "unit": "minutes"
//                             }
//                         },
//                         {
//                             "number": 5,
//                             "step": "Pour some of the pan juices over the chicken and sprinkle generously with parsley.",
//                             "ingredients": [
//                                 {
//                                     "id": 0,
//                                     "name": "chicken",
//                                     "localizedName": "chicken",
//                                     "image": "whole-chicken.jpg"
//                                 },
//                                 {
//                                     "id": 11297,
//                                     "name": "parsley",
//                                     "localizedName": "parsley",
//                                     "image": "parsley.jpg"
//                                 }
//                             ],
//                             "equipment": [
//                                 {
//                                     "id": 404645,
//                                     "name": "frying pan",
//                                     "localizedName": "frying pan",
//                                     "image": "pan.png"
//                                 }
//                             ]
//                         },
//                         {
//                             "number": 6,
//                             "step": "Serve remaining juices in a gravy boat.",
//                             "ingredients": [
//                                 {
//                                     "id": 6997,
//                                     "name": "gravy",
//                                     "localizedName": "gravy",
//                                     "image": "gravy.jpg"
//                                 }
//                             ],
//                             "equipment": [
//                                 {
//                                     "id": 405912,
//                                     "name": "gravy boat",
//                                     "localizedName": "gravy boat",
//                                     "image": "gravy-boat.jpg"
//                                 }
//                             ]
//                         }
//                     ]
//                 }
//             ],
//             "spoonacularScore": 54.08713150024414,
//             "spoonacularSourceUrl": "https://spoonacular.com/chicken-marbella-667707",
//             "nutrition": {
//                 "nutrients": [
//                     {
//                         "name": "Protein",
//                         "amount": 41.4511,
//                         "unit": "g"
//                     }
//                 ]
//             }
//         },
//         {
//             "vegetarian": false,
//             "vegan": false,
//             "glutenFree": true,
//             "dairyFree": true,
//             "veryHealthy": false,
//             "cheap": false,
//             "veryPopular": false,
//             "sustainable": false,
//             "lowFodmap": false,
//             "weightWatcherSmartPoints": 10,
//             "gaps": "no",
//             "preparationMinutes": -1,
//             "cookingMinutes": -1,
//             "aggregateLikes": 19,
//             "healthScore": 26,
//             "creditsText": "foodista.com",
//             "sourceName": "foodista.com",
//             "pricePerServing": 220.13,
//             "id": 638257,
//             "title": "Chicken Porridge",
//             "readyInMinutes": 45,
//             "servings": 4,
//             "sourceUrl": "http://www.foodista.com/recipe/S6FN8VYN/chicken-porridge",
//             "image": "https://spoonacular.com/recipeImages/638257-312x231.jpg",
//             "imageType": "jpg",
//             "summary": "Chicken Porridge is a <b>gluten free and dairy free</b> recipe with 4 servings. This breakfast has <b>393 calories</b>, <b>28g of protein</b>, and <b>7g of fat</b> per serving. For <b>$2.2 per serving</b>, this recipe <b>covers 25%</b> of your daily requirements of vitamins and minerals. This recipe from Foodista has 19 fans. If you have parsley, spring onion, julienne young ginger, and a few other ingredients on hand, you can make it. From preparation to the plate, this recipe takes roughly <b>45 minutes</b>. All things considered, we decided this recipe <b>deserves a spoonacular score of 84%</b>. This score is tremendous. <a href=\"https://spoonacular.com/recipes/chicken-porridge-1236999\">Chicken Porridge</a>, <a href=\"https://spoonacular.com/recipes/chicken-and-leek-porridge-637904\">Chicken and Leek Porridge</a>, and <a href=\"https://spoonacular.com/recipes/chicken-congee-rice-porridge-1234553\">Chicken Congee (Rice Porridge)</a> are very similar to this recipe.",
//             "cuisines": [],
//             "dishTypes": [
//                 "morning meal",
//                 "brunch",
//                 "breakfast"
//             ],
//             "diets": [
//                 "gluten free",
//                 "dairy free"
//             ],
//             "occasions": [],
//             "analyzedInstructions": [
//                 {
//                     "name": "",
//                     "steps": [
//                         {
//                             "number": 1,
//                             "step": "Deep fry shallot till golden brown, drain oil and set aside.  Retain the oil for later use.Wash rice and add oil.",
//                             "ingredients": [
//                                 {
//                                     "id": 11677,
//                                     "name": "shallot",
//                                     "localizedName": "shallot",
//                                     "image": "shallots.jpg"
//                                 },
//                                 {
//                                     "id": 20444,
//                                     "name": "rice",
//                                     "localizedName": "rice",
//                                     "image": "uncooked-white-rice.png"
//                                 },
//                                 {
//                                     "id": 4582,
//                                     "name": "cooking oil",
//                                     "localizedName": "cooking oil",
//                                     "image": "vegetable-oil.jpg"
//                                 }
//                             ],
//                             "equipment": []
//                         },
//                         {
//                             "number": 2,
//                             "step": "Mix rice and oil well.",
//                             "ingredients": [
//                                 {
//                                     "id": 20444,
//                                     "name": "rice",
//                                     "localizedName": "rice",
//                                     "image": "uncooked-white-rice.png"
//                                 },
//                                 {
//                                     "id": 4582,
//                                     "name": "cooking oil",
//                                     "localizedName": "cooking oil",
//                                     "image": "vegetable-oil.jpg"
//                                 }
//                             ],
//                             "equipment": []
//                         },
//                         {
//                             "number": 3,
//                             "step": "Add chicken stock, chicken breast and carrots and bring to boil.  Turn heat to low and simmer for about 1 hour.  Stir now and then.  When porridge is thicken, turn of heat and dish out the chicken breast and shred it.",
//                             "ingredients": [
//                                 {
//                                     "id": 5062,
//                                     "name": "chicken breast",
//                                     "localizedName": "chicken breast",
//                                     "image": "chicken-breasts.png"
//                                 },
//                                 {
//                                     "id": 6172,
//                                     "name": "chicken stock",
//                                     "localizedName": "chicken stock",
//                                     "image": "chicken-broth.png"
//                                 },
//                                 {
//                                     "id": 0,
//                                     "name": "hot cereal",
//                                     "localizedName": "hot cereal",
//                                     "image": ""
//                                 },
//                                 {
//                                     "id": 11124,
//                                     "name": "carrot",
//                                     "localizedName": "carrot",
//                                     "image": "sliced-carrot.png"
//                                 }
//                             ],
//                             "equipment": [],
//                             "length": {
//                                 "number": 60,
//                                 "unit": "minutes"
//                             }
//                         },
//                         {
//                             "number": 4,
//                             "step": "Put the shredded chicken meat back into the porridge.  Warm it before serving and garnish with spring onion, parsley, ginger and fried shallots and a few drops of shallot's oil.",
//                             "ingredients": [
//                                 {
//                                     "id": 1005114,
//                                     "name": "shredded chicken",
//                                     "localizedName": "shredded chicken",
//                                     "image": "rotisserie-chicken.png"
//                                 },
//                                 {
//                                     "id": 11291,
//                                     "name": "spring onions",
//                                     "localizedName": "spring onions",
//                                     "image": "spring-onions.jpg"
//                                 },
//                                 {
//                                     "id": 0,
//                                     "name": "hot cereal",
//                                     "localizedName": "hot cereal",
//                                     "image": ""
//                                 },
//                                 {
//                                     "id": 11677,
//                                     "name": "shallot",
//                                     "localizedName": "shallot",
//                                     "image": "shallots.jpg"
//                                 },
//                                 {
//                                     "id": 11297,
//                                     "name": "parsley",
//                                     "localizedName": "parsley",
//                                     "image": "parsley.jpg"
//                                 },
//                                 {
//                                     "id": 11216,
//                                     "name": "ginger",
//                                     "localizedName": "ginger",
//                                     "image": "ginger.png"
//                                 },
//                                 {
//                                     "id": 1065062,
//                                     "name": "meat",
//                                     "localizedName": "meat",
//                                     "image": "whole-chicken.jpg"
//                                 },
//                                 {
//                                     "id": 4582,
//                                     "name": "cooking oil",
//                                     "localizedName": "cooking oil",
//                                     "image": "vegetable-oil.jpg"
//                                 }
//                             ],
//                             "equipment": []
//                         }
//                     ]
//                 }
//             ],
//             "spoonacularScore": 84.3375473022461,
//             "spoonacularSourceUrl": "https://spoonacular.com/chicken-porridge-638257",
//             "nutrition": {
//                 "nutrients": [
//                     {
//                         "name": "Protein",
//                         "amount": 27.7378,
//                         "unit": "g"
//                     }
//                 ]
//             }
//         },
//         {
//             "vegetarian": false,
//             "vegan": false,
//             "glutenFree": false,
//             "dairyFree": true,
//             "veryHealthy": false,
//             "cheap": false,
//             "veryPopular": false,
//             "sustainable": false,
//             "lowFodmap": false,
//             "weightWatcherSmartPoints": 21,
//             "gaps": "no",
//             "preparationMinutes": -1,
//             "cookingMinutes": -1,
//             "aggregateLikes": 2,
//             "healthScore": 31,
//             "creditsText": "foodista.com",
//             "sourceName": "foodista.com",
//             "pricePerServing": 276.83,
//             "id": 637999,
//             "title": "Chicken Burritos",
//             "readyInMinutes": 45,
//             "servings": 4,
//             "sourceUrl": "http://www.foodista.com/recipe/YCKK77YK/chicken-burrito-by-bing",
//             "image": "https://spoonacular.com/recipeImages/637999-312x231.jpg",
//             "imageType": "jpg",
//             "summary": "If you have approximately <b>45 minutes</b> to spend in the kitchen, Chicken Burritos might be a tremendous <b>dairy free</b> recipe to try. This main course has <b>713 calories</b>, <b>32g of protein</b>, and <b>50g of fat</b> per serving. For <b>$2.77 per serving</b>, this recipe <b>covers 35%</b> of your daily requirements of vitamins and minerals. This recipe serves 4. 2 people were glad they tried this recipe. If you have avocadoes, onion, cilantro, and a few other ingredients on hand, you can make it. It is brought to you by Foodista. This recipe is typical of Mexican cuisine. With a spoonacular <b>score of 77%</b>, this dish is solid. Try <a href=\"https://spoonacular.com/recipes/chicken-burritos-1345431\">Chicken Burritos</a>, <a href=\"https://spoonacular.com/recipes/chicken-burritos-81171\">Chicken Burritos</a>, and <a href=\"https://spoonacular.com/recipes/chicken-burritos-1326807\">Chicken Burritos</a> for similar recipes.",
//             "cuisines": [
//                 "Mexican"
//             ],
//             "dishTypes": [
//                 "lunch",
//                 "main course",
//                 "main dish",
//                 "dinner"
//             ],
//             "diets": [
//                 "dairy free",
//                 "ketogenic"
//             ],
//             "occasions": [],
//             "analyzedInstructions": [
//                 {
//                     "name": "",
//                     "steps": [
//                         {
//                             "number": 1,
//                             "step": "Cut the chicken thighs into one inch sized pieces.",
//                             "ingredients": [
//                                 {
//                                     "id": 5091,
//                                     "name": "chicken thighs",
//                                     "localizedName": "chicken thighs",
//                                     "image": "chicken-thigh.jpg"
//                                 }
//                             ],
//                             "equipment": []
//                         },
//                         {
//                             "number": 2,
//                             "step": "Add about 2 teaspoons of salt and 2 teaspoons of pepper. Or do what I always do for dishes that call for salt and pepper. I use Masterfoods Garlic Pepper. Give it a good sprinkle, about 1 tablespoon of it. Set aside to marinate for a couple of hours.Slice the top of the tomatoes off.Using a small spoon, scoop out the soft insides of the tomatoes. This reduces the moisture in the dish and prevents sogginess.Chop the tomatoes up into small bits.Chop the onions into small bits.",
//                             "ingredients": [
//                                 {
//                                     "id": 1102047,
//                                     "name": "salt and pepper",
//                                     "localizedName": "salt and pepper",
//                                     "image": "salt-and-pepper.jpg"
//                                 },
//                                 {
//                                     "id": 11529,
//                                     "name": "tomato",
//                                     "localizedName": "tomato",
//                                     "image": "tomato.png"
//                                 },
//                                 {
//                                     "id": 11215,
//                                     "name": "garlic",
//                                     "localizedName": "garlic",
//                                     "image": "garlic.png"
//                                 },
//                                 {
//                                     "id": 11282,
//                                     "name": "onion",
//                                     "localizedName": "onion",
//                                     "image": "brown-onion.png"
//                                 },
//                                 {
//                                     "id": 1002030,
//                                     "name": "pepper",
//                                     "localizedName": "pepper",
//                                     "image": "pepper.jpg"
//                                 },
//                                 {
//                                     "id": 2047,
//                                     "name": "salt",
//                                     "localizedName": "salt",
//                                     "image": "salt.jpg"
//                                 }
//                             ],
//                             "equipment": []
//                         },
//                         {
//                             "number": 3,
//                             "step": "Place the onions and tomatoes in a large bowl.Chop up a bunch of cilantro. Use as much or as little as you like.",
//                             "ingredients": [
//                                 {
//                                     "id": 11165,
//                                     "name": "cilantro",
//                                     "localizedName": "cilantro",
//                                     "image": "cilantro.png"
//                                 },
//                                 {
//                                     "id": 11529,
//                                     "name": "tomato",
//                                     "localizedName": "tomato",
//                                     "image": "tomato.png"
//                                 },
//                                 {
//                                     "id": 11282,
//                                     "name": "onion",
//                                     "localizedName": "onion",
//                                     "image": "brown-onion.png"
//                                 }
//                             ],
//                             "equipment": [
//                                 {
//                                     "id": 404783,
//                                     "name": "bowl",
//                                     "localizedName": "bowl",
//                                     "image": "bowl.jpg"
//                                 }
//                             ]
//                         },
//                         {
//                             "number": 4,
//                             "step": "Add the cilantro to the onions-tomatoes mixture. Toss together and set aside.",
//                             "ingredients": [
//                                 {
//                                     "id": 11165,
//                                     "name": "cilantro",
//                                     "localizedName": "cilantro",
//                                     "image": "cilantro.png"
//                                 },
//                                 {
//                                     "id": 11529,
//                                     "name": "tomato",
//                                     "localizedName": "tomato",
//                                     "image": "tomato.png"
//                                 },
//                                 {
//                                     "id": 11282,
//                                     "name": "onion",
//                                     "localizedName": "onion",
//                                     "image": "brown-onion.png"
//                                 }
//                             ],
//                             "equipment": []
//                         },
//                         {
//                             "number": 5,
//                             "step": "Cut a slit round an avocado, against its seed.Holding each side of the cut avocado, twist the avocado open to reveal the seed.",
//                             "ingredients": [
//                                 {
//                                     "id": 9037,
//                                     "name": "avocado",
//                                     "localizedName": "avocado",
//                                     "image": "avocado.jpg"
//                                 }
//                             ],
//                             "equipment": []
//                         },
//                         {
//                             "number": 6,
//                             "step": "Remove the seed and scoop out the flesh.",
//                             "ingredients": [],
//                             "equipment": []
//                         },
//                         {
//                             "number": 7,
//                             "step": "Place the avocado flesh in a large bowl and mash it up evenly till it becomes creamy.",
//                             "ingredients": [
//                                 {
//                                     "id": 9037,
//                                     "name": "avocado",
//                                     "localizedName": "avocado",
//                                     "image": "avocado.jpg"
//                                 }
//                             ],
//                             "equipment": [
//                                 {
//                                     "id": 404783,
//                                     "name": "bowl",
//                                     "localizedName": "bowl",
//                                     "image": "bowl.jpg"
//                                 }
//                             ]
//                         },
//                         {
//                             "number": 8,
//                             "step": "Add the tomatoes mixture to the avocados.",
//                             "ingredients": [
//                                 {
//                                     "id": 9037,
//                                     "name": "avocado",
//                                     "localizedName": "avocado",
//                                     "image": "avocado.jpg"
//                                 },
//                                 {
//                                     "id": 11529,
//                                     "name": "tomato",
//                                     "localizedName": "tomato",
//                                     "image": "tomato.png"
//                                 }
//                             ],
//                             "equipment": []
//                         },
//                         {
//                             "number": 9,
//                             "step": "Combine well.Squeeze in juice from one lemon.",
//                             "ingredients": [
//                                 {
//                                     "id": 1019016,
//                                     "name": "juice",
//                                     "localizedName": "juice",
//                                     "image": "apple-juice.jpg"
//                                 },
//                                 {
//                                     "id": 9150,
//                                     "name": "lemon",
//                                     "localizedName": "lemon",
//                                     "image": "lemon.png"
//                                 }
//                             ],
//                             "equipment": []
//                         },
//                         {
//                             "number": 10,
//                             "step": "Add a generous portion of salt to taste. About 1 to 2 teaspoons.At this point, youll have guacamole. If you like, dish it up in a serving bowl and serve it with chips.Now cook the chicken.",
//                             "ingredients": [
//                                 {
//                                     "id": 1009037,
//                                     "name": "guacamole",
//                                     "localizedName": "guacamole",
//                                     "image": "guacamole.jpg"
//                                 },
//                                 {
//                                     "id": 0,
//                                     "name": "chicken",
//                                     "localizedName": "chicken",
//                                     "image": "whole-chicken.jpg"
//                                 },
//                                 {
//                                     "id": 11408,
//                                     "name": "french fries",
//                                     "localizedName": "french fries",
//                                     "image": "french-fries-isolated.jpg"
//                                 },
//                                 {
//                                     "id": 2047,
//                                     "name": "salt",
//                                     "localizedName": "salt",
//                                     "image": "salt.jpg"
//                                 }
//                             ],
//                             "equipment": [
//                                 {
//                                     "id": 404783,
//                                     "name": "bowl",
//                                     "localizedName": "bowl",
//                                     "image": "bowl.jpg"
//                                 }
//                             ]
//                         },
//                         {
//                             "number": 11,
//                             "step": "Heat a pan with a few tablespoons of cooking oil till its very hot. It has to be very hot or the chicken wont brown.",
//                             "ingredients": [
//                                 {
//                                     "id": 4582,
//                                     "name": "cooking oil",
//                                     "localizedName": "cooking oil",
//                                     "image": "vegetable-oil.jpg"
//                                 },
//                                 {
//                                     "id": 0,
//                                     "name": "chicken",
//                                     "localizedName": "chicken",
//                                     "image": "whole-chicken.jpg"
//                                 }
//                             ],
//                             "equipment": [
//                                 {
//                                     "id": 404645,
//                                     "name": "frying pan",
//                                     "localizedName": "frying pan",
//                                     "image": "pan.png"
//                                 }
//                             ]
//                         },
//                         {
//                             "number": 12,
//                             "step": "Add the chicken to the pan. Be careful! Itll sizzle and splatter.Turn the pieces over to brown the other side after a few minutes.When the chicken are browned, remove them from the pan and set aside at a warm place.Using a clean, dry pan, toast the tortillas one at a time on each side.They are ready to be used when they are soft and warm.",
//                             "ingredients": [
//                                 {
//                                     "id": 18364,
//                                     "name": "tortilla",
//                                     "localizedName": "tortilla",
//                                     "image": "flour-tortilla.jpg"
//                                 },
//                                 {
//                                     "id": 0,
//                                     "name": "chicken",
//                                     "localizedName": "chicken",
//                                     "image": "whole-chicken.jpg"
//                                 },
//                                 {
//                                     "id": 0,
//                                     "name": "sandwich bread",
//                                     "localizedName": "sandwich bread",
//                                     "image": "white-bread.jpg"
//                                 }
//                             ],
//                             "equipment": [
//                                 {
//                                     "id": 404645,
//                                     "name": "frying pan",
//                                     "localizedName": "frying pan",
//                                     "image": "pan.png"
//                                 }
//                             ]
//                         },
//                         {
//                             "number": 13,
//                             "step": "Add a serving of the guacamole mixture.",
//                             "ingredients": [
//                                 {
//                                     "id": 1009037,
//                                     "name": "guacamole",
//                                     "localizedName": "guacamole",
//                                     "image": "guacamole.jpg"
//                                 }
//                             ],
//                             "equipment": []
//                         },
//                         {
//                             "number": 14,
//                             "step": "Add a serving of the chicken.Quickly wrap the burrito up. If it cools, the tortilla will crack and it would be impossible to roll it up.",
//                             "ingredients": [
//                                 {
//                                     "id": 18364,
//                                     "name": "tortilla",
//                                     "localizedName": "tortilla",
//                                     "image": "flour-tortilla.jpg"
//                                 },
//                                 {
//                                     "id": 0,
//                                     "name": "chicken",
//                                     "localizedName": "chicken",
//                                     "image": "whole-chicken.jpg"
//                                 },
//                                 {
//                                     "id": 0,
//                                     "name": "roll",
//                                     "localizedName": "roll",
//                                     "image": "dinner-yeast-rolls.jpg"
//                                 },
//                                 {
//                                     "id": 10018364,
//                                     "name": "wrap",
//                                     "localizedName": "wrap",
//                                     "image": "flour-tortilla.jpg"
//                                 }
//                             ],
//                             "equipment": []
//                         },
//                         {
//                             "number": 15,
//                             "step": "Roll over once. Fold in the sides, and roll over again till its fully wrapped.",
//                             "ingredients": [
//                                 {
//                                     "id": 0,
//                                     "name": "roll",
//                                     "localizedName": "roll",
//                                     "image": "dinner-yeast-rolls.jpg"
//                                 }
//                             ],
//                             "equipment": []
//                         },
//                         {
//                             "number": 16,
//                             "step": "Serve immediately or wrap in aluminum foil and keep them in the oven till ready to eat.",
//                             "ingredients": [
//                                 {
//                                     "id": 10018364,
//                                     "name": "wrap",
//                                     "localizedName": "wrap",
//                                     "image": "flour-tortilla.jpg"
//                                 }
//                             ],
//                             "equipment": [
//                                 {
//                                     "id": 404765,
//                                     "name": "aluminum foil",
//                                     "localizedName": "aluminum foil",
//                                     "image": "aluminum-foil.png"
//                                 },
//                                 {
//                                     "id": 404784,
//                                     "name": "oven",
//                                     "localizedName": "oven",
//                                     "image": "oven.jpg"
//                                 }
//                             ]
//                         }
//                     ]
//                 }
//             ],
//             "spoonacularScore": 78.2167739868164,
//             "spoonacularSourceUrl": "https://spoonacular.com/chicken-burritos-637999",
//             "nutrition": {
//                 "nutrients": [
//                     {
//                         "name": "Protein",
//                         "amount": 31.9699,
//                         "unit": "g"
//                     }
//                 ]
//             }
//         },
//         {
//             "vegetarian": false,
//             "vegan": false,
//             "glutenFree": true,
//             "dairyFree": true,
//             "veryHealthy": false,
//             "cheap": false,
//             "veryPopular": false,
//             "sustainable": false,
//             "lowFodmap": false,
//             "weightWatcherSmartPoints": 16,
//             "gaps": "no",
//             "preparationMinutes": -1,
//             "cookingMinutes": -1,
//             "aggregateLikes": 1,
//             "healthScore": 13,
//             "creditsText": "foodista.com",
//             "sourceName": "foodista.com",
//             "pricePerServing": 208.86,
//             "id": 638125,
//             "title": "Chicken In A Pot",
//             "readyInMinutes": 45,
//             "servings": 4,
//             "sourceUrl": "https://www.foodista.com/recipe/4FNL5JJ8/chicken-in-a-pot",
//             "image": "https://spoonacular.com/recipeImages/638125-312x231.jpg",
//             "imageType": "jpg",
//             "summary": "Chicken In A Pot might be just the main course you are searching for. Watching your figure? This gluten free, dairy free, paleolithic, and primal recipe has <b>595 calories</b>, <b>47g of protein</b>, and <b>41g of fat</b> per serving. This recipe serves 4. For <b>$2.09 per serving</b>, this recipe <b>covers 22%</b> of your daily requirements of vitamins and minerals. This recipe is liked by 1 foodies and cooks. Head to the store and pick up chicken, lemon juice, ground pepper, and a few other things to make it today. From preparation to the plate, this recipe takes roughly <b>45 minutes</b>. It is brought to you by Foodista. With a spoonacular <b>score of 51%</b>, this dish is good. Try <a href=\"https://spoonacular.com/recipes/healthy-chicken-pot-pie-soup-in-the-crock-pot-whole-30-dairy-free-1750627\">Healthy Chicken Pot Pie Soup in the crock pot (whole 30, dairy free)</a>, <a href=\"https://spoonacular.com/recipes/one-pot-teriyaki-rice-with-chicken-vegetables-video-instant-pot-1570513\">One Pot Teriyaki Rice with Chicken & Vegetables + Video (+Instant Pot)</a>, and <a href=\"https://spoonacular.com/recipes/one-pot-teriyaki-rice-with-chicken-vegetables-video-instant-pot-1377613\">One Pot Teriyaki Rice with Chicken & Vegetables + Video (+Instant Pot)</a> for similar recipes.",
//             "cuisines": [],
//             "dishTypes": [
//                 "lunch",
//                 "main course",
//                 "main dish",
//                 "dinner"
//             ],
//             "diets": [
//                 "gluten free",
//                 "dairy free",
//                 "paleolithic",
//                 "primal",
//                 "whole 30",
//                 "ketogenic"
//             ],
//             "occasions": [],
//             "analyzedInstructions": [
//                 {
//                     "name": "",
//                     "steps": [
//                         {
//                             "number": 1,
//                             "step": "Adjust oven rack to lowest position and pre- heat oven to 250 degrees",
//                             "ingredients": [],
//                             "equipment": [
//                                 {
//                                     "id": 404784,
//                                     "name": "oven",
//                                     "localizedName": "oven",
//                                     "image": "oven.jpg"
//                                 }
//                             ]
//                         },
//                         {
//                             "number": 2,
//                             "step": "Rinse chicken under cold water and pat dry. Season well with salt and pepper on each side",
//                             "ingredients": [
//                                 {
//                                     "id": 1102047,
//                                     "name": "salt and pepper",
//                                     "localizedName": "salt and pepper",
//                                     "image": "salt-and-pepper.jpg"
//                                 },
//                                 {
//                                     "id": 0,
//                                     "name": "chicken",
//                                     "localizedName": "chicken",
//                                     "image": "whole-chicken.jpg"
//                                 },
//                                 {
//                                     "id": 14412,
//                                     "name": "water",
//                                     "localizedName": "water",
//                                     "image": "water.png"
//                                 }
//                             ],
//                             "equipment": []
//                         },
//                         {
//                             "number": 3,
//                             "step": "Heat olive oil in large Dutch Oven (9 quarts), over medium heat. Do not allow oil to smoke",
//                             "ingredients": [
//                                 {
//                                     "id": 4053,
//                                     "name": "olive oil",
//                                     "localizedName": "olive oil",
//                                     "image": "olive-oil.jpg"
//                                 },
//                                 {
//                                     "id": 4582,
//                                     "name": "cooking oil",
//                                     "localizedName": "cooking oil",
//                                     "image": "vegetable-oil.jpg"
//                                 }
//                             ],
//                             "equipment": [
//                                 {
//                                     "id": 404667,
//                                     "name": "dutch oven",
//                                     "localizedName": "dutch oven",
//                                     "image": "dutch-oven.jpg"
//                                 }
//                             ]
//                         },
//                         {
//                             "number": 4,
//                             "step": "Place chicken breast side down. Cook until breast is lightly browned, about 5 minutes",
//                             "ingredients": [
//                                 {
//                                     "id": 5062,
//                                     "name": "chicken breast",
//                                     "localizedName": "chicken breast",
//                                     "image": "chicken-breasts.png"
//                                 }
//                             ],
//                             "equipment": []
//                         },
//                         {
//                             "number": 5,
//                             "step": "Using a wooden spoon inserted into cavity of the bird and flip chicken breast side up, add remaining ingredients except lemon juice, and cook about 6 to 8 minutes",
//                             "ingredients": [
//                                 {
//                                     "id": 5062,
//                                     "name": "chicken breast",
//                                     "localizedName": "chicken breast",
//                                     "image": "chicken-breasts.png"
//                                 },
//                                 {
//                                     "id": 9152,
//                                     "name": "lemon juice",
//                                     "localizedName": "lemon juice",
//                                     "image": "lemon-juice.jpg"
//                                 }
//                             ],
//                             "equipment": [
//                                 {
//                                     "id": 404732,
//                                     "name": "wooden spoon",
//                                     "localizedName": "wooden spoon",
//                                     "image": "wooden-spoon.jpg"
//                                 }
//                             ]
//                         },
//                         {
//                             "number": 6,
//                             "step": "Remove from heat.",
//                             "ingredients": [],
//                             "equipment": []
//                         },
//                         {
//                             "number": 7,
//                             "step": "Place a large aluminum sheet over the pot, place the lid on top. This is to ensure a tight seal, so that no vapors escape during the cooking process",
//                             "ingredients": [],
//                             "equipment": [
//                                 {
//                                     "id": 404752,
//                                     "name": "pot",
//                                     "localizedName": "pot",
//                                     "image": "stock-pot.jpg"
//                                 }
//                             ]
//                         },
//                         {
//                             "number": 8,
//                             "step": "Transfer the Dutch Oven in your pre heated oven. Cook approximately 1:30 minutes",
//                             "ingredients": [],
//                             "equipment": [
//                                 {
//                                     "id": 404667,
//                                     "name": "dutch oven",
//                                     "localizedName": "dutch oven",
//                                     "image": "dutch-oven.jpg"
//                                 },
//                                 {
//                                     "id": 404784,
//                                     "name": "oven",
//                                     "localizedName": "oven",
//                                     "image": "oven.jpg"
//                                 }
//                             ]
//                         },
//                         {
//                             "number": 9,
//                             "step": "Removed pot from the oven and check the chicken internal temperature (must be at least 160 degrees)",
//                             "ingredients": [
//                                 {
//                                     "id": 0,
//                                     "name": "chicken",
//                                     "localizedName": "chicken",
//                                     "image": "whole-chicken.jpg"
//                                 }
//                             ],
//                             "equipment": [
//                                 {
//                                     "id": 404784,
//                                     "name": "oven",
//                                     "localizedName": "oven",
//                                     "image": "oven.jpg"
//                                 },
//                                 {
//                                     "id": 404752,
//                                     "name": "pot",
//                                     "localizedName": "pot",
//                                     "image": "stock-pot.jpg"
//                                 }
//                             ]
//                         },
//                         {
//                             "number": 10,
//                             "step": "Remove chicken and place onto a carving board, tent with foil and allow to rest about 20 minutes",
//                             "ingredients": [
//                                 {
//                                     "id": 0,
//                                     "name": "chicken",
//                                     "localizedName": "chicken",
//                                     "image": "whole-chicken.jpg"
//                                 }
//                             ],
//                             "equipment": [
//                                 {
//                                     "id": 404765,
//                                     "name": "aluminum foil",
//                                     "localizedName": "aluminum foil",
//                                     "image": "aluminum-foil.png"
//                                 }
//                             ]
//                         },
//                         {
//                             "number": 11,
//                             "step": "Strain chicken juices from the pot through a fine mesh.",
//                             "ingredients": [
//                                 {
//                                     "id": 0,
//                                     "name": "chicken",
//                                     "localizedName": "chicken",
//                                     "image": "whole-chicken.jpg"
//                                 }
//                             ],
//                             "equipment": [
//                                 {
//                                     "id": 404752,
//                                     "name": "pot",
//                                     "localizedName": "pot",
//                                     "image": "stock-pot.jpg"
//                                 }
//                             ]
//                         },
//                         {
//                             "number": 12,
//                             "step": "Place the juices into a fat separator",
//                             "ingredients": [],
//                             "equipment": []
//                         },
//                         {
//                             "number": 13,
//                             "step": "Pour the juices into a saucepan (discard any of the fat left in the separator), add lemon juice and any juices from the carving board.  Cook approximately 5 minutes and serve!",
//                             "ingredients": [
//                                 {
//                                     "id": 9152,
//                                     "name": "lemon juice",
//                                     "localizedName": "lemon juice",
//                                     "image": "lemon-juice.jpg"
//                                 }
//                             ],
//                             "equipment": [
//                                 {
//                                     "id": 404669,
//                                     "name": "sauce pan",
//                                     "localizedName": "sauce pan",
//                                     "image": "sauce-pan.jpg"
//                                 }
//                             ],
//                             "length": {
//                                 "number": 5,
//                                 "unit": "minutes"
//                             }
//                         }
//                     ]
//                 }
//             ],
//             "spoonacularScore": 56.99003982543945,
//             "spoonacularSourceUrl": "https://spoonacular.com/chicken-in-a-pot-638125",
//             "nutrition": {
//                 "nutrients": [
//                     {
//                         "name": "Protein",
//                         "amount": 46.7633,
//                         "unit": "g"
//                     }
//                 ]
//             }
//         },
//         {
//             "vegetarian": false,
//             "vegan": false,
//             "glutenFree": true,
//             "dairyFree": false,
//             "veryHealthy": false,
//             "cheap": false,
//             "veryPopular": false,
//             "sustainable": false,
//             "lowFodmap": false,
//             "weightWatcherSmartPoints": 10,
//             "gaps": "no",
//             "preparationMinutes": -1,
//             "cookingMinutes": -1,
//             "aggregateLikes": 1,
//             "healthScore": 44,
//             "creditsText": "foodista.com",
//             "sourceName": "foodista.com",
//             "pricePerServing": 171.35,
//             "id": 638148,
//             "title": "Chicken Kale Bake",
//             "readyInMinutes": 45,
//             "servings": 6,
//             "sourceUrl": "http://www.foodista.com/recipe/PT88VTHS/chicken-kale-bake",
//             "image": "https://spoonacular.com/recipeImages/638148-312x231.jpg",
//             "imageType": "jpg",
//             "summary": "Chicken Kale Bake is a main course that serves 6. For <b>$1.71 per serving</b>, this recipe <b>covers 33%</b> of your daily requirements of vitamins and minerals. One portion of this dish contains about <b>28g of protein</b>, <b>10g of fat</b>, and a total of <b>418 calories</b>. 1 person has tried and liked this recipe. Head to the store and pick up brown rice, juice of lemon, onion, and a few other things to make it today. From preparation to the plate, this recipe takes about <b>45 minutes</b>. It is brought to you by Foodista. It is a good option if you're following a <b>gluten free</b> diet. With a spoonacular <b>score of 77%</b>, this dish is solid. Similar recipes include <a href=\"https://spoonacular.com/recipes/chicken-kale-bake-1234049\">Chicken Kale Bake</a>, <a href=\"https://spoonacular.com/recipes/chicken-thighs-with-sweet-potatoes-and-kale-bake-1170323\">Chicken Thighs with Sweet Potatoes and Kale Bake</a>, and <a href=\"https://spoonacular.com/recipes/chicken-thighs-with-sweet-potatoes-corn-and-kale-bake-616502\">Chicken Thighs with Sweet Potatoes Corn and Kale Bake</a>.",
//             "cuisines": [],
//             "dishTypes": [
//                 "lunch",
//                 "main course",
//                 "main dish",
//                 "dinner"
//             ],
//             "diets": [
//                 "gluten free"
//             ],
//             "occasions": [],
//             "analyzedInstructions": [
//                 {
//                     "name": "",
//                     "steps": [
//                         {
//                             "number": 1,
//                             "step": "Combine first seven ingredients in a dutch oven",
//                             "ingredients": [],
//                             "equipment": [
//                                 {
//                                     "id": 404667,
//                                     "name": "dutch oven",
//                                     "localizedName": "dutch oven",
//                                     "image": "dutch-oven.jpg"
//                                 }
//                             ]
//                         },
//                         {
//                             "number": 2,
//                             "step": "Bake at 350 degrees for 1 hour",
//                             "ingredients": [],
//                             "equipment": [
//                                 {
//                                     "id": 404784,
//                                     "name": "oven",
//                                     "localizedName": "oven",
//                                     "image": "oven.jpg"
//                                 }
//                             ]
//                         },
//                         {
//                             "number": 3,
//                             "step": "While the chicken and rice is in the oven finely chop the kale.After the chiken and rice has been cooking for about an hour take the chicken out of the pot and reserve on a platter under tin foil",
//                             "ingredients": [
//                                 {
//                                     "id": 0,
//                                     "name": "chicken",
//                                     "localizedName": "chicken",
//                                     "image": "whole-chicken.jpg"
//                                 },
//                                 {
//                                     "id": 11233,
//                                     "name": "kale",
//                                     "localizedName": "kale",
//                                     "image": "kale.jpg"
//                                 },
//                                 {
//                                     "id": 20444,
//                                     "name": "rice",
//                                     "localizedName": "rice",
//                                     "image": "uncooked-white-rice.png"
//                                 }
//                             ],
//                             "equipment": [
//                                 {
//                                     "id": 404765,
//                                     "name": "aluminum foil",
//                                     "localizedName": "aluminum foil",
//                                     "image": "aluminum-foil.png"
//                                 },
//                                 {
//                                     "id": 404784,
//                                     "name": "oven",
//                                     "localizedName": "oven",
//                                     "image": "oven.jpg"
//                                 },
//                                 {
//                                     "id": 404752,
//                                     "name": "pot",
//                                     "localizedName": "pot",
//                                     "image": "stock-pot.jpg"
//                                 }
//                             ]
//                         },
//                         {
//                             "number": 4,
//                             "step": "Mix the kale into the rice and add a little more hot water and replace in the oven for another 10 min.Heap the rice on the center of a platter and place chicken on top.Squeeze lemon juice over the top and serve.",
//                             "ingredients": [
//                                 {
//                                     "id": 9152,
//                                     "name": "lemon juice",
//                                     "localizedName": "lemon juice",
//                                     "image": "lemon-juice.jpg"
//                                 },
//                                 {
//                                     "id": 0,
//                                     "name": "chicken",
//                                     "localizedName": "chicken",
//                                     "image": "whole-chicken.jpg"
//                                 },
//                                 {
//                                     "id": 14412,
//                                     "name": "water",
//                                     "localizedName": "water",
//                                     "image": "water.png"
//                                 },
//                                 {
//                                     "id": 11233,
//                                     "name": "kale",
//                                     "localizedName": "kale",
//                                     "image": "kale.jpg"
//                                 },
//                                 {
//                                     "id": 20444,
//                                     "name": "rice",
//                                     "localizedName": "rice",
//                                     "image": "uncooked-white-rice.png"
//                                 }
//                             ],
//                             "equipment": [
//                                 {
//                                     "id": 404784,
//                                     "name": "oven",
//                                     "localizedName": "oven",
//                                     "image": "oven.jpg"
//                                 }
//                             ],
//                             "length": {
//                                 "number": 10,
//                                 "unit": "minutes"
//                             }
//                         }
//                     ]
//                 }
//             ],
//             "spoonacularScore": 82.7302017211914,
//             "spoonacularSourceUrl": "https://spoonacular.com/chicken-kale-bake-638148",
//             "nutrition": {
//                 "nutrients": [
//                     {
//                         "name": "Protein",
//                         "amount": 28.4384,
//                         "unit": "g"
//                     }
//                 ]
//             }
//         },
//         {
//             "vegetarian": false,
//             "vegan": false,
//             "glutenFree": false,
//             "dairyFree": false,
//             "veryHealthy": false,
//             "cheap": false,
//             "veryPopular": false,
//             "sustainable": false,
//             "lowFodmap": false,
//             "weightWatcherSmartPoints": 14,
//             "gaps": "no",
//             "preparationMinutes": -1,
//             "cookingMinutes": -1,
//             "aggregateLikes": 1,
//             "healthScore": 30,
//             "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
//             "license": "CC BY 3.0",
//             "sourceName": "Foodista",
//             "pricePerServing": 276.49,
//             "id": 638002,
//             "title": "Chicken Cacciatore",
//             "readyInMinutes": 45,
//             "servings": 6,
//             "sourceUrl": "https://www.foodista.com/recipe/7M55MLHY/chicken-cacciatore",
//             "image": "https://spoonacular.com/recipeImages/638002-312x231.jpg",
//             "imageType": "jpg",
//             "summary": "Chicken Cacciatore is a Mediterranean recipe that serves 6. For <b>$2.76 per serving</b>, this recipe <b>covers 35%</b> of your daily requirements of vitamins and minerals. This main course has <b>584 calories</b>, <b>48g of protein</b>, and <b>31g of fat</b> per serving. 1 person found this recipe to be delicious and satisfying. This recipe from Foodista requires chicken breasts, olive oil, garlic, and flour. From preparation to the plate, this recipe takes approximately <b>45 minutes</b>. Taking all factors into account, this recipe <b>earns a spoonacular score of 67%</b>, which is good. Users who liked this recipe also liked <a href=\"https://spoonacular.com/recipes/chicken-cacciatore-993228\">Chicken Cacciatore</a>, <a href=\"https://spoonacular.com/recipes/chicken-cacciatore-288916\">Chicken Cacciatore</a>, and <a href=\"https://spoonacular.com/recipes/chicken-cacciatore-295639\">Chicken Cacciatore</a>.",
//             "cuisines": [
//                 "Mediterranean",
//                 "Italian",
//                 "European"
//             ],
//             "dishTypes": [
//                 "lunch",
//                 "main course",
//                 "main dish",
//                 "dinner"
//             ],
//             "diets": [],
//             "occasions": [],
//             "analyzedInstructions": [
//                 {
//                     "name": "",
//                     "steps": [
//                         {
//                             "number": 1,
//                             "step": "In a medium-sized bowl, mix salt, pepper and flour together.",
//                             "ingredients": [
//                                 {
//                                     "id": 1002030,
//                                     "name": "pepper",
//                                     "localizedName": "pepper",
//                                     "image": "pepper.jpg"
//                                 },
//                                 {
//                                     "id": 20081,
//                                     "name": "all purpose flour",
//                                     "localizedName": "all purpose flour",
//                                     "image": "flour.png"
//                                 },
//                                 {
//                                     "id": 2047,
//                                     "name": "salt",
//                                     "localizedName": "salt",
//                                     "image": "salt.jpg"
//                                 }
//                             ],
//                             "equipment": [
//                                 {
//                                     "id": 404783,
//                                     "name": "bowl",
//                                     "localizedName": "bowl",
//                                     "image": "bowl.jpg"
//                                 }
//                             ]
//                         },
//                         {
//                             "number": 2,
//                             "step": "Wash chicken and remove excess skin. Dredge in flour mixture and shake off excess.",
//                             "ingredients": [
//                                 {
//                                     "id": 0,
//                                     "name": "chicken",
//                                     "localizedName": "chicken",
//                                     "image": "whole-chicken.jpg"
//                                 },
//                                 {
//                                     "id": 20081,
//                                     "name": "all purpose flour",
//                                     "localizedName": "all purpose flour",
//                                     "image": "flour.png"
//                                 },
//                                 {
//                                     "id": 0,
//                                     "name": "shake",
//                                     "localizedName": "shake",
//                                     "image": ""
//                                 }
//                             ],
//                             "equipment": []
//                         },
//                         {
//                             "number": 3,
//                             "step": "Heat oil is a large non-stick skillet over medium-high heat.",
//                             "ingredients": [
//                                 {
//                                     "id": 4582,
//                                     "name": "cooking oil",
//                                     "localizedName": "cooking oil",
//                                     "image": "vegetable-oil.jpg"
//                                 }
//                             ],
//                             "equipment": [
//                                 {
//                                     "id": 404645,
//                                     "name": "frying pan",
//                                     "localizedName": "frying pan",
//                                     "image": "pan.png"
//                                 }
//                             ]
//                         },
//                         {
//                             "number": 4,
//                             "step": "Add chicken and brown on all sides.",
//                             "ingredients": [
//                                 {
//                                     "id": 0,
//                                     "name": "chicken",
//                                     "localizedName": "chicken",
//                                     "image": "whole-chicken.jpg"
//                                 }
//                             ],
//                             "equipment": []
//                         },
//                         {
//                             "number": 5,
//                             "step": "Remove from the pan and drain on paper towels.",
//                             "ingredients": [],
//                             "equipment": [
//                                 {
//                                     "id": 405895,
//                                     "name": "paper towels",
//                                     "localizedName": "paper towels",
//                                     "image": "paper-towels.jpg"
//                                 },
//                                 {
//                                     "id": 404645,
//                                     "name": "frying pan",
//                                     "localizedName": "frying pan",
//                                     "image": "pan.png"
//                                 }
//                             ]
//                         },
//                         {
//                             "number": 6,
//                             "step": "To the same skillet add the onion and garlic and stir until onion is soft, but not browned. Next, add red pepper and mushrooms; cook, stirring occasionally until softened.",
//                             "ingredients": [
//                                 {
//                                     "id": 11821,
//                                     "name": "red pepper",
//                                     "localizedName": "red pepper",
//                                     "image": "red-pepper.jpg"
//                                 },
//                                 {
//                                     "id": 11260,
//                                     "name": "mushrooms",
//                                     "localizedName": "mushrooms",
//                                     "image": "mushrooms.png"
//                                 },
//                                 {
//                                     "id": 11215,
//                                     "name": "garlic",
//                                     "localizedName": "garlic",
//                                     "image": "garlic.png"
//                                 },
//                                 {
//                                     "id": 11282,
//                                     "name": "onion",
//                                     "localizedName": "onion",
//                                     "image": "brown-onion.png"
//                                 }
//                             ],
//                             "equipment": [
//                                 {
//                                     "id": 404645,
//                                     "name": "frying pan",
//                                     "localizedName": "frying pan",
//                                     "image": "pan.png"
//                                 }
//                             ]
//                         },
//                         {
//                             "number": 7,
//                             "step": "Add tomatoes, white wine and oregano and cook until alcohol has burned off; 3-5 minutes.",
//                             "ingredients": [
//                                 {
//                                     "id": 14106,
//                                     "name": "white wine",
//                                     "localizedName": "white wine",
//                                     "image": "white-wine.jpg"
//                                 },
//                                 {
//                                     "id": 11529,
//                                     "name": "tomato",
//                                     "localizedName": "tomato",
//                                     "image": "tomato.png"
//                                 },
//                                 {
//                                     "id": 14037,
//                                     "name": "alcohol",
//                                     "localizedName": "alcohol",
//                                     "image": "rum-dark.jpg"
//                                 },
//                                 {
//                                     "id": 2027,
//                                     "name": "oregano",
//                                     "localizedName": "oregano",
//                                     "image": "oregano.jpg"
//                                 }
//                             ],
//                             "equipment": [],
//                             "length": {
//                                 "number": 5,
//                                 "unit": "minutes"
//                             }
//                         },
//                         {
//                             "number": 8,
//                             "step": "Return chicken to skillet, cover and simmer on low for one hour.",
//                             "ingredients": [
//                                 {
//                                     "id": 0,
//                                     "name": "chicken",
//                                     "localizedName": "chicken",
//                                     "image": "whole-chicken.jpg"
//                                 }
//                             ],
//                             "equipment": [
//                                 {
//                                     "id": 404645,
//                                     "name": "frying pan",
//                                     "localizedName": "frying pan",
//                                     "image": "pan.png"
//                                 }
//                             ],
//                             "length": {
//                                 "number": 60,
//                                 "unit": "minutes"
//                             }
//                         }
//                     ]
//                 }
//             ],
//             "spoonacularScore": 75.45669555664062,
//             "spoonacularSourceUrl": "https://spoonacular.com/chicken-cacciatore-638002",
//             "nutrition": {
//                 "nutrients": [
//                     {
//                         "name": "Protein",
//                         "amount": 47.5001,
//                         "unit": "g"
//                     }
//                 ]
//             }
//         },
//         {
//             "vegetarian": false,
//             "vegan": false,
//             "glutenFree": true,
//             "dairyFree": true,
//             "veryHealthy": true,
//             "cheap": false,
//             "veryPopular": false,
//             "sustainable": false,
//             "lowFodmap": false,
//             "weightWatcherSmartPoints": 17,
//             "gaps": "no",
//             "preparationMinutes": -1,
//             "cookingMinutes": -1,
//             "aggregateLikes": 4,
//             "healthScore": 80,
//             "creditsText": "foodista.com",
//             "sourceName": "foodista.com",
//             "pricePerServing": 180.87,
//             "id": 638166,
//             "title": "Chicken Liver Salad",
//             "readyInMinutes": 45,
//             "servings": 2,
//             "sourceUrl": "http://www.foodista.com/recipe/CDV8FDBT/chicken-liver-salad",
//             "image": "https://spoonacular.com/recipeImages/638166-312x231.jpg",
//             "imageType": "jpg",
//             "summary": "You can never have too many main course recipes, so give Chicken Liver Salad a try. One serving contains <b>613 calories</b>, <b>45g of protein</b>, and <b>42g of fat</b>. For <b>$1.81 per serving</b>, this recipe <b>covers 56%</b> of your daily requirements of vitamins and minerals. This recipe serves 2. 4 people found this recipe to be tasty and satisfying. It is brought to you by Foodista. Head to the store and pick up salt and pepper, balsamic vinegar, chicken livers, and a few other things to make it today. From preparation to the plate, this recipe takes approximately <b>45 minutes</b>. It is a good option if you're following a <b>gluten free, dairy free, paleolithic, and primal</b> diet. All things considered, we decided this recipe <b>deserves a spoonacular score of 94%</b>. This score is great. <a href=\"https://spoonacular.com/recipes/liver-pt-the-silkiest-and-creamiest-chicken-liver-mousse-ever-551492\">Liver Pâté – The Silkiest and Creamiest Chicken Liver Mousse Ever</a>, <a href=\"https://spoonacular.com/recipes/warm-chicken-liver-salad-225723\">Warm chicken liver salad</a>, and <a href=\"https://spoonacular.com/recipes/warm-artichoke-and-chicken-liver-salad-28783\">Warm Artichoke and Chicken Liver Salad</a> are very similar to this recipe.",
//             "cuisines": [],
//             "dishTypes": [
//                 "side dish",
//                 "lunch",
//                 "main course",
//                 "salad",
//                 "main dish",
//                 "dinner"
//             ],
//             "diets": [
//                 "gluten free",
//                 "dairy free",
//                 "paleolithic",
//                 "primal",
//                 "whole 30",
//                 "ketogenic"
//             ],
//             "occasions": [],
//             "analyzedInstructions": [
//                 {
//                     "name": "",
//                     "steps": [
//                         {
//                             "number": 1,
//                             "step": "Saut` the onion and the bacon with the olive oil in a large skillet, over medium high heat.When the bacon is slightly crisp add the chicken livers. Stir well.",
//                             "ingredients": [
//                                 {
//                                     "id": 5027,
//                                     "name": "chicken liver",
//                                     "localizedName": "chicken liver",
//                                     "image": "chicken-liver.jpg"
//                                 },
//                                 {
//                                     "id": 4053,
//                                     "name": "olive oil",
//                                     "localizedName": "olive oil",
//                                     "image": "olive-oil.jpg"
//                                 },
//                                 {
//                                     "id": 10123,
//                                     "name": "bacon",
//                                     "localizedName": "bacon",
//                                     "image": "raw-bacon.png"
//                                 },
//                                 {
//                                     "id": 11282,
//                                     "name": "onion",
//                                     "localizedName": "onion",
//                                     "image": "brown-onion.png"
//                                 }
//                             ],
//                             "equipment": [
//                                 {
//                                     "id": 404645,
//                                     "name": "frying pan",
//                                     "localizedName": "frying pan",
//                                     "image": "pan.png"
//                                 }
//                             ]
//                         },
//                         {
//                             "number": 2,
//                             "step": "Add the balsamic vinegar and continue to cook slowly.",
//                             "ingredients": [
//                                 {
//                                     "id": 2069,
//                                     "name": "balsamic vinegar",
//                                     "localizedName": "balsamic vinegar",
//                                     "image": "balsamic-vinegar.jpg"
//                                 }
//                             ],
//                             "equipment": []
//                         },
//                         {
//                             "number": 3,
//                             "step": "Add more vinegar if necessary.",
//                             "ingredients": [
//                                 {
//                                     "id": 2053,
//                                     "name": "vinegar",
//                                     "localizedName": "vinegar",
//                                     "image": "vinegar-(white).jpg"
//                                 }
//                             ],
//                             "equipment": []
//                         },
//                         {
//                             "number": 4,
//                             "step": "Serve warm over a bed of lettuce.",
//                             "ingredients": [
//                                 {
//                                     "id": 11252,
//                                     "name": "lettuce",
//                                     "localizedName": "lettuce",
//                                     "image": "iceberg-lettuce.jpg"
//                                 }
//                             ],
//                             "equipment": []
//                         }
//                     ]
//                 }
//             ],
//             "spoonacularScore": 93.92306518554688,
//             "spoonacularSourceUrl": "https://spoonacular.com/chicken-liver-salad-638166",
//             "nutrition": {
//                 "nutrients": [
//                     {
//                         "name": "Protein",
//                         "amount": 44.6236,
//                         "unit": "g"
//                     }
//                 ]
//             }
//         },
//         {
//             "vegetarian": false,
//             "vegan": false,
//             "glutenFree": false,
//             "dairyFree": false,
//             "veryHealthy": false,
//             "cheap": false,
//             "veryPopular": false,
//             "sustainable": false,
//             "lowFodmap": false,
//             "weightWatcherSmartPoints": 12,
//             "gaps": "no",
//             "preparationMinutes": -1,
//             "cookingMinutes": -1,
//             "aggregateLikes": 1,
//             "healthScore": 13,
//             "creditsText": "foodista.com",
//             "sourceName": "foodista.com",
//             "pricePerServing": 189.53,
//             "id": 638263,
//             "title": "Chicken Pita Fajita",
//             "readyInMinutes": 45,
//             "servings": 4,
//             "sourceUrl": "https://www.foodista.com/recipe/3V2CZ68L/chicken-pita-fajita",
//             "image": "https://spoonacular.com/recipeImages/638263-312x231.jpg",
//             "imageType": "jpg",
//             "summary": "Chicken Pita Fajita might be just the <b>Mexican</b> recipe you are searching for. For <b>$1.9 per serving</b>, this recipe <b>covers 18%</b> of your daily requirements of vitamins and minerals. This recipe serves 4. One serving contains <b>449 calories</b>, <b>28g of protein</b>, and <b>9g of fat</b>. Not a lot of people made this recipe, and 1 would say it hit the spot. It is brought to you by Foodista. It works best as a main course, and is done in around <b>45 minutes</b>. If you have smidgen of salt, cheddar cheese, cream, and a few other ingredients on hand, you can make it. Taking all factors into account, this recipe <b>earns a spoonacular score of 51%</b>, which is good. If you like this recipe, take a look at these similar recipes: <a href=\"https://spoonacular.com/recipes/fast-fajita-pita-416192\">Fast Fajita Pita</a>, <a href=\"https://spoonacular.com/recipes/skirt-steak-fajita-pita-with-chimichurri-330133\">Skirt Steak Fajita Pita with Chimichurri</a>, and <a href=\"https://spoonacular.com/recipes/fajita-burgers-and-pita-chips-with-black-bean-hummus-516146\">Fajita Burgers and Pita Chips with Black Bean Hummus</a>.",
//             "cuisines": [
//                 "Mexican"
//             ],
//             "dishTypes": [
//                 "lunch",
//                 "main course",
//                 "main dish",
//                 "dinner"
//             ],
//             "diets": [],
//             "occasions": [],
//             "analyzedInstructions": [
//                 {
//                     "name": "",
//                     "steps": [
//                         {
//                             "number": 1,
//                             "step": "In a small pan, put in the chicken stock and bring to a boil.",
//                             "ingredients": [
//                                 {
//                                     "id": 6172,
//                                     "name": "chicken stock",
//                                     "localizedName": "chicken stock",
//                                     "image": "chicken-broth.png"
//                                 }
//                             ],
//                             "equipment": [
//                                 {
//                                     "id": 404645,
//                                     "name": "frying pan",
//                                     "localizedName": "frying pan",
//                                     "image": "pan.png"
//                                 }
//                             ]
//                         },
//                         {
//                             "number": 2,
//                             "step": "Add in a touch of salt to flavor, and stir in the rice. Keep on medium heat and stir occasionally while the rice cooks. Once the rice has absorbed all of the chicken broth, stir in the black beans.",
//                             "ingredients": [
//                                 {
//                                     "id": 6194,
//                                     "name": "chicken broth",
//                                     "localizedName": "chicken broth",
//                                     "image": "chicken-broth.png"
//                                 },
//                                 {
//                                     "id": 16015,
//                                     "name": "black beans",
//                                     "localizedName": "black beans",
//                                     "image": "black-beans.jpg"
//                                 },
//                                 {
//                                     "id": 20444,
//                                     "name": "rice",
//                                     "localizedName": "rice",
//                                     "image": "uncooked-white-rice.png"
//                                 },
//                                 {
//                                     "id": 2047,
//                                     "name": "salt",
//                                     "localizedName": "salt",
//                                     "image": "salt.jpg"
//                                 }
//                             ],
//                             "equipment": []
//                         },
//                         {
//                             "number": 3,
//                             "step": "Bring a small skillet up to medium heat, add in the Tyson Grilled & Ready strips, and allow to cook about 3-5 minutes per side.",
//                             "ingredients": [],
//                             "equipment": [
//                                 {
//                                     "id": 404645,
//                                     "name": "frying pan",
//                                     "localizedName": "frying pan",
//                                     "image": "pan.png"
//                                 }
//                             ],
//                             "length": {
//                                 "number": 5,
//                                 "unit": "minutes"
//                             }
//                         },
//                         {
//                             "number": 4,
//                             "step": "For folks who want an extra \"POW!\" this is the perfect time to dice up some green pepper and onion and add to the skillet. Watch until they are golden on the outside. I take them off of the heat and mix them in with the rice and bean mixture.",
//                             "ingredients": [
//                                 {
//                                     "id": 11333,
//                                     "name": "green pepper",
//                                     "localizedName": "green pepper",
//                                     "image": "green-pepper.jpg"
//                                 },
//                                 {
//                                     "id": 11282,
//                                     "name": "onion",
//                                     "localizedName": "onion",
//                                     "image": "brown-onion.png"
//                                 },
//                                 {
//                                     "id": 20444,
//                                     "name": "rice",
//                                     "localizedName": "rice",
//                                     "image": "uncooked-white-rice.png"
//                                 }
//                             ],
//                             "equipment": [
//                                 {
//                                     "id": 404645,
//                                     "name": "frying pan",
//                                     "localizedName": "frying pan",
//                                     "image": "pan.png"
//                                 }
//                             ]
//                         }
//                     ]
//                 }
//             ],
//             "spoonacularScore": 57.10954666137695,
//             "spoonacularSourceUrl": "https://spoonacular.com/chicken-pita-fajita-638263",
//             "nutrition": {
//                 "nutrients": [
//                     {
//                         "name": "Protein",
//                         "amount": 27.6826,
//                         "unit": "g"
//                     }
//                 ]
//             }
//         },
//         {
//             "vegetarian": false,
//             "vegan": false,
//             "glutenFree": false,
//             "dairyFree": false,
//             "veryHealthy": false,
//             "cheap": false,
//             "veryPopular": false,
//             "sustainable": false,
//             "lowFodmap": false,
//             "weightWatcherSmartPoints": 11,
//             "gaps": "no",
//             "preparationMinutes": -1,
//             "cookingMinutes": -1,
//             "aggregateLikes": 162,
//             "healthScore": 18,
//             "creditsText": "foodista.com",
//             "sourceName": "foodista.com",
//             "pricePerServing": 181.1,
//             "id": 638035,
//             "title": "Chicken Cordon Bleu",
//             "readyInMinutes": 45,
//             "servings": 6,
//             "sourceUrl": "http://www.foodista.com/recipe/KFDCB2XH/chicken-cordon-bleu",
//             "image": "https://spoonacular.com/recipeImages/638035-312x231.jpg",
//             "imageType": "jpg",
//             "summary": "Chicken Cordon Bleu might be a good recipe to expand your main course repertoire. For <b>$1.81 per serving</b>, this recipe <b>covers 24%</b> of your daily requirements of vitamins and minerals. This recipe makes 6 servings with <b>417 calories</b>, <b>43g of protein</b>, and <b>21g of fat</b> each. 162 people found this recipe to be delicious and satisfying. This recipe from Foodista requires kosher salt and pepper, eggs, flour, and swiss cheese. From preparation to the plate, this recipe takes approximately <b>45 minutes</b>. Overall, this recipe earns an <b>outstanding spoonacular score of 83%</b>. If you like this recipe, take a look at these similar recipes: <a href=\"https://spoonacular.com/recipes/chicken-cordon-bleu-38785\">Chicken Cordon Bleu</a>, <a href=\"https://spoonacular.com/recipes/chicken-cordon-bleu-355114\">Chicken Cordon Bleu</a>, and <a href=\"https://spoonacular.com/recipes/chicken-cordon-bleu-558701\">Chicken Cordon Bleu</a>.",
//             "cuisines": [],
//             "dishTypes": [
//                 "lunch",
//                 "main course",
//                 "main dish",
//                 "dinner"
//             ],
//             "diets": [],
//             "occasions": [],
//             "analyzedInstructions": [
//                 {
//                     "name": "",
//                     "steps": [
//                         {
//                             "number": 1,
//                             "step": "Preheat oven to 350 degrees F.Butterfly the chicken breasts by slicing half lengthwise but not cutting all the way through.",
//                             "ingredients": [
//                                 {
//                                     "id": 5062,
//                                     "name": "chicken breast",
//                                     "localizedName": "chicken breast",
//                                     "image": "chicken-breasts.png"
//                                 }
//                             ],
//                             "equipment": [
//                                 {
//                                     "id": 404784,
//                                     "name": "oven",
//                                     "localizedName": "oven",
//                                     "image": "oven.jpg",
//                                     "temperature": {
//                                         "number": 350.0,
//                                         "unit": "Fahrenheit"
//                                     }
//                                 }
//                             ]
//                         },
//                         {
//                             "number": 2,
//                             "step": "Lay the halved breasts between 2 pieces of plastic wrap. Using the flat side of a meat mallet, gently pound the chicken to 1/4-inch thickness, taking care to not tear or create holes in the meat.",
//                             "ingredients": [
//                                 {
//                                     "id": 0,
//                                     "name": "chicken",
//                                     "localizedName": "chicken",
//                                     "image": "whole-chicken.jpg"
//                                 },
//                                 {
//                                     "id": 1065062,
//                                     "name": "meat",
//                                     "localizedName": "meat",
//                                     "image": "whole-chicken.jpg"
//                                 },
//                                 {
//                                     "id": 10018364,
//                                     "name": "wrap",
//                                     "localizedName": "wrap",
//                                     "image": "flour-tortilla.jpg"
//                                 }
//                             ],
//                             "equipment": [
//                                 {
//                                     "id": 404730,
//                                     "name": "plastic wrap",
//                                     "localizedName": "plastic wrap",
//                                     "image": "plastic-wrap.jpg"
//                                 },
//                                 {
//                                     "id": 3846,
//                                     "name": "meat tenderizer",
//                                     "localizedName": "meat tenderizer",
//                                     "image": "meat-mallet.jpg"
//                                 }
//                             ]
//                         },
//                         {
//                             "number": 3,
//                             "step": "Lay 2 slices of cheese on each breast, followed by 2 slices of ham, and 2 more of cheese; leaving a 1/2-inch margin on all sides to help seal the roll. Tuck in the sides of the breast and roll up tight like a jellyroll. Squeeze the log gently to seal.Season the flour with salt and pepper; spread out on waxed paper or in a flat dish.",
//                             "ingredients": [
//                                 {
//                                     "id": 1102047,
//                                     "name": "salt and pepper",
//                                     "localizedName": "salt and pepper",
//                                     "image": "salt-and-pepper.jpg"
//                                 },
//                                 {
//                                     "id": 1041009,
//                                     "name": "cheese",
//                                     "localizedName": "cheese",
//                                     "image": "cheddar-cheese.png"
//                                 },
//                                 {
//                                     "id": 0,
//                                     "name": "spread",
//                                     "localizedName": "spread",
//                                     "image": ""
//                                 },
//                                 {
//                                     "id": 20081,
//                                     "name": "all purpose flour",
//                                     "localizedName": "all purpose flour",
//                                     "image": "flour.png"
//                                 },
//                                 {
//                                     "id": 0,
//                                     "name": "roll",
//                                     "localizedName": "roll",
//                                     "image": "dinner-yeast-rolls.jpg"
//                                 },
//                                 {
//                                     "id": 10151,
//                                     "name": "ham",
//                                     "localizedName": "ham",
//                                     "image": "ham-whole.jpg"
//                                 }
//                             ],
//                             "equipment": []
//                         },
//                         {
//                             "number": 4,
//                             "step": "Mix the breadcrumbs with thyme, kosher salt, pepper, and oil. The oil will help the crust brown. Beat together the eggs and water, the mixture should be fluid. Lightly dust the chicken with flour, then dip in the egg mixture. Gently coat in the bread crumbs.Carefully transfer the roulades to a baking pan and bake for 20 minutes until browned and cooked through.",
//                             "ingredients": [
//                                 {
//                                     "id": 18079,
//                                     "name": "breadcrumbs",
//                                     "localizedName": "breadcrumbs",
//                                     "image": "breadcrumbs.jpg"
//                                 },
//                                 {
//                                     "id": 1082047,
//                                     "name": "kosher salt",
//                                     "localizedName": "kosher salt",
//                                     "image": "salt.jpg"
//                                 },
//                                 {
//                                     "id": 0,
//                                     "name": "chicken",
//                                     "localizedName": "chicken",
//                                     "image": "whole-chicken.jpg"
//                                 },
//                                 {
//                                     "id": 1002030,
//                                     "name": "pepper",
//                                     "localizedName": "pepper",
//                                     "image": "pepper.jpg"
//                                 },
//                                 {
//                                     "id": 0,
//                                     "name": "crust",
//                                     "localizedName": "crust",
//                                     "image": ""
//                                 },
//                                 {
//                                     "id": 20081,
//                                     "name": "all purpose flour",
//                                     "localizedName": "all purpose flour",
//                                     "image": "flour.png"
//                                 },
//                                 {
//                                     "id": 2049,
//                                     "name": "thyme",
//                                     "localizedName": "thyme",
//                                     "image": "thyme.jpg"
//                                 },
//                                 {
//                                     "id": 14412,
//                                     "name": "water",
//                                     "localizedName": "water",
//                                     "image": "water.png"
//                                 },
//                                 {
//                                     "id": 1123,
//                                     "name": "egg",
//                                     "localizedName": "egg",
//                                     "image": "egg.png"
//                                 },
//                                 {
//                                     "id": 0,
//                                     "name": "dip",
//                                     "localizedName": "dip",
//                                     "image": ""
//                                 },
//                                 {
//                                     "id": 4582,
//                                     "name": "cooking oil",
//                                     "localizedName": "cooking oil",
//                                     "image": "vegetable-oil.jpg"
//                                 }
//                             ],
//                             "equipment": [
//                                 {
//                                     "id": 404646,
//                                     "name": "baking pan",
//                                     "localizedName": "baking pan",
//                                     "image": "roasting-pan.jpg"
//                                 },
//                                 {
//                                     "id": 404784,
//                                     "name": "oven",
//                                     "localizedName": "oven",
//                                     "image": "oven.jpg"
//                                 }
//                             ],
//                             "length": {
//                                 "number": 20,
//                                 "unit": "minutes"
//                             }
//                         },
//                         {
//                             "number": 5,
//                             "step": "Serve whole or cut into pinwheels.",
//                             "ingredients": [],
//                             "equipment": []
//                         }
//                     ]
//                 }
//             ],
//             "spoonacularScore": 83.03170013427734,
//             "spoonacularSourceUrl": "https://spoonacular.com/chicken-cordon-bleu-638035",
//             "nutrition": {
//                 "nutrients": [
//                     {
//                         "name": "Protein",
//                         "amount": 42.978,
//                         "unit": "g"
//                     }
//                 ]
//             }
//         },
//         {
//             "vegetarian": false,
//             "vegan": false,
//             "glutenFree": true,
//             "dairyFree": false,
//             "veryHealthy": false,
//             "cheap": false,
//             "veryPopular": false,
//             "sustainable": false,
//             "lowFodmap": false,
//             "weightWatcherSmartPoints": 6,
//             "gaps": "no",
//             "preparationMinutes": -1,
//             "cookingMinutes": -1,
//             "aggregateLikes": 1,
//             "healthScore": 24,
//             "creditsText": "foodista.com",
//             "sourceName": "foodista.com",
//             "pricePerServing": 139.62,
//             "id": 636682,
//             "title": "Chicken Caesar Salad",
//             "readyInMinutes": 45,
//             "servings": 2,
//             "sourceUrl": "http://www.foodista.com/recipe/HSP3BYFZ/caesar-chicken-salad",
//             "image": "https://spoonacular.com/recipeImages/636682-312x231.jpg",
//             "imageType": "jpg",
//             "summary": "Chicken Caesar Salad might be just the main course you are searching for. For <b>$1.4 per serving</b>, this recipe <b>covers 24%</b> of your daily requirements of vitamins and minerals. This recipe makes 2 servings with <b>293 calories</b>, <b>31g of protein</b>, and <b>16g of fat</b> each. Not a lot of people made this recipe, and 1 would say it hit the spot. Head to the store and pick up romaine lettuce leaves, scallion, chicken, and a few other things to make it today. From preparation to the plate, this recipe takes approximately <b>45 minutes</b>. It is a <b>rather inexpensive</b> recipe for fans of American food. It is brought to you by Foodista. It is a good option if you're following a <b>gluten free</b> diet. All things considered, we decided this recipe <b>deserves a spoonacular score of 68%</b>. This score is solid. <a href=\"https://spoonacular.com/recipes/chicken-caesar-salad-with-garlic-croutons-and-light-caesar-dressing-1328203\">Chicken Caesar Salad with Garlic Croutons {and Light Caesar Dressing}</a>, <a href=\"https://spoonacular.com/recipes/chicken-caesar-salad-with-garlic-croutons-and-light-caesar-dressing-626015\">Chicken Caesar Salad with Garlic Croutons {and Light Caesar Dressing}</a>, and <a href=\"https://spoonacular.com/recipes/chicken-caesar-pasta-salad-with-light-caesar-dressing-606923\">Chicken Caesar Pasta Salad with Light Caesar Dressing</a> are very similar to this recipe.",
//             "cuisines": [
//                 "American"
//             ],
//             "dishTypes": [
//                 "side dish",
//                 "lunch",
//                 "main course",
//                 "salad",
//                 "main dish",
//                 "dinner"
//             ],
//             "diets": [
//                 "gluten free"
//             ],
//             "occasions": [],
//             "analyzedInstructions": [
//                 {
//                     "name": "",
//                     "steps": [
//                         {
//                             "number": 1,
//                             "step": "Rub a medium wooden bowl with cut side of garlic clove and discard garlic; add lemon juice, mayonnaise, and cheese to bowl and stir to combine.",
//                             "ingredients": [
//                                 {
//                                     "id": 10211215,
//                                     "name": "whole garlic cloves",
//                                     "localizedName": "whole garlic cloves",
//                                     "image": "garlic.jpg"
//                                 },
//                                 {
//                                     "id": 9152,
//                                     "name": "lemon juice",
//                                     "localizedName": "lemon juice",
//                                     "image": "lemon-juice.jpg"
//                                 },
//                                 {
//                                     "id": 4025,
//                                     "name": "mayonnaise",
//                                     "localizedName": "mayonnaise",
//                                     "image": "mayonnaise.png"
//                                 },
//                                 {
//                                     "id": 1041009,
//                                     "name": "cheese",
//                                     "localizedName": "cheese",
//                                     "image": "cheddar-cheese.png"
//                                 },
//                                 {
//                                     "id": 11215,
//                                     "name": "garlic",
//                                     "localizedName": "garlic",
//                                     "image": "garlic.png"
//                                 },
//                                 {
//                                     "id": 1012034,
//                                     "name": "dry seasoning rub",
//                                     "localizedName": "dry seasoning rub",
//                                     "image": "seasoning.png"
//                                 }
//                             ],
//                             "equipment": [
//                                 {
//                                     "id": 404783,
//                                     "name": "bowl",
//                                     "localizedName": "bowl",
//                                     "image": "bowl.jpg"
//                                 }
//                             ]
//                         },
//                         {
//                             "number": 2,
//                             "step": "Add remaining ingredients except lettuce and mix well; line serving platter with lettuce and top with chicken mixture.",
//                             "ingredients": [
//                                 {
//                                     "id": 0,
//                                     "name": "chicken",
//                                     "localizedName": "chicken",
//                                     "image": "whole-chicken.jpg"
//                                 },
//                                 {
//                                     "id": 11252,
//                                     "name": "lettuce",
//                                     "localizedName": "lettuce",
//                                     "image": "iceberg-lettuce.jpg"
//                                 }
//                             ],
//                             "equipment": []
//                         }
//                     ]
//                 }
//             ],
//             "spoonacularScore": 70.90864562988281,
//             "spoonacularSourceUrl": "https://spoonacular.com/chicken-caesar-salad-636682",
//             "nutrition": {
//                 "nutrients": [
//                     {
//                         "name": "Protein",
//                         "amount": 31.2449,
//                         "unit": "g"
//                     }
//                 ]
//             }
//         },
//         {
//             "vegetarian": false,
//             "vegan": false,
//             "glutenFree": true,
//             "dairyFree": true,
//             "veryHealthy": false,
//             "cheap": false,
//             "veryPopular": false,
//             "sustainable": false,
//             "lowFodmap": false,
//             "weightWatcherSmartPoints": 4,
//             "gaps": "no",
//             "preparationMinutes": -1,
//             "cookingMinutes": -1,
//             "aggregateLikes": 1,
//             "healthScore": 54,
//             "creditsText": "jeremyzkc",
//             "license": "spoonacular's terms",
//             "sourceName": "spoonacular",
//             "pricePerServing": 326.88,
//             "id": 630484,
//             "title": "Chicken shish kabobs",
//             "author": "jeremyzkc",
//             "readyInMinutes": 50,
//             "servings": 2,
//             "sourceUrl": "https://spoonacular.com/-1426597077324",
//             "image": "https://spoonacular.com/recipeImages/630484-312x231.jpg",
//             "imageType": "jpg",
//             "summary": "Chicken shish kabobs is a main course that serves 2. One serving contains <b>312 calories</b>, <b>39g of protein</b>, and <b>5g of fat</b>. For <b>$3.27 per serving</b>, this recipe <b>covers 38%</b> of your daily requirements of vitamins and minerals. From preparation to the plate, this recipe takes roughly <b>50 minutes</b>. It is brought to you by spoonacular user <a href=\"/profile/jeremyzkc\">jeremyzkc</a>. Head to the store and pick up tomato, zucchini, salt, and a few other things to make it today. It is a good option if you're following a <b>gluten free and dairy free</b> diet. Try <a href=\"https://spoonacular.com/recipes/chicken-and-vegetable-shish-kabobs-510665\">Chicken and Vegetable Shish Kabobs</a>, <a href=\"https://spoonacular.com/recipes/chicken-and-bacon-shish-kabobs-526216\">Chicken and Bacon Shish Kabobs</a>, and <a href=\"https://spoonacular.com/recipes/sweet-sour-chicken-shish-kabobs-83051\">Sweet & Sour Chicken Shish Kabobs</a> for similar recipes.",
//             "cuisines": [],
//             "dishTypes": [
//                 "lunch",
//                 "main course",
//                 "main dish",
//                 "dinner"
//             ],
//             "diets": [
//                 "gluten free",
//                 "dairy free"
//             ],
//             "occasions": [],
//             "analyzedInstructions": [
//                 {
//                     "name": "",
//                     "steps": [
//                         {
//                             "number": 1,
//                             "step": "Mix the ingredients for the marinade in a bowl.Wash the chicken breast fillets, cut them in bite-sized cubs and put them in the marinade bowl. Marinate the meat at least 1 hour before cooking in refrigerator.Preheat the oven to 190°C/375°F. Soak the wooden kabob skewers in water, while you are preparing the vegetables.Right before the grilling, wash the vegetables and chop them into uniform sized pieces (1 inch slices).",
//                             "ingredients": [
//                                 {
//                                     "id": 1055062,
//                                     "name": "boneless skinless chicken breast",
//                                     "localizedName": "boneless skinless chicken breast",
//                                     "image": "chicken-breasts.png"
//                                 },
//                                 {
//                                     "id": 11583,
//                                     "name": "vegetable",
//                                     "localizedName": "vegetable",
//                                     "image": "mixed-vegetables.png"
//                                 },
//                                 {
//                                     "id": 0,
//                                     "name": "marinade",
//                                     "localizedName": "marinade",
//                                     "image": "seasoning.png"
//                                 },
//                                 {
//                                     "id": 14412,
//                                     "name": "water",
//                                     "localizedName": "water",
//                                     "image": "water.png"
//                                 },
//                                 {
//                                     "id": 1065062,
//                                     "name": "meat",
//                                     "localizedName": "meat",
//                                     "image": "whole-chicken.jpg"
//                                 }
//                             ],
//                             "equipment": [
//                                 {
//                                     "id": 3065,
//                                     "name": "skewers",
//                                     "localizedName": "skewers",
//                                     "image": "wooden-skewers.jpg"
//                                 },
//                                 {
//                                     "id": 404783,
//                                     "name": "bowl",
//                                     "localizedName": "bowl",
//                                     "image": "bowl.jpg"
//                                 },
//                                 {
//                                     "id": 404784,
//                                     "name": "oven",
//                                     "localizedName": "oven",
//                                     "image": "oven.jpg",
//                                     "temperature": {
//                                         "number": 190.0,
//                                         "unit": "Celsius"
//                                     }
//                                 }
//                             ],
//                             "length": {
//                                 "number": 60,
//                                 "unit": "minutes"
//                             }
//                         },
//                         {
//                             "number": 2,
//                             "step": "Cut the smocked sausage in thin slices.Thread the marinated chicken breast cubs, sausage slices and the vegetables onto soaked wooden skewers, alternating the meat and vegetables. Feel free to arrange the kabobs as you want. Leave about 1 inch /3 cm of skewer at one and, so you can hold on them and flip them.",
//                             "ingredients": [
//                                 {
//                                     "id": 5062,
//                                     "name": "chicken breast",
//                                     "localizedName": "chicken breast",
//                                     "image": "chicken-breasts.png"
//                                 },
//                                 {
//                                     "id": 11583,
//                                     "name": "vegetable",
//                                     "localizedName": "vegetable",
//                                     "image": "mixed-vegetables.png"
//                                 },
//                                 {
//                                     "id": 1017063,
//                                     "name": "sausage",
//                                     "localizedName": "sausage",
//                                     "image": "raw-pork-sausage.png"
//                                 },
//                                 {
//                                     "id": 1065062,
//                                     "name": "meat",
//                                     "localizedName": "meat",
//                                     "image": "whole-chicken.jpg"
//                                 }
//                             ],
//                             "equipment": [
//                                 {
//                                     "id": 405601,
//                                     "name": "wooden skewers",
//                                     "localizedName": "wooden skewers",
//                                     "image": "wooden-skewers.jpg"
//                                 },
//                                 {
//                                     "id": 3065,
//                                     "name": "skewers",
//                                     "localizedName": "skewers",
//                                     "image": "wooden-skewers.jpg"
//                                 }
//                             ]
//                         },
//                         {
//                             "number": 3,
//                             "step": "Place the chicken shish kabobs on a baking tray and put them in the oven.",
//                             "ingredients": [
//                                 {
//                                     "id": 0,
//                                     "name": "chicken",
//                                     "localizedName": "chicken",
//                                     "image": "whole-chicken.jpg"
//                                 }
//                             ],
//                             "equipment": [
//                                 {
//                                     "id": 404646,
//                                     "name": "baking pan",
//                                     "localizedName": "baking pan",
//                                     "image": "roasting-pan.jpg"
//                                 },
//                                 {
//                                     "id": 404784,
//                                     "name": "oven",
//                                     "localizedName": "oven",
//                                     "image": "oven.jpg"
//                                 }
//                             ]
//                         },
//                         {
//                             "number": 4,
//                             "step": "Bake for 10 minutes, then flip them, and bake for 10 minutes, until the chicken is cooked through and vegetables are tender.",
//                             "ingredients": [
//                                 {
//                                     "id": 11583,
//                                     "name": "vegetable",
//                                     "localizedName": "vegetable",
//                                     "image": "mixed-vegetables.png"
//                                 },
//                                 {
//                                     "id": 0,
//                                     "name": "chicken",
//                                     "localizedName": "chicken",
//                                     "image": "whole-chicken.jpg"
//                                 }
//                             ],
//                             "equipment": [
//                                 {
//                                     "id": 404784,
//                                     "name": "oven",
//                                     "localizedName": "oven",
//                                     "image": "oven.jpg"
//                                 }
//                             ],
//                             "length": {
//                                 "number": 20,
//                                 "unit": "minutes"
//                             }
//                         },
//                         {
//                             "number": 5,
//                             "step": "Transfer the skewers to a plate.",
//                             "ingredients": [],
//                             "equipment": [
//                                 {
//                                     "id": 3065,
//                                     "name": "skewers",
//                                     "localizedName": "skewers",
//                                     "image": "wooden-skewers.jpg"
//                                 }
//                             ]
//                         },
//                         {
//                             "number": 6,
//                             "step": "Serve the kabobs warm with baked potato and sauce.If you grill the kabobs on BBQ, the meat and the vegetables will have a better smocked flavor. The way of grilling the kabobs is the same as the baking them in oven, you just have to flip them frequently, careful to not break the skewers.Enjoy!",
//                             "ingredients": [
//                                 {
//                                     "id": 11583,
//                                     "name": "vegetable",
//                                     "localizedName": "vegetable",
//                                     "image": "mixed-vegetables.png"
//                                 },
//                                 {
//                                     "id": 11352,
//                                     "name": "potato",
//                                     "localizedName": "potato",
//                                     "image": "potatoes-yukon-gold.png"
//                                 },
//                                 {
//                                     "id": 0,
//                                     "name": "sauce",
//                                     "localizedName": "sauce",
//                                     "image": ""
//                                 },
//                                 {
//                                     "id": 1065062,
//                                     "name": "meat",
//                                     "localizedName": "meat",
//                                     "image": "whole-chicken.jpg"
//                                 }
//                             ],
//                             "equipment": [
//                                 {
//                                     "id": 3065,
//                                     "name": "skewers",
//                                     "localizedName": "skewers",
//                                     "image": "wooden-skewers.jpg"
//                                 },
//                                 {
//                                     "id": 404706,
//                                     "name": "grill",
//                                     "localizedName": "grill",
//                                     "image": "grill.jpg"
//                                 },
//                                 {
//                                     "id": 404784,
//                                     "name": "oven",
//                                     "localizedName": "oven",
//                                     "image": "oven.jpg"
//                                 }
//                             ]
//                         }
//                     ]
//                 }
//             ],
//             "spoonacularScore": 89.32302856445312,
//             "spoonacularSourceUrl": "https://spoonacular.com/chicken-shish-kabobs-630484",
//             "nutrition": {
//                 "nutrients": [
//                     {
//                         "name": "Protein",
//                         "amount": 38.6187,
//                         "unit": "g"
//                     }
//                 ]
//             }
//         },
//         {
//             "vegetarian": false,
//             "vegan": false,
//             "glutenFree": true,
//             "dairyFree": true,
//             "veryHealthy": false,
//             "cheap": false,
//             "veryPopular": false,
//             "sustainable": false,
//             "lowFodmap": false,
//             "weightWatcherSmartPoints": 8,
//             "gaps": "no",
//             "preparationMinutes": -1,
//             "cookingMinutes": -1,
//             "aggregateLikes": 0,
//             "healthScore": 17,
//             "creditsText": "Pick Fresh Foods",
//             "license": "CC BY 3.0",
//             "sourceName": "Pick Fresh Foods",
//             "pricePerServing": 207.71,
//             "id": 918033,
//             "title": "Chicken Spring Rolls",
//             "readyInMinutes": 45,
//             "servings": 4,
//             "sourceUrl": "https://pickfreshfoods.com/chicken-spring-rolls/",
//             "image": "https://spoonacular.com/recipeImages/918033-312x231.jpg",
//             "imageType": "jpg",
//             "summary": "Need a <b>gluten free and dairy free hor d'oeuvre</b>? Chicken Spring Rolls could be an outstanding recipe to try. One serving contains <b>337 calories</b>, <b>28g of protein</b>, and <b>11g of fat</b>. This recipe serves 4. For <b>$2.08 per serving</b>, this recipe <b>covers 23%</b> of your daily requirements of vitamins and minerals. If you have rice paper wrappers, garlic clove, rice wine vinegar, and a few other ingredients on hand, you can make it. 1 person were impressed by this recipe. From preparation to the plate, this recipe takes about <b>45 minutes</b>. Not a lot of people really liked this Vietnamese dish. It will be a hit at your <b>Spring</b> event. It is brought to you by Pick Fresh Foods. All things considered, we decided this recipe <b>deserves a spoonacular score of 56%</b>. This score is solid. If you like this recipe, take a look at these similar recipes: <a href=\"https://spoonacular.com/recipes/chicken-spring-rolls-94352\">Chicken Spring Rolls</a>, <a href=\"https://spoonacular.com/recipes/baked-chicken-spring-rolls-582324\">Baked Chicken Spring Rolls</a>, and <a href=\"https://spoonacular.com/recipes/chinese-chicken-spring-rolls-1297957\">Chinese Chicken Spring Rolls</a>.",
//             "cuisines": [
//                 "Vietnamese",
//                 "Asian"
//             ],
//             "dishTypes": [
//                 "fingerfood",
//                 "antipasti",
//                 "starter",
//                 "snack",
//                 "appetizer",
//                 "antipasto",
//                 "hor d'oeuvre"
//             ],
//             "diets": [
//                 "gluten free",
//                 "dairy free"
//             ],
//             "occasions": [
//                 "spring",
//                 "easter"
//             ],
//             "analyzedInstructions": [
//                 {
//                     "name": "",
//                     "steps": [
//                         {
//                             "number": 1,
//                             "step": "Marinate the chicken with soy sauce, garlic, and black pepper in a bowl for 5 minutes.",
//                             "ingredients": [
//                                 {
//                                     "id": 1002030,
//                                     "name": "black pepper",
//                                     "localizedName": "black pepper",
//                                     "image": "pepper.jpg"
//                                 },
//                                 {
//                                     "id": 16124,
//                                     "name": "soy sauce",
//                                     "localizedName": "soy sauce",
//                                     "image": "soy-sauce.jpg"
//                                 },
//                                 {
//                                     "id": 0,
//                                     "name": "chicken",
//                                     "localizedName": "chicken",
//                                     "image": "whole-chicken.jpg"
//                                 },
//                                 {
//                                     "id": 11215,
//                                     "name": "garlic",
//                                     "localizedName": "garlic",
//                                     "image": "garlic.png"
//                                 }
//                             ],
//                             "equipment": [
//                                 {
//                                     "id": 404783,
//                                     "name": "bowl",
//                                     "localizedName": "bowl",
//                                     "image": "bowl.jpg"
//                                 }
//                             ],
//                             "length": {
//                                 "number": 5,
//                                 "unit": "minutes"
//                             }
//                         },
//                         {
//                             "number": 2,
//                             "step": "Heat a large skillet over medium high heat with 1 tsp of vegetable oil.",
//                             "ingredients": [
//                                 {
//                                     "id": 4669,
//                                     "name": "vegetable oil",
//                                     "localizedName": "vegetable oil",
//                                     "image": "vegetable-oil.jpg"
//                                 }
//                             ],
//                             "equipment": [
//                                 {
//                                     "id": 404645,
//                                     "name": "frying pan",
//                                     "localizedName": "frying pan",
//                                     "image": "pan.png"
//                                 }
//                             ]
//                         },
//                         {
//                             "number": 3,
//                             "step": "Add the ground chicken, cook through.",
//                             "ingredients": [
//                                 {
//                                     "id": 5332,
//                                     "name": "ground chicken",
//                                     "localizedName": "ground chicken",
//                                     "image": "meat-ground.jpg"
//                                 }
//                             ],
//                             "equipment": []
//                         },
//                         {
//                             "number": 4,
//                             "step": "Add sweet chili sauce and broccoli slaw.",
//                             "ingredients": [
//                                 {
//                                     "id": 98962,
//                                     "name": "sweet chili sauce",
//                                     "localizedName": "sweet chili sauce",
//                                     "image": "fish-sauce.jpg"
//                                 },
//                                 {
//                                     "id": 11741,
//                                     "name": "broccoli slaw",
//                                     "localizedName": "broccoli slaw",
//                                     "image": "slaw-mix.png"
//                                 }
//                             ],
//                             "equipment": []
//                         },
//                         {
//                             "number": 5,
//                             "step": "Pour soy over the vegetables, toss to combine.Cook until vegetables are heated, but still firm.Fill a 9-inch pie pan half full with warm water (110 F).Quickly run 2 full size paper towels under the water faucet. Gently squeeze together to wet the entire are of the towels. Shake out, separate, and lay flat on the counter next to the pie plate.One at a time submerge rice wrapper in the water. Soak for 10-12 seconds or until pliable.",
//                             "ingredients": [
//                                 {
//                                     "id": 11583,
//                                     "name": "vegetable",
//                                     "localizedName": "vegetable",
//                                     "image": "mixed-vegetables.png"
//                                 },
//                                 {
//                                     "id": 0,
//                                     "name": "shake",
//                                     "localizedName": "shake",
//                                     "image": ""
//                                 },
//                                 {
//                                     "id": 14412,
//                                     "name": "water",
//                                     "localizedName": "water",
//                                     "image": "water.png"
//                                 },
//                                 {
//                                     "id": 20444,
//                                     "name": "rice",
//                                     "localizedName": "rice",
//                                     "image": "uncooked-white-rice.png"
//                                 }
//                             ],
//                             "equipment": [
//                                 {
//                                     "id": 405895,
//                                     "name": "paper towels",
//                                     "localizedName": "paper towels",
//                                     "image": "paper-towels.jpg"
//                                 },
//                                 {
//                                     "id": 405915,
//                                     "name": "pie form",
//                                     "localizedName": "pie form",
//                                     "image": "pie-pan.png"
//                                 }
//                             ]
//                         },
//                         {
//                             "number": 6,
//                             "step": "Place soften wrapper on the wet towel.",
//                             "ingredients": [],
//                             "equipment": []
//                         },
//                         {
//                             "number": 7,
//                             "step": "Add  cup of filling to the center of the wrapper.Fold the bottom end over the chicken and give a gentle squeeze to compact the filling.Fold the sides tightly toward the center.Lastly, roll from the bottom upward to create the roll.Cover completed roll with the other damp towel.Keep covered until ready to be served.",
//                             "ingredients": [
//                                 {
//                                     "id": 0,
//                                     "name": "chicken",
//                                     "localizedName": "chicken",
//                                     "image": "whole-chicken.jpg"
//                                 },
//                                 {
//                                     "id": 0,
//                                     "name": "roll",
//                                     "localizedName": "roll",
//                                     "image": "dinner-yeast-rolls.jpg"
//                                 }
//                             ],
//                             "equipment": []
//                         },
//                         {
//                             "number": 8,
//                             "step": "Serve warm with dipping sauce.",
//                             "ingredients": [
//                                 {
//                                     "id": 0,
//                                     "name": "dipping sauce",
//                                     "localizedName": "dipping sauce",
//                                     "image": ""
//                                 }
//                             ],
//                             "equipment": []
//                         },
//                         {
//                             "number": 9,
//                             "step": "Combine the remaining ingredients in a small bowl.",
//                             "ingredients": [],
//                             "equipment": [
//                                 {
//                                     "id": 404783,
//                                     "name": "bowl",
//                                     "localizedName": "bowl",
//                                     "image": "bowl.jpg"
//                                 }
//                             ]
//                         },
//                         {
//                             "number": 10,
//                             "step": "Whisk sauce to ether until smooth.",
//                             "ingredients": [
//                                 {
//                                     "id": 0,
//                                     "name": "sauce",
//                                     "localizedName": "sauce",
//                                     "image": ""
//                                 }
//                             ],
//                             "equipment": [
//                                 {
//                                     "id": 404661,
//                                     "name": "whisk",
//                                     "localizedName": "whisk",
//                                     "image": "whisk.png"
//                                 }
//                             ]
//                         },
//                         {
//                             "number": 11,
//                             "step": "Pour into serving bowls.",
//                             "ingredients": [],
//                             "equipment": [
//                                 {
//                                     "id": 404783,
//                                     "name": "bowl",
//                                     "localizedName": "bowl",
//                                     "image": "bowl.jpg"
//                                 }
//                             ]
//                         }
//                     ]
//                 }
//             ],
//             "spoonacularScore": 59.94233322143555,
//             "spoonacularSourceUrl": "https://spoonacular.com/chicken-spring-rolls-918033",
//             "nutrition": {
//                 "nutrients": [
//                     {
//                         "name": "Protein",
//                         "amount": 27.9584,
//                         "unit": "g"
//                     }
//                 ]
//             }
//         },
//         {
//             "vegetarian": false,
//             "vegan": false,
//             "glutenFree": false,
//             "dairyFree": false,
//             "veryHealthy": false,
//             "cheap": false,
//             "veryPopular": false,
//             "sustainable": false,
//             "lowFodmap": false,
//             "weightWatcherSmartPoints": 15,
//             "gaps": "no",
//             "preparationMinutes": -1,
//             "cookingMinutes": -1,
//             "aggregateLikes": 1,
//             "healthScore": 46,
//             "creditsText": "foodista.com",
//             "sourceName": "foodista.com",
//             "pricePerServing": 421.48,
//             "id": 638316,
//             "title": "Chicken Shawarma Bowl",
//             "readyInMinutes": 45,
//             "servings": 4,
//             "sourceUrl": "http://www.foodista.com/recipe/FYBFJS4M/chicken-shawarma-bowl",
//             "summary": "Chicken Shawarma Bowl might be just the <b>middl eastern</b> recipe you are searching for. This recipe serves 4. This main course has <b>654 calories</b>, <b>37g of protein</b>, and <b>13g of fat</b> per serving. For <b>$4.21 per serving</b>, this recipe <b>covers 40%</b> of your daily requirements of vitamins and minerals. From preparation to the plate, this recipe takes roughly <b>45 minutes</b>. Not a lot of people made this recipe, and 1 would say it hit the spot. A mixture of ground pepper, cherry tomatoes, pita bread, and a handful of other ingredients are all it takes to make this recipe so tasty. It is brought to you by Foodista. Taking all factors into account, this recipe <b>earns a spoonacular score of 83%</b>, which is outstanding. Similar recipes are <a href=\"https://spoonacular.com/recipes/easy-chicken-shawarma-bowl-recipe-1166853\">Easy Chicken Shawarma Bowl Recipe</a>, <a href=\"https://spoonacular.com/recipes/shawarma-djaj-chicken-shawarma-lebanon-middle-east-1567393\">Shawarma Djaj -- Chicken Shawarma (Lebanon -- Middle East)</a>, and <a href=\"https://spoonacular.com/recipes/shawarma-djaj-chicken-shawarma-lebanon-middle-east-102838\">Shawarma Djaj -- Chicken Shawarma (Lebanon -- Middle East)</a>.",
//             "cuisines": [
//                 "Middle Eastern"
//             ],
//             "dishTypes": [
//                 "lunch",
//                 "main course",
//                 "main dish",
//                 "dinner"
//             ],
//             "diets": [],
//             "occasions": [],
//             "analyzedInstructions": [
//                 {
//                     "name": "",
//                     "steps": [
//                         {
//                             "number": 1,
//                             "step": "Preheat oven to 400 degrees. Peel carrots. On a baking sheet toss carrots with olive oil.",
//                             "ingredients": [
//                                 {
//                                     "id": 4053,
//                                     "name": "olive oil",
//                                     "localizedName": "olive oil",
//                                     "image": "olive-oil.jpg"
//                                 },
//                                 {
//                                     "id": 11124,
//                                     "name": "carrot",
//                                     "localizedName": "carrot",
//                                     "image": "sliced-carrot.png"
//                                 }
//                             ],
//                             "equipment": [
//                                 {
//                                     "id": 404727,
//                                     "name": "baking sheet",
//                                     "localizedName": "baking sheet",
//                                     "image": "baking-sheet.jpg"
//                                 },
//                                 {
//                                     "id": 404784,
//                                     "name": "oven",
//                                     "localizedName": "oven",
//                                     "image": "oven.jpg"
//                                 }
//                             ]
//                         },
//                         {
//                             "number": 2,
//                             "step": "Add spices and toss.",
//                             "ingredients": [
//                                 {
//                                     "id": 2035,
//                                     "name": "spices",
//                                     "localizedName": "spices",
//                                     "image": "spices.png"
//                                 }
//                             ],
//                             "equipment": []
//                         },
//                         {
//                             "number": 3,
//                             "step": "Place in oven and cook for 30 minutes, flipping at 15 minutes.",
//                             "ingredients": [],
//                             "equipment": [
//                                 {
//                                     "id": 404784,
//                                     "name": "oven",
//                                     "localizedName": "oven",
//                                     "image": "oven.jpg"
//                                 }
//                             ],
//                             "length": {
//                                 "number": 45,
//                                 "unit": "minutes"
//                             }
//                         },
//                         {
//                             "number": 4,
//                             "step": "Meanwhile slice chicken breasts into 1/2 inch bite sized pieces. On a separate baking sheet, place chicken. Squeeze juice over chicken.",
//                             "ingredients": [
//                                 {
//                                     "id": 5062,
//                                     "name": "chicken breast",
//                                     "localizedName": "chicken breast",
//                                     "image": "chicken-breasts.png"
//                                 },
//                                 {
//                                     "id": 0,
//                                     "name": "chicken",
//                                     "localizedName": "chicken",
//                                     "image": "whole-chicken.jpg"
//                                 },
//                                 {
//                                     "id": 1019016,
//                                     "name": "juice",
//                                     "localizedName": "juice",
//                                     "image": "apple-juice.jpg"
//                                 }
//                             ],
//                             "equipment": [
//                                 {
//                                     "id": 404727,
//                                     "name": "baking sheet",
//                                     "localizedName": "baking sheet",
//                                     "image": "baking-sheet.jpg"
//                                 }
//                             ]
//                         },
//                         {
//                             "number": 5,
//                             "step": "Add spices and toss until evenly distributed.",
//                             "ingredients": [
//                                 {
//                                     "id": 2035,
//                                     "name": "spices",
//                                     "localizedName": "spices",
//                                     "image": "spices.png"
//                                 }
//                             ],
//                             "equipment": []
//                         },
//                         {
//                             "number": 6,
//                             "step": "Place chicken in oven and bake till chicken is cooked though, about 23 minutes. Once done, set aside and let rest.",
//                             "ingredients": [
//                                 {
//                                     "id": 0,
//                                     "name": "chicken",
//                                     "localizedName": "chicken",
//                                     "image": "whole-chicken.jpg"
//                                 }
//                             ],
//                             "equipment": [
//                                 {
//                                     "id": 404784,
//                                     "name": "oven",
//                                     "localizedName": "oven",
//                                     "image": "oven.jpg"
//                                 }
//                             ],
//                             "length": {
//                                 "number": 23,
//                                 "unit": "minutes"
//                             }
//                         },
//                         {
//                             "number": 7,
//                             "step": "As the chicken and carrots are cooking, prepare rice.",
//                             "ingredients": [
//                                 {
//                                     "id": 11124,
//                                     "name": "carrot",
//                                     "localizedName": "carrot",
//                                     "image": "sliced-carrot.png"
//                                 },
//                                 {
//                                     "id": 0,
//                                     "name": "chicken",
//                                     "localizedName": "chicken",
//                                     "image": "whole-chicken.jpg"
//                                 },
//                                 {
//                                     "id": 20444,
//                                     "name": "rice",
//                                     "localizedName": "rice",
//                                     "image": "uncooked-white-rice.png"
//                                 }
//                             ],
//                             "equipment": []
//                         },
//                         {
//                             "number": 8,
//                             "step": "Add olive oil to a medium pot on medium high heat.",
//                             "ingredients": [
//                                 {
//                                     "id": 4053,
//                                     "name": "olive oil",
//                                     "localizedName": "olive oil",
//                                     "image": "olive-oil.jpg"
//                                 }
//                             ],
//                             "equipment": [
//                                 {
//                                     "id": 404752,
//                                     "name": "pot",
//                                     "localizedName": "pot",
//                                     "image": "stock-pot.jpg"
//                                 }
//                             ]
//                         },
//                         {
//                             "number": 9,
//                             "step": "Add onion and garlic, stirring so garlic does not burn, and cook about 2 minutes.",
//                             "ingredients": [
//                                 {
//                                     "id": 11215,
//                                     "name": "garlic",
//                                     "localizedName": "garlic",
//                                     "image": "garlic.png"
//                                 },
//                                 {
//                                     "id": 11282,
//                                     "name": "onion",
//                                     "localizedName": "onion",
//                                     "image": "brown-onion.png"
//                                 }
//                             ],
//                             "equipment": [],
//                             "length": {
//                                 "number": 2,
//                                 "unit": "minutes"
//                             }
//                         },
//                         {
//                             "number": 10,
//                             "step": "Add spices and stir to distribute evenly.",
//                             "ingredients": [
//                                 {
//                                     "id": 2035,
//                                     "name": "spices",
//                                     "localizedName": "spices",
//                                     "image": "spices.png"
//                                 }
//                             ],
//                             "equipment": []
//                         },
//                         {
//                             "number": 11,
//                             "step": "Add rice, chicken broth an lemon juice. Bring to a boil and then cover and reduce to a simmer till rice is thoroughly cooked through, about 20 minutes.",
//                             "ingredients": [
//                                 {
//                                     "id": 6194,
//                                     "name": "chicken broth",
//                                     "localizedName": "chicken broth",
//                                     "image": "chicken-broth.png"
//                                 },
//                                 {
//                                     "id": 9152,
//                                     "name": "lemon juice",
//                                     "localizedName": "lemon juice",
//                                     "image": "lemon-juice.jpg"
//                                 },
//                                 {
//                                     "id": 20444,
//                                     "name": "rice",
//                                     "localizedName": "rice",
//                                     "image": "uncooked-white-rice.png"
//                                 }
//                             ],
//                             "equipment": [],
//                             "length": {
//                                 "number": 20,
//                                 "unit": "minutes"
//                             }
//                         },
//                         {
//                             "number": 12,
//                             "step": "Make Taziki: Stir together yogurt with dill, garlic powder and pepper.",
//                             "ingredients": [
//                                 {
//                                     "id": 1022020,
//                                     "name": "garlic powder",
//                                     "localizedName": "garlic powder",
//                                     "image": "garlic-powder.png"
//                                 },
//                                 {
//                                     "id": 1002030,
//                                     "name": "pepper",
//                                     "localizedName": "pepper",
//                                     "image": "pepper.jpg"
//                                 },
//                                 {
//                                     "id": 1116,
//                                     "name": "yogurt",
//                                     "localizedName": "yogurt",
//                                     "image": "plain-yogurt.jpg"
//                                 },
//                                 {
//                                     "id": 2045,
//                                     "name": "dill",
//                                     "localizedName": "dill",
//                                     "image": "dill.jpg"
//                                 }
//                             ],
//                             "equipment": []
//                         },
//                         {
//                             "number": 13,
//                             "step": "Place in refrigerator till ready to serve.",
//                             "ingredients": [],
//                             "equipment": []
//                         }
//                     ]
//                 },
//                 {
//                     "name": "Serve",
//                     "steps": [
//                         {
//                             "number": 1,
//                             "step": "Place rice on bottom, then chicken.",
//                             "ingredients": [
//                                 {
//                                     "id": 0,
//                                     "name": "chicken",
//                                     "localizedName": "chicken",
//                                     "image": "whole-chicken.jpg"
//                                 },
//                                 {
//                                     "id": 20444,
//                                     "name": "rice",
//                                     "localizedName": "rice",
//                                     "image": "uncooked-white-rice.png"
//                                 }
//                             ],
//                             "equipment": []
//                         },
//                         {
//                             "number": 2,
//                             "step": "Add dollops of hummus and taziki on top of chicken.",
//                             "ingredients": [
//                                 {
//                                     "id": 0,
//                                     "name": "chicken",
//                                     "localizedName": "chicken",
//                                     "image": "whole-chicken.jpg"
//                                 },
//                                 {
//                                     "id": 16158,
//                                     "name": "hummus",
//                                     "localizedName": "hummus",
//                                     "image": "hummus.jpg"
//                                 }
//                             ],
//                             "equipment": []
//                         },
//                         {
//                             "number": 3,
//                             "step": "Sprinkle parsley and tomatoes on top. Scoop up with pita chips, naan or pita bread.ENJOY!",
//                             "ingredients": [
//                                 {
//                                     "id": 18413,
//                                     "name": "pita",
//                                     "localizedName": "pita",
//                                     "image": "pita-bread.jpg"
//                                 },
//                                 {
//                                     "id": 25037,
//                                     "name": "pita chips",
//                                     "localizedName": "pita chips",
//                                     "image": "pita-chips.jpg"
//                                 },
//                                 {
//                                     "id": 11529,
//                                     "name": "tomato",
//                                     "localizedName": "tomato",
//                                     "image": "tomato.png"
//                                 },
//                                 {
//                                     "id": 11297,
//                                     "name": "parsley",
//                                     "localizedName": "parsley",
//                                     "image": "parsley.jpg"
//                                 },
//                                 {
//                                     "id": 93723,
//                                     "name": "naan",
//                                     "localizedName": "naan",
//                                     "image": "naan.png"
//                                 }
//                             ],
//                             "equipment": []
//                         }
//                     ]
//                 }
//             ],
//             "spoonacularScore": 75.2573471069336,
//             "spoonacularSourceUrl": "https://spoonacular.com/chicken-shawarma-bowl-638316",
//             "image": "https://spoonacular.com/recipeImages/638316-312x231.jpg",
//             "imageType": "jpg",
//             "nutrition": {
//                 "nutrients": [
//                     {
//                         "name": "Protein",
//                         "amount": 37.2008,
//                         "unit": "g"
//                     }
//                 ]
//             }
//         },
//         {
//             "vegetarian": false,
//             "vegan": false,
//             "glutenFree": true,
//             "dairyFree": false,
//             "veryHealthy": false,
//             "cheap": false,
//             "veryPopular": false,
//             "sustainable": false,
//             "lowFodmap": false,
//             "weightWatcherSmartPoints": 7,
//             "gaps": "no",
//             "preparationMinutes": -1,
//             "cookingMinutes": -1,
//             "aggregateLikes": 2,
//             "healthScore": 9,
//             "creditsText": "foodista.com",
//             "sourceName": "foodista.com",
//             "pricePerServing": 128.91,
//             "id": 638231,
//             "title": "Chicken Parmayonnaise",
//             "readyInMinutes": 45,
//             "servings": 6,
//             "sourceUrl": "http://www.foodista.com/recipe/K6D2PK26/chicken-parmayonnaise-3-ingredients-for-an-easy-night-in",
//             "image": "https://spoonacular.com/recipeImages/638231-312x231.jpg",
//             "imageType": "jpg",
//             "summary": "Chicken Parmayonnaise is a main course that serves 6. One portion of this dish contains approximately <b>27g of protein</b>, <b>19g of fat</b>, and a total of <b>289 calories</b>. For <b>$1.29 per serving</b>, this recipe <b>covers 15%</b> of your daily requirements of vitamins and minerals. Not a lot of people made this recipe, and 2 would say it hit the spot. From preparation to the plate, this recipe takes about <b>45 minutes</b>. It is brought to you by Foodista. If you have kosher salt and coarse pepper, herbs, mayonnaise, and a few other ingredients on hand, you can make it. It is a good option if you're following a <b>gluten free</b> diet. Taking all factors into account, this recipe <b>earns a spoonacular score of 48%</b>, which is solid. <a href=\"https://spoonacular.com/recipes/chicken-parmayonnaise-1189197\">Chicken Parmayonnaise</a>, <a href=\"https://spoonacular.com/recipes/i-aint-chicken-chicken-crispy-roasted-chicken-breasts-with-orange-and-cardamom-1230059\">I Ain't Chicken Chicken: Crispy Roasted Chicken Breasts with Orange and Cardamom</a>, and <a href=\"https://spoonacular.com/recipes/i-aint-chicken-chicken-crispy-roasted-chicken-breasts-with-orange-and-cardamom-310658\">I Ain't Chicken Chicken: Crispy Roasted Chicken Breasts with Orange and Cardamom</a> are very similar to this recipe.",
//             "cuisines": [],
//             "dishTypes": [
//                 "lunch",
//                 "main course",
//                 "main dish",
//                 "dinner"
//             ],
//             "diets": [
//                 "gluten free"
//             ],
//             "occasions": [],
//             "analyzedInstructions": [
//                 {
//                     "name": "",
//                     "steps": [
//                         {
//                             "number": 1,
//                             "step": "Oven to 375.Lightly pound breasts to uniform thickness ( not thin).",
//                             "ingredients": [],
//                             "equipment": [
//                                 {
//                                     "id": 404784,
//                                     "name": "oven",
//                                     "localizedName": "oven",
//                                     "image": "oven.jpg"
//                                 }
//                             ]
//                         },
//                         {
//                             "number": 2,
//                             "step": "Combine ingredients.",
//                             "ingredients": [],
//                             "equipment": []
//                         },
//                         {
//                             "number": 3,
//                             "step": "Place chicken in baking dish.",
//                             "ingredients": [
//                                 {
//                                     "id": 0,
//                                     "name": "chicken",
//                                     "localizedName": "chicken",
//                                     "image": "whole-chicken.jpg"
//                                 }
//                             ],
//                             "equipment": [
//                                 {
//                                     "id": 404646,
//                                     "name": "baking pan",
//                                     "localizedName": "baking pan",
//                                     "image": "roasting-pan.jpg"
//                                 }
//                             ]
//                         },
//                         {
//                             "number": 4,
//                             "step": "Spread mix evenly over chicken.",
//                             "ingredients": [
//                                 {
//                                     "id": 0,
//                                     "name": "chicken",
//                                     "localizedName": "chicken",
//                                     "image": "whole-chicken.jpg"
//                                 },
//                                 {
//                                     "id": 0,
//                                     "name": "spread",
//                                     "localizedName": "spread",
//                                     "image": ""
//                                 }
//                             ],
//                             "equipment": []
//                         },
//                         {
//                             "number": 5,
//                             "step": "Bake 25-30 minutes until top starts to brown.",
//                             "ingredients": [],
//                             "equipment": [
//                                 {
//                                     "id": 404784,
//                                     "name": "oven",
//                                     "localizedName": "oven",
//                                     "image": "oven.jpg"
//                                 }
//                             ],
//                             "length": {
//                                 "number": 30,
//                                 "unit": "minutes"
//                             }
//                         }
//                     ]
//                 }
//             ],
//             "spoonacularScore": 52.25740051269531,
//             "spoonacularSourceUrl": "https://spoonacular.com/chicken-parmayonnaise-638231",
//             "nutrition": {
//                 "nutrients": [
//                     {
//                         "name": "Protein",
//                         "amount": 27.1783,
//                         "unit": "g"
//                     }
//                 ]
//             }
//         },
//         {
//             "vegetarian": false,
//             "vegan": false,
//             "glutenFree": false,
//             "dairyFree": true,
//             "veryHealthy": false,
//             "cheap": false,
//             "veryPopular": false,
//             "sustainable": false,
//             "lowFodmap": false,
//             "weightWatcherSmartPoints": 8,
//             "gaps": "no",
//             "preparationMinutes": 5,
//             "cookingMinutes": 20,
//             "aggregateLikes": 6,
//             "healthScore": 28,
//             "creditsText": "pinkwhen.com",
//             "sourceName": "pinkwhen.com",
//             "pricePerServing": 157.04,
//             "id": 991010,
//             "title": "Chicken Ranch Burgers",
//             "readyInMinutes": 25,
//             "servings": 3,
//             "sourceUrl": "https://www.pinkwhen.com/chicken-ranch-burgers-recipe/",
//             "image": "https://spoonacular.com/recipeImages/991010-312x231.jpg",
//             "imageType": "jpg",
//             "summary": "If you want to add more <b>American</b> recipes to your repertoire, Chicken Ranch Burgers might be a recipe you should try. This recipe makes 3 servings with <b>365 calories</b>, <b>41g of protein</b>, and <b>11g of fat</b> each. For <b>$1.57 per serving</b>, this recipe <b>covers 20%</b> of your daily requirements of vitamins and minerals. 6 people have tried and liked this recipe. It works well as a main course. This recipe from Pink When requires bell pepper, bread crumbs, chicken, and ranch seasoning. It is a good option if you're following a <b>dairy free</b> diet. From preparation to the plate, this recipe takes roughly <b>25 minutes</b>. Taking all factors into account, this recipe <b>earns a spoonacular score of 86%</b>, which is outstanding. Similar recipes are <a href=\"https://spoonacular.com/recipes/chicken-ranch-burgers-519173\">Chicken Ranch Burgers</a>, <a href=\"https://spoonacular.com/recipes/chicken-ranch-burgers-1409199\">Chicken Ranch Burgers</a>, and <a href=\"https://spoonacular.com/recipes/chicken-ranch-burgers-1657599\">Chicken Ranch Burgers</a>.",
//             "cuisines": [
//                 "American"
//             ],
//             "dishTypes": [
//                 "lunch",
//                 "main course",
//                 "main dish",
//                 "dinner"
//             ],
//             "diets": [
//                 "dairy free"
//             ],
//             "occasions": [],
//             "analyzedInstructions": [
//                 {
//                     "name": "",
//                     "steps": [
//                         {
//                             "number": 1,
//                             "step": "Heat oven to 40",
//                             "ingredients": [],
//                             "equipment": [
//                                 {
//                                     "id": 404784,
//                                     "name": "oven",
//                                     "localizedName": "oven",
//                                     "image": "oven.jpg"
//                                 }
//                             ]
//                         },
//                         {
//                             "number": 2,
//                             "step": "Add chicken, onion, pepper, bread crumbs, and ranch seasoning to a mixing bowl.",
//                             "ingredients": [
//                                 {
//                                     "id": 93733,
//                                     "name": "dry ranch dressing mix",
//                                     "localizedName": "dry ranch dressing mix",
//                                     "image": "oregano-dried.png"
//                                 },
//                                 {
//                                     "id": 18079,
//                                     "name": "breadcrumbs",
//                                     "localizedName": "breadcrumbs",
//                                     "image": "breadcrumbs.jpg"
//                                 },
//                                 {
//                                     "id": 0,
//                                     "name": "chicken",
//                                     "localizedName": "chicken",
//                                     "image": "whole-chicken.jpg"
//                                 },
//                                 {
//                                     "id": 1002030,
//                                     "name": "pepper",
//                                     "localizedName": "pepper",
//                                     "image": "pepper.jpg"
//                                 },
//                                 {
//                                     "id": 11282,
//                                     "name": "onion",
//                                     "localizedName": "onion",
//                                     "image": "brown-onion.png"
//                                 }
//                             ],
//                             "equipment": [
//                                 {
//                                     "id": 405907,
//                                     "name": "mixing bowl",
//                                     "localizedName": "mixing bowl",
//                                     "image": "mixing-bowl.jpg"
//                                 }
//                             ]
//                         },
//                         {
//                             "number": 3,
//                             "step": "Mix ingredients well.",
//                             "ingredients": [],
//                             "equipment": []
//                         },
//                         {
//                             "number": 4,
//                             "step": "Scoop and make 3 large burger patties.",
//                             "ingredients": [
//                                 {
//                                     "id": 0,
//                                     "name": "burger patties",
//                                     "localizedName": "burger patties",
//                                     "image": "fresh-ground-beef.jpg"
//                                 }
//                             ],
//                             "equipment": []
//                         },
//                         {
//                             "number": 5,
//                             "step": "Place in skillet and cook on medium low heat to sear juices and brown the patties.",
//                             "ingredients": [],
//                             "equipment": [
//                                 {
//                                     "id": 404645,
//                                     "name": "frying pan",
//                                     "localizedName": "frying pan",
//                                     "image": "pan.png"
//                                 }
//                             ]
//                         },
//                         {
//                             "number": 6,
//                             "step": "Place skillet with patties into the oven and bake for 15 minutes, or until patties are cooked thoroughly.",
//                             "ingredients": [],
//                             "equipment": [
//                                 {
//                                     "id": 404784,
//                                     "name": "oven",
//                                     "localizedName": "oven",
//                                     "image": "oven.jpg"
//                                 },
//                                 {
//                                     "id": 404645,
//                                     "name": "frying pan",
//                                     "localizedName": "frying pan",
//                                     "image": "pan.png"
//                                 }
//                             ],
//                             "length": {
//                                 "number": 15,
//                                 "unit": "minutes"
//                             }
//                         },
//                         {
//                             "number": 7,
//                             "step": "Serve with your favorite toppings.",
//                             "ingredients": [],
//                             "equipment": []
//                         }
//                     ]
//                 }
//             ],
//             "spoonacularScore": 81.50080108642578,
//             "spoonacularSourceUrl": "https://spoonacular.com/chicken-ranch-burgers-991010",
//             "nutrition": {
//                 "nutrients": [
//                     {
//                         "name": "Protein",
//                         "amount": 40.7072,
//                         "unit": "g"
//                     }
//                 ]
//             }
//         },
//         {
//             "vegetarian": false,
//             "vegan": false,
//             "glutenFree": true,
//             "dairyFree": true,
//             "veryHealthy": false,
//             "cheap": false,
//             "veryPopular": false,
//             "sustainable": false,
//             "lowFodmap": false,
//             "weightWatcherSmartPoints": 3,
//             "gaps": "no",
//             "preparationMinutes": -1,
//             "cookingMinutes": -1,
//             "aggregateLikes": 1,
//             "healthScore": 18,
//             "creditsText": "foodista.com",
//             "sourceName": "foodista.com",
//             "pricePerServing": 131.1,
//             "id": 638218,
//             "title": "Chicken Orange Skewers",
//             "readyInMinutes": 45,
//             "servings": 4,
//             "sourceUrl": "https://www.foodista.com/recipe/DFB4VHMG/chicken-orange-skewers",
//             "image": "https://spoonacular.com/recipeImages/638218-312x231.jpg",
//             "imageType": "jpg",
//             "summary": "Chicken Orange Skewers takes about <b>45 minutes</b> from beginning to end. This main course has <b>182 calories</b>, <b>14g of protein</b>, and <b>9g of fat</b> per serving. This recipe serves 4. For <b>$1.31 per serving</b>, this recipe <b>covers 16%</b> of your daily requirements of vitamins and minerals. It is brought to you by Foodista. It is a good option if you're following a <b>gluten free, dairy free, paleolithic, and primal</b> diet. 1 person were impressed by this recipe. A mixture of tsp paprika, tsp onion powder, tsp pepper, and a handful of other ingredients are all it takes to make this recipe so delicious. Overall, this recipe earns a <b>good spoonacular score of 46%</b>. <a href=\"https://spoonacular.com/recipes/easy-chicken-skewers-with-orange-quinoa-909025\">Easy Chicken Skewers with Orange Quinoa</a>, <a href=\"https://spoonacular.com/recipes/chipotle-chicken-or-shrimp-skewers-with-jicama-orange-salad-737962\">Chipotle Chicken or Shrimp Skewers with Jicama-Orange Salad</a>, and <a href=\"https://spoonacular.com/recipes/grilled-chicken-and-orange-skewers-with-zucchini-rice-recipe-28355\">Grilled Chicken And Orange Skewers With Zucchini Rice Recipe</a> are very similar to this recipe.",
//             "cuisines": [],
//             "dishTypes": [
//                 "lunch",
//                 "main course",
//                 "main dish",
//                 "dinner"
//             ],
//             "diets": [
//                 "gluten free",
//                 "dairy free",
//                 "paleolithic",
//                 "primal",
//                 "whole 30"
//             ],
//             "occasions": [],
//             "analyzedInstructions": [
//                 {
//                     "name": "",
//                     "steps": [
//                         {
//                             "number": 1,
//                             "step": "Preheat broiler.Slice zucchini into  inch pieces.Peel orange and slice orange into bite sized pieces. Slice red onion into small wedges.Slice chicken breasts into  inch slices and then slice those pieces in half.",
//                             "ingredients": [
//                                 {
//                                     "id": 5062,
//                                     "name": "chicken breast",
//                                     "localizedName": "chicken breast",
//                                     "image": "chicken-breasts.png"
//                                 },
//                                 {
//                                     "id": 10011282,
//                                     "name": "red onion",
//                                     "localizedName": "red onion",
//                                     "image": "red-onion.png"
//                                 },
//                                 {
//                                     "id": 11477,
//                                     "name": "zucchini",
//                                     "localizedName": "zucchini",
//                                     "image": "zucchini.jpg"
//                                 },
//                                 {
//                                     "id": 9200,
//                                     "name": "orange",
//                                     "localizedName": "orange",
//                                     "image": "orange.png"
//                                 }
//                             ],
//                             "equipment": [
//                                 {
//                                     "id": 405914,
//                                     "name": "broiler",
//                                     "localizedName": "broiler",
//                                     "image": "oven.jpg"
//                                 }
//                             ]
//                         }
//                     ]
//                 },
//                 {
//                     "name": "Assemble skewers",
//                     "steps": [
//                         {
//                             "number": 1,
//                             "step": "Add onion, zucchini, chicken, orange and then repeat, having a total of 3 pieces of chicken per skewer. This should make a total of 8 skewers. If you have more chicken and veggies, add it onto the end of the skewers.",
//                             "ingredients": [
//                                 {
//                                     "id": 11477,
//                                     "name": "zucchini",
//                                     "localizedName": "zucchini",
//                                     "image": "zucchini.jpg"
//                                 },
//                                 {
//                                     "id": 0,
//                                     "name": "chicken",
//                                     "localizedName": "chicken",
//                                     "image": "whole-chicken.jpg"
//                                 },
//                                 {
//                                     "id": 9200,
//                                     "name": "orange",
//                                     "localizedName": "orange",
//                                     "image": "orange.png"
//                                 },
//                                 {
//                                     "id": 11282,
//                                     "name": "onion",
//                                     "localizedName": "onion",
//                                     "image": "brown-onion.png"
//                                 }
//                             ],
//                             "equipment": [
//                                 {
//                                     "id": 3065,
//                                     "name": "skewers",
//                                     "localizedName": "skewers",
//                                     "image": "wooden-skewers.jpg"
//                                 }
//                             ]
//                         },
//                         {
//                             "number": 2,
//                             "step": "Place skewers on baking sheet.",
//                             "ingredients": [],
//                             "equipment": [
//                                 {
//                                     "id": 404727,
//                                     "name": "baking sheet",
//                                     "localizedName": "baking sheet",
//                                     "image": "baking-sheet.jpg"
//                                 },
//                                 {
//                                     "id": 3065,
//                                     "name": "skewers",
//                                     "localizedName": "skewers",
//                                     "image": "wooden-skewers.jpg"
//                                 }
//                             ]
//                         }
//                     ]
//                 },
//                 {
//                     "name": "Make glaze",
//                     "steps": [
//                         {
//                             "number": 1,
//                             "step": "Add ingredients together and mix.",
//                             "ingredients": [],
//                             "equipment": []
//                         },
//                         {
//                             "number": 2,
//                             "step": "Brush glaze over skewers. Move oven shelf to highest position.",
//                             "ingredients": [
//                                 {
//                                     "id": 0,
//                                     "name": "glaze",
//                                     "localizedName": "glaze",
//                                     "image": ""
//                                 }
//                             ],
//                             "equipment": [
//                                 {
//                                     "id": 3065,
//                                     "name": "skewers",
//                                     "localizedName": "skewers",
//                                     "image": "wooden-skewers.jpg"
//                                 },
//                                 {
//                                     "id": 404784,
//                                     "name": "oven",
//                                     "localizedName": "oven",
//                                     "image": "oven.jpg"
//                                 }
//                             ]
//                         },
//                         {
//                             "number": 3,
//                             "step": "Place skewers under broiler and cook for 20 minutes, flipping the skewers over after 10 minutes.",
//                             "ingredients": [],
//                             "equipment": [
//                                 {
//                                     "id": 405914,
//                                     "name": "broiler",
//                                     "localizedName": "broiler",
//                                     "image": "oven.jpg"
//                                 },
//                                 {
//                                     "id": 3065,
//                                     "name": "skewers",
//                                     "localizedName": "skewers",
//                                     "image": "wooden-skewers.jpg"
//                                 }
//                             ],
//                             "length": {
//                                 "number": 30,
//                                 "unit": "minutes"
//                             }
//                         },
//                         {
//                             "number": 4,
//                             "step": "Serve and enjoy!",
//                             "ingredients": [],
//                             "equipment": []
//                         }
//                     ]
//                 }
//             ],
//             "spoonacularScore": 64.44273376464844,
//             "spoonacularSourceUrl": "https://spoonacular.com/chicken-orange-skewers-638218",
//             "nutrition": {
//                 "nutrients": [
//                     {
//                         "name": "Protein",
//                         "amount": 13.7287,
//                         "unit": "g"
//                     }
//                 ]
//             }
//         },
//         {
//             "vegetarian": false,
//             "vegan": false,
//             "glutenFree": false,
//             "dairyFree": false,
//             "veryHealthy": false,
//             "cheap": false,
//             "veryPopular": false,
//             "sustainable": false,
//             "lowFodmap": false,
//             "weightWatcherSmartPoints": 15,
//             "gaps": "no",
//             "preparationMinutes": -1,
//             "cookingMinutes": -1,
//             "aggregateLikes": 1,
//             "healthScore": 36,
//             "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
//             "license": "CC BY 3.0",
//             "sourceName": "Foodista",
//             "pricePerServing": 280.12,
//             "id": 638272,
//             "title": "Chicken Ragu w Rigatoni",
//             "readyInMinutes": 45,
//             "servings": 6,
//             "sourceUrl": "https://www.foodista.com/recipe/MPLPCFCS/chicken-ragu-w-rigatoni",
//             "image": "https://spoonacular.com/recipeImages/638272-312x231.jpg",
//             "imageType": "jpg",
//             "summary": "Chicken Ragu w Rigatoni might be just the main course you are searching for. One portion of this dish contains around <b>40g of protein</b>, <b>14g of fat</b>, and a total of <b>605 calories</b>. For <b>$2.8 per serving</b>, this recipe <b>covers 33%</b> of your daily requirements of vitamins and minerals. This recipe serves 6. From preparation to the plate, this recipe takes around <b>45 minutes</b>. If you have rigatoni, tomatoes, chicken breasts, and a few other ingredients on hand, you can make it. 1 person has tried and liked this recipe. It is brought to you by Foodista. With a spoonacular <b>score of 72%</b>, this dish is solid. If you like this recipe, take a look at these similar recipes: <a href=\"https://spoonacular.com/recipes/pulled-chicken-ragu-and-rigatoni-405789\">Pulled Chicken Ragu and Rigatoni</a>, <a href=\"https://spoonacular.com/recipes/rigatoni-with-white-ragu-365700\">Rigatoni with White Ragu</a>, and <a href=\"https://spoonacular.com/recipes/rigatoni-with-duck-rag-194854\">Rigatoni with Duck Ragù</a>.",
//             "cuisines": [],
//             "dishTypes": [
//                 "side dish",
//                 "lunch",
//                 "main course",
//                 "main dish",
//                 "dinner"
//             ],
//             "diets": [],
//             "occasions": [],
//             "analyzedInstructions": [
//                 {
//                     "name": "",
//                     "steps": [
//                         {
//                             "number": 1,
//                             "step": "In a large skillet or non-stick pan, heat 1 tbsp olive oil over medium high heat and brown the chicken pieces on all sides. Cook until slightly browned and any pink spots are removed.",
//                             "ingredients": [
//                                 {
//                                     "id": 1005006,
//                                     "name": "chicken pieces",
//                                     "localizedName": "chicken pieces",
//                                     "image": "chicken-parts.jpg"
//                                 },
//                                 {
//                                     "id": 4053,
//                                     "name": "olive oil",
//                                     "localizedName": "olive oil",
//                                     "image": "olive-oil.jpg"
//                                 }
//                             ],
//                             "equipment": [
//                                 {
//                                     "id": 404645,
//                                     "name": "frying pan",
//                                     "localizedName": "frying pan",
//                                     "image": "pan.png"
//                                 }
//                             ]
//                         },
//                         {
//                             "number": 2,
//                             "step": "Meanwhile, cut the vegetables into desired pieces or use a grater for smaller sizes. Lower the heat and add the basil, onions, carrots, mushrooms, garlic and cook, stirring frequently, until the veggies are softened, about 10 minutes.",
//                             "ingredients": [
//                                 {
//                                     "id": 11583,
//                                     "name": "vegetable",
//                                     "localizedName": "vegetable",
//                                     "image": "mixed-vegetables.png"
//                                 },
//                                 {
//                                     "id": 11260,
//                                     "name": "mushrooms",
//                                     "localizedName": "mushrooms",
//                                     "image": "mushrooms.png"
//                                 },
//                                 {
//                                     "id": 11124,
//                                     "name": "carrot",
//                                     "localizedName": "carrot",
//                                     "image": "sliced-carrot.png"
//                                 },
//                                 {
//                                     "id": 11215,
//                                     "name": "garlic",
//                                     "localizedName": "garlic",
//                                     "image": "garlic.png"
//                                 },
//                                 {
//                                     "id": 11282,
//                                     "name": "onion",
//                                     "localizedName": "onion",
//                                     "image": "brown-onion.png"
//                                 },
//                                 {
//                                     "id": 2044,
//                                     "name": "basil",
//                                     "localizedName": "basil",
//                                     "image": "basil.jpg"
//                                 }
//                             ],
//                             "equipment": [
//                                 {
//                                     "id": 404631,
//                                     "name": "grater",
//                                     "localizedName": "grater",
//                                     "image": "grater.jpg"
//                                 }
//                             ],
//                             "length": {
//                                 "number": 10,
//                                 "unit": "minutes"
//                             }
//                         },
//                         {
//                             "number": 3,
//                             "step": "Stir in the bay leaves, tomato sauce, tomato paste, Marsala, white wine, and herbs. Semi-cover with lid and cook on low with a slight bubble for about 30 minutes to infuse all ingredients. Sample the sauce and add salt and pepper according to taste. Discard bay leaves before combining with chicken pieces.",
//                             "ingredients": [
//                                 {
//                                     "id": 1102047,
//                                     "name": "salt and pepper",
//                                     "localizedName": "salt and pepper",
//                                     "image": "salt-and-pepper.jpg"
//                                 },
//                                 {
//                                     "id": 1005006,
//                                     "name": "chicken pieces",
//                                     "localizedName": "chicken pieces",
//                                     "image": "chicken-parts.jpg"
//                                 },
//                                 {
//                                     "id": 11887,
//                                     "name": "tomato paste",
//                                     "localizedName": "tomato paste",
//                                     "image": "tomato-paste.jpg"
//                                 },
//                                 {
//                                     "id": 11549,
//                                     "name": "tomato sauce",
//                                     "localizedName": "tomato sauce",
//                                     "image": "tomato-sauce-or-pasta-sauce.jpg"
//                                 },
//                                 {
//                                     "id": 2004,
//                                     "name": "bay leaves",
//                                     "localizedName": "bay leaves",
//                                     "image": "bay-leaves.jpg"
//                                 },
//                                 {
//                                     "id": 14106,
//                                     "name": "white wine",
//                                     "localizedName": "white wine",
//                                     "image": "white-wine.jpg"
//                                 },
//                                 {
//                                     "id": 14057,
//                                     "name": "marsala",
//                                     "localizedName": "marsala",
//                                     "image": "red-wine.jpg"
//                                 },
//                                 {
//                                     "id": 1002044,
//                                     "name": "herbs",
//                                     "localizedName": "herbs",
//                                     "image": "mixed-fresh-herbs.jpg"
//                                 },
//                                 {
//                                     "id": 0,
//                                     "name": "sauce",
//                                     "localizedName": "sauce",
//                                     "image": ""
//                                 }
//                             ],
//                             "equipment": [],
//                             "length": {
//                                 "number": 30,
//                                 "unit": "minutes"
//                             }
//                         },
//                         {
//                             "number": 4,
//                             "step": "Cook the rigatoni according to package directions, but don't forget to add salt to the boiling water. In addition, do not rinse under cold water; drain in colander hot and set aside.",
//                             "ingredients": [
//                                 {
//                                     "id": 11220420,
//                                     "name": "rigatoni",
//                                     "localizedName": "rigatoni",
//                                     "image": "rigatoni.jpg"
//                                 },
//                                 {
//                                     "id": 14412,
//                                     "name": "water",
//                                     "localizedName": "water",
//                                     "image": "water.png"
//                                 },
//                                 {
//                                     "id": 2047,
//                                     "name": "salt",
//                                     "localizedName": "salt",
//                                     "image": "salt.jpg"
//                                 }
//                             ],
//                             "equipment": [
//                                 {
//                                     "id": 404639,
//                                     "name": "colander",
//                                     "localizedName": "colander",
//                                     "image": "colander.jpg"
//                                 }
//                             ]
//                         },
//                         {
//                             "number": 5,
//                             "step": "After rigatoni pasta  and sauce are finished, combine the two and plate. Grate plenty of fresh parmesan cheese and garnish with extra basil leaves. Enjoy!",
//                             "ingredients": [
//                                 {
//                                     "id": 1033,
//                                     "name": "parmesan",
//                                     "localizedName": "parmesan",
//                                     "image": "parmesan.jpg"
//                                 },
//                                 {
//                                     "id": 11220420,
//                                     "name": "rigatoni",
//                                     "localizedName": "rigatoni",
//                                     "image": "rigatoni.jpg"
//                                 },
//                                 {
//                                     "id": 2044,
//                                     "name": "fresh basil",
//                                     "localizedName": "fresh basil",
//                                     "image": "fresh-basil.jpg"
//                                 },
//                                 {
//                                     "id": 0,
//                                     "name": "sauce",
//                                     "localizedName": "sauce",
//                                     "image": ""
//                                 }
//                             ],
//                             "equipment": []
//                         }
//                     ]
//                 }
//             ],
//             "spoonacularScore": 78.62762451171875,
//             "spoonacularSourceUrl": "https://spoonacular.com/chicken-ragu-w-rigatoni-638272",
//             "nutrition": {
//                 "nutrients": [
//                     {
//                         "name": "Protein",
//                         "amount": 40.039,
//                         "unit": "g"
//                     }
//                 ]
//             }
//         },
//         {
//             "vegetarian": false,
//             "vegan": false,
//             "glutenFree": true,
//             "dairyFree": true,
//             "veryHealthy": true,
//             "cheap": false,
//             "veryPopular": false,
//             "sustainable": false,
//             "lowFodmap": false,
//             "weightWatcherSmartPoints": 4,
//             "gaps": "no",
//             "preparationMinutes": -1,
//             "cookingMinutes": -1,
//             "aggregateLikes": 19,
//             "healthScore": 68,
//             "creditsText": "Afrolems",
//             "license": "CC BY 4.0",
//             "sourceName": "Afrolems",
//             "pricePerServing": 450.95,
//             "id": 716330,
//             "title": "Chicken and Mango Skewer",
//             "readyInMinutes": 45,
//             "servings": 1,
//             "sourceUrl": "http://www.afrolems.com/2013/03/29/easter-special-chicken-and-mango-skewer/",
//             "image": "https://spoonacular.com/recipeImages/716330-312x231.jpg",
//             "imageType": "jpg",
//             "summary": "Chicken and Mango Skewer takes roughly <b>45 minutes</b> from beginning to end. This recipe serves 1 and costs $4.51 per serving. One portion of this dish contains about <b>31g of protein</b>, <b>8g of fat</b>, and a total of <b>479 calories</b>. It is brought to you by Afrolems. A few people made this recipe, and 19 would say it hit the spot. A mixture of pepper, suya seasoning mix, mangos, and a handful of other ingredients are all it takes to make this recipe so scrumptious. It works well as a pretty expensive main course. It is a good option if you're following a <b>gluten free, dairy free, and whole 30</b> diet. Overall, this recipe earns a <b>spectacular spoonacular score of 95%</b>. Users who liked this recipe also liked <a href=\"https://spoonacular.com/recipes/grilled-chicken-caesar-on-a-skewer-338979\">Grilled Chicken Caesar on a Skewer</a>, <a href=\"https://spoonacular.com/recipes/thai-chicken-skewer-appetizers-with-sweet-and-spicy-chili-sauce-621582\">Thai Chicken Skewer Appetizers with Sweet and Spicy Chili Sauce</a>, and <a href=\"https://spoonacular.com/recipes/smore-skewer-bites-568008\">S’more Skewer Bites</a>.",
//             "cuisines": [],
//             "dishTypes": [
//                 "lunch",
//                 "main course",
//                 "main dish",
//                 "dinner"
//             ],
//             "diets": [
//                 "gluten free",
//                 "dairy free",
//                 "whole 30"
//             ],
//             "occasions": [],
//             "analyzedInstructions": [
//                 {
//                     "name": "",
//                     "steps": [
//                         {
//                             "number": 1,
//                             "step": "Chop chicken breast into cubes and place on sticks. Set fire to your grill or oven.",
//                             "ingredients": [
//                                 {
//                                     "id": 5062,
//                                     "name": "chicken breast",
//                                     "localizedName": "chicken breast",
//                                     "image": "chicken-breasts.png"
//                                 }
//                             ],
//                             "equipment": [
//                                 {
//                                     "id": 404706,
//                                     "name": "grill",
//                                     "localizedName": "grill",
//                                     "image": "grill.jpg"
//                                 },
//                                 {
//                                     "id": 404784,
//                                     "name": "oven",
//                                     "localizedName": "oven",
//                                     "image": "oven.jpg"
//                                 }
//                             ]
//                         },
//                         {
//                             "number": 2,
//                             "step": "Place the chicken breast on the grill to heat up a little",
//                             "ingredients": [
//                                 {
//                                     "id": 5062,
//                                     "name": "chicken breast",
//                                     "localizedName": "chicken breast",
//                                     "image": "chicken-breasts.png"
//                                 }
//                             ],
//                             "equipment": [
//                                 {
//                                     "id": 404706,
//                                     "name": "grill",
//                                     "localizedName": "grill",
//                                     "image": "grill.jpg"
//                                 }
//                             ]
//                         },
//                         {
//                             "number": 3,
//                             "step": "Mix all your seasoning in a bowl with your vegetable oil.With a brush, smear the mix on the chicken breast on both sides.Flip occasionally as it browns till its cooked. Stack your mangoes after the chicken is done but if your mangoes are firm, you can grill them as well.",
//                             "ingredients": [
//                                 {
//                                     "id": 5062,
//                                     "name": "chicken breast",
//                                     "localizedName": "chicken breast",
//                                     "image": "chicken-breasts.png"
//                                 },
//                                 {
//                                     "id": 4669,
//                                     "name": "vegetable oil",
//                                     "localizedName": "vegetable oil",
//                                     "image": "vegetable-oil.jpg"
//                                 },
//                                 {
//                                     "id": 1042027,
//                                     "name": "seasoning",
//                                     "localizedName": "seasoning",
//                                     "image": "seasoning.png"
//                                 },
//                                 {
//                                     "id": 0,
//                                     "name": "chicken",
//                                     "localizedName": "chicken",
//                                     "image": "whole-chicken.jpg"
//                                 },
//                                 {
//                                     "id": 9176,
//                                     "name": "mango",
//                                     "localizedName": "mango",
//                                     "image": "mango.jpg"
//                                 }
//                             ],
//                             "equipment": [
//                                 {
//                                     "id": 404706,
//                                     "name": "grill",
//                                     "localizedName": "grill",
//                                     "image": "grill.jpg"
//                                 },
//                                 {
//                                     "id": 404783,
//                                     "name": "bowl",
//                                     "localizedName": "bowl",
//                                     "image": "bowl.jpg"
//                                 }
//                             ]
//                         },
//                         {
//                             "number": 4,
//                             "step": "Serve on its own as an appetizer or with rice.",
//                             "ingredients": [
//                                 {
//                                     "id": 20444,
//                                     "name": "rice",
//                                     "localizedName": "rice",
//                                     "image": "uncooked-white-rice.png"
//                                 }
//                             ],
//                             "equipment": []
//                         }
//                     ]
//                 }
//             ],
//             "spoonacularScore": 95.65013885498047,
//             "spoonacularSourceUrl": "https://spoonacular.com/chicken-and-mango-skewer-716330",
//             "nutrition": {
//                 "nutrients": [
//                     {
//                         "name": "Protein",
//                         "amount": 31.2086,
//                         "unit": "g"
//                     }
//                 ]
//             }
//         },
//         {
//             "vegetarian": false,
//             "vegan": false,
//             "glutenFree": true,
//             "dairyFree": true,
//             "veryHealthy": false,
//             "cheap": false,
//             "veryPopular": false,
//             "sustainable": false,
//             "lowFodmap": false,
//             "weightWatcherSmartPoints": 11,
//             "gaps": "no",
//             "preparationMinutes": -1,
//             "cookingMinutes": -1,
//             "aggregateLikes": 9,
//             "healthScore": 9,
//             "creditsText": "foodista.com",
//             "sourceName": "foodista.com",
//             "pricePerServing": 127.41,
//             "id": 638343,
//             "title": "Chicken Stew For The Soul",
//             "readyInMinutes": 45,
//             "servings": 6,
//             "sourceUrl": "http://www.foodista.com/recipe/LSHK4547/chicken-stew-for-the-soul",
//             "image": "https://spoonacular.com/recipeImages/638343-312x231.jpg",
//             "imageType": "jpg",
//             "summary": "Chicken Stew For The Soul could be just the <b>gluten free, dairy free, and whole 30</b> recipe you've been looking for. For <b>$1.27 per serving</b>, this recipe <b>covers 16%</b> of your daily requirements of vitamins and minerals. This recipe makes 6 servings with <b>328 calories</b>, <b>18g of protein</b>, and <b>20g of fat</b> each. 9 people have tried and liked this recipe. It can be enjoyed any time, but it is especially good for <b>Autumn</b>. If you have ginger garlic paste, curry leaves, ground coriander, and a few other ingredients on hand, you can make it. It works well as a budget friendly main course. From preparation to the plate, this recipe takes around <b>45 minutes</b>. It is brought to you by Foodista. With a spoonacular <b>score of 56%</b>, this dish is good. If you like this recipe, take a look at these similar recipes: <a href=\"https://spoonacular.com/recipes/chicken-soup-for-the-soul-101305\">Chicken Soup for the Soul</a>, <a href=\"https://spoonacular.com/recipes/chicken-for-babies-soul-543682\">Chicken For Babies Soul</a>, and <a href=\"https://spoonacular.com/recipes/green-chicken-soup-for-the-soul-114969\">Green Chicken Soup for the Soul</a>.",
//             "cuisines": [],
//             "dishTypes": [
//                 "lunch",
//                 "soup",
//                 "main course",
//                 "main dish",
//                 "dinner"
//             ],
//             "diets": [
//                 "gluten free",
//                 "dairy free",
//                 "whole 30"
//             ],
//             "occasions": [
//                 "fall",
//                 "winter"
//             ],
//             "analyzedInstructions": [
//                 {
//                     "name": "",
//                     "steps": [
//                         {
//                             "number": 1,
//                             "step": "Slice the onions, slit the chillies, cube the potatoes and keep aside.",
//                             "ingredients": [
//                                 {
//                                     "id": 11819,
//                                     "name": "chili pepper",
//                                     "localizedName": "chili pepper",
//                                     "image": "red-chili.jpg"
//                                 },
//                                 {
//                                     "id": 11352,
//                                     "name": "potato",
//                                     "localizedName": "potato",
//                                     "image": "potatoes-yukon-gold.png"
//                                 },
//                                 {
//                                     "id": 11282,
//                                     "name": "onion",
//                                     "localizedName": "onion",
//                                     "image": "brown-onion.png"
//                                 }
//                             ],
//                             "equipment": []
//                         },
//                         {
//                             "number": 2,
//                             "step": "Heat oil in a heavy bottomed pan or pressure cooker, splutter mustard seeds.",
//                             "ingredients": [
//                                 {
//                                     "id": 2024,
//                                     "name": "mustard seeds",
//                                     "localizedName": "mustard seeds",
//                                     "image": "mustard-seeds.png"
//                                 },
//                                 {
//                                     "id": 4582,
//                                     "name": "cooking oil",
//                                     "localizedName": "cooking oil",
//                                     "image": "vegetable-oil.jpg"
//                                 }
//                             ],
//                             "equipment": [
//                                 {
//                                     "id": 404658,
//                                     "name": "pressure cooker",
//                                     "localizedName": "pressure cooker",
//                                     "image": "pressure-cooker.jpg"
//                                 },
//                                 {
//                                     "id": 404645,
//                                     "name": "frying pan",
//                                     "localizedName": "frying pan",
//                                     "image": "pan.png"
//                                 }
//                             ]
//                         },
//                         {
//                             "number": 3,
//                             "step": "Add the whole spices and stir till you begin to get the aroma of the spices.",
//                             "ingredients": [
//                                 {
//                                     "id": 2035,
//                                     "name": "spices",
//                                     "localizedName": "spices",
//                                     "image": "spices.png"
//                                 }
//                             ],
//                             "equipment": []
//                         },
//                         {
//                             "number": 4,
//                             "step": "Add sliced onions,curry leaves and green chillies and saute.Stir in the ground coriander and add the marinaded chicken. Stir so that the chicken is covered well in the sauteed mixture.Cover and let it cook. When it is half done add the cubed potatoes.When the chicken is almost done add the garam masala,salt and coconut milk and stir.When done put off the heat and garnish with chopped fresh coriander.Have I forgotten the most important ingredient? Stir it with lots of love for the family and friends who will partake of the meal.",
//                             "ingredients": [
//                                 {
//                                     "id": 1002013,
//                                     "name": "ground coriander",
//                                     "localizedName": "ground coriander",
//                                     "image": "ground-coriander.jpg"
//                                 },
//                                 {
//                                     "id": 11165,
//                                     "name": "fresh cilantro",
//                                     "localizedName": "fresh cilantro",
//                                     "image": "cilantro.png"
//                                 },
//                                 {
//                                     "id": 31015,
//                                     "name": "green chili pepper",
//                                     "localizedName": "green chili pepper",
//                                     "image": "chili-peppers-green.jpg"
//                                 },
//                                 {
//                                     "id": 12118,
//                                     "name": "coconut milk",
//                                     "localizedName": "coconut milk",
//                                     "image": "coconut-milk.png"
//                                 },
//                                 {
//                                     "id": 93604,
//                                     "name": "curry leaves",
//                                     "localizedName": "curry leaves",
//                                     "image": "curry-leaves.jpg"
//                                 },
//                                 {
//                                     "id": 93663,
//                                     "name": "garam masala",
//                                     "localizedName": "garam masala",
//                                     "image": "garam-masala.jpg"
//                                 },
//                                 {
//                                     "id": 11352,
//                                     "name": "potato",
//                                     "localizedName": "potato",
//                                     "image": "potatoes-yukon-gold.png"
//                                 },
//                                 {
//                                     "id": 0,
//                                     "name": "chicken",
//                                     "localizedName": "chicken",
//                                     "image": "whole-chicken.jpg"
//                                 },
//                                 {
//                                     "id": 11282,
//                                     "name": "onion",
//                                     "localizedName": "onion",
//                                     "image": "brown-onion.png"
//                                 },
//                                 {
//                                     "id": 2047,
//                                     "name": "salt",
//                                     "localizedName": "salt",
//                                     "image": "salt.jpg"
//                                 }
//                             ],
//                             "equipment": []
//                         },
//                         {
//                             "number": 5,
//                             "step": "Serve hot chicken stew with freshly made appams.",
//                             "ingredients": [
//                                 {
//                                     "id": 0,
//                                     "name": "chicken",
//                                     "localizedName": "chicken",
//                                     "image": "whole-chicken.jpg"
//                                 },
//                                 {
//                                     "id": 0,
//                                     "name": "stew",
//                                     "localizedName": "stew",
//                                     "image": ""
//                                 }
//                             ],
//                             "equipment": []
//                         }
//                     ]
//                 }
//             ],
//             "spoonacularScore": 57.163394927978516,
//             "spoonacularSourceUrl": "https://spoonacular.com/chicken-stew-for-the-soul-638343",
//             "nutrition": {
//                 "nutrients": [
//                     {
//                         "name": "Protein",
//                         "amount": 17.6966,
//                         "unit": "g"
//                     }
//                 ]
//             }
//         },
//         {
//             "vegetarian": false,
//             "vegan": false,
//             "glutenFree": true,
//             "dairyFree": true,
//             "veryHealthy": false,
//             "cheap": false,
//             "veryPopular": false,
//             "sustainable": false,
//             "lowFodmap": false,
//             "weightWatcherSmartPoints": 4,
//             "gaps": "no",
//             "preparationMinutes": -1,
//             "cookingMinutes": -1,
//             "aggregateLikes": 1,
//             "healthScore": 20,
//             "creditsText": "foodista.com",
//             "sourceName": "foodista.com",
//             "pricePerServing": 131.49,
//             "id": 637904,
//             "title": "Chicken and Leek Porridge",
//             "readyInMinutes": 45,
//             "servings": 6,
//             "sourceUrl": "https://www.foodista.com/recipe/XSQQFQVH/chicken-and-leek-porridge",
//             "image": "https://spoonacular.com/recipeImages/637904-312x231.jpg",
//             "imageType": "jpg",
//             "summary": "Chicken and Leek Porridge is a <b>gluten free and dairy free</b> recipe with 6 servings. One serving contains <b>202 calories</b>, <b>13g of protein</b>, and <b>7g of fat</b>. For <b>$1.31 per serving</b>, this recipe <b>covers 14%</b> of your daily requirements of vitamins and minerals. 1 person has tried and liked this recipe. Head to the store and pick up olive oil, thyme, chicken stock, and a few other things to make it today. It is brought to you by Foodista. It works best as a breakfast, and is done in roughly <b>45 minutes</b>. With a spoonacular <b>score of 68%</b>, this dish is solid. If you like this recipe, take a look at these similar recipes: <a href=\"https://spoonacular.com/recipes/chicken-porridge-1236999\">Chicken Porridge</a>, <a href=\"https://spoonacular.com/recipes/chicken-porridge-638257\">Chicken Porridge</a>, and <a href=\"https://spoonacular.com/recipes/chicken-congee-rice-porridge-233690\">Chicken Congee (Rice Porridge)</a>.",
//             "cuisines": [],
//             "dishTypes": [
//                 "morning meal",
//                 "brunch",
//                 "breakfast"
//             ],
//             "diets": [
//                 "gluten free",
//                 "dairy free"
//             ],
//             "occasions": [],
//             "analyzedInstructions": [
//                 {
//                     "name": "",
//                     "steps": [
//                         {
//                             "number": 1,
//                             "step": "Pre-heat oven to 350 degrees.",
//                             "ingredients": [],
//                             "equipment": [
//                                 {
//                                     "id": 404784,
//                                     "name": "oven",
//                                     "localizedName": "oven",
//                                     "image": "oven.jpg"
//                                 }
//                             ]
//                         },
//                         {
//                             "number": 2,
//                             "step": "Rub your chicken with 1 tablespoon of olive oil and sprinkle on 1 tsp of salt and  a tsp of ground black pepper.",
//                             "ingredients": [
//                                 {
//                                     "id": 1002030,
//                                     "name": "ground black pepper",
//                                     "localizedName": "ground black pepper",
//                                     "image": "pepper.jpg"
//                                 },
//                                 {
//                                     "id": 4053,
//                                     "name": "olive oil",
//                                     "localizedName": "olive oil",
//                                     "image": "olive-oil.jpg"
//                                 },
//                                 {
//                                     "id": 0,
//                                     "name": "chicken",
//                                     "localizedName": "chicken",
//                                     "image": "whole-chicken.jpg"
//                                 },
//                                 {
//                                     "id": 2047,
//                                     "name": "salt",
//                                     "localizedName": "salt",
//                                     "image": "salt.jpg"
//                                 },
//                                 {
//                                     "id": 1012034,
//                                     "name": "dry seasoning rub",
//                                     "localizedName": "dry seasoning rub",
//                                     "image": "seasoning.png"
//                                 }
//                             ],
//                             "equipment": []
//                         },
//                         {
//                             "number": 3,
//                             "step": "Put in oven for 35 minutes.",
//                             "ingredients": [],
//                             "equipment": [
//                                 {
//                                     "id": 404784,
//                                     "name": "oven",
//                                     "localizedName": "oven",
//                                     "image": "oven.jpg"
//                                 }
//                             ],
//                             "length": {
//                                 "number": 35,
//                                 "unit": "minutes"
//                             }
//                         },
//                         {
//                             "number": 4,
//                             "step": "Remove from oven and let sit.  (if you dont have time to cook your chicken, you can buy a rotisserie from the store and shred about a 1  cup of the chicken.)",
//                             "ingredients": [
//                                 {
//                                     "id": 0,
//                                     "name": "chicken",
//                                     "localizedName": "chicken",
//                                     "image": "whole-chicken.jpg"
//                                 }
//                             ],
//                             "equipment": [
//                                 {
//                                     "id": 404784,
//                                     "name": "oven",
//                                     "localizedName": "oven",
//                                     "image": "oven.jpg"
//                                 }
//                             ]
//                         },
//                         {
//                             "number": 5,
//                             "step": "Using a large soup pot (large creuset is nice), turn  heat on to medium.",
//                             "ingredients": [
//                                 {
//                                     "id": 0,
//                                     "name": "soup",
//                                     "localizedName": "soup",
//                                     "image": ""
//                                 }
//                             ],
//                             "equipment": [
//                                 {
//                                     "id": 404752,
//                                     "name": "pot",
//                                     "localizedName": "pot",
//                                     "image": "stock-pot.jpg"
//                                 }
//                             ]
//                         },
//                         {
//                             "number": 6,
//                             "step": "Once pot is hot, add the 1-tablespoon of olive oil, the onions, carrots  and the leek.",
//                             "ingredients": [
//                                 {
//                                     "id": 4053,
//                                     "name": "olive oil",
//                                     "localizedName": "olive oil",
//                                     "image": "olive-oil.jpg"
//                                 },
//                                 {
//                                     "id": 11124,
//                                     "name": "carrot",
//                                     "localizedName": "carrot",
//                                     "image": "sliced-carrot.png"
//                                 },
//                                 {
//                                     "id": 11282,
//                                     "name": "onion",
//                                     "localizedName": "onion",
//                                     "image": "brown-onion.png"
//                                 },
//                                 {
//                                     "id": 11246,
//                                     "name": "leek",
//                                     "localizedName": "leek",
//                                     "image": "leeks.jpg"
//                                 }
//                             ],
//                             "equipment": [
//                                 {
//                                     "id": 404752,
//                                     "name": "pot",
//                                     "localizedName": "pot",
//                                     "image": "stock-pot.jpg"
//                                 }
//                             ]
//                         },
//                         {
//                             "number": 7,
//                             "step": "Add 1 tsp of salt and  a tsp of ground black pepper.",
//                             "ingredients": [
//                                 {
//                                     "id": 1002030,
//                                     "name": "ground black pepper",
//                                     "localizedName": "ground black pepper",
//                                     "image": "pepper.jpg"
//                                 },
//                                 {
//                                     "id": 2047,
//                                     "name": "salt",
//                                     "localizedName": "salt",
//                                     "image": "salt.jpg"
//                                 }
//                             ],
//                             "equipment": []
//                         },
//                         {
//                             "number": 8,
//                             "step": "Once the onions are translucent, add the garlic and stir for 1-2 minutes.",
//                             "ingredients": [
//                                 {
//                                     "id": 11215,
//                                     "name": "garlic",
//                                     "localizedName": "garlic",
//                                     "image": "garlic.png"
//                                 },
//                                 {
//                                     "id": 11282,
//                                     "name": "onion",
//                                     "localizedName": "onion",
//                                     "image": "brown-onion.png"
//                                 }
//                             ],
//                             "equipment": [],
//                             "length": {
//                                 "number": 2,
//                                 "unit": "minutes"
//                             }
//                         },
//                         {
//                             "number": 9,
//                             "step": "Add the bay leaf, thyme and chili pepper flakes (if using).  Stir for 1-2 minutes.",
//                             "ingredients": [
//                                 {
//                                     "id": 11819,
//                                     "name": "chili pepper",
//                                     "localizedName": "chili pepper",
//                                     "image": "red-chili.jpg"
//                                 },
//                                 {
//                                     "id": 2004,
//                                     "name": "bay leaves",
//                                     "localizedName": "bay leaves",
//                                     "image": "bay-leaves.jpg"
//                                 },
//                                 {
//                                     "id": 2049,
//                                     "name": "thyme",
//                                     "localizedName": "thyme",
//                                     "image": "thyme.jpg"
//                                 }
//                             ],
//                             "equipment": [],
//                             "length": {
//                                 "number": 2,
//                                 "unit": "minutes"
//                             }
//                         },
//                         {
//                             "number": 10,
//                             "step": "Then add the rice.  Stir the rice until well coated with oil and well combined with other ingredients.",
//                             "ingredients": [
//                                 {
//                                     "id": 20444,
//                                     "name": "rice",
//                                     "localizedName": "rice",
//                                     "image": "uncooked-white-rice.png"
//                                 },
//                                 {
//                                     "id": 4582,
//                                     "name": "cooking oil",
//                                     "localizedName": "cooking oil",
//                                     "image": "vegetable-oil.jpg"
//                                 }
//                             ],
//                             "equipment": []
//                         },
//                         {
//                             "number": 11,
//                             "step": "Add 5 cups of the chicken stock.  Bring to a boil, then reduce to a simmer and put the cover on the pot.  Stirring occasionally (so the rice doesnt settle), let simmer for about 45 minutes.",
//                             "ingredients": [
//                                 {
//                                     "id": 6172,
//                                     "name": "chicken stock",
//                                     "localizedName": "chicken stock",
//                                     "image": "chicken-broth.png"
//                                 },
//                                 {
//                                     "id": 20444,
//                                     "name": "rice",
//                                     "localizedName": "rice",
//                                     "image": "uncooked-white-rice.png"
//                                 }
//                             ],
//                             "equipment": [
//                                 {
//                                     "id": 404752,
//                                     "name": "pot",
//                                     "localizedName": "pot",
//                                     "image": "stock-pot.jpg"
//                                 }
//                             ],
//                             "length": {
//                                 "number": 45,
//                                 "unit": "minutes"
//                             }
//                         },
//                         {
//                             "number": 12,
//                             "step": "In the meantime, shred your roasted chicken breast into bite-sized pieces.",
//                             "ingredients": [
//                                 {
//                                     "id": 5064,
//                                     "name": "cooked chicken breast",
//                                     "localizedName": "cooked chicken breast",
//                                     "image": "cooked-chicken-breast.png"
//                                 }
//                             ],
//                             "equipment": []
//                         },
//                         {
//                             "number": 13,
//                             "step": "After 45 minutes, your rice should have a porridge-like consistency (slightly more liquid present than in a risotto, but not as much as a soup).  1",
//                             "ingredients": [
//                                 {
//                                     "id": 0,
//                                     "name": "hot cereal",
//                                     "localizedName": "hot cereal",
//                                     "image": ""
//                                 },
//                                 {
//                                     "id": 20444,
//                                     "name": "rice",
//                                     "localizedName": "rice",
//                                     "image": "uncooked-white-rice.png"
//                                 },
//                                 {
//                                     "id": 0,
//                                     "name": "soup",
//                                     "localizedName": "soup",
//                                     "image": ""
//                                 }
//                             ],
//                             "equipment": [],
//                             "length": {
//                                 "number": 45,
//                                 "unit": "minutes"
//                             }
//                         },
//                         {
//                             "number": 14,
//                             "step": "Add your shredded chicken, mushrooms and peas.   Stir and cook for another 3-5 minutes.",
//                             "ingredients": [
//                                 {
//                                     "id": 1005114,
//                                     "name": "shredded chicken",
//                                     "localizedName": "shredded chicken",
//                                     "image": "rotisserie-chicken.png"
//                                 },
//                                 {
//                                     "id": 11260,
//                                     "name": "mushrooms",
//                                     "localizedName": "mushrooms",
//                                     "image": "mushrooms.png"
//                                 },
//                                 {
//                                     "id": 11304,
//                                     "name": "peas",
//                                     "localizedName": "peas",
//                                     "image": "peas.jpg"
//                                 }
//                             ],
//                             "equipment": [],
//                             "length": {
//                                 "number": 5,
//                                 "unit": "minutes"
//                             }
//                         },
//                         {
//                             "number": 15,
//                             "step": "Serve with a little parsley on top and enjoy hot!",
//                             "ingredients": [
//                                 {
//                                     "id": 11297,
//                                     "name": "parsley",
//                                     "localizedName": "parsley",
//                                     "image": "parsley.jpg"
//                                 }
//                             ],
//                             "equipment": []
//                         },
//                         {
//                             "number": 16,
//                             "step": "The basmati rice is not nearly as starchy as a shorter grain rice, so you wont fully get a porridge like consistency here if you use it.  However, I use it in my recipe because it has greater nutritional benefits.",
//                             "ingredients": [
//                                 {
//                                     "id": 10020444,
//                                     "name": "basmati rice",
//                                     "localizedName": "basmati rice",
//                                     "image": "rice-white-long-grain-or-basmatii-cooked.jpg"
//                                 },
//                                 {
//                                     "id": 0,
//                                     "name": "hot cereal",
//                                     "localizedName": "hot cereal",
//                                     "image": ""
//                                 },
//                                 {
//                                     "id": 0,
//                                     "name": "grains",
//                                     "localizedName": "grains",
//                                     "image": ""
//                                 },
//                                 {
//                                     "id": 20444,
//                                     "name": "rice",
//                                     "localizedName": "rice",
//                                     "image": "uncooked-white-rice.png"
//                                 }
//                             ],
//                             "equipment": []
//                         }
//                     ]
//                 }
//             ],
//             "spoonacularScore": 66.8136215209961,
//             "spoonacularSourceUrl": "https://spoonacular.com/chicken-and-leek-porridge-637904",
//             "nutrition": {
//                 "nutrients": [
//                     {
//                         "name": "Protein",
//                         "amount": 13.0914,
//                         "unit": "g"
//                     }
//                 ]
//             }
//         },
//         {
//             "vegetarian": false,
//             "vegan": false,
//             "glutenFree": true,
//             "dairyFree": false,
//             "veryHealthy": false,
//             "cheap": false,
//             "veryPopular": false,
//             "sustainable": false,
//             "lowFodmap": false,
//             "weightWatcherSmartPoints": 19,
//             "gaps": "no",
//             "preparationMinutes": -1,
//             "cookingMinutes": -1,
//             "aggregateLikes": 6,
//             "healthScore": 17,
//             "creditsText": "foodista.com",
//             "sourceName": "foodista.com",
//             "pricePerServing": 250.66,
//             "id": 638073,
//             "title": "Chicken Enchilada Chowder",
//             "readyInMinutes": 45,
//             "servings": 6,
//             "sourceUrl": "https://www.foodista.com/recipe/S8XRP2GT/chicken-enchilada-chowder",
//             "image": "https://spoonacular.com/recipeImages/638073-312x231.jpg",
//             "imageType": "jpg",
//             "summary": "Chicken Enchilada Chowder is a <b>gluten free</b> main course. One portion of this dish contains about <b>32g of protein</b>, <b>25g of fat</b>, and a total of <b>613 calories</b>. This recipe serves 6. For <b>$2.51 per serving</b>, this recipe <b>covers 26%</b> of your daily requirements of vitamins and minerals. Not a lot of people really liked this Mexican dish. From preparation to the plate, this recipe takes approximately <b>45 minutes</b>. This recipe is liked by 6 foodies and cooks. It is brought to you by Foodista. Head to the store and pick up orange bell pepper, cream corn, enchilada sauce, and a few other things to make it today. All things considered, we decided this recipe <b>deserves a spoonacular score of 61%</b>. This score is good. <a href=\"https://spoonacular.com/recipes/chicken-and-cheese-enchilada-chowder-474567\">Chicken and Cheese Enchilada Chowder</a>, <a href=\"https://spoonacular.com/recipes/chipotle-chicken-enchilada-chowder-145404\">Chipotle Chicken Enchilada Chowder</a>, and <a href=\"https://spoonacular.com/recipes/chicken-and-cheese-enchilada-chowder-rewind-473949\">Chicken and Cheese Enchilada Chowder { Rewind}</a> are very similar to this recipe.",
//             "cuisines": [
//                 "Mexican"
//             ],
//             "dishTypes": [
//                 "lunch",
//                 "soup",
//                 "main course",
//                 "main dish",
//                 "dinner"
//             ],
//             "diets": [
//                 "gluten free"
//             ],
//             "occasions": [],
//             "analyzedInstructions": [
//                 {
//                     "name": "",
//                     "steps": [
//                         {
//                             "number": 1,
//                             "step": "In a 5 quart slow cooker combine black beans, tomatoes, corn, onion, peppers and chilies. In a large bowl mix together the cream of chicken soup and enchilada sauce, gradually whisk in the milk until smooth.",
//                             "ingredients": [
//                                 {
//                                     "id": 6016,
//                                     "name": "cream of chicken soup",
//                                     "localizedName": "cream of chicken soup",
//                                     "image": "cream-of-chicken-soup.jpg"
//                                 },
//                                 {
//                                     "id": 6599,
//                                     "name": "enchilada sauce",
//                                     "localizedName": "enchilada sauce",
//                                     "image": "harissa.jpg"
//                                 },
//                                 {
//                                     "id": 16015,
//                                     "name": "black beans",
//                                     "localizedName": "black beans",
//                                     "image": "black-beans.jpg"
//                                 },
//                                 {
//                                     "id": 11529,
//                                     "name": "tomato",
//                                     "localizedName": "tomato",
//                                     "image": "tomato.png"
//                                 },
//                                 {
//                                     "id": 11819,
//                                     "name": "chili pepper",
//                                     "localizedName": "chili pepper",
//                                     "image": "red-chili.jpg"
//                                 },
//                                 {
//                                     "id": 10111333,
//                                     "name": "peppers",
//                                     "localizedName": "peppers",
//                                     "image": "green-pepper.jpg"
//                                 },
//                                 {
//                                     "id": 11282,
//                                     "name": "onion",
//                                     "localizedName": "onion",
//                                     "image": "brown-onion.png"
//                                 },
//                                 {
//                                     "id": 11168,
//                                     "name": "corn",
//                                     "localizedName": "corn",
//                                     "image": "corn.png"
//                                 },
//                                 {
//                                     "id": 1077,
//                                     "name": "milk",
//                                     "localizedName": "milk",
//                                     "image": "milk.png"
//                                 }
//                             ],
//                             "equipment": [
//                                 {
//                                     "id": 404718,
//                                     "name": "slow cooker",
//                                     "localizedName": "slow cooker",
//                                     "image": "slow-cooker.jpg"
//                                 },
//                                 {
//                                     "id": 404661,
//                                     "name": "whisk",
//                                     "localizedName": "whisk",
//                                     "image": "whisk.png"
//                                 },
//                                 {
//                                     "id": 404783,
//                                     "name": "bowl",
//                                     "localizedName": "bowl",
//                                     "image": "bowl.jpg"
//                                 }
//                             ]
//                         },
//                         {
//                             "number": 2,
//                             "step": "Lay the chicken on top of the veggie mixture and top with the soup mixture, cover and cook on low for 6-8 hours or on high for 3-4 hours. When the chowder is ready pull out the chicken and shred the meat, then place the meat back into the slow cooker and stir in the cheese.",
//                             "ingredients": [
//                                 {
//                                     "id": 0,
//                                     "name": "chicken",
//                                     "localizedName": "chicken",
//                                     "image": "whole-chicken.jpg"
//                                 },
//                                 {
//                                     "id": 0,
//                                     "name": "chowder",
//                                     "localizedName": "chowder",
//                                     "image": ""
//                                 },
//                                 {
//                                     "id": 1041009,
//                                     "name": "cheese",
//                                     "localizedName": "cheese",
//                                     "image": "cheddar-cheese.png"
//                                 },
//                                 {
//                                     "id": 1065062,
//                                     "name": "meat",
//                                     "localizedName": "meat",
//                                     "image": "whole-chicken.jpg"
//                                 },
//                                 {
//                                     "id": 0,
//                                     "name": "soup",
//                                     "localizedName": "soup",
//                                     "image": ""
//                                 }
//                             ],
//                             "equipment": [
//                                 {
//                                     "id": 404718,
//                                     "name": "slow cooker",
//                                     "localizedName": "slow cooker",
//                                     "image": "slow-cooker.jpg"
//                                 }
//                             ],
//                             "length": {
//                                 "number": 720,
//                                 "unit": "minutes"
//                             }
//                         },
//                         {
//                             "number": 3,
//                             "step": "Let the chowder cook until all of the cheese is melted. Ladle into bowls and top with sour cream and tortilla chips.",
//                             "ingredients": [
//                                 {
//                                     "id": 19056,
//                                     "name": "tortilla chips",
//                                     "localizedName": "tortilla chips",
//                                     "image": "tortilla-chips.jpg"
//                                 },
//                                 {
//                                     "id": 1056,
//                                     "name": "sour cream",
//                                     "localizedName": "sour cream",
//                                     "image": "sour-cream.jpg"
//                                 },
//                                 {
//                                     "id": 0,
//                                     "name": "chowder",
//                                     "localizedName": "chowder",
//                                     "image": ""
//                                 },
//                                 {
//                                     "id": 1041009,
//                                     "name": "cheese",
//                                     "localizedName": "cheese",
//                                     "image": "cheddar-cheese.png"
//                                 }
//                             ],
//                             "equipment": [
//                                 {
//                                     "id": 404783,
//                                     "name": "bowl",
//                                     "localizedName": "bowl",
//                                     "image": "bowl.jpg"
//                                 },
//                                 {
//                                     "id": 404630,
//                                     "name": "ladle",
//                                     "localizedName": "ladle",
//                                     "image": "ladle.jpg"
//                                 }
//                             ]
//                         }
//                     ]
//                 }
//             ],
//             "spoonacularScore": 68.26432037353516,
//             "spoonacularSourceUrl": "https://spoonacular.com/chicken-enchilada-chowder-638073",
//             "nutrition": {
//                 "nutrients": [
//                     {
//                         "name": "Protein",
//                         "amount": 31.9836,
//                         "unit": "g"
//                     }
//                 ]
//             }
//         },
//         {
//             "vegetarian": false,
//             "vegan": false,
//             "glutenFree": false,
//             "dairyFree": false,
//             "veryHealthy": false,
//             "cheap": false,
//             "veryPopular": false,
//             "sustainable": false,
//             "lowFodmap": false,
//             "weightWatcherSmartPoints": 9,
//             "gaps": "no",
//             "preparationMinutes": -1,
//             "cookingMinutes": -1,
//             "aggregateLikes": 36,
//             "healthScore": 17,
//             "creditsText": "foodista.com",
//             "sourceName": "foodista.com",
//             "pricePerServing": 250.04,
//             "id": 638199,
//             "title": "Chicken Mulligatawny Soup",
//             "readyInMinutes": 45,
//             "servings": 6,
//             "sourceUrl": "http://www.foodista.com/recipe/FLJTTJNH/chicken-mulligatawny-soup",
//             "image": "https://spoonacular.com/recipeImages/638199-312x231.jpg",
//             "imageType": "jpg",
//             "summary": "The recipe Chicken Mulligatawny Soup can be made <b>in around 45 minutes</b>. This main course has <b>368 calories</b>, <b>27g of protein</b>, and <b>10g of fat</b> per serving. This recipe serves 6. For <b>$2.5 per serving</b>, this recipe <b>covers 22%</b> of your daily requirements of vitamins and minerals. A couple people made this recipe, and 36 would say it hit the spot. It is brought to you by Foodista. <b>Autumn</b> will be even more special with this recipe. Head to the store and pick up apples, basmati rice, cayenne pepper, and a few other things to make it today. With a spoonacular <b>score of 74%</b>, this dish is pretty good. <a href=\"https://spoonacular.com/recipes/chicken-mulligatawny-soup-1589473\">Chicken Mulligatawny Soup</a>, <a href=\"https://spoonacular.com/recipes/chicken-mulligatawny-soup-678904\">Chicken Mulligatawny Soup</a>, and <a href=\"https://spoonacular.com/recipes/mulligatawny-soup-chicken-94598\">Mulligatawny Soup ( Chicken )</a> are very similar to this recipe.",
//             "cuisines": [],
//             "dishTypes": [
//                 "lunch",
//                 "soup",
//                 "main course",
//                 "main dish",
//                 "dinner"
//             ],
//             "diets": [],
//             "occasions": [
//                 "fall",
//                 "winter"
//             ],
//             "analyzedInstructions": [
//                 {
//                     "name": "",
//                     "steps": [
//                         {
//                             "number": 1,
//                             "step": "Heat the butter in a large pot over medium heat.",
//                             "ingredients": [
//                                 {
//                                     "id": 1001,
//                                     "name": "butter",
//                                     "localizedName": "butter",
//                                     "image": "butter-sliced.jpg"
//                                 }
//                             ],
//                             "equipment": [
//                                 {
//                                     "id": 404752,
//                                     "name": "pot",
//                                     "localizedName": "pot",
//                                     "image": "stock-pot.jpg"
//                                 }
//                             ]
//                         },
//                         {
//                             "number": 2,
//                             "step": "Add the onions, celery, carrots, apples and ginger. Saut for 5 minutesstirring occasionally.",
//                             "ingredients": [
//                                 {
//                                     "id": 11124,
//                                     "name": "carrot",
//                                     "localizedName": "carrot",
//                                     "image": "sliced-carrot.png"
//                                 },
//                                 {
//                                     "id": 9003,
//                                     "name": "apple",
//                                     "localizedName": "apple",
//                                     "image": "apple.jpg"
//                                 },
//                                 {
//                                     "id": 11143,
//                                     "name": "celery",
//                                     "localizedName": "celery",
//                                     "image": "celery.jpg"
//                                 },
//                                 {
//                                     "id": 11216,
//                                     "name": "ginger",
//                                     "localizedName": "ginger",
//                                     "image": "ginger.png"
//                                 },
//                                 {
//                                     "id": 11282,
//                                     "name": "onion",
//                                     "localizedName": "onion",
//                                     "image": "brown-onion.png"
//                                 }
//                             ],
//                             "equipment": []
//                         },
//                         {
//                             "number": 3,
//                             "step": "Mix in the flour, curry powder and cayenne pepper. Stir another 3-5 minutes, then add the chicken stock, rice chopped chicken and 1 tsp. salt.Bring to a boil and lower the heat to a simmer. Simmer for 15 minutesor until the rice is tender and the chicken has cooked through.",
//                             "ingredients": [
//                                 {
//                                     "id": 2031,
//                                     "name": "cayenne pepper",
//                                     "localizedName": "cayenne pepper",
//                                     "image": "chili-powder.jpg"
//                                 },
//                                 {
//                                     "id": 6172,
//                                     "name": "chicken stock",
//                                     "localizedName": "chicken stock",
//                                     "image": "chicken-broth.png"
//                                 },
//                                 {
//                                     "id": 2015,
//                                     "name": "curry powder",
//                                     "localizedName": "curry powder",
//                                     "image": "curry-powder.jpg"
//                                 },
//                                 {
//                                     "id": 0,
//                                     "name": "chicken",
//                                     "localizedName": "chicken",
//                                     "image": "whole-chicken.jpg"
//                                 },
//                                 {
//                                     "id": 20081,
//                                     "name": "all purpose flour",
//                                     "localizedName": "all purpose flour",
//                                     "image": "flour.png"
//                                 },
//                                 {
//                                     "id": 20444,
//                                     "name": "rice",
//                                     "localizedName": "rice",
//                                     "image": "uncooked-white-rice.png"
//                                 },
//                                 {
//                                     "id": 2047,
//                                     "name": "salt",
//                                     "localizedName": "salt",
//                                     "image": "salt.jpg"
//                                 }
//                             ],
//                             "equipment": [],
//                             "length": {
//                                 "number": 5,
//                                 "unit": "minutes"
//                             }
//                         },
//                         {
//                             "number": 4,
//                             "step": "Add the coconut milk and salt and pepper to taste.",
//                             "ingredients": [
//                                 {
//                                     "id": 1102047,
//                                     "name": "salt and pepper",
//                                     "localizedName": "salt and pepper",
//                                     "image": "salt-and-pepper.jpg"
//                                 },
//                                 {
//                                     "id": 12118,
//                                     "name": "coconut milk",
//                                     "localizedName": "coconut milk",
//                                     "image": "coconut-milk.png"
//                                 }
//                             ],
//                             "equipment": []
//                         },
//                         {
//                             "number": 5,
//                             "step": "Garnish with toasted almonds or cilantro!",
//                             "ingredients": [
//                                 {
//                                     "id": 11165,
//                                     "name": "cilantro",
//                                     "localizedName": "cilantro",
//                                     "image": "cilantro.png"
//                                 },
//                                 {
//                                     "id": 12061,
//                                     "name": "almonds",
//                                     "localizedName": "almonds",
//                                     "image": "almonds.jpg"
//                                 }
//                             ],
//                             "equipment": []
//                         }
//                     ]
//                 }
//             ],
//             "spoonacularScore": 76.15169525146484,
//             "spoonacularSourceUrl": "https://spoonacular.com/chicken-mulligatawny-soup-638199",
//             "nutrition": {
//                 "nutrients": [
//                     {
//                         "name": "Protein",
//                         "amount": 27.0249,
//                         "unit": "g"
//                     }
//                 ]
//             }
//         },
//         {
//             "vegetarian": false,
//             "vegan": false,
//             "glutenFree": true,
//             "dairyFree": true,
//             "veryHealthy": false,
//             "cheap": false,
//             "veryPopular": false,
//             "sustainable": false,
//             "lowFodmap": false,
//             "weightWatcherSmartPoints": 8,
//             "gaps": "no",
//             "preparationMinutes": -1,
//             "cookingMinutes": -1,
//             "aggregateLikes": 1,
//             "healthScore": 14,
//             "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
//             "license": "CC BY 3.0",
//             "sourceName": "Foodista",
//             "pricePerServing": 240.35,
//             "id": 638292,
//             "title": "Chicken Rou Zao With Rice",
//             "readyInMinutes": 45,
//             "servings": 4,
//             "sourceUrl": "https://www.foodista.com/recipe/KXKDKYBM/chicken-rou-zao-with-rice",
//             "image": "https://spoonacular.com/recipeImages/638292-312x231.jpg",
//             "imageType": "jpg",
//             "summary": "If you want to add more <b>gluten free and dairy free</b> recipes to your recipe box, Chicken Rou Zao With Rice might be a recipe you should try. This recipe makes 4 servings with <b>297 calories</b>, <b>24g of protein</b>, and <b>15g of fat</b> each. For <b>$2.4 per serving</b>, this recipe <b>covers 19%</b> of your daily requirements of vitamins and minerals. Only a few people made this recipe, and 1 would say it hit the spot. This recipe from Foodista requires cloves, rice wine, mushroom, and sesame oil. It works well as a main course. From preparation to the plate, this recipe takes around <b>45 minutes</b>. Taking all factors into account, this recipe <b>earns a spoonacular score of 47%</b>, which is good. Similar recipes include <a href=\"https://spoonacular.com/recipes/taiwanese-meat-sauce-with-rice-lu-rou-fan-149169\">Taiwanese Meat Sauce With Rice (Lu Rou Fan)</a>, <a href=\"https://spoonacular.com/recipes/taiwanese-braised-minced-pork-over-rice-lu-rou-fan-721446\">Taiwanese braised minced pork over rice (lu rou fan)</a>, and <a href=\"https://spoonacular.com/recipes/xiao-kou-zao-deep-fried-sesame-balls-761260\">Xiao Kou Zao (Deep-Fried Sesame Balls)</a>.",
//             "cuisines": [],
//             "dishTypes": [
//                 "lunch",
//                 "main course",
//                 "main dish",
//                 "dinner"
//             ],
//             "diets": [
//                 "gluten free",
//                 "dairy free"
//             ],
//             "occasions": [],
//             "analyzedInstructions": [
//                 {
//                     "name": "",
//                     "steps": [
//                         {
//                             "number": 1,
//                             "step": "Wrap and tie star anise and cloves in cheese cloth",
//                             "ingredients": [
//                                 {
//                                     "id": 1012002,
//                                     "name": "star anise",
//                                     "localizedName": "star anise",
//                                     "image": "star-anise.jpg"
//                                 },
//                                 {
//                                     "id": 1041009,
//                                     "name": "cheese",
//                                     "localizedName": "cheese",
//                                     "image": "cheddar-cheese.png"
//                                 },
//                                 {
//                                     "id": 1002011,
//                                     "name": "clove",
//                                     "localizedName": "clove",
//                                     "image": "cloves.jpg"
//                                 },
//                                 {
//                                     "id": 10018364,
//                                     "name": "wrap",
//                                     "localizedName": "wrap",
//                                     "image": "flour-tortilla.jpg"
//                                 }
//                             ],
//                             "equipment": [
//                                 {
//                                     "id": 404647,
//                                     "name": "cheesecloth",
//                                     "localizedName": "cheesecloth",
//                                     "image": "cheesecloth.jpg"
//                                 }
//                             ]
//                         },
//                         {
//                             "number": 2,
//                             "step": "Heat oil in a pot at medium heat.",
//                             "ingredients": [
//                                 {
//                                     "id": 4582,
//                                     "name": "cooking oil",
//                                     "localizedName": "cooking oil",
//                                     "image": "vegetable-oil.jpg"
//                                 }
//                             ],
//                             "equipment": [
//                                 {
//                                     "id": 404752,
//                                     "name": "pot",
//                                     "localizedName": "pot",
//                                     "image": "stock-pot.jpg"
//                                 }
//                             ]
//                         },
//                         {
//                             "number": 3,
//                             "step": "Put in shallots and saut slowly, about 3-6 minutes, or until translucent",
//                             "ingredients": [
//                                 {
//                                     "id": 11677,
//                                     "name": "shallot",
//                                     "localizedName": "shallot",
//                                     "image": "shallots.jpg"
//                                 }
//                             ],
//                             "equipment": [],
//                             "length": {
//                                 "number": 6,
//                                 "unit": "minutes"
//                             }
//                         },
//                         {
//                             "number": 4,
//                             "step": "Add the mushrooms and garlic and saut for 1 minute.",
//                             "ingredients": [
//                                 {
//                                     "id": 11260,
//                                     "name": "mushrooms",
//                                     "localizedName": "mushrooms",
//                                     "image": "mushrooms.png"
//                                 },
//                                 {
//                                     "id": 11215,
//                                     "name": "garlic",
//                                     "localizedName": "garlic",
//                                     "image": "garlic.png"
//                                 }
//                             ],
//                             "equipment": [],
//                             "length": {
//                                 "number": 1,
//                                 "unit": "minutes"
//                             }
//                         },
//                         {
//                             "number": 5,
//                             "step": "Increase heat to medium-high and put in the chicken. Saut until the chicken is cooked.",
//                             "ingredients": [
//                                 {
//                                     "id": 0,
//                                     "name": "chicken",
//                                     "localizedName": "chicken",
//                                     "image": "whole-chicken.jpg"
//                                 }
//                             ],
//                             "equipment": []
//                         },
//                         {
//                             "number": 6,
//                             "step": "Reduce heat to low",
//                             "ingredients": [],
//                             "equipment": []
//                         },
//                         {
//                             "number": 7,
//                             "step": "Add in all the sauces and spices, except for sesame oil.",
//                             "ingredients": [
//                                 {
//                                     "id": 4058,
//                                     "name": "sesame oil",
//                                     "localizedName": "sesame oil",
//                                     "image": "sesame-oil.png"
//                                 },
//                                 {
//                                     "id": 2035,
//                                     "name": "spices",
//                                     "localizedName": "spices",
//                                     "image": "spices.png"
//                                 }
//                             ],
//                             "equipment": []
//                         },
//                         {
//                             "number": 8,
//                             "step": "Make sure there is enough liquid almost covers the chicken.",
//                             "ingredients": [
//                                 {
//                                     "id": 0,
//                                     "name": "chicken",
//                                     "localizedName": "chicken",
//                                     "image": "whole-chicken.jpg"
//                                 }
//                             ],
//                             "equipment": []
//                         },
//                         {
//                             "number": 9,
//                             "step": "Taste the dish.",
//                             "ingredients": [],
//                             "equipment": []
//                         },
//                         {
//                             "number": 10,
//                             "step": "Add soy sauce if you want a saltier dish, spice if you want more aroma, or rice wine (or chicken broth) if you want to blend it down.",
//                             "ingredients": [
//                                 {
//                                     "id": 6194,
//                                     "name": "chicken broth",
//                                     "localizedName": "chicken broth",
//                                     "image": "chicken-broth.png"
//                                 },
//                                 {
//                                     "id": 43479,
//                                     "name": "rice wine",
//                                     "localizedName": "rice wine",
//                                     "image": "vinegar-(white).jpg"
//                                 },
//                                 {
//                                     "id": 16124,
//                                     "name": "soy sauce",
//                                     "localizedName": "soy sauce",
//                                     "image": "soy-sauce.jpg"
//                                 }
//                             ],
//                             "equipment": []
//                         },
//                         {
//                             "number": 11,
//                             "step": "Simmer (lowest heat) for 30 minutes. Stir occasionally",
//                             "ingredients": [],
//                             "equipment": [],
//                             "length": {
//                                 "number": 30,
//                                 "unit": "minutes"
//                             }
//                         }
//                     ]
//                 }
//             ],
//             "spoonacularScore": 58.2946662902832,
//             "spoonacularSourceUrl": "https://spoonacular.com/chicken-rou-zao-with-rice-638292",
//             "nutrition": {
//                 "nutrients": [
//                     {
//                         "name": "Protein",
//                         "amount": 24.0317,
//                         "unit": "g"
//                     }
//                 ]
//             }
//         },
//         {
//             "vegetarian": false,
//             "vegan": false,
//             "glutenFree": false,
//             "dairyFree": false,
//             "veryHealthy": false,
//             "cheap": false,
//             "veryPopular": false,
//             "sustainable": false,
//             "lowFodmap": false,
//             "weightWatcherSmartPoints": 9,
//             "gaps": "no",
//             "preparationMinutes": -1,
//             "cookingMinutes": -1,
//             "aggregateLikes": 1,
//             "healthScore": 25,
//             "creditsText": "foodista.com",
//             "sourceName": "foodista.com",
//             "pricePerServing": 185.11,
//             "id": 637898,
//             "title": "Chicken and Dumpling Soup",
//             "readyInMinutes": 45,
//             "servings": 6,
//             "sourceUrl": "http://www.foodista.com/recipe/XKLYLRB5/chicken-and-dumpling-soup",
//             "image": "https://spoonacular.com/recipeImages/637898-312x231.jpg",
//             "imageType": "jpg",
//             "summary": "Chicken and Dumpling Soup is a main course that serves 6. One serving contains <b>381 calories</b>, <b>33g of protein</b>, and <b>8g of fat</b>. For <b>$1.85 per serving</b>, this recipe <b>covers 26%</b> of your daily requirements of vitamins and minerals. <b>Autumn</b> will be even more special with this recipe. It is brought to you by Foodista. 1 person found this recipe to be flavorful and satisfying. Head to the store and pick up chicken breasts, carrots, oregano, and a few other things to make it today. From preparation to the plate, this recipe takes approximately <b>45 minutes</b>. Overall, this recipe earns a <b>pretty good spoonacular score of 71%</b>. Try <a href=\"https://spoonacular.com/recipes/chicken-dumpling-soup-513628\">Chicken Dumpling Soup</a>, <a href=\"https://spoonacular.com/recipes/chicken-dumpling-soup-828477\">Chicken Dumpling Soup</a>, and <a href=\"https://spoonacular.com/recipes/chicken-and-dumpling-soup-617447\">Chicken and Dumpling Soup</a> for similar recipes.",
//             "cuisines": [],
//             "dishTypes": [
//                 "lunch",
//                 "soup",
//                 "main course",
//                 "main dish",
//                 "dinner"
//             ],
//             "diets": [],
//             "occasions": [
//                 "fall",
//                 "winter"
//             ],
//             "analyzedInstructions": [
//                 {
//                     "name": "",
//                     "steps": [
//                         {
//                             "number": 1,
//                             "step": "Start out by putting together the dough for your dumplings.",
//                             "ingredients": [
//                                 {
//                                     "id": 0,
//                                     "name": "dough",
//                                     "localizedName": "dough",
//                                     "image": "pizza-dough"
//                                 }
//                             ],
//                             "equipment": []
//                         },
//                         {
//                             "number": 2,
//                             "step": "Mix together the flour, salt and baking powder. Then slowly add in your ice water. Keep adding it in until you have enough to form a nice dough ball. Knead your dough for about 5 minutes and then set it the side and let it rest while you work on the other end of the soup.In a large pot add together your stock, chicken, carrots, celery, garlic, basil, oregano, and celery salt.",
//                             "ingredients": [
//                                 {
//                                     "id": 18369,
//                                     "name": "baking powder",
//                                     "localizedName": "baking powder",
//                                     "image": "white-powder.jpg"
//                                 },
//                                 {
//                                     "id": 1052047,
//                                     "name": "celery salt",
//                                     "localizedName": "celery salt",
//                                     "image": "garlic-salt.jpg"
//                                 },
//                                 {
//                                     "id": 14412,
//                                     "name": "water",
//                                     "localizedName": "water",
//                                     "image": "water.png"
//                                 },
//                                 {
//                                     "id": 11124,
//                                     "name": "carrot",
//                                     "localizedName": "carrot",
//                                     "image": "sliced-carrot.png"
//                                 },
//                                 {
//                                     "id": 0,
//                                     "name": "chicken",
//                                     "localizedName": "chicken",
//                                     "image": "whole-chicken.jpg"
//                                 },
//                                 {
//                                     "id": 2027,
//                                     "name": "oregano",
//                                     "localizedName": "oregano",
//                                     "image": "oregano.jpg"
//                                 },
//                                 {
//                                     "id": 11143,
//                                     "name": "celery",
//                                     "localizedName": "celery",
//                                     "image": "celery.jpg"
//                                 },
//                                 {
//                                     "id": 11215,
//                                     "name": "garlic",
//                                     "localizedName": "garlic",
//                                     "image": "garlic.png"
//                                 },
//                                 {
//                                     "id": 2044,
//                                     "name": "basil",
//                                     "localizedName": "basil",
//                                     "image": "basil.jpg"
//                                 },
//                                 {
//                                     "id": 0,
//                                     "name": "dough",
//                                     "localizedName": "dough",
//                                     "image": "pizza-dough"
//                                 },
//                                 {
//                                     "id": 20081,
//                                     "name": "all purpose flour",
//                                     "localizedName": "all purpose flour",
//                                     "image": "flour.png"
//                                 },
//                                 {
//                                     "id": 1006615,
//                                     "name": "stock",
//                                     "localizedName": "stock",
//                                     "image": "chicken-broth.png"
//                                 },
//                                 {
//                                     "id": 2047,
//                                     "name": "salt",
//                                     "localizedName": "salt",
//                                     "image": "salt.jpg"
//                                 },
//                                 {
//                                     "id": 0,
//                                     "name": "soup",
//                                     "localizedName": "soup",
//                                     "image": ""
//                                 }
//                             ],
//                             "equipment": [
//                                 {
//                                     "id": 404752,
//                                     "name": "pot",
//                                     "localizedName": "pot",
//                                     "image": "stock-pot.jpg"
//                                 }
//                             ],
//                             "length": {
//                                 "number": 5,
//                                 "unit": "minutes"
//                             }
//                         },
//                         {
//                             "number": 3,
//                             "step": "Heat it up on medium heat and let the chicken cook through. When the chicken is cooked, remove it and set it to the side.Now grab up your dough and roll it out about 1/4\" thick with your rolling pin.",
//                             "ingredients": [
//                                 {
//                                     "id": 0,
//                                     "name": "chicken",
//                                     "localizedName": "chicken",
//                                     "image": "whole-chicken.jpg"
//                                 },
//                                 {
//                                     "id": 0,
//                                     "name": "dough",
//                                     "localizedName": "dough",
//                                     "image": "pizza-dough"
//                                 },
//                                 {
//                                     "id": 0,
//                                     "name": "roll",
//                                     "localizedName": "roll",
//                                     "image": "dinner-yeast-rolls.jpg"
//                                 }
//                             ],
//                             "equipment": [
//                                 {
//                                     "id": 404746,
//                                     "name": "rolling pin",
//                                     "localizedName": "rolling pin",
//                                     "image": "rolling-pin.jpg"
//                                 }
//                             ]
//                         },
//                         {
//                             "number": 4,
//                             "step": "Cut it into small squares and place them in your hot broth. As they cook up, they will rise to the top of the broth.While your dumplings are cooking, go ahead and shred your chicken up.",
//                             "ingredients": [
//                                 {
//                                     "id": 0,
//                                     "name": "chicken",
//                                     "localizedName": "chicken",
//                                     "image": "whole-chicken.jpg"
//                                 },
//                                 {
//                                     "id": 1006615,
//                                     "name": "broth",
//                                     "localizedName": "broth",
//                                     "image": "chicken-broth.png"
//                                 }
//                             ],
//                             "equipment": []
//                         },
//                         {
//                             "number": 5,
//                             "step": "Add it to your soup. Last but not least, add in the half and half and give it a couple swirls around the pan to incorporate everything together.",
//                             "ingredients": [
//                                 {
//                                     "id": 1049,
//                                     "name": "half and half",
//                                     "localizedName": "half and half",
//                                     "image": "fluid-cream.jpg"
//                                 },
//                                 {
//                                     "id": 0,
//                                     "name": "soup",
//                                     "localizedName": "soup",
//                                     "image": ""
//                                 }
//                             ],
//                             "equipment": [
//                                 {
//                                     "id": 404645,
//                                     "name": "frying pan",
//                                     "localizedName": "frying pan",
//                                     "image": "pan.png"
//                                 }
//                             ]
//                         }
//                     ]
//                 }
//             ],
//             "spoonacularScore": 71.44202423095703,
//             "spoonacularSourceUrl": "https://spoonacular.com/chicken-and-dumpling-soup-637898",
//             "nutrition": {
//                 "nutrients": [
//                     {
//                         "name": "Protein",
//                         "amount": 33.4811,
//                         "unit": "g"
//                     }
//                 ]
//             }
//         },
//         {
//             "vegetarian": false,
//             "vegan": false,
//             "glutenFree": true,
//             "dairyFree": true,
//             "veryHealthy": false,
//             "cheap": false,
//             "veryPopular": false,
//             "sustainable": false,
//             "lowFodmap": false,
//             "weightWatcherSmartPoints": 11,
//             "gaps": "no",
//             "preparationMinutes": -1,
//             "cookingMinutes": -1,
//             "aggregateLikes": 1,
//             "healthScore": 24,
//             "creditsText": "foodista.com",
//             "sourceName": "foodista.com",
//             "pricePerServing": 134.23,
//             "id": 637996,
//             "title": "Chicken Brown \"Fried\" Rice",
//             "readyInMinutes": 45,
//             "servings": 5,
//             "sourceUrl": "http://www.foodista.com/recipe/ZBZ7SBV2/chicken-brown-fried-rice",
//             "image": "https://spoonacular.com/recipeImages/637996-312x231.jpg",
//             "imageType": "jpg",
//             "summary": "Chicken Brown \"Fried\" Rice could be just the <b>gluten free and dairy free</b> recipe you've been looking for. This main course has <b>468 calories</b>, <b>16g of protein</b>, and <b>11g of fat</b> per serving. This recipe serves 5 and costs $1.34 per serving. Head to the store and pick up olive oil, reduced sodium soy sauce, chicken breast, and a few other things to make it today. It is brought to you by Foodista. 1 person were glad they tried this recipe. From preparation to the plate, this recipe takes approximately <b>45 minutes</b>. Taking all factors into account, this recipe <b>earns a spoonacular score of 83%</b>, which is excellent. Similar recipes are <a href=\"https://spoonacular.com/recipes/chicken-brown-fried-rice-1300957\">Chicken Brown \"Fried\" Rice</a>, <a href=\"https://spoonacular.com/recipes/chicken-brown-fried-rice-1214543\">Chicken Brown \"Fried\" Rice</a>, and <a href=\"https://spoonacular.com/recipes/brown-fried-rice-with-chicken-and-vegetables-483753\">Brown Fried Rice with Chicken and Vegetables</a>.",
//             "cuisines": [],
//             "dishTypes": [
//                 "lunch",
//                 "main course",
//                 "main dish",
//                 "dinner"
//             ],
//             "diets": [
//                 "gluten free",
//                 "dairy free"
//             ],
//             "occasions": [],
//             "analyzedInstructions": [
//                 {
//                     "name": "",
//                     "steps": [
//                         {
//                             "number": 1,
//                             "step": "Cook the rice according to the package directions, drain and set aside.In a large saute pan, over medium heat, add the olive oil. *If you need to cook the chicken, dice it up and toss in now. Cook for just a few minutes before continuing with the recipe*",
//                             "ingredients": [
//                                 {
//                                     "id": 4053,
//                                     "name": "olive oil",
//                                     "localizedName": "olive oil",
//                                     "image": "olive-oil.jpg"
//                                 },
//                                 {
//                                     "id": 0,
//                                     "name": "chicken",
//                                     "localizedName": "chicken",
//                                     "image": "whole-chicken.jpg"
//                                 },
//                                 {
//                                     "id": 20444,
//                                     "name": "rice",
//                                     "localizedName": "rice",
//                                     "image": "uncooked-white-rice.png"
//                                 }
//                             ],
//                             "equipment": [
//                                 {
//                                     "id": 404645,
//                                     "name": "frying pan",
//                                     "localizedName": "frying pan",
//                                     "image": "pan.png"
//                                 }
//                             ]
//                         },
//                         {
//                             "number": 2,
//                             "step": "Add in the garlic and carrots and cook until the carrots are softened.Crack the eggs into the pan and mix in with the veg. Once the egg is cooked through, add in the diced chicken. Allow the chicken to warm through a bit.Stir in the cooked rice and pineapple.",
//                             "ingredients": [
//                                 {
//                                     "id": 10220445,
//                                     "name": "cooked rice",
//                                     "localizedName": "cooked rice",
//                                     "image": "uncooked-white-rice.png"
//                                 },
//                                 {
//                                     "id": 9266,
//                                     "name": "pineapple",
//                                     "localizedName": "pineapple",
//                                     "image": "pineapple.jpg"
//                                 },
//                                 {
//                                     "id": 11124,
//                                     "name": "carrot",
//                                     "localizedName": "carrot",
//                                     "image": "sliced-carrot.png"
//                                 },
//                                 {
//                                     "id": 0,
//                                     "name": "chicken",
//                                     "localizedName": "chicken",
//                                     "image": "whole-chicken.jpg"
//                                 },
//                                 {
//                                     "id": 11215,
//                                     "name": "garlic",
//                                     "localizedName": "garlic",
//                                     "image": "garlic.png"
//                                 },
//                                 {
//                                     "id": 1123,
//                                     "name": "egg",
//                                     "localizedName": "egg",
//                                     "image": "egg.png"
//                                 }
//                             ],
//                             "equipment": [
//                                 {
//                                     "id": 404645,
//                                     "name": "frying pan",
//                                     "localizedName": "frying pan",
//                                     "image": "pan.png"
//                                 }
//                             ]
//                         },
//                         {
//                             "number": 3,
//                             "step": "Add in the soy sauce and peas. Cook until all the ingredients are warmed through, about 5-8 minutes.",
//                             "ingredients": [
//                                 {
//                                     "id": 16124,
//                                     "name": "soy sauce",
//                                     "localizedName": "soy sauce",
//                                     "image": "soy-sauce.jpg"
//                                 },
//                                 {
//                                     "id": 11304,
//                                     "name": "peas",
//                                     "localizedName": "peas",
//                                     "image": "peas.jpg"
//                                 }
//                             ],
//                             "equipment": [],
//                             "length": {
//                                 "number": 8,
//                                 "unit": "minutes"
//                             }
//                         }
//                     ]
//                 }
//             ],
//             "spoonacularScore": 70.96853637695312,
//             "spoonacularSourceUrl": "https://spoonacular.com/chicken-brown-fried-rice-637996",
//             "nutrition": {
//                 "nutrients": [
//                     {
//                         "name": "Protein",
//                         "amount": 16.3444,
//                         "unit": "g"
//                     }
//                 ]
//             }
//         }
//     ],
//     "offset": 0,
//     "number": 30,
//     "totalResults": 536
// }