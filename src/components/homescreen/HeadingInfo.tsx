import {View, StyleSheet, Text} from 'react-native'
import {Colors} from "../../theme/Colors";
import Size from "../../theme/Size";

type HeadingInfoProps = {
    line1?: string
    line2?: string,
    highlight?: string,
}

function HeadingInfo({line1 = "", line2 = "", highlight = ""}: HeadingInfoProps) {
    return (
        <>
            { highlight && <Text style={styles.title}> Hello, Mitul</Text> }
            { line1 && <Text style={styles.headingText}>{line1}</Text> }
            { line2 && <Text style={styles.headingText}>{line2}<Text style={styles.subHeadingText}>{highlight}</Text></Text>}


        </>
    );
}

export default HeadingInfo;

const styles = StyleSheet.create({
    title: {
        color: Colors.textGray,
        fontSize: Size.sm,
        marginVertical: 10
    },

    sectionTitle: {
        marginVertical: 15,
        color: Colors.heading,
        fontSize: Size["3xl"],
        fontWeight: "bold"
    },

    headingText: {
        color: Colors.heading,
        fontSize: Size["3xl"],
        fontWeight: "bold"
    },

    subHeadingText: {
        color: Colors.splashBackground,
    },
})
