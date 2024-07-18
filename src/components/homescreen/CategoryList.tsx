import {FlatList, View} from "react-native";
import CategoryListItem  from "./CategoryListItem";
import Animated, {FadeInDown} from "react-native-reanimated";
import {useEffect} from "react";
import {CategoryItemType} from "../../types/CategoryItem.type";
import {useCategorySlice} from "../../store/slices/categorySlice";
import {setSelectedCategory } from "../../store/slices/categorySlice";
import {useDispatch} from "react-redux";

// type CategoryProps = {
//     categories?: CategoryItemType[],
//     selectedCategory? : CategoryItemType,
//     onCategoryChange : (selectedCategory: CategoryItemType) => void,
// }

export default function CategoryList() {
    const dispatch = useDispatch();
    const { categoryList, selectedCategory } = useCategorySlice()


    useEffect(() => {
        if (categoryList.length > 0)
            dispatch(setSelectedCategory(categoryList[0]))
    }, [categoryList])

    console.log(categoryList.length)

    const handleCategoryClick = (category : CategoryItemType) => {
        dispatch(setSelectedCategory(category))
    }

    return (
        <Animated.View entering={FadeInDown.duration(500).springify()}>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.idCategory}
                ItemSeparatorComponent={() => <View style={{width: 15}}></View>}
                data={categoryList}
                renderItem={({item}) => <CategoryListItem item={item} selectedCategory={selectedCategory}
                                                          onSelect={handleCategoryClick}/>}/>
        </Animated.View>
    );
}
