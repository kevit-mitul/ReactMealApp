import {Animated, StyleSheet, Text} from "react-native";
import {Layout} from "../theme/GlobalStyle";
import {Colors} from "../theme/Colors";
import Size from "../theme/Size";
import CategoryList from "../components/homescreen/CategoryList";
import ScrollView = Animated.ScrollView;
import MealsList from "../components/homescreen/MealsList";
import {useEffect} from "react";
import APIManager from "../api/APIManager";
import SearchMeal from "../components/homescreen/SearchMeal";
import TopBar from "../components/homescreen/TopBar";
import HeadingInfo from "../components/homescreen/HeadingInfo";
import {getCategories, useCategorySlice} from "../store/slices/categorySlice";
import {StatusBar} from "expo-status-bar";
import {useAppDispatch} from "../store/store";

function HomeScreen({navigation}) {

    const dispatch = useAppDispatch();

     useEffect(() => {
        dispatch(getCategories())
    }, [])


    return (
        <>
            <StatusBar backgroundColor={Colors.white}/>
            <ScrollView style={styles.container}>
                <TopBar navigation={navigation}/>
                <HeadingInfo/>
                <SearchMeal/>
                <CategoryList/>
                <Text style={styles.sectionTitle}>Popular recipe</Text>
                <MealsList/>
            </ScrollView>
        </>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        ...Layout.container,
        paddingHorizontal: 20,
        backgroundColor: Colors.white
    },
    sectionTitle: {
        marginVertical: 15,
        color: Colors.heading,
        fontSize: Size["3xl"],
        fontWeight: "bold"
    },
})
