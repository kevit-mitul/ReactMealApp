import {StyleSheet, View} from "react-native";

type SpacerProps = {
    width?: number | string,
    height?: number | string,
}

export default function Spacer({width = 0, height = 0}: SpacerProps) {
        return <View style={{height:height, width:width}}></View>
}

const styles = StyleSheet.create({

})

