import { MasonryFlashList } from "@shopify/flash-list";
import {Text} from "react-native";
import MealsListItem from "./MealsListItem";
import {MealItemType} from "../../types/MealItemType";

const Data = ["item1", "item2", "item3", "item4", "item5", "item6","item7", "item8", "item9q", ]

type MealsListProps = {
    meals: MealsListItem[];
}

export default function MealsList({meals} : MealsListProps) {
    return(
        <MasonryFlashList
            data={meals}
            estimatedItemSize={220}
            numColumns={2}
            renderItem={({ item , index }) => <MealsListItem index={index} item={item as MealItemType} />}
        />
    )
 }
