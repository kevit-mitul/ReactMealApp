import {Image, Pressable, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View} from "react-native";
import Size from "../../theme/Size";
import {Colors} from "../../theme/Colors";
import {CategoryItemType} from "../../types/CategoryItem.type";


type CategoryListItemProps = {
    item?: CategoryItemType,
    selectedCategory?: CategoryItemType,
    onSelect?: (item: CategoryItemType) => void
}

export default function CategoryListItem({item, onSelect, selectedCategory}: CategoryListItemProps) {

    return (
        <TouchableHighlight
            style={[styles.container, item.strCategory === selectedCategory?.strCategory && {backgroundColor: Colors.splashBackground}]}
            underlayColor={Colors.ringOuter}
            onPress={() => onSelect(item)}
        >
            <View style={styles.imageContainer}>

                <Image style={styles.image} source={{
                    uri: item.strCategoryThumb
                }}/>


                <Text style={styles.text}>{item.strCategory}</Text>
            </View>
        </TouchableHighlight>
    )


}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        borderRadius: 70,
        paddingBottom: 25
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 50
    },
    imageContainer: {
        padding: 3,
        borderRadius: 99,
        alignItems : "center"
    },
    text: {
        marginTop: 10,
        fontSize: Size.md,

    }
})
