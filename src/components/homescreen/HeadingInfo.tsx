import {View, StyleSheet, Text} from 'react-native'
import {Colors} from "../../theme/Colors";
import Size from "../../theme/Size";

type HeadingInfoProps = {
    line1? : string
    line2? : string,
    highlight? : string,
}

function HeadingInfo({line1 = "Make your own food,", line2 ="stay at ", highlight = "Home"} : HeadingInfoProps) {
    return (
        <>
        <Text style={styles.title}> Hello, Mitul</Text>
    <Text style={styles.headingText}>{line1}</Text>
    <Text style={styles.headingText}>{line2}<Text style={styles.subHeadingText}>{highlight}</Text></Text>
        </>
    );
}

export default HeadingInfo;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    title : {
        color:Colors.textGray,
        fontSize:Size.sm,
        marginVertical:10
    },

    sectionTitle : {
        marginVertical:15,
        color :Colors.heading,
        fontSize : Size["3xl"],
        fontWeight: "bold"
    },

    headingText : {
        color :Colors.heading,
        fontSize : Size["3xl"],
        fontWeight: "bold"
    },

    subHeadingText : {
        color : Colors.splashBackground,
    },
})
