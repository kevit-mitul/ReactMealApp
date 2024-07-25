import {FlatList, Text, View} from "react-native";
import CategoryListItem  from "./CategoryListItem";
import Animated, {FadeInDown} from "react-native-reanimated";
import {useEffect} from "react";
import {CategoryItemType} from "../../types/CategoryItem.type";
import {useCategorySlice} from "../../store/slices/categorySlice";
import {setSelectedCategory } from "../../store/slices/categorySlice";
import Loader from "../Loader";
import ErrorText from "../ErrorText";
import {useAppDispatch} from "../../store/store";
import HeightLoader from "../HeightLoader";
import EmptyListText from "../EmptyListText";

// type CategoryProps = {
//     categories?: CategoryItemType[],
//     selectedCategory? : CategoryItemType,
//     onCategoryChange : (selectedCategory: CategoryItemType) => void,
// }

export default function CategoryList() {
    const dispatch = useAppDispatch();
    const { categoryList, selectedCategory, loading, error } = useCategorySlice()


    useEffect(() => {
        if (categoryList.length > 0)
            handleCategoryClick(categoryList[0])
    }, [categoryList])


    const handleCategoryClick = (category : CategoryItemType) => {
        dispatch(setSelectedCategory(category))
    }

    if(loading) return <HeightLoader size={20} />

    if(error) return <ErrorText message={error} />

    return (<>
        <Animated.View entering={FadeInDown.duration(500).springify()}>
            <FlatList
                contentContainerStyle={{flex:1}}
                horizontal
                ListEmptyComponent={()=> <EmptyListText text={"Category list is empty"}/>}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.idCategory}
                ItemSeparatorComponent={() => <View style={{width: 15}}></View>}
                data={categoryList}
                renderItem={({item}) => <CategoryListItem item={item} selectedCategory={selectedCategory}
                                                          onSelect={handleCategoryClick}/>}/>
        </Animated.View>
        </>
    );
}
