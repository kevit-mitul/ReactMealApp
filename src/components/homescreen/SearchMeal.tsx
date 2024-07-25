import {View, StyleSheet, TextInput, TouchableOpacity} from 'react-native'
import {MagnifyingGlassIcon} from "react-native-heroicons/outline";
import {Colors} from "../../theme/Colors";
import APIManager from "../../api/APIManager";
import {useState} from "react";

function SearchMeal(props) {

    const [searchText, setSearchText] = useState( "")

    const searchMeals = () => {

        if(searchText){
            APIManager.searchMeals("Arrabiata").then(data=> {
                // setMeals(data?.data?.meals?.slice(0,12))
                console.log(data.data)
            });
        }



    }

    return (
        <View style={styles.searchContainer}>
            <TextInput placeholder={"Search your meal..."}  style={styles.searchInput}/>

            <TouchableOpacity style={styles.searchButton} onPress={searchMeals}>
                <MagnifyingGlassIcon  size={20} color={Colors.textGray}  />
            </TouchableOpacity>

        </View>
    );
}

export default SearchMeal;

const styles = StyleSheet.create({
    container: {
        flex: 1
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
