import {View, StyleSheet, TouchableHighlight, ImageBackground} from 'react-native'
import {Colors} from "../../theme/Colors";
import {ArrowLeftIcon, HeartIcon} from "react-native-heroicons/solid";
import {Dimensions} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {ms} from "../../utils/Scaling";
const height = Dimensions.get("window").height;

type TopBarProps = {
    mealData : MealDetailType
}

function TopBar({mealData} : TopBarProps) {

    const navigation = useNavigation();

    return (
        <ImageBackground style={styles.recipeImage} resizeMode="cover"
                         source={{uri: mealData?.strMealThumb}}>
            <View style={styles.navBarContainer}>
                <TouchableHighlight underlayColor={Colors.ringInner} style={styles.backButtonContainer}
                                    onPress={() => {
                                        navigation.goBack()
                                    }}>
                    <ArrowLeftIcon size={ms(15)} color={Colors.black}/>
                </TouchableHighlight>

                <TouchableHighlight style={styles.favoriteContainer} onPress={() => {
                    navigation.goBack()
                }}>
                    <HeartIcon size={15} color={Colors.black}/>
                </TouchableHighlight>

            </View>
        </ImageBackground >
    );
}

export default TopBar;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    recipeImage: {
        height: height / 2 - 70
    },

    backButtonContainer: {
        borderRadius: 99,
        padding: 15,
        backgroundColor: Colors.yellowBackground
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
})
