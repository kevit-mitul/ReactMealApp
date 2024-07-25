import {View, StyleSheet, Text} from 'react-native'
import {Colors} from "../theme/Colors";

type EmptyListTextProps = {
    text : string
}

function EmptyListText({text}: EmptyListTextProps) {
    return (
        <View style={styles.container}>
            <Text style={styles.textLabel}>{text}</Text>

        </View>
    );
}

export default EmptyListText;

const styles = StyleSheet.create({
    container: {
        flex : 1,
        alignItems :"center",
        justifyContent:"center",
        height : 120

    },
    textLabel : {
        fontSize: 16,
        color : Colors.textGray

    }
})
