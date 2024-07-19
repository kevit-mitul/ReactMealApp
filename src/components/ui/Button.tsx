import {View, StyleSheet, Text, TouchableOpacity} from 'react-native'
import {Colors} from "../../theme/Colors";

type ButtonProps = {
    label?: string,
    onPress?: () => void,
}

function Button({label, onPress} : ButtonProps) {
    return (
        <TouchableOpacity activeOpacity={0.7} style={styles.container} onPress={onPress}>
            <Text style={styles.label}>{label}</Text>
        </TouchableOpacity>
    );
}

export default Button;

const styles = StyleSheet.create({
    container: {
        backgroundColor : Colors.splashBackground,
        width : "100%",
        textAlign : "center",
        padding : 12,
        borderRadius : 99

    },
    label : {
        textAlign : "center",
        color : Colors.white,
        fontWeight : "bold"
    }
})
