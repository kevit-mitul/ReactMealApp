import {
    Image,
    ImageBackground,
    Platform,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableHighlight,
    View
} from "react-native";
import {Layout} from "../theme/GlobalStyle";
import {ArrowLeftIcon, HeartIcon, StarIcon, ClockIcon} from 'react-native-heroicons/solid'
import {Colors} from "../theme/Colors";
import {Dimensions} from "react-native";
import Size from "../theme/Size";
import Spacer from "../components/ui/Spacer";

const height = Dimensions.get("window").height;

const ingredients = ["soy sauce", "water", "brown sugar", "ground ginger", "minced garlic", "cornstarch", "chicken breasts", "stir-fry vegetables", "brown rice"]

function MealDetail({navigation}) {
    return (
        <ScrollView style={styles.container}>
            <ImageBackground style={styles.recipeImage} resizeMode="cover"
                             source={{uri: "https://www.themealdb.com/images/media/meals/1548772327.jpg"}}>
                <View style={styles.navBarContainer}>
                    <TouchableHighlight underlayColor={Colors.ringInner} style={styles.backButtonContainer}
                                        onPress={() => {
                                            navigation.goBack()
                                        }}>
                        <ArrowLeftIcon size={15} color={Colors.black}/>
                    </TouchableHighlight>

                    <TouchableHighlight style={styles.favoriteContainer} onPress={() => {
                        navigation.goBack()
                    }}>
                        <HeartIcon size={15} color={Colors.black}/>
                    </TouchableHighlight>

                </View>
            </ImageBackground>

            <View style={styles.mealInfoContainer}>
                <View style={styles.separatorContainer}>
                    <View style={styles.separator}/>
                </View>

                <View style={styles.justifyBetween}>
                    <View style={{flex: 1}}>
                        <Text style={styles.recipeTitleText}>Crepes with Honey and Testing the width </Text>
                        <Text style={styles.infoText}>Western</Text>
                    </View>

                    <View style={styles.ratingContainer}>
                        <StarIcon size={15} color={Colors.black}/>
                        <Text>4.5</Text>
                    </View>
                </View>
                <Spacer height={15}/>
                <View style={[Layout.flexRow, Layout.justifyCenter]}>
                    <View style={styles.recipeInfoContainer}>
                        <View style={styles.iconContainer}>
                            <ClockIcon size={20} color={Colors.black}/>
                        </View>
                        <Text>35</Text>
                        <Text>Mins</Text>
                    </View>
                    <Spacer width={15}/>

                    <View style={styles.recipeInfoContainer}>
                        <View style={styles.iconContainer}>
                            <ClockIcon size={20} color={Colors.black}/>
                        </View>
                        <Text>35</Text>
                        <Text>Mins</Text>
                    </View>
                    <Spacer width={15}/>

                    <View style={styles.recipeInfoContainer}>
                        <View style={styles.iconContainer}>
                            <ClockIcon size={20} color={Colors.black}/>
                        </View>
                        <Text>35</Text>
                        <Text>Mins</Text>
                    </View>
                    <Spacer width={15}/>

                    <View style={styles.recipeInfoContainer}>
                        <View style={styles.iconContainer}>
                            <ClockIcon size={20} color={Colors.black}/>
                        </View>
                        <Text>35</Text>
                        <Text>Mins</Text>
                    </View>

                </View>
                <Spacer height={15}/>
                <Text style={styles.sectionLabel}>Ingredients</Text>

                {
                    ingredients.map((ingredient, index) => (
                        <View style={[Layout.flexRow, Layout.alignCenter]}>
                            <View style={styles.yellowDot}/>
                            <Spacer width={10}/>
                            <Text>{ingredient}</Text>
                            <Spacer height={10}/>
                        </View>
                    ))
                }


                <Text style={styles.sectionLabel}>Direction</Text>

                <View style={[Layout.flexRow]}>
                    <View style={styles.yellowDot}/>
                    <Spacer width={10}/>
                    <Text>Preheat oven to 350° F. Spray a 9x13-inch baking pan with non-stick spray.\r\nCombine soy
                        sauce, ½ cup water, brown sugar, ginger and garlic in a small saucepan and cover. Bring to a
                        boil over medium heat. Remove lid and cook for one minute once boiling.\r\nMeanwhile, stir
                        together the corn starch and 2 tablespoons of water in a separate dish until smooth. Once sauce
                        is boiling, add mixture to the saucepan and stir to combine. Cook until the sauce starts to
                        thicken then remove from heat.\r\nPlace the chicken breasts in the prepared pan. Pour one cup of
                        the sauce over top of chicken. Place chicken in oven and bake 35 minutes or until cooked
                        through. Remove from oven and shred chicken in the dish using two forks.\r\n*Meanwhile, steam or
                        cook the vegetables according to package directions.\r\nAdd the cooked vegetables and rice to
                        the casserole dish with the chicken. Add most of the remaining sauce, reserving a bit to drizzle
                        over the top when serving. Gently toss everything together in the casserole dish until combined.
                        Return to oven and cook 15 minutes. Remove from oven and let stand 5 minutes before serving.
                        Drizzle each serving with remaining sauce. Enjoy!</Text>
                </View>
            </View>

        </ScrollView>
    )
}

export default MealDetail

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white
    },

    justifyBetween: {
        flexDirection: "row",
        // justifyContent : "space-between",
        //
        alignItems: "flex-start"
    },

    navBarContainer: {
        paddingHorizontal: 20,
        paddingTop: 15,
        flexDirection: "row",
        justifyContent: "space-between",

    },

    favoriteContainer: {
        borderRadius: 99,
        padding: 15,
        backgroundColor: Colors.whiteLight
    },

    backButtonContainer: {
        borderRadius: 99,
        padding: 15,
        backgroundColor: Colors.yellowBackground
    },

    recipeImage: {
        height: height / 2 - 70
    },

    mealInfoContainer: {
        backgroundColor: Colors.white,
        marginTop: -25,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingHorizontal: 20,
        flex: 1

    },

    separator: {width: 50, height: 5, backgroundColor: Colors.black, borderRadius: 10},

    separatorContainer: {flexDirection: "row", alignItems: "center", justifyContent: "center", height: 50},

    recipeTitleText: {
        fontSize: Size["4xl"]
    },

    infoText: {
        fontSize: Size.md,
        color: Colors.textGray
    },
    ratingContainer: {
        backgroundColor: Colors.ringInner,
        borderRadius: 99,
        paddingHorizontal: 15,
        paddingVertical: 10,
        flexDirection: "row",
        alignItems: "center"
    },

    iconContainer: {
        backgroundColor: Colors.white,
        borderRadius: 99,
        padding: 10
    },

    recipeInfoContainer: {
        backgroundColor: Colors.splashBackground,
        borderRadius: 99,
        paddingHorizontal: 10,
        paddingBottom: 20,
        paddingTop: 10,
        alignItems: "center"
    },

    sectionLabel: {
        marginVertical: 15,
        fontWeight: "bold",
        fontSize: Size.lg
    },
    yellowDot: {
        backgroundColor: Colors.splashBackground,
        width: 10,
        height: 10,
        borderRadius: 10
    }
})
