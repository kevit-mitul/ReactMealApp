import { MasonryFlashList } from "@shopify/flash-list";
import MealsListItem from "./MealsListItem";
import {MealItemType} from "../../types/MealItemType";
import {useEffect, useState} from "react";
import APIManager from "../../api/APIManager";
import {useCategorySlice} from "../../store/slices/categorySlice";
import HeightLoader from "../HeightLoader";

export default function MealsList() {

    const [meals, setMeals] = useState<MealItemType[]>([] as MealItemType[]);
    const { selectedCategory } = useCategorySlice()

    useEffect(() => {
        if(selectedCategory.strCategory){
            setMeals([])
            getMeals(selectedCategory?.strCategory)

        }
    }, [selectedCategory]);

    const getMeals = (category) => {
        APIManager.getMeals(category).then(data=> {
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
