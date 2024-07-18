import {View, StyleSheet, Text} from 'react-native'
import Spacer from "../ui/Spacer";
import {ClockIcon, StarIcon} from "react-native-heroicons/solid";
import {Colors} from "../../theme/Colors";
import {Layout} from "../../theme/GlobalStyle";
import Size from "../../theme/Size";

type MealInfoProps = {
    mealData : MealDetailType
}

function MealInfo({mealData} : MealInfoProps) {
    return (
       <>
           <View style={styles.separatorContainer}>
               <View style={styles.separator}/>
           </View>

           <View style={styles.justifyBetween}>
               <View style={{flex: 1}}>
                   <Text style={styles.recipeTitleText}>{mealData.strMeal} </Text>
                   <Spacer width={15}/>
                   <Text style={styles.infoText}>{mealData.strTags}</Text>
               </View>

               <View style={styles.ratingContainer}>
                   <StarIcon size={15} color={Colors.black}/>
                   <Spacer width={5}/>
                   <Text>4.5</Text>
               </View>
           </View>
           <Spacer height={15}/>
           <View style={[Layout.flexRow, Layout.justifyCenter]}>
               <View style={styles.recipeInfoContainer}>
                   <View style={styles.iconContainer}>
                       <ClockIcon size={20} color={Colors.black}/>
                   </View>
                   <Spacer height={10}/>
                   <Text>35</Text>
                   <Text>Mins</Text>
               </View>
               <Spacer width={15}/>

               <View style={styles.recipeInfoContainer}>
                   <View style={styles.iconContainer}>
                       <ClockIcon size={20} color={Colors.black}/>
                   </View>
                   <Spacer height={10}/>
                   <Text>35</Text>
                   <Text>Mins</Text>
               </View>
               <Spacer width={15}/>

               <View style={styles.recipeInfoContainer}>
                   <View style={styles.iconContainer}>
                       <ClockIcon size={20} color={Colors.black}/>
                   </View>
                   <Spacer height={10}/>
                   <Text>35</Text>
                   <Text>Mins</Text>
               </View>
               <Spacer width={15}/>

               <View style={styles.recipeInfoContainer}>
                   <View style={styles.iconContainer}>
                       <ClockIcon size={20} color={Colors.black}/>
                   </View>
                   <Spacer height={10}/>
                   <Text>35</Text>
                   <Text>Mins</Text>
               </View>

           </View>
           <Spacer height={15}/>
       </>
    );
}

export default MealInfo;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    separator: {width: 50, height: 5, backgroundColor: Colors.black, borderRadius: 10},

    separatorContainer: {flexDirection: "row", alignItems: "center", justifyContent: "center", height: 50},

    justifyBetween: {
        flexDirection: "row",
        alignItems: "flex-start"
    },

    recipeInfoContainer: {
        backgroundColor: Colors.splashBackground,
        borderRadius: 99,
        paddingHorizontal: 10,
        paddingBottom: 20,
        paddingTop: 10,
        alignItems: "center"
    },

    iconContainer: {
        backgroundColor: Colors.white,
        borderRadius: 99,
        padding: 10
    },

    ratingContainer: {
        backgroundColor: Colors.ringInner,
        borderRadius: 99,
        paddingHorizontal: 15,
        paddingVertical: 10,
        flexDirection: "row",
        alignItems: "center"
    },

    recipeTitleText: {
        fontSize: Size["4xl"]
    },

    infoText: {
        fontSize: Size.md,
        color: Colors.textGray
    },

})
