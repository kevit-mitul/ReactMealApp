import {View, StyleSheet, Text} from 'react-native'
import {getIngredients} from "../../utils/utils";
import {Layout} from "../../theme/GlobalStyle";
import Spacer from "../ui/Spacer";
import Size from "../../theme/Size";
import {Colors} from "../../theme/Colors";

type IngredientProps = {
    mealData : MealDetailType
}

function Ingredients({mealData } : IngredientProps) {
    return (
        <>
            <Text style={styles.sectionLabel}>Ingredients</Text>

            {
                getIngredients(mealData).map((ingredient, index) => (
                    <View style={[Layout.flexRow, Layout.alignCenter]} key={index}>
                        <View style={styles.yellowDot}/>
                        <Spacer width={10}/>
                        <Text>{ingredient}</Text>
                        <Spacer height={10}/>
                    </View>
                ))
            }
        </>

    );
}

export default Ingredients;

const styles = StyleSheet.create({
    container: {
        flex: 1
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
        borderRadius: 10,
        marginTop : 5
    },
})
