import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { BiSolidDish } from "react-icons/bi";
import { API_KEY, Ingredients_IMG_CDN } from '../utils/constants';
import caloriesLogo from "../Calories Logo.png";
import { IoMdAlarm } from "react-icons/io";
import { AiFillDollarCircle } from "react-icons/ai";
import vegLogo from "../Veg Logo.png";
import nonVegLogo from "../Non-Veg Logo.png";
import veganLogo from "../Vegan Logo.png";
import glutenFreeLogo from "../Gluten Free logo.png";
import dairyFreeLogo from "../Dairy Free Logo.png";
import SimilarRecipes from './SimilarRecipes';

const RecipePage = () => {

    const recipeId = useParams().id;
    const [recipeInfo,setRecipeInfo] = useState(null);
    const recipeInfo1 ={
        "vegetarian": false,
        "vegan": false,
        "glutenFree": true,
        "dairyFree": false,
        "veryHealthy": false,
        "cheap": false,
        "veryPopular": false,
        "sustainable": false,
        "lowFodmap": false,
        "weightWatcherSmartPoints": 2,
        "gaps": "no",
        "preparationMinutes": -1,
        "cookingMinutes": -1,
        "aggregateLikes": 6,
        "healthScore": 6,
        "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
        "license": "CC BY 3.0",
        "sourceName": "Foodista",
        "pricePerServing": 115.13,
        "extendedIngredients": [
            {
                "id": 5062,
                "aisle": "Meat",
                "image": "chicken-breasts.png",
                "consistency": "SOLID",
                "name": "chicken breast",
                "nameClean": "chicken breast",
                "original": "500 grams boneless chicken breast",
                "originalName": "boneless chicken breast",
                "amount": 500.0,
                "unit": "grams",
                "meta": [
                    "boneless"
                ],
                "measures": {
                    "us": {
                        "amount": 1.102,
                        "unitShort": "lb",
                        "unitLong": "pounds"
                    },
                    "metric": {
                        "amount": 500.0,
                        "unitShort": "g",
                        "unitLong": "grams"
                    }
                }
            },
            {
                "id": 2009,
                "aisle": "Spices and Seasonings",
                "image": "chili-powder.jpg",
                "consistency": "SOLID",
                "name": "chili powder",
                "nameClean": "chili powder",
                "original": "2-3 tsp chili powder",
                "originalName": "chili powder",
                "amount": 2.0,
                "unit": "tsp",
                "meta": [],
                "measures": {
                    "us": {
                        "amount": 2.0,
                        "unitShort": "tsps",
                        "unitLong": "teaspoons"
                    },
                    "metric": {
                        "amount": 2.0,
                        "unitShort": "tsps",
                        "unitLong": "teaspoons"
                    }
                }
            },
            {
                "id": 10111215,
                "aisle": "Ethnic Foods",
                "image": "garlic-paste.png",
                "consistency": "SOLID",
                "name": "ginger and garlic paste",
                "nameClean": "garlic paste",
                "original": "4 tbsp Ginger and Garlic paste",
                "originalName": "Ginger and Garlic paste",
                "amount": 4.0,
                "unit": "tbsp",
                "meta": [],
                "measures": {
                    "us": {
                        "amount": 4.0,
                        "unitShort": "Tbsps",
                        "unitLong": "Tbsps"
                    },
                    "metric": {
                        "amount": 4.0,
                        "unitShort": "Tbsps",
                        "unitLong": "Tbsps"
                    }
                }
            },
            {
                "id": 2047,
                "aisle": "Spices and Seasonings",
                "image": "salt.jpg",
                "consistency": "SOLID",
                "name": "salt",
                "nameClean": "table salt",
                "original": "½ tbsp. salt",
                "originalName": "salt",
                "amount": 0.5,
                "unit": "tbsp",
                "meta": [],
                "measures": {
                    "us": {
                        "amount": 0.5,
                        "unitShort": "Tbsps",
                        "unitLong": "Tbsps"
                    },
                    "metric": {
                        "amount": 0.5,
                        "unitShort": "Tbsps",
                        "unitLong": "Tbsps"
                    }
                }
            },
            {
                "id": 2043,
                "aisle": "Spices and Seasonings",
                "image": "turmeric.jpg",
                "consistency": "SOLID",
                "name": "turmeric powder",
                "nameClean": "turmeric",
                "original": "1/4 tsp Turmeric powder",
                "originalName": "Turmeric powder",
                "amount": 0.25,
                "unit": "tsp",
                "meta": [],
                "measures": {
                    "us": {
                        "amount": 0.25,
                        "unitShort": "tsps",
                        "unitLong": "teaspoons"
                    },
                    "metric": {
                        "amount": 0.25,
                        "unitShort": "tsps",
                        "unitLong": "teaspoons"
                    }
                }
            },
            {
                "id": 1116,
                "aisle": "Milk, Eggs, Other Dairy",
                "image": "plain-yogurt.jpg",
                "consistency": "SOLID",
                "name": "yogurt",
                "nameClean": "yogurt",
                "original": "4 tbsp yogurt",
                "originalName": "yogurt",
                "amount": 4.0,
                "unit": "tbsp",
                "meta": [],
                "measures": {
                    "us": {
                        "amount": 4.0,
                        "unitShort": "Tbsps",
                        "unitLong": "Tbsps"
                    },
                    "metric": {
                        "amount": 4.0,
                        "unitShort": "Tbsps",
                        "unitLong": "Tbsps"
                    }
                }
            }
        ],
        "id": 637876,
        "title": "Chicken 65",
        "readyInMinutes": 45,
        "servings": 6,
        "sourceUrl": "http://www.foodista.com/recipe/G4XPLKBW/chicken-65-chicken-marinaded-in-traditional-indian-spices-and-deep-fried",
        "image": "https://spoonacular.com/recipeImages/637876-556x370.jpg",
        "imageType": "jpg",
        "nutrition": {
            "nutrients": [
                {
                    "name": "Calories",
                    "amount": 120.9,
                    "unit": "kcal",
                    "percentOfDailyNeeds": 6.04
                },
                {
                    "name": "Fat",
                    "amount": 2.78,
                    "unit": "g",
                    "percentOfDailyNeeds": 4.28
                },
                {
                    "name": "Saturated Fat",
                    "amount": 0.79,
                    "unit": "g",
                    "percentOfDailyNeeds": 4.91
                },
                {
                    "name": "Carbohydrates",
                    "amount": 4.44,
                    "unit": "g",
                    "percentOfDailyNeeds": 1.48
                },
                {
                    "name": "Net Carbohydrates",
                    "amount": 3.9,
                    "unit": "g",
                    "percentOfDailyNeeds": 1.42
                },
                {
                    "name": "Sugar",
                    "amount": 0.79,
                    "unit": "g",
                    "percentOfDailyNeeds": 0.88
                },
                {
                    "name": "Cholesterol",
                    "amount": 55.07,
                    "unit": "mg",
                    "percentOfDailyNeeds": 18.36
                },
                {
                    "name": "Sodium",
                    "amount": 700.66,
                    "unit": "mg",
                    "percentOfDailyNeeds": 30.46
                },
                {
                    "name": "Protein",
                    "amount": 18.92,
                    "unit": "g",
                    "percentOfDailyNeeds": 37.84
                },
                {
                    "name": "Vitamin B3",
                    "amount": 8.88,
                    "unit": "mg",
                    "percentOfDailyNeeds": 44.4
                },
                {
                    "name": "Selenium",
                    "amount": 28.57,
                    "unit": "µg",
                    "percentOfDailyNeeds": 40.81
                },
                {
                    "name": "Vitamin B6",
                    "amount": 0.77,
                    "unit": "mg",
                    "percentOfDailyNeeds": 38.65
                },
                {
                    "name": "Phosphorus",
                    "amount": 205.91,
                    "unit": "mg",
                    "percentOfDailyNeeds": 20.59
                },
                {
                    "name": "Vitamin B5",
                    "amount": 1.31,
                    "unit": "mg",
                    "percentOfDailyNeeds": 13.07
                },
                {
                    "name": "Potassium",
                    "amount": 389.08,
                    "unit": "mg",
                    "percentOfDailyNeeds": 11.12
                },
                {
                    "name": "Manganese",
                    "amount": 0.2,
                    "unit": "mg",
                    "percentOfDailyNeeds": 10.21
                },
                {
                    "name": "Vitamin B2",
                    "amount": 0.12,
                    "unit": "mg",
                    "percentOfDailyNeeds": 7.17
                },
                {
                    "name": "Magnesium",
                    "amount": 27.3,
                    "unit": "mg",
                    "percentOfDailyNeeds": 6.82
                },
                {
                    "name": "Vitamin A",
                    "amount": 305.95,
                    "unit": "IU",
                    "percentOfDailyNeeds": 6.12
                },
                {
                    "name": "Vitamin B1",
                    "amount": 0.08,
                    "unit": "mg",
                    "percentOfDailyNeeds": 5.31
                },
                {
                    "name": "Vitamin C",
                    "amount": 4.22,
                    "unit": "mg",
                    "percentOfDailyNeeds": 5.11
                },
                {
                    "name": "Zinc",
                    "amount": 0.72,
                    "unit": "mg",
                    "percentOfDailyNeeds": 4.81
                },
                {
                    "name": "Calcium",
                    "amount": 41.9,
                    "unit": "mg",
                    "percentOfDailyNeeds": 4.19
                },
                {
                    "name": "Iron",
                    "amount": 0.68,
                    "unit": "mg",
                    "percentOfDailyNeeds": 3.8
                },
                {
                    "name": "Vitamin B12",
                    "amount": 0.22,
                    "unit": "µg",
                    "percentOfDailyNeeds": 3.6
                },
                {
                    "name": "Vitamin E",
                    "amount": 0.52,
                    "unit": "mg",
                    "percentOfDailyNeeds": 3.47
                },
                {
                    "name": "Copper",
                    "amount": 0.06,
                    "unit": "mg",
                    "percentOfDailyNeeds": 3.18
                },
                {
                    "name": "Fiber",
                    "amount": 0.54,
                    "unit": "g",
                    "percentOfDailyNeeds": 2.17
                },
                {
                    "name": "Vitamin K",
                    "amount": 1.33,
                    "unit": "µg",
                    "percentOfDailyNeeds": 1.26
                },
                {
                    "name": "Folate",
                    "amount": 4.85,
                    "unit": "µg",
                    "percentOfDailyNeeds": 1.21
                }
            ],
            "properties": [
                {
                    "name": "Glycemic Index",
                    "amount": 9.0,
                    "unit": ""
                },
                {
                    "name": "Glycemic Load",
                    "amount": 1.05,
                    "unit": ""
                },
                {
                    "name": "Inflammation Score",
                    "amount": -7.0,
                    "unit": ""
                },
                {
                    "name": "Nutrition Score",
                    "amount": 10.335217391304349,
                    "unit": "%"
                }
            ],
            "flavonoids": [
                {
                    "name": "Cyanidin",
                    "amount": 0.0,
                    "unit": ""
                },
                {
                    "name": "Petunidin",
                    "amount": 0.0,
                    "unit": ""
                },
                {
                    "name": "Delphinidin",
                    "amount": 0.0,
                    "unit": ""
                },
                {
                    "name": "Malvidin",
                    "amount": 0.0,
                    "unit": ""
                },
                {
                    "name": "Pelargonidin",
                    "amount": 0.0,
                    "unit": ""
                },
                {
                    "name": "Peonidin",
                    "amount": 0.0,
                    "unit": ""
                },
                {
                    "name": "Catechin",
                    "amount": 0.0,
                    "unit": ""
                },
                {
                    "name": "Epigallocatechin",
                    "amount": 0.0,
                    "unit": ""
                },
                {
                    "name": "Epicatechin",
                    "amount": 0.0,
                    "unit": ""
                },
                {
                    "name": "Epicatechin 3-gallate",
                    "amount": 0.0,
                    "unit": ""
                },
                {
                    "name": "Epigallocatechin 3-gallate",
                    "amount": 0.0,
                    "unit": ""
                },
                {
                    "name": "Theaflavin",
                    "amount": 0.0,
                    "unit": ""
                },
                {
                    "name": "Thearubigins",
                    "amount": 0.0,
                    "unit": ""
                },
                {
                    "name": "Eriodictyol",
                    "amount": 0.0,
                    "unit": ""
                },
                {
                    "name": "Hesperetin",
                    "amount": 0.0,
                    "unit": ""
                },
                {
                    "name": "Naringenin",
                    "amount": 0.0,
                    "unit": ""
                },
                {
                    "name": "Apigenin",
                    "amount": 0.0,
                    "unit": ""
                },
                {
                    "name": "Luteolin",
                    "amount": 0.0,
                    "unit": ""
                },
                {
                    "name": "Isorhamnetin",
                    "amount": 0.0,
                    "unit": ""
                },
                {
                    "name": "Kaempferol",
                    "amount": 0.03,
                    "unit": "mg"
                },
                {
                    "name": "Myricetin",
                    "amount": 0.16,
                    "unit": "mg"
                },
                {
                    "name": "Quercetin",
                    "amount": 0.17,
                    "unit": "mg"
                },
                {
                    "name": "Theaflavin-3,3'-digallate",
                    "amount": 0.0,
                    "unit": ""
                },
                {
                    "name": "Theaflavin-3'-gallate",
                    "amount": 0.0,
                    "unit": ""
                },
                {
                    "name": "Theaflavin-3-gallate",
                    "amount": 0.0,
                    "unit": ""
                },
                {
                    "name": "Gallocatechin",
                    "amount": 0.0,
                    "unit": ""
                }
            ],
            "ingredients": [
                {
                    "id": 5062,
                    "name": "chicken breast",
                    "amount": 83.33,
                    "unit": "grams",
                    "nutrients": [
                        {
                            "name": "Vitamin K",
                            "amount": 0.17,
                            "unit": "µg",
                            "percentOfDailyNeeds": 1.26
                        },
                        {
                            "name": "Poly Unsaturated Fat",
                            "amount": 0.33,
                            "unit": "g",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Caffeine",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Potassium",
                            "amount": 308.33,
                            "unit": "mg",
                            "percentOfDailyNeeds": 11.12
                        },
                        {
                            "name": "Manganese",
                            "amount": 0.01,
                            "unit": "mg",
                            "percentOfDailyNeeds": 10.21
                        },
                        {
                            "name": "Copper",
                            "amount": 0.02,
                            "unit": "mg",
                            "percentOfDailyNeeds": 3.18
                        },
                        {
                            "name": "Vitamin B3",
                            "amount": 8.69,
                            "unit": "mg",
                            "percentOfDailyNeeds": 44.4
                        },
                        {
                            "name": "Sodium",
                            "amount": 96.67,
                            "unit": "mg",
                            "percentOfDailyNeeds": 30.46
                        },
                        {
                            "name": "Trans Fat",
                            "amount": 0.01,
                            "unit": "g",
                            "percentOfDailyNeeds": 100.0
                        },
                        {
                            "name": "Mono Unsaturated Fat",
                            "amount": 0.64,
                            "unit": "g",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Saturated Fat",
                            "amount": 0.47,
                            "unit": "g",
                            "percentOfDailyNeeds": 4.91
                        },
                        {
                            "name": "Calories",
                            "amount": 95.0,
                            "unit": "kcal",
                            "percentOfDailyNeeds": 6.04
                        },
                        {
                            "name": "Phosphorus",
                            "amount": 175.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 20.59
                        },
                        {
                            "name": "Lycopene",
                            "amount": 0.0,
                            "unit": "µg",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Cholesterol",
                            "amount": 53.33,
                            "unit": "mg",
                            "percentOfDailyNeeds": 18.36
                        },
                        {
                            "name": "Calcium",
                            "amount": 4.17,
                            "unit": "mg",
                            "percentOfDailyNeeds": 4.19
                        },
                        {
                            "name": "Vitamin B5",
                            "amount": 1.19,
                            "unit": "mg",
                            "percentOfDailyNeeds": 13.07
                        },
                        {
                            "name": "Protein",
                            "amount": 17.69,
                            "unit": "g",
                            "percentOfDailyNeeds": 37.84
                        },
                        {
                            "name": "Carbohydrates",
                            "amount": 0.0,
                            "unit": "g",
                            "percentOfDailyNeeds": 1.48
                        },
                        {
                            "name": "Net Carbohydrates",
                            "amount": 0.0,
                            "unit": "g",
                            "percentOfDailyNeeds": 1.42
                        },
                        {
                            "name": "Sugar",
                            "amount": 0.0,
                            "unit": "g",
                            "percentOfDailyNeeds": 0.88
                        },
                        {
                            "name": "Vitamin E",
                            "amount": 0.16,
                            "unit": "mg",
                            "percentOfDailyNeeds": 3.47
                        },
                        {
                            "name": "Zinc",
                            "amount": 0.48,
                            "unit": "mg",
                            "percentOfDailyNeeds": 4.81
                        },
                        {
                            "name": "Alcohol",
                            "amount": 0.0,
                            "unit": "g",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Vitamin A",
                            "amount": 25.0,
                            "unit": "IU",
                            "percentOfDailyNeeds": 6.12
                        },
                        {
                            "name": "Fat",
                            "amount": 2.16,
                            "unit": "g",
                            "percentOfDailyNeeds": 4.28
                        },
                        {
                            "name": "Folate",
                            "amount": 3.33,
                            "unit": "µg",
                            "percentOfDailyNeeds": 1.21
                        },
                        {
                            "name": "Vitamin C",
                            "amount": 1.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 5.11
                        },
                        {
                            "name": "Vitamin B2",
                            "amount": 0.08,
                            "unit": "mg",
                            "percentOfDailyNeeds": 7.17
                        },
                        {
                            "name": "Choline",
                            "amount": 61.17,
                            "unit": "mg",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Folic Acid",
                            "amount": 0.0,
                            "unit": "µg",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Vitamin D",
                            "amount": 0.08,
                            "unit": "µg",
                            "percentOfDailyNeeds": 0.64
                        },
                        {
                            "name": "Vitamin B6",
                            "amount": 0.62,
                            "unit": "mg",
                            "percentOfDailyNeeds": 38.65
                        },
                        {
                            "name": "Magnesium",
                            "amount": 21.67,
                            "unit": "mg",
                            "percentOfDailyNeeds": 6.82
                        },
                        {
                            "name": "Vitamin B1",
                            "amount": 0.05,
                            "unit": "mg",
                            "percentOfDailyNeeds": 5.31
                        },
                        {
                            "name": "Selenium",
                            "amount": 26.67,
                            "unit": "µg",
                            "percentOfDailyNeeds": 40.81
                        },
                        {
                            "name": "Fiber",
                            "amount": 0.0,
                            "unit": "g",
                            "percentOfDailyNeeds": 2.17
                        },
                        {
                            "name": "Vitamin B12",
                            "amount": 0.17,
                            "unit": "µg",
                            "percentOfDailyNeeds": 3.6
                        },
                        {
                            "name": "Iron",
                            "amount": 0.31,
                            "unit": "mg",
                            "percentOfDailyNeeds": 3.8
                        }
                    ]
                },
                {
                    "id": 2009,
                    "name": "chili powder",
                    "amount": 0.33,
                    "unit": "tsp",
                    "nutrients": [
                        {
                            "name": "Vitamin K",
                            "amount": 0.95,
                            "unit": "µg",
                            "percentOfDailyNeeds": 1.26
                        },
                        {
                            "name": "Poly Unsaturated Fat",
                            "amount": 0.07,
                            "unit": "g",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Caffeine",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Potassium",
                            "amount": 17.55,
                            "unit": "mg",
                            "percentOfDailyNeeds": 11.12
                        },
                        {
                            "name": "Manganese",
                            "amount": 0.02,
                            "unit": "mg",
                            "percentOfDailyNeeds": 10.21
                        },
                        {
                            "name": "Copper",
                            "amount": 0.01,
                            "unit": "mg",
                            "percentOfDailyNeeds": 3.18
                        },
                        {
                            "name": "Vitamin B3",
                            "amount": 0.1,
                            "unit": "mg",
                            "percentOfDailyNeeds": 44.4
                        },
                        {
                            "name": "Sodium",
                            "amount": 14.76,
                            "unit": "mg",
                            "percentOfDailyNeeds": 30.46
                        },
                        {
                            "name": "Trans Fat",
                            "amount": 0.0,
                            "unit": "g",
                            "percentOfDailyNeeds": 100.0
                        },
                        {
                            "name": "Mono Unsaturated Fat",
                            "amount": 0.03,
                            "unit": "g",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Saturated Fat",
                            "amount": 0.02,
                            "unit": "g",
                            "percentOfDailyNeeds": 4.91
                        },
                        {
                            "name": "Calories",
                            "amount": 2.54,
                            "unit": "kcal",
                            "percentOfDailyNeeds": 6.04
                        },
                        {
                            "name": "Phosphorus",
                            "amount": 2.7,
                            "unit": "mg",
                            "percentOfDailyNeeds": 20.59
                        },
                        {
                            "name": "Lycopene",
                            "amount": 0.19,
                            "unit": "µg",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Cholesterol",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 18.36
                        },
                        {
                            "name": "Calcium",
                            "amount": 2.97,
                            "unit": "mg",
                            "percentOfDailyNeeds": 4.19
                        },
                        {
                            "name": "Vitamin B5",
                            "amount": 0.01,
                            "unit": "mg",
                            "percentOfDailyNeeds": 13.07
                        },
                        {
                            "name": "Protein",
                            "amount": 0.12,
                            "unit": "g",
                            "percentOfDailyNeeds": 37.84
                        },
                        {
                            "name": "Carbohydrates",
                            "amount": 0.45,
                            "unit": "g",
                            "percentOfDailyNeeds": 1.48
                        },
                        {
                            "name": "Net Carbohydrates",
                            "amount": 0.13,
                            "unit": "g",
                            "percentOfDailyNeeds": 1.42
                        },
                        {
                            "name": "Sugar",
                            "amount": 0.06,
                            "unit": "g",
                            "percentOfDailyNeeds": 0.88
                        },
                        {
                            "name": "Vitamin E",
                            "amount": 0.34,
                            "unit": "mg",
                            "percentOfDailyNeeds": 3.47
                        },
                        {
                            "name": "Zinc",
                            "amount": 0.04,
                            "unit": "mg",
                            "percentOfDailyNeeds": 4.81
                        },
                        {
                            "name": "Alcohol",
                            "amount": 0.0,
                            "unit": "g",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Vitamin A",
                            "amount": 266.85,
                            "unit": "IU",
                            "percentOfDailyNeeds": 6.12
                        },
                        {
                            "name": "Fat",
                            "amount": 0.13,
                            "unit": "g",
                            "percentOfDailyNeeds": 4.28
                        },
                        {
                            "name": "Folate",
                            "amount": 0.25,
                            "unit": "µg",
                            "percentOfDailyNeeds": 1.21
                        },
                        {
                            "name": "Vitamin C",
                            "amount": 0.01,
                            "unit": "mg",
                            "percentOfDailyNeeds": 5.11
                        },
                        {
                            "name": "Vitamin B2",
                            "amount": 0.01,
                            "unit": "mg",
                            "percentOfDailyNeeds": 7.17
                        },
                        {
                            "name": "Choline",
                            "amount": 0.6,
                            "unit": "mg",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Folic Acid",
                            "amount": 0.0,
                            "unit": "µg",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Vitamin D",
                            "amount": 0.0,
                            "unit": "µg",
                            "percentOfDailyNeeds": 0.64
                        },
                        {
                            "name": "Vitamin B6",
                            "amount": 0.02,
                            "unit": "mg",
                            "percentOfDailyNeeds": 38.65
                        },
                        {
                            "name": "Magnesium",
                            "amount": 1.34,
                            "unit": "mg",
                            "percentOfDailyNeeds": 6.82
                        },
                        {
                            "name": "Vitamin B1",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 5.31
                        },
                        {
                            "name": "Selenium",
                            "amount": 0.18,
                            "unit": "µg",
                            "percentOfDailyNeeds": 40.81
                        },
                        {
                            "name": "Fiber",
                            "amount": 0.31,
                            "unit": "g",
                            "percentOfDailyNeeds": 2.17
                        },
                        {
                            "name": "Vitamin B12",
                            "amount": 0.0,
                            "unit": "µg",
                            "percentOfDailyNeeds": 3.6
                        },
                        {
                            "name": "Iron",
                            "amount": 0.16,
                            "unit": "mg",
                            "percentOfDailyNeeds": 3.8
                        }
                    ]
                },
                {
                    "id": 10111215,
                    "name": "ginger and garlic paste",
                    "amount": 0.67,
                    "unit": "tbsp",
                    "nutrients": [
                        {
                            "name": "Vitamin K",
                            "amount": 0.17,
                            "unit": "µg",
                            "percentOfDailyNeeds": 1.26
                        },
                        {
                            "name": "Poly Unsaturated Fat",
                            "amount": 0.02,
                            "unit": "g",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Caffeine",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Potassium",
                            "amount": 40.1,
                            "unit": "mg",
                            "percentOfDailyNeeds": 11.12
                        },
                        {
                            "name": "Manganese",
                            "amount": 0.17,
                            "unit": "mg",
                            "percentOfDailyNeeds": 10.21
                        },
                        {
                            "name": "Copper",
                            "amount": 0.03,
                            "unit": "mg",
                            "percentOfDailyNeeds": 3.18
                        },
                        {
                            "name": "Vitamin B3",
                            "amount": 0.07,
                            "unit": "mg",
                            "percentOfDailyNeeds": 44.4
                        },
                        {
                            "name": "Sodium",
                            "amount": 1.7,
                            "unit": "mg",
                            "percentOfDailyNeeds": 30.46
                        },
                        {
                            "name": "Mono Unsaturated Fat",
                            "amount": 0.0,
                            "unit": "g",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Saturated Fat",
                            "amount": 0.01,
                            "unit": "g",
                            "percentOfDailyNeeds": 4.91
                        },
                        {
                            "name": "Calories",
                            "amount": 14.9,
                            "unit": "kcal",
                            "percentOfDailyNeeds": 6.04
                        },
                        {
                            "name": "Phosphorus",
                            "amount": 15.3,
                            "unit": "mg",
                            "percentOfDailyNeeds": 20.59
                        },
                        {
                            "name": "Lycopene",
                            "amount": 0.0,
                            "unit": "µg",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Cholesterol",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 18.36
                        },
                        {
                            "name": "Calcium",
                            "amount": 18.1,
                            "unit": "mg",
                            "percentOfDailyNeeds": 4.19
                        },
                        {
                            "name": "Vitamin B5",
                            "amount": 0.06,
                            "unit": "mg",
                            "percentOfDailyNeeds": 13.07
                        },
                        {
                            "name": "Protein",
                            "amount": 0.64,
                            "unit": "g",
                            "percentOfDailyNeeds": 37.84
                        },
                        {
                            "name": "Carbohydrates",
                            "amount": 3.31,
                            "unit": "g",
                            "percentOfDailyNeeds": 1.48
                        },
                        {
                            "name": "Net Carbohydrates",
                            "amount": 3.1,
                            "unit": "g",
                            "percentOfDailyNeeds": 1.42
                        },
                        {
                            "name": "Sugar",
                            "amount": 0.1,
                            "unit": "g",
                            "percentOfDailyNeeds": 0.88
                        },
                        {
                            "name": "Vitamin E",
                            "amount": 0.01,
                            "unit": "mg",
                            "percentOfDailyNeeds": 3.47
                        },
                        {
                            "name": "Zinc",
                            "amount": 0.12,
                            "unit": "mg",
                            "percentOfDailyNeeds": 4.81
                        },
                        {
                            "name": "Alcohol",
                            "amount": 0.0,
                            "unit": "g",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Vitamin A",
                            "amount": 0.9,
                            "unit": "IU",
                            "percentOfDailyNeeds": 6.12
                        },
                        {
                            "name": "Fat",
                            "amount": 0.05,
                            "unit": "g",
                            "percentOfDailyNeeds": 4.28
                        },
                        {
                            "name": "Folate",
                            "amount": 0.3,
                            "unit": "µg",
                            "percentOfDailyNeeds": 1.21
                        },
                        {
                            "name": "Vitamin C",
                            "amount": 3.12,
                            "unit": "mg",
                            "percentOfDailyNeeds": 5.11
                        },
                        {
                            "name": "Vitamin B2",
                            "amount": 0.01,
                            "unit": "mg",
                            "percentOfDailyNeeds": 7.17
                        },
                        {
                            "name": "Choline",
                            "amount": 2.32,
                            "unit": "mg",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Folic Acid",
                            "amount": 0.0,
                            "unit": "µg",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Vitamin D",
                            "amount": 0.0,
                            "unit": "µg",
                            "percentOfDailyNeeds": 0.64
                        },
                        {
                            "name": "Vitamin B6",
                            "amount": 0.12,
                            "unit": "mg",
                            "percentOfDailyNeeds": 38.65
                        },
                        {
                            "name": "Magnesium",
                            "amount": 2.5,
                            "unit": "mg",
                            "percentOfDailyNeeds": 6.82
                        },
                        {
                            "name": "Vitamin B1",
                            "amount": 0.02,
                            "unit": "mg",
                            "percentOfDailyNeeds": 5.31
                        },
                        {
                            "name": "Selenium",
                            "amount": 1.42,
                            "unit": "µg",
                            "percentOfDailyNeeds": 40.81
                        },
                        {
                            "name": "Fiber",
                            "amount": 0.21,
                            "unit": "g",
                            "percentOfDailyNeeds": 2.17
                        },
                        {
                            "name": "Vitamin B12",
                            "amount": 0.0,
                            "unit": "µg",
                            "percentOfDailyNeeds": 3.6
                        },
                        {
                            "name": "Iron",
                            "amount": 0.17,
                            "unit": "mg",
                            "percentOfDailyNeeds": 3.8
                        }
                    ]
                },
                {
                    "id": 2047,
                    "name": "salt",
                    "amount": 0.08,
                    "unit": "tbsp",
                    "nutrients": [
                        {
                            "name": "Vitamin K",
                            "amount": 0.0,
                            "unit": "µg",
                            "percentOfDailyNeeds": 1.26
                        },
                        {
                            "name": "Poly Unsaturated Fat",
                            "amount": 0.0,
                            "unit": "g",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Caffeine",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Potassium",
                            "amount": 0.12,
                            "unit": "mg",
                            "percentOfDailyNeeds": 11.12
                        },
                        {
                            "name": "Manganese",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 10.21
                        },
                        {
                            "name": "Copper",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 3.18
                        },
                        {
                            "name": "Vitamin B3",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 44.4
                        },
                        {
                            "name": "Sodium",
                            "amount": 581.37,
                            "unit": "mg",
                            "percentOfDailyNeeds": 30.46
                        },
                        {
                            "name": "Mono Unsaturated Fat",
                            "amount": 0.0,
                            "unit": "g",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Saturated Fat",
                            "amount": 0.0,
                            "unit": "g",
                            "percentOfDailyNeeds": 4.91
                        },
                        {
                            "name": "Calories",
                            "amount": 0.0,
                            "unit": "kcal",
                            "percentOfDailyNeeds": 6.04
                        },
                        {
                            "name": "Phosphorus",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 20.59
                        },
                        {
                            "name": "Lycopene",
                            "amount": 0.0,
                            "unit": "µg",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Cholesterol",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 18.36
                        },
                        {
                            "name": "Calcium",
                            "amount": 0.36,
                            "unit": "mg",
                            "percentOfDailyNeeds": 4.19
                        },
                        {
                            "name": "Vitamin B5",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 13.07
                        },
                        {
                            "name": "Protein",
                            "amount": 0.0,
                            "unit": "g",
                            "percentOfDailyNeeds": 37.84
                        },
                        {
                            "name": "Fluoride",
                            "amount": 0.03,
                            "unit": "mg",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Carbohydrates",
                            "amount": 0.0,
                            "unit": "g",
                            "percentOfDailyNeeds": 1.48
                        },
                        {
                            "name": "Net Carbohydrates",
                            "amount": 0.0,
                            "unit": "g",
                            "percentOfDailyNeeds": 1.42
                        },
                        {
                            "name": "Sugar",
                            "amount": 0.0,
                            "unit": "g",
                            "percentOfDailyNeeds": 0.88
                        },
                        {
                            "name": "Vitamin E",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 3.47
                        },
                        {
                            "name": "Zinc",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 4.81
                        },
                        {
                            "name": "Alcohol",
                            "amount": 0.0,
                            "unit": "g",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Vitamin A",
                            "amount": 0.0,
                            "unit": "IU",
                            "percentOfDailyNeeds": 6.12
                        },
                        {
                            "name": "Fat",
                            "amount": 0.0,
                            "unit": "g",
                            "percentOfDailyNeeds": 4.28
                        },
                        {
                            "name": "Folate",
                            "amount": 0.0,
                            "unit": "µg",
                            "percentOfDailyNeeds": 1.21
                        },
                        {
                            "name": "Vitamin C",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 5.11
                        },
                        {
                            "name": "Vitamin B2",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 7.17
                        },
                        {
                            "name": "Choline",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Folic Acid",
                            "amount": 0.0,
                            "unit": "µg",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Vitamin D",
                            "amount": 0.0,
                            "unit": "µg",
                            "percentOfDailyNeeds": 0.64
                        },
                        {
                            "name": "Vitamin B6",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 38.65
                        },
                        {
                            "name": "Magnesium",
                            "amount": 0.02,
                            "unit": "mg",
                            "percentOfDailyNeeds": 6.82
                        },
                        {
                            "name": "Vitamin B1",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 5.31
                        },
                        {
                            "name": "Selenium",
                            "amount": 0.0,
                            "unit": "µg",
                            "percentOfDailyNeeds": 40.81
                        },
                        {
                            "name": "Fiber",
                            "amount": 0.0,
                            "unit": "g",
                            "percentOfDailyNeeds": 2.17
                        },
                        {
                            "name": "Vitamin B12",
                            "amount": 0.0,
                            "unit": "µg",
                            "percentOfDailyNeeds": 3.6
                        },
                        {
                            "name": "Iron",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 3.8
                        }
                    ]
                },
                {
                    "id": 2043,
                    "name": "turmeric powder",
                    "amount": 0.04,
                    "unit": "tsp",
                    "nutrients": [
                        {
                            "name": "Vitamin K",
                            "amount": 0.01,
                            "unit": "µg",
                            "percentOfDailyNeeds": 1.26
                        },
                        {
                            "name": "Poly Unsaturated Fat",
                            "amount": 0.0,
                            "unit": "g",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Caffeine",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Potassium",
                            "amount": 2.31,
                            "unit": "mg",
                            "percentOfDailyNeeds": 11.12
                        },
                        {
                            "name": "Manganese",
                            "amount": 0.01,
                            "unit": "mg",
                            "percentOfDailyNeeds": 10.21
                        },
                        {
                            "name": "Copper",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 3.18
                        },
                        {
                            "name": "Vitamin B3",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 44.4
                        },
                        {
                            "name": "Sodium",
                            "amount": 0.03,
                            "unit": "mg",
                            "percentOfDailyNeeds": 30.46
                        },
                        {
                            "name": "Mono Unsaturated Fat",
                            "amount": 0.0,
                            "unit": "g",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Saturated Fat",
                            "amount": 0.0,
                            "unit": "g",
                            "percentOfDailyNeeds": 4.91
                        },
                        {
                            "name": "Calories",
                            "amount": 0.32,
                            "unit": "kcal",
                            "percentOfDailyNeeds": 6.04
                        },
                        {
                            "name": "Phosphorus",
                            "amount": 0.25,
                            "unit": "mg",
                            "percentOfDailyNeeds": 20.59
                        },
                        {
                            "name": "Lycopene",
                            "amount": 0.0,
                            "unit": "µg",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Cholesterol",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 18.36
                        },
                        {
                            "name": "Calcium",
                            "amount": 0.17,
                            "unit": "mg",
                            "percentOfDailyNeeds": 4.19
                        },
                        {
                            "name": "Protein",
                            "amount": 0.01,
                            "unit": "g",
                            "percentOfDailyNeeds": 37.84
                        },
                        {
                            "name": "Carbohydrates",
                            "amount": 0.06,
                            "unit": "g",
                            "percentOfDailyNeeds": 1.48
                        },
                        {
                            "name": "Net Carbohydrates",
                            "amount": 0.04,
                            "unit": "g",
                            "percentOfDailyNeeds": 1.42
                        },
                        {
                            "name": "Sugar",
                            "amount": 0.0,
                            "unit": "g",
                            "percentOfDailyNeeds": 0.88
                        },
                        {
                            "name": "Vitamin E",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 3.47
                        },
                        {
                            "name": "Zinc",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 4.81
                        },
                        {
                            "name": "Alcohol",
                            "amount": 0.0,
                            "unit": "g",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Vitamin A",
                            "amount": 0.0,
                            "unit": "IU",
                            "percentOfDailyNeeds": 6.12
                        },
                        {
                            "name": "Fat",
                            "amount": 0.01,
                            "unit": "g",
                            "percentOfDailyNeeds": 4.28
                        },
                        {
                            "name": "Folate",
                            "amount": 0.04,
                            "unit": "µg",
                            "percentOfDailyNeeds": 1.21
                        },
                        {
                            "name": "Vitamin C",
                            "amount": 0.02,
                            "unit": "mg",
                            "percentOfDailyNeeds": 5.11
                        },
                        {
                            "name": "Vitamin B2",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 7.17
                        },
                        {
                            "name": "Choline",
                            "amount": 0.05,
                            "unit": "mg",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Folic Acid",
                            "amount": 0.0,
                            "unit": "µg",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Vitamin D",
                            "amount": 0.0,
                            "unit": "µg",
                            "percentOfDailyNeeds": 0.64
                        },
                        {
                            "name": "Vitamin B6",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 38.65
                        },
                        {
                            "name": "Magnesium",
                            "amount": 0.18,
                            "unit": "mg",
                            "percentOfDailyNeeds": 6.82
                        },
                        {
                            "name": "Vitamin B1",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 5.31
                        },
                        {
                            "name": "Selenium",
                            "amount": 0.0,
                            "unit": "µg",
                            "percentOfDailyNeeds": 40.81
                        },
                        {
                            "name": "Fiber",
                            "amount": 0.02,
                            "unit": "g",
                            "percentOfDailyNeeds": 2.17
                        },
                        {
                            "name": "Vitamin B12",
                            "amount": 0.0,
                            "unit": "µg",
                            "percentOfDailyNeeds": 3.6
                        },
                        {
                            "name": "Iron",
                            "amount": 0.04,
                            "unit": "mg",
                            "percentOfDailyNeeds": 3.8
                        }
                    ]
                },
                {
                    "id": 1116,
                    "name": "yogurt",
                    "amount": 0.67,
                    "unit": "tbsp",
                    "nutrients": [
                        {
                            "name": "Vitamin K",
                            "amount": 0.03,
                            "unit": "µg",
                            "percentOfDailyNeeds": 1.26
                        },
                        {
                            "name": "Poly Unsaturated Fat",
                            "amount": 0.01,
                            "unit": "g",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Caffeine",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Potassium",
                            "amount": 20.67,
                            "unit": "mg",
                            "percentOfDailyNeeds": 11.12
                        },
                        {
                            "name": "Manganese",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 10.21
                        },
                        {
                            "name": "Copper",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 3.18
                        },
                        {
                            "name": "Vitamin B3",
                            "amount": 0.01,
                            "unit": "mg",
                            "percentOfDailyNeeds": 44.4
                        },
                        {
                            "name": "Sodium",
                            "amount": 6.13,
                            "unit": "mg",
                            "percentOfDailyNeeds": 30.46
                        },
                        {
                            "name": "Mono Unsaturated Fat",
                            "amount": 0.12,
                            "unit": "g",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Saturated Fat",
                            "amount": 0.28,
                            "unit": "g",
                            "percentOfDailyNeeds": 4.91
                        },
                        {
                            "name": "Calories",
                            "amount": 8.13,
                            "unit": "kcal",
                            "percentOfDailyNeeds": 6.04
                        },
                        {
                            "name": "Phosphorus",
                            "amount": 12.67,
                            "unit": "mg",
                            "percentOfDailyNeeds": 20.59
                        },
                        {
                            "name": "Lycopene",
                            "amount": 0.0,
                            "unit": "µg",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Cholesterol",
                            "amount": 1.73,
                            "unit": "mg",
                            "percentOfDailyNeeds": 18.36
                        },
                        {
                            "name": "Calcium",
                            "amount": 16.13,
                            "unit": "mg",
                            "percentOfDailyNeeds": 4.19
                        },
                        {
                            "name": "Vitamin B5",
                            "amount": 0.05,
                            "unit": "mg",
                            "percentOfDailyNeeds": 13.07
                        },
                        {
                            "name": "Protein",
                            "amount": 0.46,
                            "unit": "g",
                            "percentOfDailyNeeds": 37.84
                        },
                        {
                            "name": "Fluoride",
                            "amount": 1.6,
                            "unit": "mg",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Carbohydrates",
                            "amount": 0.62,
                            "unit": "g",
                            "percentOfDailyNeeds": 1.48
                        },
                        {
                            "name": "Net Carbohydrates",
                            "amount": 0.62,
                            "unit": "g",
                            "percentOfDailyNeeds": 1.42
                        },
                        {
                            "name": "Sugar",
                            "amount": 0.62,
                            "unit": "g",
                            "percentOfDailyNeeds": 0.88
                        },
                        {
                            "name": "Vitamin E",
                            "amount": 0.01,
                            "unit": "mg",
                            "percentOfDailyNeeds": 3.47
                        },
                        {
                            "name": "Zinc",
                            "amount": 0.08,
                            "unit": "mg",
                            "percentOfDailyNeeds": 4.81
                        },
                        {
                            "name": "Alcohol",
                            "amount": 0.0,
                            "unit": "g",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Vitamin A",
                            "amount": 13.2,
                            "unit": "IU",
                            "percentOfDailyNeeds": 6.12
                        },
                        {
                            "name": "Fat",
                            "amount": 0.43,
                            "unit": "g",
                            "percentOfDailyNeeds": 4.28
                        },
                        {
                            "name": "Folate",
                            "amount": 0.93,
                            "unit": "µg",
                            "percentOfDailyNeeds": 1.21
                        },
                        {
                            "name": "Vitamin C",
                            "amount": 0.07,
                            "unit": "mg",
                            "percentOfDailyNeeds": 5.11
                        },
                        {
                            "name": "Vitamin B2",
                            "amount": 0.02,
                            "unit": "mg",
                            "percentOfDailyNeeds": 7.17
                        },
                        {
                            "name": "Choline",
                            "amount": 2.03,
                            "unit": "mg",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Folic Acid",
                            "amount": 0.0,
                            "unit": "µg",
                            "percentOfDailyNeeds": 0.0
                        },
                        {
                            "name": "Vitamin D",
                            "amount": 0.01,
                            "unit": "µg",
                            "percentOfDailyNeeds": 0.64
                        },
                        {
                            "name": "Vitamin B6",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 38.65
                        },
                        {
                            "name": "Magnesium",
                            "amount": 1.6,
                            "unit": "mg",
                            "percentOfDailyNeeds": 6.82
                        },
                        {
                            "name": "Vitamin B1",
                            "amount": 0.0,
                            "unit": "mg",
                            "percentOfDailyNeeds": 5.31
                        },
                        {
                            "name": "Selenium",
                            "amount": 0.29,
                            "unit": "µg",
                            "percentOfDailyNeeds": 40.81
                        },
                        {
                            "name": "Fiber",
                            "amount": 0.0,
                            "unit": "g",
                            "percentOfDailyNeeds": 2.17
                        },
                        {
                            "name": "Vitamin B12",
                            "amount": 0.05,
                            "unit": "µg",
                            "percentOfDailyNeeds": 3.6
                        },
                        {
                            "name": "Iron",
                            "amount": 0.01,
                            "unit": "mg",
                            "percentOfDailyNeeds": 3.8
                        }
                    ]
                }
            ],
            "caloricBreakdown": {
                "percentProtein": 63.89,
                "percentFat": 21.12,
                "percentCarbs": 14.99
            },
            "weightPerServing": {
                "amount": 109,
                "unit": "g"
            }
        },
        "taste": {
            "sweetness": 10.99,
            "saltiness": 100.0,
            "sourness": 13.01,
            "bitterness": 16.1,
            "savoriness": 68.15,
            "fattiness": 55.31,
            "spiciness": 0.0
        },
        "summary": "Chicken 65 could be just the <b>gluten free</b> recipe you've been looking for. This hor d'oeuvre has <b>121 calories</b>, <b>19g of protein</b>, and <b>3g of fat</b> per serving. For <b>$1.15 per serving</b>, this recipe <b>covers 11%</b> of your daily requirements of vitamins and minerals. This recipe serves 6. Head to the store and pick up salt, chili powder, yogurt, and a few other things to make it today. 6 people have made this recipe and would make it again. It is brought to you by Foodista. From preparation to the plate, this recipe takes approximately <b>45 minutes</b>. Overall, this recipe earns a <b>not so spectacular spoonacular score of 39%</b>. Similar recipes are <a href=\"https://spoonacular.com/recipes/i-aint-chicken-chicken-crispy-roasted-chicken-breasts-with-orange-and-cardamom-1243251\">I Ain't Chicken Chicken: Crispy Roasted Chicken Breasts with Orange and Cardamom</a>, <a href=\"https://spoonacular.com/recipes/i-aint-chicken-chicken-crispy-roasted-chicken-breasts-with-orange-and-cardamom-1230059\">I Ain't Chicken Chicken: Crispy Roasted Chicken Breasts with Orange and Cardamom</a>, and <a href=\"https://spoonacular.com/recipes/i-aint-chicken-chicken-crispy-roasted-chicken-breasts-with-orange-and-cardamom-1224321\">I Ain't Chicken Chicken: Crispy Roasted Chicken Breasts with Orange and Cardamom</a>.",
        "cuisines": [],
        "dishTypes": [
            "antipasti",
            "starter",
            "snack",
            "appetizer",
            "antipasto",
            "hor d'oeuvre"
        ],
        "diets": [
            "gluten free"
        ],
        "occasions": [],
        "winePairing": {
            "pairedWines": [
                "sparkling wine",
                "sparkling rose"
            ],
            "pairingText": "Antipasti on the menu? Try pairing with Sparkling Wine and Sparkling rosé. If you're serving a selection of appetizers, you can't go wrong with these. Both are very food friendly and complement a variety of flavors. The McBride Sisters Brut rosé with a 4.8 out of 5 star rating seems like a good match. It costs about 24 dollars per bottle.",
            "productMatches": [
                {
                    "id": 432942,
                    "title": "McBride Sisters Brut Rose",
                    "description": "This sparkling wine exhibits a superb, long finish, backed by crisp acidity with complex aromas of red cherry, strawberry and floral notes.",
                    "price": "$23.99",
                    "imageUrl": "https://spoonacular.com/productImages/432942-312x231.jpg",
                    "averageRating": 0.9599999785423279,
                    "ratingCount": 7.0,
                    "score": 0.9145,
                    "link": "https://click.linksynergy.com/deeplink?id=*QCiIS6t4gA&mid=2025&murl=https%3A%2F%2Fwww.wine.com%2Fproduct%2Fmcbride-sisters-brut-rose%2F213437"
                }
            ]
        },
        "instructions": "<ol><li>Take a large bowl mix in the ginger and garlic paste, yogurt, red chilly powder, turmeric powder, and salt.</li><li>Mix well to from smooth and thick paste, add the chicken pieces to the masala paste and  marinaded for 4 hours.</li><li>Heat enough oil in a pan to deep fry the marinaded chicken pieces. Deep fry the chicken pieces in batches till crisp and golden color.</li><li>Note: The taste of the Chicken 65 depends mainly on the amount of time it gets marinated in the masala, it is best to marinate the chicken pieces the day before.</li></ol>",
        "analyzedInstructions": [
            {
                "name": "",
                "steps": [
                    {
                        "number": 1,
                        "step": "Take a large bowl mix in the ginger and garlic paste, yogurt, red chilly powder, turmeric powder, and salt.",
                        "ingredients": [
                            {
                                "id": 2043,
                                "name": "turmeric",
                                "localizedName": "turmeric",
                                "image": "turmeric.jpg"
                            },
                            {
                                "id": 2009,
                                "name": "chili powder",
                                "localizedName": "chili powder",
                                "image": "chili-powder.jpg"
                            },
                            {
                                "id": 10111215,
                                "name": "garlic paste",
                                "localizedName": "garlic paste",
                                "image": "garlic-paste.png"
                            },
                            {
                                "id": 11216,
                                "name": "ginger",
                                "localizedName": "ginger",
                                "image": "ginger.png"
                            },
                            {
                                "id": 1116,
                                "name": "yogurt",
                                "localizedName": "yogurt",
                                "image": "plain-yogurt.jpg"
                            },
                            {
                                "id": 2047,
                                "name": "salt",
                                "localizedName": "salt",
                                "image": "salt.jpg"
                            }
                        ],
                        "equipment": [
                            {
                                "id": 404783,
                                "name": "bowl",
                                "localizedName": "bowl",
                                "image": "bowl.jpg"
                            }
                        ]
                    },
                    {
                        "number": 2,
                        "step": "Mix well to from smooth and thick paste, add the chicken pieces to the masala paste and  marinaded for 4 hours.",
                        "ingredients": [
                            {
                                "id": 1005006,
                                "name": "chicken pieces",
                                "localizedName": "chicken pieces",
                                "image": "chicken-parts.jpg"
                            }
                        ],
                        "equipment": [],
                        "length": {
                            "number": 240,
                            "unit": "minutes"
                        }
                    },
                    {
                        "number": 3,
                        "step": "Heat enough oil in a pan to deep fry the marinaded chicken pieces. Deep fry the chicken pieces in batches till crisp and golden color.Note: The taste of the Chicken 65 depends mainly on the amount of time it gets marinated in the masala, it is best to marinate the chicken pieces the day before.",
                        "ingredients": [
                            {
                                "id": 1005006,
                                "name": "chicken pieces",
                                "localizedName": "chicken pieces",
                                "image": "chicken-parts.jpg"
                            },
                            {
                                "id": 0,
                                "name": "chicken",
                                "localizedName": "chicken",
                                "image": "whole-chicken.jpg"
                            },
                            {
                                "id": 4582,
                                "name": "cooking oil",
                                "localizedName": "cooking oil",
                                "image": "vegetable-oil.jpg"
                            }
                        ],
                        "equipment": [
                            {
                                "id": 404645,
                                "name": "frying pan",
                                "localizedName": "frying pan",
                                "image": "pan.png"
                            }
                        ]
                    }
                ]
            }
        ],
        "originalId": null,
        "spoonacularScore": 48.6579704284668,
        "spoonacularSourceUrl": "https://spoonacular.com/chicken-65-637876"
    }
    const info = recipeInfo1.nutrition.nutrients.map(name => name.name).join(",");
    console.log(info);
    const getRecipeInformation = async()=>{
        const data = await fetch("https://api.spoonacular.com/recipes/" + recipeId + "/information?apiKey="+ API_KEY + "&includeNutrition=true");
        const json = await data.json();
        setRecipeInfo(json);
    }

    useEffect(()=>{
        getRecipeInformation();
    },[recipeId]);
    if(!recipeInfo) return null;
    const {vegetarain,vegan,glutenFree,dairyFree,sourceName,pricePerServing,extendedIngredients,title,servings,readyInMinutes,sourceUrl,image,nutrition,summary,analyzedInstructions,spoonacularSourceUrl} = recipeInfo;
    const {nutrients} = nutrition;
    const steps = analyzedInstructions[0].steps;

    return (
        <div className='px-10 mt-[10%]'>
            {/* Section 1 */}
            <h1 className='flex justify-center mb-5 text-4xl font-bold'>{title}</h1>
            <div className='flex space-x-24 justify-center mt-10'>
                <img src={image} alt={title+" img"} className='w-[42%] shadow-lg shadow-gray-700 rounded-lg hover:scale-105 transition-transform ease-in-out'/>
                <div className='flex flex-col space-y-4'>
                    <div className='flex space-x-4 bg-gray-100 px-10 py-2 rounded-lg shadow-sm shadow-gray-700'>
                        <BiSolidDish size={40}/>
                        <h1 className=''>{servings + " servings"}</h1>
                    </div>
                    <div className='flex space-x-4 bg-gray-100 px-10 py-2 rounded-lg shadow-sm shadow-gray-700'>
                        <img src={caloriesLogo} alt='calories img' className='w-12'/>
                        <h1>126kcal</h1>
                    </div>
                    <div className='flex space-x-4 bg-gray-100 px-10 py-2 rounded-lg shadow-sm shadow-gray-700'>
                        <IoMdAlarm size={40}/>
                        <h1>{"Prepation Time "+readyInMinutes+"min"}</h1>
                    </div>
                    <div className='flex space-x-4 bg-gray-100 px-10 py-2 rounded-lg shadow-sm shadow-gray-700'>
                        <AiFillDollarCircle size={40}/>
                        <h1>{"$"+pricePerServing + " per Serving"}</h1>
                    </div>
                    <div className='flex space-x-4 bg-gray-100 px-10 py-2 rounded-lg shadow-sm shadow-gray-700'>
                        <img src={vegetarain ? vegLogo : nonVegLogo} className='w-12'/>
                        <h1>{vegetarain?"Vegetarain":"Non-Vegetarain"}</h1>
                    </div>
                    {vegan && <div className='flex space-x-4 bg-gray-100 px-10 py-2 rounded-lg shadow-sm shadow-gray-700'>
                        <img src={veganLogo} alt='vegan logo' className='w-12'/>
                        <h1>Vegan</h1>
                    </div>}
                    {glutenFree && <div className='flex space-x-4 bg-gray-100 px-10 py-2 rounded-lg shadow-sm shadow-gray-700'>
                        <img src={glutenFreeLogo} alt='gluten free logo' className='w-12'/>
                        <h1>Gluten Free</h1>    
                    </div>}
                    {dairyFree && <div className='flex space-x-4 bg-gray-100 px-10 py-2 rounded-lg shadow-sm shadow-gray-700'>
                        <img src={dairyFreeLogo} alt='dairy free logo' className='w-12'/>
                        <h1>Dairy Free</h1>
                    </div>}
                </div>
            </div>
            {/* Section 2 */}
            {/* <div className='ml-[10%] mt-10 grid grid-cols-12 space-x-10'>
                <div className='col-span-4'>
                    <h1 className='text-2xl font-semibold'>Ingredients</h1>
                    <ul className='list-disc mt-5 text-lg'>
                        {extendedIngredients.map(ingredient => <li className=''>{ingredient.original}</li>)}
                    </ul>
                </div>
                <div className='col-span-8 w-[90%]'>
                    <h1 className='text-2xl font-semibold mb-4'>Nutrients</h1>
                    <div className='flex flex-wrap text-lg'>
                        {nutrients.slice(0,15).map(nutrient=><h1 className='mr-7 my-2'>{nutrient.name +"- " + nutrient.amount+nutrient.unit}</h1>)}
                    </div>
                </div>
            </div> */}
            <div className='ml-[10%] mt-20'>
                <p dangerouslySetInnerHTML={{ __html: summary }} className='w-[90%]'></p>
                <h1 className='text-2xl font-semibold mt-10 mb-4'>Ingredients</h1>
                <div className='flex flex-wrap space-x-10'>
                    {extendedIngredients.map(ingredient =><div className='flex flex-col items-center'>
                            <h1 className='mb-2'>{ingredient.amount +" " +ingredient.unit}</h1>
                            <img src={Ingredients_IMG_CDN+ingredient.image} alt={ingredient.name + " img"} className='w-28 h-28 object-contain'/>
                            <h1 className='my-4'>{ingredient.name}</h1>
                        </div>)}
                </div>
            </div>
            {/* Section 3 */}
            <div className='ml-[10%] mt-10 w-[85%]'>
                <h1 className='text-2xl font-semibold mb-4'>{"Analyzed Instructions ( Preparation Time - " + readyInMinutes + "min )"}</h1>
                <ul className='list-decimal text-lg'>
                    {steps.map(step=> <div className='space-y-2 mt-4'>
                            <li>{step.step}</li>
                            <h1 className='ml-7'><span className='font-semibold'>Ingredients</span> - {step.ingredients.map(ingredient => ingredient.name).join(", ")}</h1>
                            {step.equipment.length!==0 && <h1 className='ml-7'><span className='font-semibold'>Equipments</span> - {step.equipment.map(equipment => equipment.name).join(", ")}</h1>}
                        </div>)}
                </ul>
            </div>
            {/* Section 4 */}
            <div className='ml-[10%] mt-10'>
                <h1 className='text-2xl font-semibold'>Nutritional Information</h1>
            </div>
            {/* Section 5 */}
            <div className='ml-[10%] mt-10 text-lg font-semibold'>
                <h1>{"Source Name - " + sourceName}</h1>
                <h1>Source Url - <a href={sourceUrl}>{sourceUrl}</a></h1>
            </div>
            <SimilarRecipes recipeId={recipeId}/>
        </div>
    )
}

export default RecipePage
