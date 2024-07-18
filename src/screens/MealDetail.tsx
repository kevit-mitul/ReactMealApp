import {

    Alert,
    ImageBackground,
    ScrollView,
    StyleSheet,
    Text,
    TouchableHighlight,
    View
} from "react-native";
import {Layout} from "../theme/GlobalStyle";
import {ArrowLeftIcon, HeartIcon} from 'react-native-heroicons/solid'
import {Colors} from "../theme/Colors";
import {Dimensions} from "react-native";
import Size from "../theme/Size";
import Spacer from "../components/ui/Spacer";
import {useEffect, useState} from "react";
import APIManager from "../api/APIManager";
import useMealDetails from "../api/hooks/useMealDetails";
import Loader from "../components/Loader";
import Ingredients from "../components/mealdetailscreen/Ingredients";
import YoutubeButton from "../components/mealdetailscreen/YoutubeButton";
import MealInfo from "../components/mealdetailscreen/MealInfo";
import TopBar from "../components/mealdetailscreen/TopBar";


const height = Dimensions.get("window").height;


function MealDetail({navigation, route}) {

    const {mealId } = route.params
    const [mealData, setMealData] = useState<MealDetailType>({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if(mealId){
            setLoading(true)
            APIManager.getMealDetails(mealId).then(data => setMealData(data?.data?.meals[0])).catch(error=>
            Alert.alert(error)).finally(() => setLoading(false))
        }

    }, [mealId]);




    if(loading)
        return <Loader/>


    return (
        <ScrollView style={styles.container}>

            <TopBar mealData={mealData}/>

            <View style={styles.mealInfoContainer}>
                <MealInfo mealData={mealData} />
                <Ingredients mealData={mealData}/>
                <Text style={styles.sectionLabel}>Direction</Text>
                <View style={[Layout.flexRow]}>
                    <View style={styles.yellowDot}/>
                    <Spacer width={10}/>
                    <Text>{mealData.strInstructions}</Text>
                </View>
                <Spacer height={30}/>
                <YoutubeButton url={mealData.strYoutube} />

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


    mealInfoContainer: {
        backgroundColor: Colors.white,
        marginTop: -25,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingHorizontal: 20,
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
