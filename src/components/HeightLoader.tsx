import React from 'react';
import {ActivityIndicator, StyleSheet, View} from "react-native";

type HeightLoaderProps = {
    size? : number
}

const Loader = ({size} : HeightLoaderProps) => {
    return (
        <View style={styles.container}>
            <ActivityIndicator size={"large"} color="black" />
        </View>
    );
};

export default Loader;

const styles = StyleSheet.create({
    container: {
        height : 150,
        width : "100%",
        justifyContent: "center",
        alignItems: "center",
    }
})
