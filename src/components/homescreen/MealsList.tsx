import { MasonryFlashList } from "@shopify/flash-list";
import MealsListItem from "./MealsListItem";
import {MealItemType} from "../../types/MealItemType";
import {useEffect, useState} from "react";
import APIManager from "../../api/APIManager";
import {useCategorySlice} from "../../store/slices/categorySlice";
import Loader from "../Loader";
import HeightLoader from "../HeightLoader";

const Data = ["item1", "item2", "item3", "item4", "item5", "item6","item7", "item8", "item9q", ]

type MealsListProps = {
    meals: MealsListItem[];
}

export default function MealsList() {

    const [meals, setMeals] = useState<MealItemType[]>([]);
    const { selectedCategory } = useCategorySlice()

    useEffect(() => {
        if(selectedCategory.strCategory){
            setMeals([])
            getMeals(selectedCategory?.strCategory)

        }
    }, [selectedCategory]);

    const getMeals = (category) => {
        console.log("GETTING MEALS: ", category)
        APIManager.getMeals(category).then(data=> {
            // console.log("MEALDATA", data.data.meals.slice(0,1))
            setMeals(data?.data?.meals?.slice(0,12))
        });
    }

    if(meals.length == 0) return <HeightLoader/>

    return(
        <MasonryFlashList
            data={meals}
            estimatedItemSize={220}
            numColumns={2}
            renderItem={({ item , index }) => <MealsListItem index={index} item={item as MealItemType} />}
        />
    )
 }
