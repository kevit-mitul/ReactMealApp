import {Image, Pressable, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View} from "react-native";
import Size from "../../theme/Size";
import {Colors} from "../../theme/Colors";
import {CategoryItemType} from "../../types/CategoryItem.type";



type CategoryListItemProps =  {
    item?: CategoryItemType,
    selectedCategory?: CategoryItemType,
    onSelect?: (item : CategoryItemType) => void
}

export default function CategoryListItem({ item, onSelect, selectedCategory}: CategoryListItemProps) {

    return (
        <View style={styles.container}>
            <TouchableHighlight
                underlayColor={Colors.ringOuter}
                style={[styles.imageContainer, item.strCategory === selectedCategory?.strCategory && {backgroundColor: Colors.splashBackground}]}
                onPress={() => onSelect(item)}
            >
                <Image style={styles.image} source={{
                    uri: item.strCategoryThumb
                }}/>
            </TouchableHighlight>

            <Text style={styles.text}>{item.strCategory}</Text>
        </View>
    )


}

const styles = StyleSheet.create({
    container: {
        alignItems: "center"
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 50
    },
    imageContainer: {
        padding: 3,
        borderRadius: 99
    },
    text: {
        marginTop: 10,
        fontSize: Size.md,

    }
})
