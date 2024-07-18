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
import {BellIcon, MagnifyingGlassIcon} from "react-native-heroicons/outline";
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
import {useQuery} from "@tanstack/react-query";

function HomeScreen() {

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

            <View >
                <View style={styles.topBarContainer}>
                    <Image style={styles.userImage} source={require("../../assets/user.png")}/>
                    <BellIcon size={30} color={Colors.textGray}/>
                </View>
                <Text style={styles.title}> Hello, Mitul</Text>
                <Text style={styles.headingText}>Make your own food,</Text>
                <Text style={styles.headingText}>stay at <Text style={styles.subHeadingText}>Home</Text></Text>

                <View style={styles.searchContainer}>
                    <TextInput placeholder={"Search your meal..."}  style={styles.searchInput}/>

                    <TouchableOpacity style={styles.searchButton}>
                        <MagnifyingGlassIcon  size={20} color={Colors.textGray}  />
                    </TouchableOpacity>

                </View>


                <CategoryList categories={categories} selectedCategory={selectedCategory} onCategoryChange={setSelectedCategory} />
                <Text style={styles.sectionTitle}>Popular recipe</Text>
                { meals && meals.length > 0 && <MealsList meals={meals} /> }
            </View>
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

    topBarContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },

    userImage: {
        width: 35,
        height: 35,
        borderRadius: 25
    },

    title : {
        color:Colors.textGray,
        fontSize:Size.sm,
        marginVertical:10
    },

    sectionTitle : {
        marginVertical:15,
        color :Colors.heading,
        fontSize : Size["3xl"],
        fontWeight: "bold"
    },

    headingText : {
        color :Colors.heading,
        fontSize : Size["3xl"],
        fontWeight: "bold"
    },

    subHeadingText : {
        color : Colors.splashBackground,
    },

    searchContainer : {
        marginVertical:20,
        paddingHorizontal:15,
        backgroundColor : Colors.bgGray,
        borderRadius : 99,
        alignItems : "center",
        flexDirection: "row"
    },

    searchInput : {
        padding : 12,
        flex : 1
    },
    searchButton : {
       backgroundColor : Colors.white,
       borderRadius : 99,
        padding : 8
    }

})
