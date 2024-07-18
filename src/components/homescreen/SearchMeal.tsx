import {View, StyleSheet, TextInput, TouchableOpacity} from 'react-native'
import {MagnifyingGlassIcon} from "react-native-heroicons/outline";
import {Colors} from "../../theme/Colors";

function SearchMeal(props) {
    return (
        <View style={styles.searchContainer}>
            <TextInput placeholder={"Search your meal..."}  style={styles.searchInput}/>

            <TouchableOpacity style={styles.searchButton}>
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
