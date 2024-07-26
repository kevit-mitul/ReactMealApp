import {View, StyleSheet, Image, TouchableOpacity} from 'react-native'
import {Layout} from "../../theme/GlobalStyle";
import {ArrowPathIcon, BellIcon} from "react-native-heroicons/outline";
import {Colors} from "../../theme/Colors";
import Spacer from "../ui/Spacer";
import {useNavigation} from "@react-navigation/native";
import {ms} from "../../utils/Scaling";

function TopBar({navigation}) {
    const navigate = useNavigation();

    const handleNotificationClick = () =>{
        navigation.navigate("Notification");
    }

    const handleReloadClick = () => {
        navigation.navigate("UserProfile");
    }

    return (
        <View style={styles.topBarContainer}>
            <TouchableOpacity style={styles.userImageContainer} onPress={handleReloadClick}>
                <Image style={styles.userImage} source={require("../../../assets/user.png")}/>
            </TouchableOpacity>

            <View style={Layout.flexRow}>
                <ArrowPathIcon size={30} color={Colors.textGray} onPress={()=>navigation.push("Splash")}/>
                <Spacer width={12}/>
                <TouchableOpacity onPress={handleNotificationClick}>
                    <BellIcon size={30} color={Colors.textGray}/>
                </TouchableOpacity>

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
        width: ms(35),
        height: ms(35),
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
