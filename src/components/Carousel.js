import { useSelector } from "react-redux";
import CarouselItem from "./CarouselItem";
import { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

const Carousel = () => {

    const randomRecipes = useSelector(store => store.recipes.randomRecipes);

    const [currentIndex,setCurrentIndex] = useState(0);
    
    const prevSlide = ()=>{
        const firstSlide = currentIndex === 0;
        const newIndex = firstSlide ? randomRecipes.length-1 : currentIndex-1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = ()=>{
        const lastSlide = currentIndex === randomRecipes.length-1;
        const newIndex = lastSlide ? 0 : currentIndex+1;
        setCurrentIndex(newIndex);
    };

    if(!randomRecipes)  return null;
    return (
        <div className="mt-[10%] group ">
            <div className="hidden group-hover:block absolute top-[50%] left-4 cursor-pointer">
                <BsChevronCompactLeft size={35} onClick={prevSlide}/>
            </div>
            <CarouselItem recipe={randomRecipes[currentIndex]}/>
            <div className="hidden group-hover:block absolute top-[50%] right-4 cursor-pointer">
                <BsChevronCompactRight size={35} onClick={nextSlide}/>
            </div>
        </div>
    )
}

export default Carousel


// [
//     {
//         "vegetarian": false,
//         "vegan": false,
//         "glutenFree": false,
//         "dairyFree": false,
//         "veryHealthy": false,
//         "cheap": false,
//         "veryPopular": false,
//         "sustainable": false,
//         "lowFodmap": false,
//         "weightWatcherSmartPoints": 9,
//         "gaps": "no",
//         "preparationMinutes": -1,
//         "cookingMinutes": -1,
//         "aggregateLikes": 2,
//         "healthScore": 33,
//         "creditsText": "foodista.com",
//         "sourceName": "foodista.com",
//         "pricePerServing": 457.06,
//         "extendedIngredients": [
//             {
//                 "id": 2031,
//                 "aisle": "Spices and Seasonings",
//                 "image": "chili-powder.jpg",
//                 "consistency": "SOLID",
//                 "name": "cayenne pepper",
//                 "nameClean": "ground cayenne pepper",
//                 "original": "1 tablespoon Cayenne pepper, ground",
//                 "originalName": "Cayenne pepper, ground",
//                 "amount": 1,
//                 "unit": "tablespoon",
//                 "meta": [],
//                 "measures": {
//                     "us": {
//                         "amount": 1,
//                         "unitShort": "Tbsp",
//                         "unitLong": "Tbsp"
//                     },
//                     "metric": {
//                         "amount": 1,
//                         "unitShort": "Tbsp",
//                         "unitLong": "Tbsp"
//                     }
//                 }
//             },
//             {
//                 "id": 6194,
//                 "aisle": "Canned and Jarred",
//                 "image": "chicken-broth.png",
//                 "consistency": "LIQUID",
//                 "name": "chicken broth",
//                 "nameClean": "chicken broth",
//                 "original": "1 1/3 cup chicken broth",
//                 "originalName": "chicken broth",
//                 "amount": 1.3333334,
//                 "unit": "cup",
//                 "meta": [],
//                 "measures": {
//                     "us": {
//                         "amount": 1.3333334,
//                         "unitShort": "cups",
//                         "unitLong": "cups"
//                     },
//                     "metric": {
//                         "amount": 313.333,
//                         "unitShort": "ml",
//                         "unitLong": "milliliters"
//                     }
//                 }
//             },
//             {
//                 "id": 20028,
//                 "aisle": "Health Foods",
//                 "image": "couscous-cooked.jpg",
//                 "consistency": "SOLID",
//                 "name": "couscous",
//                 "nameClean": "couscous",
//                 "original": "2/3 cup couscous",
//                 "originalName": "couscous",
//                 "amount": 0.6666667,
//                 "unit": "cup",
//                 "meta": [],
//                 "measures": {
//                     "us": {
//                         "amount": 0.6666667,
//                         "unitShort": "cups",
//                         "unitLong": "cups"
//                     },
//                     "metric": {
//                         "amount": 115.333,
//                         "unitShort": "ml",
//                         "unitLong": "milliliters"
//                     }
//                 }
//             },
//             {
//                 "id": 2064,
//                 "aisle": "Spices and Seasonings",
//                 "image": "mint.jpg",
//                 "consistency": "SOLID",
//                 "name": "mint leaves",
//                 "nameClean": "mint",
//                 "original": "10 fresh mint leaves",
//                 "originalName": "fresh mint leaves",
//                 "amount": 10,
//                 "unit": "",
//                 "meta": [
//                     "fresh"
//                 ],
//                 "measures": {
//                     "us": {
//                         "amount": 10,
//                         "unitShort": "",
//                         "unitLong": ""
//                     },
//                     "metric": {
//                         "amount": 10,
//                         "unitShort": "",
//                         "unitLong": ""
//                     }
//                 }
//             },
//             {
//                 "id": 93663,
//                 "aisle": "Spices and Seasonings",
//                 "image": "garam-masala.jpg",
//                 "consistency": "SOLID",
//                 "name": "garam masala spices",
//                 "nameClean": "garam masala",
//                 "original": "4 tbsp. garam masala spices*",
//                 "originalName": "garam masala spices",
//                 "amount": 4,
//                 "unit": "tbsp",
//                 "meta": [],
//                 "measures": {
//                     "us": {
//                         "amount": 4,
//                         "unitShort": "Tbsps",
//                         "unitLong": "Tbsps"
//                     },
//                     "metric": {
//                         "amount": 4,
//                         "unitShort": "Tbsps",
//                         "unitLong": "Tbsps"
//                     }
//                 }
//             },
//             {
//                 "id": 1012014,
//                 "aisle": "Spices and Seasonings",
//                 "image": "ground-cumin.jpg",
//                 "consistency": "SOLID",
//                 "name": "ground cumin",
//                 "nameClean": "ground cumin",
//                 "original": "1 tsp. ground cumin",
//                 "originalName": "ground cumin",
//                 "amount": 1,
//                 "unit": "tsp",
//                 "meta": [],
//                 "measures": {
//                     "us": {
//                         "amount": 1,
//                         "unitShort": "tsp",
//                         "unitLong": "teaspoon"
//                     },
//                     "metric": {
//                         "amount": 1,
//                         "unitShort": "tsp",
//                         "unitLong": "teaspoon"
//                     }
//                 }
//             },
//             {
//                 "id": 10066,
//                 "aisle": "Meat",
//                 "image": "pork-chops.jpg",
//                 "consistency": "SOLID",
//                 "name": "pork loin chops",
//                 "nameClean": "lean pork loin chops",
//                 "original": "4 6-oz. lean pork loin chops",
//                 "originalName": "lean pork loin chops",
//                 "amount": 24,
//                 "unit": "oz",
//                 "meta": [
//                     "lean"
//                 ],
//                 "measures": {
//                     "us": {
//                         "amount": 24,
//                         "unitShort": "oz",
//                         "unitLong": "ounces"
//                     },
//                     "metric": {
//                         "amount": 680.389,
//                         "unitShort": "g",
//                         "unitLong": "grams"
//                     }
//                 }
//             },
//             {
//                 "id": 9150,
//                 "aisle": "Produce",
//                 "image": "lemon.png",
//                 "consistency": "SOLID",
//                 "name": "lemon",
//                 "nameClean": "lemon",
//                 "original": "1 lemon",
//                 "originalName": "lemon",
//                 "amount": 1,
//                 "unit": "",
//                 "meta": [],
//                 "measures": {
//                     "us": {
//                         "amount": 1,
//                         "unitShort": "",
//                         "unitLong": ""
//                     },
//                     "metric": {
//                         "amount": 1,
//                         "unitShort": "",
//                         "unitLong": ""
//                     }
//                 }
//             },
//             {
//                 "id": 4053,
//                 "aisle": "Oil, Vinegar, Salad Dressing",
//                 "image": "olive-oil.jpg",
//                 "consistency": "SOLID",
//                 "name": "olive oil",
//                 "nameClean": "olive oil",
//                 "original": "2 tablespoons olive oil",
//                 "originalName": "olive oil",
//                 "amount": 2,
//                 "unit": "tablespoons",
//                 "meta": [],
//                 "measures": {
//                     "us": {
//                         "amount": 2,
//                         "unitShort": "Tbsps",
//                         "unitLong": "Tbsps"
//                     },
//                     "metric": {
//                         "amount": 2,
//                         "unitShort": "Tbsps",
//                         "unitLong": "Tbsps"
//                     }
//                 }
//             },
//             {
//                 "id": 9299,
//                 "aisle": "Baking",
//                 "image": "raisins.jpg",
//                 "consistency": "SOLID",
//                 "name": "raisins",
//                 "nameClean": "raisins",
//                 "original": "4 tsp. raisins",
//                 "originalName": "raisins",
//                 "amount": 4,
//                 "unit": "tsp",
//                 "meta": [],
//                 "measures": {
//                     "us": {
//                         "amount": 4,
//                         "unitShort": "tsps",
//                         "unitLong": "teaspoons"
//                     },
//                     "metric": {
//                         "amount": 4,
//                         "unitShort": "tsps",
//                         "unitLong": "teaspoons"
//                     }
//                 }
//             },
//             {
//                 "id": 2047,
//                 "aisle": "Spices and Seasonings",
//                 "image": "salt.jpg",
//                 "consistency": "SOLID",
//                 "name": "salt",
//                 "nameClean": "table salt",
//                 "original": "Salt to taste",
//                 "originalName": "Salt to taste",
//                 "amount": 4,
//                 "unit": "servings",
//                 "meta": [
//                     "to taste"
//                 ],
//                 "measures": {
//                     "us": {
//                         "amount": 4,
//                         "unitShort": "servings",
//                         "unitLong": "servings"
//                     },
//                     "metric": {
//                         "amount": 4,
//                         "unitShort": "servings",
//                         "unitLong": "servings"
//                     }
//                 }
//             },
//             {
//                 "id": 12023,
//                 "aisle": "Ethnic Foods",
//                 "image": "sesame-seeds.png",
//                 "consistency": "SOLID",
//                 "name": "sesame seeds",
//                 "nameClean": "sesame seeds",
//                 "original": "2 tsp. sesame seeds",
//                 "originalName": "sesame seeds",
//                 "amount": 2,
//                 "unit": "tsp",
//                 "meta": [],
//                 "measures": {
//                     "us": {
//                         "amount": 2,
//                         "unitShort": "tsps",
//                         "unitLong": "teaspoons"
//                     },
//                     "metric": {
//                         "amount": 2,
//                         "unitShort": "tsps",
//                         "unitLong": "teaspoons"
//                     }
//                 }
//             },
//             {
//                 "id": 1256,
//                 "aisle": "Milk, Eggs, Other Dairy",
//                 "image": "plain-yogurt.jpg",
//                 "consistency": "LIQUID",
//                 "name": "yogurt",
//                 "nameClean": "greek yogurt",
//                 "original": "1/2 cup Greek style yogurt",
//                 "originalName": "Greek style yogurt",
//                 "amount": 0.5,
//                 "unit": "cup",
//                 "meta": [
//                     "greek style"
//                 ],
//                 "measures": {
//                     "us": {
//                         "amount": 0.5,
//                         "unitShort": "cups",
//                         "unitLong": "cups"
//                     },
//                     "metric": {
//                         "amount": 100,
//                         "unitShort": "ml",
//                         "unitLong": "milliliters"
//                     }
//                 }
//             }
//         ],
//         "id": 644167,
//         "title": "Garam Masala Pork Chops with Mint Yogurt and Spiced Couscous",
//         "readyInMinutes": 45,
//         "servings": 4,
//         "sourceUrl": "http://www.foodista.com/recipe/6247HX8F/garam-masala-pork-chops-with-mint-yogurt-and-spiced-couscous",
//         "image": "https://img.spoonacular.com/recipes/644167-556x370.jpg",
//         "imageType": "jpg",
//         "summary": "Garam Masala Pork Chops with Mint Yogurt and Spiced Couscous might be just the <b>Indian</b> recipe you are searching for. For <b>$4.57 per serving</b>, you get a main course that serves 4. One serving contains <b>461 calories</b>, <b>47g of protein</b>, and <b>15g of fat</b>. This recipe from Foodista requires yogurt, raisins, couscous, and lemon. 2 people have made this recipe and would make it again. From preparation to the plate, this recipe takes approximately <b>45 minutes</b>. With a spoonacular <b>score of 77%</b>, this dish is solid. Similar recipes are <a href=\"https://spoonacular.com/recipes/garam-masala-lamb-chops-with-apricot-couscous-697250\">Garam Masala Lamb Chops with Apricot Couscous</a>, <a href=\"https://spoonacular.com/recipes/spiced-lamb-chops-on-sauteed-peppers-and-onions-with-garlic-and-mint-couscous-288106\">Spiced Lamb Chops on Sauteed Peppers and Onions with Garlic and Mint Couscous</a>, and <a href=\"https://spoonacular.com/recipes/garam-masala-how-to-make-punjabi-garam-masala-powder-at-home-487599\">garam masala , how to make punjabi garam masala powder at home</a>.",
//         "cuisines": [
//             "Indian",
//             "Asian"
//         ],
//         "dishTypes": [
//             "lunch",
//             "main course",
//             "main dish",
//             "dinner"
//         ],
//         "diets": [],
//         "occasions": [],
//         "originalId": null,
//         "spoonacularScore": 78.55895233154297,
//         "spoonacularSourceUrl": "https://spoonacular.com/garam-masala-pork-chops-with-mint-yogurt-and-spiced-couscous-644167"
//     },
//     {
//         "vegetarian": true,
//         "vegan": false,
//         "glutenFree": false,
//         "dairyFree": false,
//         "veryHealthy": false,
//         "cheap": false,
//         "veryPopular": true,
//         "sustainable": false,
//         "lowFodmap": false,
//         "weightWatcherSmartPoints": 26,
//         "gaps": "no",
//         "preparationMinutes": 15,
//         "cookingMinutes": 20,
//         "aggregateLikes": 402,
//         "healthScore": 14,
//         "creditsText": "Jen West",
//         "sourceName": "Pink When",
//         "pricePerServing": 134.61,
//         "extendedIngredients": [
//             {
//                 "id": 10120420,
//                 "aisle": "Pasta and Rice",
//                 "image": "farfalle.png",
//                 "consistency": "SOLID",
//                 "name": "bowtie pasta cook as directed",
//                 "nameClean": "farfalle",
//                 "original": "1 package of Bowtie pasta cook as directed",
//                 "originalName": "Bowtie pasta cook as directed",
//                 "amount": 1,
//                 "unit": "package",
//                 "meta": [],
//                 "measures": {
//                     "us": {
//                         "amount": 1,
//                         "unitShort": "pkg",
//                         "unitLong": "package"
//                     },
//                     "metric": {
//                         "amount": 1,
//                         "unitShort": "pkg",
//                         "unitLong": "package"
//                     }
//                 }
//             },
//             {
//                 "id": 1021009,
//                 "aisle": "Cheese",
//                 "image": "cheddar-cheese.png",
//                 "consistency": "SOLID",
//                 "name": "extra sharp cheddar cheese",
//                 "nameClean": "extra sharp cheddar cheese",
//                 "original": "1 cup Extra Sharp Cheddar cheese",
//                 "originalName": "Extra Sharp Cheddar cheese",
//                 "amount": 1,
//                 "unit": "cup",
//                 "meta": [],
//                 "measures": {
//                     "us": {
//                         "amount": 1,
//                         "unitShort": "cup",
//                         "unitLong": "cup"
//                     },
//                     "metric": {
//                         "amount": 113,
//                         "unitShort": "g",
//                         "unitLong": "grams"
//                     }
//                 }
//             },
//             {
//                 "id": 1021009,
//                 "aisle": "Cheese",
//                 "image": "cheddar-cheese.png",
//                 "consistency": "SOLID",
//                 "name": "extra sharp cheddar cheese",
//                 "nameClean": "extra sharp cheddar cheese",
//                 "original": "1 cup Extra Sharp White Cheddar cheese",
//                 "originalName": "Extra Sharp White Cheddar cheese",
//                 "amount": 1,
//                 "unit": "cup",
//                 "meta": [
//                     "white"
//                 ],
//                 "measures": {
//                     "us": {
//                         "amount": 1,
//                         "unitShort": "cup",
//                         "unitLong": "cup"
//                     },
//                     "metric": {
//                         "amount": 113,
//                         "unitShort": "g",
//                         "unitLong": "grams"
//                     }
//                 }
//             },
//             {
//                 "id": 1102047,
//                 "aisle": "Spices and Seasonings",
//                 "image": "salt-and-pepper.jpg",
//                 "consistency": "SOLID",
//                 "name": "salt and pepper",
//                 "nameClean": "salt and pepper",
//                 "original": "1 tsp salt and pepper",
//                 "originalName": "salt and pepper",
//                 "amount": 1,
//                 "unit": "tsp",
//                 "meta": [],
//                 "measures": {
//                     "us": {
//                         "amount": 1,
//                         "unitShort": "tsp",
//                         "unitLong": "teaspoon"
//                     },
//                     "metric": {
//                         "amount": 1,
//                         "unitShort": "tsp",
//                         "unitLong": "teaspoon"
//                     }
//                 }
//             },
//             {
//                 "id": 1056,
//                 "aisle": "Milk, Eggs, Other Dairy",
//                 "image": "sour-cream.jpg",
//                 "consistency": "SOLID",
//                 "name": "cream",
//                 "nameClean": "sour cream",
//                 "original": "1/4 cup sour cream",
//                 "originalName": "sour cream",
//                 "amount": 0.25,
//                 "unit": "cup",
//                 "meta": [
//                     "sour"
//                 ],
//                 "measures": {
//                     "us": {
//                         "amount": 0.25,
//                         "unitShort": "cups",
//                         "unitLong": "cups"
//                     },
//                     "metric": {
//                         "amount": 57.5,
//                         "unitShort": "ml",
//                         "unitLong": "milliliters"
//                     }
//                 }
//             },
//             {
//                 "id": 1145,
//                 "aisle": "Milk, Eggs, Other Dairy",
//                 "image": "butter-sliced.jpg",
//                 "consistency": "SOLID",
//                 "name": "butter",
//                 "nameClean": "unsalted butter",
//                 "original": "1/4 cup unsalted butter room temperature",
//                 "originalName": "unsalted butter room temperature",
//                 "amount": 0.25,
//                 "unit": "cup",
//                 "meta": [
//                     "unsalted",
//                     "room temperature"
//                 ],
//                 "measures": {
//                     "us": {
//                         "amount": 0.25,
//                         "unitShort": "cups",
//                         "unitLong": "cups"
//                     },
//                     "metric": {
//                         "amount": 56.75,
//                         "unitShort": "g",
//                         "unitLong": "grams"
//                     }
//                 }
//             },
//             {
//                 "id": 10511297,
//                 "aisle": "Produce",
//                 "image": "parsley.jpg",
//                 "consistency": "SOLID",
//                 "name": "parsley",
//                 "nameClean": "fresh parsley",
//                 "original": "Fresh Parsley for garnish",
//                 "originalName": "Fresh Parsley for garnish",
//                 "amount": 4,
//                 "unit": "servings",
//                 "meta": [
//                     "fresh",
//                     "for garnish"
//                 ],
//                 "measures": {
//                     "us": {
//                         "amount": 4,
//                         "unitShort": "servings",
//                         "unitLong": "servings"
//                     },
//                     "metric": {
//                         "amount": 4,
//                         "unitShort": "servings",
//                         "unitLong": "servings"
//                     }
//                 }
//             }
//         ],
//         "id": 715595,
//         "title": "How to Make the Cheesiest Bowtie Mac and Cheese",
//         "readyInMinutes": 35,
//         "servings": 4,
//         "sourceUrl": "https://www.pinkwhen.com/mac-and-cheese-recipe/",
//         "image": "https://img.spoonacular.com/recipes/715595-556x370.jpg",
//         "imageType": "jpg",
//         "summary": "How to Make the Cheesiest Bowtie Mac and Cheese might be just the main course you are searching for. This recipe serves 4 and costs $1.35 per serving. One portion of this dish contains roughly <b>28g of protein</b>, <b>35g of fat</b>, and a total of <b>780 calories</b>. It is a good option if you're following a <b>lacto ovo vegetarian</b> diet. From preparation to the plate, this recipe takes around <b>35 minutes</b>. If you have salt and pepper, butter, extra sharp cheddar cheese, and a few other ingredients on hand, you can make it. This recipe is typical of American cuisine. It is brought to you by Pink When. 402 people found this recipe to be tasty and satisfying. Taking all factors into account, this recipe <b>earns a spoonacular score of 69%</b>, which is solid. Users who liked this recipe also liked <a href=\"https://spoonacular.com/recipes/how-to-make-the-cheesiest-bowtie-mac-and-cheese-1527865\">How to Make the Cheesiest Bowtie Mac and Cheese</a>, <a href=\"https://spoonacular.com/recipes/cheesiest-bowtie-mac-and-cheese-1367377\">Cheesiest Bowtie Mac and Cheese</a>, and <a href=\"https://spoonacular.com/recipes/the-cheesiest-spinach-and-cheese-lasagna-1524533\">The Cheesiest Spinach and Cheese Lasagna</a>.",
//         "cuisines": [
//             "American"
//         ],
//         "dishTypes": [
//             "side dish",
//             "lunch",
//             "main course",
//             "main dish",
//             "dinner"
//         ],
//         "diets": [
//             "lacto ovo vegetarian"
//         ],
//         "occasions": [],
//         "originalId": null,
//         "spoonacularScore": 77.73580169677734,
//         "spoonacularSourceUrl": "https://spoonacular.com/how-to-make-the-cheesiest-bowtie-mac-and-cheese-715595"
//     },
//     {
//         "vegetarian": true,
//         "vegan": false,
//         "glutenFree": true,
//         "dairyFree": false,
//         "veryHealthy": true,
//         "cheap": false,
//         "veryPopular": false,
//         "sustainable": false,
//         "lowFodmap": false,
//         "weightWatcherSmartPoints": 12,
//         "gaps": "no",
//         "preparationMinutes": -1,
//         "cookingMinutes": -1,
//         "aggregateLikes": 2,
//         "healthScore": 63,
//         "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
//         "license": "CC BY 3.0",
//         "sourceName": "Foodista",
//         "pricePerServing": 91.67,
//         "extendedIngredients": [
//             {
//                 "id": 9236,
//                 "aisle": "Produce",
//                 "image": "peach.png",
//                 "consistency": "SOLID",
//                 "name": "peaches",
//                 "nameClean": "peach",
//                 "original": "1/4 cup frozen peaches",
//                 "originalName": "frozen peaches",
//                 "amount": 0.25,
//                 "unit": "cup",
//                 "meta": [
//                     "frozen"
//                 ],
//                 "measures": {
//                     "us": {
//                         "amount": 0.25,
//                         "unitShort": "cups",
//                         "unitLong": "cups"
//                     },
//                     "metric": {
//                         "amount": 38.5,
//                         "unitShort": "g",
//                         "unitLong": "grams"
//                     }
//                 }
//             },
//             {
//                 "id": 8402,
//                 "aisle": "Cereal",
//                 "image": "rolled-oats.jpg",
//                 "consistency": "SOLID",
//                 "name": "cooking oats",
//                 "nameClean": "quick cooking oats",
//                 "original": "cup quick cooking oats",
//                 "originalName": "quick cooking oats",
//                 "amount": 1,
//                 "unit": "cup",
//                 "meta": [
//                     "quick"
//                 ],
//                 "measures": {
//                     "us": {
//                         "amount": 1,
//                         "unitShort": "cup",
//                         "unitLong": "cup"
//                     },
//                     "metric": {
//                         "amount": 81.081,
//                         "unitShort": "g",
//                         "unitLong": "grams"
//                     }
//                 }
//             },
//             {
//                 "id": 1085,
//                 "aisle": "Milk, Eggs, Other Dairy",
//                 "image": "milk.jpg",
//                 "consistency": "LIQUID",
//                 "name": "non-fat milk",
//                 "nameClean": "fat free milk",
//                 "original": "1/2 cup non-fat milk",
//                 "originalName": "non-fat milk",
//                 "amount": 0.5,
//                 "unit": "cup",
//                 "meta": [],
//                 "measures": {
//                     "us": {
//                         "amount": 0.5,
//                         "unitShort": "cups",
//                         "unitLong": "cups"
//                     },
//                     "metric": {
//                         "amount": 122.5,
//                         "unitShort": "ml",
//                         "unitLong": "milliliters"
//                     }
//                 }
//             },
//             {
//                 "id": 43274,
//                 "aisle": "Cheese",
//                 "image": "cream-cheese.jpg",
//                 "consistency": "SOLID",
//                 "name": "cream cheese",
//                 "nameClean": "reduced fat cream cheese",
//                 "original": "2 teaspoons low fat cream cheese",
//                 "originalName": "low fat cream cheese",
//                 "amount": 2,
//                 "unit": "teaspoons",
//                 "meta": [
//                     "low fat"
//                 ],
//                 "measures": {
//                     "us": {
//                         "amount": 2,
//                         "unitShort": "tsps",
//                         "unitLong": "teaspoons"
//                     },
//                     "metric": {
//                         "amount": 2,
//                         "unitShort": "tsps",
//                         "unitLong": "teaspoons"
//                     }
//                 }
//             },
//             {
//                 "id": 19912,
//                 "aisle": "Ethnic Foods",
//                 "image": "agave.png",
//                 "consistency": "LIQUID",
//                 "name": "agave",
//                 "nameClean": "agave",
//                 "original": "1 teaspoon agave",
//                 "originalName": "agave",
//                 "amount": 1,
//                 "unit": "teaspoon",
//                 "meta": [],
//                 "measures": {
//                     "us": {
//                         "amount": 1,
//                         "unitShort": "tsp",
//                         "unitLong": "teaspoon"
//                     },
//                     "metric": {
//                         "amount": 1,
//                         "unitShort": "tsp",
//                         "unitLong": "teaspoon"
//                     }
//                 }
//             },
//             {
//                 "id": 2010,
//                 "aisle": "Spices and Seasonings",
//                 "image": "cinnamon.jpg",
//                 "consistency": "SOLID",
//                 "name": "cinnamon",
//                 "nameClean": "cinnamon",
//                 "original": "1/2 teaspoon cinnamon",
//                 "originalName": "cinnamon",
//                 "amount": 0.5,
//                 "unit": "teaspoon",
//                 "meta": [],
//                 "measures": {
//                     "us": {
//                         "amount": 0.5,
//                         "unitShort": "tsps",
//                         "unitLong": "teaspoons"
//                     },
//                     "metric": {
//                         "amount": 0.5,
//                         "unitShort": "tsps",
//                         "unitLong": "teaspoons"
//                     }
//                 }
//             }
//         ],
//         "id": 655186,
//         "title": "Peaches And Cream Oatmeal",
//         "readyInMinutes": 45,
//         "servings": 1,
//         "sourceUrl": "https://www.foodista.com/recipe/NCSDKYN6/peaches-and-cream-oatmeal",
//         "image": "https://img.spoonacular.com/recipes/655186-556x370.jpg",
//         "imageType": "jpg",
//         "summary": "If you have roughly <b>45 minutes</b> to spend in the kitchen, Peaches And Cream Oatmeal might be a great <b>gluten free and lacto ovo vegetarian</b> recipe to try. This recipe serves 1 and costs 92 cents per serving. One serving contains <b>408 calories</b>, <b>16g of protein</b>, and <b>7g of fat</b>. 2 people have made this recipe and would make it again. It works well as a breakfast. Head to the store and pick up cream cheese, cinnamon, non-fat milk, and a few other things to make it today. It is brought to you by Foodista. With a spoonacular <b>score of 87%</b>, this dish is super. Similar recipes include <a href=\"https://spoonacular.com/recipes/peaches-and-cream-oatmeal-543888\">Peaches and Cream Oatmeal</a>, <a href=\"https://spoonacular.com/recipes/peaches-and-cream-oatmeal-1374267\">Peaches And Cream Oatmeal</a>, and <a href=\"https://spoonacular.com/recipes/peaches-coconut-cream-oatmeal-1615501\">Peaches & Coconut Cream Oatmeal</a>.",
//         "cuisines": [],
//         "dishTypes": [
//             "morning meal",
//             "brunch",
//             "breakfast"
//         ],
//         "diets": [
//             "gluten free",
//             "lacto ovo vegetarian"
//         ],
//         "occasions": [],
//         "originalId": null,
//         "spoonacularScore": 90.60175323486328,
//         "spoonacularSourceUrl": "https://spoonacular.com/peaches-and-cream-oatmeal-655186"
//     },
//     {
//         "vegetarian": false,
//         "vegan": false,
//         "glutenFree": false,
//         "dairyFree": true,
//         "veryHealthy": false,
//         "cheap": false,
//         "veryPopular": false,
//         "sustainable": false,
//         "lowFodmap": false,
//         "weightWatcherSmartPoints": 16,
//         "gaps": "no",
//         "preparationMinutes": -1,
//         "cookingMinutes": -1,
//         "aggregateLikes": 95,
//         "healthScore": 29,
//         "creditsText": "Afrolems",
//         "license": "CC BY 4.0",
//         "sourceName": "Afrolems",
//         "pricePerServing": 146.54,
//         "extendedIngredients": [
//             {
//                 "id": 23572,
//                 "aisle": "Frozen",
//                 "image": "beef-cubes-raw.png",
//                 "consistency": "SOLID",
//                 "name": "beef",
//                 "nameClean": "beef",
//                 "original": "1 cup of chopped Beef",
//                 "originalName": "chopped Beef",
//                 "amount": 1,
//                 "unit": "cup",
//                 "meta": [
//                     "chopped"
//                 ],
//                 "measures": {
//                     "us": {
//                         "amount": 1,
//                         "unitShort": "cup",
//                         "unitLong": "cup"
//                     },
//                     "metric": {
//                         "amount": 225,
//                         "unitShort": "g",
//                         "unitLong": "grams"
//                     }
//                 }
//             },
//             {
//                 "id": 10211821,
//                 "aisle": "Produce",
//                 "image": "yellow-bell-pepper.jpg",
//                 "consistency": "SOLID",
//                 "name": "bell pepper",
//                 "nameClean": "bell pepper",
//                 "original": "1 Bell pepper (Blended)",
//                 "originalName": "Bell pepper (Blended)",
//                 "amount": 1,
//                 "unit": "",
//                 "meta": [
//                     "(Blended)"
//                 ],
//                 "measures": {
//                     "us": {
//                         "amount": 1,
//                         "unitShort": "",
//                         "unitLong": ""
//                     },
//                     "metric": {
//                         "amount": 1,
//                         "unitShort": "",
//                         "unitLong": ""
//                     }
//                 }
//             },
//             {
//                 "id": 10211821,
//                 "aisle": "Produce",
//                 "image": "bell-pepper-orange.png",
//                 "consistency": "SOLID",
//                 "name": "bell pepper",
//                 "nameClean": "bell pepper",
//                 "original": "1 Bell pepper (Blended)",
//                 "originalName": "Bell pepper (Blended)",
//                 "amount": 1,
//                 "unit": "",
//                 "meta": [
//                     "(Blended)"
//                 ],
//                 "measures": {
//                     "us": {
//                         "amount": 1,
//                         "unitShort": "",
//                         "unitLong": ""
//                     },
//                     "metric": {
//                         "amount": 1,
//                         "unitShort": "",
//                         "unitLong": ""
//                     }
//                 }
//             },
//             {
//                 "id": 10211821,
//                 "aisle": "Produce",
//                 "image": "yellow-bell-pepper.jpg",
//                 "consistency": "SOLID",
//                 "name": "bell peppers",
//                 "nameClean": "bell pepper",
//                 "original": "1 handful of chopped bell peppers",
//                 "originalName": "chopped bell peppers",
//                 "amount": 1,
//                 "unit": "handful",
//                 "meta": [
//                     "chopped"
//                 ],
//                 "measures": {
//                     "us": {
//                         "amount": 1,
//                         "unitShort": "handful",
//                         "unitLong": "handful"
//                     },
//                     "metric": {
//                         "amount": 1,
//                         "unitShort": "handful",
//                         "unitLong": "handful"
//                     }
//                 }
//             },
//             {
//                 "id": 10211821,
//                 "aisle": "Produce",
//                 "image": "bell-pepper-orange.png",
//                 "consistency": "SOLID",
//                 "name": "bell peppers",
//                 "nameClean": "bell pepper",
//                 "original": "1 handful of chopped bell peppers",
//                 "originalName": "chopped bell peppers",
//                 "amount": 1,
//                 "unit": "handful",
//                 "meta": [
//                     "chopped"
//                 ],
//                 "measures": {
//                     "us": {
//                         "amount": 1,
//                         "unitShort": "handful",
//                         "unitLong": "handful"
//                     },
//                     "metric": {
//                         "amount": 1,
//                         "unitShort": "handful",
//                         "unitLong": "handful"
//                     }
//                 }
//             },
//             {
//                 "id": 10120129,
//                 "aisle": "Baking",
//                 "image": "flour.png",
//                 "consistency": "SOLID",
//                 "name": "bread flour",
//                 "nameClean": "bread flour",
//                 "original": "2 cups of Bread flour",
//                 "originalName": "Bread flour",
//                 "amount": 2,
//                 "unit": "cups",
//                 "meta": [],
//                 "measures": {
//                     "us": {
//                         "amount": 2,
//                         "unitShort": "cups",
//                         "unitLong": "cups"
//                     },
//                     "metric": {
//                         "amount": 250,
//                         "unitShort": "g",
//                         "unitLong": "grams"
//                     }
//                 }
//             },
//             {
//                 "id": 10014412,
//                 "aisle": "Frozen",
//                 "image": "ice-cubes.png",
//                 "consistency": "SOLID",
//                 "name": "seasoning cube",
//                 "nameClean": "ice",
//                 "original": "Seasoning cube",
//                 "originalName": "Seasoning cube",
//                 "amount": 3,
//                 "unit": "servings",
//                 "meta": [],
//                 "measures": {
//                     "us": {
//                         "amount": 3,
//                         "unitShort": "servings",
//                         "unitLong": "servings"
//                     },
//                     "metric": {
//                         "amount": 3,
//                         "unitShort": "servings",
//                         "unitLong": "servings"
//                     }
//                 }
//             },
//             {
//                 "id": 4582,
//                 "aisle": "Oil, Vinegar, Salad Dressing",
//                 "image": "vegetable-oil.jpg",
//                 "consistency": "LIQUID",
//                 "name": "oil",
//                 "nameClean": "cooking oil",
//                 "original": "1 tablespoon of oil",
//                 "originalName": "oil",
//                 "amount": 1,
//                 "unit": "tablespoon",
//                 "meta": [],
//                 "measures": {
//                     "us": {
//                         "amount": 1,
//                         "unitShort": "Tbsp",
//                         "unitLong": "Tbsp"
//                     },
//                     "metric": {
//                         "amount": 1,
//                         "unitShort": "Tbsp",
//                         "unitLong": "Tbsp"
//                     }
//                 }
//             },
//             {
//                 "id": 4582,
//                 "aisle": "Oil, Vinegar, Salad Dressing",
//                 "image": "vegetable-oil.jpg",
//                 "consistency": "LIQUID",
//                 "name": "oil",
//                 "nameClean": "cooking oil",
//                 "original": "1 teaspoon oil",
//                 "originalName": "oil",
//                 "amount": 1,
//                 "unit": "teaspoon",
//                 "meta": [],
//                 "measures": {
//                     "us": {
//                         "amount": 1,
//                         "unitShort": "tsp",
//                         "unitLong": "teaspoon"
//                     },
//                     "metric": {
//                         "amount": 1,
//                         "unitShort": "tsp",
//                         "unitLong": "teaspoon"
//                     }
//                 }
//             },
//             {
//                 "id": 11282,
//                 "aisle": "Produce",
//                 "image": "brown-onion.png",
//                 "consistency": "SOLID",
//                 "name": "onions",
//                 "nameClean": "onion",
//                 "original": "A handful of chopped onions",
//                 "originalName": "chopped onions",
//                 "amount": 1,
//                 "unit": "handful",
//                 "meta": [
//                     "chopped"
//                 ],
//                 "measures": {
//                     "us": {
//                         "amount": 1,
//                         "unitShort": "handful",
//                         "unitLong": "handful"
//                     },
//                     "metric": {
//                         "amount": 1,
//                         "unitShort": "handful",
//                         "unitLong": "handful"
//                     }
//                 }
//             },
//             {
//                 "id": 10099295,
//                 "aisle": "Produce",
//                 "image": "bananas-ripe.jpg",
//                 "consistency": "SOLID",
//                 "name": "over-ripe plantain",
//                 "nameClean": "yellow plantain",
//                 "original": "1 over-ripe plantain (Mashed)",
//                 "originalName": "over-ripe plantain (Mashed)",
//                 "amount": 1,
//                 "unit": "",
//                 "meta": [
//                     "mashed",
//                     "()"
//                 ],
//                 "measures": {
//                     "us": {
//                         "amount": 1,
//                         "unitShort": "",
//                         "unitLong": ""
//                     },
//                     "metric": {
//                         "amount": 1,
//                         "unitShort": "",
//                         "unitLong": ""
//                     }
//                 }
//             },
//             {
//                 "id": 2047,
//                 "aisle": "Spices and Seasonings",
//                 "image": "salt.jpg",
//                 "consistency": "SOLID",
//                 "name": "salt",
//                 "nameClean": "table salt",
//                 "original": "1 teaspoon salt",
//                 "originalName": "salt",
//                 "amount": 1,
//                 "unit": "teaspoon",
//                 "meta": [],
//                 "measures": {
//                     "us": {
//                         "amount": 1,
//                         "unitShort": "tsp",
//                         "unitLong": "teaspoon"
//                     },
//                     "metric": {
//                         "amount": 1,
//                         "unitShort": "tsp",
//                         "unitLong": "teaspoon"
//                     }
//                 }
//             },
//             {
//                 "id": 19335,
//                 "aisle": "Baking",
//                 "image": "sugar-in-bowl.png",
//                 "consistency": "SOLID",
//                 "name": "sugar",
//                 "nameClean": "sugar",
//                 "original": "1/2 teaspoon of sugar",
//                 "originalName": "sugar",
//                 "amount": 0.5,
//                 "unit": "teaspoon",
//                 "meta": [],
//                 "measures": {
//                     "us": {
//                         "amount": 0.5,
//                         "unitShort": "tsps",
//                         "unitLong": "teaspoons"
//                     },
//                     "metric": {
//                         "amount": 0.5,
//                         "unitShort": "tsps",
//                         "unitLong": "teaspoons"
//                     }
//                 }
//             },
//             {
//                 "id": 11529,
//                 "aisle": "Produce",
//                 "image": "tomato.png",
//                 "consistency": "SOLID",
//                 "name": "tomato)",
//                 "nameClean": "tomato",
//                 "original": "1 tomato(Blended)",
//                 "originalName": "tomato(Blended)",
//                 "amount": 1,
//                 "unit": "",
//                 "meta": [],
//                 "measures": {
//                     "us": {
//                         "amount": 1,
//                         "unitShort": "",
//                         "unitLong": ""
//                     },
//                     "metric": {
//                         "amount": 1,
//                         "unitShort": "",
//                         "unitLong": ""
//                     }
//                 }
//             },
//             {
//                 "id": 14412,
//                 "aisle": "Beverages",
//                 "image": "water.png",
//                 "consistency": "LIQUID",
//                 "name": "water",
//                 "nameClean": "water",
//                 "original": "3/4 cup of water",
//                 "originalName": "water",
//                 "amount": 0.75,
//                 "unit": "cup",
//                 "meta": [],
//                 "measures": {
//                     "us": {
//                         "amount": 0.75,
//                         "unitShort": "cups",
//                         "unitLong": "cups"
//                     },
//                     "metric": {
//                         "amount": 177.441,
//                         "unitShort": "ml",
//                         "unitLong": "milliliters"
//                     }
//                 }
//             },
//             {
//                 "id": 18375,
//                 "aisle": "Baking",
//                 "image": "yeast-granules.jpg",
//                 "consistency": "SOLID",
//                 "name": "yeast",
//                 "nameClean": "dry yeast",
//                 "original": "1.5 teaspoons of yeast",
//                 "originalName": "yeast",
//                 "amount": 1.5,
//                 "unit": "teaspoons",
//                 "meta": [],
//                 "measures": {
//                     "us": {
//                         "amount": 1.5,
//                         "unitShort": "tsps",
//                         "unitLong": "teaspoons"
//                     },
//                     "metric": {
//                         "amount": 1.5,
//                         "unitShort": "tsps",
//                         "unitLong": "teaspoons"
//                     }
//                 }
//             }
//         ],
//         "id": 716300,
//         "title": "Plantain Pizza",
//         "readyInMinutes": 45,
//         "servings": 3,
//         "sourceUrl": "http://www.afrolems.com/2014/03/08/plantain-pizza/",
//         "image": "https://img.spoonacular.com/recipes/716300-556x370.jpg",
//         "imageType": "jpg",
//         "summary": "Plantain Pizzan is a Mediterranean main course. One serving contains <b>657 calories</b>, <b>27g of protein</b>, and <b>23g of fat</b>. This dairy free recipe serves 3 and costs <b>$1.47 per serving</b>. 95 people were impressed by this recipe. It is brought to you by Afrolems. If you have tomato), bell pepper, bell peppers, and a few other ingredients on hand, you can make it. From preparation to the plate, this recipe takes about <b>45 minutes</b>. All things considered, we decided this recipe <b>deserves a spoonacular score of 91%</b>. This score is outstanding. Similar recipes include <a href=\"https://spoonacular.com/recipes/how-to-spiralize-a-plantain-plantain-rice-and-beans-563745\">How to Spiralize a Plantain & Plantain “Rice” and Beans</a>, <a href=\"https://spoonacular.com/recipes/plantain-chips-150821\">Plantain Chips</a>, and <a href=\"https://spoonacular.com/recipes/plantain-fritters-316444\">Plantain Fritters</a>.",
//         "cuisines": [
//             "Mediterranean",
//             "Italian",
//             "European"
//         ],
//         "dishTypes": [
//             "lunch",
//             "main course",
//             "main dish",
//             "dinner"
//         ],
//         "diets": [
//             "dairy free"
//         ],
//         "occasions": [],
//         "originalId": null,
//         "spoonacularScore": 91.97419738769531,
//         "spoonacularSourceUrl": "https://spoonacular.com/plantain-pizza-716300"
//     },
//     {
//         "vegetarian": true,
//         "vegan": false,
//         "glutenFree": false,
//         "dairyFree": false,
//         "veryHealthy": false,
//         "cheap": false,
//         "veryPopular": false,
//         "sustainable": false,
//         "lowFodmap": false,
//         "weightWatcherSmartPoints": 8,
//         "gaps": "no",
//         "preparationMinutes": -1,
//         "cookingMinutes": -1,
//         "aggregateLikes": 2,
//         "healthScore": 1,
//         "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
//         "license": "CC BY 3.0",
//         "sourceName": "Foodista",
//         "pricePerServing": 75.21,
//         "extendedIngredients": [
//             {
//                 "id": 12061,
//                 "aisle": "Nuts",
//                 "image": "almonds.jpg",
//                 "consistency": "SOLID",
//                 "name": "almond essence",
//                 "nameClean": "almonds",
//                 "original": "1/2 teaspoon almond essence",
//                 "originalName": "almond essence",
//                 "amount": 0.5,
//                 "unit": "teaspoon",
//                 "meta": [],
//                 "measures": {
//                     "us": {
//                         "amount": 0.5,
//                         "unitShort": "tsps",
//                         "unitLong": "teaspoons"
//                     },
//                     "metric": {
//                         "amount": 0.5,
//                         "unitShort": "tsps",
//                         "unitLong": "teaspoons"
//                     }
//                 }
//             },
//             {
//                 "id": 10014534,
//                 "aisle": "Alcoholic Beverages",
//                 "image": "temporary-orange-liqueur.jpg",
//                 "consistency": "SOLID",
//                 "name": "amaretto",
//                 "nameClean": "amaretto liqueur",
//                 "original": "1 tablespoon Amaretto",
//                 "originalName": "Amaretto",
//                 "amount": 1,
//                 "unit": "tablespoon",
//                 "meta": [],
//                 "measures": {
//                     "us": {
//                         "amount": 1,
//                         "unitShort": "Tbsp",
//                         "unitLong": "Tbsp"
//                     },
//                     "metric": {
//                         "amount": 1,
//                         "unitShort": "Tbsp",
//                         "unitLong": "Tbsp"
//                     }
//                 }
//             },
//             {
//                 "id": 1019070,
//                 "aisle": "Produce",
//                 "image": "cherries.jpg",
//                 "consistency": "SOLID",
//                 "name": "cherries",
//                 "nameClean": "tart cherries",
//                 "original": "400 grams sour cherries, pitted",
//                 "originalName": "sour cherries, pitted",
//                 "amount": 400,
//                 "unit": "grams",
//                 "meta": [
//                     "sour",
//                     "pitted"
//                 ],
//                 "measures": {
//                     "us": {
//                         "amount": 14.11,
//                         "unitShort": "oz",
//                         "unitLong": "ounces"
//                     },
//                     "metric": {
//                         "amount": 400,
//                         "unitShort": "g",
//                         "unitLong": "grams"
//                     }
//                 }
//             },
//             {
//                 "id": 1123,
//                 "aisle": "Milk, Eggs, Other Dairy",
//                 "image": "egg.png",
//                 "consistency": "SOLID",
//                 "name": "eggs",
//                 "nameClean": "egg",
//                 "original": "4 eggs",
//                 "originalName": "eggs",
//                 "amount": 4,
//                 "unit": "",
//                 "meta": [],
//                 "measures": {
//                     "us": {
//                         "amount": 4,
//                         "unitShort": "",
//                         "unitLong": ""
//                     },
//                     "metric": {
//                         "amount": 4,
//                         "unitShort": "",
//                         "unitLong": ""
//                     }
//                 }
//             },
//             {
//                 "id": 1077,
//                 "aisle": "Milk, Eggs, Other Dairy",
//                 "image": "milk.png",
//                 "consistency": "LIQUID",
//                 "name": "milk",
//                 "nameClean": "milk",
//                 "original": "300 milliliters milk",
//                 "originalName": "milk",
//                 "amount": 300,
//                 "unit": "milliliters",
//                 "meta": [],
//                 "measures": {
//                     "us": {
//                         "amount": 1.268,
//                         "unitShort": "cups",
//                         "unitLong": "cups"
//                     },
//                     "metric": {
//                         "amount": 300,
//                         "unitShort": "ml",
//                         "unitLong": "milliliters"
//                     }
//                 }
//             },
//             {
//                 "id": 20081,
//                 "aisle": "Baking",
//                 "image": "flour.png",
//                 "consistency": "SOLID",
//                 "name": "flour",
//                 "nameClean": "wheat flour",
//                 "original": "100 grams plain flour, sifted",
//                 "originalName": "plain flour, sifted",
//                 "amount": 100,
//                 "unit": "grams",
//                 "meta": [
//                     "plain",
//                     "sifted"
//                 ],
//                 "measures": {
//                     "us": {
//                         "amount": 3.527,
//                         "unitShort": "oz",
//                         "unitLong": "ounces"
//                     },
//                     "metric": {
//                         "amount": 100,
//                         "unitShort": "g",
//                         "unitLong": "grams"
//                     }
//                 }
//             },
//             {
//                 "id": 2047,
//                 "aisle": "Spices and Seasonings",
//                 "image": "salt.jpg",
//                 "consistency": "SOLID",
//                 "name": "salt",
//                 "nameClean": "table salt",
//                 "original": "of salt",
//                 "originalName": "of salt",
//                 "amount": 8,
//                 "unit": "servings",
//                 "meta": [],
//                 "measures": {
//                     "us": {
//                         "amount": 8,
//                         "unitShort": "servings",
//                         "unitLong": "servings"
//                     },
//                     "metric": {
//                         "amount": 8,
//                         "unitShort": "servings",
//                         "unitLong": "servings"
//                     }
//                 }
//             },
//             {
//                 "id": 19335,
//                 "aisle": "Baking",
//                 "image": "sugar-in-bowl.png",
//                 "consistency": "SOLID",
//                 "name": "demerrara sugar",
//                 "nameClean": "sugar",
//                 "original": "100 grams Demerrara sugar",
//                 "originalName": "Demerrara sugar",
//                 "amount": 100,
//                 "unit": "grams",
//                 "meta": [],
//                 "measures": {
//                     "us": {
//                         "amount": 3.527,
//                         "unitShort": "oz",
//                         "unitLong": "ounces"
//                     },
//                     "metric": {
//                         "amount": 100,
//                         "unitShort": "g",
//                         "unitLong": "grams"
//                     }
//                 }
//             },
//             {
//                 "id": 1001053,
//                 "aisle": "Milk, Eggs, Other Dairy",
//                 "image": "fluid-cream.jpg",
//                 "consistency": "LIQUID",
//                 "name": "whipping cream",
//                 "nameClean": "whipping cream",
//                 "original": "100 milliliters whipping cream",
//                 "originalName": "whipping cream",
//                 "amount": 100,
//                 "unit": "milliliters",
//                 "meta": [],
//                 "measures": {
//                     "us": {
//                         "amount": 3.402,
//                         "unitShort": "fl. oz",
//                         "unitLong": "fl. ozs"
//                     },
//                     "metric": {
//                         "amount": 100,
//                         "unitShort": "ml",
//                         "unitLong": "milliliters"
//                     }
//                 }
//             }
//         ],
//         "id": 639537,
//         "title": "Clafoutis with sour cherries",
//         "readyInMinutes": 45,
//         "servings": 8,
//         "sourceUrl": "http://www.foodista.com/recipe/7SLNTGGK/clafoutis-with-sour-cherries",
//         "image": "https://img.spoonacular.com/recipes/639537-556x370.jpg",
//         "imageType": "jpg",
//         "summary": "Clafoutis with sour cherries might be just the dessert you are searching for. One serving contains <b>230 calories</b>, <b>6g of protein</b>, and <b>8g of fat</b>. This recipe serves 8. For <b>75 cents per serving</b>, this recipe <b>covers 7%</b> of your daily requirements of vitamins and minerals. It is brought to you by Foodista. 2 people have made this recipe and would make it again. It is a good option if you're following a <b>lacto ovo vegetarian</b> diet. From preparation to the plate, this recipe takes roughly <b>45 minutes</b>. Head to the store and pick up almond essence, eggs, demerrara sugar, and a few other things to make it today. Taking all factors into account, this recipe <b>earns a spoonacular score of 23%</b>, which is not so tremendous. If you like this recipe, take a look at these similar recipes: <a href=\"https://spoonacular.com/recipes/gluten-free-wild-rice-salad-with-chanterelles-sour-cherries-and-cashew-sour-cream-162576\">Gluten-Free Wild Rice Salad with Chanterelles, Sour Cherries and Cashew Sour Cream</a>, <a href=\"https://spoonacular.com/recipes/sour-cherry-clafoutis-52949\">Sour Cherry Clafoutis</a>, and <a href=\"https://spoonacular.com/recipes/pickled-sour-cherries-52704\">Pickled Sour Cherries</a>.",
//         "cuisines": [],
//         "dishTypes": [
//             "dessert"
//         ],
//         "diets": [
//             "lacto ovo vegetarian"
//         ],
//         "occasions": [],
//         "originalId": null,
//         "spoonacularScore": 27.664873123168945,
//         "spoonacularSourceUrl": "https://spoonacular.com/clafoutis-with-sour-cherries-639537"
//     },
//     {
//         "vegetarian": false,
//         "vegan": false,
//         "glutenFree": true,
//         "dairyFree": false,
//         "veryHealthy": false,
//         "cheap": false,
//         "veryPopular": false,
//         "sustainable": false,
//         "lowFodmap": false,
//         "weightWatcherSmartPoints": 25,
//         "gaps": "no",
//         "preparationMinutes": -1,
//         "cookingMinutes": -1,
//         "aggregateLikes": 2,
//         "healthScore": 18,
//         "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
//         "license": "CC BY 3.0",
//         "sourceName": "Foodista",
//         "pricePerServing": 313.28,
//         "extendedIngredients": [
//             {
//                 "id": 1002030,
//                 "aisle": "Spices and Seasonings",
//                 "image": "pepper.jpg",
//                 "consistency": "SOLID",
//                 "name": "pepper",
//                 "nameClean": "black pepper",
//                 "original": "2 teaspoons black pepper",
//                 "originalName": "black pepper",
//                 "amount": 2,
//                 "unit": "teaspoons",
//                 "meta": [
//                     "black"
//                 ],
//                 "measures": {
//                     "us": {
//                         "amount": 2,
//                         "unitShort": "tsps",
//                         "unitLong": "teaspoons"
//                     },
//                     "metric": {
//                         "amount": 2,
//                         "unitShort": "tsps",
//                         "unitLong": "teaspoons"
//                     }
//                 }
//             },
//             {
//                 "id": 16026,
//                 "aisle": "Canned and Jarred",
//                 "image": "white-beans.jpg",
//                 "consistency": "SOLID",
//                 "name": "great northern beans",
//                 "nameClean": "canned great northern beans",
//                 "original": "1 (15.5 oz.) can Great Northern beans, drained",
//                 "originalName": "Great Northern beans, drained",
//                 "amount": 15.5,
//                 "unit": "oz",
//                 "meta": [
//                     "drained",
//                     "canned"
//                 ],
//                 "measures": {
//                     "us": {
//                         "amount": 15.5,
//                         "unitShort": "oz",
//                         "unitLong": "ounces"
//                     },
//                     "metric": {
//                         "amount": 439.418,
//                         "unitShort": "g",
//                         "unitLong": "grams"
//                     }
//                 }
//             },
//             {
//                 "id": 5006,
//                 "aisle": "Meat",
//                 "image": "whole-chicken.jpg",
//                 "consistency": "SOLID",
//                 "name": "chicken",
//                 "nameClean": "whole chicken",
//                 "original": "1 pound cubed chicken",
//                 "originalName": "cubed chicken",
//                 "amount": 1,
//                 "unit": "pound",
//                 "meta": [
//                     "cubed"
//                 ],
//                 "measures": {
//                     "us": {
//                         "amount": 1,
//                         "unitShort": "lb",
//                         "unitLong": "pound"
//                     },
//                     "metric": {
//                         "amount": 217.724,
//                         "unitShort": "g",
//                         "unitLong": "grams"
//                     }
//                 }
//             },
//             {
//                 "id": 5311,
//                 "aisle": "Canned and Jarred",
//                 "image": "canned-food.png",
//                 "consistency": "SOLID",
//                 "name": "chicken broth",
//                 "nameClean": "canned chicken",
//                 "original": "1 (14 oz.) can chicken broth",
//                 "originalName": "chicken broth",
//                 "amount": 14,
//                 "unit": "oz",
//                 "meta": [
//                     "canned"
//                 ],
//                 "measures": {
//                     "us": {
//                         "amount": 14,
//                         "unitShort": "oz",
//                         "unitLong": "ounces"
//                     },
//                     "metric": {
//                         "amount": 396.893,
//                         "unitShort": "g",
//                         "unitLong": "grams"
//                     }
//                 }
//             },
//             {
//                 "id": 1002014,
//                 "aisle": "Spices and Seasonings",
//                 "image": "ground-cumin.jpg",
//                 "consistency": "SOLID",
//                 "name": "cumin",
//                 "nameClean": "cumin",
//                 "original": "1 teaspoon cumin",
//                 "originalName": "cumin",
//                 "amount": 1,
//                 "unit": "teaspoon",
//                 "meta": [],
//                 "measures": {
//                     "us": {
//                         "amount": 1,
//                         "unitShort": "tsp",
//                         "unitLong": "teaspoon"
//                     },
//                     "metric": {
//                         "amount": 1,
//                         "unitShort": "tsp",
//                         "unitLong": "teaspoon"
//                     }
//                 }
//             },
//             {
//                 "id": 11215,
//                 "aisle": "Produce",
//                 "image": "garlic.png",
//                 "consistency": "SOLID",
//                 "name": "garlic",
//                 "nameClean": "garlic",
//                 "original": "1 clove garlic",
//                 "originalName": "garlic",
//                 "amount": 1,
//                 "unit": "clove",
//                 "meta": [],
//                 "measures": {
//                     "us": {
//                         "amount": 1,
//                         "unitShort": "clove",
//                         "unitLong": "clove"
//                     },
//                     "metric": {
//                         "amount": 1,
//                         "unitShort": "clove",
//                         "unitLong": "clove"
//                     }
//                 }
//             },
//             {
//                 "id": 31015,
//                 "aisle": "Produce",
//                 "image": "chili-peppers-green.jpg",
//                 "consistency": "SOLID",
//                 "name": "chilies",
//                 "nameClean": "green chili pepper",
//                 "original": "1 (4.5oz.) can green chilies, drained",
//                 "originalName": "green chilies, drained",
//                 "amount": 4.5,
//                 "unit": "oz",
//                 "meta": [
//                     "green",
//                     "drained",
//                     "canned"
//                 ],
//                 "measures": {
//                     "us": {
//                         "amount": 4.5,
//                         "unitShort": "oz",
//                         "unitLong": "ounces"
//                     },
//                     "metric": {
//                         "amount": 127.573,
//                         "unitShort": "g",
//                         "unitLong": "grams"
//                     }
//                 }
//             },
//             {
//                 "id": 1053,
//                 "aisle": "Milk, Eggs, Other Dairy",
//                 "image": "fluid-cream.jpg",
//                 "consistency": "LIQUID",
//                 "name": "heavy whipping cream",
//                 "nameClean": "cream",
//                 "original": "½ cup heavy whipping cream",
//                 "originalName": "heavy whipping cream",
//                 "amount": 0.5,
//                 "unit": "cup",
//                 "meta": [],
//                 "measures": {
//                     "us": {
//                         "amount": 0.5,
//                         "unitShort": "cups",
//                         "unitLong": "cups"
//                     },
//                     "metric": {
//                         "amount": 119,
//                         "unitShort": "ml",
//                         "unitLong": "milliliters"
//                     }
//                 }
//             },
//             {
//                 "id": 4053,
//                 "aisle": "Oil, Vinegar, Salad Dressing",
//                 "image": "olive-oil.jpg",
//                 "consistency": "SOLID",
//                 "name": "olive oil",
//                 "nameClean": "olive oil",
//                 "original": "1 tablespoon olive oil",
//                 "originalName": "olive oil",
//                 "amount": 1,
//                 "unit": "tablespoon",
//                 "meta": [],
//                 "measures": {
//                     "us": {
//                         "amount": 1,
//                         "unitShort": "Tbsp",
//                         "unitLong": "Tbsp"
//                     },
//                     "metric": {
//                         "amount": 1,
//                         "unitShort": "Tbsp",
//                         "unitLong": "Tbsp"
//                     }
//                 }
//             },
//             {
//                 "id": 11282,
//                 "aisle": "Produce",
//                 "image": "brown-onion.png",
//                 "consistency": "SOLID",
//                 "name": "onion",
//                 "nameClean": "onion",
//                 "original": "1 small onion, chopped",
//                 "originalName": "onion, chopped",
//                 "amount": 1,
//                 "unit": "small",
//                 "meta": [
//                     "chopped"
//                 ],
//                 "measures": {
//                     "us": {
//                         "amount": 1,
//                         "unitShort": "small",
//                         "unitLong": "small"
//                     },
//                     "metric": {
//                         "amount": 1,
//                         "unitShort": "small",
//                         "unitLong": "small"
//                     }
//                 }
//             },
//             {
//                 "id": 2027,
//                 "aisle": "Produce",
//                 "image": "oregano.jpg",
//                 "consistency": "SOLID",
//                 "name": "oregano",
//                 "nameClean": "oregano",
//                 "original": "1 teaspoon oregano",
//                 "originalName": "oregano",
//                 "amount": 1,
//                 "unit": "teaspoon",
//                 "meta": [],
//                 "measures": {
//                     "us": {
//                         "amount": 1,
//                         "unitShort": "tsp",
//                         "unitLong": "teaspoon"
//                     },
//                     "metric": {
//                         "amount": 1,
//                         "unitShort": "tsp",
//                         "unitLong": "teaspoon"
//                     }
//                 }
//             },
//             {
//                 "id": 2047,
//                 "aisle": "Spices and Seasonings",
//                 "image": "salt.jpg",
//                 "consistency": "SOLID",
//                 "name": "salt",
//                 "nameClean": "table salt",
//                 "original": "1/2 teaspoon salt",
//                 "originalName": "salt",
//                 "amount": 0.5,
//                 "unit": "teaspoon",
//                 "meta": [],
//                 "measures": {
//                     "us": {
//                         "amount": 0.5,
//                         "unitShort": "tsps",
//                         "unitLong": "teaspoons"
//                     },
//                     "metric": {
//                         "amount": 0.5,
//                         "unitShort": "tsps",
//                         "unitLong": "teaspoons"
//                     }
//                 }
//             },
//             {
//                 "id": 1001009,
//                 "aisle": "Cheese",
//                 "image": "shredded-cheddar.jpg",
//                 "consistency": "SOLID",
//                 "name": "cheddar cheese",
//                 "nameClean": "shredded cheddar cheese",
//                 "original": "1 cup shredded cheddar cheese for garnish",
//                 "originalName": "shredded cheddar cheese for garnish",
//                 "amount": 1,
//                 "unit": "cup",
//                 "meta": [
//                     "shredded",
//                     "for garnish"
//                 ],
//                 "measures": {
//                     "us": {
//                         "amount": 1,
//                         "unitShort": "cup",
//                         "unitLong": "cup"
//                     },
//                     "metric": {
//                         "amount": 113,
//                         "unitShort": "g",
//                         "unitLong": "grams"
//                     }
//                 }
//             },
//             {
//                 "id": 1056,
//                 "aisle": "Milk, Eggs, Other Dairy",
//                 "image": "sour-cream.jpg",
//                 "consistency": "SOLID",
//                 "name": "cream",
//                 "nameClean": "sour cream",
//                 "original": "1 cup sour cream",
//                 "originalName": "sour cream",
//                 "amount": 1,
//                 "unit": "cup",
//                 "meta": [
//                     "sour"
//                 ],
//                 "measures": {
//                     "us": {
//                         "amount": 1,
//                         "unitShort": "cup",
//                         "unitLong": "cup"
//                     },
//                     "metric": {
//                         "amount": 230,
//                         "unitShort": "ml",
//                         "unitLong": "milliliters"
//                     }
//                 }
//             }
//         ],
//         "id": 640722,
//         "title": "Creamy White Chili",
//         "readyInMinutes": 45,
//         "servings": 4,
//         "sourceUrl": "http://www.foodista.com/recipe/5QVKF6LG/creamy-white-chili",
//         "image": "https://img.spoonacular.com/recipes/640722-556x370.jpg",
//         "imageType": "jpg",
//         "summary": "You can never have too many American recipes, so give Creamy White Chili a try. This main course has <b>809 calories</b>, <b>53g of protein</b>, and <b>52g of fat</b> per serving. This recipe serves 4 and costs $3.13 per serving. From preparation to the plate, this recipe takes around <b>45 minutes</b>. This recipe from Foodista has 2 fans. It can be enjoyed any time, but it is especially good for <b>The Super Bowl</b>. It is a good option if you're following a <b>gluten free</b> diet. If you have pepper, garlic, olive oil, and a few other ingredients on hand, you can make it. All things considered, we decided this recipe <b>deserves a spoonacular score of 50%</b>. This score is pretty good. Try <a href=\"https://spoonacular.com/recipes/creamy-white-chili-112574\">Creamy White Chili</a>, <a href=\"https://spoonacular.com/recipes/creamy-white-chili-1369485\">Creamy White Chili</a>, and <a href=\"https://spoonacular.com/recipes/creamy-white-chili-569226\">Creamy White Chili</a> for similar recipes.",
//         "cuisines": [
//             "American"
//         ],
//         "dishTypes": [
//             "lunch",
//             "soup",
//             "main course",
//             "main dish",
//             "dinner"
//         ],
//         "diets": [
//             "gluten free"
//         ],
//         "occasions": [
//             "super bowl"
//         ],
//         "originalId": null,
//         "spoonacularScore": 65.10153198242188,
//         "spoonacularSourceUrl": "https://spoonacular.com/creamy-white-chili-640722"
//     },
//     {
//         "vegetarian": false,
//         "vegan": false,
//         "glutenFree": false,
//         "dairyFree": false,
//         "veryHealthy": false,
//         "cheap": false,
//         "veryPopular": false,
//         "sustainable": false,
//         "lowFodmap": false,
//         "weightWatcherSmartPoints": 30,
//         "gaps": "no",
//         "preparationMinutes": -1,
//         "cookingMinutes": -1,
//         "aggregateLikes": 9,
//         "healthScore": 20,
//         "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
//         "license": "CC BY 3.0",
//         "sourceName": "Foodista",
//         "pricePerServing": 646.43,
//         "extendedIngredients": [
//             {
//                 "id": 23232,
//                 "aisle": "Meat",
//                 "image": "ribeye-raw.jpg",
//                 "consistency": "SOLID",
//                 "name": "beef steak",
//                 "nameClean": "steak",
//                 "original": "400g beef steak (minute steak from leg)",
//                 "originalName": "beef steak (minute steak from leg)",
//                 "amount": 400,
//                 "unit": "g",
//                 "meta": [
//                     "(minute steak from leg)"
//                 ],
//                 "measures": {
//                     "us": {
//                         "amount": 14.11,
//                         "unitShort": "oz",
//                         "unitLong": "ounces"
//                     },
//                     "metric": {
//                         "amount": 400,
//                         "unitShort": "g",
//                         "unitLong": "grams"
//                     }
//                 }
//             },
//             {
//                 "id": 1001,
//                 "aisle": "Milk, Eggs, Other Dairy",
//                 "image": "butter-sliced.jpg",
//                 "consistency": "SOLID",
//                 "name": "butter",
//                 "nameClean": "butter",
//                 "original": "2 tablespoons Butter",
//                 "originalName": "Butter",
//                 "amount": 2,
//                 "unit": "tablespoons",
//                 "meta": [],
//                 "measures": {
//                     "us": {
//                         "amount": 2,
//                         "unitShort": "Tbsps",
//                         "unitLong": "Tbsps"
//                     },
//                     "metric": {
//                         "amount": 2,
//                         "unitShort": "Tbsps",
//                         "unitLong": "Tbsps"
//                     }
//                 }
//             },
//             {
//                 "id": 2054,
//                 "aisle": "Canned and Jarred",
//                 "image": "capers.jpg",
//                 "consistency": "SOLID",
//                 "name": "capers",
//                 "nameClean": "capers",
//                 "original": "2 Tbs capers",
//                 "originalName": "capers",
//                 "amount": 2,
//                 "unit": "Tbs",
//                 "meta": [],
//                 "measures": {
//                     "us": {
//                         "amount": 2,
//                         "unitShort": "Tbs",
//                         "unitLong": "Tbs"
//                     },
//                     "metric": {
//                         "amount": 2,
//                         "unitShort": "Tbs",
//                         "unitLong": "Tbs"
//                     }
//                 }
//             },
//             {
//                 "id": 14106,
//                 "aisle": "Alcoholic Beverages",
//                 "image": "white-wine.jpg",
//                 "consistency": "LIQUID",
//                 "name": "wine",
//                 "nameClean": "dry white wine",
//                 "original": "¾ cup dry white wine",
//                 "originalName": "dry white wine",
//                 "amount": 0.75,
//                 "unit": "cup",
//                 "meta": [
//                     "dry white"
//                 ],
//                 "measures": {
//                     "us": {
//                         "amount": 0.75,
//                         "unitShort": "cups",
//                         "unitLong": "cups"
//                     },
//                     "metric": {
//                         "amount": 180,
//                         "unitShort": "ml",
//                         "unitLong": "milliliters"
//                     }
//                 }
//             },
//             {
//                 "id": 20081,
//                 "aisle": "Baking",
//                 "image": "flour.png",
//                 "consistency": "SOLID",
//                 "name": "flour",
//                 "nameClean": "wheat flour",
//                 "original": "1 cup flour",
//                 "originalName": "flour",
//                 "amount": 1,
//                 "unit": "cup",
//                 "meta": [],
//                 "measures": {
//                     "us": {
//                         "amount": 1,
//                         "unitShort": "cup",
//                         "unitLong": "cup"
//                     },
//                     "metric": {
//                         "amount": 125,
//                         "unitShort": "g",
//                         "unitLong": "grams"
//                     }
//                 }
//             },
//             {
//                 "id": 11215,
//                 "aisle": "Produce",
//                 "image": "garlic.png",
//                 "consistency": "SOLID",
//                 "name": "garlic",
//                 "nameClean": "garlic",
//                 "original": "2 to 3 large cloves garlic, pressed",
//                 "originalName": "garlic, pressed",
//                 "amount": 2,
//                 "unit": "large cloves",
//                 "meta": [
//                     "pressed"
//                 ],
//                 "measures": {
//                     "us": {
//                         "amount": 2,
//                         "unitShort": "large cloves",
//                         "unitLong": "large cloves"
//                     },
//                     "metric": {
//                         "amount": 2,
//                         "unitShort": "large cloves",
//                         "unitLong": "large cloves"
//                     }
//                 }
//             },
//             {
//                 "id": 1002030,
//                 "aisle": "Spices and Seasonings",
//                 "image": "pepper.jpg",
//                 "consistency": "SOLID",
//                 "name": "ground pepper",
//                 "nameClean": "black pepper",
//                 "original": "¼ tsp ground black pepper",
//                 "originalName": "ground black pepper",
//                 "amount": 0.25,
//                 "unit": "tsp",
//                 "meta": [
//                     "black"
//                 ],
//                 "measures": {
//                     "us": {
//                         "amount": 0.25,
//                         "unitShort": "tsps",
//                         "unitLong": "teaspoons"
//                     },
//                     "metric": {
//                         "amount": 0.25,
//                         "unitShort": "tsps",
//                         "unitLong": "teaspoons"
//                     }
//                 }
//             },
//             {
//                 "id": 9152,
//                 "aisle": "Produce",
//                 "image": "lemon-juice.jpg",
//                 "consistency": "LIQUID",
//                 "name": "lemon juice",
//                 "nameClean": "lemon juice",
//                 "original": "1 teaspoon lemon juice",
//                 "originalName": "lemon juice",
//                 "amount": 1,
//                 "unit": "teaspoon",
//                 "meta": [],
//                 "measures": {
//                     "us": {
//                         "amount": 1,
//                         "unitShort": "tsp",
//                         "unitLong": "teaspoon"
//                     },
//                     "metric": {
//                         "amount": 1,
//                         "unitShort": "tsp",
//                         "unitLong": "teaspoon"
//                     }
//                 }
//             },
//             {
//                 "id": 1029150,
//                 "aisle": "Produce",
//                 "image": "lemon-wedge.png",
//                 "consistency": "SOLID",
//                 "name": "lemon wedges",
//                 "nameClean": "lemon wedge",
//                 "original": "Lemon wedges",
//                 "originalName": "Lemon wedges",
//                 "amount": 2,
//                 "unit": "servings",
//                 "meta": [],
//                 "measures": {
//                     "us": {
//                         "amount": 2,
//                         "unitShort": "servings",
//                         "unitLong": "servings"
//                     },
//                     "metric": {
//                         "amount": 2,
//                         "unitShort": "servings",
//                         "unitLong": "servings"
//                     }
//                 }
//             },
//             {
//                 "id": 4053,
//                 "aisle": "Oil, Vinegar, Salad Dressing",
//                 "image": "olive-oil.jpg",
//                 "consistency": "SOLID",
//                 "name": "olive oil",
//                 "nameClean": "olive oil",
//                 "original": "2 Tbs olive oil",
//                 "originalName": "olive oil",
//                 "amount": 2,
//                 "unit": "Tbs",
//                 "meta": [],
//                 "measures": {
//                     "us": {
//                         "amount": 2,
//                         "unitShort": "Tbs",
//                         "unitLong": "Tbs"
//                     },
//                     "metric": {
//                         "amount": 2,
//                         "unitShort": "Tbs",
//                         "unitLong": "Tbs"
//                     }
//                 }
//             },
//             {
//                 "id": 11297,
//                 "aisle": "Spices and Seasonings",
//                 "image": "parsley.jpg",
//                 "consistency": "SOLID",
//                 "name": "parsley",
//                 "nameClean": "parsley",
//                 "original": "2 teaspoons parsley, finely chopped",
//                 "originalName": "parsley, finely chopped",
//                 "amount": 2,
//                 "unit": "teaspoons",
//                 "meta": [
//                     "finely chopped"
//                 ],
//                 "measures": {
//                     "us": {
//                         "amount": 2,
//                         "unitShort": "tsps",
//                         "unitLong": "teaspoons"
//                     },
//                     "metric": {
//                         "amount": 2,
//                         "unitShort": "tsps",
//                         "unitLong": "teaspoons"
//                     }
//                 }
//             },
//             {
//                 "id": 2047,
//                 "aisle": "Spices and Seasonings",
//                 "image": "salt.jpg",
//                 "consistency": "SOLID",
//                 "name": "salt",
//                 "nameClean": "table salt",
//                 "original": "¾ tsp salt",
//                 "originalName": "salt",
//                 "amount": 0.75,
//                 "unit": "tsp",
//                 "meta": [],
//                 "measures": {
//                     "us": {
//                         "amount": 0.75,
//                         "unitShort": "tsps",
//                         "unitLong": "teaspoons"
//                     },
//                     "metric": {
//                         "amount": 0.75,
//                         "unitShort": "tsps",
//                         "unitLong": "teaspoons"
//                     }
//                 }
//             }
//         ],
//         "id": 661531,
//         "title": "Steak with lemon and capers",
//         "readyInMinutes": 45,
//         "servings": 2,
//         "sourceUrl": "http://www.foodista.com/recipe/JKGPWDDP/steak-with-lemon-and-capers",
//         "image": "https://img.spoonacular.com/recipes/661531-556x370.jpg",
//         "imageType": "jpg",
//         "summary": "You can never have too many main course recipes, so give Steak with lemon and capers a try. One serving contains <b>949 calories</b>, <b>47g of protein</b>, and <b>54g of fat</b>. For <b>$6.46 per serving</b>, this recipe <b>covers 31%</b> of your daily requirements of vitamins and minerals. This recipe serves 2. This recipe is liked by 9 foodies and cooks. <b>valentin day</b> will be even more special with this recipe. Head to the store and pick up beef steak, wine, capers, and a few other things to make it today. From preparation to the plate, this recipe takes roughly <b>45 minutes</b>. It is brought to you by Foodista. With a spoonacular <b>score of 71%</b>, this dish is good. If you like this recipe, you might also like recipes such as <a href=\"https://spoonacular.com/recipes/steak-salad-sandwiches-with-capers-30072\">Steak Salad Sandwiches with Capers</a>, <a href=\"https://spoonacular.com/recipes/steak-salad-with-arugula-parmesan-crispy-capers-8826\">Steak Salad With Arugula, Parmesan & Crispy Capers</a>, and <a href=\"https://spoonacular.com/recipes/veal-with-lemon-and-capers-754915\">Veal with Lemon and Capers</a>.",
//         "cuisines": [],
//         "dishTypes": [
//             "lunch",
//             "main course",
//             "main dish",
//             "dinner"
//         ],
//         "diets": [],
//         "occasions": [
//             "valentine's day",
//             "father's day"
//         ],
//         "originalId": null,
//         "spoonacularScore": 72.67491149902344,
//         "spoonacularSourceUrl": "https://spoonacular.com/steak-with-lemon-and-capers-661531"
//     },
//     {
//         "vegetarian": false,
//         "vegan": false,
//         "glutenFree": false,
//         "dairyFree": true,
//         "veryHealthy": false,
//         "cheap": false,
//         "veryPopular": false,
//         "sustainable": false,
//         "lowFodmap": false,
//         "weightWatcherSmartPoints": 7,
//         "gaps": "no",
//         "preparationMinutes": -1,
//         "cookingMinutes": -1,
//         "aggregateLikes": 4,
//         "healthScore": 30,
//         "creditsText": "foodista.com",
//         "sourceName": "foodista.com",
//         "pricePerServing": 487.48,
//         "extendedIngredients": [
//             {
//                 "id": 2004,
//                 "aisle": "Produce",
//                 "image": "bay-leaves.jpg",
//                 "consistency": "SOLID",
//                 "name": "bay leaves",
//                 "nameClean": "bay leaves",
//                 "original": "2 bay leaves",
//                 "originalName": "bay leaves",
//                 "amount": 2,
//                 "unit": "",
//                 "meta": [],
//                 "measures": {
//                     "us": {
//                         "amount": 2,
//                         "unitShort": "",
//                         "unitLong": ""
//                     },
//                     "metric": {
//                         "amount": 2,
//                         "unitShort": "",
//                         "unitLong": ""
//                     }
//                 }
//             },
//             {
//                 "id": 11143,
//                 "aisle": "Produce",
//                 "image": "celery.jpg",
//                 "consistency": "SOLID",
//                 "name": "celery",
//                 "nameClean": "celery",
//                 "original": "3 ribs celery, finely diced",
//                 "originalName": "celery, finely diced",
//                 "amount": 3,
//                 "unit": "ribs",
//                 "meta": [
//                     "diced",
//                     "finely"
//                 ],
//                 "measures": {
//                     "us": {
//                         "amount": 3,
//                         "unitShort": "ribs",
//                         "unitLong": "ribs"
//                     },
//                     "metric": {
//                         "amount": 3,
//                         "unitShort": "ribs",
//                         "unitLong": "ribs"
//                     }
//                 }
//             },
//             {
//                 "id": 10320445,
//                 "aisle": "Pasta and Rice",
//                 "image": "rice-white-long-grain-or-basmatii-cooked.jpg",
//                 "consistency": "SOLID",
//                 "name": "rice",
//                 "nameClean": "cooked long grain white rice",
//                 "original": "8 cups cooked long-grain white rice",
//                 "originalName": "cooked long-grain white rice",
//                 "amount": 8,
//                 "unit": "cups",
//                 "meta": [
//                     "long-grain",
//                     "white",
//                     "cooked"
//                 ],
//                 "measures": {
//                     "us": {
//                         "amount": 8,
//                         "unitShort": "cups",
//                         "unitLong": "cups"
//                     },
//                     "metric": {
//                         "amount": 1.264,
//                         "unitShort": "kgs",
//                         "unitLong": "kgs"
//                     }
//                 }
//             },
//             {
//                 "id": 11311111,
//                 "aisle": "Spices and Seasonings",
//                 "image": "hemp-protein-powder.png",
//                 "consistency": "SOLID",
//                 "name": "filé powder",
//                 "nameClean": "file powder",
//                 "original": "1 tablespoon filé powder",
//                 "originalName": "filé powder",
//                 "amount": 1,
//                 "unit": "tablespoon",
//                 "meta": [],
//                 "measures": {
//                     "us": {
//                         "amount": 1,
//                         "unitShort": "Tbsp",
//                         "unitLong": "Tbsp"
//                     },
//                     "metric": {
//                         "amount": 1,
//                         "unitShort": "Tbsp",
//                         "unitLong": "Tbsp"
//                     }
//                 }
//             },
//             {
//                 "id": 6963,
//                 "aisle": "Canned and Jarred",
//                 "image": "chicken-broth.png",
//                 "consistency": "LIQUID",
//                 "name": "fish stock",
//                 "nameClean": "fish stock",
//                 "original": "4 quarts shrimp stock, crab stock or fish stock",
//                 "originalName": "shrimp stock, crab stock or fish stock",
//                 "amount": 4,
//                 "unit": "quarts",
//                 "meta": [],
//                 "measures": {
//                     "us": {
//                         "amount": 4,
//                         "unitShort": "qts",
//                         "unitLong": "quarts"
//                     },
//                     "metric": {
//                         "amount": 3.785,
//                         "unitShort": "l",
//                         "unitLong": "liters"
//                     }
//                 }
//             },
//             {
//                 "id": 20081,
//                 "aisle": "Baking",
//                 "image": "flour.png",
//                 "consistency": "SOLID",
//                 "name": "flour",
//                 "nameClean": "wheat flour",
//                 "original": "1/2 cup flour",
//                 "originalName": "flour",
//                 "amount": 0.5,
//                 "unit": "cup",
//                 "meta": [],
//                 "measures": {
//                     "us": {
//                         "amount": 0.5,
//                         "unitShort": "cups",
//                         "unitLong": "cups"
//                     },
//                     "metric": {
//                         "amount": 62.5,
//                         "unitShort": "g",
//                         "unitLong": "grams"
//                     }
//                 }
//             },
//             {
//                 "id": 11215,
//                 "aisle": "Produce",
//                 "image": "garlic.png",
//                 "consistency": "SOLID",
//                 "name": "garlic",
//                 "nameClean": "garlic",
//                 "original": "6 cloves garlic, minced",
//                 "originalName": "garlic, minced",
//                 "amount": 6,
//                 "unit": "cloves",
//                 "meta": [
//                     "minced"
//                 ],
//                 "measures": {
//                     "us": {
//                         "amount": 6,
//                         "unitShort": "cloves",
//                         "unitLong": "cloves"
//                     },
//                     "metric": {
//                         "amount": 6,
//                         "unitShort": "cloves",
//                         "unitLong": "cloves"
//                     }
//                 }
//             },
//             {
//                 "id": 11333,
//                 "aisle": "Produce",
//                 "image": "green-pepper.jpg",
//                 "consistency": "SOLID",
//                 "name": "bell peppers",
//                 "nameClean": "green pepper",
//                 "original": "2 green bell peppers, diced",
//                 "originalName": "green bell peppers, diced",
//                 "amount": 2,
//                 "unit": "",
//                 "meta": [
//                     "diced",
//                     "green"
//                 ],
//                 "measures": {
//                     "us": {
//                         "amount": 2,
//                         "unitShort": "",
//                         "unitLong": ""
//                     },
//                     "metric": {
//                         "amount": 2,
//                         "unitShort": "",
//                         "unitLong": ""
//                     }
//                 }
//             },
//             {
//                 "id": 10115136,
//                 "aisle": "Seafood",
//                 "image": "lump-crabmeat.png",
//                 "consistency": "SOLID",
//                 "name": "lump crab meat",
//                 "nameClean": "lump crabmeat",
//                 "original": "1 pound fresh lump crab meat, picked over for shells and cartilage",
//                 "originalName": "fresh lump crab meat, picked over for shells and cartilage",
//                 "amount": 1,
//                 "unit": "pound",
//                 "meta": [
//                     "fresh",
//                     "picked over",
//                     "for shells and cartilage"
//                 ],
//                 "measures": {
//                     "us": {
//                         "amount": 1,
//                         "unitShort": "lb",
//                         "unitLong": "pound"
//                     },
//                     "metric": {
//                         "amount": 453.592,
//                         "unitShort": "g",
//                         "unitLong": "grams"
//                     }
//                 }
//             },
//             {
//                 "id": 4582,
//                 "aisle": "Oil, Vinegar, Salad Dressing",
//                 "image": "vegetable-oil.jpg",
//                 "consistency": "LIQUID",
//                 "name": "oil",
//                 "nameClean": "cooking oil",
//                 "original": "1/2 cup oil",
//                 "originalName": "oil",
//                 "amount": 0.5,
//                 "unit": "cup",
//                 "meta": [],
//                 "measures": {
//                     "us": {
//                         "amount": 0.5,
//                         "unitShort": "cups",
//                         "unitLong": "cups"
//                     },
//                     "metric": {
//                         "amount": 112,
//                         "unitShort": "ml",
//                         "unitLong": "milliliters"
//                     }
//                 }
//             },
//             {
//                 "id": 11278,
//                 "aisle": "Produce",
//                 "image": "okra.png",
//                 "consistency": "SOLID",
//                 "name": "okra",
//                 "nameClean": "okra",
//                 "original": "2 pounds okra, chopped",
//                 "originalName": "okra, chopped",
//                 "amount": 2,
//                 "unit": "pounds",
//                 "meta": [
//                     "chopped"
//                 ],
//                 "measures": {
//                     "us": {
//                         "amount": 2,
//                         "unitShort": "lb",
//                         "unitLong": "pounds"
//                     },
//                     "metric": {
//                         "amount": 907.185,
//                         "unitShort": "g",
//                         "unitLong": "grams"
//                     }
//                 }
//             },
//             {
//                 "id": 11282,
//                 "aisle": "Produce",
//                 "image": "brown-onion.png",
//                 "consistency": "SOLID",
//                 "name": "onions",
//                 "nameClean": "onion",
//                 "original": "2 medium onions, diced",
//                 "originalName": "onions, diced",
//                 "amount": 2,
//                 "unit": "medium",
//                 "meta": [
//                     "diced"
//                 ],
//                 "measures": {
//                     "us": {
//                         "amount": 2,
//                         "unitShort": "medium",
//                         "unitLong": "mediums"
//                     },
//                     "metric": {
//                         "amount": 2,
//                         "unitShort": "medium",
//                         "unitLong": "mediums"
//                     }
//                 }
//             },
//             {
//                 "id": 15167,
//                 "aisle": "Seafood",
//                 "image": "oysters.jpg",
//                 "consistency": "SOLID",
//                 "name": "dozens oysters",
//                 "nameClean": "oysters",
//                 "original": "2 dozens oysters, freshly shucked, liquor reserved",
//                 "originalName": "dozens oysters, freshly shucked, liquor reserved",
//                 "amount": 2,
//                 "unit": "",
//                 "meta": [],
//                 "measures": {
//                     "us": {
//                         "amount": 2,
//                         "unitShort": "",
//                         "unitLong": ""
//                     },
//                     "metric": {
//                         "amount": 2,
//                         "unitShort": "",
//                         "unitLong": ""
//                     }
//                 }
//             },
//             {
//                 "id": 1002030,
//                 "aisle": "Spices and Seasonings",
//                 "image": "pepper.jpg",
//                 "consistency": "SOLID",
//                 "name": "salt and pepper",
//                 "nameClean": "black pepper",
//                 "original": "Salt and freshly ground black pepper to taste",
//                 "originalName": "Salt and freshly ground black pepper to taste",
//                 "amount": 12,
//                 "unit": "servings",
//                 "meta": [
//                     "black",
//                     "freshly ground",
//                     "to taste"
//                 ],
//                 "measures": {
//                     "us": {
//                         "amount": 12,
//                         "unitShort": "servings",
//                         "unitLong": "servings"
//                     },
//                     "metric": {
//                         "amount": 12,
//                         "unitShort": "servings",
//                         "unitLong": "servings"
//                     }
//                 }
//             },
//             {
//                 "id": 1002031,
//                 "aisle": "Spices and Seasonings",
//                 "image": "chili-powder.jpg",
//                 "consistency": "SOLID",
//                 "name": "creole seasoning blend",
//                 "nameClean": "creole seasoning",
//                 "original": "1 tablespoon Creole seasoning blend",
//                 "originalName": "Creole seasoning blend",
//                 "amount": 1,
//                 "unit": "tablespoon",
//                 "meta": [],
//                 "measures": {
//                     "us": {
//                         "amount": 1,
//                         "unitShort": "Tbsp",
//                         "unitLong": "Tbsp"
//                     },
//                     "metric": {
//                         "amount": 1,
//                         "unitShort": "Tbsp",
//                         "unitLong": "Tbsp"
//                     }
//                 }
//             },
//             {
//                 "id": 15270,
//                 "aisle": "Seafood",
//                 "image": "shrimp.png",
//                 "consistency": "SOLID",
//                 "name": "shrimp",
//                 "nameClean": "shrimp",
//                 "original": "2 pounds medium shrimp, peeled and deveined",
//                 "originalName": "shrimp, peeled and deveined",
//                 "amount": 2,
//                 "unit": "pounds",
//                 "meta": [
//                     "deveined",
//                     "peeled"
//                 ],
//                 "measures": {
//                     "us": {
//                         "amount": 2,
//                         "unitShort": "lb",
//                         "unitLong": "pounds"
//                     },
//                     "metric": {
//                         "amount": 907.185,
//                         "unitShort": "g",
//                         "unitLong": "grams"
//                     }
//                 }
//             },
//             {
//                 "id": 2049,
//                 "aisle": "Produce",
//                 "image": "thyme.jpg",
//                 "consistency": "SOLID",
//                 "name": "thyme leaves",
//                 "nameClean": "thyme",
//                 "original": "1 teaspoon dried thyme leaves",
//                 "originalName": "dried thyme leaves",
//                 "amount": 1,
//                 "unit": "teaspoon",
//                 "meta": [
//                     "dried"
//                 ],
//                 "measures": {
//                     "us": {
//                         "amount": 1,
//                         "unitShort": "tsp",
//                         "unitLong": "teaspoon"
//                     },
//                     "metric": {
//                         "amount": 1,
//                         "unitShort": "tsp",
//                         "unitLong": "teaspoon"
//                     }
//                 }
//             },
//             {
//                 "id": 11547,
//                 "aisle": "Canned and Jarred",
//                 "image": "tomato-paste.jpg",
//                 "consistency": "SOLID",
//                 "name": "tomato purée",
//                 "nameClean": "tomato puree",
//                 "original": "1 cup tomato purée",
//                 "originalName": "tomato purée",
//                 "amount": 1,
//                 "unit": "cup",
//                 "meta": [],
//                 "measures": {
//                     "us": {
//                         "amount": 1,
//                         "unitShort": "cup",
//                         "unitLong": "cup"
//                     },
//                     "metric": {
//                         "amount": 262,
//                         "unitShort": "ml",
//                         "unitLong": "milliliters"
//                     }
//                 }
//             },
//             {
//                 "id": 11529,
//                 "aisle": "Produce",
//                 "image": "tomato.png",
//                 "consistency": "SOLID",
//                 "name": "tomatoes",
//                 "nameClean": "tomato",
//                 "original": "4 tomatoes, seeded and diced",
//                 "originalName": "tomatoes, seeded and diced",
//                 "amount": 4,
//                 "unit": "",
//                 "meta": [
//                     "diced",
//                     "seeded"
//                 ],
//                 "measures": {
//                     "us": {
//                         "amount": 4,
//                         "unitShort": "",
//                         "unitLong": ""
//                     },
//                     "metric": {
//                         "amount": 4,
//                         "unitShort": "",
//                         "unitLong": ""
//                     }
//                 }
//             }
//         ],
//         "id": 659638,
//         "title": "Seafood Gumbo",
//         "readyInMinutes": 45,
//         "servings": 12,
//         "sourceUrl": "http://www.foodista.com/recipe/XJJFHR6X/seafood-gumbo",
//         "summary": "Seafood Gumbo could be just the <b>dairy free and pescatarian</b> recipe you've been looking for. This recipe serves 12. This main course has <b>376 calories</b>, <b>35g of protein</b>, and <b>5g of fat</b> per serving. For <b>$4.87 per serving</b>, this recipe <b>covers 30%</b> of your daily requirements of vitamins and minerals. This recipe is liked by 4 foodies and cooks. From preparation to the plate, this recipe takes approximately <b>45 minutes</b>. This recipe is typical of Cajun cuisine. A mixture of salt and pepper, lump crab meat, flour, and a handful of other ingredients are all it takes to make this recipe so yummy. It is brought to you by Foodista. With a spoonacular <b>score of 80%</b>, this dish is solid. <a href=\"https://spoonacular.com/recipes/seafood-gumbo-1202205\">Seafood Gumbo</a>, <a href=\"https://spoonacular.com/recipes/seafood-gumbo-3129\">Seafood Gumbo</a>, and <a href=\"https://spoonacular.com/recipes/seafood-gumbo-1262935\">Seafood Gumbo</a> are very similar to this recipe.",
//         "cuisines": [
//             "Creole",
//             "Cajun"
//         ],
//         "dishTypes": [
//             "lunch",
//             "soup",
//             "main course",
//             "main dish",
//             "dinner"
//         ],
//         "diets": [
//             "dairy free",
//             "pescatarian"
//         ],
//         "occasions": [],
//         "originalId": null,
//         "spoonacularScore": 79.6876220703125,
//         "spoonacularSourceUrl": "https://spoonacular.com/seafood-gumbo-659638"
//     },
//     {
//         "vegetarian": false,
//         "vegan": false,
//         "glutenFree": true,
//         "dairyFree": false,
//         "veryHealthy": false,
//         "cheap": false,
//         "veryPopular": false,
//         "sustainable": false,
//         "lowFodmap": false,
//         "weightWatcherSmartPoints": 9,
//         "gaps": "no",
//         "preparationMinutes": -1,
//         "cookingMinutes": -1,
//         "aggregateLikes": 4,
//         "healthScore": 9,
//         "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
//         "license": "CC BY 3.0",
//         "sourceName": "Foodista",
//         "pricePerServing": 152.05,
//         "extendedIngredients": [
//             {
//                 "id": 98839,
//                 "aisle": "Ethnic Foods",
//                 "image": "chile-chipotle.jpg",
//                 "consistency": "SOLID",
//                 "name": "chipotle peppers",
//                 "nameClean": "chipotle chiles",
//                 "original": "2 chipotle peppers, dried",
//                 "originalName": "chipotle peppers, dried",
//                 "amount": 2,
//                 "unit": "",
//                 "meta": [
//                     "dried"
//                 ],
//                 "measures": {
//                     "us": {
//                         "amount": 2,
//                         "unitShort": "",
//                         "unitLong": ""
//                     },
//                     "metric": {
//                         "amount": 2,
//                         "unitShort": "",
//                         "unitLong": ""
//                     }
//                 }
//             },
//             {
//                 "id": 10111333,
//                 "aisle": "Produce",
//                 "image": "green-pepper.jpg",
//                 "consistency": "SOLID",
//                 "name": "pasilla peppers",
//                 "nameClean": "peppers",
//                 "original": "2 pasilla peppers, roasted",
//                 "originalName": "pasilla peppers, roasted",
//                 "amount": 2,
//                 "unit": "",
//                 "meta": [],
//                 "measures": {
//                     "us": {
//                         "amount": 2,
//                         "unitShort": "",
//                         "unitLong": ""
//                     },
//                     "metric": {
//                         "amount": 2,
//                         "unitShort": "",
//                         "unitLong": ""
//                     }
//                 }
//             },
//             {
//                 "id": 10411529,
//                 "aisle": "Produce",
//                 "image": "plum-tomatoes.png",
//                 "consistency": "SOLID",
//                 "name": "plum tomatoes",
//                 "nameClean": "plum tomato",
//                 "original": "8 plum tomatoes, roasted",
//                 "originalName": "plum tomatoes, roasted",
//                 "amount": 8,
//                 "unit": "",
//                 "meta": [],
//                 "measures": {
//                     "us": {
//                         "amount": 8,
//                         "unitShort": "",
//                         "unitLong": ""
//                     },
//                     "metric": {
//                         "amount": 8,
//                         "unitShort": "",
//                         "unitLong": ""
//                     }
//                 }
//             },
//             {
//                 "id": 11215,
//                 "aisle": "Produce",
//                 "image": "garlic.png",
//                 "consistency": "SOLID",
//                 "name": "garlic",
//                 "nameClean": "garlic",
//                 "original": "3 cloves garlic, roasted",
//                 "originalName": "garlic, roasted",
//                 "amount": 3,
//                 "unit": "cloves",
//                 "meta": [],
//                 "measures": {
//                     "us": {
//                         "amount": 3,
//                         "unitShort": "cloves",
//                         "unitLong": "cloves"
//                     },
//                     "metric": {
//                         "amount": 3,
//                         "unitShort": "cloves",
//                         "unitLong": "cloves"
//                     }
//                 }
//             },
//             {
//                 "id": 2027,
//                 "aisle": "Produce",
//                 "image": "oregano.jpg",
//                 "consistency": "SOLID",
//                 "name": "oregano",
//                 "nameClean": "oregano",
//                 "original": "1 teaspoon oregano",
//                 "originalName": "oregano",
//                 "amount": 1,
//                 "unit": "teaspoon",
//                 "meta": [],
//                 "measures": {
//                     "us": {
//                         "amount": 1,
//                         "unitShort": "tsp",
//                         "unitLong": "teaspoon"
//                     },
//                     "metric": {
//                         "amount": 1,
//                         "unitShort": "tsp",
//                         "unitLong": "teaspoon"
//                     }
//                 }
//             },
//             {
//                 "id": 2010,
//                 "aisle": "Spices and Seasonings",
//                 "image": "cinnamon.jpg",
//                 "consistency": "SOLID",
//                 "name": "cinnamon",
//                 "nameClean": "cinnamon",
//                 "original": "1 teaspoon cinnamon",
//                 "originalName": "cinnamon",
//                 "amount": 1,
//                 "unit": "teaspoon",
//                 "meta": [],
//                 "measures": {
//                     "us": {
//                         "amount": 1,
//                         "unitShort": "tsp",
//                         "unitLong": "teaspoon"
//                     },
//                     "metric": {
//                         "amount": 1,
//                         "unitShort": "tsp",
//                         "unitLong": "teaspoon"
//                     }
//                 }
//             },
//             {
//                 "id": 12023,
//                 "aisle": "Ethnic Foods",
//                 "image": "sesame-seeds.png",
//                 "consistency": "SOLID",
//                 "name": "sesame seeds",
//                 "nameClean": "sesame seeds",
//                 "original": "1 tablespoon sesame seeds",
//                 "originalName": "sesame seeds",
//                 "amount": 1,
//                 "unit": "tablespoon",
//                 "meta": [],
//                 "measures": {
//                     "us": {
//                         "amount": 1,
//                         "unitShort": "Tbsp",
//                         "unitLong": "Tbsp"
//                     },
//                     "metric": {
//                         "amount": 1,
//                         "unitShort": "Tbsp",
//                         "unitLong": "Tbsp"
//                     }
//                 }
//             },
//             {
//                 "id": 1002030,
//                 "aisle": "Spices and Seasonings",
//                 "image": "pepper.jpg",
//                 "consistency": "SOLID",
//                 "name": "pepper",
//                 "nameClean": "black pepper",
//                 "original": "1/2 teaspoon pepper",
//                 "originalName": "pepper",
//                 "amount": 0.5,
//                 "unit": "teaspoon",
//                 "meta": [],
//                 "measures": {
//                     "us": {
//                         "amount": 0.5,
//                         "unitShort": "tsps",
//                         "unitLong": "teaspoons"
//                     },
//                     "metric": {
//                         "amount": 0.5,
//                         "unitShort": "tsps",
//                         "unitLong": "teaspoons"
//                     }
//                 }
//             },
//             {
//                 "id": 1014582,
//                 "aisle": "Oil, Vinegar, Salad Dressing",
//                 "image": "vegetable-oil.jpg",
//                 "consistency": "LIQUID",
//                 "name": "canola oil",
//                 "nameClean": "canola oil",
//                 "original": "2 tablespoons canola oil",
//                 "originalName": "canola oil",
//                 "amount": 2,
//                 "unit": "tablespoons",
//                 "meta": [],
//                 "measures": {
//                     "us": {
//                         "amount": 2,
//                         "unitShort": "Tbsps",
//                         "unitLong": "Tbsps"
//                     },
//                     "metric": {
//                         "amount": 2,
//                         "unitShort": "Tbsps",
//                         "unitLong": "Tbsps"
//                     }
//                 }
//             },
//             {
//                 "id": 19081,
//                 "aisle": "Sweet Snacks",
//                 "image": "milk-chocolate.jpg",
//                 "consistency": "SOLID",
//                 "name": "mexican chocolate",
//                 "nameClean": "milk chocolate",
//                 "original": "1 1/2 ounces Mexican chocolate",
//                 "originalName": "Mexican chocolate",
//                 "amount": 1.5,
//                 "unit": "ounces",
//                 "meta": [],
//                 "measures": {
//                     "us": {
//                         "amount": 1.5,
//                         "unitShort": "oz",
//                         "unitLong": "ounces"
//                     },
//                     "metric": {
//                         "amount": 42.524,
//                         "unitShort": "g",
//                         "unitLong": "grams"
//                     }
//                 }
//             },
//             {
//                 "id": 2047,
//                 "aisle": "Spices and Seasonings",
//                 "image": "salt.jpg",
//                 "consistency": "SOLID",
//                 "name": "salt",
//                 "nameClean": "table salt",
//                 "original": "1/2 teaspoon salt",
//                 "originalName": "salt",
//                 "amount": 0.5,
//                 "unit": "teaspoon",
//                 "meta": [],
//                 "measures": {
//                     "us": {
//                         "amount": 0.5,
//                         "unitShort": "tsps",
//                         "unitLong": "teaspoons"
//                     },
//                     "metric": {
//                         "amount": 0.5,
//                         "unitShort": "tsps",
//                         "unitLong": "teaspoons"
//                     }
//                 }
//             },
//             {
//                 "id": 11549,
//                 "aisle": "Canned and Jarred",
//                 "image": "tomato-sauce-or-pasta-sauce.jpg",
//                 "consistency": "SOLID",
//                 "name": "tomato sauce",
//                 "nameClean": "canned tomato sauce",
//                 "original": "8 ounces tomato sauce",
//                 "originalName": "tomato sauce",
//                 "amount": 8,
//                 "unit": "ounces",
//                 "meta": [],
//                 "measures": {
//                     "us": {
//                         "amount": 8,
//                         "unitShort": "oz",
//                         "unitLong": "ounces"
//                     },
//                     "metric": {
//                         "amount": 226.796,
//                         "unitShort": "g",
//                         "unitLong": "grams"
//                     }
//                 }
//             },
//             {
//                 "id": 1014582,
//                 "aisle": "Oil, Vinegar, Salad Dressing",
//                 "image": "vegetable-oil.jpg",
//                 "consistency": "LIQUID",
//                 "name": "canola oil",
//                 "nameClean": "canola oil",
//                 "original": "3 tablespoons canola oil",
//                 "originalName": "canola oil",
//                 "amount": 3,
//                 "unit": "tablespoons",
//                 "meta": [],
//                 "measures": {
//                     "us": {
//                         "amount": 3,
//                         "unitShort": "Tbsps",
//                         "unitLong": "Tbsps"
//                     },
//                     "metric": {
//                         "amount": 3,
//                         "unitShort": "Tbsps",
//                         "unitLong": "Tbsps"
//                     }
//                 }
//             },
//             {
//                 "id": 17047,
//                 "aisle": "Meat",
//                 "image": "whole-chicken.jpg",
//                 "consistency": "SOLID",
//                 "name": "lamb shoulder",
//                 "nameClean": "lamb shoulder",
//                 "original": "1 lamb shoulder, or 4 lamb shanks",
//                 "originalName": "lamb shoulder, or 4 lamb shanks",
//                 "amount": 1,
//                 "unit": "",
//                 "meta": [],
//                 "measures": {
//                     "us": {
//                         "amount": 1,
//                         "unitShort": "",
//                         "unitLong": ""
//                     },
//                     "metric": {
//                         "amount": 1,
//                         "unitShort": "",
//                         "unitLong": ""
//                     }
//                 }
//             },
//             {
//                 "id": 1102047,
//                 "aisle": "Spices and Seasonings",
//                 "image": "salt-and-pepper.jpg",
//                 "consistency": "SOLID",
//                 "name": "salt and pepper",
//                 "nameClean": "salt and pepper",
//                 "original": "salt and pepper",
//                 "originalName": "salt and pepper",
//                 "amount": 4,
//                 "unit": "servings",
//                 "meta": [],
//                 "measures": {
//                     "us": {
//                         "amount": 4,
//                         "unitShort": "servings",
//                         "unitLong": "servings"
//                     },
//                     "metric": {
//                         "amount": 4,
//                         "unitShort": "servings",
//                         "unitLong": "servings"
//                     }
//                 }
//             }
//         ],
//         "id": 649214,
//         "title": "Lamb In Red Mole Sauce",
//         "readyInMinutes": 45,
//         "servings": 4,
//         "sourceUrl": "https://www.foodista.com/recipe/LT73VNJR/lamb-in-red-mole-sauce",
//         "image": "https://img.spoonacular.com/recipes/649214-556x370.jpg",
//         "imageType": "jpg",
//         "summary": "Lamb In Red Mole Sauce requires about <b>45 minutes</b> from start to finish. Watching your figure? This gluten free recipe has <b>286 calories</b>, <b>4g of protein</b>, and <b>23g of fat</b> per serving. For <b>$1.52 per serving</b>, this recipe <b>covers 15%</b> of your daily requirements of vitamins and minerals. This recipe serves 4. 4 people have made this recipe and would make it again. It works well as an affordable sauce. This recipe from Foodista requires canolan oil, salt, cinnamon, and garlic. All things considered, we decided this recipe <b>deserves a spoonacular score of 49%</b>. This score is good. Similar recipes include <a href=\"https://spoonacular.com/recipes/lamb-in-red-mole-sauce-16171\">Lamb in Red Mole Sauce</a>, <a href=\"https://spoonacular.com/recipes/rack-of-lamb-mole-with-a-strawberry-balsamic-sauce-427281\">Rack of Lamb Mole with a Strawberry, Balsamic Sauce</a>, and <a href=\"https://spoonacular.com/recipes/little-red-mole-sauce-1508153\">Little Red Mole Sauce</a>.",
//         "cuisines": [],
//         "dishTypes": [
//             "sauce"
//         ],
//         "diets": [
//             "gluten free"
//         ],
//         "occasions": [],
//         "originalId": null,
//         "spoonacularScore": 54.05763244628906,
//         "spoonacularSourceUrl": "https://spoonacular.com/lamb-in-red-mole-sauce-649214"
//     },
//     {
//         "vegetarian": true,
//         "vegan": false,
//         "glutenFree": false,
//         "dairyFree": true,
//         "veryHealthy": false,
//         "cheap": false,
//         "veryPopular": false,
//         "sustainable": false,
//         "lowFodmap": false,
//         "weightWatcherSmartPoints": 18,
//         "gaps": "no",
//         "preparationMinutes": -1,
//         "cookingMinutes": -1,
//         "aggregateLikes": 2,
//         "healthScore": 7,
//         "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
//         "license": "CC BY 3.0",
//         "sourceName": "Foodista",
//         "pricePerServing": 136.33,
//         "extendedIngredients": [
//             {
//                 "id": 18369,
//                 "aisle": "Baking",
//                 "image": "white-powder.jpg",
//                 "consistency": "SOLID",
//                 "name": "baking powder",
//                 "nameClean": "baking powder",
//                 "original": "2 tsp baking powder",
//                 "originalName": "baking powder",
//                 "amount": 2,
//                 "unit": "tsp",
//                 "meta": [],
//                 "measures": {
//                     "us": {
//                         "amount": 2,
//                         "unitShort": "tsps",
//                         "unitLong": "teaspoons"
//                     },
//                     "metric": {
//                         "amount": 2,
//                         "unitShort": "tsps",
//                         "unitLong": "teaspoons"
//                     }
//                 }
//             },
//             {
//                 "id": 19334,
//                 "aisle": "Baking",
//                 "image": "light-brown-sugar.jpg",
//                 "consistency": "SOLID",
//                 "name": "brown sugar",
//                 "nameClean": "golden brown sugar",
//                 "original": "1 tablespoon brown sugar",
//                 "originalName": "brown sugar",
//                 "amount": 1,
//                 "unit": "tablespoon",
//                 "meta": [],
//                 "measures": {
//                     "us": {
//                         "amount": 1,
//                         "unitShort": "Tbsp",
//                         "unitLong": "Tbsp"
//                     },
//                     "metric": {
//                         "amount": 1,
//                         "unitShort": "Tbsp",
//                         "unitLong": "Tbsp"
//                     }
//                 }
//             },
//             {
//                 "id": 19334,
//                 "aisle": "Baking",
//                 "image": "dark-brown-sugar.png",
//                 "consistency": "SOLID",
//                 "name": "brown sugar",
//                 "nameClean": "golden brown sugar",
//                 "original": "1 tablespoon brown sugar",
//                 "originalName": "brown sugar",
//                 "amount": 1,
//                 "unit": "tablespoon",
//                 "meta": [],
//                 "measures": {
//                     "us": {
//                         "amount": 1,
//                         "unitShort": "Tbsp",
//                         "unitLong": "Tbsp"
//                     },
//                     "metric": {
//                         "amount": 1,
//                         "unitShort": "Tbsp",
//                         "unitLong": "Tbsp"
//                     }
//                 }
//             },
//             {
//                 "id": 93747,
//                 "aisle": "Health Foods",
//                 "image": "coconut-flour-or-other-gluten-free-flour.jpg",
//                 "consistency": "SOLID",
//                 "name": "coconut flour",
//                 "nameClean": "coconut flour",
//                 "original": "1 cup coconut flour",
//                 "originalName": "coconut flour",
//                 "amount": 1,
//                 "unit": "cup",
//                 "meta": [],
//                 "measures": {
//                     "us": {
//                         "amount": 1,
//                         "unitShort": "cup",
//                         "unitLong": "cup"
//                     },
//                     "metric": {
//                         "amount": 120,
//                         "unitShort": "g",
//                         "unitLong": "grams"
//                     }
//                 }
//             },
//             {
//                 "id": 12118,
//                 "aisle": "Canned and Jarred",
//                 "image": "coconut-milk.png",
//                 "consistency": "LIQUID",
//                 "name": "coconut milk",
//                 "nameClean": "coconut milk",
//                 "original": "2 cups coconut milk",
//                 "originalName": "coconut milk",
//                 "amount": 2,
//                 "unit": "cups",
//                 "meta": [],
//                 "measures": {
//                     "us": {
//                         "amount": 2,
//                         "unitShort": "cups",
//                         "unitLong": "cups"
//                     },
//                     "metric": {
//                         "amount": 452,
//                         "unitShort": "ml",
//                         "unitLong": "milliliters"
//                     }
//                 }
//             },
//             {
//                 "id": 9078,
//                 "aisle": "Produce",
//                 "image": "cranberries.jpg",
//                 "consistency": "SOLID",
//                 "name": "cranberries",
//                 "nameClean": "cranberries",
//                 "original": "1 cup fresh cranberries",
//                 "originalName": "fresh cranberries",
//                 "amount": 1,
//                 "unit": "cup",
//                 "meta": [
//                     "fresh"
//                 ],
//                 "measures": {
//                     "us": {
//                         "amount": 1,
//                         "unitShort": "cup",
//                         "unitLong": "cup"
//                     },
//                     "metric": {
//                         "amount": 100,
//                         "unitShort": "g",
//                         "unitLong": "grams"
//                     }
//                 }
//             },
//             {
//                 "id": 1123,
//                 "aisle": "Milk, Eggs, Other Dairy",
//                 "image": "egg.png",
//                 "consistency": "SOLID",
//                 "name": "eggs",
//                 "nameClean": "egg",
//                 "original": "4 eggs",
//                 "originalName": "eggs",
//                 "amount": 4,
//                 "unit": "",
//                 "meta": [],
//                 "measures": {
//                     "us": {
//                         "amount": 4,
//                         "unitShort": "",
//                         "unitLong": ""
//                     },
//                     "metric": {
//                         "amount": 4,
//                         "unitShort": "",
//                         "unitLong": ""
//                     }
//                 }
//             },
//             {
//                 "id": 2047,
//                 "aisle": "Spices and Seasonings",
//                 "image": "salt.jpg",
//                 "consistency": "SOLID",
//                 "name": "salt",
//                 "nameClean": "table salt",
//                 "original": "1/2 teaspoon salt",
//                 "originalName": "salt",
//                 "amount": 0.5,
//                 "unit": "teaspoon",
//                 "meta": [],
//                 "measures": {
//                     "us": {
//                         "amount": 0.5,
//                         "unitShort": "tsps",
//                         "unitLong": "teaspoons"
//                     },
//                     "metric": {
//                         "amount": 0.5,
//                         "unitShort": "tsps",
//                         "unitLong": "teaspoons"
//                     }
//                 }
//             },
//             {
//                 "id": 2050,
//                 "aisle": "Baking",
//                 "image": "vanilla-extract.jpg",
//                 "consistency": "LIQUID",
//                 "name": "vanilla extract",
//                 "nameClean": "vanilla extract",
//                 "original": "1 tsp vanilla extract",
//                 "originalName": "vanilla extract",
//                 "amount": 1,
//                 "unit": "tsp",
//                 "meta": [],
//                 "measures": {
//                     "us": {
//                         "amount": 1,
//                         "unitShort": "tsp",
//                         "unitLong": "teaspoon"
//                     },
//                     "metric": {
//                         "amount": 1,
//                         "unitShort": "tsp",
//                         "unitLong": "teaspoon"
//                     }
//                 }
//             },
//             {
//                 "id": 20080,
//                 "aisle": "Baking",
//                 "image": "flour.png",
//                 "consistency": "SOLID",
//                 "name": "flour",
//                 "nameClean": "whole wheat flour",
//                 "original": "1 cup whole wheat flour",
//                 "originalName": "whole wheat flour",
//                 "amount": 1,
//                 "unit": "cup",
//                 "meta": [
//                     "whole wheat"
//                 ],
//                 "measures": {
//                     "us": {
//                         "amount": 1,
//                         "unitShort": "cup",
//                         "unitLong": "cup"
//                     },
//                     "metric": {
//                         "amount": 120,
//                         "unitShort": "g",
//                         "unitLong": "grams"
//                     }
//                 }
//             }
//         ],
//         "id": 637055,
//         "title": "Caramelized cranberries coconut pancakes",
//         "readyInMinutes": 45,
//         "servings": 5,
//         "sourceUrl": "http://www.foodista.com/recipe/44ZRT4MN/caramelized-cranberries-coconut-pancakes",
//         "image": "https://img.spoonacular.com/recipes/637055-556x370.jpg",
//         "imageType": "jpg",
//         "summary": "Caramelized cranberries coconut pancakes could be just the <b>dairy free and lacto ovo vegetarian</b> recipe you've been looking for. This recipe serves 5. For <b>$1.36 per serving</b>, this recipe <b>covers 17%</b> of your daily requirements of vitamins and minerals. One serving contains <b>433 calories</b>, <b>13g of protein</b>, and <b>27g of fat</b>. 2 people were impressed by this recipe. It works well as a rather inexpensive breakfast for <b>Christmas</b>. If you have eggs, flour, vanillan extract, and a few other ingredients on hand, you can make it. It is brought to you by Foodista. From preparation to the plate, this recipe takes roughly <b>45 minutes</b>. All things considered, we decided this recipe <b>deserves a spoonacular score of 46%</b>. This score is pretty good. Try <a href=\"https://spoonacular.com/recipes/caramelized-cranberries-coconut-pancakes-1318559\">Caramelized cranberries coconut pancakes</a>, <a href=\"https://spoonacular.com/recipes/coconut-ricotta-pancakes-with-caramelized-banana-creme-fraiche-butter-588287\">Coconut ricotta pancakes with caramelized banana creme fraiche butter</a>, and <a href=\"https://spoonacular.com/recipes/focaccia-with-caramelized-onions-cranberries-and-brie-1579559\">Focaccia with Caramelized Onions, Cranberries, and Brie</a> for similar recipes.",
//         "cuisines": [],
//         "dishTypes": [
//             "morning meal",
//             "brunch",
//             "breakfast"
//         ],
//         "diets": [
//             "dairy free",
//             "lacto ovo vegetarian"
//         ],
//         "occasions": [
//             "christmas"
//         ],
//         "originalId": null,
//         "spoonacularScore": 47.92305374145508,
//         "spoonacularSourceUrl": "https://spoonacular.com/caramelized-cranberries-coconut-pancakes-637055"
//     },
//     {
//         "vegetarian": true,
//         "vegan": false,
//         "glutenFree": false,
//         "dairyFree": false,
//         "veryHealthy": false,
//         "cheap": false,
//         "veryPopular": false,
//         "sustainable": false,
//         "lowFodmap": false,
//         "weightWatcherSmartPoints": 5,
//         "gaps": "no",
//         "preparationMinutes": -1,
//         "cookingMinutes": -1,
//         "aggregateLikes": 2,
//         "healthScore": 0,
//         "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
//         "license": "CC BY 3.0",
//         "sourceName": "Foodista",
//         "pricePerServing": 31.95,
//         "extendedIngredients": [
//             {
//                 "id": 20081,
//                 "aisle": "Baking",
//                 "image": "flour.png",
//                 "consistency": "SOLID",
//                 "name": "flour",
//                 "nameClean": "wheat flour",
//                 "original": "1 cup all-purpose flour",
//                 "originalName": "all-purpose flour",
//                 "amount": 1,
//                 "unit": "cup",
//                 "meta": [
//                     "all-purpose"
//                 ],
//                 "measures": {
//                     "us": {
//                         "amount": 1,
//                         "unitShort": "cup",
//                         "unitLong": "cup"
//                     },
//                     "metric": {
//                         "amount": 125,
//                         "unitShort": "g",
//                         "unitLong": "grams"
//                     }
//                 }
//             },
//             {
//                 "id": 20080,
//                 "aisle": "Baking",
//                 "image": "flour.png",
//                 "consistency": "SOLID",
//                 "name": "flour",
//                 "nameClean": "whole wheat flour",
//                 "original": "3/4 cup whole-wheat flour",
//                 "originalName": "whole-wheat flour",
//                 "amount": 0.75,
//                 "unit": "cup",
//                 "meta": [
//                     "whole-wheat"
//                 ],
//                 "measures": {
//                     "us": {
//                         "amount": 0.75,
//                         "unitShort": "cups",
//                         "unitLong": "cups"
//                     },
//                     "metric": {
//                         "amount": 90,
//                         "unitShort": "g",
//                         "unitLong": "grams"
//                     }
//                 }
//             },
//             {
//                 "id": 8120,
//                 "aisle": "Cereal",
//                 "image": "rolled-oats.jpg",
//                 "consistency": "SOLID",
//                 "name": "rolled oats",
//                 "nameClean": "rolled oats",
//                 "original": "1/2 cup rolled oats",
//                 "originalName": "rolled oats",
//                 "amount": 0.5,
//                 "unit": "cup",
//                 "meta": [],
//                 "measures": {
//                     "us": {
//                         "amount": 0.5,
//                         "unitShort": "cups",
//                         "unitLong": "cups"
//                     },
//                     "metric": {
//                         "amount": 40.541,
//                         "unitShort": "g",
//                         "unitLong": "grams"
//                     }
//                 }
//             },
//             {
//                 "id": 19334,
//                 "aisle": "Baking",
//                 "image": "light-brown-sugar.jpg",
//                 "consistency": "SOLID",
//                 "name": "brown sugar",
//                 "nameClean": "golden brown sugar",
//                 "original": "1/4 cup packed brown sugar",
//                 "originalName": "packed brown sugar",
//                 "amount": 0.25,
//                 "unit": "cup",
//                 "meta": [
//                     "packed"
//                 ],
//                 "measures": {
//                     "us": {
//                         "amount": 0.25,
//                         "unitShort": "cups",
//                         "unitLong": "cups"
//                     },
//                     "metric": {
//                         "amount": 55,
//                         "unitShort": "g",
//                         "unitLong": "grams"
//                     }
//                 }
//             },
//             {
//                 "id": 19334,
//                 "aisle": "Baking",
//                 "image": "dark-brown-sugar.png",
//                 "consistency": "SOLID",
//                 "name": "brown sugar",
//                 "nameClean": "golden brown sugar",
//                 "original": "1/4 cup packed brown sugar",
//                 "originalName": "packed brown sugar",
//                 "amount": 0.25,
//                 "unit": "cup",
//                 "meta": [
//                     "packed"
//                 ],
//                 "measures": {
//                     "us": {
//                         "amount": 0.25,
//                         "unitShort": "cups",
//                         "unitLong": "cups"
//                     },
//                     "metric": {
//                         "amount": 55,
//                         "unitShort": "g",
//                         "unitLong": "grams"
//                     }
//                 }
//             },
//             {
//                 "id": 18369,
//                 "aisle": "Baking",
//                 "image": "white-powder.jpg",
//                 "consistency": "SOLID",
//                 "name": "baking powder",
//                 "nameClean": "baking powder",
//                 "original": "2 teaspoons baking powder",
//                 "originalName": "baking powder",
//                 "amount": 2,
//                 "unit": "teaspoons",
//                 "meta": [],
//                 "measures": {
//                     "us": {
//                         "amount": 2,
//                         "unitShort": "tsps",
//                         "unitLong": "teaspoons"
//                     },
//                     "metric": {
//                         "amount": 2,
//                         "unitShort": "tsps",
//                         "unitLong": "teaspoons"
//                     }
//                 }
//             },
//             {
//                 "id": 18372,
//                 "aisle": "Baking",
//                 "image": "white-powder.jpg",
//                 "consistency": "SOLID",
//                 "name": "baking soda",
//                 "nameClean": "baking soda",
//                 "original": "1/2 teaspoon baking soda",
//                 "originalName": "baking soda",
//                 "amount": 0.5,
//                 "unit": "teaspoon",
//                 "meta": [],
//                 "measures": {
//                     "us": {
//                         "amount": 0.5,
//                         "unitShort": "tsps",
//                         "unitLong": "teaspoons"
//                     },
//                     "metric": {
//                         "amount": 0.5,
//                         "unitShort": "tsps",
//                         "unitLong": "teaspoons"
//                     }
//                 }
//             },
//             {
//                 "id": 2047,
//                 "aisle": "Spices and Seasonings",
//                 "image": "salt.jpg",
//                 "consistency": "SOLID",
//                 "name": "salt",
//                 "nameClean": "table salt",
//                 "original": "1/2 teaspoon salt",
//                 "originalName": "salt",
//                 "amount": 0.5,
//                 "unit": "teaspoon",
//                 "meta": [],
//                 "measures": {
//                     "us": {
//                         "amount": 0.5,
//                         "unitShort": "tsps",
//                         "unitLong": "teaspoons"
//                     },
//                     "metric": {
//                         "amount": 0.5,
//                         "unitShort": "tsps",
//                         "unitLong": "teaspoons"
//                     }
//                 }
//             },
//             {
//                 "id": 1012010,
//                 "aisle": "Spices and Seasonings",
//                 "image": "cinnamon.jpg",
//                 "consistency": "SOLID",
//                 "name": "ground cinnamon",
//                 "nameClean": "ground cinnamon",
//                 "original": "1/2 teaspoon ground cinnamon",
//                 "originalName": "ground cinnamon",
//                 "amount": 0.5,
//                 "unit": "teaspoon",
//                 "meta": [],
//                 "measures": {
//                     "us": {
//                         "amount": 0.5,
//                         "unitShort": "tsps",
//                         "unitLong": "teaspoons"
//                     },
//                     "metric": {
//                         "amount": 0.5,
//                         "unitShort": "tsps",
//                         "unitLong": "teaspoons"
//                     }
//                 }
//             },
//             {
//                 "id": 1022001,
//                 "aisle": "Spices and Seasonings",
//                 "image": "allspice-ground.jpg",
//                 "consistency": "SOLID",
//                 "name": "ground allspice",
//                 "nameClean": "ground allspice",
//                 "original": "1/2 teaspoon ground allspice",
//                 "originalName": "ground allspice",
//                 "amount": 0.5,
//                 "unit": "teaspoon",
//                 "meta": [],
//                 "measures": {
//                     "us": {
//                         "amount": 0.5,
//                         "unitShort": "tsps",
//                         "unitLong": "teaspoons"
//                     },
//                     "metric": {
//                         "amount": 0.5,
//                         "unitShort": "tsps",
//                         "unitLong": "teaspoons"
//                     }
//                 }
//             },
//             {
//                 "id": 1001,
//                 "aisle": "Milk, Eggs, Other Dairy",
//                 "image": "butter-sliced.jpg",
//                 "consistency": "SOLID",
//                 "name": "butter",
//                 "nameClean": "butter",
//                 "original": "5 tablespoons chilled butter, cut into small pieces",
//                 "originalName": "chilled butter, cut into small pieces",
//                 "amount": 5,
//                 "unit": "tablespoons",
//                 "meta": [
//                     "chilled",
//                     "cut into small pieces"
//                 ],
//                 "measures": {
//                     "us": {
//                         "amount": 5,
//                         "unitShort": "Tbsps",
//                         "unitLong": "Tbsps"
//                     },
//                     "metric": {
//                         "amount": 5,
//                         "unitShort": "Tbsps",
//                         "unitLong": "Tbsps"
//                     }
//                 }
//             },
//             {
//                 "id": 1056,
//                 "aisle": "Milk, Eggs, Other Dairy",
//                 "image": "sour-cream.jpg",
//                 "consistency": "SOLID",
//                 "name": "nonfat-sour cream",
//                 "nameClean": "sour cream",
//                 "original": "3/4 cup nonfat-sour cream (a little over ¾ cup is fine too)",
//                 "originalName": "nonfat-sour cream (a little over ¾ cup is fine too)",
//                 "amount": 0.75,
//                 "unit": "cup",
//                 "meta": [
//                     "fine",
//                     "(a little over)"
//                 ],
//                 "measures": {
//                     "us": {
//                         "amount": 0.75,
//                         "unitShort": "cups",
//                         "unitLong": "cups"
//                     },
//                     "metric": {
//                         "amount": 172.5,
//                         "unitShort": "ml",
//                         "unitLong": "milliliters"
//                     }
//                 }
//             },
//             {
//                 "id": 2050,
//                 "aisle": "Baking",
//                 "image": "vanilla-extract.jpg",
//                 "consistency": "LIQUID",
//                 "name": "vanilla extract",
//                 "nameClean": "vanilla extract",
//                 "original": "2 teaspoons vanilla extract, divided",
//                 "originalName": "vanilla extract, divided",
//                 "amount": 2,
//                 "unit": "teaspoons",
//                 "meta": [
//                     "divided"
//                 ],
//                 "measures": {
//                     "us": {
//                         "amount": 2,
//                         "unitShort": "tsps",
//                         "unitLong": "teaspoons"
//                     },
//                     "metric": {
//                         "amount": 2,
//                         "unitShort": "tsps",
//                         "unitLong": "teaspoons"
//                     }
//                 }
//             },
//             {
//                 "id": 9079,
//                 "aisle": "Dried Fruits",
//                 "image": "dried-cranberries.jpg",
//                 "consistency": "SOLID",
//                 "name": "cranberries",
//                 "nameClean": "dried cranberries",
//                 "original": "1/3 cup chopped dried cranberries",
//                 "originalName": "chopped dried cranberries",
//                 "amount": 0.33333334,
//                 "unit": "cup",
//                 "meta": [
//                     "dried",
//                     "chopped"
//                 ],
//                 "measures": {
//                     "us": {
//                         "amount": 0.33333334,
//                         "unitShort": "cups",
//                         "unitLong": "cups"
//                     },
//                     "metric": {
//                         "amount": 40.404,
//                         "unitShort": "g",
//                         "unitLong": "grams"
//                     }
//                 }
//             },
//             {
//                 "id": 12131,
//                 "aisle": "Savory Snacks",
//                 "image": "macadamia-nuts.png",
//                 "consistency": "SOLID",
//                 "name": "macadamia nuts",
//                 "nameClean": "macadamia nuts",
//                 "original": "1/3 cup coarsely chopped macadamia nuts",
//                 "originalName": "coarsely chopped macadamia nuts",
//                 "amount": 0.33333334,
//                 "unit": "cup",
//                 "meta": [
//                     "coarsely chopped"
//                 ],
//                 "measures": {
//                     "us": {
//                         "amount": 0.33333334,
//                         "unitShort": "cups",
//                         "unitLong": "cups"
//                     },
//                     "metric": {
//                         "amount": 44.667,
//                         "unitShort": "g",
//                         "unitLong": "grams"
//                     }
//                 }
//             },
//             {
//                 "id": 19336,
//                 "aisle": "Baking",
//                 "image": "powdered-sugar.jpg",
//                 "consistency": "SOLID",
//                 "name": "powdered sugar",
//                 "nameClean": "powdered sugar",
//                 "original": "1/2 cup powdered sugar",
//                 "originalName": "powdered sugar",
//                 "amount": 0.5,
//                 "unit": "cup",
//                 "meta": [],
//                 "measures": {
//                     "us": {
//                         "amount": 0.5,
//                         "unitShort": "cups",
//                         "unitLong": "cups"
//                     },
//                     "metric": {
//                         "amount": 60,
//                         "unitShort": "g",
//                         "unitLong": "grams"
//                     }
//                 }
//             },
//             {
//                 "id": 1174,
//                 "aisle": "Milk, Eggs, Other Dairy",
//                 "image": "milk.png",
//                 "consistency": "LIQUID",
//                 "name": "milk",
//                 "nameClean": "2 percent milk",
//                 "original": "4 teaspoons reduced-fat milk",
//                 "originalName": "reduced-fat milk",
//                 "amount": 4,
//                 "unit": "teaspoons",
//                 "meta": [
//                     "reduced-fat"
//                 ],
//                 "measures": {
//                     "us": {
//                         "amount": 4,
//                         "unitShort": "tsps",
//                         "unitLong": "teaspoons"
//                     },
//                     "metric": {
//                         "amount": 4,
//                         "unitShort": "tsps",
//                         "unitLong": "teaspoons"
//                     }
//                 }
//             },
//             {
//                 "id": 10719297,
//                 "aisle": "Nut butters, Jams, and Honey",
//                 "image": "raspberry-jam.jpg",
//                 "consistency": "SOLID",
//                 "name": "raspberry jam",
//                 "nameClean": "raspberry jam",
//                 "original": "3 tablespoons raspberry jam - sugar free",
//                 "originalName": "raspberry jam - sugar free",
//                 "amount": 3,
//                 "unit": "tablespoons",
//                 "meta": [
//                     "sugar free"
//                 ],
//                 "measures": {
//                     "us": {
//                         "amount": 3,
//                         "unitShort": "Tbsps",
//                         "unitLong": "Tbsps"
//                     },
//                     "metric": {
//                         "amount": 3,
//                         "unitShort": "Tbsps",
//                         "unitLong": "Tbsps"
//                     }
//                 }
//             }
//         ],
//         "id": 657907,
//         "title": "Raspberry Thumbprint Wholewheat Scones With Macadamia Nuts",
//         "readyInMinutes": 45,
//         "servings": 20,
//         "sourceUrl": "https://www.foodista.com/recipe/J2745NV4/raspberry-thumbprint-wholewheat-scones-with-macadamia-nuts",
//         "image": "https://img.spoonacular.com/recipes/657907-556x370.jpg",
//         "imageType": "jpg",
//         "summary": "If you want to add more <b>European</b> recipes to your recipe box, Raspberry Thumbprint Wholewheat Scones With Macadamia Nuts might be a recipe you should try. For <b>32 cents per serving</b>, you get a breakfast that serves 20. One portion of this dish contains roughly <b>2g of protein</b>, <b>7g of fat</b>, and a total of <b>143 calories</b>. It is a good option if you're following a <b>lacto ovo vegetarian</b> diet. 2 people have tried and liked this recipe. If you have flour, butter, raspberry jam, and a few other ingredients on hand, you can make it. From preparation to the plate, this recipe takes roughly <b>45 minutes</b>. It is brought to you by Foodista. Taking all factors into account, this recipe <b>earns a spoonacular score of 15%</b>, which is not so amazing. <a href=\"https://spoonacular.com/recipes/raspberry-thumbprint-scones-1594521\">Raspberry Thumbprint Scones</a>, <a href=\"https://spoonacular.com/recipes/starbucks-copycat-raspberry-thumbprint-scones-572779\">Starbucks Copycat : Raspberry Thumbprint Scones</a>, and <a href=\"https://spoonacular.com/recipes/paleo-indulgences-raw-macadamia-thumbprint-cookies-473593\">Paleo Indulgences – Raw Macadamia Thumbprint Cookies</a> are very similar to this recipe.",
//         "cuisines": [
//             "English",
//             "Scottish",
//             "British",
//             "European"
//         ],
//         "dishTypes": [
//             "dessert",
//             "morning meal",
//             "brunch",
//             "breakfast"
//         ],
//         "diets": [
//             "lacto ovo vegetarian"
//         ],
//         "occasions": [],
//         "originalId": null,
//         "spoonacularScore": 11.9061279296875,
//         "spoonacularSourceUrl": "https://spoonacular.com/raspberry-thumbprint-wholewheat-scones-with-macadamia-nuts-657907"
//     },
//     {
//         "vegetarian": false,
//         "vegan": false,
//         "glutenFree": true,
//         "dairyFree": true,
//         "veryHealthy": false,
//         "cheap": false,
//         "veryPopular": false,
//         "sustainable": false,
//         "lowFodmap": false,
//         "weightWatcherSmartPoints": 8,
//         "gaps": "no",
//         "preparationMinutes": -1,
//         "cookingMinutes": -1,
//         "aggregateLikes": 3,
//         "healthScore": 23,
//         "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
//         "license": "CC BY 3.0",
//         "sourceName": "Foodista",
//         "pricePerServing": 188.8,
//         "extendedIngredients": [
//             {
//                 "id": 10225,
//                 "aisle": "Meat",
//                 "image": "pork-loin.jpg",
//                 "consistency": "SOLID",
//                 "name": "pork loin",
//                 "nameClean": "boneless pork roast",
//                 "original": "1 (2 pound) boneless pork loin",
//                 "originalName": "boneless pork loin",
//                 "amount": 2,
//                 "unit": "pound",
//                 "meta": [
//                     "boneless"
//                 ],
//                 "measures": {
//                     "us": {
//                         "amount": 2,
//                         "unitShort": "lb",
//                         "unitLong": "pounds"
//                     },
//                     "metric": {
//                         "amount": 907.185,
//                         "unitShort": "g",
//                         "unitLong": "grams"
//                     }
//                 }
//             },
//             {
//                 "id": 1012038,
//                 "aisle": "Spices and Seasonings",
//                 "image": "dried-sage.png",
//                 "consistency": "SOLID",
//                 "name": "ground sage",
//                 "nameClean": "ground sage",
//                 "original": "1 teaspoon ground sage",
//                 "originalName": "ground sage",
//                 "amount": 1,
//                 "unit": "teaspoon",
//                 "meta": [],
//                 "measures": {
//                     "us": {
//                         "amount": 1,
//                         "unitShort": "tsp",
//                         "unitLong": "teaspoon"
//                     },
//                     "metric": {
//                         "amount": 1,
//                         "unitShort": "tsp",
//                         "unitLong": "teaspoon"
//                     }
//                 }
//             },
//             {
//                 "id": 2047,
//                 "aisle": "Spices and Seasonings",
//                 "image": "salt.jpg",
//                 "consistency": "SOLID",
//                 "name": "salt",
//                 "nameClean": "table salt",
//                 "original": "1/2 teaspoon salt",
//                 "originalName": "salt",
//                 "amount": 0.5,
//                 "unit": "teaspoon",
//                 "meta": [],
//                 "measures": {
//                     "us": {
//                         "amount": 0.5,
//                         "unitShort": "tsps",
//                         "unitLong": "teaspoons"
//                     },
//                     "metric": {
//                         "amount": 0.5,
//                         "unitShort": "tsps",
//                         "unitLong": "teaspoons"
//                     }
//                 }
//             },
//             {
//                 "id": 1002030,
//                 "aisle": "Spices and Seasonings",
//                 "image": "pepper.jpg",
//                 "consistency": "SOLID",
//                 "name": "pepper",
//                 "nameClean": "black pepper",
//                 "original": "1/4 teaspoon pepper",
//                 "originalName": "pepper",
//                 "amount": 0.25,
//                 "unit": "teaspoon",
//                 "meta": [],
//                 "measures": {
//                     "us": {
//                         "amount": 0.25,
//                         "unitShort": "tsps",
//                         "unitLong": "teaspoons"
//                     },
//                     "metric": {
//                         "amount": 0.25,
//                         "unitShort": "tsps",
//                         "unitLong": "teaspoons"
//                     }
//                 }
//             },
//             {
//                 "id": 11215,
//                 "aisle": "Produce",
//                 "image": "garlic.png",
//                 "consistency": "SOLID",
//                 "name": "garlic",
//                 "nameClean": "garlic",
//                 "original": "1 clove garlic, crushed",
//                 "originalName": "garlic, crushed",
//                 "amount": 1,
//                 "unit": "clove",
//                 "meta": [
//                     "crushed"
//                 ],
//                 "measures": {
//                     "us": {
//                         "amount": 1,
//                         "unitShort": "clove",
//                         "unitLong": "clove"
//                     },
//                     "metric": {
//                         "amount": 1,
//                         "unitShort": "clove",
//                         "unitLong": "clove"
//                     }
//                 }
//             },
//             {
//                 "id": 14412,
//                 "aisle": "Beverages",
//                 "image": "water.png",
//                 "consistency": "LIQUID",
//                 "name": "water",
//                 "nameClean": "water",
//                 "original": "1/2 cup water",
//                 "originalName": "water",
//                 "amount": 0.5,
//                 "unit": "cup",
//                 "meta": [],
//                 "measures": {
//                     "us": {
//                         "amount": 0.5,
//                         "unitShort": "cups",
//                         "unitLong": "cups"
//                     },
//                     "metric": {
//                         "amount": 118.294,
//                         "unitShort": "ml",
//                         "unitLong": "milliliters"
//                     }
//                 }
//             },
//             {
//                 "id": 10099274,
//                 "aisle": null,
//                 "image": "no.jpg",
//                 "consistency": "SOLID",
//                 "name": "glaze",
//                 "nameClean": "red glaze",
//                 "original": "Glaze",
//                 "originalName": "Glaze",
//                 "amount": 6,
//                 "unit": "servings",
//                 "meta": [],
//                 "measures": {
//                     "us": {
//                         "amount": 6,
//                         "unitShort": "servings",
//                         "unitLong": "servings"
//                     },
//                     "metric": {
//                         "amount": 6,
//                         "unitShort": "servings",
//                         "unitLong": "servings"
//                     }
//                 }
//             },
//             {
//                 "id": 19334,
//                 "aisle": "Baking",
//                 "image": "light-brown-sugar.jpg",
//                 "consistency": "SOLID",
//                 "name": "brown sugar",
//                 "nameClean": "golden brown sugar",
//                 "original": "1/2 cup brown sugar",
//                 "originalName": "brown sugar",
//                 "amount": 0.5,
//                 "unit": "cup",
//                 "meta": [],
//                 "measures": {
//                     "us": {
//                         "amount": 0.5,
//                         "unitShort": "cups",
//                         "unitLong": "cups"
//                     },
//                     "metric": {
//                         "amount": 110,
//                         "unitShort": "g",
//                         "unitLong": "grams"
//                     }
//                 }
//             },
//             {
//                 "id": 19334,
//                 "aisle": "Baking",
//                 "image": "dark-brown-sugar.png",
//                 "consistency": "SOLID",
//                 "name": "brown sugar",
//                 "nameClean": "golden brown sugar",
//                 "original": "1/2 cup brown sugar",
//                 "originalName": "brown sugar",
//                 "amount": 0.5,
//                 "unit": "cup",
//                 "meta": [],
//                 "measures": {
//                     "us": {
//                         "amount": 0.5,
//                         "unitShort": "cups",
//                         "unitLong": "cups"
//                     },
//                     "metric": {
//                         "amount": 110,
//                         "unitShort": "g",
//                         "unitLong": "grams"
//                     }
//                 }
//             },
//             {
//                 "id": 20027,
//                 "aisle": "Baking",
//                 "image": "white-powder.jpg",
//                 "consistency": "SOLID",
//                 "name": "cornstarch",
//                 "nameClean": "corn starch",
//                 "original": "1 tablespoon cornstarch",
//                 "originalName": "cornstarch",
//                 "amount": 1,
//                 "unit": "tablespoon",
//                 "meta": [],
//                 "measures": {
//                     "us": {
//                         "amount": 1,
//                         "unitShort": "Tbsp",
//                         "unitLong": "Tbsp"
//                     },
//                     "metric": {
//                         "amount": 1,
//                         "unitShort": "Tbsp",
//                         "unitLong": "Tbsp"
//                     }
//                 }
//             },
//             {
//                 "id": 2069,
//                 "aisle": "Oil, Vinegar, Salad Dressing",
//                 "image": "balsamic-vinegar.jpg",
//                 "consistency": "LIQUID",
//                 "name": "balsamic vinegar",
//                 "nameClean": "balsamic vinegar",
//                 "original": "1/4 cup balsamic vinegar",
//                 "originalName": "balsamic vinegar",
//                 "amount": 0.25,
//                 "unit": "cup",
//                 "meta": [],
//                 "measures": {
//                     "us": {
//                         "amount": 0.25,
//                         "unitShort": "cups",
//                         "unitLong": "cups"
//                     },
//                     "metric": {
//                         "amount": 63.75,
//                         "unitShort": "ml",
//                         "unitLong": "milliliters"
//                     }
//                 }
//             },
//             {
//                 "id": 16124,
//                 "aisle": "Condiments",
//                 "image": "soy-sauce.jpg",
//                 "consistency": "LIQUID",
//                 "name": "soy sauce",
//                 "nameClean": "soy sauce",
//                 "original": "2 tablespoons soy sauce",
//                 "originalName": "soy sauce",
//                 "amount": 2,
//                 "unit": "tablespoons",
//                 "meta": [],
//                 "measures": {
//                     "us": {
//                         "amount": 2,
//                         "unitShort": "Tbsps",
//                         "unitLong": "Tbsps"
//                     },
//                     "metric": {
//                         "amount": 2,
//                         "unitShort": "Tbsps",
//                         "unitLong": "Tbsps"
//                     }
//                 }
//             }
//         ],
//         "id": 636301,
//         "title": "Brown Sugar and Balsamic Glazed Pork Loin",
//         "readyInMinutes": 45,
//         "servings": 6,
//         "sourceUrl": "https://www.foodista.com/recipe/R3TYDR87/brown-sugar-and-balsamic-glazed-pork-loin",
//         "image": "https://img.spoonacular.com/recipes/636301-556x370.jpg",
//         "imageType": "jpg",
//         "summary": "The recipe Brown Sugar and Balsamic Glazed Pork Loin can be made <b>in roughly 45 minutes</b>. This recipe serves 6 and costs $1.89 per serving. Watching your figure? This gluten free and dairy free recipe has <b>288 calories</b>, <b>35g of protein</b>, and <b>6g of fat</b> per serving. This recipe from Foodista requires pork loin, balsamic vinegar, cornstarch, and soy sauce. Not a lot of people made this recipe, and 3 would say it hit the spot. It works well as a main course. All things considered, we decided this recipe <b>deserves a spoonacular score of 67%</b>. This score is solid. If you like this recipe, take a look at these similar recipes: <a href=\"https://spoonacular.com/recipes/brown-sugar-and-balsamic-glazed-pork-loin-1614065\">Brown Sugar and Balsamic Glazed Pork Loin</a>, <a href=\"https://spoonacular.com/recipes/brown-sugar-balsamic-glazed-pork-loin-521217\">Brown Sugar & Balsamic Glazed Pork Loin</a>, and <a href=\"https://spoonacular.com/recipes/brown-sugar-balsamic-glazed-pork-loin-1207177\">Brown Sugar & Balsamic Glazed Pork Loin</a>.",
//         "cuisines": [],
//         "dishTypes": [
//             "lunch",
//             "main course",
//             "main dish",
//             "dinner"
//         ],
//         "diets": [
//             "gluten free",
//             "dairy free"
//         ],
//         "occasions": [],
//         "originalId": null,
//         "spoonacularScore": 72.95185852050781,
//         "spoonacularSourceUrl": "https://spoonacular.com/brown-sugar-and-balsamic-glazed-pork-loin-636301"
//     },
//     {
//         "vegetarian": true,
//         "vegan": false,
//         "glutenFree": true,
//         "dairyFree": false,
//         "veryHealthy": false,
//         "cheap": false,
//         "veryPopular": true,
//         "sustainable": false,
//         "lowFodmap": false,
//         "weightWatcherSmartPoints": 25,
//         "gaps": "no",
//         "preparationMinutes": -1,
//         "cookingMinutes": -1,
//         "aggregateLikes": 9473,
//         "healthScore": 3,
//         "creditsText": "Jen West",
//         "sourceName": "Pink When",
//         "pricePerServing": 157.25,
//         "extendedIngredients": [
//             {
//                 "id": 1145,
//                 "aisle": "Milk, Eggs, Other Dairy",
//                 "image": "butter-sliced.jpg",
//                 "consistency": "SOLID",
//                 "name": "land o' lakes butter",
//                 "nameClean": "unsalted butter",
//                 "original": "1/4 cup Land O' Lakes unsalted butter (softened)",
//                 "originalName": "Land O' Lakes unsalted butter (softened)",
//                 "amount": 0.25,
//                 "unit": "cup",
//                 "meta": [
//                     "unsalted",
//                     "softened",
//                     "()"
//                 ],
//                 "measures": {
//                     "us": {
//                         "amount": 0.25,
//                         "unitShort": "cups",
//                         "unitLong": "cups"
//                     },
//                     "metric": {
//                         "amount": 56.75,
//                         "unitShort": "g",
//                         "unitLong": "grams"
//                     }
//                 }
//             },
//             {
//                 "id": 1123,
//                 "aisle": "Milk, Eggs, Other Dairy",
//                 "image": "egg.png",
//                 "consistency": "SOLID",
//                 "name": "eggs",
//                 "nameClean": "egg",
//                 "original": "2 eggs",
//                 "originalName": "eggs",
//                 "amount": 2,
//                 "unit": "",
//                 "meta": [],
//                 "measures": {
//                     "us": {
//                         "amount": 2,
//                         "unitShort": "",
//                         "unitLong": ""
//                     },
//                     "metric": {
//                         "amount": 2,
//                         "unitShort": "",
//                         "unitLong": ""
//                     }
//                 }
//             },
//             {
//                 "id": 1012010,
//                 "aisle": "Spices and Seasonings",
//                 "image": "cinnamon.jpg",
//                 "consistency": "SOLID",
//                 "name": "ground cinnamon",
//                 "nameClean": "ground cinnamon",
//                 "original": "1/2 tsp ground cinnamon",
//                 "originalName": "ground cinnamon",
//                 "amount": 0.5,
//                 "unit": "tsp",
//                 "meta": [],
//                 "measures": {
//                     "us": {
//                         "amount": 0.5,
//                         "unitShort": "tsps",
//                         "unitLong": "teaspoons"
//                     },
//                     "metric": {
//                         "amount": 0.5,
//                         "unitShort": "tsps",
//                         "unitLong": "teaspoons"
//                     }
//                 }
//             },
//             {
//                 "id": 1053,
//                 "aisle": "Milk, Eggs, Other Dairy",
//                 "image": "fluid-cream.jpg",
//                 "consistency": "LIQUID",
//                 "name": "heavy cream",
//                 "nameClean": "cream",
//                 "original": "2 tbsp heavy cream",
//                 "originalName": "heavy cream",
//                 "amount": 2,
//                 "unit": "tbsp",
//                 "meta": [],
//                 "measures": {
//                     "us": {
//                         "amount": 2,
//                         "unitShort": "Tbsps",
//                         "unitLong": "Tbsps"
//                     },
//                     "metric": {
//                         "amount": 2,
//                         "unitShort": "Tbsps",
//                         "unitLong": "Tbsps"
//                     }
//                 }
//             },
//             {
//                 "id": 12142,
//                 "aisle": "Nuts",
//                 "image": "pecans.jpg",
//                 "consistency": "SOLID",
//                 "name": "sugared pecans",
//                 "nameClean": "pecans",
//                 "original": "1 cup sugared pecans (make these the day before)",
//                 "originalName": "sugared pecans (make these the day before)",
//                 "amount": 1,
//                 "unit": "cup",
//                 "meta": [
//                     "(make these the day before)"
//                 ],
//                 "measures": {
//                     "us": {
//                         "amount": 1,
//                         "unitShort": "cup",
//                         "unitLong": "cup"
//                     },
//                     "metric": {
//                         "amount": 99,
//                         "unitShort": "g",
//                         "unitLong": "grams"
//                     }
//                 }
//             },
//             {
//                 "id": 2047,
//                 "aisle": "Spices and Seasonings",
//                 "image": "salt.jpg",
//                 "consistency": "SOLID",
//                 "name": "salt",
//                 "nameClean": "table salt",
//                 "original": "1/4 tsp salt",
//                 "originalName": "salt",
//                 "amount": 0.25,
//                 "unit": "tsp",
//                 "meta": [],
//                 "measures": {
//                     "us": {
//                         "amount": 0.25,
//                         "unitShort": "tsps",
//                         "unitLong": "teaspoons"
//                     },
//                     "metric": {
//                         "amount": 0.25,
//                         "unitShort": "tsps",
//                         "unitLong": "teaspoons"
//                     }
//                 }
//             },
//             {
//                 "id": 11507,
//                 "aisle": "Produce",
//                 "image": "sweet-potato.png",
//                 "consistency": "SOLID",
//                 "name": "sweet potatoes -or- 5 and sweet potatoes",
//                 "nameClean": "sweet potato",
//                 "original": "2 large cans of Sweet Potatoes (Yams) -or- 5 large cooked and peeled sweet potatoes",
//                 "originalName": "Sweet Potatoes (Yams) -or- 5 large cooked and peeled sweet potatoes",
//                 "amount": 2,
//                 "unit": "large cans",
//                 "meta": [
//                     "cooked",
//                     "peeled",
//                     "(Yams)"
//                 ],
//                 "measures": {
//                     "us": {
//                         "amount": 2,
//                         "unitShort": "large cans",
//                         "unitLong": "large cans"
//                     },
//                     "metric": {
//                         "amount": 2,
//                         "unitShort": "large cans",
//                         "unitLong": "large cans"
//                     }
//                 }
//             },
//             {
//                 "id": 2050,
//                 "aisle": "Baking",
//                 "image": "vanilla-extract.jpg",
//                 "consistency": "LIQUID",
//                 "name": "vanilla extract",
//                 "nameClean": "vanilla extract",
//                 "original": "1 tsp vanilla extract",
//                 "originalName": "vanilla extract",
//                 "amount": 1,
//                 "unit": "tsp",
//                 "meta": [],
//                 "measures": {
//                     "us": {
//                         "amount": 1,
//                         "unitShort": "tsp",
//                         "unitLong": "teaspoon"
//                     },
//                     "metric": {
//                         "amount": 1,
//                         "unitShort": "tsp",
//                         "unitLong": "teaspoon"
//                     }
//                 }
//             },
//             {
//                 "id": 10719335,
//                 "aisle": "Baking",
//                 "image": "sugar-in-bowl.png",
//                 "consistency": "SOLID",
//                 "name": "sugar",
//                 "nameClean": "granulated sugar",
//                 "original": "1/2 cup white sugar",
//                 "originalName": "white sugar",
//                 "amount": 0.5,
//                 "unit": "cup",
//                 "meta": [
//                     "white"
//                 ],
//                 "measures": {
//                     "us": {
//                         "amount": 0.5,
//                         "unitShort": "cups",
//                         "unitLong": "cups"
//                     },
//                     "metric": {
//                         "amount": 100,
//                         "unitShort": "g",
//                         "unitLong": "grams"
//                     }
//                 }
//             }
//         ],
//         "id": 715380,
//         "title": "Sweet Potato Casserole Gourmet & Holiday Baking",
//         "readyInMinutes": 45,
//         "servings": 3,
//         "sourceUrl": "http://www.pinkwhen.com/sweet-potato-casserole-gourmet-holiday-baking/",
//         "image": "https://img.spoonacular.com/recipes/715380-556x370.jpg",
//         "imageType": "jpg",
//         "summary": "Sweet Potato Casserole Gourmet & Holiday Baking is a side dish that serves 3. For <b>$1.57 per serving</b>, this recipe <b>covers 12%</b> of your daily requirements of vitamins and minerals. One serving contains <b>574 calories</b>, <b>7g of protein</b>, and <b>46g of fat</b>. This recipe from Pink When requires vanillan extract, salt, sugared pecans, and heavy cream. 9473 people found this recipe to be flavorful and satisfying. It is a good option if you're following a <b>gluten free and lacto ovo vegetarian</b> diet. Plenty of people really liked this American dish. From preparation to the plate, this recipe takes approximately <b>45 minutes</b>. It will be a hit at your <b>Thanksgiving</b> event. With a spoonacular <b>score of 47%</b>, this dish is good. Similar recipes include <a href=\"https://spoonacular.com/recipes/gourmet-sweet-potato-classic-463525\">Gourmet Sweet Potato Classic</a>, <a href=\"https://spoonacular.com/recipes/bread-baking-sweet-potato-buns-121566\">Bread Baking: Sweet Potato Buns</a>, and <a href=\"https://spoonacular.com/recipes/twice-baked-sweet-potato-potato-skins-with-pecan-streusel-aka-individual-sweet-potato-casserole-247725\">Twice Baked Sweet Potato Potato Skins with Pecan Streusel (akan Individual Sweet Potato Casserole)</a>.",
//         "cuisines": [
//             "American"
//         ],
//         "dishTypes": [
//             "side dish"
//         ],
//         "diets": [
//             "gluten free",
//             "lacto ovo vegetarian"
//         ],
//         "occasions": [
//             "fall",
//             "thanksgiving",
//             "winter"
//         ],
//         "originalId": null,
//         "spoonacularScore": 9.60523796081543,
//         "spoonacularSourceUrl": "https://spoonacular.com/sweet-potato-casserole-gourmet-holiday-baking-715380"
//     },
//     {
//         "vegetarian": false,
//         "vegan": false,
//         "glutenFree": false,
//         "dairyFree": false,
//         "veryHealthy": false,
//         "cheap": false,
//         "veryPopular": false,
//         "sustainable": false,
//         "lowFodmap": false,
//         "weightWatcherSmartPoints": 12,
//         "gaps": "no",
//         "preparationMinutes": -1,
//         "cookingMinutes": -1,
//         "aggregateLikes": 22,
//         "healthScore": 2,
//         "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
//         "license": "CC BY 3.0",
//         "sourceName": "Foodista",
//         "pricePerServing": 137.15,
//         "extendedIngredients": [
//             {
//                 "id": 1017,
//                 "aisle": "Cheese",
//                 "image": "cream-cheese.jpg",
//                 "consistency": "SOLID",
//                 "name": "cream cheese",
//                 "nameClean": "cream cheese",
//                 "original": "8 ounces pkg cream cheese, softened",
//                 "originalName": "pkg cream cheese, softened",
//                 "amount": 8,
//                 "unit": "ounces",
//                 "meta": [
//                     "softened"
//                 ],
//                 "measures": {
//                     "us": {
//                         "amount": 8,
//                         "unitShort": "oz",
//                         "unitLong": "ounces"
//                     },
//                     "metric": {
//                         "amount": 226.796,
//                         "unitShort": "g",
//                         "unitLong": "grams"
//                     }
//                 }
//             },
//             {
//                 "id": 1077,
//                 "aisle": "Milk, Eggs, Other Dairy",
//                 "image": "milk.png",
//                 "consistency": "LIQUID",
//                 "name": "milk",
//                 "nameClean": "milk",
//                 "original": "1 tablespoon milk",
//                 "originalName": "milk",
//                 "amount": 1,
//                 "unit": "tablespoon",
//                 "meta": [],
//                 "measures": {
//                     "us": {
//                         "amount": 1,
//                         "unitShort": "Tbsp",
//                         "unitLong": "Tbsp"
//                     },
//                     "metric": {
//                         "amount": 1,
//                         "unitShort": "Tbsp",
//                         "unitLong": "Tbsp"
//                     }
//                 }
//             },
//             {
//                 "id": 15141,
//                 "aisle": "Canned and Jarred",
//                 "image": "lump-crabmeat.png",
//                 "consistency": "SOLID",
//                 "name": "crabmeat",
//                 "nameClean": "cooked crabmeat",
//                 "original": "1 can crabmeat, flaked",
//                 "originalName": "crabmeat, flaked",
//                 "amount": 1,
//                 "unit": "can",
//                 "meta": [
//                     "flaked"
//                 ],
//                 "measures": {
//                     "us": {
//                         "amount": 1,
//                         "unitShort": "can",
//                         "unitLong": "can"
//                     },
//                     "metric": {
//                         "amount": 1,
//                         "unitShort": "can",
//                         "unitLong": "can"
//                     }
//                 }
//             },
//             {
//                 "id": 11282,
//                 "aisle": "Produce",
//                 "image": "brown-onion.png",
//                 "consistency": "SOLID",
//                 "name": "onion",
//                 "nameClean": "onion",
//                 "original": "2 tablespoons finely chopped onion",
//                 "originalName": "finely chopped onion",
//                 "amount": 2,
//                 "unit": "tablespoons",
//                 "meta": [
//                     "finely chopped"
//                 ],
//                 "measures": {
//                     "us": {
//                         "amount": 2,
//                         "unitShort": "Tbsps",
//                         "unitLong": "Tbsps"
//                     },
//                     "metric": {
//                         "amount": 2,
//                         "unitShort": "Tbsps",
//                         "unitLong": "Tbsps"
//                     }
//                 }
//             },
//             {
//                 "id": 1002055,
//                 "aisle": "Produce",
//                 "image": "horseradish.jpg",
//                 "consistency": "LIQUID",
//                 "name": "horseradish",
//                 "nameClean": "horseradish",
//                 "original": "1/2 teaspoon horseradish",
//                 "originalName": "horseradish",
//                 "amount": 0.5,
//                 "unit": "teaspoon",
//                 "meta": [],
//                 "measures": {
//                     "us": {
//                         "amount": 0.5,
//                         "unitShort": "tsps",
//                         "unitLong": "teaspoons"
//                     },
//                     "metric": {
//                         "amount": 0.5,
//                         "unitShort": "tsps",
//                         "unitLong": "teaspoons"
//                     }
//                 }
//             },
//             {
//                 "id": 18079,
//                 "aisle": "Pasta and Rice",
//                 "image": "breadcrumbs.jpg",
//                 "consistency": "SOLID",
//                 "name": "breadcrumbs",
//                 "nameClean": "breadcrumbs",
//                 "original": "1/8 cup breadcrumbs",
//                 "originalName": "breadcrumbs",
//                 "amount": 0.125,
//                 "unit": "cup",
//                 "meta": [],
//                 "measures": {
//                     "us": {
//                         "amount": 0.125,
//                         "unitShort": "cups",
//                         "unitLong": "cups"
//                     },
//                     "metric": {
//                         "amount": 13.5,
//                         "unitShort": "ml",
//                         "unitLong": "milliliters"
//                     }
//                 }
//             },
//             {
//                 "id": 1001,
//                 "aisle": "Milk, Eggs, Other Dairy",
//                 "image": "butter-sliced.jpg",
//                 "consistency": "SOLID",
//                 "name": "butter",
//                 "nameClean": "butter",
//                 "original": "2 tablespoons butter, cut into small bits",
//                 "originalName": "butter, cut into small bits",
//                 "amount": 2,
//                 "unit": "tablespoons",
//                 "meta": [
//                     "cut into small bits"
//                 ],
//                 "measures": {
//                     "us": {
//                         "amount": 2,
//                         "unitShort": "Tbsps",
//                         "unitLong": "Tbsps"
//                     },
//                     "metric": {
//                         "amount": 2,
//                         "unitShort": "Tbsps",
//                         "unitLong": "Tbsps"
//                     }
//                 }
//             },
//             {
//                 "id": 1002030,
//                 "aisle": "Spices and Seasonings",
//                 "image": "pepper.jpg",
//                 "consistency": "SOLID",
//                 "name": "salt",
//                 "nameClean": "black pepper",
//                 "original": "salt, pepper",
//                 "originalName": "salt, pepper",
//                 "amount": 4,
//                 "unit": "servings",
//                 "meta": [],
//                 "measures": {
//                     "us": {
//                         "amount": 4,
//                         "unitShort": "servings",
//                         "unitLong": "servings"
//                     },
//                     "metric": {
//                         "amount": 4,
//                         "unitShort": "servings",
//                         "unitLong": "servings"
//                     }
//                 }
//             }
//         ],
//         "id": 631751,
//         "title": "Hot Crab Dip",
//         "readyInMinutes": 45,
//         "servings": 4,
//         "sourceUrl": "https://www.foodista.com/recipe/5FF8FJ23/holiday-hot-crabmeat-dip",
//         "image": "https://img.spoonacular.com/recipes/631751-556x370.jpg",
//         "imageType": "jpg",
//         "summary": "Hot Crab Dip takes about <b>45 minutes</b> from beginning to end. For <b>$1.37 per serving</b>, you get a hor d'oeuvre that serves 4. One serving contains <b>293 calories</b>, <b>10g of protein</b>, and <b>26g of fat</b>. A few people made this recipe, and 22 would say it hit the spot. Head to the store and pick up horseradish, breadcrumbs, onion, and a few other things to make it today. <b>The Super Bowl</b> will be even more special with this recipe. It is a good option if you're following a <b>pescatarian</b> diet. It is brought to you by Foodista. Taking all factors into account, this recipe <b>earns a spoonacular score of 29%</b>, which is rather bad. If you like this recipe, you might also like recipes such as <a href=\"https://spoonacular.com/recipes/hot-crab-dip-821355\">Hot Crab Dip</a>, <a href=\"https://spoonacular.com/recipes/hot-crab-dip-686493\">Hot Crab Dip</a>, and <a href=\"https://spoonacular.com/recipes/hot-crab-dip-120097\">Hot Crab Dip</a>.",
//         "cuisines": [],
//         "dishTypes": [
//             "antipasti",
//             "condiment",
//             "starter",
//             "snack",
//             "appetizer",
//             "dip",
//             "antipasto",
//             "hor d'oeuvre",
//             "spread"
//         ],
//         "diets": [
//             "pescatarian"
//         ],
//         "occasions": [
//             "super bowl"
//         ],
//         "originalId": null,
//         "spoonacularScore": 37.11220169067383,
//         "spoonacularSourceUrl": "https://spoonacular.com/hot-crab-dip-631751"
//     },
//     {
//         "vegetarian": true,
//         "vegan": false,
//         "glutenFree": false,
//         "dairyFree": false,
//         "veryHealthy": false,
//         "cheap": false,
//         "veryPopular": false,
//         "sustainable": false,
//         "lowFodmap": false,
//         "weightWatcherSmartPoints": 7,
//         "gaps": "no",
//         "preparationMinutes": -1,
//         "cookingMinutes": -1,
//         "aggregateLikes": 22,
//         "healthScore": 0,
//         "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
//         "license": "CC BY 3.0",
//         "sourceName": "Foodista",
//         "pricePerServing": 46.37,
//         "extendedIngredients": [
//             {
//                 "id": 10114037,
//                 "aisle": "Alcoholic Beverages",
//                 "image": "brandy.png",
//                 "consistency": "LIQUID",
//                 "name": "brandy",
//                 "nameClean": "brandy",
//                 "original": "1 1/2 tablespoons brandy",
//                 "originalName": "brandy",
//                 "amount": 1.5,
//                 "unit": "tablespoons",
//                 "meta": [],
//                 "measures": {
//                     "us": {
//                         "amount": 1.5,
//                         "unitShort": "Tbsps",
//                         "unitLong": "Tbsps"
//                     },
//                     "metric": {
//                         "amount": 1.5,
//                         "unitShort": "Tbsps",
//                         "unitLong": "Tbsps"
//                     }
//                 }
//             },
//             {
//                 "id": 1001,
//                 "aisle": "Milk, Eggs, Other Dairy",
//                 "image": "butter-sliced.jpg",
//                 "consistency": "SOLID",
//                 "name": "butter",
//                 "nameClean": "butter",
//                 "original": "1/4 cup butter",
//                 "originalName": "butter",
//                 "amount": 0.25,
//                 "unit": "cup",
//                 "meta": [],
//                 "measures": {
//                     "us": {
//                         "amount": 0.25,
//                         "unitShort": "cups",
//                         "unitLong": "cups"
//                     },
//                     "metric": {
//                         "amount": 56.75,
//                         "unitShort": "g",
//                         "unitLong": "grams"
//                     }
//                 }
//             },
//             {
//                 "id": 1095,
//                 "aisle": "Baking",
//                 "image": "evaporated-milk.png",
//                 "consistency": "SOLID",
//                 "name": "condensed milk",
//                 "nameClean": "sweetened condensed milk",
//                 "original": "1/2 14 ounce can condensed milk",
//                 "originalName": "condensed milk",
//                 "amount": 7,
//                 "unit": "ounce",
//                 "meta": [
//                     "canned"
//                 ],
//                 "measures": {
//                     "us": {
//                         "amount": 7,
//                         "unitShort": "oz",
//                         "unitLong": "ounces"
//                     },
//                     "metric": {
//                         "amount": 198.447,
//                         "unitShort": "g",
//                         "unitLong": "grams"
//                     }
//                 }
//             },
//             {
//                 "id": 10018166,
//                 "aisle": "Sweet Snacks",
//                 "image": "oreos.png",
//                 "consistency": "SOLID",
//                 "name": "oreo crumbs",
//                 "nameClean": "oreo cookies",
//                 "original": "1 1/4 cups Oreo crumbs (about 14 cookies)",
//                 "originalName": "Oreo crumbs (about 14 cookies)",
//                 "amount": 1.25,
//                 "unit": "cups",
//                 "meta": [
//                     "( 14 cookies)"
//                 ],
//                 "measures": {
//                     "us": {
//                         "amount": 1.25,
//                         "unitShort": "cups",
//                         "unitLong": "cups"
//                     },
//                     "metric": {
//                         "amount": 200,
//                         "unitShort": "g",
//                         "unitLong": "grams"
//                     }
//                 }
//             },
//             {
//                 "id": 2050,
//                 "aisle": "Baking",
//                 "image": "vanilla-extract.jpg",
//                 "consistency": "LIQUID",
//                 "name": "vanilla extract",
//                 "nameClean": "vanilla extract",
//                 "original": "1/2 teaspoon vanilla extract",
//                 "originalName": "vanilla extract",
//                 "amount": 0.5,
//                 "unit": "teaspoon",
//                 "meta": [],
//                 "measures": {
//                     "us": {
//                         "amount": 0.5,
//                         "unitShort": "tsps",
//                         "unitLong": "teaspoons"
//                     },
//                     "metric": {
//                         "amount": 0.5,
//                         "unitShort": "tsps",
//                         "unitLong": "teaspoons"
//                     }
//                 }
//             },
//             {
//                 "id": 10112155,
//                 "aisle": "Baking",
//                 "image": "walnuts.jpg",
//                 "consistency": "SOLID",
//                 "name": "walnuts",
//                 "nameClean": "walnut pieces",
//                 "original": "1 c. chopped walnuts",
//                 "originalName": "chopped walnuts",
//                 "amount": 1,
//                 "unit": "c",
//                 "meta": [
//                     "chopped"
//                 ],
//                 "measures": {
//                     "us": {
//                         "amount": 1,
//                         "unitShort": "cup",
//                         "unitLong": "cup"
//                     },
//                     "metric": {
//                         "amount": 117,
//                         "unitShort": "g",
//                         "unitLong": "grams"
//                     }
//                 }
//             }
//         ],
//         "id": 653192,
//         "title": "No-Bake Fudge Brandy Brownies",
//         "readyInMinutes": 45,
//         "servings": 16,
//         "sourceUrl": "http://www.foodista.com/recipe/LXF37J76/no-bake-fudge-brandy-brownies",
//         "image": "https://img.spoonacular.com/recipes/653192-556x370.jpg",
//         "imageType": "jpg",
//         "summary": "No-Bake Fudge Brandy Brownies takes about <b>45 minutes</b> from beginning to end. This lacto ovo vegetarian recipe serves 16 and costs <b>46 cents per serving</b>. One portion of this dish contains approximately <b>3g of protein</b>, <b>11g of fat</b>, and a total of <b>175 calories</b>. If you have vanillan extract, butter, condensed milk, and a few other ingredients on hand, you can make it. This recipe is typical of American cuisine. 22 people were impressed by this recipe. It is brought to you by Foodista. All things considered, we decided this recipe <b>deserves a spoonacular score of 19%</b>. This score is rather bad. Similar recipes include <a href=\"https://spoonacular.com/recipes/no-bake-fudge-brownies-113350\">No-Bake Fudge Brownies</a>, <a href=\"https://spoonacular.com/recipes/brandy-alexander-fudge-463389\">Brandy Alexander Fudge</a>, and <a href=\"https://spoonacular.com/recipes/brandy-alexander-brownies-635895\">Brandy Alexander Brownies</a>.",
//         "cuisines": [
//             "American"
//         ],
//         "dishTypes": [],
//         "diets": [
//             "lacto ovo vegetarian"
//         ],
//         "occasions": [],
//         "originalId": null,
//         "spoonacularScore": 12.618799209594727,
//         "spoonacularSourceUrl": "https://spoonacular.com/no-bake-fudge-brandy-brownies-653192"
//     }
// ]
