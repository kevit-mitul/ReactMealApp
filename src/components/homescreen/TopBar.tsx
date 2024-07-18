import {View, StyleSheet, Image} from 'react-native'
import {Layout} from "../../theme/GlobalStyle";
import {ArrowPathIcon, BellIcon} from "react-native-heroicons/outline";
import {Colors} from "../../theme/Colors";
import Spacer from "../ui/Spacer";

function TopBar({navigation}) {
    return (
        <View style={styles.topBarContainer}>
            <View style={styles.userImageContainer}>
                <Image style={styles.userImage} source={require("../../../assets/user.png")}/>
            </View>

            <View style={Layout.flexRow}>
                <ArrowPathIcon size={30} color={Colors.textGray} onPress={()=>navigation.navigate("Splash")}/>
                <Spacer width={12}/>
                <BellIcon size={30} color={Colors.textGray}/>

            </View>
        </View>
    );
}

export default TopBar;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    topBarContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },

    userImage: {
        width: 35,
        height: 35,
        borderRadius: 25
    },

    userImageContainer : {
        borderRadius : 99,
        padding:5,
        shadowColor: 'white',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 6,
        elevation: 2,

    }
})
