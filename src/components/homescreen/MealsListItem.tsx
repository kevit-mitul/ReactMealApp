import {Image, View, StyleSheet, Text, TouchableOpacity} from "react-native";
import Animated, {FadeInDown} from "react-native-reanimated";
import {MealItemType} from "../../types/MealItemType";
import Size from "../../theme/Size";
import {useNavigation} from "@react-navigation/native";
import { vs, mvs } from "../../utils/Scaling";

type MealsItemProps = {
    item: MealItemType
    index: number
}

export default function MealsListItem({index, item}: MealsItemProps) {

    const navigation = useNavigation();

    const handleRecipeClick = () => {
        navigation.navigate("MealDetail", { mealId : item.idMeal})
    }

    return (
        <Animated.View entering={FadeInDown.duration(index * 100).springify().damping(12)}
                       style={styles.imageContainer}>
            <TouchableOpacity onPress={handleRecipeClick} style={{ paddingLeft:index % 2 != 0 ? 7:0, paddingRight:index % 2 == 0 ? 7:0}}>
                <Animated.Image
                    sharedTransitionTag={"recipeImage"}
                    source={{uri: item.strMealThumb}}
                    style={[styles.image, {height: index % 3 === 0 ? mvs(150) : mvs(250)} ]}
                />
                <Text style={styles.mealTitle} numberOfLines={1}>{item.strMeal}</Text>
            </TouchableOpacity>
        </Animated.View>

    )
}

const styles = StyleSheet.create({
    image: {
        width: "100%",
        borderRadius: 20,
        marginTop : 10,
        marginBottom:10
    },
    imageContainer: {

    },
    mealTitle: {
        fontSize: Size.md,
        marginVertical: 10
    }
})
