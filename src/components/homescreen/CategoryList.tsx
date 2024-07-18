import {FlatList, View} from "react-native";
import CategoryListItem  from "./CategoryListItem";
import Animated, {FadeInDown} from "react-native-reanimated";
import {useEffect} from "react";
import {CategoryItemType} from "../../types/CategoryItem.type";
import {useCategorySlice} from "../../store/slices/categorySlice";

type CategoryProps = {
    categories?: CategoryItemType[],
    selectedCategory? : CategoryItemType,
    onCategoryChange : (selectedCategory: CategoryItemType) => void,
}

export default function CategoryList({categories = [], selectedCategory, onCategoryChange}: CategoryProps) {

    const { categoryList, selectedCategory:selectedReduxCategory } = useCategorySlice()

    console.log(categoryList, selectedReduxCategory)

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
