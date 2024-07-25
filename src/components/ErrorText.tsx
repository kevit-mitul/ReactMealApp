import {View, StyleSheet, Text} from 'react-native'

type ErrorTextProps = {
    message: string
}

function ErrorText({message} :ErrorTextProps) {
    return (
        <View style={styles.container}>
            <Text>{message}</Text>
        </View>
    );
}

export default ErrorText;

const styles = StyleSheet.create({
    container: {
        width : "100%",
        justifyContent: "center",
        alignItems: "center",
        height : 120

    }
})
