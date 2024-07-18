import {Image, View, StyleSheet, Text} from "react-native";
import Animated , {FadeInDown} from "react-native-reanimated";
import {MealItemType} from "../../types/MealItemType";
import Size from "../../theme/Size";

type MealsItemProps = {
    item : MealItemType
    index : number
}

export default function MealsListItem({index, item } : MealsItemProps){
    return(
        <Animated.View entering={FadeInDown.duration(index * 100).springify().damping(12)} style={styles.imageContainer}>
        <Image
            source={{uri: item.strMealThumb}}
            style={[styles.image, {height : index % 3 === 0 ? 150 : 250,}]}
        />
            <Text style={styles.mealTitle} numberOfLines={1}>{item.strMeal}</Text>
        </Animated.View>

    )
}

const styles = StyleSheet.create({
    image : {
        width : "100%",
        borderRadius : 20
    },
    imageContainer : {
        padding : 10
    },
    mealTitle : {
        fontSize : Size.md,
        marginVertical: 10
    }
})
