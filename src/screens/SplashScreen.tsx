import {Image, StyleSheet, Text, View} from "react-native";
import {Layout} from "../theme/GlobalStyle";
import {Colors} from "../theme/Colors";
import Size from "../theme/Size";
import Animated, {useSharedValue, withSpring, FadeInDown} from 'react-native-reanimated';
import {useEffect} from "react";
import {StatusBar} from "expo-status-bar";
function SplashScreen({navigation}) {

    const outerRingPadding = useSharedValue(0);
    const innerRingPadding = useSharedValue(0);

    useEffect(() => {
        outerRingPadding.value = 0
        innerRingPadding.value = 0
        setTimeout(() => outerRingPadding.value = withSpring(outerRingPadding.value + 50), 200)
        setTimeout(() => innerRingPadding.value = withSpring(outerRingPadding.value + 30), 100)
        setTimeout(() => navigation.navigate("Home"), 2000)
    }, []);

    return <View style={styles.container}>
        <StatusBar backgroundColor={Colors.splashBackground} />
        <Animated.View style={[styles.ringOuter, {padding: outerRingPadding}]}>
            <Animated.View style={[styles.ringInner, {padding: innerRingPadding}]}>
                <Image style={styles.logo} source={require("../../assets/logo.png")}/>
            </Animated.View>
        </Animated.View>
        <View style={styles.textContainer}>
            <Text style={styles.title}>Foody</Text>
            <Text style={styles.subtitle}>Food is Always right</Text>
        </View>

    </View>
}

export default SplashScreen

const styles = StyleSheet.create({
    container: {
        ...Layout.container,
        backgroundColor: Colors.splashBackground,
        alignItems: "center",
        justifyContent: "center"
    },

    logo: {
        height: 150,
        width: 150,
        backgroundColor: "transparent"
    },

    title: {
        fontSize: Size["7xl"],
        color: Colors.white,
        fontWeight: "bold"
    },
    subtitle: {
        marginHorizontal: 12,
        fontSize: Size.md,
        color: Colors.white
    },
    textContainer: {
        marginTop: 15,
        alignItems: "center"
    },
    ringInner: {
        backgroundColor: Colors.ringInner,
        borderRadius: 999
    },
    ringOuter: {
        backgroundColor: Colors.ringOuter,
        borderRadius: 999
    }
})
