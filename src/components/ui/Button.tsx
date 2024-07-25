import {View, StyleSheet, Text, TouchableOpacity, ActivityIndicator} from 'react-native'
import {Colors} from "../../theme/Colors";

type ButtonProps = {
    label?: string,
    onPress?: () => void,
    loading? : boolean
}

function Button({label, onPress, loading = false} : ButtonProps) {
    return (
        <TouchableOpacity activeOpacity={0.7} style={styles.container} onPress={onPress}>
            { loading ? <ActivityIndicator color={Colors.white} size="small"/> :  <Text style={styles.label}>{label}</Text> }

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
