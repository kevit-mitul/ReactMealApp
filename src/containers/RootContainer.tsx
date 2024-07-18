import {ReactNode} from "react";
import {SafeAreaView, StyleSheet} from "react-native";
import {Layout} from "../theme/GlobalStyle";

function RootContainer({children}: {children: ReactNode}) {
    return <SafeAreaView style={Layout.container}>
        {children}
    </SafeAreaView>
}

export default RootContainer

