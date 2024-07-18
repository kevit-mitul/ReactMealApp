import {FlatList, ScrollView, Text, View} from "react-native";
import CategoryListItem  from "./CategoryListItem";
import Animated, {FadeInDown} from "react-native-reanimated";
import {useEffect, useState} from "react";
import {CategoryItemType} from "../../types/CategoryItem.type";

const Data = ["item1", "item2", "item3", "item4", "item5", "item6", "item7", "item8", "item9q",]

type CategoryProps = {
    categories?: CategoryItemType[],
    selectedCategory? : CategoryItemType,
    onCategoryChange : (selectedCategory: CategoryItemType) => void,
}

export default function CategoryList({categories = [], selectedCategory, onCategoryChange}: CategoryProps) {


    useEffect(() => {
        if (categories.length > 0)
            onCategoryChange(categories[0])
    }, [categories])

    const handleCategoryClick = (item : CategoryItemType) => {
        onCategoryChange(item);
    }

    return (
        <Animated.View entering={FadeInDown.duration(500).springify()}>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.idCategory}
                ItemSeparatorComponent={() => <View style={{width: 15}}></View>}
                data={categories}
                renderItem={({item}) => <CategoryListItem item={item} selectedCategory={selectedCategory}
                                                          onSelect={handleCategoryClick}/>}/>

        </Animated.View>
    );
}
