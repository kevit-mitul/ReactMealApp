import { Animated, StyleSheet, Text } from "react-native";
import {Layout} from "../theme/GlobalStyle";
import {Colors} from "../theme/Colors";
import Size from "../theme/Size";
import CategoryList from "../components/homescreen/CategoryList";
import ScrollView = Animated.ScrollView;
import MealsList from "../components/homescreen/MealsList";
import {useEffect, useState} from "react";
import APIManager from "../api/APIManager";
import {CATDATA, MEALDATA} from "../data";
import {CategoryItemType} from "../types/CategoryItem.type";
import {MealItemType} from "../types/MealItemType";
import SearchMeal from "../components/homescreen/SearchMeal";
import TopBar from "../components/homescreen/TopBar";
import HeadingInfo from "../components/homescreen/HeadingInfo";
import {useDispatch} from "react-redux";
import {setCategoryList, useCategorySlice} from "../store/slices/categorySlice";


function HomeScreen({navigation}) {

    const dispatch = useDispatch();


    const getCategories = () => {
        APIManager.getCategories().then(data=> {
            dispatch(setCategoryList(data?.data?.categories));

        });
    }


    useEffect(()=> {
        getCategories()
            // dispatch(setCategoryList(CATDATA.categories))

    },[])



    return  (
        <ScrollView style={styles.container}>
                <TopBar navigation={navigation} />
                <HeadingInfo/>
                <SearchMeal/>
                <CategoryList />
                <Text style={styles.sectionTitle}>Popular recipe</Text>
                <MealsList />
        </ScrollView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        ...Layout.container,
        paddingHorizontal: 20,
        backgroundColor : Colors.white
    },
    sectionTitle : {
        marginVertical:15,
        color :Colors.heading,
        fontSize : Size["3xl"],
        fontWeight: "bold"
    },
})
