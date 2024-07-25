import {View, StyleSheet, Text, TouchableOpacity, ScrollView, FlatList} from 'react-native'
import {ArrowLeftIcon} from "react-native-heroicons/solid";
import {Colors} from "../theme/Colors";
import HeadingInfo from "../components/homescreen/HeadingInfo";
import UserForm from "../components/userprofilescreen/UserForm";
import Spacer from "../components/ui/Spacer";
import {Layout} from "../theme/GlobalStyle";

const data = ["1","2","3","4","5","6","7","8","9"];

function NotificationScreen({navigation}) {
    const handleBackPress = () => {
        navigation.goBack()
    }

    return (
        <View style={styles.container}>
            <View style={styles.topBarContainer}>
                <TouchableOpacity style={styles.backIconContainer} onPress={handleBackPress}>
                    <ArrowLeftIcon size={25} color={Colors.textGray800}/>
                </TouchableOpacity>
            </View>
            <ScrollView style={styles.scrollContainer}>
                <HeadingInfo line1="Nofications"/>

                {/*<FlatList data={data} renderItem={ () => {} } />*/}

            </ScrollView>
        </View>
    );
}

export default NotificationScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.white,
        flex: 1
    },
    topBarContainer: {
        flexDirection: "row",
        shadowColor: 'black',
    },
    backIconContainer: {
        padding: 12,
    },
    scrollContainer: {
        ...Layout.container,
        paddingHorizontal: 20,
        backgroundColor: Colors.white,
    },
})
