import {
    Animated,
    Image,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from "react-native";
import {Layout} from "../theme/GlobalStyle";
import {BellIcon, MagnifyingGlassIcon, ArrowPathIcon} from "react-native-heroicons/outline";
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
import Spacer from "../components/ui/Spacer";
import SearchMeal from "../components/homescreen/SearchMeal";
import TopBar from "../components/homescreen/TopBar";
import HeadingInfo from "../components/homescreen/HeadingInfo";

function HomeScreen({navigation}) {

    const [categories, setCategories] = useState<CategoryItemType[]>([]);
    const [meals, setMeals] = useState<MealItemType[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<CategoryItemType>(null)

    const getCategories = () => {
        APIManager.getCategories().then(data=> {
            setCategories(data.data.categories)
        });
    }
    const getMeals = (category) => {
        APIManager.getMeals(category).then(data=> {
            setMeals(data.data.meals.slice(0,12))
        });
    }

    useEffect(()=> {
        // getCategories()
           setCategories(CATDATA.categories)
    },[])

    useEffect(() => {
        if(selectedCategory){
            setMeals([])
            // getMeals(selectedCategory.strCategory)
            setMeals(MEALDATA)
        }
    }, [selectedCategory]);

    return  (
        <ScrollView style={styles.container}>


                <TopBar navigation={navigation} />
                <HeadingInfo/>
                <SearchMeal/>
                <CategoryList categories={categories} selectedCategory={selectedCategory} onCategoryChange={setSelectedCategory} />
                <Text style={styles.sectionTitle}>Popular recipe</Text>
                { meals && meals.length > 0 && <MealsList meals={meals} /> }

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
