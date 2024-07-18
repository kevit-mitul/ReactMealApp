import {View, StyleSheet, Text} from 'react-native'
import {Colors} from "../../theme/Colors";
import Size from "../../theme/Size";

function HeadingInfo(props) {
    return (
        <>
        <Text style={styles.title}> Hello, Mitul</Text>
    <Text style={styles.headingText}>Make your own food,</Text>
    <Text style={styles.headingText}>stay at <Text style={styles.subHeadingText}>Home</Text></Text>
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
