import {StyleSheet, Platform, StatusBar} from "react-native";
import Size from "./Size";


export const Layout = StyleSheet.create({
    container: {
        flex:1,
        paddingTop:Platform.OS == "android" ? StatusBar.currentHeight : 0,
    },
    titleText : {
        fontSize : Size.lg
    },
    titleTextBold : {
        fontSize : Size.lg,
        fontWeight : "bold"
    },
    text : {
        fontSize : Size.md
    },
    subtitleText : {
        fontSize : Size.sm
    },

})

